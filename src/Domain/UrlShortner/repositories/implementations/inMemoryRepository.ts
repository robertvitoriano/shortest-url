import { IShortenedUrl, IUrlShortnerRepository } from "../IUrlShortnerRepository";

class InMemoryRepository implements IUrlShortnerRepository{

  private shortnedUrls: IShortenedUrl[] = [];
  

  findOne(shortnedUrl: IShortenedUrl): IShortenedUrl | null {
    let shortnedUrlInstance = null;
    for(const key in shortnedUrl){
      if(shortnedUrl[key]){
        shortnedUrlInstance = this.shortnedUrls.find(url => url[key] === shortnedUrl[key]);
      }
    }
    return shortnedUrlInstance
  }
  create(shortnedUrl: IShortenedUrl): string {
    const shortnedUrlCreated = {
      originalUrl: shortnedUrl.originalUrl,
      urlCode: shortnedUrl.urlCode,
      shortUrl: shortnedUrl.shortUrl
    };
    this.shortnedUrls.push(shortnedUrlCreated);
    return shortnedUrlCreated.shortUrl;
  }

  clear(): void {
    this.shortnedUrls = [];
  }
}

export { InMemoryRepository };