const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const order = require("../controller/order.js");

// routes avail to user

router.post("/", auth.verifyToken, order.createOrder);
router.post("/:orderId", auth.verifyToken, order.userOrderUpdate);

// routes avail to admin

module.exports = router;
