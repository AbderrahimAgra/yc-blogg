const express = require('express');
const app = express();
const path = require('path');
const { articleRouter } = require('./routers/article');

app.use(express.urlencoded({ extended: true }));

// template engine (esj)
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// routers
app.use('/articles', articleRouter);

app.listen(3000);
