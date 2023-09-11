const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path')
const app = express();
const port = 3000;

// Create an instance of Handlebars with custom options
const hbs = exphbs.create({ /* your options here */ });

// Set up Handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set the 'views' directory to where your templates are located
// app.set('views', './views');

// Define a route to render the 'home' template
// app.get('/', (req, res) => {
//   res.render('home');
// });
app.use('/', require(path.join(__dirname, 'routes/blogs.js')));
// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
