const express = require("express");
const { genrateShortUrl, getAnalytics } = require("../controller/url");

const router = express.Router();

router.post("/", genrateShortUrl);

router.get("/analytics/:shortId", getAnalytics);

module.exports = router;
