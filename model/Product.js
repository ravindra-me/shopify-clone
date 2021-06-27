const mongoose = require('mongoose');
const { Schema } = mongoose;
var slugify = require('slugify');

const statusEnum = ['active', 'draft', 'archived'];

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    images: [{ type: String, required: true }],
    price: { type: Number, required: true },
    comparePrice: { type: Number },
    costPerItem: { type: Number },
    trackQty: { type: Boolean, default: true },
    outOfStock: { type: Boolean, default: false },
    available: { type: Number },
    incoming: { type: Number, default: 0 },
    weight: { type: Number },
    variant: [{ name: { type: String }, options: [{ type: String }] }],
    productStatus: { type: String, enum: statusEnum, default: 'draft' },
    productType: { type: String, required: true },
    vendor: { type: String, required: true },
    tags: [{ type: String }],
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

ProductSchema.pre('save', async function (next) {
  this.slug = slugify(this.title, '-');
  next();
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
