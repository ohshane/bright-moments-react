const { spawn } = require('child_process');

let childs = [];

const capture = (quit) => {
  if (process.argv[2] === 'child') {
    const net = require('net');
    const pipe = new net.Socket({ fd: 3 });
    pipe.write({
      'message': true,
      'image': null,
    });
  } else {
    const child = spawn(process.execPath, [__filename, 'child'], {
      stdio: [null, null, null, 'pipe']
    });
    child.stdio[3].on('data', (data) => {
      if (data.message.toString() === 'true') {
        return 
      }
    });
  }
}

export default capture;