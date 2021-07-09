const mongoose = require('mongoose');
const slugify = require('slugify');
const { Schema } = mongoose;

const automatedNameEnum = ['tags', 'vendor', 'price'];
const automatedConditionEnum = [
  'equalTo',
  'notEqualTo',
  'greaterThan',
  'lessThan',
  'startWith',
  'endsWith',
  'contain',
  'doesNotContain',
];
const collectionConditionEnum = ['allCondition', 'anyCondition'];

const collection = new Schema(
  {
    title: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, required: true },
    images: { type: String },
    onlineStore: { type: Boolean, default: true },
    availableDate: { type: Date, required: true },
    productsId: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    manual: { type: Boolean, default: true },
    automated: [
      {
        name: { type: String, enum: automatedNameEnum },
        condition: {
          type: String,
          enum: automatedConditionEnum,
        },
        value: { type: String },
      },
    ],
    automatedType: { type: String, enum: collectionConditionEnum },
    isAutomated: { type: Boolean, default: false },
    slug: { type: String, unique: true, lowercase: true },
  },
  {
    timestamps: true,
  }
);

collection.pre('save', async function (next) {
  if (this.title && this.isModified('title')) {
    this.slug = slugify(this.title.toLowerCase(), '-');
    console.log(this.slug);
    next();
  }
});

const Collection = mongoose.model('Collection', collection);
module.exports = Collection;
