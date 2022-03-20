import { Router } from "express";

import { redirectShortController, } from "../UseCases/RedirectShortUseCase";
import { shortUrlController } from "../UseCases/ShortUrlUseCase";

const urlShorterRouter = Router()

urlShorterRouter.post('/', shortUrlController.handle)

urlShorterRouter.get('/', redirectShortController.handle)


export { urlShorterRouter }