const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // default layout
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'KTI',
        content: 'Welcome to our website'
    });
});

app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About Us',
        content: 'Learn more about our company'
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
