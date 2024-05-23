const createTokenUser = (user) => {
  return {
    id: user.id,
    fullname: user.fullname,
    email: user.fullname,
  };
};

module.exports = { createTokenUser };
