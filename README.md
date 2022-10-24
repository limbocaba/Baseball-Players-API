## Baseball Legends API

This project was done to create an API of legendary baseball players of all eras and give accurate statistics of their respective careers. With legends who played as far as 110 years ago, to players that just recently retired, this API holds a ton of information on some of the greatest baseball players to walk the earth.

## How to Use

To access the API in your local database, first seed it into your database by doing `node seed/data.js`. After you access to it, run `node server.js` to initiate a server on your local host. You now have access to the API and all its information, to make adjustments to it, refer to "CRUD: Altering Information".

## CRUD: Altering Information

To see all the players in the API, do `localhost:3000/players`

To find a specific player by ID, do `router.get localhost:3000/players:id`

To create a player to add to the API, do `router.post localhost:3000/players`

To update a player's information, do `router.put localhost3000:/players:id`

To delete a player by ID, do `router.delete localhost:3000/players:id`
