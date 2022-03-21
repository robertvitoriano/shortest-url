import EncodesUrlUseCase from "../../Domain/UrlShortner/UseCases/EncodesUrlUseCase/EncodesUrlUseCase";
import { InMemoryRepository } from "../../Domain/UrlShortner/repositories/implementations/inMemoryRepository";
import shortId from "short-id";

let inMemoryRepository:InMemoryRepository
let inMemoryEncodesUrlUseCase:EncodesUrlUseCase

describe("Shorts Url", () => {
  beforeEach(()=>{
     inMemoryRepository = new InMemoryRepository();
     inMemoryEncodesUrlUseCase = new EncodesUrlUseCase(inMemoryRepository)
  });

  it("Should be able to short a given url", async () => {
    const url = "https://stackoverflow.com/questions/71553537/how-to-find-nearest-nearest-place-by-lat-long-quickly";
  
    const encodedUrl = await inMemoryEncodesUrlUseCase.execute(url);
    const savedShortUrl = inMemoryRepository.findOne({shortUrl:encodedUrl});
    expect(savedShortUrl.shortUrl).toEqual(expect.stringMatching(/stackoverflow\.com\/([0-9a-f]+)/));
  });


});