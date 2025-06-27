// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"5j6Kf":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d68ad56631b563d9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"a0t4e":[function(require,module,exports,__globalThis) {
var _initFilters = require("./js/home/initFilters");
var _filterByTime = require("./js/home/filterByTime");
var _loader = require("./js/loader");
var _orderNowModal = require("./js/home/orderNowModal");
var _sidebar = require("./js/sidebar");
var _theme = require("./js/theme");
var _updateRecipes = require("./js/home/updateRecipes");
var _ratingModal = require("./js/ratingModal");
document.addEventListener("DOMContentLoaded", function() {
    try {
        (0, _loader.showLoader)();
        (0, _initFilters.masterClassInit)();
        (0, _initFilters.categoriesListInit)();
        (0, _initFilters.PopularRecipesInit)();
        (0, _initFilters.ingredientListInit)();
        (0, _initFilters.regionListInit)();
        (0, _theme.theme)();
        (0, _sidebar.sidebar)();
        (0, _orderNowModal.orderNowModal)();
        (0, _ratingModal.ratingModal)();
        (0, _filterByTime.filterByTime)();
        (0, _updateRecipes.updateRecipes)();
    } catch (error) {
        console.error("Error in script:", error);
    }
});

},{"./js/home/initFilters":"ddmC4","./js/home/filterByTime":"hkcHH","./js/loader":"lhsWU","./js/home/orderNowModal":"6K24U","./js/sidebar":"jWbWy","./js/theme":"6DWc8","./js/home/updateRecipes":"823Qz","./js/ratingModal":"ejvV0"}],"ddmC4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "categoriesListInit", ()=>categoriesListInit);
parcelHelpers.export(exports, "ingredientListInit", ()=>ingredientListInit);
parcelHelpers.export(exports, "masterClassInit", ()=>masterClassInit);
parcelHelpers.export(exports, "PopularRecipesInit", ()=>PopularRecipesInit);
parcelHelpers.export(exports, "regionListInit", ()=>regionListInit);
var _fetchDataJs = require("../fetchData.js");
var _categoriesDisplayJs = require("./categoriesDisplay.js");
var _masterclassDisplayJs = require("./masterclassDisplay.js");
var _sharedStateJs = require("./sharedState.js");
var _updateRecipesJs = require("./updateRecipes.js");
var _swiperJs = require("../swiper.js");
var _popularRecipesDisplayJs = require("./popularRecipesDisplay.js");
var _regionsDisplayJs = require("./regionsDisplay.js");
var _ingredientsDisplayJs = require("./ingredientsDisplay.js");
function categoriesListInit() {
    (0, _fetchDataJs.fetchCategories)().then((data)=>{
        (0, _categoriesDisplayJs.categoriesList)(data);
    }).catch((error)=>{
        console.error("Error fetching categories:", error);
    });
    const allBtn = document.getElementById("all-categories-btn");
    if (allBtn) allBtn.addEventListener("click", ()=>{
        (0, _sharedStateJs.resetActiveCategory)();
        document.querySelectorAll(".category-btn").forEach((btn)=>btn.classList.remove("active"));
        allBtn.classList.add("active");
        (0, _updateRecipesJs.updateRecipes)();
    });
}
function ingredientListInit() {
    (0, _fetchDataJs.fetchIngredientsList)().then((data)=>{
        (0, _ingredientsDisplayJs.ingredientList)(data);
    }).catch((error)=>{
        console.error("Error fetching ingredients:", error);
    });
}
function masterClassInit() {
    (0, _fetchDataJs.fetchMasterclasses)().then((data)=>{
        (0, _masterclassDisplayJs.masterClassDisplay)(data);
        setTimeout(()=>{
            const swiper = (0, _swiperJs.slider)();
            swiper.update();
        }, 100);
    }).catch((error)=>{
        console.error("Error fetching masterclasses:", error);
    });
}
function PopularRecipesInit() {
    (0, _fetchDataJs.fetchPopularRecipes)().then((data)=>{
        (0, _popularRecipesDisplayJs.popularRecipes)(data);
    }).catch((error)=>{
        console.error("Error fetching recipes:", error);
    });
}
function regionListInit() {
    (0, _fetchDataJs.fetchRegionsList)().then((data)=>{
        (0, _regionsDisplayJs.regionList)(data);
    }).catch((error)=>{
        console.error("Error fetching regions", error);
    });
}

},{"../fetchData.js":"cte0F","./categoriesDisplay.js":"7R5vv","./masterclassDisplay.js":"bOSQI","./sharedState.js":"4qtQs","./updateRecipes.js":"823Qz","../swiper.js":"gCYjv","./popularRecipesDisplay.js":"fH9xp","./regionsDisplay.js":"e5G8Z","./ingredientsDisplay.js":"7kOuK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7R5vv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "categoriesList", ()=>categoriesList);
var _updateRecipes = require("./updateRecipes");
var _sharedState = require("./sharedState");
let activeCategory = "";
function categoriesList(categoriesData) {
    const categoriesListEl = document.getElementById("categories-list");
    categoriesListEl.innerHTML = "";
    categoriesData.forEach((element)=>{
        const listItem = document.createElement("div");
        listItem.classList.add("categories-item");
        const categoryBtn = document.createElement("button");
        categoryBtn.classList.add("category-btn");
        categoryBtn.textContent = element.name;
        categoryBtn.addEventListener("click", (e)=>{
            (0, _sharedState.setActiveCategory)(element.name);
            activeCategory = element.name;
            document.querySelectorAll(".category-btn").forEach((btn)=>btn.classList.remove("active"));
            categoryBtn.classList.add("active");
            (0, _updateRecipes.updateRecipes)();
        });
        listItem.appendChild(categoryBtn);
        categoriesListEl.appendChild(listItem);
    });
}

},{"./updateRecipes":"823Qz","./sharedState":"4qtQs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bOSQI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Function to display the masterclasses on the page
parcelHelpers.export(exports, "masterClassDisplay", ()=>masterClassDisplay);
var _fetchDataJs = require("../fetchData.js");
function masterClassDisplay(masterClassData) {
    const masterClassList = document.getElementById("masterclass-list");
    masterClassData.forEach((item)=>{
        const masterClassItem = document.createElement("div");
        masterClassItem.classList.add("masterclass-item", "swiper-slide");
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        const cookImage = document.createElement("img");
        cookImage.src = item.cook.imgUrl;
        cookImage.alt = item.cook.name;
        cookImage.classList.add("chef-img");
        masterClassItem.appendChild(cookImage);
        const foodImg = document.createElement("img");
        foodImg.src = item.topic.imgUrl;
        foodImg.classList.add("food-img");
        imageContainer.appendChild(foodImg);
        masterClassItem.appendChild(imageContainer);
        masterClassList.appendChild(masterClassItem);
    });
}

},{"../fetchData.js":"cte0F","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gCYjv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slider", ()=>slider);
const slider = ()=>{
    const swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        speed: 700,
        effect: 'slide',
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 1
            },
            1280: {
                slidesPerView: 2
            }
        }
    });
    return swiper;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fH9xp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popularRecipes", ()=>popularRecipes);
