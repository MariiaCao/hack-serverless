// ENDPOINT:(PATH: "/h10")
// CREAR UN SERVERLESS QUE RESPONDA SI LA SOLICITUD ES DE TIPO "GET"
// - SE DEBE ENVIAR EL VALOR DEL alias  MEDIANTE BODY
// - BUSCAR UN VALOR VALIDO DENTRO DEL ARRAY DE ALIAS Y MOSTRAR SU SALIDA
// - EN CASO DE NO ENCONTRAR EL alias EN EL ARRAY DE ALIAS ENVIAR UN MENSAJE DE not found
// - PARA DAR EL FORMATO CORRETO EN JSON, DEBES IMPORTAR EL MIDDLEWARE jsonBodyParser
//   EJEMPLO: let {jsonBodyParser} = require("middy/middlewares");
// const Lista = ["foo","bar","baz","qux","fred"]
// TRUE - output => {"payload":"bar"}
// FALSE - output => {"payload":"not found"}

const { output, errorOutput } = require('../../helpers/outputs/outputs');
let middy = require("middy");
let {jsonBodyParser} = require("middy/middlewares");

const handler = async (event) => {
  const Lista = ["foo","bar","baz","qux","fred"];
  let method = event.httpMethod;
  let {alias} = event.body;
  let aliasMatched = Lista.filter((aliasListed) => { return aliasListed === alias });
  try {
    if (method === 'GET' && aliasMatched[0] != null) {
      return output({payload: alias});
    }else{
      return output({payload: 'not found'});
    }
  } catch (error) {
    return output(error.toString());
  }
}

exports.handler = middy(handler).use(jsonBodyParser());
