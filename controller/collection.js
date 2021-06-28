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
      console.log(collection);
      const newCollection = await Collection.create(collection);

      if (newCollection.isAutomated) {
        const { automated, id } = newCollection;

        // const tagsObj = automated.find((obj) => obj.name === 'tags');
        // const vendorObj = automated.find((obj) => obj.name === 'vendor');
        // const priceObj = automated.find((obj) => obj.name === 'price');

        // const tagsValue = tagsObj?.value;
        // const vendorValue = vendorObj?.value;
        // const priceValue = +priceObj?.value;

        // const vendorCondition = vendorObj?.condition;
        // const priceCondition = priceObj?.condition;

        // const vendorConditions =
        //   vendorCondition === 'equalTo'
        //     ? { vendor: { $eq: vendorValue } }
        //     : vendorCondition === 'notEqualTo'
        //     ? { vendor: { $ne: vendorValue } }
        //     : vendorCondition === 'startWith'
        //     ? { vendor: { $regex: new RegExp('^', vendorValue) } }
        //     : vendorCondition === 'endsWith'
        //     ? { vendor: { $regex: new RegExp(vendorValue, '$') } }
        //     : vendorCondition === 'contain'
        //     ? { vendor: { $regex: new RegExp(vendorValue) } }
        //     : {};

        // const priceConditions =
        //   priceCondition === 'equalTo'
        //     ? { price: { $eq: priceValue } }
        //     : priceCondition === 'notEqualTo'
        //     ? { price: { $ne: priceValue } }
        //     : priceCondition === 'greaterTo'
        //     ? { price: { $gt: priceValue } }
        //     : priceCondition === 'lessThan'
        //     ? { price: { $lt: priceValue } }
        //     : {};

        const multipleCondition = automated.reduce((acc, v) => {
          if (v.name === 'vendor') {
            acc.push(
              v.condition === 'equalTo'
                ? { vendor: { $eq: v.value } }
                : v.condition === 'notEqualTo'
                ? { vendor: { $ne: v.value } }
                : v.condition === 'startWith'
                ? { vendor: { $regex: new RegExp(`^${v.value}`) } }
                : v.condition === 'endsWith'
                ? { vendor: { $regex: new RegExp(`${v.value}$`) } }
                : v.condition === 'contain'
                ? { vendor: { $regex: new RegExp(v.value) } }
                : {}
            );
          } else if (v.name === 'price') {
            acc.push(
              v.condition === 'equalTo'
                ? { price: { $eq: +v.value } }
                : v.condition === 'notEqualTo'
                ? { price: { $ne: +v.value } }
                : v.condition === 'greaterTo'
                ? { price: { $gt: +v.value } }
                : v.condition === 'lessThan'
                ? { price: { $lt: +v.value } }
                : {}
            );
          } else {
            acc.push({ tags: { $in: [v.value] } });
          }

          return acc;
        }, []);

        console.log(multipleCondition, 'condition');

        const condition =
          newCollection.automatedType === 'allCondition'
            ? {
                $and: multipleCondition,
              }
            : {
                $or: multipleCondition,
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
      res.status(200).json({ collection: newCollection });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
