onNet('HalloClient', () => {
  const _source = (global as any).source;

  console.log(`Hallo van ${_source}`);

  emitNet('HalloClient', _source, 'Ik heb je bericht ontvangen');
});
