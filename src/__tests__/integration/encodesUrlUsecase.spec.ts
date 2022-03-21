import request from "supertest";
import { app } from './../../app'
import EncodesUrlUseCase from "../../Domain/UrlShortner/UseCases/EncodesUrlUseCase/EncodesUrlUseCase";
import EncodesUrlController from "../../Domain/UrlShortner/UseCases/EncodesUrlUseCase/EncodesUrlController";
import { SequelizeRepository } from "../../Domain/UrlShortner/repositories/implementations/SequelizeRepository";
import { ShortUrlModel } from "../../Domain/UrlShortner/models/ShortUrlModel";
import { db } from './../../database/configuration';

let sequelizeRepository: SequelizeRepository
let encodesUrlUseCase: EncodesUrlUseCase
let encodesUrlController: EncodesUrlController

describe("Shorts Url", () => {
  beforeEach(async() => {
    await db.sync({ force: true });
    sequelizeRepository = new SequelizeRepository(ShortUrlModel);
    encodesUrlUseCase = new EncodesUrlUseCase(sequelizeRepository)
    encodesUrlController = new EncodesUrlController(encodesUrlUseCase)
  });

  afterEach(async () => {
    return sequelizeRepository.clear();
  });

  it("Should be able to short a given url in tests database", async () => {
    const url = "https://stackoverflow.com/questions/71553537/how-to-find-nearest-nearest-place-by-lat-long-quickly";
    
    const response = await request(app)
      .post('/encode')
      .send({ url: url })

    expect(response.status).toBe(201)

    expect(response.body).toMatchObject({
      message: "Url Shortned",
      shortUrl: expect.stringMatching(/stackoverflow\.com\/([0-9a-f]+)/)
    });
  });

  it("Should shows 400 as status code for a invalid url", async () => {
    const url = "dasdsa";

    const response = await request(app)
      .post('/encode')
      .send({ url: url })

    expect(response.status).toBe(400)

  });
});