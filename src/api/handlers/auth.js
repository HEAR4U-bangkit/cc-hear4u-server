const APIError = require("../../errors/APIError");
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

  return apiResponse(h, 200, "Berhasil login!", {
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

  return apiResponse(h, 200, "Berhasil mendaftar!", {
    token,
    user: {
      id: newUser.id,
      fullname: newUser.fullname,
      email: newUser.email,
    },
  });
};

const getUserInfo = async (request, h) => {
  const user = request.auth.credentials;

  return apiResponse(h, 200, "Berhasil mendapatkan data pengguna!", user);
};

const updateProfile = async (request, h) => {
  const { fullname, email } = request.payload;

  const { id } = request.params;

  // Mencari user berdarkan id
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new APIError("Pengguna tidak ditemukan!");
  }

  const checkEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (checkEmail) {
    throw new APIError("Email sudah digunakan!");
  }

  // Update data pengguna
  const updatedUser = await prisma.user.update({
    where: { id },
    data: {
      fullname,
      email,
    },
  });

  return apiResponse(h, 200, "Profil berhasil diperbarui!", {
    id: updatedUser.id,
    fullname: updatedUser.fullname,
    email: updatedUser.email,
  });
};

const updatePassword = async (request, h) => {
  const { id } = request.params;

  const { oldPassword, newPassword, confirmationPassword } = request.payload;

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new APIError("Pengguna tidak ditemukan!");
  }

  // Membandingkan oldPassword with user.password
  const isOldPasswordValid = await compare(oldPassword, user.password);
  if (!isOldPasswordValid) {
    throw new APIError("Password salah!");
  }

  // Cek newPassword and confirmationPassword cocok
  if (newPassword && newPassword !== confirmationPassword) {
    throw new APIError("Password baru and password konfirmasi tidak cocok!");
  }

  const encryptedPassword = await encrypt(newPassword);

  const updatedUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      password: encryptedPassword,
    },
  });

  return apiResponse(h, 200, "Password berhasil diperbarui!", {
    id: updatedUser.id,
    fullname: updatedUser.fullname,
    email: updatedUser.email,
  });
};

module.exports = {
  loginHandler,
  registerHandler,
  getUserInfo,
  updateProfile,
  updatePassword,
};
