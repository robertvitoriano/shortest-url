import validUrl from 'valid-url';
import shortId from 'short-id'
import { ShortUrlModel } from '../../models/ShortUrlModel';
class EncodesUrlUseCase {

  constructor() { }

  public async execute(url: string): Promise<string> {
    const shortUrls = await ShortUrlModel.findAll();
    const urlAlreadySaved = shortUrls.some((shortUrl:any) => shortUrl.originalUrl === url);
    if (validUrl.isUri(url) && !urlAlreadySaved){  
      const urlCode = shortId.generate();

      const shortBaseUrl = url.replace('http://', '').split('/')[0];
      const shortUrl = `${shortBaseUrl}/${urlCode}`;

      const shortUrlInstance = await ShortUrlModel.create({
        originalUrl: url,
        urlCode,
        shortUrl
      })

      await shortUrlInstance.save();

      return shortUrl;

    }

    return 'Invalid Url';
  }

}

export default EncodesUrlUseCase;
