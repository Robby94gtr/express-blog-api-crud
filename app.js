const express = require('express');
 
const app = express();
 
const port = 3000;
 
app.use(express.static('public'));
 
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})
 
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
})