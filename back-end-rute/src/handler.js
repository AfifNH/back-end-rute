const { nanoid } = require('nanoid');
const rute = require('./rute');

const addRuteHandler = (request, h) => {
  const { title, tags, body } = request.payload;
 
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
 
  const newRute = {
    title, tags, body, id, createdAt, updatedAt,
  };
 
  rutes.push(newRute);
 
  const isSuccess = rutes.filter((rute) => rute.id === id).length > 0;
 
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Rute berhasil ditambahkan',
      data: {
        ruteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Rute gagal ditambahkan',
  });
  response.code(500);
  return response;
};

const getRuteByIdHandler = (request, h) => {
  const { id } = request.params;
 
  const rute = rutes.filter((n) => n.id === id)[0];
 
 if (rute !== undefined) {
    return {
      status: 'success',
      data: {
        rute,
      },
    };
  }
 
  const response = h.response({
    status: 'fail',
    message: 'Rute tidak ditemukan',
  });
  response.code(404);
  return response;
};

const getAllRuteHandler = () => ({
  status: 'success',
  data: {
    rutes,
  },
});

const editRuteByIdHandler = (request, h) => {
  const { id } = request.params;
 
  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();
 
  const index = rutes.findIndex((rute) => rute.id === id);
 
  if (index !== -1) {
    rutes[index] = {
      ...rutes[index],
      title,
      tags,
      body,
      updatedAt,
    };
    const response = h.response({
      status: 'success',
      message: 'Rute berhasil diperbarui',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui rute. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};
 

const deleteRuteByIdHandler = (request, h) => {
  const { id } = request.params;
 
  const index = rutes.findIndex((rute) => rute.id === id);
 
  if (index !== -1) {
    rutes.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Rute berhasil dihapus',
    });
    response.code(200);
    return response;
  }
 
 const response = h.response({
    status: 'fail',
    message: 'Rute gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = { addRuteHandler, getAllRuteHandler, getRuteByIdHandler, editRuteByIdHandler, deleteRuteByIdHandler };