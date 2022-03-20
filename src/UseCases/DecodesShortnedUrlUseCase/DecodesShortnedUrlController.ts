import { Request, Response } from 'express'
import DecodesShortnedUrlUseCase from './DecodesShortnedUrlUseCase'
class DecodesShortnedUrlController {

  constructor(private decodesShortnedUrlUseCase: DecodesShortnedUrlUseCase) { }

  handle = async (request: Request, response: Response) => {

    const { shortnedUrl } = request.body

    try {
      const fullUrl = await this.decodesShortnedUrlUseCase.execute(shortnedUrl)

      return response.status(200).json({ url: fullUrl })

    } catch (error) {

      return response.status(400).send({ errorMessage: error.message })
    }

  }
}

export default DecodesShortnedUrlController