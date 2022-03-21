import { Request, Response } from 'express'
import DecodesShortnedUrlUseCase from './DecodesShortnedUrlUseCase'
class DecodesShortnedUrlController {

  constructor(private decodesShortnedUrlUseCase: DecodesShortnedUrlUseCase) { }

  handle = async (request: Request, response: Response) => {

    const { baseUrl, urlCode } = request.params

    try {
      const fullUrl = await this.decodesShortnedUrlUseCase.execute({baseUrl, urlCode})

      return response.status(200).json({ url: fullUrl })

    } catch (error) {

      return response.status(400).send({ errorMessage: error.message })
    }

  }
}

export default DecodesShortnedUrlController