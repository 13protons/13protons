Introducing Browser Streams

I finally took the time to become better acquainted with steams in Node.js in January of 2017, and here I'm going to share a little about what I learned and a new project I'm working on as a result.

First, let's talk about the problem that streams solve. Modern application run on servers, web browsers, and in desktop applications. The 'server' might be many servers (including databases), the web browser might be a phone, and the desktop app might be native or a web page. All these different systems 'talk' to each other at different rates using different protocols.

With that, here's a basic definition that we can build upon:

> Parts of an app can accept and send information at different rates. Streams are a way of managing those differences.

So far so good, right?

### Before Streams

The most intuitive way to get data from a source such as the file system is to simply ready it into a variable before performing further processing.

Consider this code based on [node.js's docs](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_readfilesync_file_options):

```js
let data = fs.readFileSync('./file.txt', 'utf8')
```

While this may be ok for some tasks, such as small files or one time operations, there are several downsides:

  * Main thread is blocked waiting on the filesystem
  * The filesystem speed depends on the underlying hardware (spinning hard drives are slower than solid state drives, for example)
  * Memory consumption is based on the size of the file being read
  * That memory will only be freed up when GC runs, assuming data isn't referenced in a longer running closure of some type

Ok, so problem you say. Just use the `readFile` method instead so the filesystem doesn't block the thread:

```js
fs.readFile('./file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

Ok, yes, that's better. Having a callback fire _after_ reading the underlying file does provide a performance boost, but one fundamental problem still exists: no matter how large `/file.txt` is, it's all being loading into memory **before** the callback is fired.



// Stream example

```js
let streamer = fs.createReadStream('./file.txt').pipe(process.stdout);
streamer.on('error', (err) => {
  throw err;
});
```

https://github.com/alanguir/streams
