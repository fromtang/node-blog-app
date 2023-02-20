const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 8000;

const route = require('./routes');

const database = require('./config/database/index');

database.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
