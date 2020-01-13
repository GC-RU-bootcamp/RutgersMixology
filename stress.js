const {
  spawn
} = require('child_process');
// const ls = spawn('stress', ['-lh', '/usr']);
let cpu_cnt = 1,
  second_cnt = 10;
// --cpu 3 --timeout 500

  // stress = functon (cpu_cnt, second_cnt){}

  stress = function (cpu_cnt, second_cnt) {

  const process = spawn('stress', [`--cpu`, `${cpu_cnt}`, `--timeout`, `${second_cnt}`]);

  process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  process.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  process.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

}

module.exports =  stress;

// stress(2, 5);
