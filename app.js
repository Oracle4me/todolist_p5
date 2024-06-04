if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const ConnectDb = require('./backend/database/ConnectDb');
const { getAllList, getListId, createList, updateList, deleteList } = require('./backend/controller/listController');
// const requireAuth = require('./middleware/requireAuth');
const port = 3001;
const app = express()

// NOTED untuk menginisialisasikan bahwa express akan mengembalikan data ke dalam json
app.use(express.json());
// Cookie-parser
app.use(cookieParser())
// Cors gunanya untuk middleware
app.use(cors(
  {
    origin: ["http://localhost:3000"],
    credentials: true,
  }
))
// Connect Database MongoDbs
ConnectDb()

// List Routing
app.get('/api/get-all-list', getAllList)
app.get('/api/get-list-id/:id', getListId)
app.post('/api/create-list', createList)
app.patch('/api/update-list/:id', updateList)
app.delete('/api/delete-list/:id', deleteList)

// Listen port url
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`)
})