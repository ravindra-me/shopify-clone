const Product = require('../model/Product');
const auth = require('../middleware/auth');
const { find } = require('../model/Product');
const Collection = require('../model/Collection');
module.exports = {
  listAllProduct: async (req, res, next) => {
    try {
      const query = {};
      if (req.query.status) {
        status = req.query.status.toLowerCase();
        query.productStatus = { $in: [status] };
      }
      console.log(query, 'query');
      const allProducts = await Product.find(query);
      res.json({ products: allProducts });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  addProduct: async (req, res, next) => {
    const { product } = req.body;
    try {
      const newProduct = await Product.create(product);
      console.log(newProduct);
      res.json({ product: newProduct });
    } catch (error) {
      res.send(error);
    }
  },
  getSingleProduct: async (req, res) => {
    try {
      const slug = req.params.slug;
      console.log(slug);
      const product = await Product.findOne({ slug: slug });
      res.json({ product: product });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  putSingleProduct: async (req, res, next) => {
    try {
      const { product } = req.body;
      const slug = req.params.slug;
      const getProduct = await Product.findOne({ slug: slug });
      if (getProduct.title !== product.title) {
        product.slug = auth.slug(product.title);
      }
      const updateProduct = await Product.findOneAndUpdate(
        { slug: slug },
        product,
        {
          new: true,
        }
      );
      res.json({ product: updateProduct });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  deleteProduct: async (req, res, next) => {
    try {
      const slug = req.params.slug;
      const deleteProduct = await Product.findOneAndDelete({ slug: slug });
      res.json({ product: deleteProduct });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  putAction: async (req, res, next) => {
    try {
      const { slugs, action } = req.body.product;
      if (action === 'active' || action === 'draft') {
        const products = await Product.updateMany({}, {})
          .where('slug')
          .in(slugs)
          .set({ productStatus: action });
      }
      if (action === 'delete') {
        const productID = await Product.find()
          .where('slug')
          .in(slugs)
          .distinct('_id');
        const collectionUpdate = await Collection.updateMany(
          {
            productsId: { $in: productID },
          },
          { $pull: { productsId: { $in: productID } } }
        );

        const products = await Product.deleteMany({}).where('slug').in(slugs);
      }
      const allProducts = await Product.find({});
      res.json({ products: allProducts });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  addProductToCollectionAutomate: async (req, res, next) => {},
};
