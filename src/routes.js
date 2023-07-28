const { addNoteHandler, getAllNotesHandler } = require('./handler');
const routes = [
    {
      method: 'PUT',
      path: '/books{id}',
      handler: editNoteByIdHandler,
    },
    {
      method: 'GET',
      path: '/books',
      handler: getAllNotesHandler,
      options: {
        cors: {
          origin: ['*'],
        },
      },
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: () => {},
      },
  ];
  const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
  } = require('./handler');