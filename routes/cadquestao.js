const express = require("express");

const router = express.Router();
const Post = require("../modules/Mquestao");


router.post('/', async (req, res) => {

    console.log("sa bosta")

    const post = new Post({

        Enuciado: req.body.Enuciado,
        letraA: req.body.letraA,
        letraB: req.body.letraB,
        letraC: req.body.letraC,
        letraD: req.body.letraD,
        letraE: req.body.letraE


    });
    try {
        const savedPost = await post.save();
        
        res.sendFile(__basedir + '/index.html')
    } catch (err) {
        res.json({ message: err });
    }

});



//all
router.get('/', async (req, res) => {

    try {
        const posts = await Post.find();
        res.json(posts);

    } catch (err) {
        res.json({ message: err });

    }
});10
2



module.exports = router;




