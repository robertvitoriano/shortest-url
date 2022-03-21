import DecodesUrlUseCase from "../../Domain/UrlShortner/UseCases/DecodesShortnedUrlUseCase/DecodesShortnedUrlUseCase";
import EncodesUrlUseCase from "../../Domain/UrlShortner/UseCases/EncodesUrlUseCase/EncodesUrlUseCase";

import { InMemoryRepository } from "../../Domain/UrlShortner/repositories/implementations/inMemoryRepository";

let inMemoryRepository:InMemoryRepository
let inMemoryDecodeUrlUseCase:DecodesUrlUseCase
let inMemoryEncodesUrlUseCase:EncodesUrlUseCase

describe("Shorts Url", () => {
  beforeEach(()=>{
     inMemoryRepository = new InMemoryRepository();
     inMemoryDecodeUrlUseCase = new DecodesUrlUseCase(inMemoryRepository)
     inMemoryEncodesUrlUseCase = new EncodesUrlUseCase(inMemoryRepository)

  });

  afterEach(() => {
    return inMemoryRepository.clear();
  });

  it("Should be able encode a previously encoded url", async () => {
    const url = "https://stackoverflow.com/questions/71553537/how-to-find-nearest-nearest-place-by-lat-long-quickly";
  
    const encodedUrl = await inMemoryEncodesUrlUseCase.execute(url);
    const savedShortUrl = await inMemoryRepository.findOne({shortUrl:encodedUrl});
    expect(savedShortUrl.shortUrl).toEqual(expect.stringMatching(/stackoverflow\.com\/([0-9a-f]+)/));
    const decodeUrl = await inMemoryDecodeUrlUseCase.execute({baseUrl:'stackoverflow.com', urlCode:savedShortUrl.urlCode});
    expect(decodeUrl).toEqual(url);
  });

  it("Should throw  error if the url encoded is not valid ", async () => {
    const baseUrl = "https://stackoverfl";
  
     const tryEncodeInvalidUrl = async ()=>{
      await inMemoryDecodeUrlUseCase.execute({baseUrl:baseUrl, urlCode:'asd1s'});
    }
    expect(tryEncodeInvalidUrl).rejects.toBeInstanceOf(Error)
    expect(tryEncodeInvalidUrl).rejects.toMatchObject({message:'Invalid Url'});
  });


});