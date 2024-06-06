'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "cf0c689bc89d6e13e25920c11e91a52c",
"index.html": "f1e777e8e3352b548fce2c35a6de1351",
"/": "f1e777e8e3352b548fce2c35a6de1351",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "fe929b03b609b82c3bd0d34ae4c54df6",
"manifest.json": "f4ca92613a357b6417e5316b105e5b51",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/FontManifest.json": "dd5ce1916498d58552ecabd19aaed483",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "f48caedd29888baf6abf0003532499b5",
"assets/NOTICES": "1db3c39629789fc9d58bb5fbc8d3af24",
"assets/fonts/MaterialIcons-Regular.otf": "5680119776751b473be6923e3ba20f18",
"assets/AssetManifest.bin": "f9a16fea6f43151b7770396ef9ee2351",
"assets/AssetManifest.bin.json": "a448ceb64e1a19dc62a36aff5bc46692",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/uni/dia1.png": "f79893ae832dc470ea0a3e2830a13bab",
"assets/assets/images/uni/dia3.png": "24ca745ea61cdea25bd63ce4bf82cd50",
"assets/assets/images/uni/uni_logo.png": "ff34db45bdded23cd985d6a81f43b896",
"assets/assets/images/uni/dia2.png": "97b777fb25ddaed7ea53af3f3a8cfd99",
"assets/assets/images/unfv/unfv_logo.png": "90b54eba2f15a333906d41d013c89062",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/unalm/unalm_logo.png": "f8f2b12ed97c5b468e3168058ce3c4eb",
"assets/assets/images/subject/fisica.png": "f5b06e8d38b99738f250165a7a71d66b",
"assets/assets/images/subject/algebra.png": "d3284ac6231a880157b11e1bd796c5d5",
"assets/assets/images/subject/psicologia.png": "57587f8c25d9ad1f3880ec8cf8a0d188",
"assets/assets/images/subject/economia.png": "d249b5fc4ba3cb9d92a6dbcacf5da534",
"assets/assets/images/subject/geometria.png": "f2bc1d392b6d88eb5fb926ce8ba3deb6",
"assets/assets/images/subject/lenguaje.png": "ffaf0bde1cd19e3feacaa838d6cc602d",
"assets/assets/images/subject/quimica.png": "bb9734e96e03e16e66b52c31233e5c52",
"assets/assets/images/subject/biologia.png": "1b26f5013a21fa35b06929857e810dfe",
"assets/assets/images/subject/historia_universal.png": "a7b4f9d784a45d48fa47b08c68006ba4",
"assets/assets/images/subject/habilidad_mate.png": "b16ad248c766964ae403b92a75f462e7",
"assets/assets/images/subject/historia_peru.png": "4200baf80c7ff786923a82bb69350f8f",
"assets/assets/images/subject/civica.png": "76065273732808f6a3410af256d4548f",
"assets/assets/images/subject/trigonometria.png": "2c5e1fb800f7b146390ea7993b27a696",
"assets/assets/images/subject/aritmetica.png": "4e8f3ca3e0336183456af89c809eb441",
"assets/assets/images/subject/filosofia.png": "9fcd866cfa5a2d980cf1b6b492a9b204",
"assets/assets/images/subject/literatura.png": "2564e5de37598d8be33d4326bf23fddd",
"assets/assets/images/unac/unac_logo.png": "d6b0c995097c3e63e8d4c04ce9dedf32",
"assets/assets/images/app/young_people_table.png": "cb85bf7c20db0b7a810985c8c41ae29f",
"assets/assets/images/app/young_people_%2520paper.png": "d9c3679d86a21d8ff64f6e45916ececa",
"assets/assets/images/app/young_woman_laptop.png": "7a008884f14906d3cfe03452c2280eca",
"assets/assets/images/app/young_people_discuss.png": "bf0c371dc32e9e84384a9afad6351173",
"assets/assets/images/app/young_man_laptop.png": "e627ac188e1af0455bf4f03e34ce89ed",
"assets/assets/images/app/young_woman_chat.png": "b6fc2c23cdf5cc0bd2ebff12674ea902",
"assets/assets/images/app/test.png": "a4101641fc981fc402b76b5f3e7c85f4",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/unmsm/area_a.png": "9ae8b5ef6bfd58be68ef2936a6aeedcf",
"assets/assets/images/unmsm/unmsm_logo.png": "ef327ace1ddff75c683ed37fbe9e53da",
"assets/assets/images/unmsm/area_d.png": "5dfd2a8c80e995e5f1f0fd64591bf5be",
"assets/assets/images/unmsm/area_c.png": "0096f63dd967c7de38cdf782d5ff6fc0",
"assets/assets/images/unmsm/area_b.png": "22349b85ced07849cd8ebadcccd2f6c3",
"assets/assets/images/unmsm/area_e.png": "57bfd19f9a45514fb0874885191ff1ba",
"assets/assets/images/unsa/unsa_logo.png": "1d0b709e1e2aca84441317860a8d0581",
"assets/assets/images/untels/untels_logo.png": "38b339eeb96a2c83da4b1d7a923323a4",
"assets/assets/images/une/une_logo.png": "b620cff3735f22e9ecf3e55796b94987",
"assets/assets/fonts/BalooChettan-Regular.ttf": "da85ff5acd81d6e83b02c0887d7d11a2",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Social-font.ttf": "06e28feb724adb0293cd50ef6ff45b30",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
