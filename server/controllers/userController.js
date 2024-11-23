const getUsers = (res, req) => {
  res.send("Hellooooww");
};

const getUsersById = (res, req) => {
  res.send("Hellooooow by ID");
};

module.exports = { getUsers };
