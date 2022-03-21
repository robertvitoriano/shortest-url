interface shortnedUrlObject {
  baseUrl: string;
  urlCode: string;
}
import { IUrlShortnerRepository } from "../../repositories/IUrlShortnerRepository";
class DecodesShortnedUrlUseCase {

  constructor(private urlShortnerRepository:IUrlShortnerRepository) { }

  public async execute({baseUrl, urlCode}: shortnedUrlObject): Promise<string> {
    const shortUrl = `${baseUrl}/${urlCode}`

    const shortnedUrlInstance = await this.urlShortnerRepository.findOne({shortUrl})

    if (!shortnedUrlInstance) throw new Error('Invalid Url');

    return shortnedUrlInstance.originalUrl;
  }
}

export default DecodesShortnedUrlUseCase;
