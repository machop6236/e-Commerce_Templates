const express = require('express');
const app = express();

/* app object represents the underlying running express server.
   '/' watch for requests trying to access '/'.
   req - JS Object that represents the incoming request.
   res - JS Object representing the outgoing response.
*/
app.get('/', (req, res) => {
   res.send({ mike: 'drop' }); 
});

//Dynamic port binding.
const PORT = process.env.PORT || 8080;
/* Environment variables are those that are set in the underlying runtime 
   that node is running on top of*/
app.listen(PORT);



