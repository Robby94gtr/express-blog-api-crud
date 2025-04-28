const posts = require('../data/posts.js')

// index
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
function show(req, res){
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    res.json(post);
}
 
// store
function store(req, res){
    res.send('Inserimento del nuovo post');
}
 
// update
function update(req, res){
    res.send(`Modifica totale del post ${req.params.id}`);
}

// modify
function modify(req, res){
    res.send(`Modifica totale del post ${req.params.id}`);
}
 
// destroy
function destroy(req, res){
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    posts.splice(posts.indexOf(post), 1);

    res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };