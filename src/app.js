import express from 'express';
import infoRouter from './routers/info.router.js';
import apiRandom from './routers/apiRandom.router.js';
import handlebars from 'express-handlebars';
import { fileURLToPath } from 'url';
import path from 'path';
import { config } from './config/index.js';
import compression from 'compression';
import { logger } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = config.server.PORT;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT} :)`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, '../public/views'));
app.set('view engine', 'handlebars');

app.use(compression());
app.use(logger());

app.get('/', (req, res) => {
  req.logger.info(`Ruta: ${req.url} || Método: ${req.method}`);
  res.send(`Listening on PORT ${PORT} :)`);
});

app.post('/error', (req, res) => {
  req.logger.info(`Ruta: ${req.url} || Método: ${req.method}`);
  req.logger.error('Prueba log de error');
  res.send(`Esta es una ruta para testear los errores`);
});

app.put('/warning', (req, res) => {
  req.logger.info(`Ruta: ${req.url} || Método: ${req.method}`);
  req.logger.warn('Prueba log warning');
  res.send(`Este es una ruta para el ejemplo de warnings`);
});

app.use('/info', infoRouter);
app.use('/api/randoms', apiRandom);
