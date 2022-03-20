import {Request, Response } from 'express'
import EncodesUrlUseCase from './EncodesUrlUseCase'
class EncodesUrlController {

  constructor(private encodesUrlUseCase:EncodesUrlUseCase){}

  handle = (request:Request, response:Response)=>{

    const {url} = request.body

    try{
      const resultString = this.encodesUrlUseCase.execute(url)

      return response.status(200).send({message:'Url Shortned', shortUrl:resultString});
    }catch(error){

      return response.status(400).send({errorMessage:error.message})
    }

  }
}

export default EncodesUrlController