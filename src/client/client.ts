setImmediate(() => {
  emitNet('HalloClient');
});

onNet('HalloClient', message => {
  console.log(`De server heeft een response gegeven van: ${message}`);
});
