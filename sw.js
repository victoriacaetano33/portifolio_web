const cacheName = "portfolio-v1"
const files = [
  '/portifolio_web/',
  '/portifolio_web/index.html',
  '/portifolio_web/js/scripts.js',
  '/portifolio_web/css/styles.css',
  'https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js'
]

self.addEventListener('install', function(evt){
  console.log('install sw');
  evt.waitUntil(caches.open(cacheName).then(function(cache){
    console.log('colocando arquivos na cache')
      cache.addAll(files)
    }))
})

self.addEventListener('activate', function(evt){
  console.log("activate sw")
  evt.waitUntil(caches.keys().then(function(keys){
    return Promise.all(
      keys
      .filter(key => key != cacheName)
      .map(key => caches.delete(Key))
    )
  }))
})

self.addEventListener('fetch', function(evt){
  console.log("fetch sw")
  evt.respondWith(
    caches.match(evt.request).then(function(res){
      return res || fetch(evt.request)
    }))
})
