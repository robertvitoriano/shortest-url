import {Request, Response } from 'express'
import RedirectShortUseCase from './RedirectShortUseCase'
class RedirectShortController {

  constructor(private redirectShortUseCase:RedirectShortUseCase){}

  handle = async (request:Request, response:Response)=>{

    const {shortnedUrl} = request.body

    try{
      const fullUrl = await this.redirectShortUseCase.execute(shortnedUrl)

      return response.status(200).json({url:fullUrl})

    }catch(error){

      return response.status(400).send({errorMessage:error.message})
    }

  }
}

export default RedirectShortController