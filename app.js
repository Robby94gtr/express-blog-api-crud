const express = require('express');
 
const app = express();
 
const port = 3000;
 
app.use(express.static('public'));
 
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})
 
const routerPosts = require('./router/postsRouter.js');
 
app.use ('/posts', routerPosts);

app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
})