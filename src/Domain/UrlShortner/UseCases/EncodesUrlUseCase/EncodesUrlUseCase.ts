import validUrl from 'valid-url';
import shortId from 'short-id'
import { ShortUrlModel } from '../../models/ShortUrlModel';
class EncodesUrlUseCase {

  constructor() { }

  public async execute(url: string): Promise<string> {

    if (!validUrl.isWebUri(url)) throw new Error('Invalid Url');

    const shortUrls = await ShortUrlModel.findAll();

    const urlAlreadySaved = shortUrls.find((shortUrl: any) => shortUrl.originalUrl === url);
    
    if (!urlAlreadySaved) {
      const urlCode = shortId.generate();

      const shortBaseUrl = url.replace('http://', '').replace('www.', '').split('/')[2];
      const shortUrl = `${shortBaseUrl}/${urlCode}`;

      await ShortUrlModel.create({
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
