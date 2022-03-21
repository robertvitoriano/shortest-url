interface shortnedUrlObject {
  baseUrl: string;
  urlCode: string;
}

import { ShortUrlModel } from "../../models/ShortUrlModel";
class DecodesShortnedUrlUseCase {

  constructor() { }

  public async execute({baseUrl, urlCode}: shortnedUrlObject): Promise<string> {
    const shortnedUrl = `${baseUrl}/${urlCode}`

    const shortnedUrlInstance = await ShortUrlModel.findOne({
      where: {
        urlCode,
        shortUrl: shortnedUrl,
      }
    })

    if (!shortnedUrlInstance) throw new Error('Invalid Url');

    return shortnedUrlInstance.originalUrl;
  }
}

export default DecodesShortnedUrlUseCase;
