import RedirectShortUseCase from "./RedirectShortUseCase";
import RedirectShortController from "./RedirectShortController";

const redirectShortUseCase = new RedirectShortUseCase()

const redirectShortController = new RedirectShortController(redirectShortUseCase)

export { redirectShortController, redirectShortUseCase }