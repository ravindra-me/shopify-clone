const mongoose = require("mongoose");
const { Schema } = mongoose;
var slugify = require("slugify");

const statusEnum = ["active", "draft"];

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    imgaes: [{ type: String, required: true }],
    pricing: {
      price: { type: Number, required: true },
      comparePrice: { type: Number },
      costPerItem: { type: Number },
    },
    inventory: {
      trackQty: { type: Boolean, default: true },
      outOfStock: { type: Boolean, default: false },
      quntity: {
        available: { type: Number },
        incoming: { type: Number },
      },
    },
    weight: { type: Number },
    variants: {
      addVariant: { type: Boolean, default: false },
      options: [{ option: { type: String }, optionVal: [{ type: String }] }],
    },
    productStatus: { type: String, enum: statusEnum, default: "draft" },
    organization: {
      productType: { type: String, required: true },
      vendor: { type: String, required: true },
    },
    tags: [{ type: String }],
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

ProductSchema.pre("save", async function (next) {
  this.slug = slugify(this.title, "-");
  next();
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
