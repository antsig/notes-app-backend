const { nanoid } = require('nanoid');
 
const addNoteHandler = (request, h) => {
const { title, tags, body } = request.payload;
 
const id = nanoid(16);
};