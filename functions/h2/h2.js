// ENDPOINT:(PATH: "/h2")
// CREAR UN SERVERLESS QUE RESPONDA SI LA SOLICITUD ES DE TIPO "POST"
// output => {"content":"post"}

const { output, errorOutput } = require('../../helpers/outputs/outputs');

const handler = async (event) => {

  try {
    if (event.httpMethod == 'POST') {
      return output({content: 'post'});
    }else{
      return errorOutput('Método incorrecto');
    }
  } catch (error) {
    return output(error.toString());
  }
}

module.exports = { handler }
