import validUrl from 'valid-url';
import shortId from 'short-id'
import { ShortUrlModel } from '../../models/ShortUrlModel';
import { IUrlShortnerRepository } from "../../repositories/IUrlShortnerRepository";
class EncodesUrlUseCase {

  constructor(private urlShortnerRepository:IUrlShortnerRepository) { }

  public async execute(url: string): Promise<string> {

    if (!validUrl.isWebUri(url)) throw new Error('Invalid Url');

    const urlAlreadySaved = await this.urlShortnerRepository.findOne({originalUrl:url});
    
    if (!urlAlreadySaved) {
      const urlCode = shortId.generate();

      const shortBaseUrl = url.replace('http://', '').replace('www.', '').split('/')[2];
      const shortUrl = `${shortBaseUrl}/${urlCode}`;

      await this.urlShortnerRepository.create({
        originalUrl: url,
        urlCode,
        shortUrl
      })

      return shortUrl;
    }
    return urlAlreadySaved.shortUrl
  }
}

export default EncodesUrlUseCase;
