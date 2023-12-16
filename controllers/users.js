const { usersModel } = require("../models");

const createUser = async (req, res) => {
  const { body } = req;
  const data = await usersModel.create(body);
  res.send({ data });
};

const updateUser = (req, res) => {};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await usersModel.findByIdAndDelete(id);
  if (!deletedUser) {
    return res.status(404).send({ error: "User not found" });
  }
  res.status(200).send({ message: "User successfully deleted", deletedUser });
};

const getUsers = async (req, res) => {
  const data = await usersModel.find({});
  res.send({ data });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const data = await usersModel.findById(id);
  res.send({ data });
};

module.exports = { createUser, updateUser, deleteUser, getUsers, getUserById };
