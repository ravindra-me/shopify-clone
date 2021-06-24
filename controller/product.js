const Product = require("../model/Product");
const auth = require("../middleware/auth");
module.exports = {
  listAllProduct: async (req, res, next) => {
    try {
      const query = {};
      if (req.query.status) {
        status = req.query.status.toLowerCase();
        query.productStatus = { $in: [status] };
      }
      console.log(query);
      const allProducts = await Product.find(query);
      console.log(allProducts);
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
};
