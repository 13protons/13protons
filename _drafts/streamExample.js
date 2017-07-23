/*
Node filesystem (fs) .readFile vs. .readStream

This example

Example results:

...
Execution time for callback style read (hr): 0s 31.371228ms
Execution time for stream style read (hr): 0s 21.792305ms
*/

const fs = require('fs');
let fileName = './file.txt';

let CBStyle = new Promise((resolve, reject) => {
  // Consuming data as a callback

  let ts = process.hrtime();
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    resolve(process.hrtime(ts)); // how long did it take?
  });
});

let StreamStyle = new Promise((resolve, reject) => {
  // Consuming data as a stream

  let ts = process.hrtime();
  let streamer = fs.createReadStream(fileName);

  streamer.on('end', () => {
    resolve(process.hrtime(ts));
  });

  streamer.on('error', (err) => {
    reject(process.hrtime(ts));
    throw err;
  });

  streamer.pipe(process.stdout);
});

// Print both timestamps side x side
// Promise.all without the pre-resolve always results in the first call being slowest

CBStyle.then((cb_result) => {
  setTimeout(()=>{
    StreamStyle.then((stream_result) => {
      printHrTime(cb_result, 'callback style read');
      printHrTime(stream_result, 'stream style read');
    });
  }, 100);
})
.catch((err) => {
  console.error(err);
});

// Timer util
function printHrTime(timeStamp, msg) {
  console.info(`Execution time for ${msg} (hr): ${timeStamp[0]}s ${timeStamp[1]/1000000}ms`);
}
