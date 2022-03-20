import { prodVariables } from "./prodVariables";

const variables = process.env.NODE_ENV === "production" ? prodVariables : require("./localVariables").localVariables;

export { variables }