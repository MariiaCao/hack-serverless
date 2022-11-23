// ENDPOINT:(PATH: "/h4")
// CREAR UN SERVERLESS QUE RESPONDA SI LA SOLICITUD ES DE TIPO "DELETE"
// output => {"content":"delete"}


const { output, errorOutput } = require('../../helpers/outputs/outputs');

const handler = async (event) => {

  try {
    if (event.httpMethod == 'DELETE') {
      return output({content: event.httpMethod.toLowerCase()});
    }else{
      return errorOutput('Método incorrecto');
    }
  } catch (error) {
    return output(error.toString());
  }
}

module.exports = { handler }
