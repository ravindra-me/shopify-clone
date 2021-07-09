const mongoose = require('mongoose');
const Collection = require('../model/Collection');
const Product = require('../model/Product');

const collectionHandler = (collection) => {
  return condition;
};

module.exports = {
  singleCollection: async (req, res, next) => {
    const slug = req.params.slug;
    try {
      const collection = await Collection.find({ slug }).populate('productsId');
      res.json({ collection });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  singleCollectionUpdate: async (req, res, next) => {
    try {
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getAllCollections: async (req, res, next) => {
    try {
      const collections = await Collection.find({}).select('title');
      res.status(200).json({ collections });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  editCollections: async (req, res, next) => {
    const { collection } = req.body;
    try {
      const updateCollection = await Collection.findOneAndUpdate(
        { slug: collection.slug },
        { ...collection },
        { upsert: true }
      );
      if (updateCollection.isAutomated) {
        const { automated, id } = updateCollection;

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

        const condition =
          collection.automatedType === 'allCondition'
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

        updateCollection.productsId = productInCollection;
        updateCollection.save();
      }
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

        const condition =
          collection.automatedType === 'allCondition'
            ? {
                $and: multipleCondition,
              }
            : {
                $or: multipleCondition,
              };

        console.log(condition);

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

  deleteMultipleCollections: async (req, res, next) => {
    const { slugs } = req.body;
    try {
      const collectionsID = await Collection.find({
        slug: { $in: slugs },
      }).distinct('_id');

      const product = await Product.updateMany(
        {
          collections: { $in: collectionsID },
        },
        {
          $pull: { collections: { $in: collectionsID } },
        }
      );
      const deleteCollection = await Collection.deleteMany({
        slug: { $in: slugs },
      });

      const collections = await Collection.find({});

      res.status(200).json({ collections });
    } catch (error) {
      console.log(error);
    }
  },

  automatedCollection: async (req, res, next) => {
    try {
      const automatedCollection = await Collection.find({ automated: true });
      automatedCollection.forEach((collection) => {
        const condition = collectionHandler(collection);
        // const updateCollection = await collection
      });
    } catch (error) {}
  },
};
