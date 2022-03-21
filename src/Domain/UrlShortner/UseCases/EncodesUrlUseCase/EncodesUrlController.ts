import { Request, Response } from 'express'
import EncodesUrlUseCase from './EncodesUrlUseCase'
class EncodesUrlController {

  constructor(private encodesUrlUseCase: EncodesUrlUseCase) { }

  handle = async (request: Request, response: Response) => {

    const { url } = request.body

    try {
      const resultString = await this.encodesUrlUseCase.execute(url)

      return response.status(201).send({ message: 'Url Shortned', shortUrl: resultString });
    } catch (error) {

      return response.status(400).send({ errorMessage: error.message })
    }

  }
}

export default EncodesUrlController