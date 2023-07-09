const connection = require('./connection');

const getAll = async () => {
  const [tarefa] = await connection.execute('SELECT * FROM tarefa');
  return tarefa;
};

const createTarefa = async (Tarefa) => {
  const { titulo } = Tarefa;
  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO tarefa(titulo, estado, created_at) VALUES (?, ?, ?)';

  const [createdTarefa] = await connection.execute(query, [titulo, 'pendente', dateUTC]);
  return {insertId: createdTarefa.insertId};
};

const deleteTarefa = async (id) => {
  const [removedTarefa] = await connection.execute('DELETE FROM tarefa WHERE id = ?', [id]);
  return removedTarefa;
};

const updateTarefa = async (id, Tarefa) => {
  const { titulo, estado } = Tarefa;
  
  const query = 'UPDATE tarefa SET titulo = ?, estado = ? WHERE id = ?';

  const [updatedTarefa] = await connection.execute(query, [titulo, estado, id]);
  return updatedTarefa;
};

module.exports = {
  getAll,
  createTarefa,
  deleteTarefa,
  updateTarefa,
};
