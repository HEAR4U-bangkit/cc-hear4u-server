const APIError = require("../../errors/APIError");
const { encrypt } = require("../../libs/bcrypt");
const prisma = require("../../libs/prisma");
const apiResponse = require("../../utils/apiResponse");

const getAllUsers = async (request, h) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      fullname: true,
      email: true,
      role: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return apiResponse(h, 200, "Berhasil mendapatkan semua data user!", users);
};

const getOneUser = async (request, h) => {
  const { id } = request.params;

  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  if (!user) {
    return new APIError(404, "User tidak ditemukan!");
  }

  return apiResponse(h, 200, "Berhasil mendapatkan data user!", user);
};

const createUser = async (request, h) => {
  const { fullname, email, password } = request.payload;

  const role = await prisma.role.findFirst({
    where: {
      name: "user",
    },
  });

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
      roleId: role.id,
    },
    select: {
      id: true,
      fullname: true,
      email: true,
      role: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return apiResponse(h, 200, "Berhasil membuat user baru!", newUser);
};

const updateUser = async (request, h) => {
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
      NOT: {
        id: user.id,
      },
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
    include: {
      role: true,
    },
  });

  return apiResponse(h, 200, "Profil berhasil diperbarui!", {
    id: updatedUser.id,
    fullname: updatedUser.fullname,
    email: updatedUser.email,
    role: updatedUser.role,
  });
};

const deleteUser = async (request, h) => {
  const { id } = request.params;

  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  if (!user) {
    throw new APIError("User tidak ditemukan!", 404);
  }

  await prisma.user.delete({
    where: {
      id: user.id,
    },
  });

  return apiResponse(h, 200, "Berhasil menghapus data");
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
