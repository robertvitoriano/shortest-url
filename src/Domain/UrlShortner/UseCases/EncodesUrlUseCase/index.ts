import EncodesUrlUseCase from "./EncodesUrlUseCase";
import EncodesUrlController from "./EncodesUrlController";

const encodesUrlUseCase = new EncodesUrlUseCase()

const shortUrlController = new EncodesUrlController(encodesUrlUseCase)

export  {shortUrlController, encodesUrlUseCase}