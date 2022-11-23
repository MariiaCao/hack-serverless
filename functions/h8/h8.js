// ENDPOINT:(PATH: "/h8")
// CREAR UN SERVERLESS QUE RESPONDA SI LA SOLICITUD ES DE TIPO "GET"
// SE DEBE ENVIAR EL VALOR DEL email, name MEDIANTE BODY
// - DEBES INSTALAR EL PAQUETE DE npm i middy
//   EJEMPLO: let middy = require("middy") 
// - PARA DAR EL FORMATO CORRECTO EN JSON, DEBES IMPORTAR EL MIDDLEWARE jsonBodyParser
//   EJEMPLO: let {jsonBodyParser} = require("middy/middlewares");
// - ENVIAR LOS DATOS EN UN JSON {"email","add an email", "alias":"add an alias"}
//output => {"email":"body@domain.com", "alias":"add an alias"}

const { output, errorOutput } = require('../../helpers/outputs/outputs');
let middy = require("middy");
let {jsonBodyParser} = require("middy/middlewares");

const handler = async (event) => {
  let method = event.httpMethod;
  let params = event.body;
  try {
    if (method === 'GET' && params != null) {
      return output({email: params.email, alias: params.alias});
    }else{
      return errorOutput('Método incorrecto');
    }
  } catch (error) {
    return output(error.toString());
  }
}

exports.handler = middy(handler).use(jsonBodyParser());
