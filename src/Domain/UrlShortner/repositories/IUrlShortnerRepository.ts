interface ICreateShortnedUrlDTO{
  url:string
}
interface IShortenedUrl{
  originalUrl?:string
  urlCode?:string
  shortUrl?:string
}

interface  IUrlShortnerRepository {

  findOne (shortnedUrl:IShortenedUrl): Promise<IShortenedUrl> | IShortenedUrl | null;
  create ( shortnedUrl: IShortenedUrl): Promise<string> | string

}

export { IUrlShortnerRepository, IShortenedUrl, ICreateShortnedUrlDTO }