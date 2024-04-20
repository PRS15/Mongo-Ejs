const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://premrajesh152:vtpJHVrJh8hmVW3O@mongodb.var4d2f.mongodb.net/crudApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', require('./routes/index'));
app.use('/items', require('./routes/items'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
