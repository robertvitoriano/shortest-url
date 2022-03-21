interface ICreateShortnedUrlDTO{
  url:string
}
interface IShortenedUrl{
  originalUrl?:string
  urlCode?:string
  shortUrl?:string
}

interface  IUrlShortnerRepository {

  findOne (shortnedUrl:IShortenedUrl): Promise<IShortenedUrl>
  create ( shortnedUrl: IShortenedUrl): Promise<string>

}

export { IUrlShortnerRepository, IShortenedUrl, ICreateShortnedUrlDTO }