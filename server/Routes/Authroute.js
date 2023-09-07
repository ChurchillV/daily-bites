const { Signup, Login, GuestMode } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post("/", userVerification);
router.post("/guest", GuestMode);

module.exports = router;