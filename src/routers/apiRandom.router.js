import { Router } from 'express';
import { fork } from 'child_process';
import { logger } from '../utils.js';

const apiRandom = Router();
apiRandom.use(logger());

apiRandom.get('/', async (req, res) => {
  req.logger.info(`Ruta: ${req.baseUrl} || Método: ${req.method}`);
  let cant = req.query.cant ?? 100000000;
  const result = fork('./src/child.process.js');
  result.send(cant);
  result.on('message', (values) => {
    res.send({
      data: values,
    });
  });
});

export default apiRandom;
