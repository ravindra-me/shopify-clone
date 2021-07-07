const Order = require("../model/Order");
const User = require("../model/User");

module.exports = {
	createOrder: async (req, res, next) => {
		const { order } = req.body;
		const { userId } = req.user;
		try {
			const newOrder = await Order.create({ ...order, customer: req.user.userId });
			const updateUser = await User.findByIdAndUpdate(userId, { $push: { orders: newOrder.id } }, { new: true });
			res.status(201).json({
				order: newOrder,
			});
		} catch (error) {
			console.log(error);
			next(error);
		}
	},

	userOrderUpdate: async (req, res, next) => {
		const {
			order: { orderStatus },
		} = req.body;
		const { orderId } = req.query;
		try {
			const userOfOrder = await User.find({ orders: [orderId] }).select("_id");
			if (userOfOrder === req.user.userId && orderStatus === "cancelled") {
				const updatedOrder = await Order.findByIdAndUpdate(orderId, { orderStatus }, { new: true });
				res.status(200).json({ order: updatedOrder });
			}
		} catch (error) {
			console.log(error, "abc");
			next(error);
		}
	},
};
