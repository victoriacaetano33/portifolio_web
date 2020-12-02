if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(function(){ console.log('serviceWorker está registrado') })
  .catch(function(){ console.log('erro ao registrar serviceWorker') })
}
