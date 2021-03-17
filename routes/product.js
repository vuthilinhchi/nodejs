import express from 'express'
const router = express.Router();
// chi tiêt
router.get('/product',(req, res)=>{
    res.json({
        name: 'a',
        id:'1',
        stt:'2'
    })
});
// them san pham
router.post('./product',(req,res)=>{
    //
})
module.exports = router;