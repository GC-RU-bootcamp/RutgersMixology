const express = require('express')
const app = express()
var port = process.env.PORT || 8080;
var path = require('path');


var CPU_load_gen = require('./CPU_load_gen');

var os = require('os');
var ifaces = os.networkInterfaces();

var ifaces_list = [];

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;
  var str = "";

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      str = ifname + ':' + alias + " " + iface.address;
      console.log(str);
      ifaces_list.push(str);
    } else {
      // this interface has only one ipv4 adress
      str = ifname + ':' + alias + " " + iface.address;
      console.log(str);
      ifaces_list.push(str);
      // console.log(ifname, iface.address);
    }
    ++alias;
  });
});



// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());
app.use(express.static("public"));


// app.get('/hello', (request, response) => {
//   response.send('Hello from Express!')
// })

app.get("/cpuload", function (req, res) {

  console.log( "request=","get", "req.query=", JSON.stringify(req.query) );

   CPU_load_gen(req.query.seconds)
  
  let retval = {
    hostname : os.hostname(),
    IP4_interfaces: ifaces_list,
    seconds_load : req.params.seconds
  }
 
  return res.json(retval);

});

app.get("/cpuload/:seconds", function (req, res) {

  console.log( "request=","get", "req.params=", JSON.stringify(req.params) );
  CPU_load_gen(req.params.seconds);
  let retval = {
    hostname : os.hostname(),
    IP4_interfaces: ifaces_list,
    seconds_load : req.params.seconds
  }
 
  return res.json(retval);
});

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