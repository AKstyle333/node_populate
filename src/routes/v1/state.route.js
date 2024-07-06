const express = require("express");
const { state_controller } = require("../../controllers");

const router = express.Router();

router.post(
    "/create_state",
    // controller
    state_controller.create_state
);

router.get(
    "/get_state",
    // controller
    state_controller.get_state
);

router.delete(
    "/delete_state/:id",
    // controller
    state_controller.delete_state
);

router.put(
    "/update_state/:id",
    // controller
    state_controller.update_state
);
module.exports = router;
