const express = require("express");
const {
  getAllUsers,
  updateUserRole,
} = require("../controller/userController");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

router.use(protect); // Protect all routes

router.get("/", authorize("admin"), getAllUsers);
router.put("/role", authorize("admin"), updateUserRole);

module.exports = router;
