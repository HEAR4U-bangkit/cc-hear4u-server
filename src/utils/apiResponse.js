const apiResponse = async (h, code, data) => {
  const response = h.response({
    status: "success",
    data,
  });

  response.code(code);
  return response;
};

module.exports = apiResponse;
