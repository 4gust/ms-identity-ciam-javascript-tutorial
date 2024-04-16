/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const express = require('express');
const router = express.Router();
var { fetch } = require("../fetch");
var {
    GRAPH_ME_ENDPOINT,
  } = require("../authConfig");
  
const authProvider = require("../auth/AuthProvider");

// custom middleware to check auth state
function isAuthenticated(req, res, next) {
    if (!req.session.isAuthenticated) {
        return res.redirect('/auth/signin'); // redirect to sign-in route
    }

    next();
};

router.get('/id',
    isAuthenticated, // check if user is authenticated
    async function (req, res, next) {
        res.render('id', { idTokenClaims: req.session });
    }
);

router.get(
    "/profile",
    isAuthenticated, // check if user is authenticated
    async function (req, res, next) {
      try {
        const graphResponse = await fetch(
          GRAPH_ME_ENDPOINT,
          req.session.accessToken
        );
        res.render("profile", { profile: graphResponse });
      } catch (error) {
        next(error);
      }
    }
  );
// router.post("/redirect", authProvider.handleRedirect());

router.get(
  "/updateProfile",
  isAuthenticated, 
  authProvider.acquireToken({      
    // accessToken: req.session.accessToken,
    scopes: ["api://84b54cf8-bb6f-4b97-ad6d-5633401b8789/user.mfa"],
    redirectUri: "http://localhost:3000/auth/redirect",
    successRedirect: '/users/profile'}),
  async function (req, res, next) {
    console.log(`this is the function ----- ${req.session.accessToken} --- `);
    try {
      const graphResponse = await fetch(
        GRAPH_ME_ENDPOINT,
        req.session.accessToken
      );
    //   console.log(`this is the response ----- ${graphResponse} --- `);
      res.render("updateProfile", {
        profile: graphResponse,
      });
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
