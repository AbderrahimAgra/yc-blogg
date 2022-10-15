const { Article } = require('../models');
const { Category } = require('../models');

exports.index = async (req, res) => {
  const articles = await Article.findAll({ include: Category, raw:true,nest:true });
  res.render('articles.ejs', { articles });
  console.log(articles)
};

exports.show = async (req, res) => {
  const article = await Article.findByPk(req.params.id);
  res.render('article.ejs', { article });
};

exports.create = async (req, res) => {
  const categories = await Category.findAll();
  res.send('ok')
};

exports.store = async (req, res) => {
  await Article.create({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    CategoryId: req.body.categoryId,
  });
  res.redirect('/articles');
};

exports.destroy = async (req, res) => {
  await Article.destroy({
    where: { id: req.params.id },
  });
  res.redirect('/articles');
};
