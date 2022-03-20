import { Router } from "express";

import { decodesShortnedUrlController } from "../UseCases/DecodesShortnedUrlUseCase";
import { shortUrlController } from "../UseCases/EncodesUrlUseCase";

const urlShorterRouter = Router()

urlShorterRouter.post('/', shortUrlController.handle)

urlShorterRouter.get('/', decodesShortnedUrlController.handle)

export { urlShorterRouter }