const express = require("express");
const cityRoutes = require("./city.route");
const stateRoutes = require("./state.route");
const countryRoutes = require("./country.route");

const router = express();

router.use("/city", cityRoutes);
router.use("/state", stateRoutes);
router.use("/country", countryRoutes);

module.exports = router;
