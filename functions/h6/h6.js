// ENDPOINT:(PATH: "/h6")
// CREAR UN SERVERLESS QUE RESPONDA SI LA SOLICITUD CORRESPONDE CON ALGÚN METODO HTTP: "GET" | "POST" | "PUT" | "DELETE"
// - EN CASO CONTRARIO RESPONDER CON LA SALIDA DE UN OBJETO {} SIN PROPIEDADES
// - EN LA OPCIÓN type ANEXAR EL TIPO DE METODO HTTP
// - LA PROPIEDAD content EN method ESPECIFICAR EL METODO HTTP
// TRUE  - output => {"method":"type", "content":"message method"}
// FALSE - output => {}

const { output, errorOutput } = require('../../helpers/outputs/outputs');

const handler = async (event) => {
  let method = event.httpMethod;
  try {
    switch (method) {
      case 'GET':
        return output({method: method, content: 'message '+method.toLowerCase()});
      break;
      case 'POST':
        return output({method: method, content: 'message '+method.toLowerCase()});
      break;
      case 'PUT':
        return output({method: method, content: 'message '+method.toLowerCase()});
      break;
      case 'DELETE':
        return output({method: method, content: 'message '+method.toLowerCase()});
      break;
      default: 
        return output({});
    }
  } catch (error) {
    return output(error.toString());
  }
}

module.exports = { handler }
