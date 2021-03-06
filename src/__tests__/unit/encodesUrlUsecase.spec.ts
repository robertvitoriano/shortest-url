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

  afterEach(() => {
    return inMemoryRepository.clear();
  });

  it("Should be able to short a given url", async () => {
    const url = "https://stackoverflow.com/questions/71553537/how-to-find-nearest-nearest-place-by-lat-long-quickly";
  
    const encodedUrl = await inMemoryEncodesUrlUseCase.execute(url);
    const savedShortUrl = await inMemoryRepository.findOne({shortUrl:encodedUrl});
    expect(savedShortUrl.shortUrl).toEqual(expect.stringMatching(/stackoverflow\.com\/([0-9a-f]+)/));
  });

  it("Should throw give 'Invalid Url' error if the url is not valid ", async () => {
    const url = "https://stackoverfl";
  
     const tryEncodeInvalidUrl = async ()=>{
      await inMemoryEncodesUrlUseCase.execute(url);
    }
    expect(tryEncodeInvalidUrl).rejects.toBeInstanceOf(Error)
    expect(tryEncodeInvalidUrl).rejects.toMatchObject({message:'Invalid Url'});
  });


});