const router = require('express').Router();

router.get("/", (req, res) => {
    res.status(200).json({
        iam: " request"
    });

});
router.post("/", (req, res) => {

    const data = req.body;
    try {
        res.status(200).json(data);
    } catch (error) {
        print(data);
        res.status(400).json({
            iam: error
        });
    }


});
module.exports = router;