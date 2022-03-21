import { Router } from "express";

import { decodesShortnedUrlController } from "../Domain/UrlShortner/UseCases/DecodesShortnedUrlUseCase";
import { encodesUrlController } from "../Domain/UrlShortner/UseCases/EncodesUrlUseCase";

const urlShorterRouter = Router()

urlShorterRouter.post('/encode', encodesUrlController.handle)

urlShorterRouter.get('/:baseUrl/:urlCode', decodesShortnedUrlController.handle)

export { urlShorterRouter }