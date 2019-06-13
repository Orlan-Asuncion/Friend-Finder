# Friend-Finder

## Overview

    Build a compatibility-based "Friend-Finder" application -- a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

    Express is used to handle routing. Heroku is used to deploy the app so other users can fill it out.

 ## Getting started

 * Create a folder called "Friend-Finder"   

    * Create a folder called "public" in this folder create two files:

        1.home.html

        2. survey.html

    * Create a folder for the routing, in this folder create two files

        1. apiRoutes.js

            - This will handle two routes
              
               * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
               * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle      the compatibility logic.

        2. htmlRoutes.js

          - This contains two routes

           * A GET Route to `/survey` which should display the survey page.
           * A default, catch-all route that leads to `home.html` which displays the home page.


    * Create another folder called "data" in this folder create a file.

        1. friends.js  

         - This contains the friends array of objects



## Technologies used

   * Javascript

   * Heroku

   * Express

## Packages

  * body-parser

  * path