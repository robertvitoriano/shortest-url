import {Request, Response } from 'express'
import ShortUrlUseCase from './ShortUrlUseCase'
class ShortUrlController {

  constructor(private shortUrlUseCase:ShortUrlUseCase){}

  handle = (request:Request, response:Response)=>{

    const {url} = request.body

    try{
      const resultString = this.shortUrlUseCase.execute(url)

      return response.status(200).send({message:'Url Shortned', shortUrl:resultString});
    }catch(error){

      return response.status(400).send({errorMessage:error.message})
    }

  }
}

export default ShortUrlController