const express = require("express");
const { city_controller } = require("../../controllers");

const router = express.Router();

router.post(
    "/create_city",
    // controller
    city_controller.create_city
);

router.get(
    "/get_city",
    // controller
    city_controller.get_city
);

router.delete(
    "/delete_city/:id",
    // controller
    city_controller.delete_city
);

router.put(
    "/update_city/:id",
    // controller
    city_controller.update_city
);
module.exports = router;
