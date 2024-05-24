const { compare } = require("../../libs/bcrypt");
const { createToken } = require("../../libs/jwt");
const prisma = require("../../libs/prisma");
const apiResponse = require("../../utils/apiResponse");
const { createTokenUser } = require("../../utils/createToken");

// Handlers for login
const loginHandler = async (request, h) => {
  const { email, password } = request.payload;

  // Mencari user berdasarkan email
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  // jika tidak ada user kirim pesan error
  if (!user) {
    return apiResponse(h, 400);
  }

  // Mengecek password user
  const comparePassword = await compare(password, user.password);

  // jika password salah kirim error
  if (!comparePassword) {
    return apiResponse(h, 400);
  }

  // membuat token untuk user
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
const registerHandler = (request, h) => {};

module.exports = { loginHandler, registerHandler };
