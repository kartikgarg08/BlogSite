const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

mongoose.connect('mongodb://localhost:27017/blog-db')
.then(()=> console.log('DB Connected'))
.catch((err)=> console.log(err));

// seedDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const sessionConfig = {
    secret: 'WeNeedSomeBetterSecret',
    resave: false,
    saveUninitialized: true,
}

app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

const blogRoutes = require('./routes/blogRoutes');

app.get('/', (req, res)=> {
    res.send('Blog page');
});

app.get('/error', (req, res) => {
    res.render('error');
});

app.use(blogRoutes);

app.listen(8000, ()=>{
    console.log('Server running at port 8000');
});