const { addRuteHandler, getAllRuteHandler, getRuteByIdHandler, editRuteByIdHandler, deleteRuteByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/rute',
    handler: addRuteHandler,
  },
  {
    method: 'GET',
    path: '/rute',
    handler: getAllRuteHandler,
  },
  {
    method: 'GET',
    path: '/rute/{id}',
    handler: getRuteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/rute/{id}',
    handler: editRuteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/rute/{id}',
    handler: deleteRuteByIdHandler,
  },
];

module.exports = routes;
 
