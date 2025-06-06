const express = require('express');
const { searchCatalog } = require('../services/learnCatalog');

const router = express.Router();

router.post('/search-courses', async (req, res) => {
  const { search, locale } = req.body;
  try {
    const data = await searchCatalog(search, locale);
    res.json({ status: 'success', data });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: "error", message: "Failed to retrieve catalog data." });
  }
});

module.exports = router;
