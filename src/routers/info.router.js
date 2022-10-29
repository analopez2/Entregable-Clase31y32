import { Router } from 'express';
import { config } from '../config/index.js';
import { logger } from '../utils.js';

const infoRouter = Router();
infoRouter.use(logger());

infoRouter.get('/', (req, res) => {
  req.logger.info(`Ruta: ${req.baseUrl} || Método: ${req.method}`);
  const info = {
    args: config.Args,
    platformName: process.platform,
    nodeVersion: process.version,
    rss: process.memoryUsage(),
    path: process.execPath,
    pid: process.pid,
    cwd: process.cwd(),
  };
  res.render('info', { info });
});

export default infoRouter;
