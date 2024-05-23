const apiResponse = async (h, code, data = null) => {
  const response = h.response({
    status: code == 200 ? "success" : "fail",
    data,
  });

  response.code(code);
  return response;
};

module.exports = apiResponse;
