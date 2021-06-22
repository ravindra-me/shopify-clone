const slugify = require("slugify");
module.exports = {
  slug: function (title) {
    return slugify(title, "-");
  },
};
