const router = require('express').Router();
const controller = require('./game');

router.get("/getFIeld", (req, res) => {
    res.send(200, controller.getField());
});

router.post("/move", (req, res) => {
    if (!controller.getEnd()) {
        if (controller.checkFree(req.body.x - 1, req.body.y - 1)) {
            controller.makeMove(req.body.x - 1, req.body.y - 1);
            if (!controller.getEnd()) {
                controller.changeGamer();
            }
            res.send(200, 'ok');
        } else {
            res.send(400, 'error');
        }
    }
});

module.exports = router;