const { compare, encrypt } = require("../../libs/bcrypt");
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
      return apiResponse(h, 400, "User already exists");
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
    console.error("Error in registration:", error);
    return apiResponse(h, 500, "Internal Server Error");
  }
};

module.exports = { loginHandler, registerHandler };
