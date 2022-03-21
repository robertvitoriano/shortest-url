let variables = process.env.NODE_ENV === "production" ? require("./prodVariables").prodVariables : require("./localVariables").localVariables;

switch(process.env.NODE_ENV) {
  case "production":
    console.log("Production environment detected");
    variables = require("./prodVariables").prodVariables
    break;
  case "development":
    console.log("Development environment detected");
    variables = require("./localVariables").localVariables
    break;
  case 'test':
    console.log("Test environment detected");
    variables = require("./testVariables").testVariables
}

export { variables }