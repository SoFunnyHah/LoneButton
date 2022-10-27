import express from 'express';
// import morgan from 'morgan';
import path from 'path';
import indexRouter from './routes/indexRouter';
import jsxRender from './utils/jsxRendex';

require('dotenv').config();

const PORT = process.env.PORT || 3005;

const app = express();

app.engine('js', jsxRender);
app.set('view engine', 'js');
app.set('views', path.join(__dirname, 'components'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use(morgan('dev'));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log('The price in dollars for this web:', PORT);
});
