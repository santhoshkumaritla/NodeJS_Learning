// Core Module
const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add Home to airbnb'});
})

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  const homeData = {
    houseName: req.body.houseName,
    location: req.body.location,
    price: parseFloat(req.body.price) || 0,
    rating: parseFloat(req.body.rating) || 0,
    photoUrl: req.body.photoUrl || 'https://unsplash.com/photos/a-person-is-about-to-pay-with-a-credit-card-5739mI6xQHY' // fallback image URL
  };
  console.log('Home Registration successful for:', homeData);
  registeredHomes.push(homeData);
  res.render('homeAdded', { pageTitle: 'Home Added Successfully', currentPage: 'homeAdded' });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;