// ENDPOINT:(PATH: "/h3")
// CREAR UN SERVERLESS QUE RESPONDA SI LA SOLICITUD ES DE TIPO "PUT"
// output => {"content":"put"}

const { output, errorOutput } = require('../../helpers/outputs/outputs');

const handler = async (event) => {

  try {
    if (event.httpMethod == 'PUT') {
      return output({content: 'put'});
    }else{
      return errorOutput('Método incorrecto');
    }
  } catch (error) {
    return output(error.toString());
  }
}

module.exports = { handler }
