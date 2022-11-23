// ENDPOINT:(PATH: "/h5")
// CREAR UN SERVERLESS QUE RESPONDA SI LA SOLICITUD ES DE TIPO "GET"
// EN CASO CONTRARIO RESPONDER CON LA SALIDA DE UN OBJETO {} SIN PROPIEDADES
// TRUE  - output => {"content":"delete"}
// FALSE - output => {}

const { output, errorOutput } = require('../../helpers/outputs/outputs');

const handler = async (event) => {

  try {
    if (event.httpMethod == 'DELETE') {
      return output({content: event.httpMethod.toLowerCase()});
    }else{
      return output({});
    }
  } catch (error) {
    return output(error.toString());
  }
}

module.exports = { handler }
