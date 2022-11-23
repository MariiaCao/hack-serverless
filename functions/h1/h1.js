// ENDPOINT:(PATH: "/h1")
// CREAR UN SERVERLESS QUE RESPONDA SI LA SOLICITUD ES DE TIPO "GET"
// output => {"content":"get"}

const { output, errorOutput } = require('../../helpers/outputs/outputs');

const handler = async (event) => {

  try {
    if (event.httpMethod == 'GET') {
      return output({content: 'get'});
    }else{
      return errorOutput('Método incorrecto');
    }
  } catch (error) {
    return output(error.toString());
  }
}

module.exports = { handler }
