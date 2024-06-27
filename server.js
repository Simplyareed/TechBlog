
const express = require('express');
const session = require('express-session');
const sequelize = require("./Develop/config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./Develop/routes');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers: require("./Develop/utils/helpers") });
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: { maxAge: 60 * 1000},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'Develop/public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/Develop/views');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});