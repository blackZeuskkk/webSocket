const crypto = requrie('crypto');
const magic = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
const secWebSocketKey = 'w4v7O6xFTi36lq3RNcgctw==';

let secWebSOcketAccept = crypto.createHash('sha1')
  .update(secWebSocketKey + magic)
  .digest('base64');

  console.log(secWebSOcketAccept, 'secWebSOcketAccept');
  console.log(secWebSOcketAccept, 'secWebSOcketAccept');
  console.log(secWebSOcketAccept, 'secWebSOcketAccept');
  console.log(secWebSOcketAccept, 'secWebSOcketAccept');