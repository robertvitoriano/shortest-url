import { localVariables } from "./localVariables";
import { prodVariables } from "./prodVariables";

const variables = process.env.NODE_ENV === "production" ? prodVariables : localVariables;

console.log(process.env.NODE_ENV);

export { variables }