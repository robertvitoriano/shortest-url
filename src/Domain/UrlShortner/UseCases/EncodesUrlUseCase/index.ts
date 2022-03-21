import EncodesUrlUseCase from "./EncodesUrlUseCase";
import EncodesUrlController from "./EncodesUrlController";
import { SequelizeRepository } from "../../repositories/implementations/SequelizeRepository";
import { ShortUrlModel } from "../../models/ShortUrlModel";

const sequelizeRepository = new SequelizeRepository(ShortUrlModel);
const encodesUrlUseCase = new EncodesUrlUseCase(sequelizeRepository)
const encodesUrlController = new EncodesUrlController(encodesUrlUseCase)

export  {encodesUrlController, encodesUrlUseCase}