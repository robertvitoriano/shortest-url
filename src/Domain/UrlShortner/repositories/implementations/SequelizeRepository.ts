import { WhereOptions } from "sequelize/types";
import { ShortUrlModel } from "../../models/ShortUrlModel";
import { ICreateShortnedUrlDTO, IShortenedUrl, IUrlShortnerRepository } from "../IUrlShortnerRepository";
class SequelizeRepository implements IUrlShortnerRepository {

  constructor(private shortUrlModel: typeof ShortUrlModel) { }
  async findOne(shortnedUrl: IShortenedUrl): Promise<IShortenedUrl> {
    const shortenedUrl = await this.shortUrlModel.findOne({
      where: shortnedUrl as WhereOptions
    })

    return {
      originalUrl: shortenedUrl.originalUrl,
      urlCode: shortenedUrl.urlCode,
      shortUrl: shortenedUrl.shortUrl
    }
  }
 async create(shortnedUrl: IShortenedUrl): Promise<string> {
   const shortnedUrlCreated = await ShortUrlModel.create({
      originalUrl: shortnedUrl.originalUrl,
      urlCode: shortnedUrl.urlCode,
      shortUrl: shortnedUrl.shortUrl
   });
    return shortnedUrlCreated.shortUrl;
  }
}

export { SequelizeRepository };