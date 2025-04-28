const posts = require('../data/posts.js')
 
function index(req, res){
    const tag = req.query.tag;

    let postsFiltered = posts;

    if(tag){
        postFiltered = posts.filter((post) => {
            return post.tags.includes(tag);
        })
    }

    res.json(postsFiltered);
}
 
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