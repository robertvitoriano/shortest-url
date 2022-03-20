import ShortUrlUseCase from "./ShortUrlUseCase";
import ShortUrlController from "./ShortUrlController";

const shortUrlUseCase = new ShortUrlUseCase()

const shortUrlController = new ShortUrlController(shortUrlUseCase)

export  {shortUrlController, shortUrlUseCase}