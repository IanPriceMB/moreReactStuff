const router = require("express").Router();
const passportRoutes = require("./auth-routes");

// passport routes
router.use("/passport", passportRoutes);

module.exports = router;
