const express = require("express");
const {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

// router.use(authMiddleware);

router.post("/add-item", createItem);
router.get("/", getItems);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;    


// dgkJjuDhvNKIvk3T;
// shubhamshindec1;dgkJjuDhvNKIvk3T