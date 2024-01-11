'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5242c9b0ed1f3dac12123adad2261642",
"index.html": "670810f753445a17fd5502f6b1e31388",
"/": "670810f753445a17fd5502f6b1e31388",
"main.dart.js": "75307ab08c1934b5c2f8f4a71864d905",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a05579a1af39cebe311b1dbc98b2331c",
"assets/AssetManifest.json": "50857e6d0abe20bf3f9c03864631e703",
"assets/NOTICES": "073529eed1b90811171e6f10feae7463",
"assets/FontManifest.json": "b406879872f6995bdbe0f1cf4ffd68b1",
"assets/AssetManifest.bin.json": "823271f32a94decd2725555cb9c7c680",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "77a7bafe9ffd9f7ac523140bfffff322",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/no_vehicle.png": "ceae63076052c28c648dda1b8aa1a5ac",
"assets/assets/images/login.png": "aa6539f7a825c04d0e99b74a795b4f92",
"assets/assets/images/login_bg.png": "3ada64a8221422d698dcd965cab31902",
"assets/assets/images/empty_picture.png": "5975d96b60a6337d4319ca9900f2bc2f",
"assets/assets/images/user_avatar.png": "6f6bbb16aec97391aefe120ec5a4e6a2",
"assets/assets/images/home_no_parking.png": "069458f9aeb2331a76e7d192f57a9093",
"assets/assets/images/dart_course.png": "777c78b4cd3abdee35028982c339b5d2",
"assets/assets/images/github.png": "9c7822bff334f1bf1570ae88a2e24e0f",
"assets/assets/images/landing_item_1.png": "61fb5385102c4fbd92dbae2de2c6a154",
"assets/assets/images/landing_item_3.png": "abbe93114a35bc529be8f7bc3eb3f3d9",
"assets/assets/images/header_image.png": "199f3d8fd120c1908b2ba2071f22124d",
"assets/assets/images/vehicle_appbar_icon.png": "466925e4b986095a130beac81dc0627a",
"assets/assets/images/landing_item_2.png": "2c0dd284665bf3346aafdc08916c247a",
"assets/assets/images/monkey.png": "5595166ede23d47933a3ed90fdea2af1",
"assets/assets/images/MealMonkeyLogo.png": "6c514f6a6260cd3c3dd277628721d593",
"assets/assets/images/ui.png": "2fb272eb9dc2eaebf0034206e039109f",
"assets/assets/images/kakelay.jpg": "54f41f7f3f6457d3c9dac3b00a4e66d7",
"assets/assets/images/camera.png": "66f17adbe76d1db6ce0057618fdabfbd",
"assets/assets/lotties/search.json": "53ad817aa5181d98fa103b46556ed435",
"assets/assets/lotties/loading.json": "f7b4ad4f66e75812172b295dad2583bf",
"assets/assets/lotties/success.json": "1b38d62572b68cabfeeeadd6a930c00b",
"assets/assets/lotties/arrowback.json": "b723e18a21f2c8adccc6d9fa655ad2ae",
"assets/assets/lotties/rejected-request.json": "be1943dd5560aaed07fb588e5c2cc12b",
"assets/assets/lotties/empty-notifications.json": "db970353e6787abd1952abdc516e386c",
"assets/assets/lotties/no-internet.json": "c9386298e8e1ed774997aece74ff95f4",
"assets/assets/map_styles/light.json": "efa696dd7a0df9afe0037c2b84a74fdd",
"assets/assets/map_styles/custom_map_style.json": "a34d378bca70afd5443e80f63be9ddfb",
"assets/assets/map_styles/dark.json": "5b4f100b89841019da37e2d6c56f9cea",
"assets/assets/app_icons/512x512.png": "f99d658a7e26a2e950821520c3e35b53",
"assets/assets/svgs/feedback_line.svg": "31552117052d10a44f0b0ce0e418807f",
"assets/assets/svgs/flashlight.svg": "7083ff4f80608ac2d53453b558a0480f",
"assets/assets/svgs/list.svg": "5fd9641a1790c360190e0fb9f02059fa",
"assets/assets/svgs/parking_active.svg": "93d7ad822cb28a93ac63c1e59aa7ef1a",
"assets/assets/svgs/info_rounded_outline.svg": "2d6e22d639fc5539689a4efff71a2f0e",
"assets/assets/svgs/setting_active.svg": "c3cd027b41d35486f12ad3da79862634",
"assets/assets/svgs/list_curve.svg": "8ed6e9a94be091bb3d48d531388a04ae",
"assets/assets/svgs/logout.svg": "e5d8dc7a27f6d880dc0f3912777ea71f",
"assets/assets/svgs/refresh_recent.svg": "f23738ceab74309e0506194315bba4cf",
"assets/assets/svgs/scan_qr.svg": "0bc7c263a03f3b1fdc97715bfd412ed8",
"assets/assets/svgs/warning_triangle.svg": "f1ef80e1169d18a7897583cb212d77ce",
"assets/assets/svgs/recycle_bin.svg": "6902a497dea43f737dcb500580bd7777",
"assets/assets/svgs/map.svg": "93bbb2d43c84f7b468df7c0953b47f2a",
"assets/assets/svgs/timer-fill.svg": "1388a24abd1cce1787e1ca878d63b079",
"assets/assets/svgs/location_pin.svg": "da94dcba4da2f921f0555554e84db57d",
"assets/assets/svgs/app_icon.svg": "eb502e9c7ecf63d70e184af0162d01a1",
"assets/assets/svgs/phone_android.svg": "7b9f84daf309b5893da257096f139fb9",
"assets/assets/svgs/eye_close.svg": "594dc8cc0c6d21847b4dcd66383c1ce3",
"assets/assets/svgs/location_active.svg": "5b4017269508c6dd5d00f3ce95fc629d",
"assets/assets/svgs/flashlight_active.svg": "ab9312b873817fca56970025d6d34881",
"assets/assets/svgs/plus.svg": "b5486f0a42524bfff18f7ea350d9a390",
"assets/assets/svgs/check.svg": "2f88e29519d87865b7f961e9876fe7b3",
"assets/assets/svgs/world.svg": "1453ab9f5235ace58d341ea9e3d71aa8",
"assets/assets/svgs/refresh.svg": "72e44bca04e06da1b0a4fe4306231cc0",
"assets/assets/svgs/star_line.svg": "6f23c965210fcb52ccbac6921ea40232",
"assets/assets/svgs/qr_scan_line.svg": "37c17c35c6ca1d51b32275b457c22ea7",
"assets/assets/svgs/navigation.svg": "f0bd6d6e4efba825303c219810626bc5",
"assets/assets/svgs/setting.svg": "64b1df6b36f2cacf8993d04e25a08273",
"assets/assets/svgs/vehicle.svg": "d768474efd93c3f68c909e49d9a55312",
"assets/assets/svgs/notification.svg": "ddb51819e0ee446c4f6bfc70a15d9bab",
"assets/assets/svgs/eye_open.svg": "717f416833f098a1ce0b1086bb9dd787",
"assets/assets/svgs/edit_fill.svg": "d0b3b6f2f5d25af1fbf16a3dd65533fd",
"assets/assets/svgs/ri_history_fill.svg": "0b32aaf70081857b327d0c7a6013162a",
"assets/assets/svgs/app_icon_full.svg": "31a5d6b47ad3a7cdad18dae64b946e59",
"assets/assets/svgs/phone-fill.svg": "5759729221902adb98a8f798ebbf6297",
"assets/assets/svgs/user_with_lines.svg": "2ea05852aeb19d4db749e5ba3fde1529",
"assets/assets/svgs/bug.svg": "294ee41add86b144210fec7a841883b2",
"assets/assets/svgs/splash_screen_icon.svg": "40cb30518de8a2fbb21b8478e81c51ca",
"assets/assets/svgs/clock.svg": "0dec46e78b24641f330b2a682485e005",
"assets/assets/svgs/logo_team.svg": "f0682fe66a14d1990afb1a0f45a1f309",
"assets/assets/svgs/phone.svg": "b57b6e693cbc18423757af88dc1995f1",
"assets/assets/svgs/magnifier.svg": "303b726b6dcdb198a1dbd7472a2ad9f8",
"assets/assets/svgs/vehicle_active.svg": "3b08a18b69329ebbcbc1515313b20fa0",
"assets/assets/svgs/parking.svg": "eb7a19874d04482ef7ab398196f33b0c",
"assets/assets/svgs/curve_arrow_down.svg": "90de0de5142da885b1599566bfacae17",
"assets/assets/svgs/parking-box-fill.svg": "cd2ed2d2590388568180fc475bfd086f",
"assets/assets/icons/normal_marker_icon.png": "88bd9258435173c54f4e4657c474f3d4",
"assets/assets/icons/unselect_location_close.png": "15ecfc1d872dfea56913ff841b01f8f4",
"assets/assets/icons/location_open.png": "d68bd94be93649370b165280fc105bc0",
"assets/assets/icons/selected_marker_icon.png": "a504f67e2648e387378d8920364ae8d2",
"assets/assets/icons/unselect_location_open.png": "02550ada0ca1732269a176bf59ce7734",
"assets/assets/icons/cambodia-flag.png": "318e127d4f74246b2d87913f642fa0ca",
"assets/assets/icons/english-flag.png": "ac7efe2ba0dff4939a1d7ac55c55e0f5",
"assets/assets/icons/google.png": "3eedf8cbffcb8b1896aa64d1d42b5c15",
"assets/assets/icons/facebook.png": "ea22d70038c82153bd65820c0cca2675",
"assets/assets/icons/location_close_active.png": "f05b5a643720b9d41882a9dfddfe1a96",
"assets/assets/icons/spain-flag.png": "a9c06936eac9863d13ce7a2332b7cff5",
"assets/assets/fonts/NotoSansKhmer-Medium.ttf": "68468f9ff32ff87465defd5c1c2364b7",
"assets/assets/fonts/NotoSansKhmer-ExtraLight.ttf": "5d4bbf8f4d4cb910c46a455108add7f3",
"assets/assets/fonts/NotoSansKhmer_VariableFont.ttf": "e620b3b54d31ade0870d2e6da056dfe1",
"assets/assets/fonts/NotoSansKhmer-Light.ttf": "c613c8b66a238fd1f54f86fb284018f8",
"assets/assets/fonts/NotoSansKhmer_Bold.ttf": "2c963e6e3ff91b02b1bf59898be8dfba",
"assets/assets/fonts/NotoSansKhmer_Regular.ttf": "13bd012c46f28f43505f4547e75dd979",
"assets/assets/fonts/NotoSansKhmer_SemiBold.ttf": "9038be1db91667c3c04e274f8c292a2f",
"assets/assets/fonts/NotoSansKhmer-Black.ttf": "8207a0842401b5261a85a52f707dfb27",
"assets/assets/fonts/NotoSansKhmer-Thin.ttf": "cba4a81f328699409bb9e2a482cc12e3",
"assets/assets/fonts/NotoSansKhmer_ExtraBold.ttf": "5f63c37508fd7d64f03a13f6b79b4eb9",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