function popularRecipes(recipes) {
    const recipesList = document.getElementById("recipes-list");
    recipes.forEach((recipe)=>{
        const recipeItem = document.createElement("li");
        recipeItem.classList.add("popular-recipe-item");
        const imageContainer = document.createElement("img");
        imageContainer.src = recipe.preview;
        imageContainer.alt = recipe.title;
        recipeItem.appendChild(imageContainer);
        const recipeDetails = document.createElement("div");
        recipeDetails.classList.add("details-container");
        const recipeName = document.createElement("h3");
        recipeName.textContent = recipe.title;
        recipeName.classList.add("popular-recipe-name");
        recipeDetails.appendChild(recipeName);
        const recipeDescription = document.createElement("p");
        recipeDescription.textContent = recipe.description;
        recipeDescription.classList.add("recipe-description");
        recipeDetails.appendChild(recipeDescription);
        recipeItem.appendChild(recipeDetails);
        recipesList.appendChild(recipeItem);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"e5G8Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "regionList", ()=>regionList);
var _choicesJs = require("choices.js");
var _choicesJsDefault = parcelHelpers.interopDefault(_choicesJs);
var _choicesMinCss = require("choices.js/public/assets/styles/choices.min.css");
var _updateRecipesJs = require("./updateRecipes.js");
var _sharedStateJs = require("./sharedState.js");
let choicesInstance;
function regionList(regionList) {
    const regionSelect = document.getElementById("search-by-area");
    regionSelect.innerHTML = "";
    regionList.forEach((element)=>{
        const regionItem = document.createElement("option");
        regionItem.classList.add("region-item");
        regionItem.textContent = element.name;
        regionItem.value = element.name;
        regionSelect.appendChild(regionItem);
    });
    regionSelect.addEventListener("change", (e)=>{
        (0, _sharedStateJs.setSelectedRegion)(e.target.value);
        (0, _updateRecipesJs.updateRecipes)();
    });
    if (choicesInstance) choicesInstance.destroy();
    // Initialize Choices
    choicesInstance = new (0, _choicesJsDefault.default)(regionSelect, {
        removeItemButton: false,
        placeholderValue: "Select",
        searchPlaceholderValue: "Type to search",
        searchEnabled: true,
        shouldSort: false,
        duplicateItemsAllowed: false
    });
}

},{"choices.js":"135xW","choices.js/public/assets/styles/choices.min.css":"i38sz","./updateRecipes.js":"823Qz","./sharedState.js":"4qtQs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"135xW":[function(require,module,exports,__globalThis) {
/*! choices.js v9.0.1 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(window, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module1.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
        /******/ /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function(value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            /******/ if (mode & 2 && typeof value != 'string') for(var key in value)__webpack_require__.d(ns, key, (function(key) {
                return value[key];
            }).bind(null, key));
            /******/ return ns;
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
                return module1['default'];
            } : /******/ function getModuleExports() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, 'a', getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "/public/assets/scripts/";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 4);
    /******/ }([
        /* 0 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var isMergeableObject = function isMergeableObject(value) {
                return isNonNullObject(value) && !isSpecial(value);
            };
            function isNonNullObject(value) {
                return !!value && typeof value === 'object';
            }
            function isSpecial(value) {
                var stringValue = Object.prototype.toString.call(value);
                return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
            }
            // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
            var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
            var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
            function isReactElement(value) {
                return value.$$typeof === REACT_ELEMENT_TYPE;
            }
            function emptyTarget(val) {
                return Array.isArray(val) ? [] : {};
            }
            function cloneUnlessOtherwiseSpecified(value, options) {
                return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
            }
            function defaultArrayMerge(target, source, options) {
                return target.concat(source).map(function(element) {
                    return cloneUnlessOtherwiseSpecified(element, options);
                });
            }
            function getMergeFunction(key, options) {
                if (!options.customMerge) return deepmerge;
                var customMerge = options.customMerge(key);
                return typeof customMerge === 'function' ? customMerge : deepmerge;
            }
            function getEnumerableOwnPropertySymbols(target) {
                return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
                    return target.propertyIsEnumerable(symbol);
                }) : [];
            }
            function getKeys(target) {
                return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
            }
            // Protects from prototype poisoning and unexpected merging up the prototype chain.
            function propertyIsUnsafe(target, key) {
                try {
                    return key in target // Properties are safe to merge if they don't exist in the target yet,
                     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
                     && Object.propertyIsEnumerable.call(target, key) // and also unsafe if they're nonenumerable.
                    );
                } catch (unused) {
                    // Counterintuitively, it's safe to merge any property on a target that causes the `in` operator to throw.
                    // This happens when trying to copy an object in the source over a plain string in the target.
                    return false;
                }
            }
            function mergeObject(target, source, options) {
                var destination = {};
                if (options.isMergeableObject(target)) getKeys(target).forEach(function(key) {
                    destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                });
                getKeys(source).forEach(function(key) {
                    if (propertyIsUnsafe(target, key)) return;
                    if (!options.isMergeableObject(source[key]) || !target[key]) destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                    else destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
                });
                return destination;
            }
            function deepmerge(target, source, options) {
                options = options || {};
                options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
                // implementations can use it. The caller may not replace it.
                options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                var sourceIsArray = Array.isArray(source);
                var targetIsArray = Array.isArray(target);
                var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
                if (!sourceAndTargetTypesMatch) return cloneUnlessOtherwiseSpecified(source, options);
                else if (sourceIsArray) return options.arrayMerge(target, source, options);
                else return mergeObject(target, source, options);
            }
            deepmerge.all = function deepmergeAll(array, options) {
                if (!Array.isArray(array)) throw new Error('first argument should be an array');
                return array.reduce(function(prev, next) {
                    return deepmerge(prev, next, options);
                }, {});
            };
            var deepmerge_1 = deepmerge;
            module1.exports = deepmerge_1;
        /***/ },
        /* 1 */ /***/ function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            /* WEBPACK VAR INJECTION */ (function(global, module1) {
                var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
                /* global window */ var root;
                if (typeof self !== 'undefined') root = self;
                else if (typeof window !== 'undefined') root = window;
                else if (typeof global !== 'undefined') root = global;
                else root = module1;
                var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
                /* harmony default export */ __webpack_exports__["a"] = result;
            /* WEBPACK VAR INJECTION */ }).call(this, __webpack_require__(5), __webpack_require__(6)(module1));
        /***/ },
        /* 2 */ /***/ function(module1, exports, __webpack_require__) {
            /*!
 * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */ !function(e, t) {
                module1.exports = t();
            }(this, function() {
                return function(e) {
                    var t = {};
                    function n(r) {
                        if (t[r]) return t[r].exports;
                        var o = t[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
                    }
                    return n.m = e, n.c = t, n.d = function(e, t, r) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: r
                        });
                    }, n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                    }, n.t = function(e, t) {
                        if (1 & t && (e = n(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var r = Object.create(null);
                        if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e) for(var o in e)n.d(r, o, (function(t) {
                            return e[t];
                        }).bind(null, o));
                        return r;
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default;
                        } : function() {
                            return e;
                        };
                        return n.d(t, "a", t), t;
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                    }, n.p = "", n(n.s = 1);
                }([
                    function(e, t) {
                        e.exports = function(e) {
                            return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e);
                        };
                    },
                    function(e, t, n) {
                        function r(e) {
                            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            })(e);
                        }
                        function o(e, t) {
                            for(var n = 0; n < t.length; n++){
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                            }
                        }
                        var i = n(2), a = n(8), s = n(0), c = function() {
                            function e(t, n) {
                                var r = n.location, o = void 0 === r ? 0 : r, i = n.distance, s = void 0 === i ? 100 : i, c = n.threshold, h = void 0 === c ? .6 : c, l = n.maxPatternLength, u = void 0 === l ? 32 : l, f = n.caseSensitive, d = void 0 !== f && f, v = n.tokenSeparator, p = void 0 === v ? / +/g : v, g = n.findAllMatches, y = void 0 !== g && g, m = n.minMatchCharLength, k = void 0 === m ? 1 : m, S = n.id, x = void 0 === S ? null : S, b = n.keys, M = void 0 === b ? [] : b, _ = n.shouldSort, L = void 0 === _ || _, w = n.getFn, A = void 0 === w ? a : w, C = n.sortFn, I = void 0 === C ? function(e, t) {
                                    return e.score - t.score;
                                } : C, O = n.tokenize, j = void 0 !== O && O, P = n.matchAllTokens, F = void 0 !== P && P, T = n.includeMatches, z = void 0 !== T && T, E = n.includeScore, K = void 0 !== E && E, $ = n.verbose, J = void 0 !== $ && $;
                                !function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, e), this.options = {
                                    location: o,
                                    distance: s,
                                    threshold: h,
                                    maxPatternLength: u,
                                    isCaseSensitive: d,
                                    tokenSeparator: p,
                                    findAllMatches: y,
                                    minMatchCharLength: k,
                                    id: x,
                                    keys: M,
                                    includeMatches: z,
                                    includeScore: K,
                                    shouldSort: L,
                                    getFn: A,
                                    sortFn: I,
                                    verbose: J,
                                    tokenize: j,
                                    matchAllTokens: F
                                }, this.setCollection(t);
                            }
                            var t, n, c;
                            return t = e, n = [
                                {
                                    key: "setCollection",
                                    value: function(e) {
                                        return this.list = e, e;
                                    }
                                },
                                {
                                    key: "search",
                                    value: function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                            limit: !1
                                        };
                                        this._log('---------\nSearch pattern: "'.concat(e, '"'));
                                        var n = this._prepareSearchers(e), r = n.tokenSearchers, o = n.fullSearcher, i = this._search(r, o), a = i.weights, s = i.results;
                                        return this._computeScore(a, s), this.options.shouldSort && this._sort(s), t.limit && "number" == typeof t.limit && (s = s.slice(0, t.limit)), this._format(s);
                                    }
                                },
                                {
                                    key: "_prepareSearchers",
                                    value: function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = [];
                                        if (this.options.tokenize) for(var n = e.split(this.options.tokenSeparator), r = 0, o = n.length; r < o; r += 1)t.push(new i(n[r], this.options));
                                        return {
                                            tokenSearchers: t,
                                            fullSearcher: new i(e, this.options)
                                        };
                                    }
                                },
                                {
                                    key: "_search",
                                    value: function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 ? arguments[1] : void 0, n = this.list, r = {}, o = [];
                                        if ("string" == typeof n[0]) {
                                            for(var i = 0, a = n.length; i < a; i += 1)this._analyze({
                                                key: "",
                                                value: n[i],
                                                record: i,
                                                index: i
                                            }, {
                                                resultMap: r,
                                                results: o,
                                                tokenSearchers: e,
                                                fullSearcher: t
                                            });
                                            return {
                                                weights: null,
                                                results: o
                                            };
                                        }
                                        for(var s = {}, c = 0, h = n.length; c < h; c += 1)for(var l = n[c], u = 0, f = this.options.keys.length; u < f; u += 1){
                                            var d = this.options.keys[u];
                                            if ("string" != typeof d) {
                                                if (s[d.name] = {
                                                    weight: 1 - d.weight || 1
                                                }, d.weight <= 0 || d.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");
                                                d = d.name;
                                            } else s[d] = {
                                                weight: 1
                                            };
                                            this._analyze({
                                                key: d,
                                                value: this.options.getFn(l, d),
                                                record: l,
                                                index: c
                                            }, {
                                                resultMap: r,
                                                results: o,
                                                tokenSearchers: e,
                                                fullSearcher: t
                                            });
                                        }
                                        return {
                                            weights: s,
                                            results: o
                                        };
                                    }
                                },
                                {
                                    key: "_analyze",
                                    value: function(e, t) {
                                        var n = e.key, r = e.arrayIndex, o = void 0 === r ? -1 : r, i = e.value, a = e.record, c = e.index, h = t.tokenSearchers, l = void 0 === h ? [] : h, u = t.fullSearcher, f = void 0 === u ? [] : u, d = t.resultMap, v = void 0 === d ? {} : d, p = t.results, g = void 0 === p ? [] : p;
                                        if (null != i) {
                                            var y = !1, m = -1, k = 0;
                                            if ("string" == typeof i) {
                                                this._log("\nKey: ".concat("" === n ? "-" : n));
                                                var S = f.search(i);
                                                if (this._log('Full text: "'.concat(i, '", score: ').concat(S.score)), this.options.tokenize) {
                                                    for(var x = i.split(this.options.tokenSeparator), b = [], M = 0; M < l.length; M += 1){
                                                        var _ = l[M];
                                                        this._log('\nPattern: "'.concat(_.pattern, '"'));
                                                        for(var L = !1, w = 0; w < x.length; w += 1){
                                                            var A = x[w], C = _.search(A), I = {};
                                                            C.isMatch ? (I[A] = C.score, y = !0, L = !0, b.push(C.score)) : (I[A] = 1, this.options.matchAllTokens || b.push(1)), this._log('Token: "'.concat(A, '", score: ').concat(I[A]));
                                                        }
                                                        L && (k += 1);
                                                    }
                                                    m = b[0];
                                                    for(var O = b.length, j = 1; j < O; j += 1)m += b[j];
                                                    m /= O, this._log("Token score average:", m);
                                                }
                                                var P = S.score;
                                                m > -1 && (P = (P + m) / 2), this._log("Score average:", P);
                                                var F = !this.options.tokenize || !this.options.matchAllTokens || k >= l.length;
                                                if (this._log("\nCheck Matches: ".concat(F)), (y || S.isMatch) && F) {
                                                    var T = v[c];
                                                    T ? T.output.push({
                                                        key: n,
                                                        arrayIndex: o,
                                                        value: i,
                                                        score: P,
                                                        matchedIndices: S.matchedIndices
                                                    }) : (v[c] = {
                                                        item: a,
                                                        output: [
                                                            {
                                                                key: n,
                                                                arrayIndex: o,
                                                                value: i,
                                                                score: P,
                                                                matchedIndices: S.matchedIndices
                                                            }
                                                        ]
                                                    }, g.push(v[c]));
                                                }
                                            } else if (s(i)) for(var z = 0, E = i.length; z < E; z += 1)this._analyze({
                                                key: n,
                                                arrayIndex: z,
                                                value: i[z],
                                                record: a,
                                                index: c
                                            }, {
                                                resultMap: v,
                                                results: g,
                                                tokenSearchers: l,
                                                fullSearcher: f
                                            });
                                        }
                                    }
                                },
                                {
                                    key: "_computeScore",
                                    value: function(e, t) {
                                        this._log("\n\nComputing score:\n");
                                        for(var n = 0, r = t.length; n < r; n += 1){
                                            for(var o = t[n].output, i = o.length, a = 1, s = 1, c = 0; c < i; c += 1){
                                                var h = e ? e[o[c].key].weight : 1, l = (1 === h ? o[c].score : o[c].score || .001) * h;
                                                1 !== h ? s = Math.min(s, l) : (o[c].nScore = l, a *= l);
                                            }
                                            t[n].score = 1 === s ? a : s, this._log(t[n]);
                                        }
                                    }
                                },
                                {
                                    key: "_sort",
                                    value: function(e) {
                                        this._log("\n\nSorting...."), e.sort(this.options.sortFn);
                                    }
                                },
                                {
                                    key: "_format",
                                    value: function(e) {
                                        var t = [];
                                        if (this.options.verbose) {
                                            var n = [];
                                            this._log("\n\nOutput:\n\n", JSON.stringify(e, function(e, t) {
                                                if ("object" === r(t) && null !== t) {
                                                    if (-1 !== n.indexOf(t)) return;
                                                    n.push(t);
                                                }
                                                return t;
                                            })), n = null;
                                        }
                                        var o = [];
                                        this.options.includeMatches && o.push(function(e, t) {
                                            var n = e.output;
                                            t.matches = [];
                                            for(var r = 0, o = n.length; r < o; r += 1){
                                                var i = n[r];
                                                if (0 !== i.matchedIndices.length) {
                                                    var a = {
                                                        indices: i.matchedIndices,
                                                        value: i.value
                                                    };
                                                    i.key && (a.key = i.key), i.hasOwnProperty("arrayIndex") && i.arrayIndex > -1 && (a.arrayIndex = i.arrayIndex), t.matches.push(a);
                                                }
                                            }
                                        }), this.options.includeScore && o.push(function(e, t) {
                                            t.score = e.score;
                                        });
                                        for(var i = 0, a = e.length; i < a; i += 1){
                                            var s = e[i];
                                            if (this.options.id && (s.item = this.options.getFn(s.item, this.options.id)[0]), o.length) {
                                                for(var c = {
                                                    item: s.item
                                                }, h = 0, l = o.length; h < l; h += 1)o[h](s, c);
                                                t.push(c);
                                            } else t.push(s.item);
                                        }
                                        return t;
                                    }
                                },
                                {
                                    key: "_log",
                                    value: function() {
                                        var e;
                                        this.options.verbose && (e = console).log.apply(e, arguments);
                                    }
                                }
                            ], o(t.prototype, n), c && o(t, c), e;
                        }();
                        e.exports = c;
                    },
                    function(e, t, n) {
                        function r(e, t) {
                            for(var n = 0; n < t.length; n++){
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                            }
                        }
                        var o = n(3), i = n(4), a = n(7), s = function() {
                            function e(t, n) {
                                var r = n.location, o = void 0 === r ? 0 : r, i = n.distance, s = void 0 === i ? 100 : i, c = n.threshold, h = void 0 === c ? .6 : c, l = n.maxPatternLength, u = void 0 === l ? 32 : l, f = n.isCaseSensitive, d = void 0 !== f && f, v = n.tokenSeparator, p = void 0 === v ? / +/g : v, g = n.findAllMatches, y = void 0 !== g && g, m = n.minMatchCharLength, k = void 0 === m ? 1 : m;
                                !function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, e), this.options = {
                                    location: o,
                                    distance: s,
                                    threshold: h,
                                    maxPatternLength: u,
                                    isCaseSensitive: d,
                                    tokenSeparator: p,
                                    findAllMatches: y,
                                    minMatchCharLength: k
                                }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= u && (this.patternAlphabet = a(this.pattern));
                            }
                            var t, n, s;
                            return t = e, n = [
                                {
                                    key: "search",
                                    value: function(e) {
                                        if (this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e) return {
                                            isMatch: !0,
                                            score: 0,
                                            matchedIndices: [
                                                [
                                                    0,
                                                    e.length - 1
                                                ]
                                            ]
                                        };
                                        var t = this.options, n = t.maxPatternLength, r = t.tokenSeparator;
                                        if (this.pattern.length > n) return o(e, this.pattern, r);
                                        var a = this.options, s = a.location, c = a.distance, h = a.threshold, l = a.findAllMatches, u = a.minMatchCharLength;
                                        return i(e, this.pattern, this.patternAlphabet, {
                                            location: s,
                                            distance: c,
                                            threshold: h,
                                            findAllMatches: l,
                                            minMatchCharLength: u
                                        });
                                    }
                                }
                            ], r(t.prototype, n), s && r(t, s), e;
                        }();
                        e.exports = s;
                    },
                    function(e, t) {
                        var n = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
                        e.exports = function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g, o = new RegExp(t.replace(n, "\\$&").replace(r, "|")), i = e.match(o), a = !!i, s = [];
                            if (a) for(var c = 0, h = i.length; c < h; c += 1){
                                var l = i[c];
                                s.push([
                                    e.indexOf(l),
                                    l.length - 1
                                ]);
                            }
                            return {
                                score: a ? .5 : 1,
                                isMatch: a,
                                matchedIndices: s
                            };
                        };
                    },
                    function(e, t, n) {
                        var r = n(5), o = n(6);
                        e.exports = function(e, t, n, i) {
                            for(var a = i.location, s = void 0 === a ? 0 : a, c = i.distance, h = void 0 === c ? 100 : c, l = i.threshold, u = void 0 === l ? .6 : l, f = i.findAllMatches, d = void 0 !== f && f, v = i.minMatchCharLength, p = void 0 === v ? 1 : v, g = s, y = e.length, m = u, k = e.indexOf(t, g), S = t.length, x = [], b = 0; b < y; b += 1)x[b] = 0;
                            if (-1 !== k) {
                                var M = r(t, {
                                    errors: 0,
                                    currentLocation: k,
                                    expectedLocation: g,
                                    distance: h
                                });
                                if (m = Math.min(M, m), -1 !== (k = e.lastIndexOf(t, g + S))) {
                                    var _ = r(t, {
                                        errors: 0,
                                        currentLocation: k,
                                        expectedLocation: g,
                                        distance: h
                                    });
                                    m = Math.min(_, m);
                                }
                            }
                            k = -1;
                            for(var L = [], w = 1, A = S + y, C = 1 << S - 1, I = 0; I < S; I += 1){
                                for(var O = 0, j = A; O < j;)r(t, {
                                    errors: I,
                                    currentLocation: g + j,
                                    expectedLocation: g,
                                    distance: h
                                }) <= m ? O = j : A = j, j = Math.floor((A - O) / 2 + O);
                                A = j;
                                var P = Math.max(1, g - j + 1), F = d ? y : Math.min(g + j, y) + S, T = Array(F + 2);
                                T[F + 1] = (1 << I) - 1;
                                for(var z = F; z >= P; z -= 1){
                                    var E = z - 1, K = n[e.charAt(E)];
                                    if (K && (x[E] = 1), T[z] = (T[z + 1] << 1 | 1) & K, 0 !== I && (T[z] |= (L[z + 1] | L[z]) << 1 | 1 | L[z + 1]), T[z] & C && (w = r(t, {
                                        errors: I,
                                        currentLocation: E,
                                        expectedLocation: g,
                                        distance: h
                                    })) <= m) {
                                        if (m = w, (k = E) <= g) break;
                                        P = Math.max(1, 2 * g - k);
                                    }
                                }
                                if (r(t, {
                                    errors: I + 1,
                                    currentLocation: g,
                                    expectedLocation: g,
                                    distance: h
                                }) > m) break;
                                L = T;
                            }
                            return {
                                isMatch: k >= 0,
                                score: 0 === w ? .001 : w,
                                matchedIndices: o(x, p)
                            };
                        };
                    },
                    function(e, t) {
                        e.exports = function(e, t) {
                            var n = t.errors, r = void 0 === n ? 0 : n, o = t.currentLocation, i = void 0 === o ? 0 : o, a = t.expectedLocation, s = void 0 === a ? 0 : a, c = t.distance, h = void 0 === c ? 100 : c, l = r / e.length, u = Math.abs(s - i);
                            return h ? l + u / h : u ? 1 : l;
                        };
                    },
                    function(e, t) {
                        e.exports = function() {
                            for(var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = [], r = -1, o = -1, i = 0, a = e.length; i < a; i += 1){
                                var s = e[i];
                                s && -1 === r ? r = i : s || -1 === r || ((o = i - 1) - r + 1 >= t && n.push([
                                    r,
                                    o
                                ]), r = -1);
                            }
                            return e[i - 1] && i - r >= t && n.push([
                                r,
                                i - 1
                            ]), n;
                        };
                    },
                    function(e, t) {
                        e.exports = function(e) {
                            for(var t = {}, n = e.length, r = 0; r < n; r += 1)t[e.charAt(r)] = 0;
                            for(var o = 0; o < n; o += 1)t[e.charAt(o)] |= 1 << n - o - 1;
                            return t;
                        };
                    },
                    function(e, t, n) {
                        var r = n(0);
                        e.exports = function(e, t) {
                            return function e(t, n, o) {
                                if (n) {
                                    var i = n.indexOf("."), a = n, s = null;
                                    -1 !== i && (a = n.slice(0, i), s = n.slice(i + 1));
                                    var c = t[a];
                                    if (null != c) {
                                        if (s || "string" != typeof c && "number" != typeof c) {
                                            if (r(c)) for(var h = 0, l = c.length; h < l; h += 1)e(c[h], s, o);
                                            else s && e(c, s, o);
                                        } else o.push(c.toString());
                                    }
                                } else o.push(t);
                                return o;
                            }(e, t, []);
                        };
                    }
                ]);
            });
        /***/ },
        /* 3 */ /***/ function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() {
                return symbolObservablePonyfill;
            });
            function symbolObservablePonyfill(root) {
                var result;
                var Symbol1 = root.Symbol;
                if (typeof Symbol1 === 'function') {
                    if (Symbol1.observable) result = Symbol1.observable;
                    else {
                        result = Symbol1('observable');
                        Symbol1.observable = result;
                    }
                } else result = '@@observable';
                return result;
            }
        /***/ },
        /* 4 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = __webpack_require__(7);
        /***/ },
        /* 5 */ /***/ function(module1, exports) {
            var g;
            // This works in non-strict mode
            g = function() {
                return this;
            }();
            try {
                // This works if eval is allowed (see CSP)
                g = g || new Function("return this")();
            } catch (e) {
                // This works if the window reference is available
                if (typeof window === "object") g = window;
            }
            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}
            module1.exports = g;
        /***/ },
        /* 6 */ /***/ function(module1, exports) {
            module1.exports = function(originalModule) {
                if (!originalModule.webpackPolyfill) {
                    var module1 = Object.create(originalModule);
                    // module.parent = undefined by default
                    if (!module1.children) module1.children = [];
                    Object.defineProperty(module1, "loaded", {
                        enumerable: true,
                        get: function() {
                            return module1.l;
                        }
                    });
                    Object.defineProperty(module1, "id", {
                        enumerable: true,
                        get: function() {
                            return module1.i;
                        }
                    });
                    Object.defineProperty(module1, "exports", {
                        enumerable: true
                    });
                    module1.webpackPolyfill = 1;
                }
                return module1;
            };
        /***/ },
        /* 7 */ /***/ function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            // EXTERNAL MODULE: ./node_modules/fuse.js/dist/fuse.js
            var dist_fuse = __webpack_require__(2);
            var fuse_default = /*#__PURE__*/ __webpack_require__.n(dist_fuse);
            // EXTERNAL MODULE: ./node_modules/deepmerge/dist/cjs.js
            var cjs = __webpack_require__(0);
            var cjs_default = /*#__PURE__*/ __webpack_require__.n(cjs);
            // EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
            var es = __webpack_require__(1);
            // CONCATENATED MODULE: ./node_modules/redux/es/redux.js
            /**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */ var randomString = function randomString() {
                return Math.random().toString(36).substring(7).split('').join('.');
            };
            var ActionTypes = {
                INIT: "@@redux/INIT" + randomString(),
                REPLACE: "@@redux/REPLACE" + randomString(),
                PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
                    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
                }
            };
            /**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */ function isPlainObject(obj) {
                if (typeof obj !== 'object' || obj === null) return false;
                var proto = obj;
                while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
                return Object.getPrototypeOf(obj) === proto;
            }
            /**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */ function createStore(reducer, preloadedState, enhancer) {
                var _ref2;
                if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
                if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
                    enhancer = preloadedState;
                    preloadedState = undefined;
                }
                if (typeof enhancer !== 'undefined') {
                    if (typeof enhancer !== 'function') throw new Error('Expected the enhancer to be a function.');
                    return enhancer(createStore)(reducer, preloadedState);
                }
                if (typeof reducer !== 'function') throw new Error('Expected the reducer to be a function.');
                var currentReducer = reducer;
                var currentState = preloadedState;
                var currentListeners = [];
                var nextListeners = currentListeners;
                var isDispatching = false;
                /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */ function ensureCanMutateNextListeners() {
                    if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
                }
                /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */ function getState() {
                    if (isDispatching) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                    return currentState;
                }
                /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */ function subscribe(listener) {
                    if (typeof listener !== 'function') throw new Error('Expected the listener to be a function.');
                    if (isDispatching) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                    var isSubscribed = true;
                    ensureCanMutateNextListeners();
                    nextListeners.push(listener);
                    return function unsubscribe() {
                        if (!isSubscribed) return;
                        if (isDispatching) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                        isSubscribed = false;
                        ensureCanMutateNextListeners();
                        var index = nextListeners.indexOf(listener);
                        nextListeners.splice(index, 1);
                    };
                }
                /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */ function dispatch(action) {
                    if (!isPlainObject(action)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                    if (typeof action.type === 'undefined') throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                    if (isDispatching) throw new Error('Reducers may not dispatch actions.');
                    try {
                        isDispatching = true;
                        currentState = currentReducer(currentState, action);
                    } finally{
                        isDispatching = false;
                    }
                    var listeners = currentListeners = nextListeners;
                    for(var i = 0; i < listeners.length; i++){
                        var listener = listeners[i];
                        listener();
                    }
                    return action;
                }
                /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */ function replaceReducer(nextReducer) {
                    if (typeof nextReducer !== 'function') throw new Error('Expected the nextReducer to be a function.');
                    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
                    // Any reducers that existed in both the new and old rootReducer
                    // will receive the previous state. This effectively populates
                    // the new state tree with any relevant data from the old one.
                    dispatch({
                        type: ActionTypes.REPLACE
                    });
                }
                /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */ function observable() {
                    var _ref;
                    var outerSubscribe = subscribe;
                    return _ref = {
                        /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe: function subscribe(observer) {
                            if (typeof observer !== 'object' || observer === null) throw new TypeError('Expected the observer to be an object.');
                            function observeState() {
                                if (observer.next) observer.next(getState());
                            }
                            observeState();
                            var unsubscribe = outerSubscribe(observeState);
                            return {
                                unsubscribe: unsubscribe
                            };
                        }
                    }, _ref[es["a" /* default */ ]] = function() {
                        return this;
                    }, _ref;
                } // When a store is created, an "INIT" action is dispatched so that every
                // reducer returns their initial state. This effectively populates
                // the initial state tree.
                dispatch({
                    type: ActionTypes.INIT
                });
                return _ref2 = {
                    dispatch: dispatch,
                    subscribe: subscribe,
                    getState: getState,
                    replaceReducer: replaceReducer
                }, _ref2[es["a" /* default */ ]] = observable, _ref2;
            }
            /**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */ function warning(message) {
                /* eslint-disable no-console */ if (typeof console !== 'undefined' && typeof console.error === 'function') console.error(message);
                /* eslint-enable no-console */ try {
                    // This error was thrown as a convenience so that if you enable
                    // "break on all exceptions" in your console,
                    // it would pause the execution at this line.
                    throw new Error(message);
                } catch (e) {} // eslint-disable-line no-empty
            }
            function getUndefinedStateErrorMessage(key, action) {
                var actionType = action && action.type;
                var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
                return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
            }
            function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
                var reducerKeys = Object.keys(reducers);
                var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
                if (reducerKeys.length === 0) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
                if (!isPlainObject(inputState)) return "The " + argumentName + " has unexpected type of \"" + ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
                var unexpectedKeys = Object.keys(inputState).filter(function(key) {
                    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
                });
                unexpectedKeys.forEach(function(key) {
                    unexpectedKeyCache[key] = true;
                });
                if (action && action.type === ActionTypes.REPLACE) return;
                if (unexpectedKeys.length > 0) return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
            }
            function assertReducerShape(reducers) {
                Object.keys(reducers).forEach(function(key) {
                    var reducer = reducers[key];
                    var initialState = reducer(undefined, {
                        type: ActionTypes.INIT
                    });
                    if (typeof initialState === 'undefined') throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
                    if (typeof reducer(undefined, {
                        type: ActionTypes.PROBE_UNKNOWN_ACTION()
                    }) === 'undefined') throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
                });
            }
            /**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */ function combineReducers(reducers) {
                var reducerKeys = Object.keys(reducers);
                var finalReducers = {};
                for(var i = 0; i < reducerKeys.length; i++){
                    var key = reducerKeys[i];
                    if (typeof reducers[key] === 'function') finalReducers[key] = reducers[key];
                }
                var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
                // keys multiple times.
                var unexpectedKeyCache;
                var shapeAssertionError;
                try {
                    assertReducerShape(finalReducers);
                } catch (e) {
                    shapeAssertionError = e;
                }
                return function combination(state, action) {
                    if (state === void 0) state = {};
                    if (shapeAssertionError) throw shapeAssertionError;
                    var warningMessage;
                    var hasChanged = false;
                    var nextState = {};
                    for(var _i = 0; _i < finalReducerKeys.length; _i++){
                        var _key = finalReducerKeys[_i];
                        var reducer = finalReducers[_key];
                        var previousStateForKey = state[_key];
                        var nextStateForKey = reducer(previousStateForKey, action);
                        if (typeof nextStateForKey === 'undefined') {
                            var errorMessage = getUndefinedStateErrorMessage(_key, action);
                            throw new Error(errorMessage);
                        }
                        nextState[_key] = nextStateForKey;
                        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
                    }
                    return hasChanged ? nextState : state;
                };
            }
            function bindActionCreator(actionCreator, dispatch) {
                return function() {
                    return dispatch(actionCreator.apply(this, arguments));
                };
            }
            /**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */ function bindActionCreators(actionCreators, dispatch) {
                if (typeof actionCreators === 'function') return bindActionCreator(actionCreators, dispatch);
                if (typeof actionCreators !== 'object' || actionCreators === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
                var boundActionCreators = {};
                for(var key in actionCreators){
                    var actionCreator = actionCreators[key];
                    if (typeof actionCreator === 'function') boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
                }
                return boundActionCreators;
            }
            function _defineProperty(obj, key, value) {
                if (key in obj) Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
                else obj[key] = value;
                return obj;
            }
            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) keys.push.apply(keys, Object.getOwnPropertySymbols(object));
                if (enumerableOnly) keys = keys.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
                return keys;
            }
            function _objectSpread2(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i] != null ? arguments[i] : {};
                    if (i % 2) ownKeys(source, true).forEach(function(key) {
                        _defineProperty(target, key, source[key]);
                    });
                    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                    else ownKeys(source).forEach(function(key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    });
                }
                return target;
            }
            /**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */ function compose() {
                for(var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++)funcs[_key] = arguments[_key];
                if (funcs.length === 0) return function(arg) {
                    return arg;
                };
                if (funcs.length === 1) return funcs[0];
                return funcs.reduce(function(a, b) {
                    return function() {
                        return a(b.apply(void 0, arguments));
                    };
                });
            }
            /**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */ function applyMiddleware() {
                for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++)middlewares[_key] = arguments[_key];
                return function(createStore) {
                    return function() {
                        var store = createStore.apply(void 0, arguments);
                        var _dispatch = function dispatch() {
                            throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
                        };
                        var middlewareAPI = {
                            getState: store.getState,
                            dispatch: function dispatch() {
                                return _dispatch.apply(void 0, arguments);
                            }
                        };
                        var chain = middlewares.map(function(middleware) {
                            return middleware(middlewareAPI);
                        });
                        _dispatch = compose.apply(void 0, chain)(store.dispatch);
                        return _objectSpread2({}, store, {
                            dispatch: _dispatch
                        });
                    };
                };
            }
            /*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */ function isCrushed() {}
            // CONCATENATED MODULE: ./src/scripts/reducers/items.js
            var defaultState = [];
            function items_items(state, action) {
                if (state === void 0) state = defaultState;
                switch(action.type){
                    case 'ADD_ITEM':
                        // Add object to items array
                        var newState = [].concat(state, [
                            {
                                id: action.id,
                                choiceId: action.choiceId,
                                groupId: action.groupId,
                                value: action.value,
                                label: action.label,
                                active: true,
                                highlighted: false,
                                customProperties: action.customProperties,
                                placeholder: action.placeholder || false,
                                keyCode: null
                            }
                        ]);
                        return newState.map(function(obj) {
                            var item = obj;
                            item.highlighted = false;
                            return item;
                        });
                    case 'REMOVE_ITEM':
                        // Set item to inactive
                        return state.map(function(obj) {
                            var item = obj;
                            if (item.id === action.id) item.active = false;
                            return item;
                        });
                    case 'HIGHLIGHT_ITEM':
                        return state.map(function(obj) {
                            var item = obj;
                            if (item.id === action.id) item.highlighted = action.highlighted;
                            return item;
                        });
                    default:
                        return state;
                }
            }
            // CONCATENATED MODULE: ./src/scripts/reducers/groups.js
            var groups_defaultState = [];
            function groups(state, action) {
                if (state === void 0) state = groups_defaultState;
                switch(action.type){
                    case 'ADD_GROUP':
                        return [].concat(state, [
                            {
                                id: action.id,
                                value: action.value,
                                active: action.active,
                                disabled: action.disabled
                            }
                        ]);
                    case 'CLEAR_CHOICES':
                        return [];
                    default:
                        return state;
                }
            }
            // CONCATENATED MODULE: ./src/scripts/reducers/choices.js
            var choices_defaultState = [];
            function choices_choices(state, action) {
                if (state === void 0) state = choices_defaultState;
                switch(action.type){
                    case 'ADD_CHOICE':
                        /*
            A disabled choice appears in the choice dropdown but cannot be selected
            A selected choice has been added to the passed input's value (added as an item)
            An active choice appears within the choice dropdown
         */ return [].concat(state, [
                            {
                                id: action.id,
                                elementId: action.elementId,
                                groupId: action.groupId,
                                value: action.value,
                                label: action.label || action.value,
                                disabled: action.disabled || false,
                                selected: false,
                                active: true,
                                score: 9999,
                                customProperties: action.customProperties,
                                placeholder: action.placeholder || false,
                                keyCode: null
                            }
                        ]);
                    case 'ADD_ITEM':
                        // If all choices need to be activated
                        if (action.activateOptions) return state.map(function(obj) {
                            var choice = obj;
                            choice.active = action.active;
                            return choice;
                        });
                         // When an item is added and it has an associated choice,
                        // we want to disable it so it can't be chosen again
                        if (action.choiceId > -1) return state.map(function(obj) {
                            var choice = obj;
                            if (choice.id === parseInt(action.choiceId, 10)) choice.selected = true;
                            return choice;
                        });
                        return state;
                    case 'REMOVE_ITEM':
                        // When an item is removed and it has an associated choice,
                        // we want to re-enable it so it can be chosen again
                        if (action.choiceId > -1) return state.map(function(obj) {
                            var choice = obj;
                            if (choice.id === parseInt(action.choiceId, 10)) choice.selected = false;
                            return choice;
                        });
                        return state;
                    case 'FILTER_CHOICES':
                        return state.map(function(obj) {
                            var choice = obj; // Set active state based on whether choice is
                            // within filtered results
                            choice.active = action.results.some(function(_ref) {
                                var item = _ref.item, score = _ref.score;
                                if (item.id === choice.id) {
                                    choice.score = score;
                                    return true;
                                }
                                return false;
                            });
                            return choice;
                        });
                    case 'ACTIVATE_CHOICES':
                        return state.map(function(obj) {
                            var choice = obj;
                            choice.active = action.active;
                            return choice;
                        });
                    case 'CLEAR_CHOICES':
                        return choices_defaultState;
                    default:
                        return state;
                }
            }
            // CONCATENATED MODULE: ./src/scripts/reducers/general.js
            var general_defaultState = {
                loading: false
            };
            var general = function general(state, action) {
                if (state === void 0) state = general_defaultState;
                switch(action.type){
                    case 'SET_IS_LOADING':
                        return {
                            loading: action.isLoading
                        };
                    default:
                        return state;
                }
            };
            /* harmony default export */ var reducers_general = general;
            // CONCATENATED MODULE: ./src/scripts/lib/utils.js
            /**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */ var getRandomNumber = function getRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            };
            /**
 * @param {number} length
 * @returns {string}
 */ var generateChars = function generateChars(length) {
                return Array.from({
                    length: length
                }, function() {
                    return getRandomNumber(0, 36).toString(36);
                }).join('');
            };
            /**
 * @param {HTMLInputElement | HTMLSelectElement} element
 * @param {string} prefix
 * @returns {string}
 */ var generateId = function generateId(element, prefix) {
                var id = element.id || element.name && element.name + "-" + generateChars(2) || generateChars(4);
                id = id.replace(/(:|\.|\[|\]|,)/g, '');
                id = prefix + "-" + id;
                return id;
            };
            /**
 * @param {any} obj
 * @returns {string}
 */ var getType = function getType(obj) {
                return Object.prototype.toString.call(obj).slice(8, -1);
            };
            /**
 * @param {string} type
 * @param {any} obj
 * @returns {boolean}
 */ var isType = function isType(type, obj) {
                return obj !== undefined && obj !== null && getType(obj) === type;
            };
            /**
 * @param {HTMLElement} element
 * @param {HTMLElement} [wrapper={HTMLDivElement}]
 * @returns {HTMLElement}
 */ var utils_wrap = function wrap(element, wrapper) {
                if (wrapper === void 0) wrapper = document.createElement('div');
                if (element.nextSibling) element.parentNode.insertBefore(wrapper, element.nextSibling);
                else element.parentNode.appendChild(wrapper);
                return wrapper.appendChild(element);
            };
            /**
 * @param {Element} startEl
 * @param {string} selector
 * @param {1 | -1} direction
 * @returns {Element | undefined}
 */ var getAdjacentEl = function getAdjacentEl(startEl, selector, direction) {
                if (direction === void 0) direction = 1;
                if (!(startEl instanceof Element) || typeof selector !== 'string') return undefined;
                var prop = (direction > 0 ? 'next' : 'previous') + "ElementSibling";
                var sibling = startEl[prop];
                while(sibling){
                    if (sibling.matches(selector)) return sibling;
                    sibling = sibling[prop];
                }
                return sibling;
            };
            /**
 * @param {Element} element
 * @param {Element} parent
 * @param {-1 | 1} direction
 * @returns {boolean}
 */ var isScrolledIntoView = function isScrolledIntoView(element, parent, direction) {
                if (direction === void 0) direction = 1;
                if (!element) return false;
                var isVisible;
                if (direction > 0) // In view from bottom
                isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
                else // In view from top
                isVisible = element.offsetTop >= parent.scrollTop;
                return isVisible;
            };
            /**
 * @param {any} value
 * @returns {any}
 */ var sanitise = function sanitise(value) {
                if (typeof value !== 'string') return value;
                return value.replace(/&/g, '&amp;').replace(/>/g, '&rt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
            };
            /**
 * @returns {() => (str: string) => Element}
 */ var strToEl = function() {
                var tmpEl = document.createElement('div');
                return function(str) {
                    var cleanedInput = str.trim();
                    tmpEl.innerHTML = cleanedInput;
                    var firldChild = tmpEl.children[0];
                    while(tmpEl.firstChild)tmpEl.removeChild(tmpEl.firstChild);
                    return firldChild;
                };
            }();
            /**
 * @param {{ label?: string, value: string }} a
 * @param {{ label?: string, value: string }} b
 * @returns {number}
 */ var sortByAlpha = function sortByAlpha(_ref, _ref2) {
                var value = _ref.value, _ref$label = _ref.label, label = _ref$label === void 0 ? value : _ref$label;
                var value2 = _ref2.value, _ref2$label = _ref2.label, label2 = _ref2$label === void 0 ? value2 : _ref2$label;
                return label.localeCompare(label2, [], {
                    sensitivity: 'base',
                    ignorePunctuation: true,
                    numeric: true
                });
            };
            /**
 * @param {{ score: number }} a
 * @param {{ score: number }} b
 */ var sortByScore = function sortByScore(a, b) {
                return a.score - b.score;
            };
            /**
 * @param {HTMLElement} element
 * @param {string} type
 * @param {object} customArgs
 */ var dispatchEvent = function dispatchEvent(element, type, customArgs) {
                if (customArgs === void 0) customArgs = null;
                var event = new CustomEvent(type, {
                    detail: customArgs,
                    bubbles: true,
                    cancelable: true
                });
                return element.dispatchEvent(event);
            };
            /**
 * @param {array} array
 * @param {any} value
 * @param {string} [key="value"]
 * @returns {boolean}
 */ var existsInArray = function existsInArray(array, value, key) {
                if (key === void 0) key = 'value';
                return array.some(function(item) {
                    if (typeof value === 'string') return item[key] === value.trim();
                    return item[key] === value;
                });
            };
            /**
 * @param {any} obj
 * @returns {any}
 */ var cloneObject = function cloneObject(obj) {
                return JSON.parse(JSON.stringify(obj));
            };
            /**
 * Returns an array of keys present on the first but missing on the second object
 * @param {object} a
 * @param {object} b
 * @returns {string[]}
 */ var diff = function diff(a, b) {
                var aKeys = Object.keys(a).sort();
                var bKeys = Object.keys(b).sort();
                return aKeys.filter(function(i) {
                    return bKeys.indexOf(i) < 0;
                });
            };
            // CONCATENATED MODULE: ./src/scripts/reducers/index.js
            var appReducer = combineReducers({
                items: items_items,
                groups: groups,
                choices: choices_choices,
                general: reducers_general
            });
            var reducers_rootReducer = function rootReducer(passedState, action) {
                var state = passedState; // If we are clearing all items, groups and options we reassign
                // state and then pass that state to our proper reducer. This isn't
                // mutating our actual state
                // See: http://stackoverflow.com/a/35641992
                if (action.type === 'CLEAR_ALL') state = undefined;
                else if (action.type === 'RESET_TO') return cloneObject(action.state);
                return appReducer(state, action);
            };
            /* harmony default export */ var reducers = reducers_rootReducer;
            // CONCATENATED MODULE: ./src/scripts/store/store.js
            function _defineProperties(target, props) {
                for(var i = 0; i < props.length; i++){
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                return Constructor;
            }
            /**
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 * @typedef {import('../../../types/index').Choices.Group} Group
 * @typedef {import('../../../types/index').Choices.Item} Item
 */ var store_Store = /*#__PURE__*/ function() {
                function Store() {
                    this._store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
                }
                /**
   * Subscribe store to function call (wrapped Redux method)
   * @param  {Function} onChange Function to trigger when state changes
   * @return
   */ var _proto = Store.prototype;
                _proto.subscribe = function subscribe(onChange) {
                    this._store.subscribe(onChange);
                };
                _proto.dispatch = function dispatch(action) {
                    this._store.dispatch(action);
                };
                /**
   * Get loading state from store
   * @returns {boolean} Loading State
   */ _proto.isLoading = function isLoading() {
                    return this.state.general.loading;
                };
                _proto.getChoiceById = function getChoiceById(id) {
                    return this.activeChoices.find(function(choice) {
                        return choice.id === parseInt(id, 10);
                    });
                };
                _proto.getGroupById = function getGroupById(id) {
                    return this.groups.find(function(group) {
                        return group.id === id;
                    });
                };
                _createClass(Store, [
                    {
                        key: "state",
                        get: function get() {
                            return this._store.getState();
                        }
                    },
                    {
                        key: "items",
                        get: function get() {
                            return this.state.items;
                        }
                    },
                    {
                        key: "activeItems",
                        get: function get() {
                            return this.items.filter(function(item) {
                                return item.active === true;
                            });
                        }
                    },
                    {
                        key: "highlightedActiveItems",
                        get: function get() {
                            return this.items.filter(function(item) {
                                return item.active && item.highlighted;
                            });
                        }
                    },
                    {
                        key: "choices",
                        get: function get() {
                            return this.state.choices;
                        }
                    },
                    {
                        key: "activeChoices",
                        get: function get() {
                            return this.choices.filter(function(choice) {
                                return choice.active === true;
                            });
                        }
                    },
                    {
                        key: "selectableChoices",
                        get: function get() {
                            return this.choices.filter(function(choice) {
                                return choice.disabled !== true;
                            });
                        }
                    },
                    {
                        key: "searchableChoices",
                        get: function get() {
                            return this.selectableChoices.filter(function(choice) {
                                return choice.placeholder !== true;
                            });
                        }
                    },
                    {
                        key: "placeholderChoice",
                        get: function get() {
                            return [].concat(this.choices).reverse().find(function(choice) {
                                return choice.placeholder === true;
                            });
                        }
                    },
                    {
                        key: "groups",
                        get: function get() {
                            return this.state.groups;
                        }
                    },
                    {
                        key: "activeGroups",
                        get: function get() {
                            var groups = this.groups, choices = this.choices;
                            return groups.filter(function(group) {
                                var isActive = group.active === true && group.disabled === false;
                                var hasActiveOptions = choices.some(function(choice) {
                                    return choice.active === true && choice.disabled === false;
                                });
                                return isActive && hasActiveOptions;
                            }, []);
                        }
                    }
                ]);
                return Store;
            }();
            // CONCATENATED MODULE: ./src/scripts/components/dropdown.js
            function dropdown_defineProperties(target, props) {
                for(var i = 0; i < props.length; i++){
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function dropdown_createClass(Constructor, protoProps, staticProps) {
                if (protoProps) dropdown_defineProperties(Constructor.prototype, protoProps);
                if (staticProps) dropdown_defineProperties(Constructor, staticProps);
                return Constructor;
            }
            /**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */ var Dropdown = /*#__PURE__*/ function() {
                /**
   * @param {{
   *  element: HTMLElement,
   *  type: passedElement['type'],
   *  classNames: ClassNames,
   * }} args
   */ function Dropdown(_ref) {
                    var element = _ref.element, type = _ref.type, classNames = _ref.classNames;
                    this.element = element;
                    this.classNames = classNames;
                    this.type = type;
                    this.isActive = false;
                }
                /**
   * Bottom position of dropdown in viewport coordinates
   * @returns {number} Vertical position
   */ var _proto = Dropdown.prototype;
                /**
   * Find element that matches passed selector
   * @param {string} selector
   * @returns {HTMLElement | null}
   */ _proto.getChild = function getChild(selector) {
                    return this.element.querySelector(selector);
                };
                _proto.show = function show() {
                    this.element.classList.add(this.classNames.activeState);
                    this.element.setAttribute('aria-expanded', 'true');
                    this.isActive = true;
                    return this;
                };
                _proto.hide = function hide() {
                    this.element.classList.remove(this.classNames.activeState);
                    this.element.setAttribute('aria-expanded', 'false');
                    this.isActive = false;
                    return this;
                };
                dropdown_createClass(Dropdown, [
                    {
                        key: "distanceFromTopWindow",
                        get: function get() {
                            return this.element.getBoundingClientRect().bottom;
                        }
                    }
                ]);
                return Dropdown;
            }();
            // CONCATENATED MODULE: ./src/scripts/constants.js
            /**
 * @typedef {import('../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../types/index').Choices.Options} Options
 */ /** @type {ClassNames} */ var DEFAULT_CLASSNAMES = {
                containerOuter: 'choices',
                containerInner: 'choices__inner',
                input: 'choices__input',
                inputCloned: 'choices__input--cloned',
                list: 'choices__list',
                listItems: 'choices__list--multiple',
                listSingle: 'choices__list--single',
                listDropdown: 'choices__list--dropdown',
                item: 'choices__item',
                itemSelectable: 'choices__item--selectable',
                itemDisabled: 'choices__item--disabled',
                itemChoice: 'choices__item--choice',
                placeholder: 'choices__placeholder',
                group: 'choices__group',
                groupHeading: 'choices__heading',
                button: 'choices__button',
                activeState: 'is-active',
                focusState: 'is-focused',
                openState: 'is-open',
                disabledState: 'is-disabled',
                highlightedState: 'is-highlighted',
                selectedState: 'is-selected',
                flippedState: 'is-flipped',
                loadingState: 'is-loading',
                noResults: 'has-no-results',
                noChoices: 'has-no-choices'
            };
            /** @type {Options} */ var DEFAULT_CONFIG = {
                items: [],
                choices: [],
                silent: false,
                renderChoiceLimit: -1,
                maxItemCount: -1,
                addItems: true,
                addItemFilter: null,
                removeItems: true,
                removeItemButton: false,
                editItems: false,
                duplicateItemsAllowed: true,
                delimiter: ',',
                paste: true,
                searchEnabled: true,
                searchChoices: true,
                searchFloor: 1,
                searchResultLimit: 4,
                searchFields: [
                    'label',
                    'value'
                ],
                position: 'auto',
                resetScrollPosition: true,
                shouldSort: true,
                shouldSortItems: false,
                sorter: sortByAlpha,
                placeholder: true,
                placeholderValue: null,
                searchPlaceholderValue: null,
                prependValue: null,
                appendValue: null,
                renderSelectedChoices: 'auto',
                loadingText: 'Loading...',
                noResultsText: 'No results found',
                noChoicesText: 'No choices to choose from',
                itemSelectText: 'Press to select',
                uniqueItemText: 'Only unique values can be added',
                customAddItemText: 'Only values matching specific conditions can be added',
                addItemText: function addItemText(value) {
                    return "Press Enter to add <b>\"" + sanitise(value) + "\"</b>";
                },
                maxItemText: function maxItemText(maxItemCount) {
                    return "Only " + maxItemCount + " values can be added";
                },
                valueComparer: function valueComparer(value1, value2) {
                    return value1 === value2;
                },
                fuseOptions: {
                    includeScore: true
                },
                callbackOnInit: null,
                callbackOnCreateTemplates: null,
                classNames: DEFAULT_CLASSNAMES
            };
            var EVENTS = {
                showDropdown: 'showDropdown',
                hideDropdown: 'hideDropdown',
                change: 'change',
                choice: 'choice',
                search: 'search',
                addItem: 'addItem',
                removeItem: 'removeItem',
                highlightItem: 'highlightItem',
                highlightChoice: 'highlightChoice'
            };
            var ACTION_TYPES = {
                ADD_CHOICE: 'ADD_CHOICE',
                FILTER_CHOICES: 'FILTER_CHOICES',
                ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
                CLEAR_CHOICES: 'CLEAR_CHOICES',
                ADD_GROUP: 'ADD_GROUP',
                ADD_ITEM: 'ADD_ITEM',
                REMOVE_ITEM: 'REMOVE_ITEM',
                HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM',
                CLEAR_ALL: 'CLEAR_ALL'
            };
            var KEY_CODES = {
                BACK_KEY: 46,
                DELETE_KEY: 8,
                ENTER_KEY: 13,
                A_KEY: 65,
                ESC_KEY: 27,
                UP_KEY: 38,
                DOWN_KEY: 40,
                PAGE_UP_KEY: 33,
                PAGE_DOWN_KEY: 34
            };
            var TEXT_TYPE = 'text';
            var SELECT_ONE_TYPE = 'select-one';
            var SELECT_MULTIPLE_TYPE = 'select-multiple';
            var SCROLLING_SPEED = 4;
            // CONCATENATED MODULE: ./src/scripts/components/container.js
            /**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */ var container_Container = /*#__PURE__*/ function() {
                /**
   * @param {{
   *  element: HTMLElement,
   *  type: passedElement['type'],
   *  classNames: ClassNames,
   *  position
   * }} args
   */ function Container(_ref) {
                    var element = _ref.element, type = _ref.type, classNames = _ref.classNames, position = _ref.position;
                    this.element = element;
                    this.classNames = classNames;
                    this.type = type;
                    this.position = position;
                    this.isOpen = false;
                    this.isFlipped = false;
                    this.isFocussed = false;
                    this.isDisabled = false;
                    this.isLoading = false;
                    this._onFocus = this._onFocus.bind(this);
                    this._onBlur = this._onBlur.bind(this);
                }
                var _proto = Container.prototype;
                _proto.addEventListeners = function addEventListeners() {
                    this.element.addEventListener('focus', this._onFocus);
                    this.element.addEventListener('blur', this._onBlur);
                };
                _proto.removeEventListeners = function removeEventListeners() {
                    this.element.removeEventListener('focus', this._onFocus);
                    this.element.removeEventListener('blur', this._onBlur);
                };
                _proto.shouldFlip = function shouldFlip(dropdownPos) {
                    if (typeof dropdownPos !== 'number') return false;
                     // If flip is enabled and the dropdown bottom position is
                    // greater than the window height flip the dropdown.
                    var shouldFlip = false;
                    if (this.position === 'auto') shouldFlip = !window.matchMedia("(min-height: " + (dropdownPos + 1) + "px)").matches;
                    else if (this.position === 'top') shouldFlip = true;
                    return shouldFlip;
                };
                _proto.setActiveDescendant = function setActiveDescendant(activeDescendantID) {
                    this.element.setAttribute('aria-activedescendant', activeDescendantID);
                };
                _proto.removeActiveDescendant = function removeActiveDescendant() {
                    this.element.removeAttribute('aria-activedescendant');
                };
                _proto.open = function open(dropdownPos) {
                    this.element.classList.add(this.classNames.openState);
                    this.element.setAttribute('aria-expanded', 'true');
                    this.isOpen = true;
                    if (this.shouldFlip(dropdownPos)) {
                        this.element.classList.add(this.classNames.flippedState);
                        this.isFlipped = true;
                    }
                };
                _proto.close = function close() {
                    this.element.classList.remove(this.classNames.openState);
                    this.element.setAttribute('aria-expanded', 'false');
                    this.removeActiveDescendant();
                    this.isOpen = false; // A dropdown flips if it does not have space within the page
                    if (this.isFlipped) {
                        this.element.classList.remove(this.classNames.flippedState);
                        this.isFlipped = false;
                    }
                };
                _proto.focus = function focus() {
                    if (!this.isFocussed) this.element.focus();
                };
                _proto.addFocusState = function addFocusState() {
                    this.element.classList.add(this.classNames.focusState);
                };
                _proto.removeFocusState = function removeFocusState() {
                    this.element.classList.remove(this.classNames.focusState);
                };
                _proto.enable = function enable() {
                    this.element.classList.remove(this.classNames.disabledState);
                    this.element.removeAttribute('aria-disabled');
                    if (this.type === SELECT_ONE_TYPE) this.element.setAttribute('tabindex', '0');
                    this.isDisabled = false;
                };
                _proto.disable = function disable() {
                    this.element.classList.add(this.classNames.disabledState);
                    this.element.setAttribute('aria-disabled', 'true');
                    if (this.type === SELECT_ONE_TYPE) this.element.setAttribute('tabindex', '-1');
                    this.isDisabled = true;
                };
                _proto.wrap = function wrap(element) {
                    utils_wrap(element, this.element);
                };
                _proto.unwrap = function unwrap(element) {
                    // Move passed element outside this element
                    this.element.parentNode.insertBefore(element, this.element); // Remove this element
                    this.element.parentNode.removeChild(this.element);
                };
                _proto.addLoadingState = function addLoadingState() {
                    this.element.classList.add(this.classNames.loadingState);
                    this.element.setAttribute('aria-busy', 'true');
                    this.isLoading = true;
                };
                _proto.removeLoadingState = function removeLoadingState() {
                    this.element.classList.remove(this.classNames.loadingState);
                    this.element.removeAttribute('aria-busy');
                    this.isLoading = false;
                };
                _proto._onFocus = function _onFocus() {
                    this.isFocussed = true;
                };
                _proto._onBlur = function _onBlur() {
                    this.isFocussed = false;
                };
                return Container;
            }();
            // CONCATENATED MODULE: ./src/scripts/components/input.js
            function input_defineProperties(target, props) {
                for(var i = 0; i < props.length; i++){
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function input_createClass(Constructor, protoProps, staticProps) {
                if (protoProps) input_defineProperties(Constructor.prototype, protoProps);
                if (staticProps) input_defineProperties(Constructor, staticProps);
                return Constructor;
            }
            /**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */ var input_Input = /*#__PURE__*/ function() {
                /**
   * @param {{
   *  element: HTMLInputElement,
   *  type: passedElement['type'],
   *  classNames: ClassNames,
   *  preventPaste: boolean
   * }} args
   */ function Input(_ref) {
                    var element = _ref.element, type = _ref.type, classNames = _ref.classNames, preventPaste = _ref.preventPaste;
                    this.element = element;
                    this.type = type;
                    this.classNames = classNames;
                    this.preventPaste = preventPaste;
                    this.isFocussed = this.element === document.activeElement;
                    this.isDisabled = element.disabled;
                    this._onPaste = this._onPaste.bind(this);
                    this._onInput = this._onInput.bind(this);
                    this._onFocus = this._onFocus.bind(this);
                    this._onBlur = this._onBlur.bind(this);
                }
                /**
   * @param {string} placeholder
   */ var _proto = Input.prototype;
                _proto.addEventListeners = function addEventListeners() {
                    this.element.addEventListener('paste', this._onPaste);
                    this.element.addEventListener('input', this._onInput, {
                        passive: true
                    });
                    this.element.addEventListener('focus', this._onFocus, {
                        passive: true
                    });
                    this.element.addEventListener('blur', this._onBlur, {
                        passive: true
                    });
                };
                _proto.removeEventListeners = function removeEventListeners() {
                    this.element.removeEventListener('input', this._onInput, {
                        passive: true
                    });
                    this.element.removeEventListener('paste', this._onPaste);
                    this.element.removeEventListener('focus', this._onFocus, {
                        passive: true
                    });
                    this.element.removeEventListener('blur', this._onBlur, {
                        passive: true
                    });
                };
                _proto.enable = function enable() {
                    this.element.removeAttribute('disabled');
                    this.isDisabled = false;
                };
                _proto.disable = function disable() {
                    this.element.setAttribute('disabled', '');
                    this.isDisabled = true;
                };
                _proto.focus = function focus() {
                    if (!this.isFocussed) this.element.focus();
                };
                _proto.blur = function blur() {
                    if (this.isFocussed) this.element.blur();
                };
                _proto.clear = function clear(setWidth) {
                    if (setWidth === void 0) setWidth = true;
                    if (this.element.value) this.element.value = '';
                    if (setWidth) this.setWidth();
                    return this;
                };
                _proto.setWidth = function setWidth() {
                    // Resize input to contents or placeholder
                    var _this$element = this.element, style = _this$element.style, value = _this$element.value, placeholder = _this$element.placeholder;
                    style.minWidth = placeholder.length + 1 + "ch";
                    style.width = value.length + 1 + "ch";
                };
                _proto.setActiveDescendant = function setActiveDescendant(activeDescendantID) {
                    this.element.setAttribute('aria-activedescendant', activeDescendantID);
                };
                _proto.removeActiveDescendant = function removeActiveDescendant() {
                    this.element.removeAttribute('aria-activedescendant');
                };
                _proto._onInput = function _onInput() {
                    if (this.type !== SELECT_ONE_TYPE) this.setWidth();
                };
                _proto._onPaste = function _onPaste(event) {
                    if (this.preventPaste) event.preventDefault();
                };
                _proto._onFocus = function _onFocus() {
                    this.isFocussed = true;
                };
                _proto._onBlur = function _onBlur() {
                    this.isFocussed = false;
                };
                input_createClass(Input, [
                    {
                        key: "placeholder",
                        set: function set(placeholder) {
                            this.element.placeholder = placeholder;
                        }
                    },
                    {
                        key: "value",
                        get: function get() {
                            return sanitise(this.element.value);
                        },
                        set: function set(value) {
                            this.element.value = value;
                        }
                    }
                ]);
                return Input;
            }();
            // CONCATENATED MODULE: ./src/scripts/components/list.js
            /**
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 */ var list_List = /*#__PURE__*/ function() {
                /**
   * @param {{ element: HTMLElement }} args
   */ function List(_ref) {
                    var element = _ref.element;
                    this.element = element;
                    this.scrollPos = this.element.scrollTop;
                    this.height = this.element.offsetHeight;
                }
                var _proto = List.prototype;
                _proto.clear = function clear() {
                    this.element.innerHTML = '';
                };
                _proto.append = function append(node) {
                    this.element.appendChild(node);
                };
                _proto.getChild = function getChild(selector) {
                    return this.element.querySelector(selector);
                };
                _proto.hasChildren = function hasChildren() {
                    return this.element.hasChildNodes();
                };
                _proto.scrollToTop = function scrollToTop() {
                    this.element.scrollTop = 0;
                };
                _proto.scrollToChildElement = function scrollToChildElement(element, direction) {
                    var _this = this;
                    if (!element) return;
                    var listHeight = this.element.offsetHeight; // Scroll position of dropdown
                    var listScrollPosition = this.element.scrollTop + listHeight;
                    var elementHeight = element.offsetHeight; // Distance from bottom of element to top of parent
                    var elementPos = element.offsetTop + elementHeight; // Difference between the element and scroll position
                    var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
                    requestAnimationFrame(function() {
                        _this._animateScroll(destination, direction);
                    });
                };
                _proto._scrollDown = function _scrollDown(scrollPos, strength, destination) {
                    var easing = (destination - scrollPos) / strength;
                    var distance = easing > 1 ? easing : 1;
                    this.element.scrollTop = scrollPos + distance;
                };
                _proto._scrollUp = function _scrollUp(scrollPos, strength, destination) {
                    var easing = (scrollPos - destination) / strength;
                    var distance = easing > 1 ? easing : 1;
                    this.element.scrollTop = scrollPos - distance;
                };
                _proto._animateScroll = function _animateScroll(destination, direction) {
                    var _this2 = this;
                    var strength = SCROLLING_SPEED;
                    var choiceListScrollTop = this.element.scrollTop;
                    var continueAnimation = false;
                    if (direction > 0) {
                        this._scrollDown(choiceListScrollTop, strength, destination);
                        if (choiceListScrollTop < destination) continueAnimation = true;
                    } else {
                        this._scrollUp(choiceListScrollTop, strength, destination);
                        if (choiceListScrollTop > destination) continueAnimation = true;
                    }
                    if (continueAnimation) requestAnimationFrame(function() {
                        _this2._animateScroll(destination, direction);
                    });
                };
                return List;
            }();
            // CONCATENATED MODULE: ./src/scripts/components/wrapped-element.js
            function wrapped_element_defineProperties(target, props) {
                for(var i = 0; i < props.length; i++){
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function wrapped_element_createClass(Constructor, protoProps, staticProps) {
                if (protoProps) wrapped_element_defineProperties(Constructor.prototype, protoProps);
                if (staticProps) wrapped_element_defineProperties(Constructor, staticProps);
                return Constructor;
            }
            /**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */ var wrapped_element_WrappedElement = /*#__PURE__*/ function() {
                /**
   * @param {{
   *  element: HTMLInputElement | HTMLSelectElement,
   *  classNames: ClassNames,
   * }} args
   */ function WrappedElement(_ref) {
                    var element = _ref.element, classNames = _ref.classNames;
                    this.element = element;
                    this.classNames = classNames;
                    if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) throw new TypeError('Invalid element passed');
                    this.isDisabled = false;
                }
                var _proto = WrappedElement.prototype;
                _proto.conceal = function conceal() {
                    // Hide passed input
                    this.element.classList.add(this.classNames.input);
                    this.element.hidden = true; // Remove element from tab index
                    this.element.tabIndex = -1; // Backup original styles if any
                    var origStyle = this.element.getAttribute('style');
                    if (origStyle) this.element.setAttribute('data-choice-orig-style', origStyle);
                    this.element.setAttribute('data-choice', 'active');
                };
                _proto.reveal = function reveal() {
                    // Reinstate passed element
                    this.element.classList.remove(this.classNames.input);
                    this.element.hidden = false;
                    this.element.removeAttribute('tabindex'); // Recover original styles if any
                    var origStyle = this.element.getAttribute('data-choice-orig-style');
                    if (origStyle) {
                        this.element.removeAttribute('data-choice-orig-style');
                        this.element.setAttribute('style', origStyle);
                    } else this.element.removeAttribute('style');
                    this.element.removeAttribute('data-choice'); // Re-assign values - this is weird, I know
                    // @todo Figure out why we need to do this
                    this.element.value = this.element.value; // eslint-disable-line no-self-assign
                };
                _proto.enable = function enable() {
                    this.element.removeAttribute('disabled');
                    this.element.disabled = false;
                    this.isDisabled = false;
                };
                _proto.disable = function disable() {
                    this.element.setAttribute('disabled', '');
                    this.element.disabled = true;
                    this.isDisabled = true;
                };
                _proto.triggerEvent = function triggerEvent(eventType, data) {
                    dispatchEvent(this.element, eventType, data);
                };
                wrapped_element_createClass(WrappedElement, [
                    {
                        key: "isActive",
                        get: function get() {
                            return this.element.dataset.choice === 'active';
                        }
                    },
                    {
                        key: "dir",
                        get: function get() {
                            return this.element.dir;
                        }
                    },
                    {
                        key: "value",
                        get: function get() {
                            return this.element.value;
                        },
                        set: function set(value) {
                            // you must define setter here otherwise it will be readonly property
                            this.element.value = value;
                        }
                    }
                ]);
                return WrappedElement;
            }();
            // CONCATENATED MODULE: ./src/scripts/components/wrapped-input.js
            function wrapped_input_defineProperties(target, props) {
                for(var i = 0; i < props.length; i++){
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function wrapped_input_createClass(Constructor, protoProps, staticProps) {
                if (protoProps) wrapped_input_defineProperties(Constructor.prototype, protoProps);
                if (staticProps) wrapped_input_defineProperties(Constructor, staticProps);
                return Constructor;
            }
            function _inheritsLoose(subClass, superClass) {
                subClass.prototype = Object.create(superClass.prototype);
                subClass.prototype.constructor = subClass;
                subClass.__proto__ = superClass;
            }
            /**
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../../types/index').Choices.Item} Item
 */ var WrappedInput = /*#__PURE__*/ function(_WrappedElement) {
                _inheritsLoose(WrappedInput, _WrappedElement);
                /**
   * @param {{
   *  element: HTMLInputElement,
   *  classNames: ClassNames,
   *  delimiter: string
   * }} args
   */ function WrappedInput(_ref) {
                    var _this;
                    var element = _ref.element, classNames = _ref.classNames, delimiter = _ref.delimiter;
                    _this = _WrappedElement.call(this, {
                        element: element,
                        classNames: classNames
                    }) || this;
                    _this.delimiter = delimiter;
                    return _this;
                }
                /**
   * @returns {string}
   */ wrapped_input_createClass(WrappedInput, [
                    {
                        key: "value",
                        get: function get() {
                            return this.element.value;
                        },
                        set: function set(items) {
                            var itemValues = items.map(function(_ref2) {
                                var value = _ref2.value;
                                return value;
                            });
                            var joinedValues = itemValues.join(this.delimiter);
                            this.element.setAttribute('value', joinedValues);
                            this.element.value = joinedValues;
                        }
                    }
                ]);
                return WrappedInput;
            }(wrapped_element_WrappedElement);
            // CONCATENATED MODULE: ./src/scripts/components/wrapped-select.js
            function wrapped_select_defineProperties(target, props) {
                for(var i = 0; i < props.length; i++){
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function wrapped_select_createClass(Constructor, protoProps, staticProps) {
                if (protoProps) wrapped_select_defineProperties(Constructor.prototype, protoProps);
                if (staticProps) wrapped_select_defineProperties(Constructor, staticProps);
                return Constructor;
            }
            function wrapped_select_inheritsLoose(subClass, superClass) {
                subClass.prototype = Object.create(superClass.prototype);
                subClass.prototype.constructor = subClass;
                subClass.__proto__ = superClass;
            }
            /**
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../../types/index').Choices.Item} Item
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 */ var WrappedSelect = /*#__PURE__*/ function(_WrappedElement) {
                wrapped_select_inheritsLoose(WrappedSelect, _WrappedElement);
                /**
   * @param {{
   *  element: HTMLSelectElement,
   *  classNames: ClassNames,
   *  delimiter: string
   *  template: function
   * }} args
   */ function WrappedSelect(_ref) {
                    var _this;
                    var element = _ref.element, classNames = _ref.classNames, template = _ref.template;
                    _this = _WrappedElement.call(this, {
                        element: element,
                        classNames: classNames
                    }) || this;
                    _this.template = template;
                    return _this;
                }
                var _proto = WrappedSelect.prototype;
                /**
   * @param {DocumentFragment} fragment
   */ _proto.appendDocFragment = function appendDocFragment(fragment) {
                    this.element.innerHTML = '';
                    this.element.appendChild(fragment);
                };
                wrapped_select_createClass(WrappedSelect, [
                    {
                        key: "placeholderOption",
                        get: function get() {
                            return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
                            this.element.querySelector('option[placeholder]');
                        }
                    },
                    {
                        key: "optionGroups",
                        get: function get() {
                            return Array.from(this.element.getElementsByTagName('OPTGROUP'));
                        }
                    },
                    {
                        key: "options",
                        get: function get() {
                            return Array.from(this.element.options);
                        },
                        set: function set(options) {
                            var _this2 = this;
                            var fragment = document.createDocumentFragment();
                            var addOptionToFragment = function addOptionToFragment(data) {
                                // Create a standard select option
                                var option = _this2.template(data); // Append it to fragment
                                fragment.appendChild(option);
                            }; // Add each list item to list
                            options.forEach(function(optionData) {
                                return addOptionToFragment(optionData);
                            });
                            this.appendDocFragment(fragment);
                        }
                    }
                ]);
                return WrappedSelect;
            }(wrapped_element_WrappedElement);
            // CONCATENATED MODULE: ./src/scripts/components/index.js
            // CONCATENATED MODULE: ./src/scripts/templates.js
            /**
 * Helpers to create HTML elements used by Choices
 * Can be overridden by providing `callbackOnCreateTemplates` option
 * @typedef {import('../../types/index').Choices.Templates} Templates
 * @typedef {import('../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../types/index').Choices.Options} Options
 * @typedef {import('../../types/index').Choices.Item} Item
 * @typedef {import('../../types/index').Choices.Choice} Choice
 * @typedef {import('../../types/index').Choices.Group} Group
 */ var TEMPLATES = /** @type {Templates} */ {
                /**
   * @param {Partial<ClassNames>} classNames
   * @param {"ltr" | "rtl" | "auto"} dir
   * @param {boolean} isSelectElement
   * @param {boolean} isSelectOneElement
   * @param {boolean} searchEnabled
   * @param {"select-one" | "select-multiple" | "text"} passedElementType
   */ containerOuter: function containerOuter(_ref, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType) {
                    var _containerOuter = _ref.containerOuter;
                    var div = Object.assign(document.createElement('div'), {
                        className: _containerOuter
                    });
                    div.dataset.type = passedElementType;
                    if (dir) div.dir = dir;
                    if (isSelectOneElement) div.tabIndex = 0;
                    if (isSelectElement) {
                        div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');
                        if (searchEnabled) div.setAttribute('aria-autocomplete', 'list');
                    }
                    div.setAttribute('aria-haspopup', 'true');
                    div.setAttribute('aria-expanded', 'false');
                    return div;
                },
                /**
   * @param {Partial<ClassNames>} classNames
   */ containerInner: function containerInner(_ref2) {
                    var _containerInner = _ref2.containerInner;
                    return Object.assign(document.createElement('div'), {
                        className: _containerInner
                    });
                },
                /**
   * @param {Partial<ClassNames>} classNames
   * @param {boolean} isSelectOneElement
   */ itemList: function itemList(_ref3, isSelectOneElement) {
                    var list = _ref3.list, listSingle = _ref3.listSingle, listItems = _ref3.listItems;
                    return Object.assign(document.createElement('div'), {
                        className: list + " " + (isSelectOneElement ? listSingle : listItems)
                    });
                },
                /**
   * @param {Partial<ClassNames>} classNames
   * @param {string} value
   */ placeholder: function placeholder(_ref4, value) {
                    var _placeholder = _ref4.placeholder;
                    return Object.assign(document.createElement('div'), {
                        className: _placeholder,
                        innerHTML: value
                    });
                },
                /**
   * @param {Partial<ClassNames>} classNames
   * @param {Item} item
   * @param {boolean} removeItemButton
   */ item: function item(_ref5, _ref6, removeItemButton) {
                    var _item = _ref5.item, button = _ref5.button, highlightedState = _ref5.highlightedState, itemSelectable = _ref5.itemSelectable, placeholder = _ref5.placeholder;
                    var id = _ref6.id, value = _ref6.value, label = _ref6.label, customProperties = _ref6.customProperties, active = _ref6.active, disabled = _ref6.disabled, highlighted = _ref6.highlighted, isPlaceholder = _ref6.placeholder;
                    var div = Object.assign(document.createElement('div'), {
                        className: _item,
                        innerHTML: label
                    });
                    Object.assign(div.dataset, {
                        item: '',
                        id: id,
                        value: value,
                        customProperties: customProperties
                    });
                    if (active) div.setAttribute('aria-selected', 'true');
                    if (disabled) div.setAttribute('aria-disabled', 'true');
                    if (isPlaceholder) div.classList.add(placeholder);
                    div.classList.add(highlighted ? highlightedState : itemSelectable);
                    if (removeItemButton) {
                        if (disabled) div.classList.remove(itemSelectable);
                        div.dataset.deletable = '';
                        /** @todo This MUST be localizable, not hardcoded! */ var REMOVE_ITEM_TEXT = 'Remove item';
                        var removeButton = Object.assign(document.createElement('button'), {
                            type: 'button',
                            className: button,
                            innerHTML: REMOVE_ITEM_TEXT
                        });
                        removeButton.setAttribute('aria-label', REMOVE_ITEM_TEXT + ": '" + value + "'");
                        removeButton.dataset.button = '';
                        div.appendChild(removeButton);
                    }
                    return div;
                },
                /**
   * @param {Partial<ClassNames>} classNames
   * @param {boolean} isSelectOneElement
   */ choiceList: function choiceList(_ref7, isSelectOneElement) {
                    var list = _ref7.list;
                    var div = Object.assign(document.createElement('div'), {
                        className: list
                    });
                    if (!isSelectOneElement) div.setAttribute('aria-multiselectable', 'true');
                    div.setAttribute('role', 'listbox');
                    return div;
                },
                /**
   * @param {Partial<ClassNames>} classNames
   * @param {Group} group
   */ choiceGroup: function choiceGroup(_ref8, _ref9) {
                    var group = _ref8.group, groupHeading = _ref8.groupHeading, itemDisabled = _ref8.itemDisabled;
                    var id = _ref9.id, value = _ref9.value, disabled = _ref9.disabled;
                    var div = Object.assign(document.createElement('div'), {
                        className: group + " " + (disabled ? itemDisabled : '')
                    });
                    div.setAttribute('role', 'group');
                    Object.assign(div.dataset, {
                        group: '',
                        id: id,
                        value: value
                    });
                    if (disabled) div.setAttribute('aria-disabled', 'true');
                    div.appendChild(Object.assign(document.createElement('div'), {
                        className: groupHeading,
                        innerHTML: value
                    }));
                    return div;
                },
                /**
   * @param {Partial<ClassNames>} classNames
   * @param {Choice} choice
   * @param {Options['itemSelectText']} selectText
   */ choice: function choice(_ref10, _ref11, selectText) {
                    var item = _ref10.item, itemChoice = _ref10.itemChoice, itemSelectable = _ref10.itemSelectable, selectedState = _ref10.selectedState, itemDisabled = _ref10.itemDisabled, placeholder = _ref10.placeholder;
                    var id = _ref11.id, value = _ref11.value, label = _ref11.label, groupId = _ref11.groupId, elementId = _ref11.elementId, isDisabled = _ref11.disabled, isSelected = _ref11.selected, isPlaceholder = _ref11.placeholder;
                    var div = Object.assign(document.createElement('div'), {
                        id: elementId,
                        innerHTML: label,
                        className: item + " " + itemChoice
                    });
                    if (isSelected) div.classList.add(selectedState);
                    if (isPlaceholder) div.classList.add(placeholder);
                    div.setAttribute('role', groupId > 0 ? 'treeitem' : 'option');
                    Object.assign(div.dataset, {
                        choice: '',
                        id: id,
                        value: value,
                        selectText: selectText
                    });
                    if (isDisabled) {
                        div.classList.add(itemDisabled);
                        div.dataset.choiceDisabled = '';
                        div.setAttribute('aria-disabled', 'true');
                    } else {
                        div.classList.add(itemSelectable);
                        div.dataset.choiceSelectable = '';
                    }
                    return div;
                },
                /**
   * @param {Partial<ClassNames>} classNames
   * @param {string} placeholderValue
   */ input: function input(_ref12, placeholderValue) {
                    var _input = _ref12.input, inputCloned = _ref12.inputCloned;
                    var inp = Object.assign(document.createElement('input'), {
                        type: 'text',
                        className: _input + " " + inputCloned,
                        autocomplete: 'off',
                        autocapitalize: 'off',
                        spellcheck: false
                    });
                    inp.setAttribute('role', 'textbox');
                    inp.setAttribute('aria-autocomplete', 'list');
                    inp.setAttribute('aria-label', placeholderValue);
                    return inp;
                },
                /**
   * @param {Partial<ClassNames>} classNames
   */ dropdown: function dropdown(_ref13) {
                    var list = _ref13.list, listDropdown = _ref13.listDropdown;
                    var div = document.createElement('div');
                    div.classList.add(list, listDropdown);
                    div.setAttribute('aria-expanded', 'false');
                    return div;
                },
                /**
   *
   * @param {Partial<ClassNames>} classNames
   * @param {string} innerHTML
   * @param {"no-choices" | "no-results" | ""} type
   */ notice: function notice(_ref14, innerHTML, type) {
                    var item = _ref14.item, itemChoice = _ref14.itemChoice, noResults = _ref14.noResults, noChoices = _ref14.noChoices;
                    if (type === void 0) type = '';
                    var classes = [
                        item,
                        itemChoice
                    ];
                    if (type === 'no-choices') classes.push(noChoices);
                    else if (type === 'no-results') classes.push(noResults);
                    return Object.assign(document.createElement('div'), {
                        innerHTML: innerHTML,
                        className: classes.join(' ')
                    });
                },
                /**
   * @param {Item} option
   */ option: function option(_ref15) {
                    var label = _ref15.label, value = _ref15.value, customProperties = _ref15.customProperties, active = _ref15.active, disabled = _ref15.disabled;
                    var opt = new Option(label, value, false, active);
                    if (customProperties) opt.dataset.customProperties = customProperties;
                    opt.disabled = disabled;
                    return opt;
                }
            };
            /* harmony default export */ var templates = TEMPLATES;
            // CONCATENATED MODULE: ./src/scripts/actions/choices.js
            /**
 * @typedef {import('redux').Action} Action
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 */ /**
 * @argument {Choice} choice
 * @returns {Action & Choice}
 */ var choices_addChoice = function addChoice(_ref) {
                var value = _ref.value, label = _ref.label, id = _ref.id, groupId = _ref.groupId, disabled = _ref.disabled, elementId = _ref.elementId, customProperties = _ref.customProperties, placeholder = _ref.placeholder, keyCode = _ref.keyCode;
                return {
                    type: ACTION_TYPES.ADD_CHOICE,
                    value: value,
                    label: label,
                    id: id,
                    groupId: groupId,
                    disabled: disabled,
                    elementId: elementId,
                    customProperties: customProperties,
                    placeholder: placeholder,
                    keyCode: keyCode
                };
            };
            /**
 * @argument {Choice[]} results
 * @returns {Action & { results: Choice[] }}
 */ var choices_filterChoices = function filterChoices(results) {
                return {
                    type: ACTION_TYPES.FILTER_CHOICES,
                    results: results
                };
            };
            /**
 * @argument {boolean} active
 * @returns {Action & { active: boolean }}
 */ var choices_activateChoices = function activateChoices(active) {
                if (active === void 0) active = true;
                return {
                    type: ACTION_TYPES.ACTIVATE_CHOICES,
                    active: active
                };
            };
            /**
 * @returns {Action}
 */ var choices_clearChoices = function clearChoices() {
                return {
                    type: ACTION_TYPES.CLEAR_CHOICES
                };
            };
            // CONCATENATED MODULE: ./src/scripts/actions/items.js
            /**
 * @typedef {import('redux').Action} Action
 * @typedef {import('../../../types/index').Choices.Item} Item
 */ /**
 * @param {Item} item
 * @returns {Action & Item}
 */ var items_addItem = function addItem(_ref) {
                var value = _ref.value, label = _ref.label, id = _ref.id, choiceId = _ref.choiceId, groupId = _ref.groupId, customProperties = _ref.customProperties, placeholder = _ref.placeholder, keyCode = _ref.keyCode;
                return {
                    type: ACTION_TYPES.ADD_ITEM,
                    value: value,
                    label: label,
                    id: id,
                    choiceId: choiceId,
                    groupId: groupId,
                    customProperties: customProperties,
                    placeholder: placeholder,
                    keyCode: keyCode
                };
            };
            /**
 * @param {string} id
 * @param {string} choiceId
 * @returns {Action & { id: string, choiceId: string }}
 */ var items_removeItem = function removeItem(id, choiceId) {
                return {
                    type: ACTION_TYPES.REMOVE_ITEM,
                    id: id,
                    choiceId: choiceId
                };
            };
            /**
 * @param {string} id
 * @param {boolean} highlighted
 * @returns {Action & { id: string, highlighted: boolean }}
 */ var items_highlightItem = function highlightItem(id, highlighted) {
                return {
                    type: ACTION_TYPES.HIGHLIGHT_ITEM,
                    id: id,
                    highlighted: highlighted
                };
            };
            // CONCATENATED MODULE: ./src/scripts/actions/groups.js
            /**
 * @typedef {import('redux').Action} Action
 * @typedef {import('../../../types/index').Choices.Group} Group
 */ /**
 * @param {Group} group
 * @returns {Action & Group}
 */ var groups_addGroup = function addGroup(_ref) {
                var value = _ref.value, id = _ref.id, active = _ref.active, disabled = _ref.disabled;
                return {
                    type: ACTION_TYPES.ADD_GROUP,
                    value: value,
                    id: id,
                    active: active,
                    disabled: disabled
                };
            };
            // CONCATENATED MODULE: ./src/scripts/actions/misc.js
            /**
 * @typedef {import('redux').Action} Action
 */ /**
 * @returns {Action}
 */ var clearAll = function clearAll() {
                return {
                    type: 'CLEAR_ALL'
                };
            };
            /**
 * @param {any} state
 * @returns {Action & { state: object }}
 */ var resetTo = function resetTo(state) {
                return {
                    type: 'RESET_TO',
                    state: state
                };
            };
            /**
 * @param {boolean} isLoading
 * @returns {Action & { isLoading: boolean }}
 */ var setIsLoading = function setIsLoading(isLoading) {
                return {
                    type: 'SET_IS_LOADING',
                    isLoading: isLoading
                };
            };
            // CONCATENATED MODULE: ./src/scripts/choices.js
            function choices_defineProperties(target, props) {
                for(var i = 0; i < props.length; i++){
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function choices_createClass(Constructor, protoProps, staticProps) {
                if (protoProps) choices_defineProperties(Constructor.prototype, protoProps);
                if (staticProps) choices_defineProperties(Constructor, staticProps);
                return Constructor;
            }
            /** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */ var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
            /**
 * @typedef {import('../../types/index').Choices.Choice} Choice
 * @typedef {import('../../types/index').Choices.Item} Item
 * @typedef {import('../../types/index').Choices.Group} Group
 * @typedef {import('../../types/index').Choices.Options} Options
 */ /** @type {Partial<Options>} */ var USER_DEFAULTS = {};
            /**
 * Choices
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */ var choices_Choices = /*#__PURE__*/ function() {
                choices_createClass(Choices, null, [
                    {
                        key: "defaults",
                        get: function get() {
                            return Object.preventExtensions({
                                get options () {
                                    return USER_DEFAULTS;
                                },
                                get templates () {
                                    return TEMPLATES;
                                }
                            });
                        }
                    }
                ]);
                function Choices(element, userConfig) {
                    var _this = this;
                    if (element === void 0) element = '[data-choice]';
                    if (userConfig === void 0) userConfig = {};
                    /** @type {Partial<Options>} */ this.config = cjs_default.a.all([
                        DEFAULT_CONFIG,
                        Choices.defaults.options,
                        userConfig
                    ], // instead of concatenating with the default array
                    {
                        arrayMerge: function arrayMerge(_, sourceArray) {
                            return [].concat(sourceArray);
                        }
                    });
                    var invalidConfigOptions = diff(this.config, DEFAULT_CONFIG);
                    if (invalidConfigOptions.length) console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
                    var passedElement = typeof element === 'string' ? document.querySelector(element) : element;
                    if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) throw TypeError('Expected one of the following types text|select-one|select-multiple');
                    this._isTextElement = passedElement.type === TEXT_TYPE;
                    this._isSelectOneElement = passedElement.type === SELECT_ONE_TYPE;
                    this._isSelectMultipleElement = passedElement.type === SELECT_MULTIPLE_TYPE;
                    this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
                    this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
                    if (![
                        'auto',
                        'always'
                    ].includes(this.config.renderSelectedChoices)) this.config.renderSelectedChoices = 'auto';
                    if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
                        var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
                        this.config.addItemFilter = re.test.bind(re);
                    }
                    if (this._isTextElement) this.passedElement = new WrappedInput({
                        element: passedElement,
                        classNames: this.config.classNames,
                        delimiter: this.config.delimiter
                    });
                    else this.passedElement = new WrappedSelect({
                        element: passedElement,
                        classNames: this.config.classNames,
                        template: function template(data) {
                            return _this._templates.option(data);
                        }
                    });
                    this.initialised = false;
                    this._store = new store_Store();
                    this._initialState = {};
                    this._currentState = {};
                    this._prevState = {};
                    this._currentValue = '';
                    this._canSearch = this.config.searchEnabled;
                    this._isScrollingOnIe = false;
                    this._highlightPosition = 0;
                    this._wasTap = true;
                    this._placeholderValue = this._generatePlaceholderValue();
                    this._baseId = generateId(this.passedElement.element, 'choices-');
                    /**
     * setting direction in cases where it's explicitly set on passedElement
     * or when calculated direction is different from the document
     * @type {HTMLElement['dir']}
     */ this._direction = this.passedElement.dir;
                    if (!this._direction) {
                        var _window$getComputedSt = window.getComputedStyle(this.passedElement.element), elementDirection = _window$getComputedSt.direction;
                        var _window$getComputedSt2 = window.getComputedStyle(document.documentElement), documentDirection = _window$getComputedSt2.direction;
                        if (elementDirection !== documentDirection) this._direction = elementDirection;
                    }
                    this._idNames = {
                        itemChoice: 'item-choice'
                    }; // Assign preset groups from passed element
                    this._presetGroups = this.passedElement.optionGroups; // Assign preset options from passed element
                    this._presetOptions = this.passedElement.options; // Assign preset choices from passed object
                    this._presetChoices = this.config.choices; // Assign preset items from passed object first
                    this._presetItems = this.config.items; // Add any values passed from attribute
                    if (this.passedElement.value) this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter));
                     // Create array of choices from option elements
                    if (this.passedElement.options) this.passedElement.options.forEach(function(o) {
                        _this._presetChoices.push({
                            value: o.value,
                            label: o.innerHTML,
                            selected: o.selected,
                            disabled: o.disabled || o.parentNode.disabled,
                            placeholder: o.value === '' || o.hasAttribute('placeholder'),
                            customProperties: o.getAttribute('data-custom-properties')
                        });
                    });
                    this._render = this._render.bind(this);
                    this._onFocus = this._onFocus.bind(this);
                    this._onBlur = this._onBlur.bind(this);
                    this._onKeyUp = this._onKeyUp.bind(this);
                    this._onKeyDown = this._onKeyDown.bind(this);
                    this._onClick = this._onClick.bind(this);
                    this._onTouchMove = this._onTouchMove.bind(this);
                    this._onTouchEnd = this._onTouchEnd.bind(this);
                    this._onMouseDown = this._onMouseDown.bind(this);
                    this._onMouseOver = this._onMouseOver.bind(this);
                    this._onFormReset = this._onFormReset.bind(this);
                    this._onAKey = this._onAKey.bind(this);
                    this._onEnterKey = this._onEnterKey.bind(this);
                    this._onEscapeKey = this._onEscapeKey.bind(this);
                    this._onDirectionKey = this._onDirectionKey.bind(this);
                    this._onDeleteKey = this._onDeleteKey.bind(this); // If element has already been initialised with Choices, fail silently
                    if (this.passedElement.isActive) {
                        if (!this.config.silent) console.warn('Trying to initialise Choices on element already initialised');
                        this.initialised = true;
                        return;
                    } // Let's go
                    this.init();
                }
                var _proto = Choices.prototype;
                _proto.init = function init() {
                    if (this.initialised) return;
                    this._createTemplates();
                    this._createElements();
                    this._createStructure(); // Set initial state (We need to clone the state because some reducers
                    // modify the inner objects properties in the state) 🤢
                    this._initialState = cloneObject(this._store.state);
                    this._store.subscribe(this._render);
                    this._render();
                    this._addEventListeners();
                    var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute('disabled');
                    if (shouldDisable) this.disable();
                    this.initialised = true;
                    var callbackOnInit = this.config.callbackOnInit; // Run callback if it is a function
                    if (callbackOnInit && typeof callbackOnInit === 'function') callbackOnInit.call(this);
                };
                _proto.destroy = function destroy() {
                    if (!this.initialised) return;
                    this._removeEventListeners();
                    this.passedElement.reveal();
                    this.containerOuter.unwrap(this.passedElement.element);
                    this.clearStore();
                    if (this._isSelectElement) this.passedElement.options = this._presetOptions;
                    this._templates = null;
                    this.initialised = false;
                };
                _proto.enable = function enable() {
                    if (this.passedElement.isDisabled) this.passedElement.enable();
                    if (this.containerOuter.isDisabled) {
                        this._addEventListeners();
                        this.input.enable();
                        this.containerOuter.enable();
                    }
                    return this;
                };
                _proto.disable = function disable() {
                    if (!this.passedElement.isDisabled) this.passedElement.disable();
                    if (!this.containerOuter.isDisabled) {
                        this._removeEventListeners();
                        this.input.disable();
                        this.containerOuter.disable();
                    }
                    return this;
                };
                _proto.highlightItem = function highlightItem(item, runEvent) {
                    if (runEvent === void 0) runEvent = true;
                    if (!item) return this;
                    var id = item.id, _item$groupId = item.groupId, groupId = _item$groupId === void 0 ? -1 : _item$groupId, _item$value = item.value, value = _item$value === void 0 ? '' : _item$value, _item$label = item.label, label = _item$label === void 0 ? '' : _item$label;
                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                    this._store.dispatch(items_highlightItem(id, true));
                    if (runEvent) this.passedElement.triggerEvent(EVENTS.highlightItem, {
                        id: id,
                        value: value,
                        label: label,
                        groupValue: group && group.value ? group.value : null
                    });
                    return this;
                };
                _proto.unhighlightItem = function unhighlightItem(item) {
                    if (!item) return this;
                    var id = item.id, _item$groupId2 = item.groupId, groupId = _item$groupId2 === void 0 ? -1 : _item$groupId2, _item$value2 = item.value, value = _item$value2 === void 0 ? '' : _item$value2, _item$label2 = item.label, label = _item$label2 === void 0 ? '' : _item$label2;
                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                    this._store.dispatch(items_highlightItem(id, false));
                    this.passedElement.triggerEvent(EVENTS.highlightItem, {
                        id: id,
                        value: value,
                        label: label,
                        groupValue: group && group.value ? group.value : null
                    });
                    return this;
                };
                _proto.highlightAll = function highlightAll() {
                    var _this2 = this;
                    this._store.items.forEach(function(item) {
                        return _this2.highlightItem(item);
                    });
                    return this;
                };
                _proto.unhighlightAll = function unhighlightAll() {
                    var _this3 = this;
                    this._store.items.forEach(function(item) {
                        return _this3.unhighlightItem(item);
                    });
                    return this;
                };
                _proto.removeActiveItemsByValue = function removeActiveItemsByValue(value) {
                    var _this4 = this;
                    this._store.activeItems.filter(function(item) {
                        return item.value === value;
                    }).forEach(function(item) {
                        return _this4._removeItem(item);
                    });
                    return this;
                };
                _proto.removeActiveItems = function removeActiveItems(excludedId) {
                    var _this5 = this;
                    this._store.activeItems.filter(function(_ref) {
                        var id = _ref.id;
                        return id !== excludedId;
                    }).forEach(function(item) {
                        return _this5._removeItem(item);
                    });
                    return this;
                };
                _proto.removeHighlightedItems = function removeHighlightedItems(runEvent) {
                    var _this6 = this;
                    if (runEvent === void 0) runEvent = false;
                    this._store.highlightedActiveItems.forEach(function(item) {
                        _this6._removeItem(item); // If this action was performed by the user
                        // trigger the event
                        if (runEvent) _this6._triggerChange(item.value);
                    });
                    return this;
                };
                _proto.showDropdown = function showDropdown(preventInputFocus) {
                    var _this7 = this;
                    if (this.dropdown.isActive) return this;
                    requestAnimationFrame(function() {
                        _this7.dropdown.show();
                        _this7.containerOuter.open(_this7.dropdown.distanceFromTopWindow);
                        if (!preventInputFocus && _this7._canSearch) _this7.input.focus();
                        _this7.passedElement.triggerEvent(EVENTS.showDropdown, {});
                    });
                    return this;
                };
                _proto.hideDropdown = function hideDropdown(preventInputBlur) {
                    var _this8 = this;
                    if (!this.dropdown.isActive) return this;
                    requestAnimationFrame(function() {
                        _this8.dropdown.hide();
                        _this8.containerOuter.close();
                        if (!preventInputBlur && _this8._canSearch) {
                            _this8.input.removeActiveDescendant();
                            _this8.input.blur();
                        }
                        _this8.passedElement.triggerEvent(EVENTS.hideDropdown, {});
                    });
                    return this;
                };
                _proto.getValue = function getValue(valueOnly) {
                    if (valueOnly === void 0) valueOnly = false;
                    var values = this._store.activeItems.reduce(function(selectedItems, item) {
                        var itemValue = valueOnly ? item.value : item;
                        selectedItems.push(itemValue);
                        return selectedItems;
                    }, []);
                    return this._isSelectOneElement ? values[0] : values;
                };
                _proto.setValue = function setValue(items) {
                    var _this9 = this;
                    if (!this.initialised) return this;
                    items.forEach(function(value) {
                        return _this9._setChoiceOrItem(value);
                    });
                    return this;
                };
                _proto.setChoiceByValue = function setChoiceByValue(value) {
                    var _this10 = this;
                    if (!this.initialised || this._isTextElement) return this;
                     // If only one value has been passed, convert to array
                    var choiceValue = Array.isArray(value) ? value : [
                        value
                    ]; // Loop through each value and
                    choiceValue.forEach(function(val) {
                        return _this10._findAndSelectChoiceByValue(val);
                    });
                    return this;
                };
                _proto.setChoices = function setChoices(choicesArrayOrFetcher, value, label, replaceChoices) {
                    var _this11 = this;
                    if (choicesArrayOrFetcher === void 0) choicesArrayOrFetcher = [];
                    if (value === void 0) value = 'value';
                    if (label === void 0) label = 'label';
                    if (replaceChoices === void 0) replaceChoices = false;
                    if (!this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                    if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
                    if (typeof value !== 'string' || !value) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                     // Clear choices if needed
                    if (replaceChoices) this.clearChoices();
                    if (typeof choicesArrayOrFetcher === 'function') {
                        // it's a choices fetcher function
                        var fetcher = choicesArrayOrFetcher(this);
                        if (typeof Promise === 'function' && fetcher instanceof Promise) // that's a promise
                        // eslint-disable-next-line compat/compat
                        return new Promise(function(resolve) {
                            return requestAnimationFrame(resolve);
                        }).then(function() {
                            return _this11._handleLoadingState(true);
                        }).then(function() {
                            return fetcher;
                        }).then(function(data) {
                            return _this11.setChoices(data, value, label, replaceChoices);
                        }).catch(function(err) {
                            if (!_this11.config.silent) console.error(err);
                        }).then(function() {
                            return _this11._handleLoadingState(false);
                        }).then(function() {
                            return _this11;
                        });
                         // function returned something else than promise, let's check if it's an array of choices
                        if (!Array.isArray(fetcher)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: " + typeof fetcher);
                         // recursion with results, it's sync and choices were cleared already
                        return this.setChoices(fetcher, value, label, false);
                    }
                    if (!Array.isArray(choicesArrayOrFetcher)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                    this.containerOuter.removeLoadingState();
                    this._startLoading();
                    choicesArrayOrFetcher.forEach(function(groupOrChoice) {
                        if (groupOrChoice.choices) _this11._addGroup({
                            id: parseInt(groupOrChoice.id, 10) || null,
                            group: groupOrChoice,
                            valueKey: value,
                            labelKey: label
                        });
                        else _this11._addChoice({
                            value: groupOrChoice[value],
                            label: groupOrChoice[label],
                            isSelected: groupOrChoice.selected,
                            isDisabled: groupOrChoice.disabled,
                            customProperties: groupOrChoice.customProperties,
                            placeholder: groupOrChoice.placeholder
                        });
                    });
                    this._stopLoading();
                    return this;
                };
                _proto.clearChoices = function clearChoices() {
                    this._store.dispatch(choices_clearChoices());
                    return this;
                };
                _proto.clearStore = function clearStore() {
                    this._store.dispatch(clearAll());
                    return this;
                };
                _proto.clearInput = function clearInput() {
                    var shouldSetInputWidth = !this._isSelectOneElement;
                    this.input.clear(shouldSetInputWidth);
                    if (!this._isTextElement && this._canSearch) {
                        this._isSearching = false;
                        this._store.dispatch(choices_activateChoices(true));
                    }
                    return this;
                };
                _proto._render = function _render() {
                    if (this._store.isLoading()) return;
                    this._currentState = this._store.state;
                    var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
                    var shouldRenderChoices = this._isSelectElement;
                    var shouldRenderItems = this._currentState.items !== this._prevState.items;
                    if (!stateChanged) return;
                    if (shouldRenderChoices) this._renderChoices();
                    if (shouldRenderItems) this._renderItems();
                    this._prevState = this._currentState;
                };
                _proto._renderChoices = function _renderChoices() {
                    var _this12 = this;
                    var _this$_store = this._store, activeGroups = _this$_store.activeGroups, activeChoices = _this$_store.activeChoices;
                    var choiceListFragment = document.createDocumentFragment();
                    this.choiceList.clear();
                    if (this.config.resetScrollPosition) requestAnimationFrame(function() {
                        return _this12.choiceList.scrollToTop();
                    });
                     // If we have grouped options
                    if (activeGroups.length >= 1 && !this._isSearching) {
                        // If we have a placeholder choice along with groups
                        var activePlaceholders = activeChoices.filter(function(activeChoice) {
                            return activeChoice.placeholder === true && activeChoice.groupId === -1;
                        });
                        if (activePlaceholders.length >= 1) choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
                        choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
                    } else if (activeChoices.length >= 1) choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
                     // If we have choices to show
                    if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
                        var activeItems = this._store.activeItems;
                        var canAddItem = this._canAddItem(activeItems, this.input.value); // ...and we can select them
                        if (canAddItem.response) {
                            // ...append them and highlight the first choice
                            this.choiceList.append(choiceListFragment);
                            this._highlightChoice();
                        } else // ...otherwise show a notice
                        this.choiceList.append(this._getTemplate('notice', canAddItem.notice));
                    } else {
                        // Otherwise show a notice
                        var dropdownItem;
                        var notice;
                        if (this._isSearching) {
                            notice = typeof this.config.noResultsText === 'function' ? this.config.noResultsText() : this.config.noResultsText;
                            dropdownItem = this._getTemplate('notice', notice, 'no-results');
                        } else {
                            notice = typeof this.config.noChoicesText === 'function' ? this.config.noChoicesText() : this.config.noChoicesText;
                            dropdownItem = this._getTemplate('notice', notice, 'no-choices');
                        }
                        this.choiceList.append(dropdownItem);
                    }
                };
                _proto._renderItems = function _renderItems() {
                    var activeItems = this._store.activeItems || [];
                    this.itemList.clear(); // Create a fragment to store our list items
                    // (so we don't have to update the DOM for each item)
                    var itemListFragment = this._createItemsFragment(activeItems); // If we have items to add, append them
                    if (itemListFragment.childNodes) this.itemList.append(itemListFragment);
                };
                _proto._createGroupsFragment = function _createGroupsFragment(groups, choices, fragment) {
                    var _this13 = this;
                    if (fragment === void 0) fragment = document.createDocumentFragment();
                    var getGroupChoices = function getGroupChoices(group) {
                        return choices.filter(function(choice) {
                            if (_this13._isSelectOneElement) return choice.groupId === group.id;
                            return choice.groupId === group.id && (_this13.config.renderSelectedChoices === 'always' || !choice.selected);
                        });
                    }; // If sorting is enabled, filter groups
                    if (this.config.shouldSort) groups.sort(this.config.sorter);
                    groups.forEach(function(group) {
                        var groupChoices = getGroupChoices(group);
                        if (groupChoices.length >= 1) {
                            var dropdownGroup = _this13._getTemplate('choiceGroup', group);
                            fragment.appendChild(dropdownGroup);
                            _this13._createChoicesFragment(groupChoices, fragment, true);
                        }
                    });
                    return fragment;
                };
                _proto._createChoicesFragment = function _createChoicesFragment(choices, fragment, withinGroup) {
                    var _this14 = this;
                    if (fragment === void 0) fragment = document.createDocumentFragment();
                    if (withinGroup === void 0) withinGroup = false;
                    // Create a fragment to store our list items (so we don't have to update the DOM for each item)
                    var _this$config = this.config, renderSelectedChoices = _this$config.renderSelectedChoices, searchResultLimit = _this$config.searchResultLimit, renderChoiceLimit = _this$config.renderChoiceLimit;
                    var filter = this._isSearching ? sortByScore : this.config.sorter;
                    var appendChoice = function appendChoice(choice) {
                        var shouldRender = renderSelectedChoices === 'auto' ? _this14._isSelectOneElement || !choice.selected : true;
                        if (shouldRender) {
                            var dropdownItem = _this14._getTemplate('choice', choice, _this14.config.itemSelectText);
                            fragment.appendChild(dropdownItem);
                        }
                    };
                    var rendererableChoices = choices;
                    if (renderSelectedChoices === 'auto' && !this._isSelectOneElement) rendererableChoices = choices.filter(function(choice) {
                        return !choice.selected;
                    });
                     // Split array into placeholders and "normal" choices
                    var _rendererableChoices$ = rendererableChoices.reduce(function(acc, choice) {
                        if (choice.placeholder) acc.placeholderChoices.push(choice);
                        else acc.normalChoices.push(choice);
                        return acc;
                    }, {
                        placeholderChoices: [],
                        normalChoices: []
                    }), placeholderChoices = _rendererableChoices$.placeholderChoices, normalChoices = _rendererableChoices$.normalChoices; // If sorting is enabled or the user is searching, filter choices
                    if (this.config.shouldSort || this._isSearching) normalChoices.sort(filter);
                    var choiceLimit = rendererableChoices.length; // Prepend placeholeder
                    var sortedChoices = this._isSelectOneElement ? [].concat(placeholderChoices, normalChoices) : normalChoices;
                    if (this._isSearching) choiceLimit = searchResultLimit;
                    else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) choiceLimit = renderChoiceLimit;
                     // Add each choice to dropdown within range
                    for(var i = 0; i < choiceLimit; i += 1)if (sortedChoices[i]) appendChoice(sortedChoices[i]);
                    return fragment;
                };
                _proto._createItemsFragment = function _createItemsFragment(items, fragment) {
                    var _this15 = this;
                    if (fragment === void 0) fragment = document.createDocumentFragment();
                    // Create fragment to add elements to
                    var _this$config2 = this.config, shouldSortItems = _this$config2.shouldSortItems, sorter = _this$config2.sorter, removeItemButton = _this$config2.removeItemButton; // If sorting is enabled, filter items
                    if (shouldSortItems && !this._isSelectOneElement) items.sort(sorter);
                    if (this._isTextElement) // Update the value of the hidden input
                    this.passedElement.value = items;
                    else // Update the options of the hidden input
                    this.passedElement.options = items;
                    var addItemToFragment = function addItemToFragment(item) {
                        // Create new list element
                        var listItem = _this15._getTemplate('item', item, removeItemButton); // Append it to list
                        fragment.appendChild(listItem);
                    }; // Add each list item to list
                    items.forEach(addItemToFragment);
                    return fragment;
                };
                _proto._triggerChange = function _triggerChange(value) {
                    if (value === undefined || value === null) return;
                    this.passedElement.triggerEvent(EVENTS.change, {
                        value: value
                    });
                };
                _proto._selectPlaceholderChoice = function _selectPlaceholderChoice() {
                    var placeholderChoice = this._store.placeholderChoice;
                    if (placeholderChoice) {
                        this._addItem({
                            value: placeholderChoice.value,
                            label: placeholderChoice.label,
                            choiceId: placeholderChoice.id,
                            groupId: placeholderChoice.groupId,
                            placeholder: placeholderChoice.placeholder
                        });
                        this._triggerChange(placeholderChoice.value);
                    }
                };
                _proto._handleButtonAction = function _handleButtonAction(activeItems, element) {
                    if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) return;
                    var itemId = element.parentNode.getAttribute('data-id');
                    var itemToRemove = activeItems.find(function(item) {
                        return item.id === parseInt(itemId, 10);
                    }); // Remove item associated with button
                    this._removeItem(itemToRemove);
                    this._triggerChange(itemToRemove.value);
                    if (this._isSelectOneElement) this._selectPlaceholderChoice();
                };
                _proto._handleItemAction = function _handleItemAction(activeItems, element, hasShiftKey) {
                    var _this16 = this;
                    if (hasShiftKey === void 0) hasShiftKey = false;
                    if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) return;
                    var passedId = element.getAttribute('data-id'); // We only want to select one item with a click
                    // so we deselect any items that aren't the target
                    // unless shift is being pressed
                    activeItems.forEach(function(item) {
                        if (item.id === parseInt(passedId, 10) && !item.highlighted) _this16.highlightItem(item);
                        else if (!hasShiftKey && item.highlighted) _this16.unhighlightItem(item);
                    }); // Focus input as without focus, a user cannot do anything with a
                    // highlighted item
                    this.input.focus();
                };
                _proto._handleChoiceAction = function _handleChoiceAction(activeItems, element) {
                    if (!activeItems || !element) return;
                     // If we are clicking on an option
                    var id = element.dataset.id;
                    var choice = this._store.getChoiceById(id);
                    if (!choice) return;
                    var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : null;
                    var hasActiveDropdown = this.dropdown.isActive; // Update choice keyCode
                    choice.keyCode = passedKeyCode;
                    this.passedElement.triggerEvent(EVENTS.choice, {
                        choice: choice
                    });
                    if (!choice.selected && !choice.disabled) {
                        var canAddItem = this._canAddItem(activeItems, choice.value);
                        if (canAddItem.response) {
                            this._addItem({
                                value: choice.value,
                                label: choice.label,
                                choiceId: choice.id,
                                groupId: choice.groupId,
                                customProperties: choice.customProperties,
                                placeholder: choice.placeholder,
                                keyCode: choice.keyCode
                            });
                            this._triggerChange(choice.value);
                        }
                    }
                    this.clearInput(); // We want to close the dropdown if we are dealing with a single select box
                    if (hasActiveDropdown && this._isSelectOneElement) {
                        this.hideDropdown(true);
                        this.containerOuter.focus();
                    }
                };
                _proto._handleBackspace = function _handleBackspace(activeItems) {
                    if (!this.config.removeItems || !activeItems) return;
                    var lastItem = activeItems[activeItems.length - 1];
                    var hasHighlightedItems = activeItems.some(function(item) {
                        return item.highlighted;
                    }); // If editing the last item is allowed and there are not other selected items,
                    // we can edit the item value. Otherwise if we can remove items, remove all selected items
                    if (this.config.editItems && !hasHighlightedItems && lastItem) {
                        this.input.value = lastItem.value;
                        this.input.setWidth();
                        this._removeItem(lastItem);
                        this._triggerChange(lastItem.value);
                    } else {
                        if (!hasHighlightedItems) // Highlight last item if none already highlighted
                        this.highlightItem(lastItem, false);
                        this.removeHighlightedItems(true);
                    }
                };
                _proto._startLoading = function _startLoading() {
                    this._store.dispatch(setIsLoading(true));
                };
                _proto._stopLoading = function _stopLoading() {
                    this._store.dispatch(setIsLoading(false));
                };
                _proto._handleLoadingState = function _handleLoadingState(setLoading) {
                    if (setLoading === void 0) setLoading = true;
                    var placeholderItem = this.itemList.getChild("." + this.config.classNames.placeholder);
                    if (setLoading) {
                        this.disable();
                        this.containerOuter.addLoadingState();
                        if (this._isSelectOneElement) {
                            if (!placeholderItem) {
                                placeholderItem = this._getTemplate('placeholder', this.config.loadingText);
                                this.itemList.append(placeholderItem);
                            } else placeholderItem.innerHTML = this.config.loadingText;
                        } else this.input.placeholder = this.config.loadingText;
                    } else {
                        this.enable();
                        this.containerOuter.removeLoadingState();
                        if (this._isSelectOneElement) placeholderItem.innerHTML = this._placeholderValue || '';
                        else this.input.placeholder = this._placeholderValue || '';
                    }
                };
                _proto._handleSearch = function _handleSearch(value) {
                    if (!value || !this.input.isFocussed) return;
                    var choices = this._store.choices;
                    var _this$config3 = this.config, searchFloor = _this$config3.searchFloor, searchChoices = _this$config3.searchChoices;
                    var hasUnactiveChoices = choices.some(function(option) {
                        return !option.active;
                    }); // Check that we have a value to search and the input was an alphanumeric character
                    if (value && value.length >= searchFloor) {
                        var resultCount = searchChoices ? this._searchChoices(value) : 0; // Trigger search event
                        this.passedElement.triggerEvent(EVENTS.search, {
                            value: value,
                            resultCount: resultCount
                        });
                    } else if (hasUnactiveChoices) {
                        // Otherwise reset choices to active
                        this._isSearching = false;
                        this._store.dispatch(choices_activateChoices(true));
                    }
                };
                _proto._canAddItem = function _canAddItem(activeItems, value) {
                    var canAddItem = true;
                    var notice = typeof this.config.addItemText === 'function' ? this.config.addItemText(value) : this.config.addItemText;
                    if (!this._isSelectOneElement) {
                        var isDuplicateValue = existsInArray(activeItems, value);
                        if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                            // If there is a max entry limit and we have reached that limit
                            // don't update
                            canAddItem = false;
                            notice = typeof this.config.maxItemText === 'function' ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
                        }
                        if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                            canAddItem = false;
                            notice = typeof this.config.uniqueItemText === 'function' ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
                        }
                        if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === 'function' && !this.config.addItemFilter(value)) {
                            canAddItem = false;
                            notice = typeof this.config.customAddItemText === 'function' ? this.config.customAddItemText(value) : this.config.customAddItemText;
                        }
                    }
                    return {
                        response: canAddItem,
                        notice: notice
                    };
                };
                _proto._searchChoices = function _searchChoices(value) {
                    var newValue = typeof value === 'string' ? value.trim() : value;
                    var currentValue = typeof this._currentValue === 'string' ? this._currentValue.trim() : this._currentValue;
                    if (newValue.length < 1 && newValue === currentValue + " ") return 0;
                     // If new value matches the desired length and is not the same as the current value with a space
                    var haystack = this._store.searchableChoices;
                    var needle = newValue;
                    var keys = [].concat(this.config.searchFields);
                    var options = Object.assign(this.config.fuseOptions, {
                        keys: keys
                    });
                    var fuse = new fuse_default.a(haystack, options);
                    var results = fuse.search(needle);
                    this._currentValue = newValue;
                    this._highlightPosition = 0;
                    this._isSearching = true;
                    this._store.dispatch(choices_filterChoices(results));
                    return results.length;
                };
                _proto._addEventListeners = function _addEventListeners() {
                    var _document = document, documentElement = _document.documentElement; // capture events - can cancel event processing or propagation
                    documentElement.addEventListener('touchend', this._onTouchEnd, true);
                    this.containerOuter.element.addEventListener('keydown', this._onKeyDown, true);
                    this.containerOuter.element.addEventListener('mousedown', this._onMouseDown, true); // passive events - doesn't call `preventDefault` or `stopPropagation`
                    documentElement.addEventListener('click', this._onClick, {
                        passive: true
                    });
                    documentElement.addEventListener('touchmove', this._onTouchMove, {
                        passive: true
                    });
                    this.dropdown.element.addEventListener('mouseover', this._onMouseOver, {
                        passive: true
                    });
                    if (this._isSelectOneElement) {
                        this.containerOuter.element.addEventListener('focus', this._onFocus, {
                            passive: true
                        });
                        this.containerOuter.element.addEventListener('blur', this._onBlur, {
                            passive: true
                        });
                    }
                    this.input.element.addEventListener('keyup', this._onKeyUp, {
                        passive: true
                    });
                    this.input.element.addEventListener('focus', this._onFocus, {
                        passive: true
                    });
                    this.input.element.addEventListener('blur', this._onBlur, {
                        passive: true
                    });
                    if (this.input.element.form) this.input.element.form.addEventListener('reset', this._onFormReset, {
                        passive: true
                    });
                    this.input.addEventListeners();
                };
                _proto._removeEventListeners = function _removeEventListeners() {
                    var _document2 = document, documentElement = _document2.documentElement;
                    documentElement.removeEventListener('touchend', this._onTouchEnd, true);
                    this.containerOuter.element.removeEventListener('keydown', this._onKeyDown, true);
                    this.containerOuter.element.removeEventListener('mousedown', this._onMouseDown, true);
                    documentElement.removeEventListener('click', this._onClick);
                    documentElement.removeEventListener('touchmove', this._onTouchMove);
                    this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);
                    if (this._isSelectOneElement) {
                        this.containerOuter.element.removeEventListener('focus', this._onFocus);
                        this.containerOuter.element.removeEventListener('blur', this._onBlur);
                    }
                    this.input.element.removeEventListener('keyup', this._onKeyUp);
                    this.input.element.removeEventListener('focus', this._onFocus);
                    this.input.element.removeEventListener('blur', this._onBlur);
                    if (this.input.element.form) this.input.element.form.removeEventListener('reset', this._onFormReset);
                    this.input.removeEventListeners();
                };
                _proto._onKeyDown = function _onKeyDown(event) {
                    var _keyDownActions;
                    var target = event.target, keyCode = event.keyCode, ctrlKey = event.ctrlKey, metaKey = event.metaKey;
                    var activeItems = this._store.activeItems;
                    var hasFocusedInput = this.input.isFocussed;
                    var hasActiveDropdown = this.dropdown.isActive;
                    var hasItems = this.itemList.hasChildren();
                    var keyString = String.fromCharCode(keyCode);
                    var BACK_KEY = KEY_CODES.BACK_KEY, DELETE_KEY = KEY_CODES.DELETE_KEY, ENTER_KEY = KEY_CODES.ENTER_KEY, A_KEY = KEY_CODES.A_KEY, ESC_KEY = KEY_CODES.ESC_KEY, UP_KEY = KEY_CODES.UP_KEY, DOWN_KEY = KEY_CODES.DOWN_KEY, PAGE_UP_KEY = KEY_CODES.PAGE_UP_KEY, PAGE_DOWN_KEY = KEY_CODES.PAGE_DOWN_KEY;
                    var hasCtrlDownKeyPressed = ctrlKey || metaKey; // If a user is typing and the dropdown is not active
                    if (!this._isTextElement && /[a-zA-Z0-9-_ ]/.test(keyString)) this.showDropdown();
                     // Map keys to key actions
                    var keyDownActions = (_keyDownActions = {}, _keyDownActions[A_KEY] = this._onAKey, _keyDownActions[ENTER_KEY] = this._onEnterKey, _keyDownActions[ESC_KEY] = this._onEscapeKey, _keyDownActions[UP_KEY] = this._onDirectionKey, _keyDownActions[PAGE_UP_KEY] = this._onDirectionKey, _keyDownActions[DOWN_KEY] = this._onDirectionKey, _keyDownActions[PAGE_DOWN_KEY] = this._onDirectionKey, _keyDownActions[DELETE_KEY] = this._onDeleteKey, _keyDownActions[BACK_KEY] = this._onDeleteKey, _keyDownActions); // If keycode has a function, run it
                    if (keyDownActions[keyCode]) keyDownActions[keyCode]({
                        event: event,
                        target: target,
                        keyCode: keyCode,
                        metaKey: metaKey,
                        activeItems: activeItems,
                        hasFocusedInput: hasFocusedInput,
                        hasActiveDropdown: hasActiveDropdown,
                        hasItems: hasItems,
                        hasCtrlDownKeyPressed: hasCtrlDownKeyPressed
                    });
                };
                _proto._onKeyUp = function _onKeyUp(_ref2) {
                    var target = _ref2.target, keyCode = _ref2.keyCode;
                    var value = this.input.value;
                    var activeItems = this._store.activeItems;
                    var canAddItem = this._canAddItem(activeItems, value);
                    var backKey = KEY_CODES.BACK_KEY, deleteKey = KEY_CODES.DELETE_KEY; // We are typing into a text input and have a value, we want to show a dropdown
                    // notice. Otherwise hide the dropdown
                    if (this._isTextElement) {
                        var canShowDropdownNotice = canAddItem.notice && value;
                        if (canShowDropdownNotice) {
                            var dropdownItem = this._getTemplate('notice', canAddItem.notice);
                            this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                            this.showDropdown(true);
                        } else this.hideDropdown(true);
                    } else {
                        var userHasRemovedValue = (keyCode === backKey || keyCode === deleteKey) && !target.value;
                        var canReactivateChoices = !this._isTextElement && this._isSearching;
                        var canSearch = this._canSearch && canAddItem.response;
                        if (userHasRemovedValue && canReactivateChoices) {
                            this._isSearching = false;
                            this._store.dispatch(choices_activateChoices(true));
                        } else if (canSearch) this._handleSearch(this.input.value);
                    }
                    this._canSearch = this.config.searchEnabled;
                };
                _proto._onAKey = function _onAKey(_ref3) {
                    var hasItems = _ref3.hasItems, hasCtrlDownKeyPressed = _ref3.hasCtrlDownKeyPressed;
                    // If CTRL + A or CMD + A have been pressed and there are items to select
                    if (hasCtrlDownKeyPressed && hasItems) {
                        this._canSearch = false;
                        var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
                        if (shouldHightlightAll) this.highlightAll();
                    }
                };
                _proto._onEnterKey = function _onEnterKey(_ref4) {
                    var event = _ref4.event, target = _ref4.target, activeItems = _ref4.activeItems, hasActiveDropdown = _ref4.hasActiveDropdown;
                    var enterKey = KEY_CODES.ENTER_KEY;
                    var targetWasButton = target.hasAttribute('data-button');
                    if (this._isTextElement && target.value) {
                        var value = this.input.value;
                        var canAddItem = this._canAddItem(activeItems, value);
                        if (canAddItem.response) {
                            this.hideDropdown(true);
                            this._addItem({
                                value: value
                            });
                            this._triggerChange(value);
                            this.clearInput();
                        }
                    }
                    if (targetWasButton) {
                        this._handleButtonAction(activeItems, target);
                        event.preventDefault();
                    }
                    if (hasActiveDropdown) {
                        var highlightedChoice = this.dropdown.getChild("." + this.config.classNames.highlightedState);
                        if (highlightedChoice) {
                            // add enter keyCode value
                            if (activeItems[0]) activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
                            this._handleChoiceAction(activeItems, highlightedChoice);
                        }
                        event.preventDefault();
                    } else if (this._isSelectOneElement) {
                        this.showDropdown();
                        event.preventDefault();
                    }
                };
                _proto._onEscapeKey = function _onEscapeKey(_ref5) {
                    var hasActiveDropdown = _ref5.hasActiveDropdown;
                    if (hasActiveDropdown) {
                        this.hideDropdown(true);
                        this.containerOuter.focus();
                    }
                };
                _proto._onDirectionKey = function _onDirectionKey(_ref6) {
                    var event = _ref6.event, hasActiveDropdown = _ref6.hasActiveDropdown, keyCode = _ref6.keyCode, metaKey = _ref6.metaKey;
                    var downKey = KEY_CODES.DOWN_KEY, pageUpKey = KEY_CODES.PAGE_UP_KEY, pageDownKey = KEY_CODES.PAGE_DOWN_KEY; // If up or down key is pressed, traverse through options
                    if (hasActiveDropdown || this._isSelectOneElement) {
                        this.showDropdown();
                        this._canSearch = false;
                        var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
                        var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
                        var selectableChoiceIdentifier = '[data-choice-selectable]';
                        var nextEl;
                        if (skipKey) {
                            if (directionInt > 0) nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier + ":last-of-type");
                            else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                        } else {
                            var currentEl = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);
                            if (currentEl) nextEl = getAdjacentEl(currentEl, selectableChoiceIdentifier, directionInt);
                            else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                        }
                        if (nextEl) {
                            // We prevent default to stop the cursor moving
                            // when pressing the arrow
                            if (!isScrolledIntoView(nextEl, this.choiceList.element, directionInt)) this.choiceList.scrollToChildElement(nextEl, directionInt);
                            this._highlightChoice(nextEl);
                        } // Prevent default to maintain cursor position whilst
                        // traversing dropdown options
                        event.preventDefault();
                    }
                };
                _proto._onDeleteKey = function _onDeleteKey(_ref7) {
                    var event = _ref7.event, target = _ref7.target, hasFocusedInput = _ref7.hasFocusedInput, activeItems = _ref7.activeItems;
                    // If backspace or delete key is pressed and the input has no value
                    if (hasFocusedInput && !target.value && !this._isSelectOneElement) {
                        this._handleBackspace(activeItems);
                        event.preventDefault();
                    }
                };
                _proto._onTouchMove = function _onTouchMove() {
                    if (this._wasTap) this._wasTap = false;
                };
                _proto._onTouchEnd = function _onTouchEnd(event) {
                    var _ref8 = event || event.touches[0], target = _ref8.target;
                    var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
                    if (touchWasWithinContainer) {
                        var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
                        if (containerWasExactTarget) {
                            if (this._isTextElement) this.input.focus();
                            else if (this._isSelectMultipleElement) this.showDropdown();
                        } // Prevents focus event firing
                        event.stopPropagation();
                    }
                    this._wasTap = true;
                };
                _proto._onMouseDown = function _onMouseDown(event) {
                    var target = event.target;
                    if (!(target instanceof HTMLElement)) return;
                     // If we have our mouse down on the scrollbar and are on IE11...
                    if (IS_IE11 && this.choiceList.element.contains(target)) {
                        // check if click was on a scrollbar area
                        var firstChoice = /** @type {HTMLElement} */ this.choiceList.element.firstElementChild;
                        var isOnScrollbar = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
                        this._isScrollingOnIe = isOnScrollbar;
                    }
                    if (target === this.input.element) return;
                    var item = target.closest('[data-button],[data-item],[data-choice]');
                    if (item instanceof HTMLElement) {
                        var hasShiftKey = event.shiftKey;
                        var activeItems = this._store.activeItems;
                        var dataset = item.dataset;
                        if ('button' in dataset) this._handleButtonAction(activeItems, item);
                        else if ('item' in dataset) this._handleItemAction(activeItems, item, hasShiftKey);
                        else if ('choice' in dataset) this._handleChoiceAction(activeItems, item);
                    }
                    event.preventDefault();
                };
                _proto._onMouseOver = function _onMouseOver(_ref9) {
                    var target = _ref9.target;
                    if (target instanceof HTMLElement && 'choice' in target.dataset) this._highlightChoice(target);
                };
                _proto._onClick = function _onClick(_ref10) {
                    var target = _ref10.target;
                    var clickWasWithinContainer = this.containerOuter.element.contains(target);
                    if (clickWasWithinContainer) {
                        if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
                            if (this._isTextElement) {
                                if (document.activeElement !== this.input.element) this.input.focus();
                            } else {
                                this.showDropdown();
                                this.containerOuter.focus();
                            }
                        } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) this.hideDropdown();
                    } else {
                        var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
                        if (hasHighlightedItems) this.unhighlightAll();
                        this.containerOuter.removeFocusState();
                        this.hideDropdown(true);
                    }
                };
                _proto._onFocus = function _onFocus(_ref11) {
                    var _this17 = this, _focusActions;
                    var target = _ref11.target;
                    var focusWasWithinContainer = this.containerOuter.element.contains(target);
                    if (!focusWasWithinContainer) return;
                    var focusActions = (_focusActions = {}, _focusActions[TEXT_TYPE] = function() {
                        if (target === _this17.input.element) _this17.containerOuter.addFocusState();
                    }, _focusActions[SELECT_ONE_TYPE] = function() {
                        _this17.containerOuter.addFocusState();
                        if (target === _this17.input.element) _this17.showDropdown(true);
                    }, _focusActions[SELECT_MULTIPLE_TYPE] = function() {
                        if (target === _this17.input.element) {
                            _this17.showDropdown(true); // If element is a select box, the focused element is the container and the dropdown
                            // isn't already open, focus and show dropdown
                            _this17.containerOuter.addFocusState();
                        }
                    }, _focusActions);
                    focusActions[this.passedElement.element.type]();
                };
                _proto._onBlur = function _onBlur(_ref12) {
                    var _this18 = this;
                    var target = _ref12.target;
                    var blurWasWithinContainer = this.containerOuter.element.contains(target);
                    if (blurWasWithinContainer && !this._isScrollingOnIe) {
                        var _blurActions;
                        var activeItems = this._store.activeItems;
                        var hasHighlightedItems = activeItems.some(function(item) {
                            return item.highlighted;
                        });
                        var blurActions = (_blurActions = {}, _blurActions[TEXT_TYPE] = function() {
                            if (target === _this18.input.element) {
                                _this18.containerOuter.removeFocusState();
                                if (hasHighlightedItems) _this18.unhighlightAll();
                                _this18.hideDropdown(true);
                            }
                        }, _blurActions[SELECT_ONE_TYPE] = function() {
                            _this18.containerOuter.removeFocusState();
                            if (target === _this18.input.element || target === _this18.containerOuter.element && !_this18._canSearch) _this18.hideDropdown(true);
                        }, _blurActions[SELECT_MULTIPLE_TYPE] = function() {
                            if (target === _this18.input.element) {
                                _this18.containerOuter.removeFocusState();
                                _this18.hideDropdown(true);
                                if (hasHighlightedItems) _this18.unhighlightAll();
                            }
                        }, _blurActions);
                        blurActions[this.passedElement.element.type]();
                    } else {
                        // On IE11, clicking the scollbar blurs our input and thus
                        // closes the dropdown. To stop this, we refocus our input
                        // if we know we are on IE *and* are scrolling.
                        this._isScrollingOnIe = false;
                        this.input.element.focus();
                    }
                };
                _proto._onFormReset = function _onFormReset() {
                    this._store.dispatch(resetTo(this._initialState));
                };
                _proto._highlightChoice = function _highlightChoice(el) {
                    var _this19 = this;
                    if (el === void 0) el = null;
                    var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));
                    if (!choices.length) return;
                    var passedEl = el;
                    var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState)); // Remove any highlighted choices
                    highlightedChoices.forEach(function(choice) {
                        choice.classList.remove(_this19.config.classNames.highlightedState);
                        choice.setAttribute('aria-selected', 'false');
                    });
                    if (passedEl) this._highlightPosition = choices.indexOf(passedEl);
                    else {
                        // Highlight choice based on last known highlight location
                        if (choices.length > this._highlightPosition) // If we have an option to highlight
                        passedEl = choices[this._highlightPosition];
                        else // Otherwise highlight the option before
                        passedEl = choices[choices.length - 1];
                        if (!passedEl) passedEl = choices[0];
                    }
                    passedEl.classList.add(this.config.classNames.highlightedState);
                    passedEl.setAttribute('aria-selected', 'true');
                    this.passedElement.triggerEvent(EVENTS.highlightChoice, {
                        el: passedEl
                    });
                    if (this.dropdown.isActive) {
                        // IE11 ignores aria-label and blocks virtual keyboard
                        // if aria-activedescendant is set without a dropdown
                        this.input.setActiveDescendant(passedEl.id);
                        this.containerOuter.setActiveDescendant(passedEl.id);
                    }
                };
                _proto._addItem = function _addItem(_ref13) {
                    var value = _ref13.value, _ref13$label = _ref13.label, label = _ref13$label === void 0 ? null : _ref13$label, _ref13$choiceId = _ref13.choiceId, choiceId = _ref13$choiceId === void 0 ? -1 : _ref13$choiceId, _ref13$groupId = _ref13.groupId, groupId = _ref13$groupId === void 0 ? -1 : _ref13$groupId, _ref13$customProperti = _ref13.customProperties, customProperties = _ref13$customProperti === void 0 ? null : _ref13$customProperti, _ref13$placeholder = _ref13.placeholder, placeholder = _ref13$placeholder === void 0 ? false : _ref13$placeholder, _ref13$keyCode = _ref13.keyCode, keyCode = _ref13$keyCode === void 0 ? null : _ref13$keyCode;
                    var passedValue = typeof value === 'string' ? value.trim() : value;
                    var passedKeyCode = keyCode;
                    var passedCustomProperties = customProperties;
                    var items = this._store.items;
                    var passedLabel = label || passedValue;
                    var passedOptionId = choiceId || -1;
                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                    var id = items ? items.length + 1 : 1; // If a prepended value has been passed, prepend it
                    if (this.config.prependValue) passedValue = this.config.prependValue + passedValue.toString();
                     // If an appended value has been passed, append it
                    if (this.config.appendValue) passedValue += this.config.appendValue.toString();
                    this._store.dispatch(items_addItem({
                        value: passedValue,
                        label: passedLabel,
                        id: id,
                        choiceId: passedOptionId,
                        groupId: groupId,
                        customProperties: customProperties,
                        placeholder: placeholder,
                        keyCode: passedKeyCode
                    }));
                    if (this._isSelectOneElement) this.removeActiveItems(id);
                     // Trigger change event
                    this.passedElement.triggerEvent(EVENTS.addItem, {
                        id: id,
                        value: passedValue,
                        label: passedLabel,
                        customProperties: passedCustomProperties,
                        groupValue: group && group.value ? group.value : undefined,
                        keyCode: passedKeyCode
                    });
                    return this;
                };
                _proto._removeItem = function _removeItem(item) {
                    if (!item || !isType('Object', item)) return this;
                    var id = item.id, value = item.value, label = item.label, choiceId = item.choiceId, groupId = item.groupId;
                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                    this._store.dispatch(items_removeItem(id, choiceId));
                    if (group && group.value) this.passedElement.triggerEvent(EVENTS.removeItem, {
                        id: id,
                        value: value,
                        label: label,
                        groupValue: group.value
                    });
                    else this.passedElement.triggerEvent(EVENTS.removeItem, {
                        id: id,
                        value: value,
                        label: label
                    });
                    return this;
                };
                _proto._addChoice = function _addChoice(_ref14) {
                    var value = _ref14.value, _ref14$label = _ref14.label, label = _ref14$label === void 0 ? null : _ref14$label, _ref14$isSelected = _ref14.isSelected, isSelected = _ref14$isSelected === void 0 ? false : _ref14$isSelected, _ref14$isDisabled = _ref14.isDisabled, isDisabled = _ref14$isDisabled === void 0 ? false : _ref14$isDisabled, _ref14$groupId = _ref14.groupId, groupId = _ref14$groupId === void 0 ? -1 : _ref14$groupId, _ref14$customProperti = _ref14.customProperties, customProperties = _ref14$customProperti === void 0 ? null : _ref14$customProperti, _ref14$placeholder = _ref14.placeholder, placeholder = _ref14$placeholder === void 0 ? false : _ref14$placeholder, _ref14$keyCode = _ref14.keyCode, keyCode = _ref14$keyCode === void 0 ? null : _ref14$keyCode;
                    if (typeof value === 'undefined' || value === null) return;
                     // Generate unique id
                    var choices = this._store.choices;
                    var choiceLabel = label || value;
                    var choiceId = choices ? choices.length + 1 : 1;
                    var choiceElementId = this._baseId + "-" + this._idNames.itemChoice + "-" + choiceId;
                    this._store.dispatch(choices_addChoice({
                        id: choiceId,
                        groupId: groupId,
                        elementId: choiceElementId,
                        value: value,
                        label: choiceLabel,
                        disabled: isDisabled,
                        customProperties: customProperties,
                        placeholder: placeholder,
                        keyCode: keyCode
                    }));
                    if (isSelected) this._addItem({
                        value: value,
                        label: choiceLabel,
                        choiceId: choiceId,
                        customProperties: customProperties,
                        placeholder: placeholder,
                        keyCode: keyCode
                    });
                };
                _proto._addGroup = function _addGroup(_ref15) {
                    var _this20 = this;
                    var group = _ref15.group, id = _ref15.id, _ref15$valueKey = _ref15.valueKey, valueKey = _ref15$valueKey === void 0 ? 'value' : _ref15$valueKey, _ref15$labelKey = _ref15.labelKey, labelKey = _ref15$labelKey === void 0 ? 'label' : _ref15$labelKey;
                    var groupChoices = isType('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
                    var groupId = id || Math.floor(new Date().valueOf() * Math.random());
                    var isDisabled = group.disabled ? group.disabled : false;
                    if (groupChoices) {
                        this._store.dispatch(groups_addGroup({
                            value: group.label,
                            id: groupId,
                            active: true,
                            disabled: isDisabled
                        }));
                        var addGroupChoices = function addGroupChoices(choice) {
                            var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
                            _this20._addChoice({
                                value: choice[valueKey],
                                label: isType('Object', choice) ? choice[labelKey] : choice.innerHTML,
                                isSelected: choice.selected,
                                isDisabled: isOptDisabled,
                                groupId: groupId,
                                customProperties: choice.customProperties,
                                placeholder: choice.placeholder
                            });
                        };
                        groupChoices.forEach(addGroupChoices);
                    } else this._store.dispatch(groups_addGroup({
                        value: group.label,
                        id: group.id,
                        active: false,
                        disabled: group.disabled
                    }));
                };
                _proto._getTemplate = function _getTemplate(template) {
                    var _this$_templates$temp;
                    if (!template) return null;
                    var classNames = this.config.classNames;
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
                    return (_this$_templates$temp = this._templates[template]).call.apply(_this$_templates$temp, [
                        this,
                        classNames
                    ].concat(args));
                };
                _proto._createTemplates = function _createTemplates() {
                    var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
                    var userTemplates = {};
                    if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === 'function') userTemplates = callbackOnCreateTemplates.call(this, strToEl);
                    this._templates = cjs_default()(TEMPLATES, userTemplates);
                };
                _proto._createElements = function _createElements() {
                    this.containerOuter = new container_Container({
                        element: this._getTemplate('containerOuter', this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
                        classNames: this.config.classNames,
                        type: this.passedElement.element.type,
                        position: this.config.position
                    });
                    this.containerInner = new container_Container({
                        element: this._getTemplate('containerInner'),
                        classNames: this.config.classNames,
                        type: this.passedElement.element.type,
                        position: this.config.position
                    });
                    this.input = new input_Input({
                        element: this._getTemplate('input', this._placeholderValue),
                        classNames: this.config.classNames,
                        type: this.passedElement.element.type,
                        preventPaste: !this.config.paste
                    });
                    this.choiceList = new list_List({
                        element: this._getTemplate('choiceList', this._isSelectOneElement)
                    });
                    this.itemList = new list_List({
                        element: this._getTemplate('itemList', this._isSelectOneElement)
                    });
                    this.dropdown = new Dropdown({
                        element: this._getTemplate('dropdown'),
                        classNames: this.config.classNames,
                        type: this.passedElement.element.type
                    });
                };
                _proto._createStructure = function _createStructure() {
                    // Hide original element
                    this.passedElement.conceal(); // Wrap input in container preserving DOM ordering
                    this.containerInner.wrap(this.passedElement.element); // Wrapper inner container with outer container
                    this.containerOuter.wrap(this.containerInner.element);
                    if (this._isSelectOneElement) this.input.placeholder = this.config.searchPlaceholderValue || '';
                    else if (this._placeholderValue) {
                        this.input.placeholder = this._placeholderValue;
                        this.input.setWidth();
                    }
                    this.containerOuter.element.appendChild(this.containerInner.element);
                    this.containerOuter.element.appendChild(this.dropdown.element);
                    this.containerInner.element.appendChild(this.itemList.element);
                    if (!this._isTextElement) this.dropdown.element.appendChild(this.choiceList.element);
                    if (!this._isSelectOneElement) this.containerInner.element.appendChild(this.input.element);
                    else if (this.config.searchEnabled) this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
                    if (this._isSelectElement) {
                        this._highlightPosition = 0;
                        this._isSearching = false;
                        this._startLoading();
                        if (this._presetGroups.length) this._addPredefinedGroups(this._presetGroups);
                        else this._addPredefinedChoices(this._presetChoices);
                        this._stopLoading();
                    }
                    if (this._isTextElement) this._addPredefinedItems(this._presetItems);
                };
                _proto._addPredefinedGroups = function _addPredefinedGroups(groups) {
                    var _this21 = this;
                    // If we have a placeholder option
                    var placeholderChoice = this.passedElement.placeholderOption;
                    if (placeholderChoice && placeholderChoice.parentNode.tagName === 'SELECT') this._addChoice({
                        value: placeholderChoice.value,
                        label: placeholderChoice.innerHTML,
                        isSelected: placeholderChoice.selected,
                        isDisabled: placeholderChoice.disabled,
                        placeholder: true
                    });
                    groups.forEach(function(group) {
                        return _this21._addGroup({
                            group: group,
                            id: group.id || null
                        });
                    });
                };
                _proto._addPredefinedChoices = function _addPredefinedChoices(choices) {
                    var _this22 = this;
                    // If sorting is enabled or the user is searching, filter choices
                    if (this.config.shouldSort) choices.sort(this.config.sorter);
                    var hasSelectedChoice = choices.some(function(choice) {
                        return choice.selected;
                    });
                    var firstEnabledChoiceIndex = choices.findIndex(function(choice) {
                        return choice.disabled === undefined || !choice.disabled;
                    });
                    choices.forEach(function(choice, index) {
                        var value = choice.value, label = choice.label, customProperties = choice.customProperties, placeholder = choice.placeholder;
                        if (_this22._isSelectElement) {
                            // If the choice is actually a group
                            if (choice.choices) _this22._addGroup({
                                group: choice,
                                id: choice.id || null
                            });
                            else {
                                /**
           * If there is a selected choice already or the choice is not the first in
           * the array, add each choice normally.
           *
           * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
           */ var shouldPreselect = _this22._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                                var isSelected = shouldPreselect ? true : choice.selected;
                                var isDisabled = choice.disabled;
                                _this22._addChoice({
                                    value: value,
                                    label: label,
                                    isSelected: isSelected,
                                    isDisabled: isDisabled,
                                    customProperties: customProperties,
                                    placeholder: placeholder
                                });
                            }
                        } else _this22._addChoice({
                            value: value,
                            label: label,
                            isSelected: choice.selected,
                            isDisabled: choice.disabled,
                            customProperties: customProperties,
                            placeholder: placeholder
                        });
                    });
                };
                _proto._addPredefinedItems = function _addPredefinedItems(items) {
                    var _this23 = this;
                    items.forEach(function(item) {
                        if (typeof item === 'object' && item.value) _this23._addItem({
                            value: item.value,
                            label: item.label,
                            choiceId: item.id,
                            customProperties: item.customProperties,
                            placeholder: item.placeholder
                        });
                        if (typeof item === 'string') _this23._addItem({
                            value: item
                        });
                    });
                };
                _proto._setChoiceOrItem = function _setChoiceOrItem(item) {
                    var _this24 = this;
                    var itemType = getType(item).toLowerCase();
                    var handleType = {
                        object: function object() {
                            if (!item.value) return;
                             // If we are dealing with a select input, we need to create an option first
                            // that is then selected. For text inputs we can just add items normally.
                            if (!_this24._isTextElement) _this24._addChoice({
                                value: item.value,
                                label: item.label,
                                isSelected: true,
                                isDisabled: false,
                                customProperties: item.customProperties,
                                placeholder: item.placeholder
                            });
                            else _this24._addItem({
                                value: item.value,
                                label: item.label,
                                choiceId: item.id,
                                customProperties: item.customProperties,
                                placeholder: item.placeholder
                            });
                        },
                        string: function string() {
                            if (!_this24._isTextElement) _this24._addChoice({
                                value: item,
                                label: item,
                                isSelected: true,
                                isDisabled: false
                            });
                            else _this24._addItem({
                                value: item
                            });
                        }
                    };
                    handleType[itemType]();
                };
                _proto._findAndSelectChoiceByValue = function _findAndSelectChoiceByValue(val) {
                    var _this25 = this;
                    var choices = this._store.choices; // Check 'value' property exists and the choice isn't already selected
                    var foundChoice = choices.find(function(choice) {
                        return _this25.config.valueComparer(choice.value, val);
                    });
                    if (foundChoice && !foundChoice.selected) this._addItem({
                        value: foundChoice.value,
                        label: foundChoice.label,
                        choiceId: foundChoice.id,
                        groupId: foundChoice.groupId,
                        customProperties: foundChoice.customProperties,
                        placeholder: foundChoice.placeholder,
                        keyCode: foundChoice.keyCode
                    });
                };
                _proto._generatePlaceholderValue = function _generatePlaceholderValue() {
                    if (this._isSelectElement) {
                        var placeholderOption = this.passedElement.placeholderOption;
                        return placeholderOption ? placeholderOption.text : false;
                    }
                    var _this$config4 = this.config, placeholder = _this$config4.placeholder, placeholderValue = _this$config4.placeholderValue;
                    var dataset = this.passedElement.element.dataset;
                    if (placeholder) {
                        if (placeholderValue) return placeholderValue;
                        if (dataset.placeholder) return dataset.placeholder;
                    }
                    return false;
                };
                return Choices;
            }();
            /* harmony default export */ var scripts_choices = __webpack_exports__["default"] = choices_Choices;
        /***/ }
    ])["default"];
});

},{}],"i38sz":[function() {},{}],"7kOuK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ingredientList", ()=>ingredientList);
var _choicesJs = require("choices.js");
var _choicesJsDefault = parcelHelpers.interopDefault(_choicesJs);
var _choicesMinCss = require("choices.js/public/assets/styles/choices.min.css");
var _sharedStateJs = require("./sharedState.js");
var _updateRecipesJs = require("./updateRecipes.js");
let choicesInstance;
let ingredientMap = {};
function ingredientList(ingredientList) {
    const ingredientSelect = document.getElementById("search-by-ingredients");
    ingredientSelect.innerHTML = "";
    ingredientList.forEach((element)=>{
        ingredientMap[element.name] = element._id;
        const option = document.createElement("option");
        option.textContent = element.name;
        option.value = element._id;
        option.dataset.name = element.name;
        option.value = element.name;
        ingredientSelect.appendChild(option);
    });
    ingredientSelect.addEventListener("change", (e)=>{
        const name = e.target.value;
        const id = ingredientMap[name];
        (0, _sharedStateJs.setSelectedIngredient)(id);
        (0, _updateRecipesJs.updateRecipes)();
    });
    if (choicesInstance) choicesInstance.destroy();
    // Initialize Choices
    choicesInstance = new (0, _choicesJsDefault.default)(ingredientSelect, {
        removeItemButton: false,
        placeholderValue: "Select",
        searchPlaceholderValue: "Type to search",
        searchEnabled: true,
        shouldSort: false,
        duplicateItemsAllowed: false
    });
}

},{"choices.js":"135xW","choices.js/public/assets/styles/choices.min.css":"i38sz","./sharedState.js":"4qtQs","./updateRecipes.js":"823Qz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i38sz":[function() {},{}],"hkcHH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filterByTime", ()=>filterByTime);
var _lodashDebounce = require("lodash.debounce");
var _lodashDebounceDefault = parcelHelpers.interopDefault(_lodashDebounce);
var _updateRecipes = require("./updateRecipes");
var _choicesJs = require("choices.js");
var _choicesJsDefault = parcelHelpers.interopDefault(_choicesJs);
var _choicesMinCss = require("choices.js/public/assets/styles/choices.min.css");
var _sharedState = require("./sharedState");
let choicesInstance;
const searchInput = document.getElementById("search-recipes");
const searchByTime = document.getElementById("search-by-time");
searchByTime.addEventListener("change", (e)=>{
    (0, _sharedState.setSelectedTime)(e.target.value);
    (0, _updateRecipes.updateRecipes)();
});
function filterByTime() {
    if (searchInput) searchInput.addEventListener("input", (0, _lodashDebounceDefault.default)((0, _updateRecipes.updateRecipes), 300));
    if (searchByTime) searchByTime.addEventListener("change", (0, _updateRecipes.updateRecipes));
    if (choicesInstance) choicesInstance.destroy();
    // Initialize Choices
    choicesInstance = new (0, _choicesJsDefault.default)(searchByTime, {
        removeItemButton: false,
        placeholderValue: "Select",
        searchPlaceholderValue: "Type to search",
        searchEnabled: true,
        shouldSort: false,
        duplicateItemsAllowed: false
    });
}

},{"lodash.debounce":"irvaP","./updateRecipes":"823Qz","choices.js":"135xW","choices.js/public/assets/styles/choices.min.css":"i38sz","./sharedState":"4qtQs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"irvaP":[function(require,module,exports,__globalThis) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var global = arguments[3];
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) return trailingEdge(time);
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) return invokeFunc(time);
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) clearTimeout(timerId);
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) return leadingEdge(lastCallTime);
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) timerId = setTimeout(timerExpired, wait);
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') return value;
    if (isSymbol(value)) return NAN;
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') return value === 0 ? value : +value;
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = debounce;

},{}],"i38sz":[function() {},{}],"6K24U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "orderNowModal", ()=>orderNowModal);
var _toastifyJs = require("toastify-js");
var _toastifyJsDefault = parcelHelpers.interopDefault(_toastifyJs);
const orderNowModal = ()=>{
    const modal = document.getElementById("order-now-modal");
    const openModal = document.getElementById("open-order-now-modal");
    const closeModal = document.getElementById("close-order-now-modal");
    const modalContent = document.querySelector(".order-now-content");
    const form = document.getElementById("order-now-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        modalContent.classList.add("hide");
        (0, _toastifyJsDefault.default)({
            text: "Order submitted successfully!",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)"
            }
        }).showToast();
        setTimeout(()=>{
            modal.style.display = "none";
            modalContent.classList.remove("hide");
            document.body.style.overflow = "auto";
        }, 300);
    });
    openModal.addEventListener("click", ()=>{
        modalContent.classList.remove("hide");
        modalContent.classList.add("show");
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    });
    closeModal.addEventListener("click", ()=>{
        modalContent.classList.remove("show");
        modalContent.classList.add("hide");
        setTimeout(()=>{
            modal.style.display = "none";
            modalContent.classList.remove("hide");
            document.body.style.overflow = "auto";
        }, 300);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","toastify-js":"33QEN"}]},["5j6Kf","a0t4e"], "a0t4e", "parcelRequire78be", {})

//# sourceMappingURL=Tasty-Treats.31b563d9.js.map
