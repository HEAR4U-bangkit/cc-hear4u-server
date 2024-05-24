const APIError = require("../errors/APIError");
const { isTokenValid } = require("../libs/jwt");
const prisma = require("../libs/prisma");

const authenticateUser = async (request, h) => {
  try {
    let token;

    const authHeader = request.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
    }

    if (!token) {
      throw new APIError("Authentication invalid!", 401);
    }

    const payload = isTokenValid({ token });

    const user = await prisma.user.findFirst({
      where: {
        id: payload.id,
      },
    });

    if (!user) {
      throw new APIError("Authentication invalid!", 401);
    }

    request.auth.credentials = {
      id: payload.id,
      fullname: payload.fullname,
      email: payload.email,
    };

    return h.continue;
  } catch (error) {
    throw error;
  }
};

module.exports = { authenticateUser };
