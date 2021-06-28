const mongoose = require('mongoose');
const Collection = require('../model/Collection');
const Product = require('../model/Product');

module.exports = {
  singleCollection: async (req, res, next) => {
    const slug = req.params.slug;
    try {
      const collection = await Collection.find({ slug });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  getAllCollections: async (req, res, next) => {
    try {
      const collections = await Collection.find({});
      res.status(200).json({ collections });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  createSingleCollection: async (req, res, next) => {
    try {
      const { collection } = req.body;
      const newCollection = await Collection.create(collection);

      if (newCollection.isAutomated) {
        const { automated, id } = newCollection;

        const tagsObj = automated.find((obj) => obj.name === 'tags');
        const vendorObj = automated.find((obj) => obj.name === 'vendor');
        const priceObj = automated.find((obj) => obj.name === 'price');

        const tagsValue = tagsObj?.value;
        const vendorValue = vendorObj?.value;
        const priceValue = +priceObj?.value;

        const vendorCondition = vendorObj?.condition;
        const priceCondition = priceObj?.condition;

        const vendorConditions =
          vendorCondition === 'equalTo'
            ? { vendor: { $eq: vendorValue } }
            : vendorCondition === 'notEqualTo'
            ? { vendor: { $ne: vendorValue } }
            : vendorCondition === 'startWith'
            ? { vendor: { $regex: new RegExp('^', vendorValue) } }
            : vendorCondition === 'endsWith'
            ? { vendor: { $regex: new RegExp(vendorValue, '$') } }
            : vendorCondition === 'contain'
            ? { vendor: { $regex: new RegExp(vendorValue) } }
            : {};

        const priceConditions =
          priceCondition === 'equalTo'
            ? { price: { $eq: priceValue } }
            : priceCondition === 'notEqualTo'
            ? { price: { $ne: priceValue } }
            : priceCondition === 'greaterTo'
            ? { price: { $gt: priceValue } }
            : priceCondition === 'lessThan'
            ? { price: { $lt: priceValue } }
            : {};

        const condition =
          newCollection.automatedType === 'allCondition'
            ? {
                $and: [
                  { tags: { $in: [tagsValue] } },
                  vendorConditions,
                  priceConditions,
                ],
              }
            : {
                $or: [
                  { tags: { $in: [tagsValue] } },
                  vendorConditions,
                  priceConditions,
                ],
              };

        const allProduct = await Product.updateMany(condition, {
          $push: { collections: id },
        });
        const productInCollection = await Product.find({
          collections: {
            $in: [id],
          },
        }).distinct('_id');

        newCollection.productsId = productInCollection;
        newCollection.save();
      }
      res.status(400).json({ collection: newCollection });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
