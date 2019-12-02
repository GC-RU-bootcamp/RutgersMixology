const express = require('express')
const app = express()
var port = process.env.PORT || 8080;
var path = require('path');


// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());
app.use(express.static("public"));


// app.get('/', (request, response) => {
//   response.send('Hello from Express!')
// })


app.get("/", function(req, res) {

  console.log( "request=","get '*'",  "req.body=", JSON.stringify(req.params) );

  res.sendFile(path.join(__dirname,"/index.html"));
});

app.get("*", function(req, res) {

  console.log( "request=","get '*'",  "req.body=", JSON.stringify(req.params) );

  const retval = decodeURIComponent(path.join(__dirname, req.path));
  console.log("path=", retval)
  res.sendFile(retval);
});


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})