const express = require('express');
const {
  create,
  index,
  store,
  destroy,
  show,
} = require('../controllers/article.controller');
const router = express.Router();

router.get('/', index);
router.get('/:id', show);
router.get('/create', create);
router.post('/', store);
router.get('/:id', destroy);

exports.articleRouter = router;
