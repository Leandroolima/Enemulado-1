
const express = require("express");

const router = express.Router();
const Post = require("../modules/nomes");



router.get('/', async (req, res) => {
    try {
    

        res.sendFile(__basedir + '/index.html')

    } catch (err) {
        res.json({ message: err });
    }

});

router.post('/alunopost', async (req, res) =>
{
    console.log(req.body.enunciado);
    console.log(req.body.letraA);
    
  
    const post = new Post({
        enunciado: req.body.enunciado,
        letraA: req.body.letraA,
        letraB: req.body.letraB,
        letraC: req.body.letraC,
        letraD: req.body.letraD,
        letraE: req.body.letraE,
        Resposta: req.body.Resposta
     

    });
    try{
        const savedPost = await post.save();
        //res.json(savedPost);
        res.sendFile(__basedir + '/index.html')
    }catch(err){
        res.json({message: err});
    }

});


router.get('/all', async (req, res) => {
    try{
        const respostas = await Post.find();
        res.json(respostas);
    }catch(err) {
        res.json({message: err});
    }
});



router.get('/buscaAluno/:cadastro', async (req, res) => {
    try {
        //Post.findOne({ matricula: req.body.matricula })
       // const post = await Post.findById(req.body.matricula);
      // console.log( req.params);
       console.log( req.params.cadastro)
      const post = await Post.findOne({ cadastro: req.params.cadastro });
    // console.log(req.body.matricula);
     //const post = await Post.findOne({ matricula: req.body.matricula });

        res.json(post);

    } catch (err) {
        res.json({ message: err });
    }

});


module.exports = router;






