import DecodesShortnedUrlUseCase from "./DecodesShortnedUrlUseCase";
import DecodesShortnedUrlController from "./DecodesShortnedUrlController";

const decodesShortnedUrlUseCase = new DecodesShortnedUrlUseCase()

const decodesShortnedUrlController = new DecodesShortnedUrlController(decodesShortnedUrlUseCase)

export { decodesShortnedUrlController, decodesShortnedUrlUseCase }