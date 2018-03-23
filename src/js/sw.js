self.addEventListener("install", function() {
  alert('ServiceWorker Installed!')
});

self.addEventListener('activate', function() {
  alert("ServiceWorker Activated!")
});

self.addEventListener('fetch', function() {
  alert("ServiceWorker Fetch!");
});