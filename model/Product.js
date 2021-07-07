const mongoose = require('mongoose');
const { Schema } = mongoose;
var slugify = require('slugify');

const statusEnum = ['active', 'draft', 'archived'];

const ProductSchema = new Schema(
	{
		title: { type: String, required: true, unique: true, lowercase: true },
		description: { type: String },
		images: [
			{
				type: String,
			},
		],
		price: { type: Number, required: true },
		comparePrice: { type: Number },
		costPerItem: { type: Number },
		trackQty: { type: Boolean, default: true },
		outOfStock: { type: Boolean, default: false },
		available: { type: Number },
		incoming: { type: Number, default: 0 },
		weight: { type: Number },
		variant: [{ name: { type: String }, options: [{ type: String }] }],
		productStatus: { type: String, enum: statusEnum, default: "draft" },
		productType: { type: String, required: true },
		vendor: { type: String, required: true },
		tags: [{ type: String, lowercase: true }],
		slug: { type: String, unique: true },
		collections: [{ type: Schema.Types.ObjectId, ref: "Collection" }],

	},
	{ timestamps: true }
);

ProductSchema.pre('save', async function (next) {
  if (this.title && this.isModified('title')) {
    this.slug = slugify(this.title.toLowerCase(), '-');
    next();
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
