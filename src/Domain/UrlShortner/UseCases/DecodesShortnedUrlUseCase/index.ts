import DecodesShortnedUrlUseCase from "./DecodesShortnedUrlUseCase";
import DecodesShortnedUrlController from "./DecodesShortnedUrlController";
import { SequelizeRepository } from "../../repositories/implementations/SequelizeRepository";
import { ShortUrlModel } from "../../models/ShortUrlModel";
const sequelizeRepository = new SequelizeRepository(ShortUrlModel);

const decodesShortnedUrlUseCase = new DecodesShortnedUrlUseCase(sequelizeRepository)

const decodesShortnedUrlController = new DecodesShortnedUrlController(decodesShortnedUrlUseCase)

export { decodesShortnedUrlController, decodesShortnedUrlUseCase }