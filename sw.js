/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-3d63aeb313202e0c8a9d.js"
  },
  {
    "url": "app-2346c50969ceaa1e11e5.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-a5814bd9535675e5b054.js"
  },
  {
    "url": "index.html",
    "revision": "2014845f5cfd2aa3b76f7834acf473a6"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7fc915ff941a4179ea61b35cd5fb268a"
  },
  {
    "url": "component---src-pages-index-js-40e1e1a61483b7efd55e.js"
  },
  {
    "url": "1-c23fee36b4eb3071093c.js"
  },
  {
    "url": "7-7df65c4f733bff5c67b3.js"
  },
  {
    "url": "0-81dd7d18543413a7616b.js"
  },
  {
    "url": "static/d/86/path---index-6a9-Pj6bd6mxIyj4neBJZgDzty8m7EY.json",
    "revision": "cb8dd91cbae7e3dc6dd33b92c3f326bd"
  },
  {
    "url": "component---src-pages-404-js-347631bac0e4855ee6e4.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e4d44c7795f03ca9d1ce2fa97702b0d1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});