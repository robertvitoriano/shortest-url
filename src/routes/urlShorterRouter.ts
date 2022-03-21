import { Router } from "express";

import { decodesShortnedUrlController } from "../Domain/UrlShortner/UseCases/DecodesShortnedUrlUseCase";
import { shortUrlController } from "../Domain/UrlShortner/UseCases/EncodesUrlUseCase";

const urlShorterRouter = Router()

urlShorterRouter.post('/', shortUrlController.handle)

urlShorterRouter.get('/', decodesShortnedUrlController.handle)

export { urlShorterRouter }