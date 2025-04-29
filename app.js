// importo express
const express = require('express');
 
// inizializzo express nella variabile app
const app = express();

// definisco il numero di porta
const port = 3000;

// indico ad express di trattare il body delle richieste come .json
app.use(express.json());

// definisco use per richiamare gli asset statici nella cartella public
app.use(express.static('public'));

// definisco la rotta base dell'app 
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})
 
// importo il router dei post
const postsRouter = require('./router/postsRouter.js');
 
// definisco use per utilizzare postsRouter
app.use ('/posts', postsRouter);


// imposto il server in ascolto sulla porta stabilita
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
})