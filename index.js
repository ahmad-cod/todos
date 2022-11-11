const connection = require('./db')
const cors = require('cors')
const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos')

connection();
app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`listening on port ${port}`))