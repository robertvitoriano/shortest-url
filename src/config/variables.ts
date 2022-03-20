const variables = process.env.NODE_ENV === "production" ? require("./prodVariables").prodVariables : require("./localVariables").localVariables;

export { variables }