const tarefaModelo = require('../models/tarefaModelo');

const getAll = async (_request, response) => {
  const tarefas = await tarefaModelo.getAll();
  return response.status(200).json(tarefas);
};

const createTarefa = async (request, response) => {
  const createdTarefa = await tarefaModelo.createTarefa(request.body);
  return response.status(201).json(createdTarefa);
};

const deleteTarefa = async (request, response) => {
  const { id } = request.params;

  await tarefaModelo.deleteTarefa(id);
  return response.status(204).json();
};

const updateTarefa = async (request, response) => {
  const { id } = request.params;

  await tarefaModelo.updateTarefa(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  createTarefa,
  deleteTarefa,
  updateTarefa,
};
