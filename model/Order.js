const mongoose = require("mongoose");
const { Schema } = mongoose;

const deliveryEnum = ["received", "dispatching", "shipped", "delivered", "cancelled"];
const paymentEnum = ["paid", "pending"];

const orderSchema = new Schema(
	{
		products: {
			type: [
				{
					product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
					quantity: { type: Number, required: true, default: 1 },
				},
			],
			required: true,
		},
		customer: { type: Schema.Types.ObjectId, ref: "User", required: true },
		orderStatus: { type: String, enum: deliveryEnum, default: "received" },
		paymentStatus: { type: String, enum: paymentEnum, default: "pending" },
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
