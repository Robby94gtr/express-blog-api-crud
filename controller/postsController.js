const posts = require('../data/posts.js')

// index
function index(req, res){
    const tag = req.query.tag;

    let postsFiltered = posts;

    if(tag){
        postsFiltered = posts.filter((post) => {
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
    // definizione dell'id dell'elemento da inserire
    const newId = posts[posts.length -1].id +1;

    // creo il nuovo oggetto da inserire nell'array
    const postsNew = {
       id: newId,
       title: req.body.title,
       content: req.body.content,
       image: req.body.image,
       tags: req.body.tags
    }
    // pusho il nuovo oggetto da inserire nell'array
    posts.push(postsNew);
 
    // restituisco lo stato
    res.status(201);
    res.json(postsNew);
    console.log(posts); 
}
 
// update
function update(req, res){
    // recupero il valore del parametro dinamico in una variabile
    const id = parseInt(req.params.id);
 
    // assegno ad una nuova variabile il valore dell'id precedentemente dichiarato per recuperare lo specifico post
    const post = posts.find(post => post.id === id);
}

// modify
function modify(req, res){
    res.send(`Modifica parziale del post ${req.params.id}`);
}
 
// destroy
function destroy(req, res){
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    posts.splice(posts.indexOf(post), 1);

    res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };