import express from 'express';
import { create } from 'express-handlebars';
import { resolve } from 'path';
import { router } from './main-router.js';
import Mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { setRatingsHtml } from './views/helpers/ratings.js';
import { getQuantityOptions } from './views/helpers/quantity.js';
const { connect } = Mongoose; ;
async function createApplication () {
  // INIT DB
  try {
    await connect('mongodb://root:test123*@localhost:27017/ecommerce?authSource=admin');
    // eslint-disable-next-line no-console
    console.log('Connected to Mongo server');
  } catch (e:unknown) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
  // INIT APPLICATION
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.set('views', resolve(process.cwd(), 'src', 'views'));
  const hbsConfig = { extname: '.hbs', helpers: { setRatingsHtml, getQuantityOptions } };
  const hbs = create(hbsConfig);

  app.engine('hbs', hbs.engine);
  app.set('view engine', 'hbs');
  app.use(express.static(resolve(process.cwd(), 'public')));
  app.use(router);
  app.listen(8000, () => {
  // eslint-disable-next-line no-console
    console.log('The server is listening at port 8000');
  });
}
export { createApplication };
