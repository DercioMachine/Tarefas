const express = require('express');

const router = express.Router();

const tarefaController = require('./controllers/tarefaController');
const tarefaMiddleware = require('./middlewares/tarefaMiddleware');

router.get('/tarefa', tarefaController.getAll);
router.post('/tarefa', tarefaMiddleware.validaCampoTitulo, tarefaController.createTarefa);
router.delete('/tarefa/:id', tarefaController.deleteTarefa);
router.put('/tarefa/:id',
  tarefaMiddleware.validaCampoTitulo,
  tarefaMiddleware.validaCampoEstado,
  tarefaController.updateTarefa,
);

module.exports = router;