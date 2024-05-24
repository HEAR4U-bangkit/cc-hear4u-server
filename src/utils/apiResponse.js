const apiResponse = async (h, code, message, data = null) => {
  const response = h.response({
    status: code == 200 ? "success" : "fail",
    message,
    data,
  });

  response.code(code);
  return response;
};

module.exports = apiResponse;
