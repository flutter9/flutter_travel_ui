'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bdd8d75eb9e6832ccd3117e06c51f0d3",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3ca122272cfac33efb09d0717efde2fa",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d21f791b837673851dd14f7c132ef32e",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/newdelhi.jpg": "56450a1054fcf15bab1f51af0fa90281",
"/assets/assets/images/murano.jpg": "74851df25b8f4bca02afcfe05a0b7169",
"/assets/assets/images/paris.jpg": "6f5ad05e3583bfcdb378690cab52c4c7",
"/assets/assets/images/stmarksbasilica.jpg": "d9dfdeebfc0b8d65bf8e519867838247",
"/assets/assets/images/hotel2.jpg": "07a77366730e5997e096c7eac049c787",
"/assets/assets/images/saopaulo.jpg": "ffd521b1a80910a94c21ffe39a664268",
"/assets/assets/images/santorini.jpg": "d26bfc72030a1f0eac63ef62b9d2182a",
"/assets/assets/images/hotel0.jpg": "c5737b99f507741f5f36e8db10c0e9d8",
"/assets/assets/images/newyork.jpg": "0b02b13a33b63100c799a803b51a748f",
"/assets/assets/images/venice.jpg": "10346f88226e7c8892e95033ba5430c0",
"/assets/assets/images/hotel1.jpg": "bc9826c3d7c3c5128c62b916baa59aed",
"/assets/assets/images/gondola.jpg": "689ae95c953be8371a3c997302cf688d",
"/assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "34a4c5e6cb6e1f78cfb83b2f2db8075e",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "db61c6b5623f221f1c1383cf5ffd12c4"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
