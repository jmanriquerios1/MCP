const express = require('express');
const catalogRouter = require('./routes/catalog');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'MCP server running' });
});

app.use('/v1/actions', catalogRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`MCP server listening on port ${PORT}`);
});
