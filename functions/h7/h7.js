// ENDPOINT:(PATH: "/h7?email="..."&name="...")
// CREAR UN SERVERLESS QUE RESPONDA SI LA SOLICITUD ES DE TIPO "GET"
// SE DEBE ENVIAR EL VALOR DEL email, name MEDIANTE QUERY STRING
// output => {"email":"query@domain.com", "name":"add a name"}

const { output, errorOutput } = require('../../helpers/outputs/outputs');

const handler = async (event) => {
  let method = event.httpMethod;
  let params = event.queryStringParameters;
  try {
    if (method === 'GET' && params != null) {
      return output({email: params.email, name: params.name});
    }else{
      return errorOutput('Método incorrecto');
    }
  } catch (error) {
    return output(error.toString());
  }
}

module.exports = { handler }
