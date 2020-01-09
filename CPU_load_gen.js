var fs = require("fs");

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

// //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);

getSeconds = function (from, to) {
  //Get 1 day in milliseconds
  // var one_day=1000*60*60*24;
  var seconds = 1000;

  // Convert both dates to milliseconds
  var from_ms = from.getTime();
  var to_ms = to.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = to_ms - from_ms;

  // Convert back to days and return

  return Math.round(difference_ms / seconds);
}

//Fire the 'scream' event:
// eventEmitter.emit('scream');

writeMsg = function (fd, str) {
  fs.writeFileSync(fd, str, function (err) {
    if (err) {
      return console.error(err);
    }

  });
}




cpu_load = function (seconds_delay) {
  let start = new Date();
  let start_ms = start.getTime();
  let now = start;
  let now_ms = start_ms;
  let seconds_cnt = 0;
  let cnt_ms = seconds_delay * 1000;
  let end_ms = start_ms + cnt_ms;
  let str = "";
  filename = 'temp.txt';

  console.log("Going to open file!");
  var file = fs.open(filename, 'w+', function (err, fd) {
    if (err) {
      return console.error(err);
    }
    str = "File opened successfully! =>" + filename;
    console.log(str);
    writeMsg(fd, "\n" + str + "\n");

    while (true) {
      now = new Date();
      now_ms = now.getTime();
      seconds_cnt = getSeconds(start, now)
      // console.log(x, z, y, seconds_cnt);



      // if (seconds_cnt >= seconds_delay) {
      if (now_ms >= end_ms) {
        str = "break loop "
        console.log(str);
        writeMsg(fd, "\n" + str + "\n");
        break;
      } else {
        str = " seconds=" + seconds_cnt + " start_ms="+ start_ms + " now_ms="+ now_ms+ " end_ms="+ end_ms  ;
        console.log(str);
        writeMsg(fd, str);
      }

      // fs.writeFileSync(fd, 'Simply Easy Learning!', function (err) {
      //   if (err) {
      //     return console.error(err);
      //   }

      // });


    }
    str = " closing file = " + filename + "\n";
    // writeMsg(fd, str);

    console.log(str);
    var file = fs.closeSync(fd, function (err, fd) {
      if (err) {
        return console.error(err);
      }
    });
    console.log("File closed successfully!");

    console.log("done!");
    return seconds_delay;

  });
};

module.exports =  cpu_load;

// var seconds_amount = 5;
// cpu_load(seconds_amount);