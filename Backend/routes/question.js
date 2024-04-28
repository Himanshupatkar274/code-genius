const express = require("express");
const router = express.Router();
const userController = require("../controller/question");

router.get("/html", userController.getAllHmlQuestions);
router.get("/angular", userController.getAllAngularQuestions);
router.get("/css", userController.getAllCssQuestions);
router.get("/js", userController.getAllJsQuestions);
router.get("/node", userController.getAllNodeQuestions); // New route for fetching a particular user
router.post("/trackCertificate",userController.trackCertificate)
module.exports = router;
