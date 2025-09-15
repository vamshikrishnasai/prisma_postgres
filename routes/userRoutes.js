const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.get("/getAllUsers", getAllUsers);
router.get("/getUserById/:id", getUserById);
router.post("/createUser", createUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
