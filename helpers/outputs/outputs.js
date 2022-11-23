const output = (data) => {
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  };
  
const errorOutput = (err) => {
return { statusCode: 500, body: err.toString(err) };
};

module.exports = {
    output,
    errorOutput
}