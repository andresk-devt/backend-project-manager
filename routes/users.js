const express = require("express");
const router = express.Router();
const {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
} = require("../controllers/users");

router.post("/", createUser);
router.patch("/", updateUser);
router.get("/:id", getUserById);
router.get("/", getUsers);
router.delete("/:id", deleteUser);

module.exports = router;
