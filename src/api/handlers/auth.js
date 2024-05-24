const APIError = require("../../errors/APIError");
const { compare, encrypt } = require("../../libs/bcrypt");
const { createToken } = require("../../libs/jwt");
const prisma = require("../../libs/prisma");
const apiResponse = require("../../utils/apiResponse");
const { createTokenUser } = require("../../utils/createToken");

// Handlers for login
const loginHandler = async (request, h) => {
  try {
    const { email, password } = request.payload;

    // Mencari user berdasarkan email
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    // jika tidak ada user kirim pesan error
    if (!user) {
      throw new APIError("Email salah!");
    }

    // Mengecek password user
    const comparePassword = await compare(password, user.password);

    // jika password salah kirim error
    if (!comparePassword) {
      throw new APIError("Password salah!");
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
  } catch (error) {
    throw new Error("Internal server error!");
  }
};

// Handlers for register
const registerHandler = async (request, h) => {
  const { fullname, email, password } = request.payload;

  try {
    // Cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new APIError("Pengguna sudah ada!");
    }

    // Enkripsi password sebelum disimpan
    const hashedPassword = await encrypt(password);

    // Buat entri pengguna baru
    const newUser = await prisma.user.create({
      data: {
        fullname,
        email,
        password: hashedPassword,
      },
    });

    // Berhasil membuat pengguna baru
    const token = createToken({ payload: createTokenUser(newUser) });

    return apiResponse(h, 200, {
      token,
      user: {
        id: newUser.id,
        fullname: newUser.fullname,
        email: newUser.email,
      },
    });
  } catch (error) {
    throw new Error("Internal server error!");
  }
};

module.exports = { loginHandler, registerHandler };
