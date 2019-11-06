const server = require("./server.js");

const port = process.env.PORT || 9001;

server.listen(port, () => console.log(`\n** Running on Port ${port} **\n`));
