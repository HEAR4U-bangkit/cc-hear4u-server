const { compare } = require("../../libs/bcrypt");
const { createToken } = require("../../libs/jwt");
const prisma = require("../../libs/prisma");
const apiResponse = require("../../utils/apiResponse");
const { createTokenUser } = require("../../utils/createToken");

// Handlers for login
const login = async (request, h) => {
  const { email, password } = request.payload;

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    return apiResponse(h, 400);
  }

  const comparePassword = await compare(password, user.password);

  if (!comparePassword) {
    return apiResponse(h, 400);
  }

  const token = createToken({ payload: createTokenUser(user) });

  return apiResponse(h, 200, {
    token,
    user: {
      id: user.id,
      fullname: user.fullname,
      email: user.email,
    },
  });
};

// Handlers for register
const register = (request, h) => {};

module.expo = { login, register };
