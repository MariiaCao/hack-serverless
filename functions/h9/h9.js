// ENDPOINT:(PATH: "/h9?alias="...")
// CREAR UN SERVERLESS QUE RESPONDA SI LA SOLICITUD ES DE TIPO "GET"
// - SE DEBE ENVIAR EL VALOR DEL alias  MEDIANTE QUERY STRING
// - BUSCAR UN VALOR VALIDO DENTRO DEL ARRAY DE ALIAS Y MOSTRAR SU SALIDA
// - EN CASO DE NO ENCONTRAR EL alias EN EL ARRAY DE ALIAS ENVIAR UN MENSAJE DE not found
// const Lista = ["foo","bar","baz","qux","fred"]
// TRUE - output => {"payload":"bar"}
// FALSE - output => {"payload":"not found"}

const { output, errorOutput } = require('../../helpers/outputs/outputs');

const handler = async (event) => {
  const Lista = ["foo","bar","baz","qux","fred"];
  let method = event.httpMethod;
  let {alias} = event.queryStringParameters;
  let aliasMatched = Lista.filter((aliasListed) => { return aliasListed === alias });
  try {
    if (method === 'GET' && aliasMatched[0] != undefined) {
      return output({payload: alias});
    }else{
      return output({payload: 'not found'});
    }
  } catch (error) {
    return output(error.toString());
  }
}

module.exports = { handler }
