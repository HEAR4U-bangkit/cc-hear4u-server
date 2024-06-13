const createTokenUser = (user) => {
  return {
    id: user.id,
    fullname: user.fullname,
    email: user.fullname,
    role: user.role,
  };
};

module.exports = { createTokenUser };
