const fs = require('fs');

setTimeout(()=> console.log('FROM TIMOUT function 1'),0);

setImmediate(()=>console.log("from immeditae function1 "));

