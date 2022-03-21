import EncodesUrlUseCase from "../EncodesUrlUseCase";
import EncodesUrlController from "../EncodesUrlController";
import { InMemoryRepository } from "./../../../repositories/implementations/inMemoryRepository";

const inMemoryRepository = new InMemoryRepository();
const inMemoryEncodesUrlUseCase = new EncodesUrlUseCase(inMemoryRepository)
const inMemoryEncodesUrlController = new EncodesUrlController(inMemoryEncodesUrlUseCase)

export  {inMemoryEncodesUrlController, inMemoryEncodesUrlUseCase}