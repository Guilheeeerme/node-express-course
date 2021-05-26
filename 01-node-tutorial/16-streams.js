// https://nodejs.org/dist/latest-v14.x/docs/api/stream.html#stream_stream

// Streams são usados para ler ou escrever sequencialmente

// Um stream é uma interface abstrata para trabalhar com dados de streaming em Node.js. O módulo de fluxo fornece uma API para implementar a interface de fluxo.

// Existem muitos objetos de fluxo fornecidos pelo Node.js. Por exemplo, uma solicitação a um servidor HTTP e process.stdout são ambas instâncias de fluxo.

// Os fluxos podem ser legíveis, graváveis ​​ou ambos. Todos os fluxos são instâncias de EventEmitter.

// Types of streams#
// There are four fundamental stream types within Node.js:

// Writable: streams to which data can be written (for example, fs.createWriteStream()).
// Readable: streams from which data can be read (for example, fs.createReadStream()).
// Duplex: streams that are both Readable and Writable (for example, net.Socket).
// Transform: Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).
// Additionally, this module includes the utility functions stream.pipeline(), stream.finished() and stream.Readable.from().

const { createReadStream } = require("fs");

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream("./content/big.txt");

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));
