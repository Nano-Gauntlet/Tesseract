var express = require('express');
var router = express.Router();

router.get('/:slug', (req, res)=>{
    if(req.params.slug=="error"){
        res.json({
            query: req.params.slug,
            res: null,
            error: "this is the error msg"
        })
        return;
    }
    res.json({
        query: req.params.slug,
        res: [{
            "title": "this is a dummy title",
            "date": "15/9/2001",
            "description": "This is a sample description. asougfvna iuasbgfvk ikgrvuigg s wggf absifvw figifb uywvciaw yuibwyyf valig"
        }],
        error: null
    });
});

module.exports = router;