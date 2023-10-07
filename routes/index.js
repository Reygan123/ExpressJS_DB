const express = require("express");
const router = express.Router();
const { film, category, film_category } = require("../models");

//Menampilkan Seluruh Data Film
router.get("/film", async (req, res) => {
  const listFilm = await film.findAll();
  res.status(200).json(listFilm);
});

//Menampilkan Film Berdasarkan ID
router.get("/film/:id", async (req, res) => {
  const { id } = req.params;

  const Film = await film.findOne({
    where: {
      film_id: +id,
    },
  });

  res.status(200).json(Film);
});

//Menampilkan Seluruh Kategori
router.get("/category", async (req, res) => {
  const Category = await category.findAll();
  res.status(200).json(Category);
});

//Menampilkan Film Berdasarkan Kategori
router.get("/film/category/:id", async (req, res) => {
  const { id } = req.params;

  const Category_Film = await film_category.findOne({
    where: {
      category_id: +id,
    },
  });

  res.status(200).json(Category_Film);
});

module.exports = router;
