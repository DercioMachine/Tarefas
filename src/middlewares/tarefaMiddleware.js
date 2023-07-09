const validaCampoTitulo = (request, response, next) => {
  const { body } = request;

  if (body.titulo === undefined) {
    return response.status(400).json({ message: 'O campo "titulo" é obrigatorio' });
  }

  if (body.titulo === '') {
    return response.status(400).json({ message: 'titulo nao pode estar vazio' });
  }

  next();
};

const validaCampoEstado = (request, response, next) => {
  const { body } = request;

  if (body.estado === undefined) {
    return response.status(400).json({ message: 'O campo "status" é obrigatorio' });
  }

  if (body.estado === '') {
    return response.status(400).json({ message: 'estado nao pode estar vazio' });
  }

  next();
};

module.exports = {
  validaCampoEstado,
  validaCampoTitulo,
};
