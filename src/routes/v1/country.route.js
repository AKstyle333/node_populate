const express = require("express");
const { country_controller } = require("../../controllers");

const router = express.Router();

router.post(
    "/create_country",
    // controller
    country_controller.create_country
);

router.get(
    "/get_country",
    // controller
    country_controller.get_country
);

router.delete(
    "/delete_country/:id",
    // controller
    country_controller.delete_country
);

router.put(
    "/update_country/:id",
    // controller
    country_controller.update_country
);
module.exports = router;
