const express = require('express');
 
const router = express.Router();
 
// index
router.get('/', (req, res) => {
    res.send('Lista dei post')
})
 
// show
router.get('/:id', (req, res) => {
    res.send(`Dettaglio del post ${req.params.id}`)
})
 
// store
router.post('/', (req, res) => {
    res.send('Inserimento del nuovo post')
})
 
// update
router.put('/:id', (req, res) => {
    res.send('Modifica totale del post' + req.params.id)
})
 
// modify
router.patch('/:id', (req, res) => {
    res.send(`Modifica parziale del post ${req.params.id}`)
})
 
// destroy
router.delete('/:id', (req, res) => {
    res.send(`Rimozione del post ${req.params.id}`)
})

module.exports = router;