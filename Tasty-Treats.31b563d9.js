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
var _categoriesDisplay = require("./js/categoriesDisplay");
var _ingredientsDispaly = require("./js/ingredientsDispaly");
var _initFilters = require("./js/initFilters");
var _masterclassDisplay = require("./js/masterclassDisplay");
var _orderNowModal = require("./js/orderNowModal");
var _popularRecipesDisplay = require("./js/popularRecipesDisplay");
var _regionsDisplay = require("./js/regionsDisplay");
var _searchRecipes = require("./js/searchRecipes");
var _sidebar = require("./js/sidebar");
var _theme = require("./js/theme");
document.addEventListener("DOMContentLoaded", function() {
    try {
        (0, _masterclassDisplay.masterClassDisplayInit)();
        (0, _categoriesDisplay.categoriesListDisplay)();
        (0, _popularRecipesDisplay.displayPopularRecipes)();
        (0, _ingredientsDispaly.ingredientListInit)();
        (0, _regionsDisplay.regionListInit)();
        (0, _theme.theme)();
        (0, _sidebar.sidebar)();
        (0, _orderNowModal.orderNowModal)();
        (0, _initFilters.initFilters)();
        (0, _searchRecipes.updateRecipes)();
    } catch (error) {
        console.error("Error in script:", error);
    }
});

},{"./js/categoriesDisplay":"aP1p0","./js/ingredientsDispaly":"hwZYG","./js/initFilters":"6NMr9","./js/masterclassDisplay":"bpJZ7","./js/orderNowModal":"55TPO","./js/popularRecipesDisplay":"amd2h","./js/regionsDisplay":"91Jqm","./js/searchRecipes":"eMBQc","./js/sidebar":"jWbWy","./js/theme":"6DWc8"}],"aP1p0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getActiveCategory", ()=>getActiveCategory);
parcelHelpers.export(exports, "categoriesListDisplay", ()=>categoriesListDisplay);
var _fetchData = require("./fetchData");
var _searchRecipes = require("./searchRecipes");
let activeCategory = "";
function getActiveCategory() {
    return activeCategory;
}
function categoriesList(categoriesData) {
    const categoriesListEl = document.getElementById("categories-list");
    categoriesListEl.innerHTML = "";
    categoriesData.forEach((element)=>{
        const listItem = document.createElement("div");
        listItem.classList.add("categories-item");
        const categoryBtn = document.createElement("button");
        categoryBtn.classList.add("category-btn");
        categoryBtn.textContent = element.name;
        categoryBtn.addEventListener("click", ()=>{
            activeCategory = element.name;
            document.querySelectorAll(".category-btn").forEach((btn)=>btn.classList.remove("active"));
            categoryBtn.classList.add("active");
            (0, _searchRecipes.updateRecipes)();
        });
        listItem.appendChild(categoryBtn);
        categoriesListEl.appendChild(listItem);
    });
}
function categoriesListDisplay() {
    (0, _fetchData.fetchCategories)().then((data)=>{
        console.log("Parsed JSON data:", data);
        categoriesList(data);
    }).catch((error)=>{
        console.error("Error fetching categories:", error);
    });
    const allBtn = document.getElementById("all-categories-btn");
    if (allBtn) allBtn.addEventListener("click", ()=>{
        activeCategory = "";
        document.querySelectorAll(".category-btn").forEach((btn)=>btn.classList.remove("active"));
        allBtn.classList.add("active");
        (0, _searchRecipes.updateRecipes)();
    });
}

},{"./fetchData":"cte0F","./searchRecipes":"eMBQc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cte0F":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchCategories", ()=>fetchCategories);
parcelHelpers.export(exports, "fetchIngredientsList", ()=>fetchIngredientsList);
parcelHelpers.export(exports, "fetchMasterclasses", ()=>fetchMasterclasses);
parcelHelpers.export(exports, "fetchPopularRecipes", ()=>fetchPopularRecipes);
parcelHelpers.export(exports, "fetchRecipes", ()=>fetchRecipes);
parcelHelpers.export(exports, "fetchRegionsList", ()=>fetchRegionsList);
var _categoriesListJson = require("../data/categoriesList.json");
var _categoriesListJsonDefault = parcelHelpers.interopDefault(_categoriesListJson);
var _ingredientsListJson = require("../data/ingredientsList.json");
var _ingredientsListJsonDefault = parcelHelpers.interopDefault(_ingredientsListJson);
var _masterclassesJson = require("../data/masterclasses.json");
var _masterclassesJsonDefault = parcelHelpers.interopDefault(_masterclassesJson);
var _popularRecipesJson = require("../data/popularRecipes.json");
var _popularRecipesJsonDefault = parcelHelpers.interopDefault(_popularRecipesJson);
var _recipesJson = require("../data/recipes.json");
var _recipesJsonDefault = parcelHelpers.interopDefault(_recipesJson);
var _regionsListJson = require("../data/regionsList.json");
var _regionsListJsonDefault = parcelHelpers.interopDefault(_regionsListJson);
async function fetchCategories() {
    try {
        return 0, _categoriesListJsonDefault.default;
    } catch (error) {
        console.error("Error fetching categories", error);
    }
}
async function fetchIngredientsList() {
    try {
        return 0, _ingredientsListJsonDefault.default;
    } catch (error) {
        console.error("Error fetching ingredients list", error);
    }
}
async function fetchMasterclasses() {
    try {
        return 0, _masterclassesJsonDefault.default;
    } catch (error) {
        console.error("Error loading masterclasses:", error);
        throw error;
    }
}
async function fetchPopularRecipes() {
    try {
        return 0, _popularRecipesJsonDefault.default;
    } catch (error) {
        console.error("Error fetching pupular recipes", error);
    }
}
async function fetchRecipes() {
    try {
        return (0, _recipesJsonDefault.default).results;
    } catch (error) {
        console.error("Error fetching recipes list", error);
        return [];
    }
}
async function fetchRegionsList() {
    try {
        console.log("Parsed JSON data", (0, _regionsListJsonDefault.default));
        return 0, _regionsListJsonDefault.default;
    } catch (error) {
        console.error("Error fetching recipes list", error);
    }
}

},{"../data/categoriesList.json":"1Ta8Q","../data/ingredientsList.json":"ddUkb","../data/masterclasses.json":"eiMEy","../data/popularRecipes.json":"aA0ZA","../data/recipes.json":"jJMLb","../data/regionsList.json":"hZBA8","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1Ta8Q":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse("[{\"_id\":\"6462a6cd4c3d0ddd28897f8e\",\"name\":\"Beef\"},{\"_id\":\"6462a6cd4c3d0ddd28897f95\",\"name\":\"Breakfast\"},{\"_id\":\"6462a6cd4c3d0ddd28897f8d\",\"name\":\"Chicken\"},{\"_id\":\"6462a6cd4c3d0ddd28897f8f\",\"name\":\"Dessert\"},{\"_id\":\"6462a6cd4c3d0ddd28897f97\",\"name\":\"Goat\"},{\"_id\":\"6462a6cd4c3d0ddd28897f8b\",\"name\":\"Lamb\"},{\"_id\":\"6462a6cd4c3d0ddd28897f93\",\"name\":\"Miscellaneous\"},{\"_id\":\"6462a6cd4c3d0ddd28897f94\",\"name\":\"Pasta\"},{\"_id\":\"6462a6cd4c3d0ddd28897f91\",\"name\":\"Pork\"},{\"_id\":\"6462a6cd4c3d0ddd28897f8a\",\"name\":\"Seafood\"},{\"_id\":\"6462a6cd4c3d0ddd28897f96\",\"name\":\"Side\"},{\"_id\":\"6462a6cd4c3d0ddd28897f98\",\"name\":\"Soup\"},{\"_id\":\"6462a6cd4c3d0ddd28897f8c\",\"name\":\"Starter\"},{\"_id\":\"6462a6cd4c3d0ddd28897f90\",\"name\":\"Vegan\"},{\"_id\":\"6462a6cd4c3d0ddd28897f92\",\"name\":\"Vegetarian\"}]");

},{}],"ddUkb":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('[{"_id":"640c2dd963a319ea671e37aa","name":"Squid","desc":"A type of cephalopod with a soft, cylindrical body and long tentacles, often used in seafood dishes such as calamari or grilled squid.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37aa.png"},{"_id":"640c2dd963a319ea671e37f5","name":"Cabbage","desc":"A leafy green or purple vegetable that is often used in salads, coleslaw, and stir-fry dishes, and is also commonly fermented into sauerkraut.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f5.png"},{"_id":"640c2dd963a319ea671e3665","name":"Baking Powder","desc":"Baking powder is a dry chemical leavening agent, a mixture of a carbonate or bicarbonate and a weak acid. The base and acid are prevented from reacting prematurely by the inclusion of a buffer such as cornstarch. Baking powder is used to increase the volume and lighten the texture of baked goods. It works by releasing carbon dioxide gas into a batter or dough through an acid-base reaction, causing bubbles in the wet mixture to expand and thus leavening the mixture. The first single-acting baking powder was developed by Birmingham based food manufacturer Alfred Bird in England in 1843. The first double-acting baking powder was developed by Eben Norton Horsford in America in the 1860s.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3665.png"},{"_id":"640c2dd963a319ea671e3804","name":"Smoked Haddock","desc":"Haddock that has been smoked over wood chips, giving it a distinctive smoky flavor","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3804.png"},{"_id":"640c2dd963a319ea671e382c","name":"Pears","desc":"A sweet and juicy fruit with a soft, grainy texture and thin skin.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e382c.png"},{"_id":"640c2dd963a319ea671e3770","name":"Spring Onions","desc":"Also known as scallions or green onions, these are young onions that have a mild flavor and are commonly used as a garnish or ingredient in salads, soups, stir-fries, and other dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3770.png"},{"_id":"640c2dd963a319ea671e36e9","name":"Ginger Cordial","desc":"A sweet and spicy syrup made from ginger often used as a mixer in cocktails or diluted with water to make a non-alcoholic drink.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36e9.png"},{"_id":"640c2dd963a319ea671e3861","name":"Almond Extract","desc":"The almond (Prunus dulcis, syn. Prunus amygdalus) is a species of tree native to Mediterranean climate regions of the Middle East, but widely cultivated elsewhere. The almond is also the name of the edible and widely cultivated seed of this tree. Within the genus Prunus, it is classified with the peach in the subgenus Amygdalus, distinguished from the other subgenera by corrugations on the shell (endocarp) surrounding the seed.\\r\\n\\r\\nThe fruit of the almond is a drupe, consisting of an outer hull and a hard shell with the seed, which is not a true nut, inside. Shelling almonds refers to removing the shell to reveal the seed. Almonds are sold shelled or unshelled. Blanched almonds are shelled almonds that have been treated with hot water to soften the seedcoat, which is then removed to reveal the white embryo.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png"},{"_id":"640c2dd963a319ea671e37e8","name":"Tinned Tomatos","desc":"Tinned tomatoes are tomatoes that have been canned or preserved in a liquid. They are commonly used in sauces, soups, stews, and other culinary applications.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37e8.png"},{"_id":"640c2dd963a319ea671e37c2","name":"Minced Beef","desc":"Ground beef, commonly used for making burgers, meatballs, and meat sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37c2.png"},{"_id":"640c2dd963a319ea671e36f9","name":"Gruy\xe8re","desc":"Gruy\xe8re is a type of Swiss cheese that is known for its nutty, slightly sweet flavor and smooth, creamy texture. It is often used in cooking and pairs well with foods like potatoes, mushrooms, and bread.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36f9.png"},{"_id":"640c2dd963a319ea671e388a","name":"Powdered Sugar","desc":"Powdered sugar, also called confectioners\' sugar or icing sugar, is a finely ground sugar produced by milling granulated sugar into a powdered state. It usually contains a small amount of anti-caking agent to prevent clumping and improve flow","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e388a.png"},{"_id":"640c2dd963a319ea671e37bc","name":"Stilton Cheese","desc":"Blue cheese made from cow\'s milk, characterized by its strong flavor and creamy texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37bc.png"},{"_id":"640c2dd963a319ea671e365e","name":"Pork","desc":"Pork is the culinary name for the flesh of a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC.\\r\\n\\r\\nPork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork.\\r\\n\\r\\nPig is the most popular meat in the Eastern and non-Muslim parts of Southeastern Asia (Indochina, Philippines, Singapore, East Timor) and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish, Muslim and Rastafarian dietary law, for religious reasons, with several suggested possible causes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365e.png"},{"_id":"640c2dd963a319ea671e375c","name":"Sake","desc":"Japanese alcoholic beverage made from fermented rice and water, with a mild flavor and a relatively low alcohol content.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e375c.png"},{"_id":"640c2dd963a319ea671e3688","name":"Cayenne Pepper","desc":"A type of chili pepper that is often used to add heat and spice to dishes, with a bright red color and a pungent, fiery flavor that can range from mild to very hot.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3688.png"},{"_id":"640c2dd963a319ea671e3704","name":"Jalapeno","desc":"A type of chili pepper, typically green when unripe, that is commonly used in Mexican and Tex-Mex cuisine. It is moderately spicy and often used in salsas, sauces, and as a topping for nachos.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3704.png"},{"_id":"640c2dd963a319ea671e37c4","name":"Barbeque Sauce","desc":"A sweet and tangy sauce typically used for grilling or marinating meats, made with ingredients like tomato, vinegar, and spices.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37c4.png"},{"_id":"640c2dd963a319ea671e3840","name":"Scotch Bonnet","desc":"Scotch bonnet, also known as bonney peppers, or Caribbean red peppers, is a variety of chili pepper named for its resemblance to a tam o\' shanter hat. Also called ata rodo by Yoruba speakers of Nigeria, it is found mainly in the Caribbean islands; it is also found in Guyana (where it is called the ball-of-fire pepper), the Maldives Islands (where it is called githeyo mirus), Panama (where it is called aji chombo) and West Africa. Most Scotch bonnets have a heat rating of 100,000\u2013350,000 Scoville units. For comparison, most jalape\xf1o peppers have a heat rating of 2,500 to 8,000 on the Scoville scale. However, completely sweet varieties of Scotch bonnet are grown on some of the Caribbean islands, called cachucha peppers.\\r\\n\\r\\nThese peppers are used to flavour many different dishes and cuisines worldwide and are often used in hot sauces and condiments. The Scotch bonnet has a sweeter flavour and stouter shape, distinct from its habanero relative with which it is often confused, and gives jerk dishes (pork/chicken) and other Caribbean dishes their unique flavour. Scotch bonnets are mostly used in West African, Antiguan, Kittitian/Nevisian, Anguilan, Dominican, St. Lucian, St Vincentian, Grenadian, Trinidadian, Jamaican, Barbadian, Guyanese, Surinamese, Haitian and Cayman cuisines and pepper sauces, though they often show up in other Caribbean recipes. It is also used in Costa Rica and Panama for Caribbean-styled recipes such as rice and beans, Rond\xf3n, saus, beef patties, and Ceviche.\\r\\n\\r\\nFresh, ripe Scotch bonnets can change from green to yellow to scarlet red, however many other breeds of this pepper can ripen to orange, yellow, peach, or even a chocolate brown.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3840.png"},{"_id":"640c2dd963a319ea671e3803","name":"Haddock","desc":"A saltwater fish that is commonly found in the North Atlantic and is often used in cooking due to its mild, slightly sweet flavor and firm texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3803.png"},{"_id":"640c2dd963a319ea671e371a","name":"Madras Paste","desc":"Madras paste is a blend of spices commonly used in Indian cuisine, particularly in dishes from the Madras region. It typically includes ingredients such as coriander, cumin, turmeric, and chili peppers, and is often used as a marinade or seasoning for meat, fish, or vegetables.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e371a.png"},{"_id":"640c2dd963a319ea671e3856","name":"Light Rum","desc":"Rum is a distilled alcoholic drink made from sugarcane byproducts, such as molasses, or directly from sugarcane juice, by a process of fermentation and distillation. The distillate, a clear liquid, is then usually aged in oak barrels.\\r\\n\\r\\nThe majority of the world\'s rum production occurs in the Caribbean and Latin America. Rum is also produced in Australia, Portugal, Austria, Canada, Fiji, India, Japan, Mauritius, Nepal, New Zealand, the Philippines, Reunion Island, South Africa, Spain, Sweden, Taiwan, Thailand, the United Kingdom and the United States.\\r\\n\\r\\nRums are produced in various grades. Light rums are commonly used in cocktails, whereas \\"golden\\" and \\"dark\\" rums were typically consumed straight or neat, on the rocks, or used for cooking, but are now commonly consumed with mixers. Premium rums are also available, made to be consumed either straight or iced.\\r\\n\\r\\nRum plays a part in the culture of most islands of the West Indies as well as in The Maritimes and Newfoundland. This drink has famous associations with the Royal Navy (where it was mixed with water or beer to make grog) and piracy (where it was consumed as bumbo). Rum has also served as a popular medium of economic exchange, used to help fund enterprises such as slavery (see Triangular trade), organized crime, and military insurgencies (e.g., the American Revolution and Australia\'s Rum Rebellion).","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3856.png"},{"_id":"640c2dd963a319ea671e3724","name":"Mozzarella Balls","desc":"Small, round balls of mozzarella cheese that are soft, smooth, and milky in flavor, and are often used as a topping for pizzas, salads, and pasta dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3724.png"},{"_id":"640c2dd963a319ea671e377f","name":"Tomatoes","desc":"A juicy and flavorful fruit that comes in a variety of colors and sizes, commonly used in many cuisines around the world, particularly in Mediterranean and Latin American cuisines.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e377f.png"},{"_id":"640c2dd963a319ea671e377a","name":"Thai Green Curry Paste","desc":"A spicy blend of herbs and spices, including green chilies, lemongrass, and galangal, used as a base for Thai green curry.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e377a.png"},{"_id":"640c2dd963a319ea671e3733","name":"Paprika","desc":"A spice made from ground dried peppers, commonly used in Hungarian, Spanish, and Indian cooking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3733.png"},{"_id":"640c2dd963a319ea671e372c","name":"Olive Oil","desc":"A type of oil made from pressing whole olives, commonly used in cooking and as a salad dressing.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e372c.png"},{"_id":"640c2dd963a319ea671e3853","name":"Noodles","desc":"Noodles are a staple food in many cultures. They are made from unleavened dough which is stretched, extruded, or rolled flat and cut into one of a variety of shapes. While long, thin strips may be the most common, many varieties of noodles are cut into waves, helices, tubes, strings, or shells, or folded over, or cut into other shapes. Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are often pan-fried or deep-fried. Noodles are often served with an accompanying sauce or in a soup. Noodles can be refrigerated for short-term storage or dried and stored for future use. The material composition or geocultural origin must be specified when discussing noodles. The word derives from the German word Nudel.[1]","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3853.png"},{"_id":"640c2dd963a319ea671e3891","name":"Mulukhiyah","desc":"Mulukhiyah , molokheyya ,molokhia or mulukhiyyah (Arabic:  mul\u016Bkhiyyah) Greek : molokha is the leaves of Corchorus olitorius, commonly known in English as jute, nalta jute, tossa jute , jute mallow or Jew\'s mallow. It is used as a vegetable. It is popular in Middle East, East African and North African countries and is called \u201CSaluyot\u201D in the Philippines. Mulukhiyah is rather bitter, and when boiled, the resulting liquid is a thick, highly mucilaginous broth; it is often described as \\"slimy\\", rather like cooked okra. Mulukhiyah is generally eaten cooked, not raw, and is most frequently turned into a kind of soup or stew, typically bearing the same name as the vegetable in the local language. Traditionally mulukhiyah is cooked with chicken or at least chicken stock for flavor and is served with white rice, accompanied with lemon or lime.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3891.png"},{"_id":"640c2dd963a319ea671e3825","name":"Apples","desc":"A round fruit with a crisp, juicy flesh, often used in baking and cooking for its sweet flavor and firm texture","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3825.png"},{"_id":"640c2dd963a319ea671e3823","name":"Single Cream","desc":"A light cream with a fat content of around 18%, often used in cooking and baking to add richness and flavor","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3823.png"},{"_id":"640c2dd963a319ea671e37e5","name":"Yellow Pepper","desc":"Yellow peppers are a type of bell pepper with a sweet, mild flavor. They are commonly used in salads, stir-fries, and other culinary applications.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37e5.png"},{"_id":"640c2dd963a319ea671e3773","name":"Strawberries","desc":"A sweet and juicy fruit that is high in vitamin C and antioxidants. They are commonly eaten fresh or used in desserts like strawberry shortcake, strawberry ice cream, or strawberry jam.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3773.png"},{"_id":"640c2dd963a319ea671e37c7","name":"Duck Fat","desc":"Rendered fat from ducks that has a rich, savory flavor and high smoke point, commonly used for cooking and roasting.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37c7.png"},{"_id":"640c2dd963a319ea671e383b","name":"Ackee","desc":"A fruit that is native to West Africa, but is also grown in the Caribbean, and is often used in traditional Jamaican dishes such as ackee and saltfish.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png"},{"_id":"640c2dd963a319ea671e36ad","name":"Cold Water","desc":"Water that is at or below room temperature and has not been heated or warmed.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ad.png"},{"_id":"640c2dd963a319ea671e3884","name":"Gherkin Relish","desc":"A relish is a cooked and pickled product made of chopped vegetables, fruits or herbs and is a food item typically used as a condiment to enhance a staple. Examples are chutneys and the North American relish, a pickled cucumber jam eaten with hot dogs or hamburgers.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3884.png"},{"_id":"640c2dd963a319ea671e36fb","name":"Harissa Spice","desc":"Harissa spice is a North African blend of spices that typically includes hot chili peppers, cumin, coriander, garlic, and caraway seeds. It is often used to flavor meat, vegetables, and stews.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36fb.png"},{"_id":"640c2dd963a319ea671e36c1","name":"Dill","desc":"An aromatic herb that is commonly used in European and Mediterranean cuisines. It has a fresh, tangy flavor that pairs well with fish, vegetables, and dips.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36c1.png"},{"_id":"640c2dd963a319ea671e377c","name":"Thyme","desc":"A fragrant herb with small, delicate leaves and a pungent flavor, commonly used in Mediterranean and French cuisines as a seasoning for meat, fish, and vegetables.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e377c.png"},{"_id":"640c2dd963a319ea671e387e","name":"Bulgur Wheat","desc":"Bulgur is a cereal food made from the cracked parboiled groats of several different wheat species, most often from durum wheat. It originates in Middle Eastern cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e387e.png"},{"_id":"640c2dd963a319ea671e36b9","name":"Cumin Seeds","desc":"The dried seeds of the cumin plant, commonly used as a spice in cooking. They have a warm, earthy flavor and are often used in Indian, Middle Eastern, and Mexican cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36b9.png"},{"_id":"640c2dd963a319ea671e382e","name":"Star Anise","desc":"A star-shaped spice with a licorice-like flavor used in Chinese and Vietnamese cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e382e.png"},{"_id":"640c2dd963a319ea671e37b8","name":"Fromage Frais","desc":"A type of fresh, soft cheese that originated in France. Fromage frais has a tangy, creamy flavor and is often used in desserts or as a spread.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37b8.png"},{"_id":"640c2dd963a319ea671e380c","name":"Hazlenuts","desc":"","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e380c.png"},{"_id":"640c2dd963a319ea671e369e","name":"Chocolate Chips","desc":"Small, sweetened chocolate pieces that are commonly used in baking to add texture and flavor to desserts like cookies and cakes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e369e.png"},{"_id":"640c2dd963a319ea671e37ea","name":"Wild Mushrooms","desc":"Wild mushrooms are edible fungi that grow in the wild. They come in many different varieties and can be used in a variety of culinary applications, including soups, stews, sauces, and risottos.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ea.png"},{"_id":"640c2dd963a319ea671e37cd","name":"Pinto Beans","desc":"Medium-sized beans with a speckled, reddish-brown color and mild, earthy flavor, commonly used in Mexican and Southwestern cuisine in dishes like chili and refried beans.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37cd.png"},{"_id":"640c2dd963a319ea671e388d","name":"Sauerkraut","desc":"Sauerkraut is finely cut raw cabbage that has been fermented by various lactic acid bacteria. It has a long shelf life and a distinctive sour flavor, both of which result from the lactic acid formed when the bacteria ferment the sugars in the cabbage leaves.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e388d.png"},{"_id":"640c2dd963a319ea671e3881","name":"Sesame Seed Burger Buns","desc":"A bun is a small, sometimes sweet, bread-based item or roll. Though they come in many shapes and sizes, they are most commonly hand-sized or smaller, with a round top and flat bottom. Buns are usually made from flour, sugar, milk, yeast and butter.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3881.png"},{"_id":"640c2dd963a319ea671e3759","name":"Rolled Oats","desc":"Whole oat groats that have been steamed and flattened with large rollers to create flakes that are often used in oatmeal, granola, and baked goods.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3759.png"},{"_id":"640c2dd963a319ea671e3819","name":"Fruit Mix","desc":"A blend of dried fruits such as raisins, currants, and candied peel used in baking and cooking","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3819.png"},{"_id":"640c2dd963a319ea671e3824","name":"Red Wine Jelly","desc":"A sweet, tangy jelly made from red wine, often served with cheese and crackers or as a glaze for meats","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3824.png"},{"_id":"640c2dd963a319ea671e386c","name":"Rose water","desc":"Rose water is a flavoured water made by steeping rose petals in water. Additionally, it is the hydrosol portion of the distillate of rose petals, a by-product of the production of rose oil for use in perfume. It is used to flavour food, as a component in some cosmetic and medical preparations, and for religious purposes throughout Europe and Asia.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e386c.png"},{"_id":"640c2dd963a319ea671e3789","name":"Vegetable Oil","desc":"A type of oil derived from plant sources, such as soybeans, corn, or sunflower seeds, that is commonly used in cooking and baking due to its neutral flavor and high smoke point.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3789.png"},{"_id":"640c2dd963a319ea671e387b","name":"Sriracha","desc":"Sriracha is a type of hot sauce or chili sauce made from a paste of chili peppers, distilled vinegar, garlic, sugar, and salt.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e387b.png"},{"_id":"640c2dd963a319ea671e37f1","name":"Mixed Grain","desc":"A blend of two or more types of grains such as wheat, barley, oats, and rice that is often used in salads, soups, and stews.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f1.png"},{"_id":"640c2dd963a319ea671e383a","name":"Salt Cod","desc":"Cod that has been preserved by salting and drying, commonly used in Mediterranean and Latin American cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383a.png"},{"_id":"640c2dd963a319ea671e3813","name":"Marzipan","desc":"A sweet paste made from ground almonds and sugar, often used in cakes and pastries for decoration.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3813.png"},{"_id":"640c2dd963a319ea671e385b","name":"Smoked Salmon","desc":"Smoked salmon is a preparation of salmon, typically a fillet that has been cured and hot or cold smoked. Due to its moderately high price, smoked salmon is considered a delicacy. Although the term lox is sometimes applied to smoked salmon, they are different products.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385b.png"},{"_id":"640c2dd963a319ea671e3705","name":"Jasmine Rice","desc":"A type of long-grain rice that has a subtle floral aroma and a slightly sticky texture when cooked.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3705.png"},{"_id":"640c2dd963a319ea671e3828","name":"Unsalted Butter","desc":"Butter made from cream that has been separated from milk and churned, without any added salt","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3828.png"},{"_id":"640c2dd963a319ea671e375f","name":"Salted Butter","desc":"Butter that has been mixed with salt, commonly used in cooking and baking to add flavor and richness to dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e375f.png"},{"_id":"640c2dd963a319ea671e37b7","name":"Crusty Bread","desc":"Bread that has a hard crust and a soft, chewy interior. Crusty bread is often used for sandwiches or served with soups and stews.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37b7.png"},{"_id":"640c2dd963a319ea671e381c","name":"Glace Cherry","desc":"A candied cherry that has been preserved in sugar syrup and used in baking and decorating desserts","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e381c.png"},{"_id":"640c2dd963a319ea671e3887","name":"Warm Water","desc":"Water is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth\'s hydrosphere and the fluids of most living organisms. It is vital for all known forms of life, even though it provides no calories or organic nutrients. Its chemical formula is H2O, meaning that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds. Water is the name of the liquid state of H2O at standard ambient temperature and pressure. It forms precipitation in the form of rain and aerosols in the form of fog. Clouds are formed from suspended droplets of water and ice, its solid state. When finely divided, crystalline ice may precipitate in the form of snow. The gaseous state of water is steam or water vapor. Water moves continually through the water cycle of evaporation, transpiration (evapotranspiration), condensation, precipitation, and runoff, usually reaching the sea.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3887.png"},{"_id":"640c2dd963a319ea671e36aa","name":"Coconut Cream","desc":"A thick, rich cream made from coconut meat, commonly used in Thai and other Southeast Asian cuisine to add flavor and texture to dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36aa.png"},{"_id":"640c2dd963a319ea671e36bc","name":"Dark Soft Brown Sugar","desc":"Similar to dark brown sugar, but with a higher moisture content and softer texture. It is also rich in molasses and has a deep, complex flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36bc.png"},{"_id":"640c2dd963a319ea671e36b1","name":"Coriander Seeds","desc":"The dried seeds of the coriander plant, commonly used as a spice in cooking. They have a slightly sweet, citrusy flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36b1.png"},{"_id":"640c2dd963a319ea671e36db","name":"Free-range Eggs, Beaten","desc":"Chicken eggs from free-range chickens that have been whisked together until the whites and yolks are fully mixed.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36db.png"},{"_id":"640c2dd963a319ea671e365d","name":"Beef","desc":"Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\\r\\n\\r\\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365d.png"},{"_id":"640c2dd963a319ea671e3763","name":"Semi-skimmed Milk","desc":"Semi-skimmed milk is a type of milk that has had some, but not all, of the cream removed. It typically has a lower fat content than whole milk, but is not as low in fat as skimmed milk.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3763.png"},{"_id":"640c2dd963a319ea671e37bf","name":"Apricot","desc":"Fruit with a soft, velvety skin and a sweet, juicy flesh, commonly eaten fresh or dried.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37bf.png"},{"_id":"640c2dd963a319ea671e378c","name":"Vinaigrette Dressing","desc":"A sauce made with oil, vinegar, and seasonings, used as a dressing for salads or as a marinade for meats and vegetables.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e378c.png"},{"_id":"640c2dd963a319ea671e37a9","name":"Baby Squid","desc":"Young, small-sized squid that are tender and flavorful, often grilled or saut\xe9ed and served as a seafood appetizer.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37a9.png"},{"_id":"640c2dd963a319ea671e37b5","name":"Linguine Pasta","desc":"A long, thin pasta noodle that is similar to spaghetti, but wider. Linguine is often served with seafood or tomato-based sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37b5.png"},{"_id":"640c2dd963a319ea671e3737","name":"Parmigiano-reggiano","desc":"See Parmesan.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3737.png"},{"_id":"640c2dd963a319ea671e388e","name":"Caraway Seed","desc":"Caraway, also known as meridian fennel and Persian cumin (Carum carvi), is a biennial plant ... For example, it is used in goulash, sauerkraut, and caraway seed cake. The roots may be cooked as a vegetable like parsnips or carrots","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e388e.png"},{"_id":"640c2dd963a319ea671e3677","name":"Brandy","desc":"A type of distilled spirit made from wine or fermented fruit juice, often aged in oak barrels to give it a smooth, mellow flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3677.png"},{"_id":"640c2dd963a319ea671e36d6","name":"Flax Eggs","desc":"A vegan egg substitute made from ground flaxseed and water. Used in baking as a binding agent.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36d6.png"},{"_id":"640c2dd963a319ea671e3780","name":"Toor Dal","desc":"Also known as pigeon peas, a type of legume commonly used in Indian and African cuisines, often cooked into stews, soups, and curries.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3780.png"},{"_id":"640c2dd963a319ea671e3816","name":"Baked Beans","desc":"Haricot beans cooked in a tomato sauce, often served as a side dish or as part of a full English breakfast.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3816.png"},{"_id":"640c2dd963a319ea671e36f0","name":"Greek Yogurt","desc":"A thick and creamy yogurt that has been strained to remove excess whey, resulting in a tangy and slightly tart flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36f0.png"},{"_id":"640c2dd963a319ea671e370e","name":"Lasagne Sheets","desc":"Flat, rectangular pieces of pasta that are used to make lasagne, a popular Italian dish that typically consists of layers of pasta, meat, sauce, and cheese.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e370e.png"},{"_id":"640c2dd963a319ea671e385d","name":"Rice Krispies","desc":"Rice Krispies (also known as Rice Bubbles in Australia and New Zealand) is a breakfast cereal marketed by Kellogg\'s in 1927 and released to the public in 1928. Rice Krispies are made of crisped rice (rice and sugar paste that is formed into rice shapes or \\"berries\\", cooked, dried and toasted), and expand forming very thin and hollowed out walls that are crunchy and crisp. When milk is added to the cereal the walls tend to collapse, creating the \\"Snap, crackle and pop\\" sounds.\\r\\n\\r\\nRice Krispies cereal has a long advertising history, with the elf cartoon characters Snap, Crackle and Pop touting the brand. In 1963, The Rolling Stones recorded a short song for a Rice Krispies television advertisement.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385d.png"},{"_id":"640c2dd963a319ea671e3791","name":"White Fish","desc":"Any fish with white flesh, such as cod, haddock, or tilapia, often used in cooking for its mild flavor and versatility.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3791.png"},{"_id":"640c2dd963a319ea671e3781","name":"Tuna","desc":"A saltwater fish with firm, meaty flesh, commonly used in a variety of cuisines, including sushi, salads, and sandwiches.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3781.png"},{"_id":"640c2dd963a319ea671e369a","name":"Chilled Butter","desc":"Butter that has been chilled or kept in the refrigerator. It is often used in pastry doughs or other baked goods to create a flaky texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e369a.png"},{"_id":"640c2dd963a319ea671e36ce","name":"Fajita Seasoning","desc":"A blend of spices typically used to season chicken, beef, or vegetable fajitas. The seasoning usually includes chili powder, cumin, garlic powder, and paprika.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ce.png"},{"_id":"640c2dd963a319ea671e3880","name":"Dill Pickles","desc":"A pickled cucumber is a cucumber that has been pickled in a brine, vinegar, or other solution and left to ferment for a period of time, by either immersing the cucumbers in an acidic solution or through souring by lacto-fermentation. Pickled cucumbers are often part of mixed pickles.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3880.png"},{"_id":"640c2dd963a319ea671e368d","name":"Charlotte Potatoes","desc":"Small, waxy potatoes with a creamy texture and delicate skin. They are ideal for boiling, roasting, and salads.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e368d.png"},{"_id":"640c2dd963a319ea671e381a","name":"Dried Fruit","desc":"Fruit that has been dried to remove most of its water content, often used in baking, cooking, and snacking","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e381a.png"},{"_id":"640c2dd963a319ea671e3680","name":"Cajun","desc":"A style of cooking that originated in Louisiana and combines French, African, and Native American culinary traditions, featuring bold and spicy flavors and often incorporating seafood, rice, and vegetables.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3680.png"},{"_id":"640c2dd963a319ea671e3784","name":"Turnips","desc":"A root vegetable with a slightly sweet and bitter flavor, commonly used in European and Asian cuisines, often boiled, roasted, or mashed.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3784.png"},{"_id":"640c2dd963a319ea671e36cd","name":"Extra Virgin Olive Oil","desc":"A high-quality oil made from the first pressing of the olives, with a fruity flavor and low acidity. Often used in dressings and for finishing dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36cd.png"},{"_id":"640c2dd963a319ea671e36e7","name":"Ghee","desc":"A type of clarified butter commonly used in South Asian cuisine with a rich, nutty flavor and high smoke point.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36e7.png"},{"_id":"640c2dd963a319ea671e37a8","name":"Vermicelli Pasta","desc":"A type of thin, spaghetti-like pasta that is slightly thinner than spaghetti and often used in soups, stir-fries, or salads.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37a8.png"},{"_id":"640c2dd963a319ea671e36d2","name":"Fenugreek","desc":"An herb commonly used in Indian cuisine for its nutty, maple-like flavor. The leaves and seeds can be used in dishes like curries, stews, and chutneys.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36d2.png"},{"_id":"640c2dd963a319ea671e3740","name":"Pine Nuts","desc":"Pine nuts are edible seeds that come from certain species of pine trees. They have a sweet and nutty flavor, and are commonly used in Mediterranean and Middle Eastern cuisine as a topping or ingredient in dishes like salads, pasta, and pesto.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3740.png"},{"_id":"640c2dd963a319ea671e3805","name":"Brussels Sprouts","desc":"A vegetable closely related to cabbage and broccoli, characterized by small green leafy buds tightly packed into a round shape.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3805.png"},{"_id":"640c2dd963a319ea671e37b9","name":"Clams","desc":"Edible bivalve mollusks with two shells, commonly used in seafood dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37b9.png"},{"_id":"640c2dd963a319ea671e381d","name":"Treacle","desc":"A sweet, sticky syrup made from refined sugar, often used as a sweetener in baking and cooking","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e381d.png"},{"_id":"640c2dd963a319ea671e3812","name":"Apricot Jam","desc":"A sweet spread made from apricots, often used on toast, pastries, and in baking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3812.png"},{"_id":"640c2dd963a319ea671e371c","name":"Massaman Curry Paste","desc":"Massaman curry paste is a blend of spices commonly used in Thai cuisine, particularly in dishes from the southern region of Thailand. It typically includes ingredients such as cinnamon, cardamom, cloves, and chili peppers, and is often used as a marinade or seasoning for meat, fish, or vegetables.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e371c.png"},{"_id":"640c2dd963a319ea671e3751","name":"Red Wine","desc":"Alcoholic beverage made from fermented grapes or other fruits with a red color derived from the skins of dark-colored grapes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3751.png"},{"_id":"640c2dd963a319ea671e372e","name":"Onions","desc":"A bulb vegetable with layers of flesh covered by a paper-like skin, used in cooking for its flavor and texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e372e.png"},{"_id":"640c2dd963a319ea671e3682","name":"Cannellini Beans","desc":"A type of white bean that is commonly used in Italian cuisine, with a creamy texture and a mild, nutty flavor that is often used in soups, salads, and pasta dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3682.png"},{"_id":"640c2dd963a319ea671e3769","name":"Smoked Paprika","desc":"Smoked paprika is a type of paprika that has been smoked over wood to give it a smoky flavor. It is commonly used in Spanish and Mexican cuisine, and can be used to add flavor to meats, stews, and soups.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3769.png"},{"_id":"640c2dd963a319ea671e385e","name":"Ancho Chillies","desc":"A type of dried chili pepper that is commonly used in Mexican cuisine, with a mild to medium heat level and a fruity, smoky flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png"},{"_id":"640c2dd963a319ea671e37bb","name":"Rapeseed Oil","desc":"Oil extracted from the seeds of the rapeseed plant, commonly used for cooking and frying.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37bb.png"},{"_id":"640c2dd963a319ea671e36c2","name":"Doner Meat","desc":"A type of meat that is typically made from lamb, chicken, or beef that has been seasoned and cooked on a vertical rotisserie. It is commonly used in Middle Eastern and Mediterranean cuisine, and is often served in sandwiches or wraps.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36c2.png"},{"_id":"640c2dd963a319ea671e37f9","name":"Baguette","desc":"A long, thin loaf of French bread that has a crisp crust and a soft, chewy interior, and is often used for sandwiches and as an accompaniment to meals.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f9.png"},{"_id":"640c2dd963a319ea671e3673","name":"Black Treacle","desc":"Molasses (American English) or black treacle (British English) is a viscous product resulting from refining sugarcane or sugar beets into sugar. Molasses varies by amount of sugar, method of extraction, and age of plant. Sugarcane molasses is primarily used for sweetening and flavoring foods in the United States, Canada, and elsewhere. Molasses is a defining component of fine commercial brown sugar.\\r\\n\\r\\nSweet sorghum syrup may be colloquially called \\"sorghum molasses\\" in the southern United States.[2][3] Similar products include honey, maple syrup, corn syrup, and invert syrup. Most of these alternative syrups have milder flavors.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3673.png"},{"_id":"640c2dd963a319ea671e3719","name":"Mackerel","desc":"Mackerel is a type of fish that is typically oily and has a strong, distinctive flavor. It is commonly used in a variety of dishes, including sushi, fish cakes, and smoked fish.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3719.png"},{"_id":"640c2dd963a319ea671e3845","name":"Rice Vinegar","desc":"Rice vinegar is a vinegar made from fermented rice in China, Japan, Korea, and Vietnam.\\r\\n\\r\\nChinese rice vinegars are stronger than Japanese ones, and range in colour from clear to various shades of red, brown and black and are therefore known as rice wine vinegar. Chinese and especially Japanese vinegars are less acidic than the distilled Western vinegars which, for that reason, are not appropriate substitutes for rice vinegars. The majority of the Asian rice vinegar types are also more mild and sweet than vinegars typically used in the Western world, with black vinegars as a notable exception. Chinese rice vinegars are made from huangjiu, a type of rice wine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3845.png"},{"_id":"640c2dd963a319ea671e3821","name":"Beef Shin","desc":"A cut of beef from the lower leg, often used in slow-cooked dishes for its rich flavor and collagen content","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3821.png"},{"_id":"640c2dd963a319ea671e3871","name":"Bun","desc":"A bun is a small, sometimes sweet, bread-based item[1] or roll. Though they come in many shapes and sizes, they are most commonly hand-sized or smaller, with a round top and flat bottom.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3871.png"},{"_id":"640c2dd963a319ea671e37d0","name":"Mozzarella","desc":"A semi-soft, mild cheese with a smooth, creamy texture and mild, slightly tangy flavor, commonly used on pizzas and in Italian dishes like lasagna and caprese salad.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d0.png"},{"_id":"640c2dd963a319ea671e37d4","name":"Banana","desc":"A fruit with a soft, sweet flesh and yellow or green skin that is rich in potassium and often used in baked goods, smoothies, and as a snack.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d4.png"},{"_id":"640c2dd963a319ea671e3798","name":"Worcestershire Sauce","desc":"A fermented liquid condiment made from a blend of spices, vinegar, and anchovies, commonly used as a seasoning for meats, vegetables, and soups.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3798.png"},{"_id":"640c2dd963a319ea671e368a","name":"Celery","desc":"A long, crunchy stalk vegetable with a green color and a strong, distinct flavor, often used in soups, stews, salads, and as a snack with dips or spreads.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e368a.png"},{"_id":"640c2dd963a319ea671e384c","name":"Wonton Skin","desc":"Won ton skin. Paper-thin squares of dough made from flour, water, eggs and salt used to make won tons, egg rolls and gyoza.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e384c.png"},{"_id":"640c2dd963a319ea671e36de","name":"Fresh Thyme","desc":"An herb with small, fragrant leaves that are used in cooking to add flavor to meats, soups, and stews. It has a slightly minty, lemony flavor and pairs well with other herbs like rosemary and sage.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36de.png"},{"_id":"640c2dd963a319ea671e36d9","name":"Floury Potatoes","desc":"A type of potato with a high starch content and dry, fluffy texture when cooked. Often used for making mashed potatoes, fries, and potato pancakes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36d9.png"},{"_id":"640c2dd963a319ea671e3662","name":"Aubergine","desc":"Eggplant (US, Australia), aubergine (UK), or brinjal (South Asia and South Africa) is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit.\\r\\n\\r\\nMost commonly purple, the spongy, absorbent fruit is used in various cuisines. Although often considered a vegetable, it is a berry by botanical definition. As a member of the genus Solanum, it is related to tomato and potato. Like the tomato, its skin and seeds can be eaten, but, like the potato, it is usually eaten cooked. Eggplant is nutritionally low in macronutrient and micronutrient content, but the capability of the fruit to absorb oils and flavors into its flesh through cooking expands its use in the culinary arts.\\r\\n\\r\\nIt was originally domesticated from the wild nightshade species thorn or bitter apple, S. incanum, probably with two independent domestications: one in South Asia, and one in East Asia.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3662.png"},{"_id":"640c2dd963a319ea671e36d0","name":"Fennel Bulb","desc":"A bulbous vegetable with a licorice-like flavor commonly used in Mediterranean cuisine. The bulb, stems, and fronds can all be eaten raw or cooked.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36d0.png"},{"_id":"640c2dd963a319ea671e36bb","name":"Dark Brown Sugar","desc":"A type of brown sugar with a higher molasses content and darker color than light brown sugar. It has a rich, caramel flavor and is often used in baking and cooking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36bb.png"},{"_id":"640c2dd963a319ea671e381e","name":"Oatmeal","desc":"A type of coarse flour made from ground oats, often used in baking and cooking","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e381e.png"},{"_id":"640c2dd963a319ea671e386b","name":"Sherry","desc":"Sherry is a fortified wine made from white grapes that are grown near the city of Jerez de la Frontera in Andalusia, Spain.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e386b.png"},{"_id":"640c2dd963a319ea671e3882","name":"Buns","desc":"A bun is a small, sometimes sweet, bread-based item or roll. Though they come in many shapes and sizes, they are most commonly hand-sized or smaller, with a round top and flat bottom. Buns are usually made from flour, sugar, milk, yeast and butter.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3882.png"},{"_id":"640c2dd963a319ea671e374b","name":"Red Chile Flakes","desc":"Dried and crushed chili peppers that are often used to add heat and flavor to dishes such as chili, soups, and stews.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e374b.png"},{"_id":"640c2dd963a319ea671e3778","name":"Tamarind Paste","desc":"A thick, dark brown paste made from the pulp of the tamarind fruit, used as a souring agent in cooking, especially in Indian, Thai, and Mexican cuisines.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3778.png"},{"_id":"640c2dd963a319ea671e3714","name":"Lemons","desc":"Lemons are a citrus fruit that are typically bright yellow in color and have a sour, acidic flavor. They are commonly used as a flavoring agent in cooking, baking, and beverages, and are also a source of vitamin C.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3714.png"},{"_id":"640c2dd963a319ea671e367a","name":"Broccoli","desc":"A nutritious vegetable that is a member of the cabbage family, with small, tight florets and a thick stem, often steamed or boiled and used in salads, stir-fries, and other dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e367a.png"},{"_id":"640c2dd963a319ea671e3701","name":"Ice Cream","desc":"A frozen dessert typically made with cream, sugar, and flavorings.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3701.png"},{"_id":"640c2dd963a319ea671e3683","name":"Cardamom","desc":"A spice made from the dried seeds of plants in the ginger family, with a strong, sweet, and pungent flavor that is often used in Indian and Middle Eastern cuisine to add warmth and depth of flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3683.png"},{"_id":"640c2dd963a319ea671e368f","name":"Cheese","desc":"A dairy product made from milk that is curdled and then processed into a solid form. It can come in a wide range of flavors and textures depending on the type and aging process.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e368f.png"},{"_id":"640c2dd963a319ea671e388c","name":"Polish Sausage","desc":"Kielbasa is any type of meat sausage from Poland, and a staple of Polish cuisine. In American English the word typically refers to a coarse, U-shaped smoked sausage of any kind of meat, which closely resembles the Wiejska sausage in British English.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e388c.png"},{"_id":"640c2dd963a319ea671e37c9","name":"Red Wine Vinegar","desc":"A vinegar made from red wine that has a tart and tangy flavor, often used in salad dressings, marinades, and sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37c9.png"},{"_id":"640c2dd963a319ea671e385c","name":"Mars Bar","desc":"Mars is a variety of chocolate bar produced by Mars, Incorporated. It was first manufactured in 1932 in Slough, England by Forrest Mars, Sr. The bar was sold in two different formulations. In its original British version the bar consists of milk chocolate surrounding caramel and nougat, developed to resemble the American candy bar known as the Milky Way, which had been introduced a decade earlier. An American version of the Mars Bar was produced which had nougat and toasted almonds covered in milk chocolate; later, caramel was added to the recipe as well. The American version was discontinued in 2002, though it has been revived for short runs since then.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385c.png"},{"_id":"640c2dd963a319ea671e3893","name":"Figs","desc":"Ficus carica is an Asian species of flowering plant in the mulberry family, known as the common fig. It is the source of the fruit also called the fig and as such is an important crop in those areas where it is grown commercially.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3893.png"},{"_id":"640c2dd963a319ea671e3675","name":"Bowtie Pasta","desc":"A type of pasta with a distinctive bowtie or butterfly shape that is often used in pasta salads and other cold dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3675.png"},{"_id":"640c2dd963a319ea671e3862","name":"Tripe","desc":"Tripe is a type of edible lining from the stomachs of various farm animals. Most tripe is from cattle and sheep.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3862.png"},{"_id":"640c2dd963a319ea671e37a1","name":"Tagliatelle","desc":"A type of pasta that is long and ribbon-shaped, similar to fettuccine but narrower in width.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37a1.png"},{"_id":"640c2dd963a319ea671e37d6","name":"Blueberries","desc":"Small, sweet, and juicy blue fruits often used in baking or as a topping for breakfast foods such as pancakes, waffles, and yogurt bowls.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d6.png"},{"_id":"640c2dd963a319ea671e3783","name":"Turmeric Powder","desc":"A ground spice made from the root of the turmeric plant, commonly used as a seasoning and coloring agent in Indian and Southeast Asian cuisines.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3783.png"},{"_id":"640c2dd963a319ea671e37fe","name":"Oysters","desc":"Edible bivalve mollusks with a tough, irregularly shaped shell, typically eaten raw or cooked and often served as a delicacy.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37fe.png"},{"_id":"640c2dd963a319ea671e385a","name":"White Wine Vinegar","desc":"Wine vinegar is made from red or white wine, and is the most commonly used vinegar in Southern and Central Europe, Cyprus and Israel. As with wine, there is a considerable range in quality. Better-quality wine vinegars are matured in wood for up to two years, and exhibit a complex, mellow flavor. Wine vinegar tends to have a lower acidity than white or cider vinegars. More expensive wine vinegars are made from individual varieties of wine, such as champagne, sherry, or pinot gris.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385a.png"},{"_id":"640c2dd963a319ea671e36f3","name":"Green Olives","desc":"Olives that are harvested before they are fully ripe and have a firm texture and slightly bitter flavor commonly used in salads, sandwiches, and as a snack.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36f3.png"},{"_id":"640c2dd963a319ea671e37b3","name":"Pappardelle Pasta","desc":"A broad, flat pasta noodle that originated in Tuscany, Italy. Pappardelle is often served with rich, meaty sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37b3.png"},{"_id":"640c2dd963a319ea671e37b4","name":"Paccheri Pasta","desc":"A large, tube-shaped pasta noodle that originated in Southern Italy. Paccheri is often stuffed and baked, or served with tomato-based sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37b4.png"},{"_id":"640c2dd963a319ea671e36ab","name":"Coconut Milk","desc":"A milky liquid made from coconut meat, commonly used in Indian, Thai, and other Southeast Asian cuisine to add flavor and creaminess to dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ab.png"},{"_id":"640c2dd963a319ea671e36fe","name":"Horseradish","desc":"Horseradish is a pungent root vegetable that is often grated and used as a condiment or flavoring agent. It is commonly used in sauces, dressings, and as a garnish for dishes like roast beef or smoked fish.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36fe.png"},{"_id":"640c2dd963a319ea671e382f","name":"Tiger Prawns","desc":"A large species of prawn known for their distinctive stripes and sweet flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e382f.png"},{"_id":"640c2dd963a319ea671e3694","name":"Chicken Breasts","desc":"A cut of chicken meat that comes from the breast of the bird. It is lean and versatile, and can be cooked in a variety of ways, such as grilling, roasting, or pan-frying.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3694.png"},{"_id":"640c2dd963a319ea671e37fd","name":"Ham","desc":"A cut of meat from the hind leg of a pig that is typically cured or smoked, and is commonly used in sandwiches, salads, and as a flavoring for soups and stews.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37fd.png"},{"_id":"640c2dd963a319ea671e36d5","name":"Flaked Almonds","desc":"Sliced or chopped almonds commonly used in baking and as a topping for salads and desserts.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36d5.png"},{"_id":"640c2dd963a319ea671e370c","name":"Lamb Loin Chops","desc":"A type of lamb chop that comes from the loin area of the animal. Lamb loin chops are tender and flavorful and can be cooked quickly over high heat.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e370c.png"},{"_id":"640c2dd963a319ea671e3689","name":"Celeriac","desc":"A root vegetable that is related to celery, with a knobby, rough exterior and a creamy-white interior that is often used in soups, stews, and purees, with a mild and slightly sweet flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3689.png"},{"_id":"640c2dd963a319ea671e3667","name":"Basil","desc":"Basil, also called great basil, is a culinary herb of the family Lamiaceae (mints).\\r\\n\\r\\nBasil is native to tropical regions from central Africa to Southeast Asia. It is a tender plant, and is used in cuisines worldwide. Depending on the species and cultivar, the leaves may taste somewhat like anise, with a strong, pungent, often sweet smell.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3667.png"},{"_id":"640c2dd963a319ea671e3693","name":"Chicken Breast","desc":"A cut of chicken meat that comes from the breast of the bird. It is lean and versatile, and can be cooked in a variety of ways, such as grilling, roasting, or pan-frying.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3693.png"},{"_id":"640c2dd963a319ea671e3867","name":"Filo Pastry","desc":"Filo or phyllo (Greek: \u03C6\u03CD\u03BB\u03BB\u03BF \\"leaf\\") is a very thin unleavened dough used for making pastries such as baklava and b\xf6rek in Middle Eastern and Balkan cuisines. Filo-based pastries are made by layering many sheets of filo brushed with oil or butter; the pastry is then baked.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3867.png"},{"_id":"640c2dd963a319ea671e36a7","name":"Cloves","desc":"A pungent spice commonly used in baking and cooking, made from the dried flower buds of the clove tree.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36a7.png"},{"_id":"640c2dd963a319ea671e3765","name":"Shallots","desc":"Shallots are a type of onion that have a milder flavor than regular onions. They are typically smaller and have a brownish-red skin, and are often used in French cooking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3765.png"},{"_id":"640c2dd963a319ea671e3811","name":"Yellow Food Colouring","desc":"A type of food coloring used to add a bright yellow color to foods and drinks.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3811.png"},{"_id":"640c2dd963a319ea671e36a3","name":"Christmas Pudding","desc":"A traditional British dessert that is typically served during the Christmas season, made with dried fruit, spices, and suet, and often served with brandy butter or custard.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36a3.png"},{"_id":"640c2dd963a319ea671e37ca","name":"Haricot Beans","desc":"Also known as navy beans, small white beans with a mild flavor and creamy texture, often used in soups, stews, and casseroles.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ca.png"},{"_id":"640c2dd963a319ea671e37d9","name":"Maple Syrup","desc":"A sweet and flavorful syrup made from the sap of maple trees, often used as a topping for pancakes, waffles, or oatmeal.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d9.png"},{"_id":"640c2dd963a319ea671e373d","name":"Pecorino","desc":"A hard, salty cheese made from sheep\'s milk, commonly used in Italian cooking for its sharp, tangy flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e373d.png"},{"_id":"640c2dd963a319ea671e3729","name":"Mustard Seeds","desc":"Small, round seeds that are derived from the mustard plant, and are often used as a spice in cooking and seasoning for their pungent and tangy flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3729.png"},{"_id":"640c2dd963a319ea671e3726","name":"Mushrooms","desc":"Fungi that are used in cooking and have a wide variety of shapes, sizes, and flavors, ranging from delicate and earthy to meaty and umami.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3726.png"},{"_id":"640c2dd963a319ea671e3676","name":"Bramley Apples","desc":"A type of apple that is popular in the UK and Ireland, known for its tart flavor and firm texture, which makes it ideal for cooking and baking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3676.png"},{"_id":"640c2dd963a319ea671e37a4","name":"Corn Flour","desc":"A fine, powdery flour made by grinding dried corn kernels, commonly used as a thickener in soups, stews, and sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37a4.png"},{"_id":"640c2dd963a319ea671e37ff","name":"Stout","desc":"A dark, rich beer that is made using roasted malts, often with a creamy and smooth texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ff.png"},{"_id":"640c2dd963a319ea671e3672","name":"Black Pepper","desc":"Black pepper (Piper nigrum) is a flowering vine in the family Piperaceae, cultivated for its fruit, known as a peppercorn, which is usually dried and used as a spice and seasoning. When fresh and fully mature, it is about 5 mm (0.20 in) in diameter and dark red, and contains a single seed, like all drupes. Peppercorns and the ground pepper derived from them may be described simply as pepper, or more precisely as black pepper (cooked and dried unripe fruit), green pepper (dried unripe fruit), or white pepper (ripe fruit seeds).\\r\\n\\r\\nBlack pepper is native to present-day Kerala in Southwestern India, and is extensively cultivated there and elsewhere in tropical regions. Vietnam is the world\'s largest producer and exporter of pepper, producing 34% of the world\'s crop, as of 2013.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3672.png"},{"_id":"640c2dd963a319ea671e3718","name":"Macaroni","desc":"Macaroni is a type of pasta that is typically tubular in shape and has a smooth, cylindrical surface. It is commonly used in pasta dishes such as macaroni and cheese, and can also be used in salads and soups.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3718.png"},{"_id":"640c2dd963a319ea671e378f","name":"Water","desc":"A transparent, odorless, tasteless liquid that is essential for most forms of life.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e378f.png"},{"_id":"640c2dd963a319ea671e375e","name":"Salt","desc":"Crystalline mineral made of sodium chloride, commonly used as a seasoning and preservative in cooking and food preparation.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e375e.png"},{"_id":"640c2dd963a319ea671e3746","name":"Potatoes","desc":"A starchy root vegetable that is commonly used in cooking and is a good source of carbohydrates, fiber, and vitamins.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3746.png"},{"_id":"640c2dd963a319ea671e36c8","name":"Egg White","desc":"","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36c8.png"},{"_id":"640c2dd963a319ea671e37ae","name":"Onion","desc":"A bulb-shaped vegetable with multiple layers of papery skin and a pungent, sweet flavor, often used as a base for soups, stews, and sauces or caramelized as a topping for pizza or sandwiches.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ae.png"},{"_id":"640c2dd963a319ea671e3716","name":"Lime","desc":"Limes are a citrus fruit that are typically green in color and have a tart, acidic flavor. They are commonly used as a flavoring agent in cooking, baking, and beverages, and are also a source of vitamin C.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3716.png"},{"_id":"640c2dd963a319ea671e36cf","name":"Farfalle","desc":"A type of pasta shaped like a bow tie or butterfly.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36cf.png"},{"_id":"640c2dd963a319ea671e36bf","name":"Diced Tomatoes","desc":"Tomatoes that have been chopped into small, evenly sized pieces. They are often canned and used in soups, stews, sauces, and other dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36bf.png"},{"_id":"640c2dd963a319ea671e387d","name":"Pita Bread","desc":"Pita or pitta, is a family of yeast-leavened round flatbreads baked from wheat flour, common in the Mediterranean, Middle East, and neighboring areas.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e387d.png"},{"_id":"640c2dd963a319ea671e3806","name":"Raisins","desc":"Dried grapes that are small, sweet and chewy, often used in baking and as a snack.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3806.png"},{"_id":"640c2dd963a319ea671e3754","name":"Rice Noodles","desc":"Thin, translucent noodles made from rice flour and water and commonly used in Southeast Asian cuisine, such as in pho or pad thai.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3754.png"},{"_id":"640c2dd963a319ea671e3822","name":"Bouquet Garni","desc":"A bundle of herbs, typically including bay leaves, thyme, and parsley, used to flavor soups, stews, and other dishes","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3822.png"},{"_id":"640c2dd963a319ea671e3846","name":"Water Chestnut","desc":"Eleocharis dulcis, the Chinese water chestnut or water chestnut, is a grass-like sedge native to Asia (China, Japan, India, Philippines, etc.), Australia, tropical Africa, and various islands of the Pacific and Indian Oceans. It is grown in many countries for its edible corms.\\r\\n\\r\\nThe water chestnut is not a nut at all, but an aquatic vegetable that grows in marshes, under water, in the mud. It has stem-like, tubular green leaves that grow to about 1.5 m. The water caltrop, which also is referred to by the same name, is unrelated and often confused with the water chestnut.\\r\\n\\r\\nThe small, rounded corms have a crisp, white flesh and may be eaten raw, slightly boiled, or grilled, and often are pickled or tinned. They are a popular ingredient in Chinese dishes. In China, they are most often eaten raw, sometimes sweetened. They also may be ground into a flour form used for making water chestnut cake, which is common as part of dim sum cuisine. They are unusual among vegetables for remaining crisp even after being cooked or canned, because their cell walls are cross-linked and strengthened by certain phenolic compounds, such as oligomers of ferulic acid. This property is shared by other vegetables that remain crisp in this manner, including the tiger nut and lotus root. The corms contain the antibiotic agent puchiin, which is stable to high temperature. Apart from the edible corms, the leaves can be used for cattlefeed, mulch or compost.\\r\\n\\r\\nThe corms are rich in carbohydrates (about 90% by dry weight), especially starch (about 60% by dry weight), and are also a good source of dietary fiber, riboflavin, vitamin B6, potassium, copper, and manganese.\\r\\n\\r\\nIf eaten uncooked, the surface of the plants may transmit fasciolopsiasis.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3846.png"},{"_id":"640c2dd963a319ea671e37be","name":"Lamb Shoulder","desc":"Meat from the shoulder of a young sheep, commonly used for slow cooking and stews.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37be.png"},{"_id":"640c2dd963a319ea671e36cc","name":"English Mustard","desc":"A spicy, yellowish-brown mustard commonly used in British cuisine for sandwiches, dressings, and sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36cc.png"},{"_id":"640c2dd963a319ea671e3709","name":"King Prawns","desc":"A large, meaty type of shrimp that is often used in seafood dishes. King prawns have a sweet, delicate flavor and a firm texture when cooked.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3709.png"},{"_id":"640c2dd963a319ea671e3750","name":"Red Pepper Flakes","desc":"Dried and crushed red chili peppers often used as a spice to add heat and flavor to dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3750.png"},{"_id":"640c2dd963a319ea671e3795","name":"Whole Milk","desc":"Milk that has not had its fat content reduced or removed, typically containing around 3.25% fat.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3795.png"},{"_id":"640c2dd963a319ea671e386d","name":"Mixed Spice","desc":"Mixed spice, also called pudding spice, is a British[1] blend of sweet spices, similar to the pumpkin pie spice used in the United States. Cinnamon is the dominant flavour, with nutmeg and allspice. It is often used in baking, or to complement fruits or other sweet foods.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e386d.png"},{"_id":"640c2dd963a319ea671e3875","name":"Yukon Gold Potatoes","desc":"Yukon Gold is a large cultivar of potato most distinctly characterized by its thin, smooth, eye-free skin and yellow-tinged flesh. This potato was developed in the 1960s by Garnet Johnston in Guelph, Ontario, Canada, with the help of Geoff Rowberry at the University of Guelph. The official cross was made in 1966 and Yukon Gold was finally released into the market in 1980.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3875.png"},{"_id":"640c2dd963a319ea671e3849","name":"Fermented Black Beans","desc":"Douchi (Chinese: \u8C46\u8C49; pinyin: d\xf2uch\u01D0), or tochi is a type of fermented and salted black soybean. In English, it is known as fermented black soybeans, Chinese fermented black beans (Chinese: \u9ED1\u8C46\u8C46\u8C49; pinyin: h\u0113id\xf2u d\xf2uch\u01D0), salted black beans, salty black beans, or just black beans. They are a flavoring most popular in the cuisine of China, where they are most widely used for making black bean sauce dishes.[1][page needed]\\r\\n\\r\\nDouchi is made by fermenting and salting black soybeans. The black type soybean is most commonly used and the process turns the beans soft, and mostly semi-dry (if the beans are allowed to dry). Regular soybeans (white soybeans) are also used, but this does not produce \\"salted black beans\\"; instead, these beans become brown. The smell is sharp, pungent, and spicy; the taste is salty, somewhat bitter and sweet.[citation needed] The product made with white soybeans is called mianchi.\\r\\n\\r\\nThe process and product are similar to ogiri and iru, both being African fermented bean products[citation needed].\\r\\n\\r\\nDouchi, \\"Chinese salted black beans\\", and \\"black soybeans\\" should not be confused with the black turtle bean, a variety of common bean that is commonly used in the cuisines of Central America, South America, and the Caribbean.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3849.png"},{"_id":"640c2dd963a319ea671e3874","name":"Pork Chops","desc":"A pork chop, like other meat chops, is a loin cut taken perpendicular to the spine of the pig and usually containing a rib or part of a vertebra. Pork chops are not processed and are leaner than other cuts of pork. Chops are commonly served as an individual portion.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3874.png"},{"_id":"640c2dd963a319ea671e3741","name":"Pitted Black Olives","desc":"Pitted black olives are ripe olives that have had their pits removed. They are a popular ingredient in Mediterranean and Italian cuisine, and are often used as a topping for pizza, in salads, or as a flavoring in dips and spreads.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3741.png"},{"_id":"640c2dd963a319ea671e3854","name":"Wood Ear Mushrooms","desc":"Auricularia auricula-judae, known as the Jew\'s ear, wood ear, jelly ear or by a number of other common names, is a species of edible Auriculariales fungus found worldwide. The fruiting body is distinguished by its noticeably ear-like shape and brown colouration; it grows upon wood, especially elder. Its specific epithet is derived from the belief that Judas Iscariot hanged himself from an elder tree; the common name \\"Judas\'s ear\\" was largely eclipsed by the corruption \\"Jew\'s ear\\", while today \\"jelly ear\\" and other names are sometimes used. The fungus can be found throughout the year in temperate regions worldwide, where it grows upon both dead and living wood.\\r\\n\\r\\nIn the West, A. auricula-judae was used in folk medicine as recently as the 19th century for complaints including sore throats, sore eyes and jaundice, and as an astringent. Although it is not widely consumed in the West, it has long been popular in China, to the extent that Australia exported large volumes to China in the early twentieth century. Today, the fungus is a popular ingredient in many Chinese dishes, such as hot and sour soup, and also used in Chinese medicine. It is also used in Ghana, as a blood tonic. Modern research into possible medical applications has variously concluded that A. auricula-judae has antitumour, hypoglycemic, anticoagulant and cholesterol-lowering properties.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3854.png"},{"_id":"640c2dd963a319ea671e37a6","name":"Fideo","desc":"A type of thin, spaghetti-like pasta commonly used in Mexican cuisine, often toasted before being added to soups or stews.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37a6.png"},{"_id":"640c2dd963a319ea671e3711","name":"Lemon","desc":"A citrus fruit that has a sour, acidic flavor and is often used in cooking and baking to add tartness and brightness to dishes. Lemon juice and zest are commonly used in marinades, dressings, and desserts.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3711.png"},{"_id":"640c2dd963a319ea671e3883","name":"Iceberg Lettuce","desc":"Iceberg is a variety of lettuce with crisp leaves that grow in a spherical head resembling cabbage. It is considered one of the sweeter lettuce varieties like romaine and butterhead. Mature iceberg lettuce grows to about one foot in diameter.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3883.png"},{"_id":"640c2dd963a319ea671e37ba","name":"Passata","desc":"Tomato puree made from strained and cooked tomatoes, commonly used as a base for pasta sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ba.png"},{"_id":"640c2dd963a319ea671e37b0","name":"Duck","desc":"A domesticated bird that is commonly used for meat. Duck meat is known for its rich, gamey flavor and is often roasted or grilled.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37b0.png"},{"_id":"640c2dd963a319ea671e365f","name":"Avocado","desc":"The avocado, a tree with probable origin in South Central Mexico, is classified as a member of the flowering plant family Lauraceae. The fruit of the plant, also called an avocado (or avocado pear or alligator pear), is botanically a large berry containing a single large seed.\\r\\n\\r\\nAvocados are commercially valuable and are cultivated in tropical and Mediterranean climates throughout the world. They have a green-skinned, fleshy body that may be pear-shaped, egg-shaped, or spherical. Commercially, they ripen after harvesting. Avocado trees are partially self-pollinating, and are often propagated through grafting to maintain predictable fruit quality and quantity. In 2017, Mexico produced 34% of the world supply of avocados.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365f.png"},{"_id":"640c2dd963a319ea671e3730","name":"Orange Zest","desc":"The outermost layer of the orange peel, used in cooking for its fragrant and flavorful oils.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3730.png"},{"_id":"640c2dd963a319ea671e36b7","name":"Cucumber","desc":"A green vegetable that is often used in salads and sandwiches. It has a crunchy texture and a mild, refreshing flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36b7.png"},{"_id":"640c2dd963a319ea671e368c","name":"Challots","desc":"A type of onion that has a mild, sweet flavor and a distinctive bulb shape, often used in French cuisine to add flavor to sauces, dressings, and other dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e368c.png"},{"_id":"640c2dd963a319ea671e3844","name":"Malt Vinegar","desc":"Vinegar is a liquid consisting of about 5\u201320% acetic acid (CH3COOH), water, and other trace chemicals, which may include flavorings. The acetic acid is produced by the fermentation of ethanol by acetic acid bacteria. Vinegar is now mainly used as a cooking ingredient, or in pickling. As the most easily manufactured mild acid, it has historically had a great variety of industrial, medical, and domestic uses, some of which (such as its use as a general household cleaner) are still commonly practiced today.\\r\\n\\r\\nCommercial vinegar is produced either by a fast or a slow fermentation process. In general, slow methods are used in traditional vinegars where fermentation proceeds slowly over the course of a few months or up to a year. The longer fermentation period allows for the accumulation of a non-toxic slime composed of acetic acid bacteria. Fast methods add mother of vinegar (bacterial culture) to the source liquid before adding air to oxygenate and promote the fastest fermentation. In fast production processes, vinegar may be produced between 20 hours to three days.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3844.png"},{"_id":"640c2dd963a319ea671e36a0","name":"Chopped Parsley","desc":"Fresh parsley that has been chopped finely, commonly used as a garnish or flavoring in salads, soups, and other dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36a0.png"},{"_id":"640c2dd963a319ea671e3799","name":"Yogurt","desc":"A dairy product made by fermenting milk with live bacteria cultures, resulting in a thick, creamy texture and tangy flavor. Often consumed as a snack or used as an ingredient in cooking and baking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3799.png"},{"_id":"640c2dd963a319ea671e3738","name":"Parsley","desc":"A herb with a mild, slightly bitter flavor, commonly used in Mediterranean and Middle Eastern cooking as a garnish or seasoning.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3738.png"},{"_id":"640c2dd963a319ea671e374a","name":"Raw King Prawns","desc":"Large, uncooked prawns that are typically used in dishes such as stir-fries, curries, and soups. They have a firm texture and a slightly sweet flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e374a.png"},{"_id":"640c2dd963a319ea671e375a","name":"Saffron","desc":"Spice derived from the stigma of the saffron crocus flower, with a pungent flavor and bright yellow-orange color, often used in rice dishes, paella, and bouillabaisse.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e375a.png"},{"_id":"640c2dd963a319ea671e373b","name":"Peanuts","desc":"A legume with a thin, papery skin and a high oil content, commonly eaten roasted or boiled as a snack, or used in cooking and baking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e373b.png"},{"_id":"640c2dd963a319ea671e372f","name":"Orange","desc":"A citrus fruit with a tough, bright orange rind and juicy, pulpy flesh that can be eaten raw or used in cooking and baking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e372f.png"},{"_id":"640c2dd963a319ea671e36f7","name":"Ground Cumin","desc":"Ground cumin is a spice made from the dried seeds of the cumin plant. It is commonly used in Indian, Middle Eastern, and Mexican cuisine to add a warm, earthy flavor to dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36f7.png"},{"_id":"640c2dd963a319ea671e3766","name":"Shredded Mexican Cheese","desc":"Shredded Mexican cheese is a blend of cheeses that is commonly used in Mexican cuisine. It typically contains a mixture of Cheddar, Monterey Jack, and other cheeses, and is often used in dishes like tacos, burritos, and enchiladas.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3766.png"},{"_id":"640c2dd963a319ea671e3841","name":"Oxtail","desc":"Oxtail (occasionally spelled ox tail or ox-tail) is the culinary name for the tail of cattle. Formerly, it referred only to the tail of an ox or steer, a bullock (a castrated male).[citation needed] An oxtail typically weighs 2 to 4 lbs. (1\u20131.8 kg) and is skinned and cut into short lengths for sale.\\r\\n\\r\\nOxtail is a bony, gelatin-rich meat, which is usually slow-cooked as a stew[1] or braised. It is a traditional stock base for a soup. Traditional preparations involve slow cooking, so some modern recipes take a shortcut using a pressure cooker. Oxtail is the main ingredient of the Italian dish coda alla vaccinara (a classic of Roman cuisine). It is a popular flavour for powder, instant and premade canned soups in the United Kingdom and Ireland. Oxtails are also one of the popular bases for Russian aspic appetizer dishes (\u0445\u043E\u043B\u043E\u0434\u0435\u0446 or \u0441\u0442\u0443\u0434\u0435\u043D\u044C), along with pig trotters or ears or cow \\"knees\\", but are the preferred ingredients among Russian Jews because they can be Kosher.\\r\\n\\r\\nVersions of oxtail soup are popular traditional dishes in South America, West Africa, China, Spain [2] and Indonesia. In Chinese cuisine, it\'s usually made into a soup called \u725B\u5C3E\u6C64 (ni\xfaw\u011Bi t\u0101ng, \\"oxtail soup\\"). In Korean cuisine, a soup made with oxtail is called kkori gomtang (see gomguk). It is a thick soup seasoned with salt and eaten with a bowl of rice. It can be used as a stock for making tteokguk (rice cake soup). Stewed oxtail with butter bean or as main dish (with rice) is popular in Jamaica, Trinidad, and other West Indian cultures. Oxtail is also very popular in South Africa where it is often cooked in a traditional skillet called a potjie, which is a three-legged cast iron pot placed over an open fire. Oxtail is also eaten in other southern parts of Africa like Zimbabwe and served with sadza and greens. In the United States, oxtail is a mainstay in African American and West Indian households. In Cuban cuisine, a stew can be made from oxtail called rabo encendido. In the Philippines, it is prepared in a peanut based stew called Kare-kare. In Iran, Oxtail is slow-cooked and served as a substitute for shank in a main dish called Baghla-Poli-Mahicheh which is prepared with rice, shank (or oxtail) and a mixture of herbs including dill, coriander, parsley and garlic.\\r\\n\\r\\nIn the United States, oxtail has the meat-cutting classification NAMP 1791.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3841.png"},{"_id":"640c2dd963a319ea671e37f7","name":"Mirin","desc":"A type of sweet rice wine that is commonly used in Japanese cuisine for its mild sweetness and ability to balance flavors in dishes like teriyaki sauce.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f7.png"},{"_id":"640c2dd963a319ea671e3800","name":"Lard","desc":"Rendered pork fat that is often used in cooking and baking for added flavor and texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3800.png"},{"_id":"640c2dd963a319ea671e368b","name":"Celery Salt","desc":"A seasoning made from ground celery seeds and salt, often used as a flavoring for snacks, seasonings, and condiments, such as Bloody Mary cocktails, pickles, and potato chips.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e368b.png"},{"_id":"640c2dd963a319ea671e36d4","name":"Fish Sauce","desc":"A pungent, salty sauce made from fermented fish commonly used in Southeast Asian cuisine as a seasoning and condiment.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36d4.png"},{"_id":"640c2dd963a319ea671e36dc","name":"French Lentils","desc":"Small, greenish-brown lentils that have a slightly nutty flavor and a firm texture. They hold their shape well when cooked and are often used in salads and stews.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36dc.png"},{"_id":"640c2dd963a319ea671e3752","name":"Refried Beans","desc":"Cooked and mashed beans, typically pinto beans, that are fried in oil or lard along with various seasonings and often used as a filling in burritos, tacos, and other Mexican dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3752.png"},{"_id":"640c2dd963a319ea671e36bd","name":"Dark Soy Sauce","desc":"A type of soy sauce that is aged for a longer period of time than light soy sauce, giving it a darker color, thicker consistency, and more intense flavor. It is often used in marinades, stir-fries, and braised dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36bd.png"},{"_id":"640c2dd963a319ea671e36e6","name":"Garlic Sauce","desc":"A sauce made from garlic, often combined with other ingredients such as lemon juice, olive oil, and herbs, commonly used as a dip or condiment.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36e6.png"},{"_id":"640c2dd963a319ea671e3707","name":"Kale","desc":"A leafy green vegetable that is a member of the cabbage family. Kale is known for its nutrient density and can be eaten raw or cooked in a variety of dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3707.png"},{"_id":"640c2dd963a319ea671e36da","name":"Free-range Egg, Beaten","desc":"A chicken egg from free-range chickens that has been whisked together until the whites and yolks are fully mixed.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36da.png"},{"_id":"640c2dd963a319ea671e37ac","name":"Pilchards","desc":"A type of small, oily fish similar to sardines, often canned in oil or tomato sauce and served as a snack or added to pasta dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ac.png"},{"_id":"640c2dd963a319ea671e3829","name":"Brie","desc":"A soft, creamy cheese with a mild flavor and edible rind, often used in sandwiches and as a topping for crackers and breads","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3829.png"},{"_id":"640c2dd963a319ea671e372a","name":"Nutmeg","desc":"A spice that is made from the seed of the nutmeg tree, and is often used in cooking and baking for its warm, sweet, and spicy flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e372a.png"},{"_id":"640c2dd963a319ea671e37a0","name":"Caramel Sauce","desc":"A sweet, sticky sauce made by heating sugar until it melts and caramelizes, often used as a topping for desserts.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37a0.png"},{"_id":"640c2dd963a319ea671e3717","name":"Little Gem Lettuce","desc":"Little Gem lettuce is a small variety of lettuce that is similar in appearance to romaine lettuce, but smaller and more compact. It has a slightly sweet, nutty flavor and a crisp texture, and is commonly used in salads and sandwiches.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3717.png"},{"_id":"640c2dd963a319ea671e382a","name":"Tarragon Leaves","desc":"A popular herb used in French cuisine with a subtle anise flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e382a.png"},{"_id":"640c2dd963a319ea671e36f5","name":"Green Salsa","desc":"A salsa made from tomatillos, green chili peppers, onions, and other ingredients resulting in a tangy and slightly spicy flavor commonly used as a dip or condiment.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36f5.png"},{"_id":"640c2dd963a319ea671e3739","name":"Peanut Butter","desc":"A spread made from ground peanuts, commonly used as a sandwich filling and in baking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3739.png"},{"_id":"640c2dd963a319ea671e36fa","name":"Hard Taco Shells","desc":"Hard taco shells are a type of crispy corn tortilla that is shaped like a taco shell. They are often filled with meat, cheese, lettuce, and other toppings to create a classic Mexican-style taco.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36fa.png"},{"_id":"640c2dd963a319ea671e37c1","name":"Couscous","desc":"Small granules of semolina wheat, commonly used as a side dish or as a base for salads.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37c1.png"},{"_id":"640c2dd963a319ea671e37bd","name":"Lamb Leg","desc":"Meat from the leg of a young sheep, commonly used for roasting and grilling.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37bd.png"},{"_id":"640c2dd963a319ea671e379f","name":"Caramel","desc":"A type of candy made by heating sugar and other ingredients until they turn a golden brown color and develop a rich, sweet flavor. Can be used as a topping for desserts, as a flavoring for coffee or cocktails, or eaten on its own as a candy.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e379f.png"},{"_id":"640c2dd963a319ea671e3782","name":"Turmeric","desc":"A bright yellow spice commonly used in Indian and Southeast Asian cuisines, known for its earthy flavor and health benefits.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3782.png"},{"_id":"640c2dd963a319ea671e37f2","name":"Tahini","desc":"A paste made from toasted sesame seeds that is commonly used in Middle Eastern cuisine, particularly as a dip or sauce for dishes like falafel and shawarma.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f2.png"},{"_id":"640c2dd963a319ea671e374d","name":"Red Chilli Powder","desc":"A spice made from dried and ground red chili peppers that is often used to add heat and flavor to dishes such as curries, soups, and stews.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e374d.png"},{"_id":"640c2dd963a319ea671e37e9","name":"Chestnuts","desc":"Chestnuts are a type of nut that grow inside a prickly outer shell. They have a sweet, nutty flavor and can be eaten roasted, boiled, or used in desserts and other culinary applications.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37e9.png"},{"_id":"640c2dd963a319ea671e36b8","name":"Cumin","desc":"A spice that is commonly used in cooking and has a warm, earthy flavor. It is often used in Indian, Middle Eastern, and Mexican cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36b8.png"},{"_id":"640c2dd963a319ea671e379c","name":"Cream Cheese","desc":"A soft, spreadable cheese made from a blend of milk and cream, with a mild flavor and creamy texture. Often used as a topping for bagels, as a base for dips and spreads, or as an ingredient in baking recipes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e379c.png"},{"_id":"640c2dd963a319ea671e373f","name":"Pepper","desc":"A spice made from ground dried peppercorns, commonly used in cooking and as a table seasoning for its pungent and spicy flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e373f.png"},{"_id":"640c2dd963a319ea671e386a","name":"Grand Marnier","desc":"Grand Marnier is a French brand of liqueurs. The brand\'s best-known product is Grand Marnier Cordon Rouge, an orange-flavored liqueur created in 1880 by Alexandre Marnier-Lapostolle. It is made from a blend of Cognac brandy, distilled essence of bitter orange, and sugar. Grand Marnier Cordon Rouge is 40% alcohol.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e386a.png"},{"_id":"640c2dd963a319ea671e36b6","name":"Cubed Feta Cheese","desc":"A salty, tangy cheese that is made from sheep or goat\'s milk. It is commonly used in Greek cuisine and is often crumbled over salads or used in dips and spreads.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36b6.png"},{"_id":"640c2dd963a319ea671e3702","name":"Italian Fennel Sausages","desc":"Pork sausages flavored with fennel seeds and other herbs and spices, commonly used in Italian cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3702.png"},{"_id":"640c2dd963a319ea671e37f0","name":"Kidney Beans","desc":"Red or dark red beans that are kidney-shaped and commonly used in various cuisines around the world, especially in Latin American and Caribbean dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f0.png"},{"_id":"640c2dd963a319ea671e37ef","name":"Roasted Vegetables","desc":"Assortment of vegetables such as bell peppers, onions, carrots, and zucchini that have been seasoned and roasted in the oven until tender and caramelized.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ef.png"},{"_id":"640c2dd963a319ea671e36a6","name":"Cinnamon Stick","desc":"A stick made from the inner bark of cinnamon trees, commonly used as a spice in cooking and baking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36a6.png"},{"_id":"640c2dd963a319ea671e3852","name":"Bean Sprouts","desc":"Bean sprouts are a common ingredient across the world. They are particularly common in Eastern Asian cuisine.\\r\\n\\r\\nThere are two types of common bean sprouts:\\r\\n\\r\\nMung bean sprout is made from the greenish-capped mung beans\\r\\nSoybean sprout is made from yellow, larger-grained soybean\\r\\nIt typically takes one week for them to become fully grown. The sprouted beans are more nutritious than the original beans and they require much less cooking time.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3852.png"},{"_id":"640c2dd963a319ea671e37a5","name":"Mussels","desc":"A type of shellfish with a black, shiny shell and soft, orange flesh, often steamed or boiled and served with garlic butter or white wine sauce.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37a5.png"},{"_id":"640c2dd963a319ea671e3671","name":"Biryani Masala","desc":"Biryani, also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. It can be compared to mixing a curry, later combining it with semi-cooked rice separately. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan. It is made with Indian spices, rice, meat (chicken, goat, beef, lamb, prawn, or fish), vegetables or eggs.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3671.png"},{"_id":"640c2dd963a319ea671e3833","name":"Minced Pork","desc":"Ground pork used in a variety of dishes, such as meatballs, burgers, and stir-fries.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3833.png"},{"_id":"640c2dd963a319ea671e37d7","name":"Walnuts","desc":"Hard-shelled nuts that are rich in healthy fats and protein, often used in baking, snacking, or as a garnish for salads.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d7.png"},{"_id":"640c2dd963a319ea671e376e","name":"Spaghetti","desc":"A type of pasta that is long, thin, and cylindrical in shape. It is commonly used in Italian cuisine and is often served with tomato sauce, meatballs, or other sauces and toppings.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e376e.png"},{"_id":"640c2dd963a319ea671e3793","name":"White Vinegar","desc":"A clear, colorless vinegar made from fermented grains or malt, used for cooking, cleaning, and pickling.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3793.png"},{"_id":"640c2dd963a319ea671e3838","name":"Canola Oil","desc":"A type of vegetable oil made from the rapeseed plant, commonly used for cooking due to its mild flavor and high smoke point.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3838.png"},{"_id":"640c2dd963a319ea671e36c3","name":"Double Cream","desc":"A type of cream that has a high fat content, typically around 48%. It is often used in desserts and sauces, as well as whipped for use as a topping.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36c3.png"},{"_id":"640c2dd963a319ea671e381f","name":"Oats","desc":"A type of cereal grain used for making oatmeal, granola, and other baked goods","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e381f.png"},{"_id":"640c2dd963a319ea671e387f","name":"Quinoa","desc":"Quinoa is a flowering plant in the amaranth family. It is an herbaceous annual plant grown as a crop primarily for its edible seeds; the seeds are rich in protein, dietary fiber, B vitamins, and dietary minerals in amounts greater than in many grains.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e387f.png"},{"_id":"640c2dd963a319ea671e36e3","name":"Garlic","desc":"A bulbous plant related to onions, chives, and shallots, known for its pungent flavor and aroma. It is used in many cuisines around the world and is a staple ingredient in Mediterranean and Asian cooking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36e3.png"},{"_id":"640c2dd963a319ea671e36c6","name":"Egg Plants","desc":"Also known as aubergines, eggplants are a type of vegetable with a deep purple skin and creamy white flesh. They are often used in Mediterranean and Asian cuisine, and can be roasted, grilled, fried, or stewed.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36c6.png"},{"_id":"640c2dd963a319ea671e37e2","name":"Gelatine Leafs","desc":"Gelatin leaves are thin, translucent sheets made from gelatin that are used to set liquids in desserts and other culinary applications.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37e2.png"},{"_id":"640c2dd963a319ea671e380a","name":"Redcurrants","desc":"Small, bright red berries with a tart flavor, often used in jams, jellies, and sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e380a.png"},{"_id":"640c2dd963a319ea671e37a7","name":"Monkfish","desc":"A type of fish with a broad, flat head and a long, tapered body, often used in stews or roasted with herbs and vegetables.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37a7.png"},{"_id":"640c2dd963a319ea671e3879","name":"Persian Cucumber","desc":"Cucumber (Cucumis sativus) is a widely cultivated plant in the gourd family, Cucurbitaceae. It is a creeping vine that bears cucumiform fruits that are used as vegetables. There are three main varieties of cucumber: slicing, pickling, and seedless. Within these varieties, several cultivars have been created. In North America, the term \\"wild cucumber\\" refers to plants in the genera Echinocystis and Marah, but these are not closely related. The cucumber is originally from South Asia, but now grows on most continents. Many different types of cucumber are traded on the global market.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3879.png"},{"_id":"640c2dd963a319ea671e36a8","name":"Coco Sugar","desc":"A natural sweetener made from the sap of coconut palms, commonly used as a substitute for refined sugar.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36a8.png"},{"_id":"640c2dd963a319ea671e3660","name":"Apple Cider Vinegar","desc":"Apple cider vinegar, or cider vinegar, is a vinegar made from fermented apple juice, and used in salad dressings, marinades, vinaigrettes, food preservatives, and chutneys. It is made by crushing apples, then squeezing out the juice. Bacteria and yeast are added to the liquid to start the alcoholic fermentation process, which converts the sugars to alcohol. In a second fermentation step, the alcohol is converted into vinegar by acetic acid-forming bacteria (Acetobacter species). Acetic acid and malic acid combine to give vinegar its sour taste. Apple cider vinegar has no medicinal or nutritional value. There is no high-quality clinical evidence that regular consumption of apple cider vinegar helps to maintain or lose body weight, or is effective to manage blood glucose and lipid levels.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3660.png"},{"_id":"640c2dd963a319ea671e3872","name":"Potatoe Buns","desc":"Potato bread is a form of bread in which potato flour or potato replaces a portion of the regular wheat flour. It is cooked in a variety of ways, including baking it on a hot griddle or pan, or in an oven. It may be leavened or unleavened, and may have a variety of other ingredients baked into it. The ratio of potato to wheat flour varies significantly from recipe to recipe, with some recipes having a majority of potato, and others having a majority of wheat flour. Some recipes call for mashed potatoes, with others calling for dehydrated potato flakes. It is available as a commercial product in many countries, with similar variations in ingredients, cooking method, and other variables.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3872.png"},{"_id":"640c2dd963a319ea671e37ec","name":"Paneer","desc":"Paneer is a type of fresh cheese that is popular in Indian cuisine. It is made by curdling milk with lemon juice or vinegar and then draining the whey. Paneer has a mild, creamy flavor and a crumbly texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ec.png"},{"_id":"640c2dd963a319ea671e3790","name":"White Chocolate Chips","desc":"Small pieces of sweetened, cocoa butter-based chocolate without the addition of cocoa solids, often used in baking and confectionery.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3790.png"},{"_id":"640c2dd963a319ea671e36ec","name":"Golden Syrup","desc":"A thick, amber-colored syrup made from sugar commonly used as a sweetener in baking and desserts.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ec.png"},{"_id":"640c2dd963a319ea671e36e4","name":"Garlic Clove","desc":"A small, bulbous vegetable consisting of several smaller cloves with a pungent flavor commonly used in cooking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36e4.png"},{"_id":"640c2dd963a319ea671e37db","name":"Dark Brown Soft Sugar","desc":"Similar to light brown sugar, but with a stronger molasses flavor and darker color, often used in recipes for gingerbread, baked beans, and barbecue sauce.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37db.png"},{"_id":"640c2dd963a319ea671e3796","name":"Whole Wheat","desc":"A type of wheat that contains the bran, germ, and endosperm, used to make whole wheat flour and products such as bread and pasta.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3796.png"},{"_id":"640c2dd963a319ea671e36b5","name":"Creme Fraiche","desc":"A cultured dairy product that is similar to sour cream but has a milder flavor and is less tangy. It is commonly used as a topping for desserts and savory dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36b5.png"},{"_id":"640c2dd963a319ea671e36e8","name":"Ginger","desc":"A root vegetable with a pungent and spicy flavor commonly used in cooking and herbal medicine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36e8.png"},{"_id":"640c2dd963a319ea671e3731","name":"Oregano","desc":"A herb with a pungent and slightly bitter taste, commonly used in Mediterranean and Mexican cooking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3731.png"},{"_id":"640c2dd963a319ea671e365c","name":"Salmon","desc":"Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish. Salmon are native to tributaries of the North Atlantic (genus Salmo) and Pacific Ocean (genus Oncorhynchus). Many species of salmon have been introduced into non-native environments such as the Great Lakes of North America and Patagonia in South America. Salmon are intensively farmed in many parts of the world.\\r\\n\\r\\nTypically, salmon are anadromous: they hatch in fresh water, migrate to the ocean, then return to fresh water to reproduce. However, populations of several species are restricted to fresh water through their lives. Folklore has it that the fish return to the exact spot where they hatched to spawn. Tracking studies have shown this to be mostly true. A portion of a returning salmon run may stray and spawn in different freshwater systems; the percent of straying depends on the species of salmon. Homing behavior has been shown to depend on olfactory memory. Salmon date back to the Neogene.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365c.png"},{"_id":"640c2dd963a319ea671e383f","name":"Paella Rice","desc":"Paella[a] is a Valencian rice dish that has ancient roots but its modern form originated in the mid-19th century in the area around Albufera lagoon on the east coast of Spain, adjacent to the city of Valencia. Many non-Spaniards view paella as Spain\'s national dish, but most Spaniards consider it to be a regional Valencian dish. Valencians, in turn, regard paella as one of their identifying symbols.\\r\\n\\r\\nTypes of paella include Valencian paella, vegetable paella (Spanish: paella de verduras), seafood paella (Spanish: paella de mariscos), and mixed paella (Spanish: paella mixta), among many others. Valencian paella is believed to be the original recipe and consists of white rice, green beans (bajoqueta and tavella), meat (chicken, duck and rabbit), white beans (garrof\xf3n), snails, and seasoning such as saffron and rosemary. Another very common but seasonal ingredient is artichokes. Seafood paella replaces meat with seafood and omits beans and green vegetables. Mixed paella is a free-style combination of meat from land animals, seafood, vegetables, and sometimes beans. Most paella chefs use bomba rice due to it being less likely to overcook, but Valencians tend to use a slightly stickier (and thus more susceptible to overcooking) variety known as Senia. All types of paellas use olive oil.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383f.png"},{"_id":"640c2dd963a319ea671e37d2","name":"Dried Apricots","desc":"Apricots that have been dried to preserve them, with a chewy texture and sweet, tangy flavor, commonly used in baked goods, trail mixes, and savory dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d2.png"},{"_id":"640c2dd963a319ea671e37c6","name":"Goose Fat","desc":"Fat obtained from the rendered meat of a goose, commonly used for frying or roasting potatoes, vegetables, and meats to add flavor and texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37c6.png"},{"_id":"640c2dd963a319ea671e3712","name":"Lemon Juice","desc":"Lemon juice is the acidic liquid obtained from squeezing or pressing fresh lemons. It is commonly used as a flavoring agent in cooking, baking, and beverages.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3712.png"},{"_id":"640c2dd963a319ea671e3815","name":"Black Pudding","desc":"A type of sausage made from pork blood, suet, and oatmeal, often served as part of a traditional English breakfast.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3815.png"},{"_id":"640c2dd963a319ea671e37d1","name":"Ricotta","desc":"A soft, creamy Italian cheese with a mild, slightly sweet flavor and grainy texture, often used in Italian dishes like lasagna, ravioli, and cannoli.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d1.png"},{"_id":"640c2dd963a319ea671e3684","name":"Carrots","desc":"A root vegetable that is commonly used in cooking and baking, with a sweet and earthy flavor, and high in vitamin A and other nutrients.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3684.png"},{"_id":"640c2dd963a319ea671e37fc","name":"Swede","desc":"A root vegetable that is also known as rutabaga or yellow turnip, and is often used in stews and soups, as well as mashed as a side dish.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37fc.png"},{"_id":"640c2dd963a319ea671e36af","name":"Coriander","desc":"A herb commonly used in cooking that has a citrusy, slightly sweet flavor. It is also known as cilantro in some countries.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36af.png"},{"_id":"640c2dd963a319ea671e3668","name":"Basil Leaves","desc":"Basil, also called great basil, is a culinary herb of the family Lamiaceae (mints).\\r\\n","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3668.png"},{"_id":"640c2dd963a319ea671e3678","name":"Bread","desc":"A staple food made from flour, water, and yeast or other leavening agents, which is typically baked in an oven and used for sandwiches, toast, and other dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3678.png"},{"_id":"640c2dd963a319ea671e3720","name":"Minced Garlic","desc":"Garlic cloves that have been finely chopped or crushed, commonly used as a flavoring in various cuisines.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3720.png"},{"_id":"640c2dd963a319ea671e37af","name":"Tomato","desc":"A juicy, edible fruit that is often used as a vegetable in cooking. Tomatoes are a good source of vitamin C, potassium, and lycopene, a powerful antioxidant.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37af.png"},{"_id":"640c2dd963a319ea671e380b","name":"Blackberries","desc":"Sweet and juicy berries with a dark color and slightly tart taste, often used in jams, pies, and smoothies.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e380b.png"},{"_id":"640c2dd963a319ea671e387a","name":"Mayonnaise","desc":"Mayonnaise, informally mayo is a thick cold condiment or dressing commonly used in sandwiches and composed salads or on French fries. It is also a base in sauces such as Tartar sauce.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e387a.png"},{"_id":"640c2dd963a319ea671e367f","name":"Cacao","desc":"The dried and fermented seed of the cocoa tree, which is processed into cocoa powder and chocolate products, and used in baking, confectionery, and other food products.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e367f.png"},{"_id":"640c2dd963a319ea671e36c4","name":"Dried Oregano","desc":"A dried herb that is commonly used in Mediterranean and Mexican cuisine. It has a pungent, slightly bitter flavor that pairs well with tomato-based sauces, meats, and vegetables.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36c4.png"},{"_id":"640c2dd963a319ea671e3736","name":"Parmesan Cheese","desc":"See Parmesan.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3736.png"},{"_id":"640c2dd963a319ea671e36ee","name":"Granulated Sugar","desc":"A common sweetener made from sugar cane or sugar beet that has been refined and granulated.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ee.png"},{"_id":"640c2dd963a319ea671e36ef","name":"Grape Tomatoes","desc":"A small, bite-sized tomato variety with a sweet and slightly tangy flavor commonly used in salads and as a snack.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ef.png"},{"_id":"640c2dd963a319ea671e3703","name":"Italian Seasoning","desc":"A blend of dried herbs and spices commonly used in Italian cuisine, including basil, oregano, rosemary, thyme, and garlic.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3703.png"},{"_id":"640c2dd963a319ea671e3897","name":"Ciabatta","desc":"Ciabatta is an Italian white bread made from wheat flour, water, salt, yeast and olive oil, created in 1982 by a baker in Adria, province of Rovigo, Veneto, Italy, in response to the popularity of French baguettes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3897.png"},{"_id":"640c2dd963a319ea671e3755","name":"Rice Stick Noodles","desc":"Thick, flat noodles made from rice flour and water and commonly used in Southeast Asian cuisine, such as in pad see ew or char kway teow.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3755.png"},{"_id":"640c2dd963a319ea671e365b","name":"Chicken","desc":"The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. There are more chickens in the world than any other bird or domesticated fowl. Humans keep chickens primarily as a source of food (consuming both their meat and eggs) and, less commonly, as pets. Originally raised for cockfighting or for special ceremonies, chickens were not kept for food until the Hellenistic period (4th\u20132nd centuries BC).\\r\\n\\r\\nGenetic studies have pointed to multiple maternal origins in South Asia, Southeast Asia, and East Asia, but with the clade found in the Americas, Europe, the Middle East and Africa originating in the Indian subcontinent. From ancient India, the domesticated chicken spread to Lydia in western Asia Minor, and to Greece by the 5th century BC. Fowl had been known in Egypt since the mid-15th century BC, with the \\"bird that gives birth every day\\" having come to Egypt from the land between Syria and Shinar, Babylonia, according to the annals of Thutmose III.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365b.png"},{"_id":"640c2dd963a319ea671e3686","name":"Cashews","desc":"Same as \'Cashew Nuts\', a type of nut that is often used in cooking and snacking, with a mild, buttery flavor and a creamy texture when roasted or ground into a paste.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3686.png"},{"_id":"640c2dd963a319ea671e372d","name":"Onion Salt","desc":"A seasoning made from a mixture of dried onion powder and salt.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e372d.png"},{"_id":"640c2dd963a319ea671e3715","name":"Lettuce","desc":"Lettuce is a leafy green vegetable that is commonly used in salads, sandwiches, and as a garnish. There are many different varieties of lettuce, including romaine, iceberg, and butterhead, each with its own unique flavor and texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3715.png"},{"_id":"640c2dd963a319ea671e366d","name":"Beef Fillet","desc":"Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\\r\\n\\r\\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e366d.png"},{"_id":"640c2dd963a319ea671e3848","name":"Doubanjiang","desc":"Doubanjiang (IPA: [to\u0302upa\u0302nt\u0255ja\u0302\u014B]), or simply Douban, or Toban-djan, Chili bean sauce, is a spicy, salty paste made from fermented broad beans, soybeans, salt, rice, and various spices. Doubanjiang exists in plain and spicy versions, with the latter containing red chili peppers and called la doubanjiang (\u8FA3\u8C46\u74E3\u9171; pinyin: l\xe0 d\xf2ub\xe0nji\xe0ng; l\xe0 meaning \\"hot\\" or \\"spicy\\").\\r\\n\\r\\nIt is used particularly in Sichuan cuisine, and in fact, the people of the province commonly refer to it as \\"the soul of Sichuan cuisine\\". A particularly well-known variety is called Pixian Douban (simplified Chinese: \u90EB\u53BF\u8C46\u74E3; traditional Chinese: \u90EB\u7E23\u8C46\u74E3; pinyin: P\xedxi\xe0n d\xf2ub\xe0n), named after the district of Pixian, Sichuan.[1]\\r\\n\\r\\nThis sauce is sometimes stir-fried with oil and eaten with rice or noodles as a quick meal, and is also commonly used as a primary flavoring for fried tofu dishes and cold tofu salads. It is also frequently mixed with instant noodles.\\r\\n\\r\\nIn many Chinese communities and food factories, doubanjiang is produced with only soybeans and salt, and does not contain the broad beans or chili peppers typical of Sichuan-style doubanjiang.\\r\\n\\r\\nIn Korean cuisine, a similar form of bean paste is called doenjang.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3848.png"},{"_id":"640c2dd963a319ea671e383e","name":"Baby Aubergine","desc":"Eggplant (Solanum melongena) or aubergine is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America, Australia and New Zealand; in British English, it is aubergine, and in South Asia and South Africa, brinjal.\\r\\n\\r\\nThe fruit is widely used in cooking. As a member of the genus Solanum, it is related to the tomato and the potato. It was originally domesticated from the wild nightshade species, the thorn or bitter apple, S. incanum, probably with two independent domestications, one in South Asia and one in East Asia.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383e.png"},{"_id":"640c2dd963a319ea671e36ff","name":"Hot Beef Stock","desc":"Hot beef stock is a flavorful liquid made by simmering beef bones and vegetables in water. It is commonly used as a base for soups, stews, and sauces to add richness and depth of flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ff.png"},{"_id":"640c2dd963a319ea671e3839","name":"Cod","desc":"A type of fish that is commonly used in cooking due to its mild flavor and versatility, and is often used in dishes such as fish and chips.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3839.png"},{"_id":"640c2dd963a319ea671e3809","name":"Mixed Peel","desc":"A mixture of chopped candied citrus peel, often used in baking and cooking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3809.png"},{"_id":"640c2dd963a319ea671e370d","name":"Lamb Mince","desc":"Also known as ground lamb, lamb mince is made by grinding lamb meat and can be used in a variety of dishes, including meatballs, burgers, and shepherd\'s pie.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e370d.png"},{"_id":"640c2dd963a319ea671e378b","name":"Vegetable Stock Cube","desc":"A dehydrated and compressed form of vegetable stock used to add flavor to dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e378b.png"},{"_id":"640c2dd963a319ea671e3690","name":"Cheese Curds","desc":"Fresh cheese that has not yet been aged. It has a mild, slightly salty flavor and a springy, squeaky texture. It is often used in dishes such as poutine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3690.png"},{"_id":"640c2dd963a319ea671e3794","name":"White Wine","desc":"A type of wine made from white grapes, often used in cooking for its acidity and fruity flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3794.png"},{"_id":"640c2dd963a319ea671e3851","name":"Gochujang","desc":"Gochujang or red chili paste is a savory, sweet, and spicy fermented condiment made from chili powder, glutinous rice, meju powder, yeotgireum, and salt.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3851.png"},{"_id":"640c2dd963a319ea671e37ce","name":"Tomato Sauce","desc":"A sauce made from cooked, pureed tomatoes that is used as a base for many Italian and Mediterranean dishes like pasta sauces, pizzas, and stews.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ce.png"},{"_id":"640c2dd963a319ea671e3697","name":"Chicken Thighs","desc":"A cut of chicken meat that comes from the thigh of the bird. It is dark and flavorful, and can be cooked in a variety of ways, such as baking, frying, or grilling.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3697.png"},{"_id":"640c2dd963a319ea671e3808","name":"Custard","desc":"A sweet dessert made with milk, sugar, eggs, and vanilla, thickened with cornstarch or flour.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3808.png"},{"_id":"640c2dd963a319ea671e3743","name":"Plain Flour","desc":"A finely ground flour made from wheat that is often used as a basic ingredient in many recipes, including cakes, breads, and pastries.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3743.png"},{"_id":"640c2dd963a319ea671e3767","name":"Shredded Monterey Jack Cheese","desc":"Shredded Monterey Jack cheese is a type of cheese that is commonly used in Mexican cuisine. It has a mild flavor and a creamy texture, and melts easily, making it ideal for dishes like nachos, quesadillas, and tacos.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3767.png"},{"_id":"640c2dd963a319ea671e378a","name":"Vegetable Stock","desc":"A liquid made by simmering vegetables in water with herbs and spices, used as a base for soups, stews, and sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e378a.png"},{"_id":"640c2dd963a319ea671e36b4","name":"Cream","desc":"A dairy product that is made by separating the cream from milk. It is commonly used in cooking and baking to add richness and flavor to dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36b4.png"},{"_id":"640c2dd963a319ea671e387c","name":"Rhubarb","desc":"Rhubarb is a general term used for the cultivated plants in the genus Rheum in the family Polygonaceae. It is a herbaceous perennial growing from short, thick rhizomes. Historically, different plants have been called \\"rhubarb\\" in English.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e387c.png"},{"_id":"640c2dd963a319ea671e36ca","name":"Eggs","desc":"A reproductive cell laid by female animals, often used in baking and cooking as a binding agent or to add texture and flavor","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ca.png"},{"_id":"640c2dd963a319ea671e3827","name":"Prosciutto","desc":"A thinly sliced, dry-cured ham from Italy, often used as a topping for pizzas and pastas or served on charcuterie boards","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3827.png"},{"_id":"640c2dd963a319ea671e36f6","name":"Ground Almonds","desc":"Ground almonds are finely powdered almonds that can be used as a gluten-free alternative to wheat flour in baking or as a topping for dishes like oatmeal or yogurt.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36f6.png"},{"_id":"640c2dd963a319ea671e372b","name":"Oil","desc":"A cooking ingredient that is derived from various sources, such as plants, nuts, seeds, and animals, and is often used for frying, saut\xe9ing, and as a salad dressing.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e372b.png"},{"_id":"640c2dd963a319ea671e3894","name":"Cider","desc":"Cider (/\u02C8sa\u026Ad\u0259r/ SY-d\u0259r) is an alcoholic beverage made from the fermented juice of apples. Cider is widely available in the United Kingdom (particularly in the West Country) and the Republic of Ireland. The UK has the world\'s highest per capita consumption, as well as its largest cider-producing companies. Ciders from the South West of England are generally stronger. Cider is also popular in many Commonwealth countries, such as India, Canada, Australia, and New Zealand. As well as the UK and its former colonies, cider is popular in Portugal (mainly in Minho and Madeira), France (particularly Normandy and Brittany), northern Italy (Piedmont and Friuli), and northern Spain (especially the Principality of Asturias and the Basque Country). Central Europe also has its own types of cider with Rhineland-Palatinate and Hesse producing a particularly tart version known as Apfelwein. In the U.S., varieties of fermented cider are often called hard cider to distinguish alcoholic cider from non-alcoholic apple cider or \\"sweet cider\\", also made from apples. In Canada, cider cannot be called cider if there are no apples. Furthermore, according to the Food and Drug Regulations in Canada, cider cannot contain less than 2.5% or over 13% absolute alcohol by volume.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3894.png"},{"_id":"640c2dd963a319ea671e37dd","name":"Milk Chocolate","desc":"A type of chocolate that is made with milk powder, sugar, and cocoa solids. It has a creamy and sweet taste.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37dd.png"},{"_id":"640c2dd963a319ea671e3723","name":"Monterey Jack Cheese","desc":"A semi-hard, American cheese that is mild in flavor and melts easily, making it a popular choice for sandwiches, burgers, and Mexican cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3723.png"},{"_id":"640c2dd963a319ea671e366e","name":"Beef Gravy","desc":"Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\\r\\n\\r\\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e366e.png"},{"_id":"640c2dd963a319ea671e367e","name":"Butter","desc":"A dairy product made from churning cream or milk, with a high fat content and a creamy, rich flavor that is often used in cooking and baking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e367e.png"},{"_id":"640c2dd963a319ea671e3869","name":"Candied Peel","desc":"Candied fruit, also known as crystallized fruit or glac\xe9 fruit, has existed since the 14th century. Whole fruit, smaller pieces of fruit, or pieces of peel, are placed in heated sugar syrup, which absorbs the moisture from within the fruit and eventually preserves it.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3869.png"},{"_id":"640c2dd963a319ea671e3734","name":"Parma Ham","desc":"A type of dry-cured ham that is typically sliced thinly and served uncooked, originating from the Parma region of Italy.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3734.png"},{"_id":"640c2dd963a319ea671e3661","name":"Asparagus","desc":"Asparagus, or garden asparagus, folk name sparrow grass, scientific name Asparagus officinalis, is a perennial flowering plant species in the genus Asparagus. Its young shoots are used as a spring vegetable.\\r\\n\\r\\nIt was once classified in the lily family, like the related Allium species, onions and garlic. However, genetic research places lilies, Allium, and asparagus in three separate families\u2014the Liliaceae, Amaryllidaceae, and Asparagaceae, respectively\u2014with the Amaryllidaceae and Asparagaceae being grouped together in the order Asparagales. Sources differ as to the native range of Asparagus officinalis, but generally include most of Europe and western temperate Asia. It is widely cultivated as a vegetable crop.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3661.png"},{"_id":"640c2dd963a319ea671e36f1","name":"Green Beans","desc":"A long and slender vegetable with a mild, slightly sweet flavor commonly used in salads, stir-fries, and as a side dish.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36f1.png"},{"_id":"640c2dd963a319ea671e3727","name":"Mustard","desc":"A condiment that is made from ground mustard seeds, vinegar, and other seasonings, and is often used as a spread, sauce, or flavoring in cooking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3727.png"},{"_id":"640c2dd963a319ea671e3768","name":"Small Potatoes","desc":"Small potatoes are a variety of potatoes that are small in size, typically less than two inches in diameter. They can be used in a variety of dishes and are often roasted, boiled, or mashed.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3768.png"},{"_id":"640c2dd963a319ea671e3779","name":"Thai Fish Sauce","desc":"A salty, pungent sauce made from fermented fish, used as a seasoning in many Southeast Asian dishes, particularly in Thai cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3779.png"},{"_id":"640c2dd963a319ea671e3663","name":"Baby Plum Tomatoes","desc":"The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America. The Nahuatl (Aztec language) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.[3][4] Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico. The Aztecs used tomatoes in their cooking at the time of the Spanish conquest of the Aztec Empire, and after the Spanish encountered the tomato for the first time after their contact with the Aztecs, they brought the plant to Europe. From there, the tomato was introduced to other parts of the European-colonized world during the 16th century.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3663.png"},{"_id":"640c2dd963a319ea671e3748","name":"Puff Pastry","desc":"A light, flaky pastry that is made by layering butter and dough and then repeatedly folding and rolling the dough to create many layers.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3748.png"},{"_id":"640c2dd963a319ea671e37fb","name":"Suet","desc":"A type of animal fat that is commonly used in British cuisine for making pastry and puddings, and is particularly associated with dishes like Christmas pudding and steak and kidney pie.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37fb.png"},{"_id":"640c2dd963a319ea671e368e","name":"Cheddar Cheese","desc":"A hard, yellow cheese that is typically sharp and tangy in flavor. It is often used in sandwiches, on crackers, or as a topping for baked dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e368e.png"},{"_id":"640c2dd963a319ea671e382d","name":"White Chocolate","desc":"A type of chocolate made with cocoa butter, sugar, milk solids, and vanilla, without cocoa solids.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e382d.png"},{"_id":"640c2dd963a319ea671e37c8","name":"Fennel","desc":"A herb with a sweet, anise-like flavor commonly used in Mediterranean and Middle Eastern cuisine to add flavor to dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37c8.png"},{"_id":"640c2dd963a319ea671e3850","name":"Duck Sauce","desc":"Duck sauce (or orange sauce) is a condiment with a sweet and sour flavor and a translucent orange appearance similar to a thin jelly. Offered at Chinese-American restaurants, it is used as a dip for deep-fried dishes such as wonton strips, spring rolls, egg rolls, duck, chicken, fish, or with rice or noodles. It is often provided in single-serving packets along with soy sauce, mustard, hot sauce or red chili powder. It may be used as a glaze on foods, such as poultry. Despite its name the sauce is not prepared using duck meat.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3850.png"},{"_id":"640c2dd963a319ea671e3722","name":"Mint","desc":"A fragrant herb that is often used as a flavoring in cooking and beverages, and is known for its refreshing and cooling properties.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3722.png"},{"_id":"640c2dd963a319ea671e37d3","name":"Capers","desc":"Small, pickled flower buds with a tangy, slightly salty flavor, commonly used in Mediterranean and Italian cuisine to add flavor to dishes like pasta sauces, salads, and fish dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d3.png"},{"_id":"640c2dd963a319ea671e3753","name":"Rice","desc":"Edible starchy grain that is cultivated in many parts of the world and is a staple food for a large part of the world\'s population.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3753.png"},{"_id":"640c2dd963a319ea671e370f","name":"Lean Minced Beef","desc":"Also known as ground beef, lean minced beef is made by grinding beef meat and has a lower fat content than regular ground beef. It can be used in a variety of dishes, including meatballs, burgers, and chili.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e370f.png"},{"_id":"640c2dd963a319ea671e3810","name":"Blue Food Colouring","desc":"A type of food coloring used to add a bright blue color to foods and drinks.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3810.png"},{"_id":"640c2dd963a319ea671e369d","name":"Chinese Broccoli","desc":"Also known as Gai Lan, it is a leafy green vegetable commonly used in Chinese cuisine, similar to broccoli but with a slightly bitter taste and thicker stems.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e369d.png"},{"_id":"640c2dd963a319ea671e379a","name":"Zucchini","desc":"A type of summer squash with a green or yellowish skin and a mild, slightly sweet flavor. Commonly used in salads, soups, and stir-fries, and can also be grilled or roasted as a side dish.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e379a.png"},{"_id":"640c2dd963a319ea671e3814","name":"Almonds","desc":"A type of nut with a sweet and nutty flavor, commonly used in baking and as a snack.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3814.png"},{"_id":"640c2dd963a319ea671e3776","name":"Sunflower Oil","desc":"An oil that is made from sunflower seeds and is commonly used in cooking and baking. It is low in saturated fat and high in vitamin E, and is often used in salad dressings, marinades, and frying.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3776.png"},{"_id":"640c2dd963a319ea671e37cc","name":"Butter Beans","desc":"Large, creamy white beans with a buttery texture and mild, nutty flavor, often used in soups, stews, and salads.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37cc.png"},{"_id":"640c2dd963a319ea671e3762","name":"Self-raising Flour","desc":"Self-raising flour is a type of flour that has a leavening agent, usually baking powder, already added to it. This allows baked goods to rise without the need for yeast or other leavening agents.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3762.png"},{"_id":"640c2dd963a319ea671e377d","name":"Tomato Ketchup","desc":"A thick, sweet and tangy sauce made from tomatoes, vinegar, and sugar, commonly used as a condiment for burgers, hot dogs, and french fries.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e377d.png"},{"_id":"640c2dd963a319ea671e3857","name":"Rum","desc":"Rum is a distilled alcoholic drink made from sugarcane byproducts, such as molasses, or directly from sugarcane juice, by a process of fermentation and distillation. The distillate, a clear liquid, is then usually aged in oak barrels.\\r\\n\\r\\nThe majority of the world\'s rum production occurs in the Caribbean and Latin America. Rum is also produced in Australia, Portugal, Austria, Canada, Fiji, India, Japan, Mauritius, Nepal, New Zealand, the Philippines, Reunion Island, South Africa, Spain, Sweden, Taiwan, Thailand, the United Kingdom and the United States.\\r\\n\\r\\nRums are produced in various grades. Light rums are commonly used in cocktails, whereas \\"golden\\" and \\"dark\\" rums were typically consumed straight or neat, on the rocks, or used for cooking, but are now commonly consumed with mixers. Premium rums are also available, made to be consumed either straight or iced.\\r\\n\\r\\nRum plays a part in the culture of most islands of the West Indies as well as in The Maritimes and Newfoundland. This drink has famous associations with the Royal Navy (where it was mixed with water or beer to make grog) and piracy (where it was consumed as bumbo). Rum has also served as a popular medium of economic exchange, used to help fund enterprises such as slavery (see Triangular trade), organized crime, and military insurgencies (e.g., the American Revolution and Australia\'s Rum Rebellion).","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3857.png"},{"_id":"640c2dd963a319ea671e3847","name":"Tofu","desc":"Tofu, also known as bean curd, is a food cultivated by coagulating soy milk and then pressing the resulting curds into soft white blocks. It is a component in East Asian and Southeast Asian cuisines. Tofu can be soft, firm, or extra firm. Tofu has a subtle flavor and can be used in savory and sweet dishes. It is often seasoned or marinated to suit the dish.\\r\\n\\r\\nTofu has a low calorie count and relatively large amounts of protein. It is high in iron, and it can have a high calcium or magnesium content, depending on the coagulants used in manufacturing (e.g. calcium chloride, calcium sulfate, magnesium sulfate).","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3847.png"},{"_id":"640c2dd963a319ea671e388b","name":"Kielbasa","desc":"Kielbasa is any type of meat sausage from Poland, and a staple of Polish cuisine. In American English the word typically refers to a coarse, U-shaped smoked sausage of any kind of meat, which closely resembles the Wiejska sausage in British English.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e388b.png"},{"_id":"640c2dd963a319ea671e3771","name":"Squash","desc":"A type of vegetable that comes in many different varieties, including butternut, acorn, and spaghetti squash. It is high in vitamins and fiber, and can be roasted, grilled, baked, or used in soups and stews.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3771.png"},{"_id":"640c2dd963a319ea671e3826","name":"Goats Cheese","desc":"A soft, tangy cheese made from the milk of goats, often used in salads, sandwiches, and as a topping for pizzas and pastas","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3826.png"},{"_id":"640c2dd963a319ea671e37c3","name":"Turkey Mince","desc":"Ground meat made from turkey, commonly used as a lower-fat alternative to beef mince in a variety of dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37c3.png"},{"_id":"640c2dd963a319ea671e37d5","name":"Raspberries","desc":"Small, red berries with a sweet-tart flavor and delicate texture, commonly used in desserts like pies, tarts, and cheesecakes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d5.png"},{"_id":"640c2dd963a319ea671e3863","name":"Goat Meat","desc":"The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the goat\u2014antelope subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur, and skins across much of the world. Milk from goats is often turned into goat cheese.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3863.png"},{"_id":"640c2dd963a319ea671e3797","name":"Wholegrain Bread","desc":"Bread made from flour that contains the whole grain, providing more fiber and nutrients than refined flour bread.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3797.png"},{"_id":"640c2dd963a319ea671e3699","name":"Chili Powder","desc":"A blend of ground chili peppers, cumin, garlic powder, and other spices. It is often used to add heat and flavor to dishes such as chili, stews, and marinades.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3699.png"},{"_id":"640c2dd963a319ea671e3898","name":"Buckwheat","desc":"Buckwheat (Fagopyrum esculentum), or common buckwheat, is a plant cultivated for its grain-like seeds and as a cover crop. The name \\"buckwheat\\" is used for several other species, such as Fagopyrum tataricum, a domesticated food plant raised in Asia. Despite the name, buckwheat is not closely related to wheat, as it is not a grass. Instead, buckwheat is related to sorrel, knotweed, and rhubarb. Buckwheat is referred to as a pseudocereal because its seeds\' culinary use is the same as cereals\', owing to their composition of complex carbohydrates.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3898.png"},{"_id":"640c2dd963a319ea671e3868","name":"Orange Blossom Water","desc":"Orange flower water, or orange blossom water, is the clear, perfumed by-product of the distillation of fresh bitter-orange blossoms for their essential oil.\\r\\n\\r\\nUses\\r\\nMediterranean Relief.jpg\\r\\nThis essential water has traditionally been used as an aromatizer in many Mediterranean traditional dessert dishes, such as in France for the gibassier and pompe \xe0 l\'huile or in Spain for the Rosc\xf3n de Reyes (King cake), or the Samsa in Tunisia or in Moroccan coffee, but has more recently found its way into other cuisines. For example, orange flower water is used in Europe to flavor madeleines, in Mexico to flavor little wedding cakes and Pan de muerto, and in the United States to make orange blossom scones and marshmallows. Orange flower water is also used as an ingredient in some cocktails, such as the Ramos Gin Fizz. In Malta and many North African as well as Middle Eastern countries, orange blossom water is widely used as medicine for stomach ache and given to small children as well as adults.\\r\\n\\r\\nOrange flower water has been a traditional ingredient used often in North African as well as in Middle Eastern cooking. In Arab variants of baklava, orange blossom water is often mixed with the sweet syrup for flavor. Orange blossoms are believed to be used in this manner because they are seen as the traditional bridal flower and, therefore, symbolize purity (white, small and delicate). It is also added to plain water in the Middle East to mask high mineral content and other unpleasant flavors (e.g. those arising from storage in a qulla, a type of clay jug that keeps water cool in a manner similar to the zeer); some add the fragrance irrespective of the taste of the plain water.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3868.png"},{"_id":"640c2dd963a319ea671e3679","name":"Breadcrumbs","desc":"Small pieces of bread that have been dried and ground into a coarse powder, often used as a coating or filler in recipes such as meatballs, stuffing, and casseroles.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3679.png"},{"_id":"640c2dd963a319ea671e373a","name":"Peanut Oil","desc":"An oil made from pressing peanuts, commonly used in Asian and African cooking for its high smoke point and mild flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e373a.png"},{"_id":"640c2dd963a319ea671e384d","name":"Starch","desc":"Starch or amylum is a polymeric carbohydrate consisting of a large number of glucose units joined by glycosidic bonds. This polysaccharide is produced by most green plants as energy storage. It is the most common carbohydrate in human diets and is contained in large amounts in staple foods like potatoes, wheat, maize (corn), rice, and cassava.\\r\\n\\r\\nPure starch is a white, tasteless and odorless powder that is insoluble in cold water or alcohol. It consists of two types of molecules: the linear and helical amylose and the branched amylopectin. Depending on the plant, starch generally contains 20 to 25% amylose and 75 to 80% amylopectin by weight.[4] Glycogen, the glucose store of animals, is a more highly branched version of amylopectin.\\r\\n\\r\\nIn industry, starch is converted into sugars, for example by malting, and fermented to produce ethanol in the manufacture of beer, whisky and biofuel. It is processed to produce many of the sugars used in processed foods. Mixing most starches in warm water produces a paste, such as wheatpaste, which can be used as a thickening, stiffening or gluing agent. The biggest industrial non-food use of starch is as an adhesive in the papermaking process. Starch can be applied to parts of some garments before ironing, to stiffen them.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e384d.png"},{"_id":"640c2dd963a319ea671e366b","name":"Bay Leaves","desc":"The bay leaf is an aromatic leaf commonly used in cooking. It can be used whole, or as dried and ground.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e366b.png"},{"_id":"640c2dd963a319ea671e3830","name":"Custard Powder","desc":"A powdered mixture used to make custard by adding milk and sugar and heating until thickened.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3830.png"},{"_id":"640c2dd963a319ea671e3696","name":"Chicken Stock","desc":"A flavorful liquid made by simmering chicken bones, vegetables, and herbs in water. It is often used as a base for soups, stews, and sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3696.png"},{"_id":"640c2dd963a319ea671e3834","name":"Creamed Corn","desc":"A dish made from corn kernels that have been cooked in milk and butter, and then pureed to create a creamy texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3834.png"},{"_id":"640c2dd963a319ea671e36dd","name":"Fresh Basil","desc":"An aromatic herb with green leaves that are used in many cuisines around the world, particularly in Italian cuisine. It has a sweet, slightly peppery flavor and a strong, pleasant aroma.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36dd.png"},{"_id":"640c2dd963a319ea671e36d8","name":"Flour Tortilla","desc":"A type of soft, thin, unleavened flatbread made from wheat flour commonly used in Mexican cuisine for making burritos, tacos, and quesadillas.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36d8.png"},{"_id":"640c2dd963a319ea671e37fa","name":"Vine Tomatoes","desc":"Tomatoes that are grown on a vine and are typically smaller and more flavorful than regular tomatoes, and are commonly used in salads and as a topping for pizzas and bruschetta.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37fa.png"},{"_id":"640c2dd963a319ea671e367d","name":"Brown Sugar","desc":"A type of sugar that has a distinctive brown color and a rich, molasses-like flavor, often used in baking and cooking to add sweetness and depth of flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e367d.png"},{"_id":"640c2dd963a319ea671e374c","name":"Red Chilli","desc":"A fresh, spicy pepper that is often used in cooking to add heat and flavor to dishes such as curries, stir-fries, and marinades.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e374c.png"},{"_id":"640c2dd963a319ea671e37de","name":"Dark Chocolate","desc":"A type of chocolate that is made with higher cocoa solids and little to no milk. It has a rich and bitter taste.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37de.png"},{"_id":"640c2dd963a319ea671e386e","name":"Mincemeat","desc":"Mincemeat is a mixture of chopped dried fruit, distilled spirits and spices, and sometimes beef suet, beef, or venison. Originally, mincemeat always contained meat. Many modern recipes contain beef suet, though vegetable shortening is sometimes used in its place.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e386e.png"},{"_id":"640c2dd963a319ea671e383d","name":"Ground Beef","desc":"Beef that has been ground or minced into small pieces, commonly used in dishes such as hamburgers, meatballs, and tacos.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383d.png"},{"_id":"640c2dd963a319ea671e37df","name":"Pumpkin","desc":"A round, orange vegetable with a thick shell and seeds inside. It is often used in cooking and baking for its sweet and earthy flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37df.png"},{"_id":"640c2dd963a319ea671e3832","name":"Frozen Peas","desc":"Peas that have been blanched and frozen to preserve their flavor and texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3832.png"},{"_id":"640c2dd963a319ea671e366c","name":"Beef Brisket","desc":"Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\\r\\n\\r\\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e366c.png"},{"_id":"640c2dd963a319ea671e36eb","name":"Ginger Paste","desc":"A concentrated paste made from ginger often used as a flavoring in cooking and baking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36eb.png"},{"_id":"640c2dd963a319ea671e3695","name":"Chicken Legs","desc":"A cut of chicken meat that comes from the leg of the bird. It is dark and flavorful, and can be cooked in a variety of ways, such as baking, frying, or grilling.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3695.png"},{"_id":"640c2dd963a319ea671e376a","name":"Smoky Paprika","desc":"Smoky paprika is another name for smoked paprika, which is a type of paprika that has been smoked over wood to give it a smoky flavor. It is commonly used in Spanish and Mexican cuisine, and can be used to add flavor to meats, stews, and soups.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e376a.png"},{"_id":"640c2dd963a319ea671e3890","name":"Jam","desc":"Fruit preserves are preparations of fruits, vegetables and sugar, often stored in glass jam jars and Mason jars.\\r\\n\\r\\nMany varieties of fruit preserves are made globally, including sweet fruit preserves, such as those made from strawberry or apricot, and savory preserves, such as those made from tomatoes or squash. The ingredients used and how they are prepared determine the type of preserves; jams, jellies, and marmalades are all examples of different styles of fruit preserves that vary based upon the fruit used. In English, the word, in plural form, \\"preserves\\" is used to describe all types of jams and jellies.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3890.png"},{"_id":"640c2dd963a319ea671e3873","name":"Ground Pork","desc":"Ground meat, called mince or minced meat outside of North America (i.e. in U.K. and Commonwealth countries), and keema or qeema (Hindustani: \u0915\u093C\u0940\u092E\u093E (Devanagari), \u0642\u06CC\u0645\u06C1 (Nastaleeq), (pronounced [\u02C8qi\u02D0ma\u02D0])) in the Indian subcontinent, is meat finely chopped by a meat grinder or a chopping knife. A common type of ground meat is ground beef, but many other types of meats are prepared in a similar fashion, including pork, lamb, and poultry. In the Indian subcontinent, both mutton and goat meat are also minced to produce keema.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3873.png"},{"_id":"640c2dd963a319ea671e377b","name":"Thai Red Curry Paste","desc":"A spicy blend of herbs and spices, including red chilies, lemongrass, and ginger, used as a base for Thai red curry.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e377b.png"},{"_id":"640c2dd963a319ea671e379b","name":"Pretzels","desc":"A type of baked snack food made from dough that is shaped into a distinctive knot or twisted shape, then boiled in water and baked. Often served as a snack with dips or as a side dish with beer.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e379b.png"},{"_id":"640c2dd963a319ea671e371b","name":"Marjoram","desc":"Marjoram is a herb that is commonly used as a seasoning for meat, fish, and vegetable dishes. It has a slightly sweet and floral flavor, and is often used in Mediterranean and Middle Eastern cuisines.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e371b.png"},{"_id":"640c2dd963a319ea671e37a3","name":"Clotted Cream","desc":"A thick, rich cream made by heating unpasteurized cow\'s milk until a layer of cream forms on the surface and is then skimmed off.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37a3.png"},{"_id":"640c2dd963a319ea671e37ee","name":"Lentils","desc":"Lentils are a type of legume that are commonly used in soups, stews, salads, and other culinary applications. They have a mild, nutty flavor and are high in protein, fiber, and other nutrients.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ee.png"},{"_id":"640c2dd963a319ea671e37e3","name":"Peanut Brittle","desc":"Peanut brittle is a type of confection made with sugar, corn syrup, peanuts, and butter. It is cooked to a hard, brittle consistency and can be broken into pieces for snacking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37e3.png"},{"_id":"640c2dd963a319ea671e3756","name":"Rice Vermicelli","desc":"Thin, translucent noodles made from rice flour and water and commonly used in Southeast Asian cuisine, such as in bun or mi xao don.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3756.png"},{"_id":"640c2dd963a319ea671e3864","name":"Black Beans","desc":"The black turtle bean is a small, shiny variety of the common bean (Phaseolus vulgaris) especially popular in Latin American cuisine, though it can also be found in the Cajun and Creole cuisines of south Louisiana. Like most common beans, it is native to the Americas, but has been introduced around the world. It is also used in East Indian cooking, Punjabi cuisine, and in Maharashtrian cuisine, it is known as Kala Ghevada. It is used interchangeably with vigna mungo (black gram) in countries such as the United States. The black turtle bean is often simply called the black bean (frijoles negros, zaragoza, jud\xeda negra, poroto negro, or caraota o habichuela negra in Spanish; and feij\xe3o preto in Portuguese), although this terminology can cause confusion with other black beans.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3864.png"},{"_id":"640c2dd963a319ea671e36ac","name":"Colby Jack Cheese","desc":"A semi-hard cheese made from cow\'s milk, with a mild flavor and creamy texture. It is a combination of Colby and Monterey Jack cheese.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ac.png"},{"_id":"640c2dd963a319ea671e36a5","name":"Cinnamon","desc":"A sweet and aromatic spice commonly used in baking, made from the inner bark of cinnamon trees.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36a5.png"},{"_id":"640c2dd963a319ea671e36f8","name":"Ground Ginger","desc":"Ground ginger is a spice made from dried ginger root that has been ground into a powder. It is commonly used in baking and Asian cuisine to add a warm, spicy flavor to dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36f8.png"},{"_id":"640c2dd963a319ea671e37e1","name":"Peanut Cookies","desc":"Cookies that are made with peanuts or peanut butter. They have a nutty and sweet flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37e1.png"},{"_id":"640c2dd963a319ea671e36d3","name":"Feta","desc":"A salty, crumbly cheese typically made from sheep\'s milk or a blend of sheep\'s and goat\'s milk. Often used in Mediterranean cuisine in salads, pastries, and as a topping for grilled meats.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36d3.png"},{"_id":"640c2dd963a319ea671e37f6","name":"Shiitake Mushrooms","desc":"A type of edible mushroom that is commonly used in East Asian cuisine for its savory, meaty flavor, and is often dried and rehydrated before use.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f6.png"},{"_id":"640c2dd963a319ea671e37b1","name":"Duck Legs","desc":"The legs of a duck, which are prized for their flavorful and tender meat. Duck legs are often slow-cooked or confit, which involves cooking them in their own fat.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37b1.png"},{"_id":"640c2dd963a319ea671e3820","name":"Egg","desc":"A reproductive cell laid by female animals, often used in baking and cooking as a binding agent or to add texture and flavor","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3820.png"},{"_id":"640c2dd963a319ea671e3713","name":"Lemon Zest","desc":"Lemon zest is the outermost layer of the lemon peel, which is rich in essential oils and has a strong, citrusy aroma and flavor. It is commonly used as a flavoring agent in cooking, baking, and cocktails.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3713.png"},{"_id":"640c2dd963a319ea671e3669","name":"Basmati Rice","desc":"Basmati is a variety of long, slender-grained aromatic rice which is traditionally from the Indian subcontinent. As of 2018-19, India exported to over 90% of the overseas basmati rice market, while Pakistan accounted for the remainder, according to the Indian state-run Agricultural and Processed Food Products Export Development Authority  and the Pakistan government-run Economic Survey of Pakistan. Many countries use domestically grown basmati rice crops; however, basmati is geographically exclusive to select districts of India, Pakistan, Nepal and Bangladesh.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3669.png"},{"_id":"640c2dd963a319ea671e37cb","name":"Rosemary","desc":"An herb with a pine-like fragrance and strong, earthy flavor, commonly used in Mediterranean and Italian cuisine to add flavor to dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37cb.png"},{"_id":"640c2dd963a319ea671e376d","name":"Soya Milk","desc":"A plant-based milk made from soybeans that is a popular alternative to dairy milk. It is high in protein, vitamins, and minerals, and is commonly used as a milk substitute in cooking and baking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e376d.png"},{"_id":"640c2dd963a319ea671e36d1","name":"Fennel Seeds","desc":"Small, aromatic seeds from the fennel plant with a sweet, licorice-like flavor. Often used in Indian and Middle Eastern cuisine as a spice and digestive aid.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36d1.png"},{"_id":"640c2dd963a319ea671e3896","name":"Sardines","desc":"\\"Sardine\\" and \\"pilchard\\" are common names that refer to various small, oily forage fish in the herring family Clupeidae. The term \\"sardine\\" was first used in English during the early 15th century and may come from the Mediterranean island of Sardinia, around which sardines were once abundant.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3896.png"},{"_id":"640c2dd963a319ea671e3888","name":"Boiling Water","desc":"Water is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth\'s hydrosphere and the fluids of most living organisms. It is vital for all known forms of life, even though it provides no calories or organic nutrients. Its chemical formula is H2O, meaning that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds. Water is the name of the liquid state of H2O at standard ambient temperature and pressure. It forms precipitation in the form of rain and aerosols in the form of fog. Clouds are formed from suspended droplets of water and ice, its solid state. When finely divided, crystalline ice may precipitate in the form of snow. The gaseous state of water is steam or water vapor. Water moves continually through the water cycle of evaporation, transpiration (evapotranspiration), condensation, precipitation, and runoff, usually reaching the sea.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3888.png"},{"_id":"640c2dd963a319ea671e3670","name":"Bicarbonate Of Soda","desc":"Sodium bicarbonate, commonly known as baking soda, is a chemical compound with the formula NaHCO3. It is a salt composed of a sodium cation (Na+) and a bicarbonate anion (HCO3\u2212). Sodium bicarbonate is a white solid that is crystalline, but often appears as a fine powder. It has a slightly salty, alkaline taste resembling that of washing soda (sodium carbonate). The natural mineral form is nahcolite. It is a component of the mineral natron and is found dissolved in many mineral springs.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3670.png"},{"_id":"640c2dd963a319ea671e36fc","name":"Heavy Cream","desc":"Heavy cream, also known as whipping cream, is a type of dairy product that has a high fat content. It is commonly used in baking, cooking, and as a topping for desserts like fruit and ice cream.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36fc.png"},{"_id":"640c2dd963a319ea671e37a2","name":"Fettuccine","desc":"A type of pasta that is long and flat, wider than linguine but narrower than tagliatelle.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37a2.png"},{"_id":"640c2dd963a319ea671e3801","name":"Lamb Kidney","desc":"An organ meat that is commonly used in traditional British dishes such as steak and kidney pie, and is known for its distinct flavor and texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3801.png"},{"_id":"640c2dd963a319ea671e3870","name":"Bread Rolls","desc":"A roll is a small, usually round or oblong individual loaf of bread served as a meal accompaniment (eaten plain or with butter) A roll can be served and eaten whole or cut transversely and dressed with filling between the two halves. Rolls are also commonly used to make sandwiches similar to those produced using slices of bread. They are found in most cuisines all over the world. In the Deipnosophistae, the author Athenaeus (c. 170 \u2013 c. 230) describes some of the bread, cakes, and pastries available in the Classical world. Among the breads mentioned are griddle cakes, honey-and-oil bread, mushroom-shaped loaves covered in poppy seeds, and the military specialty of rolls baked on a spit.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3870.png"},{"_id":"640c2dd963a319ea671e36a9","name":"Cocoa","desc":"A powder made from roasted and ground cocoa beans, commonly used in baking to add chocolate flavor to desserts.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36a9.png"},{"_id":"640c2dd963a319ea671e3758","name":"Rocket","desc":"Also known as arugula or rucola, it is a leafy green vegetable with a distinctive peppery flavor commonly used in salads and sandwiches.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3758.png"},{"_id":"640c2dd963a319ea671e3708","name":"Khus Khus","desc":"Also known as poppy seeds, khus khus are tiny seeds that have a nutty flavor and a crunchy texture. They are commonly used as a topping for breads and pastries or in Indian cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3708.png"},{"_id":"640c2dd963a319ea671e388f","name":"Herring","desc":"Herring are forage fish, mostly belonging to the family Clupeidae. Herring often move in large schools around fishing banks and near the coast, found particularly in shallow, temperate waters of the North Pacific and North Atlantic Oceans, including the Baltic Sea, as well as off the west coast of South America.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e388f.png"},{"_id":"640c2dd963a319ea671e37e7","name":"Courgettes","desc":"Courgettes, also known as zucchini, are a type of summer squash with a mild, slightly sweet flavor. They are commonly used in salads, soups, and other culinary applications.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37e7.png"},{"_id":"640c2dd963a319ea671e36c7","name":"Egg Rolls","desc":"","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36c7.png"},{"_id":"640c2dd963a319ea671e37b6","name":"Sugar Snap Peas","desc":"A type of pea that has edible pods. Sugar snap peas are sweet and crunchy and can be eaten raw or cooked.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37b6.png"},{"_id":"640c2dd963a319ea671e36c5","name":"Dry White Wine","desc":"A type of white wine that is not sweet, with most of the grape sugar having been fermented into alcohol. It is often used in cooking to deglaze pans, add flavor to sauces, and to tenderize meats.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36c5.png"},{"_id":"640c2dd963a319ea671e371d","name":"Medjool Dates","desc":"A type of large, sweet, and chewy date fruit with a caramel-like flavor, commonly used as a natural sweetener in desserts or as a snack.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e371d.png"},{"_id":"640c2dd963a319ea671e3895","name":"Beetroot","desc":"The beetroot is the taproot portion of a beet plant, usually known in Canada and the USA as beets while the vegetable is referred to as beetroot in British English, and also known as the table beet, garden beet, red beet, dinner beet or golden beet.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3895.png"},{"_id":"640c2dd963a319ea671e376c","name":"Soy Sauce","desc":"A sauce made from soybeans, roasted grain, water, and salt. It is commonly used as a condiment and flavoring in Asian cuisine, and is often used to season stir-fries, marinades, and dipping sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e376c.png"},{"_id":"640c2dd963a319ea671e36a1","name":"Chopped Tomatoes","desc":"Tomatoes that have been chopped into small pieces, commonly used as a base for sauces, soups, and stews.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36a1.png"},{"_id":"640c2dd963a319ea671e3710","name":"Leek","desc":"A type of allium vegetable that is related to onions and garlic. Leeks have a mild, sweet flavor and can be eaten raw or cooked in a variety of dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3710.png"},{"_id":"640c2dd963a319ea671e367c","name":"Brown Rice","desc":"A type of rice that has been minimally processed to remove the outermost layer of the grain, resulting in a nutty flavor and a chewy texture that is often used in pilafs, salads, and other dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e367c.png"},{"_id":"640c2dd963a319ea671e3721","name":"Miniature Marshmallows","desc":"Small, soft, and pillowy confectionery items that are typically made from sugar, water, and gelatin, and are often used as a topping for hot chocolate, desserts, and cakes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3721.png"},{"_id":"640c2dd963a319ea671e37e4","name":"Peaches","desc":"Peaches are a juicy fruit with fuzzy skin and a sweet flavor. They are commonly eaten fresh or used in desserts, jams, and other culinary applications.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37e4.png"},{"_id":"640c2dd963a319ea671e3745","name":"Potato Starch","desc":"A fine, white powder that is extracted from potatoes and is used as a thickening agent in cooking and baking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3745.png"},{"_id":"640c2dd963a319ea671e371f","name":"Milk","desc":"A white liquid produced by mammals as food for their young, commonly used as a drink or ingredient in cooking and baking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e371f.png"},{"_id":"640c2dd963a319ea671e369c","name":"Chilli Powder","desc":"A spice blend made from ground dried chili peppers and other spices, commonly used in Mexican, Indian, and Thai cuisine to add heat and flavor to dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e369c.png"},{"_id":"640c2dd963a319ea671e37dc","name":"Dark Chocolate Chips","desc":"Small, bite-sized pieces of dark chocolate often used in baking cookies, brownies, or muffins, or as a topping for ice cream or yogurt bowls.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37dc.png"},{"_id":"640c2dd963a319ea671e3843","name":"Red Snapper","desc":"The northern red snapper (Lutjanus campechanus) is a species of snapper native to the western Atlantic Ocean including the Gulf of Mexico, where it inhabits environments associated with reefs. This species is commercially important and is also sought-after as a game fish.\\r\\n\\r\\nThe northern red snapper\'s body is very similar in shape to other snappers, such as the mangrove snapper, mutton snapper, lane snapper, and dog snapper. All feature a sloped profile, medium-to-large scales, a spiny dorsal fin, and a laterally compressed body. Northern red snapper have short, sharp, needle-like teeth, but they lack the prominent upper canine teeth found on the mutton, dog, and mangrove snappers. This snapper reaches maturity at a length of about 39 cm (15 in). The common adult length is 60 cm (24 in), but may reach 100 cm (39 in). The maximum published weight is 38 kg (84 lb), and the oldest reported age is 100+ years. Coloration of the northern red snapper is light red, with more intense pigment on the back. It has 10 dorsal spines, 14 soft dorsal rays, three anal spines and eight to 9 anal soft rays. Juvenile fish (shorter than 30\u201335 cm) can also have a dark spot on their sides, below the anterior soft dorsal rays, which fades with age.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3843.png"},{"_id":"640c2dd963a319ea671e3757","name":"Rigatoni","desc":"Short, tube-shaped pasta that is wider than penne and often ridged or lined to hold sauce.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3757.png"},{"_id":"640c2dd963a319ea671e366f","name":"Beef Stock","desc":"Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\\r\\n\\r\\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e366f.png"},{"_id":"640c2dd963a319ea671e3742","name":"Plain Chocolate","desc":"Plain chocolate, also known as dark chocolate, is made from cocoa solids, sugar, and cocoa butter. It has a higher percentage of cocoa solids than milk chocolate, and has a bittersweet taste. It is often used in baking, or enjoyed on its own as a treat.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3742.png"},{"_id":"640c2dd963a319ea671e36e0","name":"Fries","desc":"Thin slices of potatoes that are deep-fried until crispy and golden brown. They are often served as a side dish with burgers, sandwiches, or other entrees.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36e0.png"},{"_id":"640c2dd963a319ea671e379d","name":"Icing Sugar","desc":"A finely ground sugar that is used to make frosting or icing for cakes, cookies, and other baked goods. Often mixed with butter or cream cheese to create a smooth, creamy consistency.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e379d.png"},{"_id":"640c2dd963a319ea671e3836","name":"Dijon Mustard","desc":"A type of mustard made from ground mustard seeds, vinegar, and white wine, originating from the city of Dijon in France.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3836.png"},{"_id":"640c2dd963a319ea671e379e","name":"Toffee Popcorn","desc":"A type of popcorn that is coated in a sweet, sticky toffee sauce, often mixed with nuts or other flavorings. A popular snack food for movie theaters and other entertainment venues.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e379e.png"},{"_id":"640c2dd963a319ea671e3749","name":"Raspberry Jam","desc":"A sweet spread made from raspberries and sugar that is often used as a topping for bread, scones, and pastries.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3749.png"},{"_id":"640c2dd963a319ea671e37e6","name":"Green Pepper","desc":"Green peppers are a type of bell pepper with a slightly bitter flavor. They are commonly used in salads, stir-fries, and other culinary applications.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37e6.png"},{"_id":"640c2dd963a319ea671e3858","name":"English Muffins","desc":"English muffins are a small, round, flat yeast-leavened bread which is commonly sliced horizontally, toasted, and buttered.[2] Toasted English muffins, which are often used in the United States as a breakfast food, may be served with sweet toppings (e.g., fruit jam, or honey) or savoury toppings (e.g., eggs, sausage rounds, bacon, or cheese). English muffins are also used as the bread in a variety of breakfast sandwiches, and are an essential ingredient in Eggs Benedict and most of its variations.\\r\\n\\r\\nIn the United States and U.S.-influenced territories, they are called English muffins to distinguish them from U.S. muffins, which are larger and sweeter miniature baked quick breads. They are very similar to bolo do caco in Portuguese cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3858.png"},{"_id":"640c2dd963a319ea671e384b","name":"Sichuan Pepper","desc":"Sichuan pepper, Sichuan peppercorn, or Szechuan pepper, is a commonly used spice in Chinese cuisine. It is derived from at least two species of the global genus Zanthoxylum, including Z. simulans and Z. bungeanum. The genus Zanthoxylum belongs in the rue or citrus family, and, despite its name, is not closely related to either black pepper nor the chili pepper.\\r\\n\\r\\nThe husk or hull (pericarp) around the seeds may be used whole, especially in Sichuan cuisine, and the finely ground powder is one of the ingredients for five-spice powder. It is also used in traditional Chinese medicine. The pericarp is most often used, but the leaves of various species are also used in some regions of China.\\r\\n\\r\\nAnother species of Zanthoxylum native to China, Z. schinifolium, called xi\u0101ng ji\u0101o zi (\u9999\u6912\u5B50, \\"aromatic peppercorn\\") or q\u012Bng hu\u0101 ji\u0101o (\u9752\u82B1\u6912, \\"green flower pepper\\"), is used as a spice in Hebei.\\r\\n\\r\\nWhile the exact flavour and composition of different species from the genus Zanthoxylum vary, most share the same essential characteristics. So while the terms \\"Sichuan pepper\\" and sansh\u014D may refer specifically to Z. simulans and Z. piperitum, respectively, the two are commonly used interchangeably.\\r\\n\\r\\nRelated species are used in the cuisines of Tibet, Bhutan, Nepal, Thailand, and India (the Konkani and Uttarakhandi people) and Toba Batak peoples. In Bhutan, this pepper is known as thingye and is used liberally in preparation of soups, gruels, and phaag sha paa (pork slices).[citation needed] In Nepal, timur is used in the popular foods momo, thukpa, chow mein, chicken chilli, and other meat dishes. It is also widely used in homemade pickles. People take timur as a medicine for stomach or digestion problems, in a preparation with cloves of garlic and mountain salt with warm water.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e384b.png"},{"_id":"640c2dd963a319ea671e3725","name":"Muscovado Sugar","desc":"A type of unrefined brown sugar that has a strong, molasses-like flavor and a moist texture, and is often used in baking and cooking for its rich taste and color.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3725.png"},{"_id":"640c2dd963a319ea671e3835","name":"Sun-Dried Tomatoes","desc":"Tomatoes that have been sliced and then left to dry in the sun or a dehydrator until most of their moisture has evaporated, resulting in a concentrated and intensely flavored product.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3835.png"},{"_id":"640c2dd963a319ea671e374e","name":"Red Onions","desc":"A type of onion that has a deep purple skin and a mild, sweet flavor. They are often used in salads, sandwiches, and as a topping for pizza.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e374e.png"},{"_id":"640c2dd963a319ea671e369b","name":"Chilli","desc":"A spicy pepper used to add heat and flavor to dishes, commonly used in Mexican, Indian, and Thai cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e369b.png"},{"_id":"640c2dd963a319ea671e36e1","name":"Full Fat Yogurt","desc":"A thick, creamy yogurt made from whole milk that has not been skimmed or reduced in fat content. It is higher in calories and fat than low-fat or non-fat yogurt, but has a richer, creamier texture and a more indulgent flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36e1.png"},{"_id":"640c2dd963a319ea671e3807","name":"Currants","desc":"Small, dark red or black berries with a tart flavor, commonly used in baking, jams and sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3807.png"},{"_id":"640c2dd963a319ea671e3892","name":"Sushi Rice","desc":"As the dietary staple of Japan, knowing how to cook Japanese rice is an important first step to becoming a Japanese cooking master. Perfectly prepared Japanese rice should be light, fluffy, and slightly sticky when cooked","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3892.png"},{"_id":"640c2dd963a319ea671e378d","name":"Vine Leaves","desc":"The leaves of the grapevine, often used in Mediterranean cuisine as a wrapping for various fillings.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e378d.png"},{"_id":"640c2dd963a319ea671e36f4","name":"Green Red Lentils","desc":"A type of lentil with a mild, nutty flavor and a greenish-brown color often used in soups, stews, and curries.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36f4.png"},{"_id":"640c2dd963a319ea671e36c0","name":"Digestive Biscuits","desc":"A type of biscuit that originated in the United Kingdom. They are made with wholemeal flour and are lightly sweetened, making them a popular choice for use in pie crusts and as a base for cheesecakes and other desserts.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36c0.png"},{"_id":"640c2dd963a319ea671e3744","name":"Plum Tomatoes","desc":"A type of tomato that is oval or cylindrical in shape and has a sweet flavor. They are often used in Italian cuisine, particularly for making sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3744.png"},{"_id":"640c2dd963a319ea671e36c9","name":"Egg Yolks","desc":"","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36c9.png"},{"_id":"640c2dd963a319ea671e383c","name":"Jerk","desc":"A style of cooking that originated in Jamaica, and involves marinating meat in a mixture of spices and then grilling or smoking it over a fire.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383c.png"},{"_id":"640c2dd963a319ea671e3685","name":"Cashew Nuts","desc":"A type of nut that is often used in cooking and snacking, with a mild, buttery flavor and a creamy texture when roasted or ground into a paste.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3685.png"},{"_id":"640c2dd963a319ea671e3792","name":"White Fish Fillets","desc":"The boneless and skinless cuts of white fish used in cooking for their mild flavor and versatility.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3792.png"},{"_id":"640c2dd963a319ea671e385f","name":"Almond Milk","desc":"A plant-based milk alternative made from ground almonds and water, often used as a dairy-free substitute for milk in cooking and baking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385f.png"},{"_id":"640c2dd963a319ea671e36be","name":"Demerara Sugar","desc":"A type of raw cane sugar that is minimally processed and has large, golden crystals. It has a subtle molasses flavor and is often used as a sweetener in coffee and tea, as well as in baking and cooking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36be.png"},{"_id":"640c2dd963a319ea671e370a","name":"Kosher Salt","desc":"A type of coarse salt that is used in koshering meat and has a larger grain size than regular table salt. Kosher salt is often preferred by chefs because it is easier to control the amount used and has a milder flavor than other salts.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e370a.png"},{"_id":"640c2dd963a319ea671e3860","name":"Allspice","desc":"A spice made from the dried berries of the Pimenta dioica plant, with a flavor profile that is a combination of cinnamon, nutmeg, and cloves, commonly used in Caribbean and Latin American cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png"},{"_id":"640c2dd963a319ea671e386f","name":"Sweet Potatoes","desc":"The sweet potato or sweetpotato is a dicotyledonous plant that belongs to the bindweed or morning glory family, Convolvulaceae. Its large, starchy, sweet-tasting, tuberous roots are a root vegetable. The young leaves and shoots are sometimes eaten as greens.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e386f.png"},{"_id":"640c2dd963a319ea671e3865","name":"Anchovy Fillet","desc":"Anchovies are tiny, silvery fish that come from the Mediterranean and southern European coasts. They\'re sold salt-cured, usually oil-packed, and filleted. Commonly they come either flat or rolled in cans or jars, or ground and mixed with oil or butter to make a paste that is sold in tubes. On their own, anchovies are very salty but mixed into sauces, dressings, or pastas they add a wonderful depth of flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3865.png"},{"_id":"640c2dd963a319ea671e3817","name":"White Flour","desc":"Refined flour made from wheat grains with bran and germ removed","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3817.png"},{"_id":"640c2dd963a319ea671e380d","name":"Braeburn Apples","desc":"A type of apple with a crisp texture and a balanced sweet and tart flavor, often used in cooking and eating raw.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e380d.png"},{"_id":"640c2dd963a319ea671e3788","name":"Vegan Butter","desc":"A non-dairy alternative to butter made from plant-based oils, such as coconut, palm, or soybean oil, that is commonly used in vegan and dairy-free cooking and baking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3788.png"},{"_id":"640c2dd963a319ea671e37d8","name":"Pecan Nuts","desc":"Sweet, buttery nuts with a slightly softer texture than walnuts, often used in baking or as a topping for pies, salads, or ice cream.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d8.png"},{"_id":"640c2dd963a319ea671e37c0","name":"Butternut Squash","desc":"Winter squash with a sweet, nutty flavor, commonly used in soups, stews, and roasted dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37c0.png"},{"_id":"640c2dd963a319ea671e375d","name":"Salsa","desc":"Tomato-based sauce or dip with various ingredients such as onion, chili peppers, and herbs, commonly used in Mexican cuisine as a condiment or for dipping tortilla chips.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e375d.png"},{"_id":"640c2dd963a319ea671e3761","name":"Sea Salt","desc":"Sea salt is a type of salt that is obtained by evaporating seawater. It is coarser and less refined than table salt, and contains trace amounts of minerals that give it a distinct flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3761.png"},{"_id":"640c2dd963a319ea671e370b","name":"Lamb","desc":"A type of red meat that comes from young sheep. Lamb has a rich flavor and can be cooked in a variety of ways, including grilling, roasting, and stewing.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e370b.png"},{"_id":"640c2dd963a319ea671e377e","name":"Tomato Puree","desc":"A thick, concentrated paste made from cooked and strained tomatoes, used as a base for sauces, soups, and stews.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e377e.png"},{"_id":"640c2dd963a319ea671e384f","name":"Cooking wine","desc":"Splash into casseroles, sauces and marinades for a rounded vibrant flavour.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e384f.png"},{"_id":"640c2dd963a319ea671e37ed","name":"Naan Bread","desc":"Naan bread is a type of Indian flatbread that is made from flour, water, and yeast. It is traditionally baked in a tandoor oven and can be served plain or stuffed with a variety of fillings.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ed.png"},{"_id":"640c2dd963a319ea671e37b2","name":"Chicken Stock Cube","desc":"A small cube made from dried and compressed chicken stock, used to add flavor to soups, stews, and sauces. Chicken stock cubes are convenient and easy to use.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37b2.png"},{"_id":"640c2dd963a319ea671e3728","name":"Mustard Powder","desc":"A ground spice that is made from mustard seeds, and is often used in cooking and seasoning for its pungent and tangy flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3728.png"},{"_id":"640c2dd963a319ea671e376f","name":"Spinach","desc":"A leafy green vegetable that is rich in vitamins, minerals, and antioxidants. It is commonly used in salads, sandwiches, and cooked dishes like spinach lasagna or saut\xe9ed spinach with garlic.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e376f.png"},{"_id":"640c2dd963a319ea671e37cf","name":"Mascarpone","desc":"A creamy, mild Italian cheese that is similar in texture to cream cheese but with a sweeter, more delicate flavor, often used in desserts like tiramisu and cheesecake.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37cf.png"},{"_id":"640c2dd963a319ea671e3855","name":"Dark Rum","desc":"Rum is a distilled alcoholic drink made from sugarcane byproducts, such as molasses, or directly from sugarcane juice, by a process of fermentation and distillation. The distillate, a clear liquid, is then usually aged in oak barrels.\\r\\n\\r\\nThe majority of the world\'s rum production occurs in the Caribbean and Latin America. Rum is also produced in Australia, Portugal, Austria, Canada, Fiji, India, Japan, Mauritius, Nepal, New Zealand, the Philippines, Reunion Island, South Africa, Spain, Sweden, Taiwan, Thailand, the United Kingdom and the United States.\\r\\n\\r\\nRums are produced in various grades. Light rums are commonly used in cocktails, whereas \\"golden\\" and \\"dark\\" rums were typically consumed straight or neat, on the rocks, or used for cooking, but are now commonly consumed with mixers. Premium rums are also available, made to be consumed either straight or iced.\\r\\n\\r\\nRum plays a part in the culture of most islands of the West Indies as well as in The Maritimes and Newfoundland. This drink has famous associations with the Royal Navy (where it was mixed with water or beer to make grog) and piracy (where it was consumed as bumbo). Rum has also served as a popular medium of economic exchange, used to help fund enterprises such as slavery (see Triangular trade), organized crime, and military insurgencies (e.g., the American Revolution and Australia\'s Rum Rebellion).","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3855.png"},{"_id":"640c2dd963a319ea671e36b0","name":"Coriander Leaves","desc":"Also known as cilantro, these are the leaves of the coriander plant. They are commonly used as a garnish or ingredient in many cuisines.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36b0.png"},{"_id":"640c2dd963a319ea671e3775","name":"Sultanas","desc":"A type of dried grape that is commonly used in baking and cooking. They are sweet and tangy, and are often used in cakes, cookies, and savory dishes like couscous or tagines.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3775.png"},{"_id":"640c2dd963a319ea671e378e","name":"Vinegar","desc":"A sour liquid made from fermented alcohol, used as a condiment and preservative.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e378e.png"},{"_id":"640c2dd963a319ea671e3681","name":"Canned Tomatoes","desc":"Tomatoes that have been preserved in a can or jar, typically with added salt and sometimes other seasonings, and used in a variety of recipes such as soups, stews, sauces, and chili.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3681.png"},{"_id":"640c2dd963a319ea671e3878","name":"Chicken Stock Concentrate","desc":"Stock, sometimes called bone broth, is a savory cooking liquid that forms the basis of many dishes, particularly soups, stews and sauces. Making stock involves simmering animal bones or meat, seafood, or vegetables in water or wine, often for an extended period of time. Mirepoix or other aromatics may be added for more flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3878.png"},{"_id":"640c2dd963a319ea671e37ab","name":"Fish Stock","desc":"A flavorful broth made by simmering fish bones, vegetables, and aromatics in water, often used as a base for soups, stews, and sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ab.png"},{"_id":"640c2dd963a319ea671e37f4","name":"Udon Noodles","desc":"A type of thick, wheat-based noodle that is commonly used in Japanese cuisine, particularly in soups and stir-fry dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f4.png"},{"_id":"640c2dd963a319ea671e36b3","name":"Cornstarch","desc":"A fine, powdery starch made from corn kernels that is commonly used as a thickening agent in sauces, soups, and gravies.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36b3.png"},{"_id":"640c2dd963a319ea671e3889","name":"Pickle Juice","desc":"Pickling is the process of preserving or extending the shelf life of food by either anaerobic fermentation in brine or immersion in vinegar. In East Asia, vinaigrette is also used as a pickling medium. The pickling procedure typically affects the food\'s texture, taste and flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3889.png"},{"_id":"640c2dd963a319ea671e37f3","name":"Tortillas","desc":"Thin, flatbreads made from corn or wheat flour that are commonly used in Mexican cuisine for dishes like tacos, burritos, and quesadillas.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f3.png"},{"_id":"640c2dd963a319ea671e384a","name":"Scallions","desc":"Scallions (green onion, spring onion and salad onion) are vegetables of various Allium onion species. Scallions have a milder taste than most onions. Their close relatives include the garlic, shallot, leek, chive, and Chinese onion.\\r\\n\\r\\nAlthough the bulbs of many Allium species are used as food, the defining characteristic of scallion species is that they lack a fully developed bulb. In common with all Allium species, scallions have hollow, tubular green leaves, growing directly from the bulb. These leaves are used as a vegetable; they are eaten either raw or cooked. The leaves are often chopped into other dishes, in the manner of onions or garlic. Also known as scallions or green onions, spring onions are in fact very young onions, harvested before the bulb has had a chance to swell.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e384a.png"},{"_id":"640c2dd963a319ea671e3666","name":"Balsamic Vinegar","desc":"Balsamic vinegar (Italian: aceto balsamico), occasionally shortened to balsamic, is a very dark, concentrated, and intensely flavoured vinegar originating in Italy, made wholly or partially from grape must. Grape must is freshly crushed grape juice with all the skins, seeds and stems.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3666.png"},{"_id":"640c2dd963a319ea671e3774","name":"Sugar","desc":"A sweet, crystalline substance that is commonly used as a sweetener and preservative in food and drinks. It is made from sugar cane or sugar beets and comes in many different forms, including granulated sugar, brown sugar, and powdered sugar.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3774.png"},{"_id":"640c2dd963a319ea671e366a","name":"Bay Leaf","desc":"The bay leaf is an aromatic leaf commonly used in cooking. It can be used whole, or as dried and ground.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e366a.png"},{"_id":"640c2dd963a319ea671e36cb","name":"Enchilada Sauce","desc":"A spicy tomato-based sauce commonly used in Mexican cuisine for making enchiladas.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36cb.png"},{"_id":"640c2dd963a319ea671e36ea","name":"Ginger Garlic Paste","desc":"A mixture of minced garlic and ginger commonly used as a flavoring in Indian and Southeast Asian cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ea.png"},{"_id":"640c2dd963a319ea671e36ed","name":"Gouda Cheese","desc":"A semi-hard cheese originating from the Netherlands with a nutty, buttery flavor and smooth texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ed.png"},{"_id":"640c2dd963a319ea671e37ad","name":"Black Olives","desc":"Ripe olives that have turned black, with a meaty texture and a rich, salty flavor, often used in Mediterranean cuisine or as a topping for pizza or salads.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png"},{"_id":"640c2dd963a319ea671e3859","name":"Muffins","desc":"A muffin is an individual-sized, baked product. It can refer to two distinct items, a part-raised flatbread and a cupcake-like quickbread. The flatbread is of British or European derivation, and dates from at least the early 18th century, while the quickbread originated in North America during the 19th century. Both are common worldwide today.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3859.png"},{"_id":"640c2dd963a319ea671e3877","name":"Beef Stock Concentrate","desc":"Stock, sometimes called bone broth, is a savory cooking liquid that forms the basis of many dishes, particularly soups, stews and sauces. Making stock involves simmering animal bones or meat, seafood, or vegetables in water or wine, often for an extended period of time. Mirepoix or other aromatics may be added for more flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3877.png"},{"_id":"640c2dd963a319ea671e36fd","name":"Honey","desc":"Honey is a natural sweetener that is made by bees from the nectar of flowers. It is commonly used in cooking and baking to add sweetness and flavor to dishes, as well as a natural remedy for coughs and sore throats.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36fd.png"},{"_id":"640c2dd963a319ea671e367b","name":"Brown Lentils","desc":"A type of lentil that has a mild, earthy flavor and a soft texture when cooked, often used in soups, stews, and curries.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e367b.png"},{"_id":"640c2dd963a319ea671e3687","name":"Caster Sugar","desc":"A type of fine sugar that is commonly used in baking and cooking, with a fine texture that dissolves easily, and is often used in recipes that require quick mixing or dissolving, such as meringues, whipped cream, and cakes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3687.png"},{"_id":"640c2dd963a319ea671e3674","name":"Borlotti Beans","desc":"A type of bean, also known as cranberry beans, with a creamy texture and a nutty flavor that is often used in Italian cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3674.png"},{"_id":"640c2dd963a319ea671e373e","name":"Penne Rigate","desc":"A type of pasta with a tube-like shape and ridges on the outside, commonly used in Italian cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e373e.png"},{"_id":"640c2dd963a319ea671e3747","name":"Prawns","desc":"A type of seafood that has a sweet and delicate flavor. They are often used in dishes such as curries, stir-fries, and salads.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3747.png"},{"_id":"640c2dd963a319ea671e380f","name":"Pink Food Colouring","desc":"A type of food coloring used to add a pale pink color to foods and drinks.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e380f.png"},{"_id":"640c2dd963a319ea671e3787","name":"Veal","desc":"Meat from young calves, typically under 3 months of age, that is tender and mild in flavor. It is commonly used in dishes such as schnitzel, veal marsala, and veal piccata.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3787.png"},{"_id":"640c2dd963a319ea671e3842","name":"Broad Beans","desc":"Vicia faba, also known as the broad bean, fava bean, faba bean, field bean, bell bean, or tic bean, is a species of flowering plant in the pea and bean family Fabaceae. It is native to North Africa[dubious \u2013 discuss] southwest and south Asia, and extensively cultivated elsewhere.[citation needed] A variety Vicia faba var. equina Pers. \u2013 horse bean has been previously recognized.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3842.png"},{"_id":"640c2dd963a319ea671e373c","name":"Peas","desc":"A type of legume with small, round, edible seeds, commonly used in soups, stews, and casseroles.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e373c.png"},{"_id":"640c2dd963a319ea671e3700","name":"Hotsauce","desc":"Hot sauce is a condiment made from chili peppers, vinegar, and other spices. It is often used to add heat and flavor to dishes like eggs, tacos, and pizza.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3700.png"},{"_id":"640c2dd963a319ea671e36f2","name":"Green Chilli","desc":"A type of chili pepper with a mild to medium heat and a green color commonly used in Mexican and South Asian cuisine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36f2.png"},{"_id":"640c2dd963a319ea671e36d7","name":"Flour","desc":"A fine powder made from grinding grains, nuts, seeds, or roots. Used as a main ingredient in baking, cooking, and thickening sauces and soups.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36d7.png"},{"_id":"640c2dd963a319ea671e36a4","name":"Cilantro","desc":"Also known as coriander, it is a herb commonly used in Mexican, Indian, and Thai cuisine, with a fresh, citrusy flavor and aroma.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36a4.png"},{"_id":"640c2dd963a319ea671e3785","name":"Vanilla","desc":"A flavor derived from the seed pods of the vanilla orchid, commonly used as a sweetener and flavoring agent in baked goods, ice cream, and other desserts.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3785.png"},{"_id":"640c2dd963a319ea671e3876","name":"Yellow Onion","desc":"The brown onion or yellow onion is a variety of dry onion with a strong flavour. They have a greenish-white, light yellow, or white inside; its layers of papery skin have a yellow-brown or pale golden colour","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3876.png"},{"_id":"640c2dd963a319ea671e3772","name":"Stir-fry Vegetables","desc":"A mix of vegetables that are commonly used in Asian cuisine, including broccoli, carrots, snow peas, bell peppers, and mushrooms. They are typically stir-fried in a wok or pan with oil and seasoning, and can be served as a side dish or main course.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3772.png"},{"_id":"640c2dd963a319ea671e3691","name":"Cherry Tomatoes","desc":"Small, bite-sized tomatoes that are typically sweeter and more flavorful than larger varieties. They are often used in salads or as a snack.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3691.png"},{"_id":"640c2dd963a319ea671e36e2","name":"Garam Masala","desc":"A blend of ground spices commonly used in Indian cuisine, typically including cinnamon, cardamom, cloves, cumin, coriander, and black pepper. It has a warm, complex flavor and is often used to season meat, vegetables, and rice dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36e2.png"},{"_id":"640c2dd963a319ea671e37f8","name":"Sesame Seed Oil","desc":"An oil made from toasted sesame seeds that is commonly used in East Asian cuisine for its nutty flavor and aroma, and is often used as a finishing oil or for stir-frying.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f8.png"},{"_id":"640c2dd963a319ea671e3664","name":"Bacon","desc":"Bacon is a type of salt-cured pork. Bacon is prepared from several different cuts of meat, typically from the pork belly or from back cuts, which have less fat than the belly. It is eaten on its own, as a side dish (particularly in breakfasts), or used as a minor ingredient to flavour dishes (e.g., the club sandwich). Bacon is also used for barding and larding roasts, especially game, including venison and pheasant. The word is derived from the Old High German bacho, meaning \\"buttock\\", \\"ham\\" or \\"side of bacon\\", and is cognate with the Old French bacon.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3664.png"},{"_id":"640c2dd963a319ea671e3866","name":"Ras el hanout","desc":"Ras el hanout or rass el hanout (Arabic: \u0631\u0627\u0633  ra\u02BEs al-\u1E25\u0101n\u016Bt, pronounced [r\u0251\u0294s \xe6l\u0127\u0251\u02D0nu\u02D0t] (About this soundlisten)) is a spice mix found in varying forms in Tunisia, Algeria, and Morocco.[1] It plays a similar role in North African cuisine as garam masala does in Indian cuisine. The name in Arabic means \\"head of the shop\\" and implies a mixture of the best spices the seller has to offer. Ras el hanout is used in many savory dishes, sometimes rubbed on meat or fish, or stirred into couscous or rice.\\r\\n\\r\\nThere is no definitive composition of spices that makes up ras el hanout. Each shop, company, or family may have their own blend. The mixture usually consists of over a dozen spices, in different proportions. Commonly used ingredients include cardamom, cumin, clove, cinnamon, nutmeg, mace, allspice, dry ginger, chili peppers, coriander seed, peppercorn, sweet and hot paprika, fenugreek, and dry turmeric. Some spices may be particular to the region, such as ash berries, chufa, grains of paradise, orris root, monk\'s pepper, cubebs, dried rosebud, fennel seed or aniseed, galangal, long pepper. Ingredients may be toasted before being ground or pounded in a mortar and mixed together. Some preparations include salt or sugar, but that is generally not the accepted practice. Garlic, saffron, nuts or dry herbs are generally not included, as they are usually added to dishes individually, but some commercial preparations, particularly in Europe and North America, may contain them.\\r\\n\\r\\nThe composition of ras el hanout differs somewhat from the Baharat spice mix, but they differ more by the types of dishes they are associated with and by region rather than the ingredients in them. Although used by Berber people, it should not be confused with \\"berbere\\" spice mix from Ethiopia.\\r\\n\\r\\nCertain supposed aphrodisiacs, including the notoriously dangerous \\"green metallic beetles\\", cantharides, have appeared in many Moroccan prescriptions, but these seem to be irrelevant for flavouring purposes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3866.png"},{"_id":"640c2dd963a319ea671e369f","name":"Chopped Onion","desc":"Pieces of onion that have been diced or chopped, commonly used as a flavor base for soups, stews, and other dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e369f.png"},{"_id":"640c2dd963a319ea671e3760","name":"Sausages","desc":"Sausages are a type of seasoned meat that are typically encased in a casing made of animal intestine or synthetic materials. They can be made from various types of meat such as pork, beef, or chicken, and can be flavored with herbs and spices.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3760.png"},{"_id":"640c2dd963a319ea671e3818","name":"Yeast","desc":"A type of fungus used as a leavening agent in baking to make dough rise","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3818.png"},{"_id":"640c2dd963a319ea671e3764","name":"Sesame Seed","desc":"Sesame seeds are small, flat seeds that come from the sesame plant. They are commonly used in cooking and baking, and are known for their nutty flavor and crunchy texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3764.png"},{"_id":"640c2dd963a319ea671e371e","name":"Meringue Nests","desc":"Small, delicate, and crispy shells made of egg whites and sugar, commonly used as a base for fruit or cream toppings in desserts.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e371e.png"},{"_id":"640c2dd963a319ea671e36b2","name":"Corn Tortillas","desc":"A type of flatbread made from cornmeal that is commonly used in Mexican cuisine. They are gluten-free and can be used to make tacos, enchiladas, and other dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36b2.png"},{"_id":"640c2dd963a319ea671e376b","name":"Sour Cream","desc":"A dairy product that is made by fermenting regular cream with certain kinds of lactic acid bacteria. It has a tangy, creamy flavor and is commonly used as a topping for dishes like baked potatoes, tacos, and chili.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e376b.png"},{"_id":"640c2dd963a319ea671e3777","name":"Tamarind Ball","desc":"A sweet and sour fruit that comes in a compressed ball shape, commonly used in South Asian and Southeast Asian cuisines for its tangy flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3777.png"},{"_id":"640c2dd963a319ea671e381b","name":"Cherry","desc":"A small, red fruit with a stone in the center, commonly used in baking and cooking","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e381b.png"},{"_id":"640c2dd963a319ea671e36e5","name":"Garlic Powder","desc":"A finely ground powder made from dehydrated garlic cloves often used as a seasoning in cooking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36e5.png"},{"_id":"640c2dd963a319ea671e3831","name":"Desiccated Coconut","desc":"Dried, shredded coconut used in baking and as a topping for desserts and curries.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3831.png"},{"_id":"640c2dd963a319ea671e36df","name":"Freshly Chopped Parsley","desc":"A bright green herb with curly or flat leaves that is often used as a garnish, but can also be used to add flavor and nutrition to dishes. It has a mild, slightly bitter taste that complements a wide range of flavors.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36df.png"},{"_id":"640c2dd963a319ea671e37eb","name":"Truffle Oil","desc":"Truffle oil is a flavored oil made by infusing oil with truffle essence. It is commonly used to add a rich, earthy flavor to dishes such as pasta, risotto, and mashed potatoes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37eb.png"},{"_id":"640c2dd963a319ea671e380e","name":"Red Food Colouring","desc":"A type of food coloring used to add a bright red color to foods and drinks.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e380e.png"},{"_id":"640c2dd963a319ea671e36a2","name":"Chorizo","desc":"A spicy sausage that is commonly used in Spanish, Mexican, and Portuguese cuisine, made with pork, garlic, and smoked paprika.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36a2.png"},{"_id":"640c2dd963a319ea671e3786","name":"Vanilla Extract","desc":"A concentrated liquid extract made from vanilla beans and alcohol, commonly used to add vanilla flavor to baked goods and desserts.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3786.png"},{"_id":"640c2dd963a319ea671e36ae","name":"Condensed Milk","desc":"A thick, sweet milk product that is made by removing most of the water from regular milk. It is commonly used in baking and desserts.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ae.png"},{"_id":"640c2dd963a319ea671e384e","name":"Rice wine","desc":"Rice wine is an alcoholic beverage fermented and distilled from rice, traditionally consumed in East Asia, Southeast Asia and South Asia. Rice wine is made from the fermentation of rice starch that has been converted to sugars. Microbes are the source of the enzymes that convert the starches to sugar.[1]\\r\\n\\r\\nRice wine typically has an alcohol content of 18\u201325% ABV. Rice wines are used in Asian gastronomy at formal dinners and banquets and in cooking. They are also used in a religious and ceremonial context.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e384e.png"},{"_id":"640c2dd963a319ea671e37e0","name":"Shortcrust Pastry","desc":"A type of pastry that is made with flour, butter, and water. It is often used as a base for pies and tarts.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37e0.png"},{"_id":"640c2dd963a319ea671e382b","name":"Chives","desc":"A herb with long, thin green leaves used to add a mild onion-like flavor to dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e382b.png"},{"_id":"640c2dd963a319ea671e375b","name":"Sage","desc":"Herb with a pungent, earthy flavor and aroma, commonly used to flavor meats, stuffing, and sauces.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e375b.png"},{"_id":"640c2dd963a319ea671e3732","name":"Oyster Sauce","desc":"A thick, brown sauce made from oysters, soy sauce, sugar, and spices, commonly used in Chinese and Southeast Asian cooking.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3732.png"},{"_id":"640c2dd963a319ea671e3885","name":"Cheese Slices","desc":"Processed cheese is a food product made from cheese and other unfermented dairy ingredients mixed with emulsifiers. Additional ingredients, such as vegetable oils, salt, food coloring, or sugar may be included. As a result, many flavors, colors, and textures of processed cheese exist.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3885.png"},{"_id":"640c2dd963a319ea671e36ba","name":"Curry Powder","desc":"A blend of spices commonly used in Indian cuisine. It typically includes turmeric, cumin, coriander, ginger, and other spices, and can vary in spiciness and flavor depending on the blend.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ba.png"},{"_id":"640c2dd963a319ea671e3735","name":"Parmesan","desc":"A hard, granular cheese made from cow\'s milk, commonly used in Italian cooking for its sharp, nutty flavor.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3735.png"},{"_id":"640c2dd963a319ea671e37c5","name":"Sweetcorn","desc":"A type of corn with a higher sugar content, typically eaten as a vegetable and used in a variety of dishes such as salads, soups, and casseroles.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37c5.png"},{"_id":"640c2dd963a319ea671e37da","name":"Light Brown Soft Sugar","desc":"A soft, moist sugar with a subtle molasses flavor, often used in baking recipes for cakes, cookies, and muffins.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37da.png"},{"_id":"640c2dd963a319ea671e3692","name":"Chestnut Mushroom","desc":"A variety of mushroom that has a nutty, earthy flavor and a slightly chewy texture. It is often used in stews, soups, and risottos.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3692.png"},{"_id":"640c2dd963a319ea671e374f","name":"Red Pepper","desc":"A sweet and crunchy vegetable that is often used in cooking and is a good source of vitamins A and C. It is also known as a bell pepper or capsicum.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e374f.png"},{"_id":"640c2dd963a319ea671e3706","name":"Jerusalem Artichokes","desc":"Also known as sunchokes, Jerusalem artichokes are a type of root vegetable that have a slightly sweet, nutty flavor and a crisp texture when raw.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3706.png"},{"_id":"640c2dd963a319ea671e3802","name":"Beef Kidney","desc":"An organ meat that is commonly used in traditional dishes, particularly in stews and pies, and is known for its rich flavor and texture.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3802.png"},{"_id":"640c2dd963a319ea671e3837","name":"Tabasco Sauce","desc":"A spicy hot sauce made from tabasco peppers, vinegar, and salt, commonly used as a condiment or ingredient in various dishes.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3837.png"},{"_id":"640c2dd963a319ea671e3886","name":"Shortening","desc":"Shortening is any fat that is a solid at room temperature and used to make crumbly pastry and other food products. Although butter is solid at room temperature and is frequently used in making pastry, the term \\"shortening\\" seldom refers to butter, but is more closely related to margarine.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3886.png"},{"_id":"640c2dd963a319ea671e3698","name":"Chickpeas","desc":"Small, round legumes with a nutty flavor and creamy texture. They are often used in Mediterranean and Middle Eastern dishes, such as hummus and falafel.","img":"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3698.png"}]');

},{}],"eiMEy":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse("[{\"cook\":{\"name\":\"Heston Chan\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/HestonChan.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/HestonChan.webp\"},\"topic\":{\"name\":\"Grilled, smoky, delicious barbecue\",\"area\":\"Spanish\",\"previewUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish1.png\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish1.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish1.webp\",\"previewWebpUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish1.webp\"},\"_id\":\"647495d0c825f1570b04182d\"},{\"cook\":{\"name\":\"Ana Smyth\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/AnaSmyth.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/AnaSmyth.webp\"},\"topic\":{\"name\":\"Hot, cheesy and satisfying pizza\",\"area\":\"Italian\",\"previewUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish2.png\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish2.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish2.webp\",\"previewWebpUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish2.webp\"},\"_id\":\"647495d0c825f1570b04182e\"},{\"cook\":{\"name\":\"Ferran Meyer\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/FerranMeyer.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/FerranMeyer.webp\"},\"topic\":{\"name\":\"Fluffy and sweet pancakes\",\"area\":\"American\",\"previewUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish3.png\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish3.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish3.webp\",\"previewWebpUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish3.webp\"},\"_id\":\"647495d0c825f1570b04182f\"},{\"cook\":{\"name\":\"Heston Chan\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/HestonChan.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/HestonChan.webp\"},\"topic\":{\"name\":\"Grilled, smoky, delicious barbecue\",\"area\":\"Spanish\",\"previewUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish1.png\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish1.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish1.webp\",\"previewWebpUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish1.webp\"},\"_id\":\"647495d0c825f1570b04182d\"},{\"cook\":{\"name\":\"Ana Smyth\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/AnaSmyth.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/AnaSmyth.webp\"},\"topic\":{\"name\":\"Hot, cheesy and satisfying pizza\",\"area\":\"Italian\",\"previewUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish2.png\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish2.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish2.webp\",\"previewWebpUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish2.webp\"},\"_id\":\"647495d0c825f1570b04182e\"},{\"cook\":{\"name\":\"Ferran Meyer\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/FerranMeyer.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/FerranMeyer.webp\"},\"topic\":{\"name\":\"Fluffy and sweet pancakes\",\"area\":\"American\",\"previewUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish3.png\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish3.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish3.webp\",\"previewWebpUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish3.webp\"},\"_id\":\"647495d0c825f1570b04182f\"},{\"cook\":{\"name\":\"Heston Chan\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/HestonChan.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/HestonChan.webp\"},\"topic\":{\"name\":\"Grilled, smoky, delicious barbecue\",\"area\":\"Spanish\",\"previewUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish1.png\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish1.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish1.webp\",\"previewWebpUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish1.webp\"},\"_id\":\"647495d0c825f1570b04182d\"},{\"cook\":{\"name\":\"Ana Smyth\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/AnaSmyth.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/AnaSmyth.webp\"},\"topic\":{\"name\":\"Hot, cheesy and satisfying pizza\",\"area\":\"Italian\",\"previewUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish2.png\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish2.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish2.webp\",\"previewWebpUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish2.webp\"},\"_id\":\"647495d0c825f1570b04182e\"},{\"cook\":{\"name\":\"Ferran Meyer\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/FerranMeyer.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/FerranMeyer.webp\"},\"topic\":{\"name\":\"Fluffy and sweet pancakes\",\"area\":\"American\",\"previewUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish3.png\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish3.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish3.webp\",\"previewWebpUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish3.webp\"},\"_id\":\"647495d0c825f1570b04182f\"},{\"cook\":{\"name\":\"Ana Smyth\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/AnaSmyth.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/AnaSmyth.webp\"},\"topic\":{\"name\":\"Hot, cheesy and satisfying pizza\",\"area\":\"Italian\",\"previewUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish2.png\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish2.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish2.webp\",\"previewWebpUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish2.webp\"},\"_id\":\"647495d0c825f1570b04182e\"},{\"cook\":{\"name\":\"Ferran Meyer\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/FerranMeyer.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/FerranMeyer.webp\"},\"topic\":{\"name\":\"Fluffy and sweet pancakes\",\"area\":\"American\",\"previewUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish3.png\",\"imgUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish3.png\",\"imgWebpUrl\":\"https://tasty-treats-backend.p.goit.global/imgDish3.webp\",\"previewWebpUrl\":\"https://tasty-treats-backend.p.goit.global/previewDish3.webp\"},\"_id\":\"647495d0c825f1570b04182f\"}]");

},{}],"aA0ZA":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse("[{\"_id\":\"6462a8f74c3d0ddd28897fc1\",\"title\":\"Chocolate Gateau\",\"description\":\"A French dessert consisting of layers of chocolate sponge cake and chocolate ganache, typically topped with chocolate glaze and chocolate decorations.\",\"preview\":\"https://ftp.goit.study/img/so-yummy/preview/Chocolate%20Gateau.jpg\",\"popularity\":1189.02},{\"_id\":\"6462a8f74c3d0ddd28897fbc\",\"title\":\"Irish stew\",\"description\":\"A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.\",\"preview\":\"https://ftp.goit.study/img/so-yummy/preview/Irish%20stew.jpg\",\"popularity\":958.39},{\"_id\":\"6462a8f74c3d0ddd28897fb8\",\"title\":\"Mediterranean Pasta Salad\",\"description\":\"A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.\",\"preview\":\"https://ftp.goit.study/img/so-yummy/preview/Mediterranean%20Pasta%20Salad.jpg\",\"popularity\":691.9},{\"_id\":\"6462a8f74c3d0ddd28897fb9\",\"title\":\"Lamb tomato and sweet spices\",\"description\":\"A Moroccan-inspired dish made with lamb, tomatoes, onions, and spices (such as cinnamon, ginger, and cumin), typically served with couscous or bread.\",\"preview\":\"https://ftp.goit.study/img/so-yummy/preview/Lamb%20tomato%20and%20sweet%20spices.jpg\",\"popularity\":679.68}]");

},{}],"jJMLb":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"page":1,"perPage":6,"totalPages":48,"results":[{"_id":"6462a8f74c3d0ddd28897fcd","title":"Battenberg Cake","category":"Dessert","area":"British","instructions":"Heat oven to 180C/160C fan/gas 4 and line the base and sides of a 20cm square tin with baking parchment (the easiest way is to cross 2 x 20cm-long strips over the base). To make the almond sponge, put the butter, sugar, flour, ground almonds, baking powder, eggs, vanilla and almond extract in a large bowl. Beat with an electric whisk until the mix comes together smoothly. Scrape into the tin, spreading to the corners, and bake for 25-30 mins \u2013 when you poke in a skewer, it should come out clean. Cool in the tin for 10 mins, then transfer to a wire rack to finish cooling while you make the second sponge.\\r\\nFor the pink sponge, line the tin as above. Mix all the ingredients together as above, but don\u2019t add the almond extract. Fold in some pink food colouring. Then scrape it all into the tin and bake as before. Cool.\\r\\nTo assemble, heat the jam in a small pan until runny, then sieve. Barely trim two opposite edges from the almond sponge, then well trim a third edge. Roughly measure the height of the sponge, then cutting from the well-trimmed edge, use a ruler to help you cut 4 slices each the same width as the sponge height. Discard or nibble leftover sponge. Repeat with pink cake.\\r\\nTake 2 x almond slices and 2 x pink slices and trim so they are all the same length. Roll out one marzipan block on a surface lightly dusted with icing sugar to just over 20cm wide, then keep rolling lengthways until the marzipan is roughly 0.5cm thick. Brush with apricot jam, then lay a pink and an almond slice side by side at one end of the marzipan, brushing jam in between to stick sponges, and leaving 4cm clear marzipan at the end. Brush more jam on top of the sponges, then sandwich remaining 2 slices on top, alternating colours to give a checkerboard effect. Trim the marzipan to the length of the cakes.\\r\\nCarefully lift up the marzipan and smooth over the cake with your hands, but leave a small marzipan fold along the bottom edge before you stick it to the first side. Trim opposite side to match size of fold, then crimp edges using fingers and thumb (or, more simply, press with prongs of fork). If you like, mark the 10 slices using the prongs of a fork.\\r\\nAssemble second Battenberg and keep in an airtight box or well wrapped in cling film for up to 3 days. Can be frozen for up to a month.","description":"A classic British cake made with almond sponge cake and covered with marzipan. It is traditionally pink and yellow checkered in appearance.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Battenberg%20Cake.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Battenberg%20Cake.jpg","time":"60","youtube":"https://www.youtube.com/watch?v=aB41Q7kDZQ0","tags":["Cake","Sweet"],"ingredients":[{"id":"640c2dd963a319ea671e367e","measure":"175g"},{"id":"640c2dd963a319ea671e3687","measure":"175g"},{"id":"640c2dd963a319ea671e3762","measure":"140g"},{"id":"640c2dd963a319ea671e3814","measure":"50g"},{"id":"640c2dd963a319ea671e3665","measure":"\xbd tsp"},{"id":"640c2dd963a319ea671e36ca","measure":"3 Medium"},{"id":"640c2dd963a319ea671e3786","measure":"\xbd tsp"},{"id":"640c2dd963a319ea671e3861","measure":"\xbc teaspoon"},{"id":"640c2dd963a319ea671e380f","measure":"\xbd tsp"},{"id":"640c2dd963a319ea671e37bf","measure":"200g"},{"id":"640c2dd963a319ea671e3813","measure":"1kg"},{"id":"640c2dd963a319ea671e379d","measure":"Dusting"}],"rating":3.54},{"_id":"6462a8f74c3d0ddd28897fbc","title":"Irish stew","category":"Beef","area":"Irish","instructions":"Heat the oven to 180C/350F/gas mark 4. Drain and rinse the soaked wheat, put it in a medium pan with lots of water, bring to a boil and simmer for an hour, until cooked. Drain and set aside.\\r\\n\\r\\nSeason the lamb with a teaspoon of salt and some black pepper. Put one tablespoon of oil in a large, deep saut\xe9 pan for which you have a lid; place on a medium-high heat. Add some of the lamb \u2013 don\'t overcrowd the pan \u2013 and sear for four minutes on all sides. Transfer to a bowl, and repeat with the remaining lamb, adding oil as needed.\\r\\n\\r\\nLower the heat to medium and add a tablespoon of oil to the pan. Add the shallots and fry for four minutes, until caramelised. Tip these into the lamb bowl, and repeat with the remaining vegetables until they are all nice and brown, adding more oil as you need it.\\r\\n\\r\\nOnce all the vegetables are seared and removed from the pan, add the wine along with the sugar, herbs, a teaspoon of salt and a good grind of black pepper. Boil on a high heat for about three minutes.\\r\\n\\r\\nTip the lamb, vegetables and whole wheat back into the pot, and add the stock. Cover and boil for five minutes, then transfer to the oven for an hour and a half.\\r\\n\\r\\nRemove the stew from the oven and check the liquid; if there is a lot, remove the lid and boil for a few minutes.","description":"A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Irish%20stew.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Irish%20stew.jpg","time":"160","youtube":"https://www.youtube.com/watch?v=kYH2qJXnSMo","tags":["Stew","Meat"],"ingredients":[{"id":"640c2dd963a319ea671e3796","measure":"300g soaked overnight in water"},{"id":"640c2dd963a319ea671e370c","measure":"2kg cut into 3cm cubes"},{"id":"640c2dd963a319ea671e372c","measure":"120ml"},{"id":"640c2dd963a319ea671e3765","measure":"24 Skinned"},{"id":"640c2dd963a319ea671e3684","measure":"4 large"},{"id":"640c2dd963a319ea671e3784","measure":"2"},{"id":"640c2dd963a319ea671e3689","measure":"1"},{"id":"640c2dd963a319ea671e368d","measure":"350g"},{"id":"640c2dd963a319ea671e3794","measure":"150ml"},{"id":"640c2dd963a319ea671e3687","measure":"1 tsp"},{"id":"640c2dd963a319ea671e36de","measure":"4 sprigs"},{"id":"640c2dd963a319ea671e3731","measure":"4 sprigs"},{"id":"640c2dd963a319ea671e3696","measure":"450ml"}],"rating":4.01},{"_id":"6462a8f74c3d0ddd2889800c","title":"Lancashire hotpot","category":"Lamb","area":"British","instructions":"Heat oven to 160C/fan 140C/gas 3. Heat some dripping or butter in a large shallow casserole dish, brown the lamb in batches, lift to a plate, then repeat with the kidneys.\\r\\nFry the onions and carrots in the pan with a little more dripping until golden. Sprinkle over the flour, allow to cook for a couple of mins, shake over the Worcestershire sauce, pour in the stock, then bring to the boil. Stir in the meat and bay leaves, then turn off the heat. Arrange the sliced potatoes on top of the meat, then drizzle with a little more dripping. Cover, then place in the oven for about 1\xbd hrs until the potatoes are cooked.\\r\\nRemove the lid, brush the potatoes with a little more dripping, then turn the oven up to brown the potatoes, or finish under the grill for 5-8 mins until brown.","description":"A hearty casserole with tender lamb and vegetables, topped with sliced potatoes.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Lancashire%20hotpot.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Lancashire%20hotpot.jpg","time":"115","youtube":"https://www.youtube.com/watch?v=w6TS5J8YRA4","tags":[],"ingredients":[{"id":"640c2dd963a319ea671e367e","measure":"100g "},{"id":"640c2dd963a319ea671e370b","measure":"900g"},{"id":"640c2dd963a319ea671e3801","measure":"3"},{"id":"640c2dd963a319ea671e372e","measure":"2 medium"},{"id":"640c2dd963a319ea671e3684","measure":"4 sliced"},{"id":"640c2dd963a319ea671e3743","measure":"25g"},{"id":"640c2dd963a319ea671e3798","measure":"2 tsp"},{"id":"640c2dd963a319ea671e3696","measure":"500ml"},{"id":"640c2dd963a319ea671e366b","measure":"2"},{"id":"640c2dd963a319ea671e3746","measure":"900g"}],"rating":3.71},{"_id":"6462a8f74c3d0ddd28897fbf","title":"Teriyaki Chicken Casserole","category":"Chicken","area":"Japanese","instructions":"Preheat oven to 350\xb0 F. Spray a 9x13-inch baking pan with non-stick spray.\\r\\nCombine soy sauce, \xbd cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\\r\\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\\r\\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\\r\\n*Meanwhile, steam or cook the vegetables according to package directions.\\r\\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!","description":"A Japanese-inspired casserole made with chicken, teriyaki sauce, rice, and vegetables.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg","time":"75","youtube":"https://www.youtube.com/watch?v=4aZr5hZXP_s","tags":["Meat","Casserole"],"ingredients":[{"id":"640c2dd963a319ea671e376c","measure":"3/4 cup"},{"id":"640c2dd963a319ea671e378f","measure":"1/2 cup"},{"id":"640c2dd963a319ea671e367d","measure":"1/4 cup"},{"id":"640c2dd963a319ea671e36f8","measure":"1/2 teaspoon"},{"id":"640c2dd963a319ea671e3720","measure":"1/2 teaspoon"},{"id":"640c2dd963a319ea671e36b3","measure":"4 Tablespoons"},{"id":"640c2dd963a319ea671e3694","measure":"2"},{"id":"640c2dd963a319ea671e3772","measure":"1 (12 oz.)"},{"id":"640c2dd963a319ea671e367c","measure":"3 cups"}],"rating":3.38},{"_id":"6462a8f74c3d0ddd28897fc3","title":"Honey Teriyaki Salmon","category":"Seafood","area":"Japanese","instructions":"Mix all the ingredients in the Honey Teriyaki Glaze together. Whisk to blend well. Combine the salmon and the Glaze together.\\r\\n\\r\\nHeat up a skillet on medium-low heat. Add the oil, Pan-fry the salmon on both sides until it\u2019s completely cooked inside and the glaze thickens.\\r\\n\\r\\nGarnish with sesame and serve immediately.","description":"A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Honey%20Teriyaki%20Salmon.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Honey%20Teriyaki%20Salmon.jpg","time":"25","youtube":"https://www.youtube.com/watch?v=4MpYuaJsvRw","tags":["Fish","Breakfast","DateNight"],"ingredients":[{"id":"640c2dd963a319ea671e365c","measure":"1 lb"},{"id":"640c2dd963a319ea671e372c","measure":"1 tablespoon"},{"id":"640c2dd963a319ea671e376c","measure":"2 tablespoons"},{"id":"640c2dd963a319ea671e375c","measure":"2 tablespoons"},{"id":"640c2dd963a319ea671e3764","measure":"4 tablespoons"}],"rating":4.8},{"_id":"6462a8f74c3d0ddd28898019","title":"Poutine","category":"Miscellaneous","area":"Canadian","instructions":"Heat oil in a deep fryer or deep heavy skillet to 365\xb0F (185\xb0C).\\r\\nWarm gravy in saucepan or microwave.\\r\\nPlace the fries into the hot oil, and cook until light brown, about 5 minutes.\\r\\nRemove to a paper towel lined plate to drain.\\r\\nPlace the fries on a serving platter, and sprinkle the cheese over them.\\r\\nLadle gravy over the fries and cheese, and serve immediately.","description":"A Canadian dish made with french fries, cheese curds, and gravy.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Poutine.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Poutine.jpg","time":"20","youtube":"https://www.youtube.com/watch?v=UVAMAoA2_WU","tags":["UnHealthy","Speciality","HangoverFood"],"ingredients":[{"id":"640c2dd963a319ea671e3789","measure":"Dash"},{"id":"640c2dd963a319ea671e366e","measure":"1 Can"},{"id":"640c2dd963a319ea671e3746","measure":"5 thin cut"},{"id":"640c2dd963a319ea671e3690","measure":"2 cups"}],"rating":1.29}]}');

},{}],"hZBA8":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse("[{\"_id\":\"6462a6f04c3d0ddd28897f9b\",\"name\":\"Ukrainian\"},{\"_id\":\"6462a6f04c3d0ddd28897f9c\",\"name\":\"Italian\"},{\"_id\":\"6462a6f04c3d0ddd28897f9d\",\"name\":\"Moroccan\"},{\"_id\":\"6462a6f04c3d0ddd28897f9e\",\"name\":\"Unknown\"},{\"_id\":\"6462a6f04c3d0ddd28897f9f\",\"name\":\"Thai\"},{\"_id\":\"6462a6f04c3d0ddd28897fa0\",\"name\":\"Irish\"},{\"_id\":\"6462a6f04c3d0ddd28897fa1\",\"name\":\"British\"},{\"_id\":\"6462a6f04c3d0ddd28897fa2\",\"name\":\"Japanese\"},{\"_id\":\"6462a6f04c3d0ddd28897fa3\",\"name\":\"French\"},{\"_id\":\"6462a6f04c3d0ddd28897fa4\",\"name\":\"Indian\"},{\"_id\":\"6462a6f04c3d0ddd28897fa5\",\"name\":\"American\"},{\"_id\":\"6462a6f04c3d0ddd28897fa6\",\"name\":\"Mexican\"},{\"_id\":\"6462a6f04c3d0ddd28897fa7\",\"name\":\"Malaysian\"},{\"_id\":\"6462a6f04c3d0ddd28897fa8\",\"name\":\"Dutch\"},{\"_id\":\"6462a6f04c3d0ddd28897fa9\",\"name\":\"Spanish\"},{\"_id\":\"6462a6f04c3d0ddd28897faa\",\"name\":\"Canadian\"},{\"_id\":\"6462a6f04c3d0ddd28897fab\",\"name\":\"Vietnamese\"},{\"_id\":\"6462a6f04c3d0ddd28897fac\",\"name\":\"Tunisian\"},{\"_id\":\"6462a6f04c3d0ddd28897fad\",\"name\":\"Greek\"},{\"_id\":\"6462a6f04c3d0ddd28897fae\",\"name\":\"Portuguese\"},{\"_id\":\"6462a6f04c3d0ddd28897faf\",\"name\":\"Croatian\"},{\"_id\":\"6462a6f04c3d0ddd28897fb0\",\"name\":\"Chinese\"},{\"_id\":\"6462a6f04c3d0ddd28897fb1\",\"name\":\"Egyptian\"},{\"_id\":\"6462a6f04c3d0ddd28897fb2\",\"name\":\"Jamaican\"},{\"_id\":\"6462a6f04c3d0ddd28897fb3\",\"name\":\"Polish\"},{\"_id\":\"6462a6f04c3d0ddd28897fb4\",\"name\":\"Kenyan\"},{\"_id\":\"6462a6f04c3d0ddd28897fb5\",\"name\":\"Turkish\"}]");

},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eMBQc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateRecipes", ()=>updateRecipes);
var _fetchData = require("./fetchData");
var _categoriesDisplay = require("./categoriesDisplay");
const container = document.getElementById("recipe-results");
// Search input reference
const searchInput = document.getElementById("search-recipes");
async function updateRecipes() {
    const allRecipes = await (0, _fetchData.fetchRecipes)();
    const searchQuery = searchInput?.value?.trim().toLowerCase() || "";
    const selectedCategory = (0, _categoriesDisplay.getActiveCategory)();
    let filtered = allRecipes;
    // Filter by category
    if (selectedCategory) filtered = filtered.filter((r)=>r.category === selectedCategory);
    // Filter by search input
    if (searchQuery) filtered = filtered.filter((r)=>r.title.toLowerCase().includes(searchQuery));
    renderRecipes(filtered);
}
function renderRecipes(recipes) {
    container.innerHTML = "";
    if (!recipes || recipes.length === 0) {
        container.innerHTML = "<p>No recipes found.</p>";
        return;
    }
    recipes.forEach((recipe)=>{
        const item = document.createElement("div");
        item.classList.add("recipe-card");
        item.innerHTML = `
      <h4>${recipe.title}</h4>
      <img src="${recipe.thumb}" alt="${recipe.title}" width="150" />
      <p>${recipe.description}</p>
    `;
        container.appendChild(item);
    });
}

},{"./fetchData":"cte0F","./categoriesDisplay":"aP1p0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hwZYG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ingredientListInit", ()=>ingredientListInit);
var _choicesJs = require("choices.js");
var _choicesJsDefault = parcelHelpers.interopDefault(_choicesJs);
var _choicesMinCss = require("choices.js/public/assets/styles/choices.min.css");
var _fetchData = require("./fetchData");
let choicesInstance;
function ingredientList(ingredientList) {
    const ingredientSelect = document.getElementById("search-by-ingredients");
    // Clear previous options
    ingredientSelect.innerHTML = "";
    // Add options from the fetched list
    ingredientList.forEach((element)=>{
        const option = document.createElement("option");
        option.textContent = element.name;
        option.value = element.name;
        ingredientSelect.appendChild(option);
    });
    // Destroy old instance if needed
    if (choicesInstance) choicesInstance.destroy();
    // Initialize Choices
    choicesInstance = new (0, _choicesJsDefault.default)(ingredientSelect, {
        removeItemButton: false,
        placeholderValue: "Select ingredients",
        searchPlaceholderValue: "Type to search",
        searchEnabled: true,
        shouldSort: false,
        duplicateItemsAllowed: false
    });
}
function ingredientListInit() {
    (0, _fetchData.fetchIngredientsList)().then((data)=>{
        console.log("Parsed JSON data:", data);
        ingredientList(data);
    }).catch((error)=>{
        console.error("Error fetching ingredients:", error);
    });
}

},{"choices.js":"ip5eZ","choices.js/public/assets/styles/choices.min.css":"i38sz","./fetchData":"cte0F","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ip5eZ":[function(require,module,exports,__globalThis) {
/*! choices.js v11.1.0 | © 2025 Josh Johnson | https://github.com/jshjohnson/Choices#readme */ /******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Choices);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" && SuppressedError;
var ActionType = {
    ADD_CHOICE: 'ADD_CHOICE',
    REMOVE_CHOICE: 'REMOVE_CHOICE',
    FILTER_CHOICES: 'FILTER_CHOICES',
    ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
    CLEAR_CHOICES: 'CLEAR_CHOICES',
    ADD_GROUP: 'ADD_GROUP',
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM'
};
var EventType = {
    showDropdown: 'showDropdown',
    hideDropdown: 'hideDropdown',
    change: 'change',
    choice: 'choice',
    search: 'search',
    addItem: 'addItem',
    removeItem: 'removeItem',
    highlightItem: 'highlightItem',
    highlightChoice: 'highlightChoice',
    unhighlightItem: 'unhighlightItem'
};
var KeyCodeMap = {
    TAB_KEY: 9,
    SHIFT_KEY: 16,
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
var ObjectsInConfig = [
    'fuseOptions',
    'classNames'
];
var PassedElementTypes = {
    Text: 'text',
    SelectOne: 'select-one',
    SelectMultiple: 'select-multiple'
};
var addChoice = function(choice) {
    return {
        type: ActionType.ADD_CHOICE,
        choice: choice
    };
};
var removeChoice = function(choice) {
    return {
        type: ActionType.REMOVE_CHOICE,
        choice: choice
    };
};
var filterChoices = function(results) {
    return {
        type: ActionType.FILTER_CHOICES,
        results: results
    };
};
var activateChoices = function(active) {
    return {
        type: ActionType.ACTIVATE_CHOICES,
        active: active
    };
};
var addGroup = function(group) {
    return {
        type: ActionType.ADD_GROUP,
        group: group
    };
};
var addItem = function(item) {
    return {
        type: ActionType.ADD_ITEM,
        item: item
    };
};
var removeItem$1 = function(item) {
    return {
        type: ActionType.REMOVE_ITEM,
        item: item
    };
};
var highlightItem = function(item, highlighted) {
    return {
        type: ActionType.HIGHLIGHT_ITEM,
        item: item,
        highlighted: highlighted
    };
};
var getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var generateChars = function(length) {
    return Array.from({
        length: length
    }, function() {
        return getRandomNumber(0, 36).toString(36);
    }).join('');
};
var generateId = function(element, prefix) {
    var id = element.id || element.name && "".concat(element.name, "-").concat(generateChars(2)) || generateChars(4);
    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = "".concat(prefix, "-").concat(id);
    return id;
};
var getAdjacentEl = function(startEl, selector, direction) {
    if (direction === void 0) direction = 1;
    var prop = "".concat(direction > 0 ? 'next' : 'previous', "ElementSibling");
    var sibling = startEl[prop];
    while(sibling){
        if (sibling.matches(selector)) return sibling;
        sibling = sibling[prop];
    }
    return null;
};
var isScrolledIntoView = function(element, parent, direction) {
    if (direction === void 0) direction = 1;
    var isVisible;
    if (direction > 0) // In view from bottom
    isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
    else // In view from top
    isVisible = element.offsetTop >= parent.scrollTop;
    return isVisible;
};
var sanitise = function(value) {
    if (typeof value !== 'string') {
        if (value === null || value === undefined) return '';
        if (typeof value === 'object') {
            if ('raw' in value) return sanitise(value.raw);
            if ('trusted' in value) return value.trusted;
        }
        return value;
    }
    return value.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/'/g, '&#039;').replace(/"/g, '&quot;');
};
var strToEl = function() {
    var tmpEl = document.createElement('div');
    return function(str) {
        tmpEl.innerHTML = str.trim();
        var firstChild = tmpEl.children[0];
        while(tmpEl.firstChild)tmpEl.removeChild(tmpEl.firstChild);
        return firstChild;
    };
}();
var resolveNoticeFunction = function(fn, value) {
    return typeof fn === 'function' ? fn(sanitise(value), value) : fn;
};
var resolveStringFunction = function(fn) {
    return typeof fn === 'function' ? fn() : fn;
};
var unwrapStringForRaw = function(s) {
    if (typeof s === 'string') return s;
    if (typeof s === 'object') {
        if ('trusted' in s) return s.trusted;
        if ('raw' in s) return s.raw;
    }
    return '';
};
var unwrapStringForEscaped = function(s) {
    if (typeof s === 'string') return s;
    if (typeof s === 'object') {
        if ('escaped' in s) return s.escaped;
        if ('trusted' in s) return s.trusted;
    }
    return '';
};
var escapeForTemplate = function(allowHTML, s) {
    return allowHTML ? unwrapStringForEscaped(s) : sanitise(s);
};
var setElementHtml = function(el, allowHtml, html) {
    el.innerHTML = escapeForTemplate(allowHtml, html);
};
var sortByAlpha = function(_a, _b) {
    var value = _a.value, _c = _a.label, label = _c === void 0 ? value : _c;
    var value2 = _b.value, _d = _b.label, label2 = _d === void 0 ? value2 : _d;
    return unwrapStringForRaw(label).localeCompare(unwrapStringForRaw(label2), [], {
        sensitivity: 'base',
        ignorePunctuation: true,
        numeric: true
    });
};
var sortByRank = function(a, b) {
    return a.rank - b.rank;
};
var dispatchEvent = function(element, type, customArgs) {
    if (customArgs === void 0) customArgs = null;
    var event = new CustomEvent(type, {
        detail: customArgs,
        bubbles: true,
        cancelable: true
    });
    return element.dispatchEvent(event);
};
/**
 * Returns an array of keys present on the first but missing on the second object
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
var diff = function(a, b) {
    var aKeys = Object.keys(a).sort();
    var bKeys = Object.keys(b).sort();
    return aKeys.filter(function(i) {
        return bKeys.indexOf(i) < 0;
    });
};
var getClassNames = function(ClassNames) {
    return Array.isArray(ClassNames) ? ClassNames : [
        ClassNames
    ];
};
var getClassNamesSelector = function(option) {
    if (option && Array.isArray(option)) return option.map(function(item) {
        return ".".concat(item);
    }).join('');
    return ".".concat(option);
};
var addClassesToElement = function(element, className) {
    var _a;
    (_a = element.classList).add.apply(_a, getClassNames(className));
};
var removeClassesFromElement = function(element, className) {
    var _a;
    (_a = element.classList).remove.apply(_a, getClassNames(className));
};
var parseCustomProperties = function(customProperties) {
    if (typeof customProperties !== 'undefined') try {
        return JSON.parse(customProperties);
    } catch (e) {
        return customProperties;
    }
    return {};
};
var updateClassList = function(item, add, remove) {
    var itemEl = item.itemEl;
    if (itemEl) {
        removeClassesFromElement(itemEl, remove);
        addClassesToElement(itemEl, add);
    }
};
var Dropdown = /** @class */ function() {
    function Dropdown(_a) {
        var element = _a.element, type = _a.type, classNames = _a.classNames;
        this.element = element;
        this.classNames = classNames;
        this.type = type;
        this.isActive = false;
    }
    /**
     * Show dropdown to user by adding active state class
     */ Dropdown.prototype.show = function() {
        addClassesToElement(this.element, this.classNames.activeState);
        this.element.setAttribute('aria-expanded', 'true');
        this.isActive = true;
        return this;
    };
    /**
     * Hide dropdown from user
     */ Dropdown.prototype.hide = function() {
        removeClassesFromElement(this.element, this.classNames.activeState);
        this.element.setAttribute('aria-expanded', 'false');
        this.isActive = false;
        return this;
    };
    return Dropdown;
}();
var Container = /** @class */ function() {
    function Container(_a) {
        var element = _a.element, type = _a.type, classNames = _a.classNames, position = _a.position;
        this.element = element;
        this.classNames = classNames;
        this.type = type;
        this.position = position;
        this.isOpen = false;
        this.isFlipped = false;
        this.isDisabled = false;
        this.isLoading = false;
    }
    /**
     * Determine whether container should be flipped based on passed
     * dropdown position
     */ Container.prototype.shouldFlip = function(dropdownPos, dropdownHeight) {
        // If flip is enabled and the dropdown bottom position is
        // greater than the window height flip the dropdown.
        var shouldFlip = false;
        if (this.position === 'auto') shouldFlip = this.element.getBoundingClientRect().top - dropdownHeight >= 0 && !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches;
        else if (this.position === 'top') shouldFlip = true;
        return shouldFlip;
    };
    Container.prototype.setActiveDescendant = function(activeDescendantID) {
        this.element.setAttribute('aria-activedescendant', activeDescendantID);
    };
    Container.prototype.removeActiveDescendant = function() {
        this.element.removeAttribute('aria-activedescendant');
    };
    Container.prototype.open = function(dropdownPos, dropdownHeight) {
        addClassesToElement(this.element, this.classNames.openState);
        this.element.setAttribute('aria-expanded', 'true');
        this.isOpen = true;
        if (this.shouldFlip(dropdownPos, dropdownHeight)) {
            addClassesToElement(this.element, this.classNames.flippedState);
            this.isFlipped = true;
        }
    };
    Container.prototype.close = function() {
        removeClassesFromElement(this.element, this.classNames.openState);
        this.element.setAttribute('aria-expanded', 'false');
        this.removeActiveDescendant();
        this.isOpen = false;
        // A dropdown flips if it does not have space within the page
        if (this.isFlipped) {
            removeClassesFromElement(this.element, this.classNames.flippedState);
            this.isFlipped = false;
        }
    };
    Container.prototype.addFocusState = function() {
        addClassesToElement(this.element, this.classNames.focusState);
    };
    Container.prototype.removeFocusState = function() {
        removeClassesFromElement(this.element, this.classNames.focusState);
    };
    Container.prototype.enable = function() {
        removeClassesFromElement(this.element, this.classNames.disabledState);
        this.element.removeAttribute('aria-disabled');
        if (this.type === PassedElementTypes.SelectOne) this.element.setAttribute('tabindex', '0');
        this.isDisabled = false;
    };
    Container.prototype.disable = function() {
        addClassesToElement(this.element, this.classNames.disabledState);
        this.element.setAttribute('aria-disabled', 'true');
        if (this.type === PassedElementTypes.SelectOne) this.element.setAttribute('tabindex', '-1');
        this.isDisabled = true;
    };
    Container.prototype.wrap = function(element) {
        var el = this.element;
        var parentNode = element.parentNode;
        if (parentNode) {
            if (element.nextSibling) parentNode.insertBefore(el, element.nextSibling);
            else parentNode.appendChild(el);
        }
        el.appendChild(element);
    };
    Container.prototype.unwrap = function(element) {
        var el = this.element;
        var parentNode = el.parentNode;
        if (parentNode) {
            // Move passed element outside this element
            parentNode.insertBefore(element, el);
            // Remove this element
            parentNode.removeChild(el);
        }
    };
    Container.prototype.addLoadingState = function() {
        addClassesToElement(this.element, this.classNames.loadingState);
        this.element.setAttribute('aria-busy', 'true');
        this.isLoading = true;
    };
    Container.prototype.removeLoadingState = function() {
        removeClassesFromElement(this.element, this.classNames.loadingState);
        this.element.removeAttribute('aria-busy');
        this.isLoading = false;
    };
    return Container;
}();
var Input = /** @class */ function() {
    function Input(_a) {
        var element = _a.element, type = _a.type, classNames = _a.classNames, preventPaste = _a.preventPaste;
        this.element = element;
        this.type = type;
        this.classNames = classNames;
        this.preventPaste = preventPaste;
        this.isFocussed = this.element.isEqualNode(document.activeElement);
        this.isDisabled = element.disabled;
        this._onPaste = this._onPaste.bind(this);
        this._onInput = this._onInput.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
    }
    Object.defineProperty(Input.prototype, "placeholder", {
        set: function(placeholder) {
            this.element.placeholder = placeholder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "value", {
        get: function() {
            return this.element.value;
        },
        set: function(value) {
            this.element.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Input.prototype.addEventListeners = function() {
        var el = this.element;
        el.addEventListener('paste', this._onPaste);
        el.addEventListener('input', this._onInput, {
            passive: true
        });
        el.addEventListener('focus', this._onFocus, {
            passive: true
        });
        el.addEventListener('blur', this._onBlur, {
            passive: true
        });
    };
    Input.prototype.removeEventListeners = function() {
        var el = this.element;
        el.removeEventListener('input', this._onInput);
        el.removeEventListener('paste', this._onPaste);
        el.removeEventListener('focus', this._onFocus);
        el.removeEventListener('blur', this._onBlur);
    };
    Input.prototype.enable = function() {
        var el = this.element;
        el.removeAttribute('disabled');
        this.isDisabled = false;
    };
    Input.prototype.disable = function() {
        var el = this.element;
        el.setAttribute('disabled', '');
        this.isDisabled = true;
    };
    Input.prototype.focus = function() {
        if (!this.isFocussed) this.element.focus();
    };
    Input.prototype.blur = function() {
        if (this.isFocussed) this.element.blur();
    };
    Input.prototype.clear = function(setWidth) {
        if (setWidth === void 0) setWidth = true;
        this.element.value = '';
        if (setWidth) this.setWidth();
        return this;
    };
    /**
     * Set the correct input width based on placeholder
     * value or input value
     */ Input.prototype.setWidth = function() {
        // Resize input to contents or placeholder
        var element = this.element;
        element.style.minWidth = "".concat(element.placeholder.length + 1, "ch");
        element.style.width = "".concat(element.value.length + 1, "ch");
    };
    Input.prototype.setActiveDescendant = function(activeDescendantID) {
        this.element.setAttribute('aria-activedescendant', activeDescendantID);
    };
    Input.prototype.removeActiveDescendant = function() {
        this.element.removeAttribute('aria-activedescendant');
    };
    Input.prototype._onInput = function() {
        if (this.type !== PassedElementTypes.SelectOne) this.setWidth();
    };
    Input.prototype._onPaste = function(event) {
        if (this.preventPaste) event.preventDefault();
    };
    Input.prototype._onFocus = function() {
        this.isFocussed = true;
    };
    Input.prototype._onBlur = function() {
        this.isFocussed = false;
    };
    return Input;
}();
var SCROLLING_SPEED = 4;
var List = /** @class */ function() {
    function List(_a) {
        var element = _a.element;
        this.element = element;
        this.scrollPos = this.element.scrollTop;
        this.height = this.element.offsetHeight;
    }
    List.prototype.prepend = function(node) {
        var child = this.element.firstElementChild;
        if (child) this.element.insertBefore(node, child);
        else this.element.append(node);
    };
    List.prototype.scrollToTop = function() {
        this.element.scrollTop = 0;
    };
    List.prototype.scrollToChildElement = function(element, direction) {
        var _this = this;
        if (!element) return;
        var listHeight = this.element.offsetHeight;
        // Scroll position of dropdown
        var listScrollPosition = this.element.scrollTop + listHeight;
        var elementHeight = element.offsetHeight;
        // Distance from bottom of element to top of parent
        var elementPos = element.offsetTop + elementHeight;
        // Difference between the element and scroll position
        var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
        requestAnimationFrame(function() {
            _this._animateScroll(destination, direction);
        });
    };
    List.prototype._scrollDown = function(scrollPos, strength, destination) {
        var easing = (destination - scrollPos) / strength;
        var distance = easing > 1 ? easing : 1;
        this.element.scrollTop = scrollPos + distance;
    };
    List.prototype._scrollUp = function(scrollPos, strength, destination) {
        var easing = (scrollPos - destination) / strength;
        var distance = easing > 1 ? easing : 1;
        this.element.scrollTop = scrollPos - distance;
    };
    List.prototype._animateScroll = function(destination, direction) {
        var _this = this;
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
            _this._animateScroll(destination, direction);
        });
    };
    return List;
}();
var WrappedElement = /** @class */ function() {
    function WrappedElement(_a) {
        var element = _a.element, classNames = _a.classNames;
        this.element = element;
        this.classNames = classNames;
        this.isDisabled = false;
    }
    Object.defineProperty(WrappedElement.prototype, "isActive", {
        get: function() {
            return this.element.dataset.choice === 'active';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WrappedElement.prototype, "dir", {
        get: function() {
            return this.element.dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WrappedElement.prototype, "value", {
        get: function() {
            return this.element.value;
        },
        set: function(value) {
            this.element.setAttribute('value', value);
            this.element.value = value;
        },
        enumerable: false,
        configurable: true
    });
    WrappedElement.prototype.conceal = function() {
        var el = this.element;
        // Hide passed input
        addClassesToElement(el, this.classNames.input);
        el.hidden = true;
        // Remove element from tab index
        el.tabIndex = -1;
        // Backup original styles if any
        var origStyle = el.getAttribute('style');
        if (origStyle) el.setAttribute('data-choice-orig-style', origStyle);
        el.setAttribute('data-choice', 'active');
    };
    WrappedElement.prototype.reveal = function() {
        var el = this.element;
        // Reinstate passed element
        removeClassesFromElement(el, this.classNames.input);
        el.hidden = false;
        el.removeAttribute('tabindex');
        // Recover original styles if any
        var origStyle = el.getAttribute('data-choice-orig-style');
        if (origStyle) {
            el.removeAttribute('data-choice-orig-style');
            el.setAttribute('style', origStyle);
        } else el.removeAttribute('style');
        el.removeAttribute('data-choice');
    };
    WrappedElement.prototype.enable = function() {
        this.element.removeAttribute('disabled');
        this.element.disabled = false;
        this.isDisabled = false;
    };
    WrappedElement.prototype.disable = function() {
        this.element.setAttribute('disabled', '');
        this.element.disabled = true;
        this.isDisabled = true;
    };
    WrappedElement.prototype.triggerEvent = function(eventType, data) {
        dispatchEvent(this.element, eventType, data || {});
    };
    return WrappedElement;
}();
var WrappedInput = /** @class */ function(_super) {
    __extends(WrappedInput, _super);
    function WrappedInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WrappedInput;
}(WrappedElement);
var coerceBool = function(arg, defaultValue) {
    if (defaultValue === void 0) defaultValue = true;
    return typeof arg === 'undefined' ? defaultValue : !!arg;
};
var stringToHtmlClass = function(input) {
    if (typeof input === 'string') // eslint-disable-next-line no-param-reassign
    input = input.split(' ').filter(function(s) {
        return s.length;
    });
    if (Array.isArray(input) && input.length) return input;
    return undefined;
};
var mapInputToChoice = function(value, allowGroup, allowRawString) {
    if (allowRawString === void 0) allowRawString = true;
    if (typeof value === 'string') {
        var sanitisedValue = sanitise(value);
        var userValue = allowRawString || sanitisedValue === value ? value : {
            escaped: sanitisedValue,
            raw: value
        };
        var result_1 = mapInputToChoice({
            value: value,
            label: userValue,
            selected: true
        }, false);
        return result_1;
    }
    var groupOrChoice = value;
    if ('choices' in groupOrChoice) {
        if (!allowGroup) // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
        throw new TypeError("optGroup is not allowed");
        var group = groupOrChoice;
        var choices = group.choices.map(function(e) {
            return mapInputToChoice(e, false);
        });
        var result_2 = {
            id: 0,
            label: unwrapStringForRaw(group.label) || group.value,
            active: !!choices.length,
            disabled: !!group.disabled,
            choices: choices
        };
        return result_2;
    }
    var choice = groupOrChoice;
    var result = {
        id: 0,
        group: null,
        score: 0,
        rank: 0,
        value: choice.value,
        label: choice.label || choice.value,
        active: coerceBool(choice.active),
        selected: coerceBool(choice.selected, false),
        disabled: coerceBool(choice.disabled, false),
        placeholder: coerceBool(choice.placeholder, false),
        highlighted: false,
        labelClass: stringToHtmlClass(choice.labelClass),
        labelDescription: choice.labelDescription,
        customProperties: choice.customProperties
    };
    return result;
};
var isHtmlInputElement = function(e) {
    return e.tagName === 'INPUT';
};
var isHtmlSelectElement = function(e) {
    return e.tagName === 'SELECT';
};
var isHtmlOption = function(e) {
    return e.tagName === 'OPTION';
};
var isHtmlOptgroup = function(e) {
    return e.tagName === 'OPTGROUP';
};
var WrappedSelect = /** @class */ function(_super) {
    __extends(WrappedSelect, _super);
    function WrappedSelect(_a) {
        var element = _a.element, classNames = _a.classNames, template = _a.template, extractPlaceholder = _a.extractPlaceholder;
        var _this = _super.call(this, {
            element: element,
            classNames: classNames
        }) || this;
        _this.template = template;
        _this.extractPlaceholder = extractPlaceholder;
        return _this;
    }
    Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
        get: function() {
            return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
            this.element.querySelector('option[placeholder]');
        },
        enumerable: false,
        configurable: true
    });
    WrappedSelect.prototype.addOptions = function(choices) {
        var _this = this;
        var fragment = document.createDocumentFragment();
        choices.forEach(function(obj) {
            var choice = obj;
            if (choice.element) return;
            var option = _this.template(choice);
            fragment.appendChild(option);
            choice.element = option;
        });
        this.element.appendChild(fragment);
    };
    WrappedSelect.prototype.optionsAsChoices = function() {
        var _this = this;
        var choices = [];
        this.element.querySelectorAll(':scope > option, :scope > optgroup').forEach(function(e) {
            if (isHtmlOption(e)) choices.push(_this._optionToChoice(e));
            else if (isHtmlOptgroup(e)) choices.push(_this._optgroupToChoice(e));
        // todo: hr as empty optgroup, requires displaying empty opt-groups to be useful
        });
        return choices;
    };
    // eslint-disable-next-line class-methods-use-this
    WrappedSelect.prototype._optionToChoice = function(option) {
        // option.value returns the label if there is no value attribute, which can break legacy placeholder attribute support
        if (!option.hasAttribute('value') && option.hasAttribute('placeholder')) {
            option.setAttribute('value', '');
            option.value = '';
        }
        return {
            id: 0,
            group: null,
            score: 0,
            rank: 0,
            value: option.value,
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
            // This attribute is text for the label indicating the meaning of the option. If the `label` attribute isn't defined, its value is that of the element text content (ie `innerText`).
            label: option.label,
            element: option,
            active: true,
            // this returns true if nothing is selected on initial load, which will break placeholder support
            selected: this.extractPlaceholder ? option.selected : option.hasAttribute('selected'),
            disabled: option.disabled,
            highlighted: false,
            placeholder: this.extractPlaceholder && (!option.value || option.hasAttribute('placeholder')),
            labelClass: typeof option.dataset.labelClass !== 'undefined' ? stringToHtmlClass(option.dataset.labelClass) : undefined,
            labelDescription: typeof option.dataset.labelDescription !== 'undefined' ? option.dataset.labelDescription : undefined,
            customProperties: parseCustomProperties(option.dataset.customProperties)
        };
    };
    WrappedSelect.prototype._optgroupToChoice = function(optgroup) {
        var _this = this;
        var options = optgroup.querySelectorAll('option');
        var choices = Array.from(options).map(function(option) {
            return _this._optionToChoice(option);
        });
        return {
            id: 0,
            label: optgroup.label || '',
            element: optgroup,
            active: !!choices.length,
            disabled: optgroup.disabled,
            choices: choices
        };
    };
    return WrappedSelect;
}(WrappedElement);
var DEFAULT_CLASSNAMES = {
    containerOuter: [
        'choices'
    ],
    containerInner: [
        'choices__inner'
    ],
    input: [
        'choices__input'
    ],
    inputCloned: [
        'choices__input--cloned'
    ],
    list: [
        'choices__list'
    ],
    listItems: [
        'choices__list--multiple'
    ],
    listSingle: [
        'choices__list--single'
    ],
    listDropdown: [
        'choices__list--dropdown'
    ],
    item: [
        'choices__item'
    ],
    itemSelectable: [
        'choices__item--selectable'
    ],
    itemDisabled: [
        'choices__item--disabled'
    ],
    itemChoice: [
        'choices__item--choice'
    ],
    description: [
        'choices__description'
    ],
    placeholder: [
        'choices__placeholder'
    ],
    group: [
        'choices__group'
    ],
    groupHeading: [
        'choices__heading'
    ],
    button: [
        'choices__button'
    ],
    activeState: [
        'is-active'
    ],
    focusState: [
        'is-focused'
    ],
    openState: [
        'is-open'
    ],
    disabledState: [
        'is-disabled'
    ],
    highlightedState: [
        'is-highlighted'
    ],
    selectedState: [
        'is-selected'
    ],
    flippedState: [
        'is-flipped'
    ],
    loadingState: [
        'is-loading'
    ],
    notice: [
        'choices__notice'
    ],
    addChoice: [
        'choices__item--selectable',
        'add-choice'
    ],
    noResults: [
        'has-no-results'
    ],
    noChoices: [
        'has-no-choices'
    ]
};
var DEFAULT_CONFIG = {
    items: [],
    choices: [],
    silent: false,
    renderChoiceLimit: -1,
    maxItemCount: -1,
    closeDropdownOnSelect: 'auto',
    singleModeForMultiSelect: false,
    addChoices: false,
    addItems: true,
    addItemFilter: function(value) {
        return !!value && value !== '';
    },
    removeItems: true,
    removeItemButton: false,
    removeItemButtonAlignLeft: false,
    editItems: false,
    allowHTML: false,
    allowHtmlUserInput: false,
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
    shadowRoot: null,
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
    addItemText: function(value) {
        return "Press Enter to add <b>\"".concat(value, "\"</b>");
    },
    removeItemIconText: function() {
        return "Remove item";
    },
    removeItemLabelText: function(value) {
        return "Remove item: ".concat(value);
    },
    maxItemText: function(maxItemCount) {
        return "Only ".concat(maxItemCount, " values can be added");
    },
    valueComparer: function(value1, value2) {
        return value1 === value2;
    },
    fuseOptions: {
        includeScore: true
    },
    labelId: '',
    callbackOnInit: null,
    callbackOnCreateTemplates: null,
    classNames: DEFAULT_CLASSNAMES,
    appendGroupInSearch: false
};
var removeItem = function(item) {
    var itemEl = item.itemEl;
    if (itemEl) {
        itemEl.remove();
        item.itemEl = undefined;
    }
};
function items(s, action, context) {
    var state = s;
    var update = true;
    switch(action.type){
        case ActionType.ADD_ITEM:
            action.item.selected = true;
            var el = action.item.element;
            if (el) {
                el.selected = true;
                el.setAttribute('selected', '');
            }
            state.push(action.item);
            break;
        case ActionType.REMOVE_ITEM:
            action.item.selected = false;
            var el = action.item.element;
            if (el) {
                el.selected = false;
                el.removeAttribute('selected');
                // For a select-one, if all options are deselected, the first item is selected. To set a black value, select.value needs to be set
                var select = el.parentElement;
                if (select && isHtmlSelectElement(select) && select.type === PassedElementTypes.SelectOne) select.value = '';
            }
            // this is mixing concerns, but this is *so much faster*
            removeItem(action.item);
            state = state.filter(function(choice) {
                return choice.id !== action.item.id;
            });
            break;
        case ActionType.REMOVE_CHOICE:
            removeItem(action.choice);
            state = state.filter(function(item) {
                return item.id !== action.choice.id;
            });
            break;
        case ActionType.HIGHLIGHT_ITEM:
            var highlighted = action.highlighted;
            var item = state.find(function(obj) {
                return obj.id === action.item.id;
            });
            if (item && item.highlighted !== highlighted) {
                item.highlighted = highlighted;
                if (context) updateClassList(item, highlighted ? context.classNames.highlightedState : context.classNames.selectedState, highlighted ? context.classNames.selectedState : context.classNames.highlightedState);
            }
            break;
        default:
            update = false;
            break;
    }
    return {
        state: state,
        update: update
    };
}
function groups(s, action) {
    var state = s;
    var update = true;
    switch(action.type){
        case ActionType.ADD_GROUP:
            state.push(action.group);
            break;
        case ActionType.CLEAR_CHOICES:
            state = [];
            break;
        default:
            update = false;
            break;
    }
    return {
        state: state,
        update: update
    };
}
/* eslint-disable */ function choices(s, action, context) {
    var state = s;
    var update = true;
    switch(action.type){
        case ActionType.ADD_CHOICE:
            state.push(action.choice);
            break;
        case ActionType.REMOVE_CHOICE:
            action.choice.choiceEl = undefined;
            if (action.choice.group) action.choice.group.choices = action.choice.group.choices.filter(function(obj) {
                return obj.id !== action.choice.id;
            });
            state = state.filter(function(obj) {
                return obj.id !== action.choice.id;
            });
            break;
        case ActionType.ADD_ITEM:
        case ActionType.REMOVE_ITEM:
            action.item.choiceEl = undefined;
            break;
        case ActionType.FILTER_CHOICES:
            // avoid O(n^2) algorithm complexity when searching/filtering choices
            var scoreLookup_1 = [];
            action.results.forEach(function(result) {
                scoreLookup_1[result.item.id] = result;
            });
            state.forEach(function(choice) {
                var result = scoreLookup_1[choice.id];
                if (result !== undefined) {
                    choice.score = result.score;
                    choice.rank = result.rank;
                    choice.active = true;
                } else {
                    choice.score = 0;
                    choice.rank = 0;
                    choice.active = false;
                }
                if (context && context.appendGroupInSearch) choice.choiceEl = undefined;
            });
            break;
        case ActionType.ACTIVATE_CHOICES:
            state.forEach(function(choice) {
                choice.active = action.active;
                if (context && context.appendGroupInSearch) choice.choiceEl = undefined;
            });
            break;
        case ActionType.CLEAR_CHOICES:
            state = [];
            break;
        default:
            update = false;
            break;
    }
    return {
        state: state,
        update: update
    };
}
var reducers = {
    groups: groups,
    items: items,
    choices: choices
};
var Store = /** @class */ function() {
    function Store(context) {
        this._state = this.defaultState;
        this._listeners = [];
        this._txn = 0;
        this._context = context;
    }
    Object.defineProperty(Store.prototype, "defaultState", {
        // eslint-disable-next-line class-methods-use-this
        get: function() {
            return {
                groups: [],
                items: [],
                choices: []
            };
        },
        enumerable: false,
        configurable: true
    });
    // eslint-disable-next-line class-methods-use-this
    Store.prototype.changeSet = function(init) {
        return {
            groups: init,
            items: init,
            choices: init
        };
    };
    Store.prototype.reset = function() {
        this._state = this.defaultState;
        var changes = this.changeSet(true);
        if (this._txn) this._changeSet = changes;
        else this._listeners.forEach(function(l) {
            return l(changes);
        });
    };
    Store.prototype.subscribe = function(onChange) {
        this._listeners.push(onChange);
        return this;
    };
    Store.prototype.dispatch = function(action) {
        var _this = this;
        var state = this._state;
        var hasChanges = false;
        var changes = this._changeSet || this.changeSet(false);
        Object.keys(reducers).forEach(function(key) {
            var stateUpdate = reducers[key](state[key], action, _this._context);
            if (stateUpdate.update) {
                hasChanges = true;
                changes[key] = true;
                state[key] = stateUpdate.state;
            }
        });
        if (hasChanges) {
            if (this._txn) this._changeSet = changes;
            else this._listeners.forEach(function(l) {
                return l(changes);
            });
        }
    };
    Store.prototype.withTxn = function(func) {
        this._txn++;
        try {
            func();
        } finally{
            this._txn = Math.max(0, this._txn - 1);
            if (!this._txn) {
                var changeSet_1 = this._changeSet;
                if (changeSet_1) {
                    this._changeSet = undefined;
                    this._listeners.forEach(function(l) {
                        return l(changeSet_1);
                    });
                }
            }
        }
    };
    Object.defineProperty(Store.prototype, "state", {
        /**
         * Get store object
         */ get: function() {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "items", {
        /**
         * Get items from store
         */ get: function() {
            return this.state.items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "highlightedActiveItems", {
        /**
         * Get highlighted items from store
         */ get: function() {
            return this.items.filter(function(item) {
                return item.active && item.highlighted;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "choices", {
        /**
         * Get choices from store
         */ get: function() {
            return this.state.choices;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "activeChoices", {
        /**
         * Get active choices from store
         */ get: function() {
            return this.choices.filter(function(choice) {
                return choice.active;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "searchableChoices", {
        /**
         * Get choices that can be searched (excluding placeholders or disabled choices)
         */ get: function() {
            return this.choices.filter(function(choice) {
                return !choice.disabled && !choice.placeholder;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "groups", {
        /**
         * Get groups from store
         */ get: function() {
            return this.state.groups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "activeGroups", {
        /**
         * Get active groups from store
         */ get: function() {
            var _this = this;
            return this.state.groups.filter(function(group) {
                var isActive = group.active && !group.disabled;
                var hasActiveOptions = _this.state.choices.some(function(choice) {
                    return choice.active && !choice.disabled;
                });
                return isActive && hasActiveOptions;
            }, []);
        },
        enumerable: false,
        configurable: true
    });
    Store.prototype.inTxn = function() {
        return this._txn > 0;
    };
    /**
     * Get single choice by it's ID
     */ Store.prototype.getChoiceById = function(id) {
        return this.activeChoices.find(function(choice) {
            return choice.id === id;
        });
    };
    /**
     * Get group by group id
     */ Store.prototype.getGroupById = function(id) {
        return this.groups.find(function(group) {
            return group.id === id;
        });
    };
    return Store;
}();
var NoticeTypes = {
    noChoices: 'no-choices',
    noResults: 'no-results',
    addChoice: 'add-choice',
    generic: ''
};
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
/**
 * Fuse.js v7.0.0 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2023 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */ function isArray(value) {
    return !Array.isArray ? getTag(value) === '[object Array]' : Array.isArray(value);
}
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') return value;
    let result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
function toString(value) {
    return value == null ? '' : baseToString(value);
}
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return typeof value === 'number';
}
// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && getTag(value) == '[object Boolean]';
}
function isObject(value) {
    return typeof value === 'object';
}
// Checks if `value` is object-like.
function isObjectLike(value) {
    return isObject(value) && value !== null;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function isBlank(value) {
    return !value.trim().length;
}
// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function getTag(value) {
    return value == null ? value === undefined ? '[object Undefined]' : '[object Null]' : Object.prototype.toString.call(value);
}
const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';
const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key)=>`Invalid value for key ${key}`;
const PATTERN_LENGTH_TOO_LARGE = (max)=>`Pattern length exceeds max of ${max}.`;
const MISSING_KEY_PROPERTY = (name)=>`Missing ${name} property in key`;
const INVALID_KEY_WEIGHT_VALUE = (key)=>`Property 'weight' in key '${key}' must be a positive integer`;
const hasOwn = Object.prototype.hasOwnProperty;
class KeyStore {
    constructor(keys){
        this._keys = [];
        this._keyMap = {};
        let totalWeight = 0;
        keys.forEach((key)=>{
            let obj = createKey(key);
            this._keys.push(obj);
            this._keyMap[obj.id] = obj;
            totalWeight += obj.weight;
        });
        // Normalize weights so that their sum is equal to 1
        this._keys.forEach((key)=>{
            key.weight /= totalWeight;
        });
    }
    get(keyId) {
        return this._keyMap[keyId];
    }
    keys() {
        return this._keys;
    }
    toJSON() {
        return JSON.stringify(this._keys);
    }
}
function createKey(key) {
    let path = null;
    let id = null;
    let src = null;
    let weight = 1;
    let getFn = null;
    if (isString(key) || isArray(key)) {
        src = key;
        path = createKeyPath(key);
        id = createKeyId(key);
    } else {
        if (!hasOwn.call(key, 'name')) throw new Error(MISSING_KEY_PROPERTY('name'));
        const name = key.name;
        src = name;
        if (hasOwn.call(key, 'weight')) {
            weight = key.weight;
            if (weight <= 0) throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
        }
        path = createKeyPath(name);
        id = createKeyId(name);
        getFn = key.getFn;
    }
    return {
        path,
        id,
        weight,
        src,
        getFn
    };
}
function createKeyPath(key) {
    return isArray(key) ? key : key.split('.');
}
function createKeyId(key) {
    return isArray(key) ? key.join('.') : key;
}
function get(obj, path) {
    let list = [];
    let arr = false;
    const deepGet = (obj, path, index)=>{
        if (!isDefined(obj)) return;
        if (!path[index]) // If there's no path left, we've arrived at the object we care about.
        list.push(obj);
        else {
            let key = path[index];
            const value = obj[key];
            if (!isDefined(value)) return;
            // If we're at the last value in the path, and if it's a string/number/bool,
            // add it to the list
            if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) list.push(toString(value));
            else if (isArray(value)) {
                arr = true;
                // Search each item in the array.
                for(let i = 0, len = value.length; i < len; i += 1)deepGet(value[i], path, index + 1);
            } else if (path.length) // An object. Recurse further.
            deepGet(value, path, index + 1);
        }
    };
    // Backwards compatibility (since path used to be a string)
    deepGet(obj, isString(path) ? path.split('.') : path, 0);
    return arr ? list : list[0];
}
const MatchOptions = {
    // Whether the matches should be included in the result set. When `true`, each record in the result
    // set will include the indices of the matched characters.
    // These can consequently be used for highlighting purposes.
    includeMatches: false,
    // When `true`, the matching function will continue to the end of a search pattern even if
    // a perfect match has already been located in the string.
    findAllMatches: false,
    // Minimum number of characters that must be matched before a result is considered a match
    minMatchCharLength: 1
};
const BasicOptions = {
    // When `true`, the algorithm continues searching to the end of the input even if a perfect
    // match is found before the end of the same input.
    isCaseSensitive: false,
    // When true, the matching function will continue to the end of a search pattern even if
    includeScore: false,
    // List of properties that will be searched. This also supports nested properties.
    keys: [],
    // Whether to sort the result list, by score
    shouldSort: true,
    // Default sort function: sort by ascending score, ascending index
    sortFn: (a, b)=>a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
const FuzzyOptions = {
    // Approximately where in the text is the pattern expected to be found?
    location: 0,
    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
    // (of both letters and location), a threshold of '1.0' would match anything.
    threshold: 0.6,
    // Determines how close the match must be to the fuzzy location (specified above).
    // An exact letter match which is 'distance' characters away from the fuzzy location
    // would score as a complete mismatch. A distance of '0' requires the match be at
    // the exact location specified, a threshold of '1000' would require a perfect match
    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    distance: 100
};
const AdvancedOptions = {
    // When `true`, it enables the use of unix-like search commands
    useExtendedSearch: false,
    // The get function to use when fetching an object's properties.
    // The default will search nested paths *ie foo.bar.baz*
    getFn: get,
    // When `true`, search will ignore `location` and `distance`, so it won't matter
    // where in the string the pattern appears.
    // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
    ignoreLocation: false,
    // When `true`, the calculation for the relevance score (used for sorting) will
    // ignore the field-length norm.
    // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
    ignoreFieldNorm: false,
    // The weight to determine how much field length norm effects scoring.
    fieldNormWeight: 1
};
var Config = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);
const SPACE = /[^ ]+/g;
// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function norm(weight = 1, mantissa = 3) {
    const cache = new Map();
    const m = Math.pow(10, mantissa);
    return {
        get (value) {
            const numTokens = value.match(SPACE).length;
            if (cache.has(numTokens)) return cache.get(numTokens);
            // Default function is 1/sqrt(x), weight makes that variable
            const norm = 1 / Math.pow(numTokens, 0.5 * weight);
            // In place of `toFixed(mantissa)`, for faster computation
            const n = parseFloat(Math.round(norm * m) / m);
            cache.set(numTokens, n);
            return n;
        },
        clear () {
            cache.clear();
        }
    };
}
class FuseIndex {
    constructor({ getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}){
        this.norm = norm(fieldNormWeight, 3);
        this.getFn = getFn;
        this.isCreated = false;
        this.setIndexRecords();
    }
    setSources(docs = []) {
        this.docs = docs;
    }
    setIndexRecords(records = []) {
        this.records = records;
    }
    setKeys(keys = []) {
        this.keys = keys;
        this._keysMap = {};
        keys.forEach((key, idx)=>{
            this._keysMap[key.id] = idx;
        });
    }
    create() {
        if (this.isCreated || !this.docs.length) return;
        this.isCreated = true;
        // List is Array<String>
        if (isString(this.docs[0])) this.docs.forEach((doc, docIndex)=>{
            this._addString(doc, docIndex);
        });
        else // List is Array<Object>
        this.docs.forEach((doc, docIndex)=>{
            this._addObject(doc, docIndex);
        });
        this.norm.clear();
    }
    // Adds a doc to the end of the index
    add(doc) {
        const idx = this.size();
        if (isString(doc)) this._addString(doc, idx);
        else this._addObject(doc, idx);
    }
    // Removes the doc at the specified index of the index
    removeAt(idx) {
        this.records.splice(idx, 1);
        // Change ref index of every subsquent doc
        for(let i = idx, len = this.size(); i < len; i += 1)this.records[i].i -= 1;
    }
    getValueForItemAtKeyId(item, keyId) {
        return item[this._keysMap[keyId]];
    }
    size() {
        return this.records.length;
    }
    _addString(doc, docIndex) {
        if (!isDefined(doc) || isBlank(doc)) return;
        let record = {
            v: doc,
            i: docIndex,
            n: this.norm.get(doc)
        };
        this.records.push(record);
    }
    _addObject(doc, docIndex) {
        let record = {
            i: docIndex,
            $: {}
        };
        // Iterate over every key (i.e, path), and fetch the value at that key
        this.keys.forEach((key, keyIndex)=>{
            let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
            if (!isDefined(value)) return;
            if (isArray(value)) {
                let subRecords = [];
                const stack = [
                    {
                        nestedArrIndex: -1,
                        value
                    }
                ];
                while(stack.length){
                    const { nestedArrIndex, value } = stack.pop();
                    if (!isDefined(value)) continue;
                    if (isString(value) && !isBlank(value)) {
                        let subRecord = {
                            v: value,
                            i: nestedArrIndex,
                            n: this.norm.get(value)
                        };
                        subRecords.push(subRecord);
                    } else if (isArray(value)) value.forEach((item, k)=>{
                        stack.push({
                            nestedArrIndex: k,
                            value: item
                        });
                    });
                }
                record.$[keyIndex] = subRecords;
            } else if (isString(value) && !isBlank(value)) {
                let subRecord = {
                    v: value,
                    n: this.norm.get(value)
                };
                record.$[keyIndex] = subRecord;
            }
        });
        this.records.push(record);
    }
    toJSON() {
        return {
            keys: this.keys,
            records: this.records
        };
    }
}
function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const myIndex = new FuseIndex({
        getFn,
        fieldNormWeight
    });
    myIndex.setKeys(keys.map(createKey));
    myIndex.setSources(docs);
    myIndex.create();
    return myIndex;
}
function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const { keys, records } = data;
    const myIndex = new FuseIndex({
        getFn,
        fieldNormWeight
    });
    myIndex.setKeys(keys);
    myIndex.setIndexRecords(records);
    return myIndex;
}
function computeScore$1(pattern, { errors = 0, currentLocation = 0, expectedLocation = 0, distance = Config.distance, ignoreLocation = Config.ignoreLocation } = {}) {
    const accuracy = errors / pattern.length;
    if (ignoreLocation) return accuracy;
    const proximity = Math.abs(expectedLocation - currentLocation);
    if (!distance) // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
    return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
    let indices = [];
    let start = -1;
    let end = -1;
    let i = 0;
    for(let len = matchmask.length; i < len; i += 1){
        let match = matchmask[i];
        if (match && start === -1) start = i;
        else if (!match && start !== -1) {
            end = i - 1;
            if (end - start + 1 >= minMatchCharLength) indices.push([
                start,
                end
            ]);
            start = -1;
        }
    }
    // (i-1 - start) + 1 => i - start
    if (matchmask[i - 1] && i - start >= minMatchCharLength) indices.push([
        start,
        i - 1
    ]);
    return indices;
}
// Machine word size
const MAX_BITS = 32;
function search(text, pattern, patternAlphabet, { location = Config.location, distance = Config.distance, threshold = Config.threshold, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, includeMatches = Config.includeMatches, ignoreLocation = Config.ignoreLocation } = {}) {
    if (pattern.length > MAX_BITS) throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
    const patternLen = pattern.length;
    // Set starting location at beginning text and initialize the alphabet.
    const textLen = text.length;
    // Handle the case when location > text.length
    const expectedLocation = Math.max(0, Math.min(location, textLen));
    // Highest score beyond which we give up.
    let currentThreshold = threshold;
    // Is there a nearby exact match? (speedup)
    let bestLocation = expectedLocation;
    // Performance: only computer matches when the minMatchCharLength > 1
    // OR if `includeMatches` is true.
    const computeMatches = minMatchCharLength > 1 || includeMatches;
    // A mask of the matches, used for building the indices
    const matchMask = computeMatches ? Array(textLen) : [];
    let index;
    // Get all exact matches, here for speed up
    while((index = text.indexOf(pattern, bestLocation)) > -1){
        let score = computeScore$1(pattern, {
            currentLocation: index,
            expectedLocation,
            distance,
            ignoreLocation
        });
        currentThreshold = Math.min(score, currentThreshold);
        bestLocation = index + patternLen;
        if (computeMatches) {
            let i = 0;
            while(i < patternLen){
                matchMask[index + i] = 1;
                i += 1;
            }
        }
    }
    // Reset the best location
    bestLocation = -1;
    let lastBitArr = [];
    let finalScore = 1;
    let binMax = patternLen + textLen;
    const mask = 1 << patternLen - 1;
    for(let i = 0; i < patternLen; i += 1){
        // Scan for the best match; each iteration allows for one more error.
        // Run a binary search to determine how far from the match location we can stray
        // at this error level.
        let binMin = 0;
        let binMid = binMax;
        while(binMin < binMid){
            const score = computeScore$1(pattern, {
                errors: i,
                currentLocation: expectedLocation + binMid,
                expectedLocation,
                distance,
                ignoreLocation
            });
            if (score <= currentThreshold) binMin = binMid;
            else binMax = binMid;
            binMid = Math.floor((binMax - binMin) / 2 + binMin);
        }
        // Use the result from this iteration as the maximum for the next.
        binMax = binMid;
        let start = Math.max(1, expectedLocation - binMid + 1);
        let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
        // Initialize the bit array
        let bitArr = Array(finish + 2);
        bitArr[finish + 1] = (1 << i) - 1;
        for(let j = finish; j >= start; j -= 1){
            let currentLocation = j - 1;
            let charMatch = patternAlphabet[text.charAt(currentLocation)];
            if (computeMatches) // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
            matchMask[currentLocation] = +!!charMatch;
            // First pass: exact match
            bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
            // Subsequent passes: fuzzy match
            if (i) bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
            if (bitArr[j] & mask) {
                finalScore = computeScore$1(pattern, {
                    errors: i,
                    currentLocation,
                    expectedLocation,
                    distance,
                    ignoreLocation
                });
                // This match will almost certainly be better than any existing match.
                // But check anyway.
                if (finalScore <= currentThreshold) {
                    // Indeed it is
                    currentThreshold = finalScore;
                    bestLocation = currentLocation;
                    // Already passed `loc`, downhill from here on in.
                    if (bestLocation <= expectedLocation) break;
                    // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
                    start = Math.max(1, 2 * expectedLocation - bestLocation);
                }
            }
        }
        // No hope for a (better) match at greater error levels.
        const score = computeScore$1(pattern, {
            errors: i + 1,
            currentLocation: expectedLocation,
            expectedLocation,
            distance,
            ignoreLocation
        });
        if (score > currentThreshold) break;
        lastBitArr = bitArr;
    }
    const result = {
        isMatch: bestLocation >= 0,
        // Count exact matches (those with a score of 0) to be "almost" exact
        score: Math.max(0.001, finalScore)
    };
    if (computeMatches) {
        const indices = convertMaskToIndices(matchMask, minMatchCharLength);
        if (!indices.length) result.isMatch = false;
        else if (includeMatches) result.indices = indices;
    }
    return result;
}
function createPatternAlphabet(pattern) {
    let mask = {};
    for(let i = 0, len = pattern.length; i < len; i += 1){
        const char = pattern.charAt(i);
        mask[char] = (mask[char] || 0) | 1 << len - i - 1;
    }
    return mask;
}
class BitapSearch {
    constructor(pattern, { location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreLocation = Config.ignoreLocation } = {}){
        this.options = {
            location,
            threshold,
            distance,
            includeMatches,
            findAllMatches,
            minMatchCharLength,
            isCaseSensitive,
            ignoreLocation
        };
        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
        this.chunks = [];
        if (!this.pattern.length) return;
        const addChunk = (pattern, startIndex)=>{
            this.chunks.push({
                pattern,
                alphabet: createPatternAlphabet(pattern),
                startIndex
            });
        };
        const len = this.pattern.length;
        if (len > MAX_BITS) {
            let i = 0;
            const remainder = len % MAX_BITS;
            const end = len - remainder;
            while(i < end){
                addChunk(this.pattern.substr(i, MAX_BITS), i);
                i += MAX_BITS;
            }
            if (remainder) {
                const startIndex = len - MAX_BITS;
                addChunk(this.pattern.substr(startIndex), startIndex);
            }
        } else addChunk(this.pattern, 0);
    }
    searchIn(text) {
        const { isCaseSensitive, includeMatches } = this.options;
        if (!isCaseSensitive) text = text.toLowerCase();
        // Exact match
        if (this.pattern === text) {
            let result = {
                isMatch: true,
                score: 0
            };
            if (includeMatches) result.indices = [
                [
                    0,
                    text.length - 1
                ]
            ];
            return result;
        }
        // Otherwise, use Bitap algorithm
        const { location, distance, threshold, findAllMatches, minMatchCharLength, ignoreLocation } = this.options;
        let allIndices = [];
        let totalScore = 0;
        let hasMatches = false;
        this.chunks.forEach(({ pattern, alphabet, startIndex })=>{
            const { isMatch, score, indices } = search(text, pattern, alphabet, {
                location: location + startIndex,
                distance,
                threshold,
                findAllMatches,
                minMatchCharLength,
                includeMatches,
                ignoreLocation
            });
            if (isMatch) hasMatches = true;
            totalScore += score;
            if (isMatch && indices) allIndices = [
                ...allIndices,
                ...indices
            ];
        });
        let result = {
            isMatch: hasMatches,
            score: hasMatches ? totalScore / this.chunks.length : 1
        };
        if (hasMatches && includeMatches) result.indices = allIndices;
        return result;
    }
}
class BaseMatch {
    constructor(pattern){
        this.pattern = pattern;
    }
    static isMultiMatch(pattern) {
        return getMatch(pattern, this.multiRegex);
    }
    static isSingleMatch(pattern) {
        return getMatch(pattern, this.singleRegex);
    }
    search() {}
}
function getMatch(pattern, exp) {
    const matches = pattern.match(exp);
    return matches ? matches[1] : null;
}
// Token: 'file
class ExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return 'exact';
    }
    static get multiRegex() {
        return /^="(.*)"$/;
    }
    static get singleRegex() {
        return /^=(.*)$/;
    }
    search(text) {
        const isMatch = text === this.pattern;
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                this.pattern.length - 1
            ]
        };
    }
}
// Token: !fire
class InverseExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return 'inverse-exact';
    }
    static get multiRegex() {
        return /^!"(.*)"$/;
    }
    static get singleRegex() {
        return /^!(.*)$/;
    }
    search(text) {
        const index = text.indexOf(this.pattern);
        const isMatch = index === -1;
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                text.length - 1
            ]
        };
    }
}
// Token: ^file
class PrefixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return 'prefix-exact';
    }
    static get multiRegex() {
        return /^\^"(.*)"$/;
    }
    static get singleRegex() {
        return /^\^(.*)$/;
    }
    search(text) {
        const isMatch = text.startsWith(this.pattern);
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                this.pattern.length - 1
            ]
        };
    }
}
// Token: !^fire
class InversePrefixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return 'inverse-prefix-exact';
    }
    static get multiRegex() {
        return /^!\^"(.*)"$/;
    }
    static get singleRegex() {
        return /^!\^(.*)$/;
    }
    search(text) {
        const isMatch = !text.startsWith(this.pattern);
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                text.length - 1
            ]
        };
    }
}
// Token: .file$
class SuffixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return 'suffix-exact';
    }
    static get multiRegex() {
        return /^"(.*)"\$$/;
    }
    static get singleRegex() {
        return /^(.*)\$$/;
    }
    search(text) {
        const isMatch = text.endsWith(this.pattern);
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                text.length - this.pattern.length,
                text.length - 1
            ]
        };
    }
}
// Token: !.file$
class InverseSuffixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return 'inverse-suffix-exact';
    }
    static get multiRegex() {
        return /^!"(.*)"\$$/;
    }
    static get singleRegex() {
        return /^!(.*)\$$/;
    }
    search(text) {
        const isMatch = !text.endsWith(this.pattern);
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                text.length - 1
            ]
        };
    }
}
class FuzzyMatch extends BaseMatch {
    constructor(pattern, { location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreLocation = Config.ignoreLocation } = {}){
        super(pattern);
        this._bitapSearch = new BitapSearch(pattern, {
            location,
            threshold,
            distance,
            includeMatches,
            findAllMatches,
            minMatchCharLength,
            isCaseSensitive,
            ignoreLocation
        });
    }
    static get type() {
        return 'fuzzy';
    }
    static get multiRegex() {
        return /^"(.*)"$/;
    }
    static get singleRegex() {
        return /^(.*)$/;
    }
    search(text) {
        return this._bitapSearch.searchIn(text);
    }
}
// Token: 'file
class IncludeMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return 'include';
    }
    static get multiRegex() {
        return /^'"(.*)"$/;
    }
    static get singleRegex() {
        return /^'(.*)$/;
    }
    search(text) {
        let location = 0;
        let index;
        const indices = [];
        const patternLen = this.pattern.length;
        // Get all exact matches
        while((index = text.indexOf(this.pattern, location)) > -1){
            location = index + patternLen;
            indices.push([
                index,
                location - 1
            ]);
        }
        const isMatch = !!indices.length;
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices
        };
    }
}
// ❗Order is important. DO NOT CHANGE.
const searchers = [
    ExactMatch,
    IncludeMatch,
    PrefixExactMatch,
    InversePrefixExactMatch,
    InverseSuffixExactMatch,
    SuffixExactMatch,
    InverseExactMatch,
    FuzzyMatch
];
const searchersLen = searchers.length;
// Regex to split by spaces, but keep anything in quotes together
const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = '|';
// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options = {}) {
    return pattern.split(OR_TOKEN).map((item)=>{
        let query = item.trim().split(SPACE_RE).filter((item)=>item && !!item.trim());
        let results = [];
        for(let i = 0, len = query.length; i < len; i += 1){
            const queryItem = query[i];
            // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
            let found = false;
            let idx = -1;
            while(!found && ++idx < searchersLen){
                const searcher = searchers[idx];
                let token = searcher.isMultiMatch(queryItem);
                if (token) {
                    results.push(new searcher(token, options));
                    found = true;
                }
            }
            if (found) continue;
            // 2. Handle single query matches (i.e, once that are *not* quoted)
            idx = -1;
            while(++idx < searchersLen){
                const searcher = searchers[idx];
                let token = searcher.isSingleMatch(queryItem);
                if (token) {
                    results.push(new searcher(token, options));
                    break;
                }
            }
        }
        return results;
    });
}
// These extended matchers can return an array of matches, as opposed
// to a singl match
const MultiMatchSet = new Set([
    FuzzyMatch.type,
    IncludeMatch.type
]);
/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */ class ExtendedSearch {
    constructor(pattern, { isCaseSensitive = Config.isCaseSensitive, includeMatches = Config.includeMatches, minMatchCharLength = Config.minMatchCharLength, ignoreLocation = Config.ignoreLocation, findAllMatches = Config.findAllMatches, location = Config.location, threshold = Config.threshold, distance = Config.distance } = {}){
        this.query = null;
        this.options = {
            isCaseSensitive,
            includeMatches,
            minMatchCharLength,
            findAllMatches,
            ignoreLocation,
            location,
            threshold,
            distance
        };
        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
        this.query = parseQuery(this.pattern, this.options);
    }
    static condition(_, options) {
        return options.useExtendedSearch;
    }
    searchIn(text) {
        const query = this.query;
        if (!query) return {
            isMatch: false,
            score: 1
        };
        const { includeMatches, isCaseSensitive } = this.options;
        text = isCaseSensitive ? text : text.toLowerCase();
        let numMatches = 0;
        let allIndices = [];
        let totalScore = 0;
        // ORs
        for(let i = 0, qLen = query.length; i < qLen; i += 1){
            const searchers = query[i];
            // Reset indices
            allIndices.length = 0;
            numMatches = 0;
            // ANDs
            for(let j = 0, pLen = searchers.length; j < pLen; j += 1){
                const searcher = searchers[j];
                const { isMatch, indices, score } = searcher.search(text);
                if (isMatch) {
                    numMatches += 1;
                    totalScore += score;
                    if (includeMatches) {
                        const type = searcher.constructor.type;
                        if (MultiMatchSet.has(type)) allIndices = [
                            ...allIndices,
                            ...indices
                        ];
                        else allIndices.push(indices);
                    }
                } else {
                    totalScore = 0;
                    numMatches = 0;
                    allIndices.length = 0;
                    break;
                }
            }
            // OR condition, so if TRUE, return
            if (numMatches) {
                let result = {
                    isMatch: true,
                    score: totalScore / numMatches
                };
                if (includeMatches) result.indices = allIndices;
                return result;
            }
        }
        // Nothing was matched
        return {
            isMatch: false,
            score: 1
        };
    }
}
const registeredSearchers = [];
function register(...args) {
    registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
    for(let i = 0, len = registeredSearchers.length; i < len; i += 1){
        let searcherClass = registeredSearchers[i];
        if (searcherClass.condition(pattern, options)) return new searcherClass(pattern, options);
    }
    return new BitapSearch(pattern, options);
}
const LogicalOperator = {
    AND: '$and',
    OR: '$or'
};
const KeyType = {
    PATH: '$path',
    PATTERN: '$val'
};
const isExpression = (query)=>!!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
const isPath = (query)=>!!query[KeyType.PATH];
const isLeaf = (query)=>!isArray(query) && isObject(query) && !isExpression(query);
const convertToExplicit = (query)=>({
        [LogicalOperator.AND]: Object.keys(query).map((key)=>({
                [key]: query[key]
            }))
    });
// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function parse(query, options, { auto = true } = {}) {
    const next = (query)=>{
        let keys = Object.keys(query);
        const isQueryPath = isPath(query);
        if (!isQueryPath && keys.length > 1 && !isExpression(query)) return next(convertToExplicit(query));
        if (isLeaf(query)) {
            const key = isQueryPath ? query[KeyType.PATH] : keys[0];
            const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];
            if (!isString(pattern)) throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
            const obj = {
                keyId: createKeyId(key),
                pattern
            };
            if (auto) obj.searcher = createSearcher(pattern, options);
            return obj;
        }
        let node = {
            children: [],
            operator: keys[0]
        };
        keys.forEach((key)=>{
            const value = query[key];
            if (isArray(value)) value.forEach((item)=>{
                node.children.push(next(item));
            });
        });
        return node;
    };
    if (!isExpression(query)) query = convertToExplicit(query);
    return next(query);
}
// Practical scoring function
function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
    results.forEach((result)=>{
        let totalScore = 1;
        result.matches.forEach(({ key, norm, score })=>{
            const weight = key ? key.weight : null;
            totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
        });
        result.score = totalScore;
    });
}
function transformMatches(result, data) {
    const matches = result.matches;
    data.matches = [];
    if (!isDefined(matches)) return;
    matches.forEach((match)=>{
        if (!isDefined(match.indices) || !match.indices.length) return;
        const { indices, value } = match;
        let obj = {
            indices,
            value
        };
        if (match.key) obj.key = match.key.src;
        if (match.idx > -1) obj.refIndex = match.idx;
        data.matches.push(obj);
    });
}
function transformScore(result, data) {
    data.score = result.score;
}
function format(results, docs, { includeMatches = Config.includeMatches, includeScore = Config.includeScore } = {}) {
    const transformers = [];
    if (includeMatches) transformers.push(transformMatches);
    if (includeScore) transformers.push(transformScore);
    return results.map((result)=>{
        const { idx } = result;
        const data = {
            item: docs[idx],
            refIndex: idx
        };
        if (transformers.length) transformers.forEach((transformer)=>{
            transformer(result, data);
        });
        return data;
    });
}
class Fuse {
    constructor(docs, options = {}, index){
        this.options = _objectSpread2(_objectSpread2({}, Config), options);
        this.options.useExtendedSearch;
        this._keyStore = new KeyStore(this.options.keys);
        this.setCollection(docs, index);
    }
    setCollection(docs, index) {
        this._docs = docs;
        if (index && !(index instanceof FuseIndex)) throw new Error(INCORRECT_INDEX_TYPE);
        this._myIndex = index || createIndex(this.options.keys, this._docs, {
            getFn: this.options.getFn,
            fieldNormWeight: this.options.fieldNormWeight
        });
    }
    add(doc) {
        if (!isDefined(doc)) return;
        this._docs.push(doc);
        this._myIndex.add(doc);
    }
    remove(predicate = ()=>false) {
        const results = [];
        for(let i = 0, len = this._docs.length; i < len; i += 1){
            const doc = this._docs[i];
            if (predicate(doc, i)) {
                this.removeAt(i);
                i -= 1;
                len -= 1;
                results.push(doc);
            }
        }
        return results;
    }
    removeAt(idx) {
        this._docs.splice(idx, 1);
        this._myIndex.removeAt(idx);
    }
    getIndex() {
        return this._myIndex;
    }
    search(query, { limit = -1 } = {}) {
        const { includeMatches, includeScore, shouldSort, sortFn, ignoreFieldNorm } = this.options;
        let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
        computeScore(results, {
            ignoreFieldNorm
        });
        if (shouldSort) results.sort(sortFn);
        if (isNumber(limit) && limit > -1) results = results.slice(0, limit);
        return format(results, this._docs, {
            includeMatches,
            includeScore
        });
    }
    _searchStringList(query) {
        const searcher = createSearcher(query, this.options);
        const { records } = this._myIndex;
        const results = [];
        // Iterate over every string in the index
        records.forEach(({ v: text, i: idx, n: norm })=>{
            if (!isDefined(text)) return;
            const { isMatch, score, indices } = searcher.searchIn(text);
            if (isMatch) results.push({
                item: text,
                idx,
                matches: [
                    {
                        score,
                        value: text,
                        norm,
                        indices
                    }
                ]
            });
        });
        return results;
    }
    _searchLogical(query) {
        const expression = parse(query, this.options);
        const evaluate = (node, item, idx)=>{
            if (!node.children) {
                const { keyId, searcher } = node;
                const matches = this._findMatches({
                    key: this._keyStore.get(keyId),
                    value: this._myIndex.getValueForItemAtKeyId(item, keyId),
                    searcher
                });
                if (matches && matches.length) return [
                    {
                        idx,
                        item,
                        matches
                    }
                ];
                return [];
            }
            const res = [];
            for(let i = 0, len = node.children.length; i < len; i += 1){
                const child = node.children[i];
                const result = evaluate(child, item, idx);
                if (result.length) res.push(...result);
                else if (node.operator === LogicalOperator.AND) return [];
            }
            return res;
        };
        const records = this._myIndex.records;
        const resultMap = {};
        const results = [];
        records.forEach(({ $: item, i: idx })=>{
            if (isDefined(item)) {
                let expResults = evaluate(expression, item, idx);
                if (expResults.length) {
                    // Dedupe when adding
                    if (!resultMap[idx]) {
                        resultMap[idx] = {
                            idx,
                            item,
                            matches: []
                        };
                        results.push(resultMap[idx]);
                    }
                    expResults.forEach(({ matches })=>{
                        resultMap[idx].matches.push(...matches);
                    });
                }
            }
        });
        return results;
    }
    _searchObjectList(query) {
        const searcher = createSearcher(query, this.options);
        const { keys, records } = this._myIndex;
        const results = [];
        // List is Array<Object>
        records.forEach(({ $: item, i: idx })=>{
            if (!isDefined(item)) return;
            let matches = [];
            // Iterate over every key (i.e, path), and fetch the value at that key
            keys.forEach((key, keyIndex)=>{
                matches.push(...this._findMatches({
                    key,
                    value: item[keyIndex],
                    searcher
                }));
            });
            if (matches.length) results.push({
                idx,
                item,
                matches
            });
        });
        return results;
    }
    _findMatches({ key, value, searcher }) {
        if (!isDefined(value)) return [];
        let matches = [];
        if (isArray(value)) value.forEach(({ v: text, i: idx, n: norm })=>{
            if (!isDefined(text)) return;
            const { isMatch, score, indices } = searcher.searchIn(text);
            if (isMatch) matches.push({
                score,
                key,
                value: text,
                idx,
                norm,
                indices
            });
        });
        else {
            const { v: text, n: norm } = value;
            const { isMatch, score, indices } = searcher.searchIn(text);
            if (isMatch) matches.push({
                score,
                key,
                value: text,
                norm,
                indices
            });
        }
        return matches;
    }
}
Fuse.version = '7.0.0';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
Fuse.parseQuery = parse;
register(ExtendedSearch);
var SearchByFuse = /** @class */ function() {
    function SearchByFuse(config) {
        this._haystack = [];
        this._fuseOptions = __assign(__assign({}, config.fuseOptions), {
            keys: __spreadArray([], config.searchFields, true),
            includeMatches: true
        });
    }
    SearchByFuse.prototype.index = function(data) {
        this._haystack = data;
        if (this._fuse) this._fuse.setCollection(data);
    };
    SearchByFuse.prototype.reset = function() {
        this._haystack = [];
        this._fuse = undefined;
    };
    SearchByFuse.prototype.isEmptyIndex = function() {
        return !this._haystack.length;
    };
    SearchByFuse.prototype.search = function(needle) {
        if (!this._fuse) this._fuse = new Fuse(this._haystack, this._fuseOptions);
        var results = this._fuse.search(needle);
        return results.map(function(value, i) {
            return {
                item: value.item,
                score: value.score || 0,
                rank: i + 1
            };
        });
    };
    return SearchByFuse;
}();
function getSearcher(config) {
    return new SearchByFuse(config);
}
/**
 * Helpers to create HTML elements used by Choices
 * Can be overridden by providing `callbackOnCreateTemplates` option.
 * `Choices.defaults.templates` allows access to the default template methods from `callbackOnCreateTemplates`
 */ var isEmptyObject = function(obj) {
    // eslint-disable-next-line no-restricted-syntax
    for(var prop in obj){
        if (Object.prototype.hasOwnProperty.call(obj, prop)) return false;
    }
    return true;
};
var assignCustomProperties = function(el, choice, withCustomProperties) {
    var dataset = el.dataset;
    var customProperties = choice.customProperties, labelClass = choice.labelClass, labelDescription = choice.labelDescription;
    if (labelClass) dataset.labelClass = getClassNames(labelClass).join(' ');
    if (labelDescription) dataset.labelDescription = labelDescription;
    if (withCustomProperties && customProperties) {
        if (typeof customProperties === 'string') dataset.customProperties = customProperties;
        else if (typeof customProperties === 'object' && !isEmptyObject(customProperties)) dataset.customProperties = JSON.stringify(customProperties);
    }
};
var addAriaLabel = function(docRoot, id, element) {
    var label = id && docRoot.querySelector("label[for='".concat(id, "']"));
    var text = label && label.innerText;
    if (text) element.setAttribute('aria-label', text);
};
var templates = {
    containerOuter: function(_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
        var containerOuter = _a.classNames.containerOuter;
        var div = document.createElement('div');
        addClassesToElement(div, containerOuter);
        div.dataset.type = passedElementType;
        if (dir) div.dir = dir;
        if (isSelectOneElement) div.tabIndex = 0;
        if (isSelectElement) {
            div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');
            if (searchEnabled) div.setAttribute('aria-autocomplete', 'list');
            else if (!labelId) addAriaLabel(this._docRoot, this.passedElement.element.id, div);
            div.setAttribute('aria-haspopup', 'true');
            div.setAttribute('aria-expanded', 'false');
        }
        if (labelId) div.setAttribute('aria-labelledby', labelId);
        return div;
    },
    containerInner: function(_a) {
        var containerInner = _a.classNames.containerInner;
        var div = document.createElement('div');
        addClassesToElement(div, containerInner);
        return div;
    },
    itemList: function(_a, isSelectOneElement) {
        var searchEnabled = _a.searchEnabled, _b = _a.classNames, list = _b.list, listSingle = _b.listSingle, listItems = _b.listItems;
        var div = document.createElement('div');
        addClassesToElement(div, list);
        addClassesToElement(div, isSelectOneElement ? listSingle : listItems);
        if (this._isSelectElement && searchEnabled) div.setAttribute('role', 'listbox');
        return div;
    },
    placeholder: function(_a, value) {
        var allowHTML = _a.allowHTML, placeholder = _a.classNames.placeholder;
        var div = document.createElement('div');
        addClassesToElement(div, placeholder);
        setElementHtml(div, allowHTML, value);
        return div;
    },
    item: function(_a, choice, removeItemButton) {
        var allowHTML = _a.allowHTML, removeItemButtonAlignLeft = _a.removeItemButtonAlignLeft, removeItemIconText = _a.removeItemIconText, removeItemLabelText = _a.removeItemLabelText, _b = _a.classNames, item = _b.item, button = _b.button, highlightedState = _b.highlightedState, itemSelectable = _b.itemSelectable, placeholder = _b.placeholder;
        var rawValue = unwrapStringForRaw(choice.value);
        var div = document.createElement('div');
        addClassesToElement(div, item);
        if (choice.labelClass) {
            var spanLabel = document.createElement('span');
            setElementHtml(spanLabel, allowHTML, choice.label);
            addClassesToElement(spanLabel, choice.labelClass);
            div.appendChild(spanLabel);
        } else setElementHtml(div, allowHTML, choice.label);
        div.dataset.item = '';
        div.dataset.id = choice.id;
        div.dataset.value = rawValue;
        assignCustomProperties(div, choice, true);
        if (choice.disabled || this.containerOuter.isDisabled) div.setAttribute('aria-disabled', 'true');
        if (this._isSelectElement) {
            div.setAttribute('aria-selected', 'true');
            div.setAttribute('role', 'option');
        }
        if (choice.placeholder) {
            addClassesToElement(div, placeholder);
            div.dataset.placeholder = '';
        }
        addClassesToElement(div, choice.highlighted ? highlightedState : itemSelectable);
        if (removeItemButton) {
            if (choice.disabled) removeClassesFromElement(div, itemSelectable);
            div.dataset.deletable = '';
            var removeButton = document.createElement('button');
            removeButton.type = 'button';
            addClassesToElement(removeButton, button);
            setElementHtml(removeButton, true, resolveNoticeFunction(removeItemIconText, choice.value));
            var REMOVE_ITEM_LABEL = resolveNoticeFunction(removeItemLabelText, choice.value);
            if (REMOVE_ITEM_LABEL) removeButton.setAttribute('aria-label', REMOVE_ITEM_LABEL);
            removeButton.dataset.button = '';
            if (removeItemButtonAlignLeft) div.insertAdjacentElement('afterbegin', removeButton);
            else div.appendChild(removeButton);
        }
        return div;
    },
    choiceList: function(_a, isSelectOneElement) {
        var list = _a.classNames.list;
        var div = document.createElement('div');
        addClassesToElement(div, list);
        if (!isSelectOneElement) div.setAttribute('aria-multiselectable', 'true');
        div.setAttribute('role', 'listbox');
        return div;
    },
    choiceGroup: function(_a, _b) {
        var allowHTML = _a.allowHTML, _c = _a.classNames, group = _c.group, groupHeading = _c.groupHeading, itemDisabled = _c.itemDisabled;
        var id = _b.id, label = _b.label, disabled = _b.disabled;
        var rawLabel = unwrapStringForRaw(label);
        var div = document.createElement('div');
        addClassesToElement(div, group);
        if (disabled) addClassesToElement(div, itemDisabled);
        div.setAttribute('role', 'group');
        div.dataset.group = '';
        div.dataset.id = id;
        div.dataset.value = rawLabel;
        if (disabled) div.setAttribute('aria-disabled', 'true');
        var heading = document.createElement('div');
        addClassesToElement(heading, groupHeading);
        setElementHtml(heading, allowHTML, label || '');
        div.appendChild(heading);
        return div;
    },
    choice: function(_a, choice, selectText, groupName) {
        var allowHTML = _a.allowHTML, _b = _a.classNames, item = _b.item, itemChoice = _b.itemChoice, itemSelectable = _b.itemSelectable, selectedState = _b.selectedState, itemDisabled = _b.itemDisabled, description = _b.description, placeholder = _b.placeholder;
        // eslint-disable-next-line prefer-destructuring
        var label = choice.label;
        var rawValue = unwrapStringForRaw(choice.value);
        var div = document.createElement('div');
        div.id = choice.elementId;
        addClassesToElement(div, item);
        addClassesToElement(div, itemChoice);
        if (groupName && typeof label === 'string') {
            label = escapeForTemplate(allowHTML, label);
            label += " (".concat(groupName, ")");
            label = {
                trusted: label
            };
        }
        var describedBy = div;
        if (choice.labelClass) {
            var spanLabel = document.createElement('span');
            setElementHtml(spanLabel, allowHTML, label);
            addClassesToElement(spanLabel, choice.labelClass);
            describedBy = spanLabel;
            div.appendChild(spanLabel);
        } else setElementHtml(div, allowHTML, label);
        if (choice.labelDescription) {
            var descId = "".concat(choice.elementId, "-description");
            describedBy.setAttribute('aria-describedby', descId);
            var spanDesc = document.createElement('span');
            setElementHtml(spanDesc, allowHTML, choice.labelDescription);
            spanDesc.id = descId;
            addClassesToElement(spanDesc, description);
            div.appendChild(spanDesc);
        }
        if (choice.selected) addClassesToElement(div, selectedState);
        if (choice.placeholder) addClassesToElement(div, placeholder);
        div.setAttribute('role', choice.group ? 'treeitem' : 'option');
        div.dataset.choice = '';
        div.dataset.id = choice.id;
        div.dataset.value = rawValue;
        if (selectText) div.dataset.selectText = selectText;
        if (choice.group) div.dataset.groupId = "".concat(choice.group.id);
        assignCustomProperties(div, choice, false);
        if (choice.disabled) {
            addClassesToElement(div, itemDisabled);
            div.dataset.choiceDisabled = '';
            div.setAttribute('aria-disabled', 'true');
        } else {
            addClassesToElement(div, itemSelectable);
            div.dataset.choiceSelectable = '';
        }
        return div;
    },
    input: function(_a, placeholderValue) {
        var _b = _a.classNames, input = _b.input, inputCloned = _b.inputCloned, labelId = _a.labelId;
        var inp = document.createElement('input');
        inp.type = 'search';
        addClassesToElement(inp, input);
        addClassesToElement(inp, inputCloned);
        inp.autocomplete = 'off';
        inp.autocapitalize = 'off';
        inp.spellcheck = false;
        inp.setAttribute('aria-autocomplete', 'list');
        if (placeholderValue) inp.setAttribute('aria-label', placeholderValue);
        else if (!labelId) addAriaLabel(this._docRoot, this.passedElement.element.id, inp);
        return inp;
    },
    dropdown: function(_a) {
        var _b = _a.classNames, list = _b.list, listDropdown = _b.listDropdown;
        var div = document.createElement('div');
        addClassesToElement(div, list);
        addClassesToElement(div, listDropdown);
        div.setAttribute('aria-expanded', 'false');
        return div;
    },
    notice: function(_a, innerHTML, type) {
        var _b = _a.classNames, item = _b.item, itemChoice = _b.itemChoice, addChoice = _b.addChoice, noResults = _b.noResults, noChoices = _b.noChoices, noticeItem = _b.notice;
        if (type === void 0) type = NoticeTypes.generic;
        var notice = document.createElement('div');
        setElementHtml(notice, true, innerHTML);
        addClassesToElement(notice, item);
        addClassesToElement(notice, itemChoice);
        addClassesToElement(notice, noticeItem);
        // eslint-disable-next-line default-case
        switch(type){
            case NoticeTypes.addChoice:
                addClassesToElement(notice, addChoice);
                break;
            case NoticeTypes.noResults:
                addClassesToElement(notice, noResults);
                break;
            case NoticeTypes.noChoices:
                addClassesToElement(notice, noChoices);
                break;
        }
        if (type === NoticeTypes.addChoice) {
            notice.dataset.choiceSelectable = '';
            notice.dataset.choice = '';
        }
        return notice;
    },
    option: function(choice) {
        // HtmlOptionElement's label value does not support HTML, so the avoid double escaping unwrap the untrusted string.
        var labelValue = unwrapStringForRaw(choice.label);
        var opt = new Option(labelValue, choice.value, false, choice.selected);
        assignCustomProperties(opt, choice, true);
        opt.disabled = choice.disabled;
        if (choice.selected) opt.setAttribute('selected', '');
        return opt;
    }
};
/** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */ var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
var USER_DEFAULTS = {};
var parseDataSetId = function(element) {
    if (!element) return undefined;
    return element.dataset.id ? parseInt(element.dataset.id, 10) : undefined;
};
var selectableChoiceIdentifier = '[data-choice-selectable]';
/**
 * Choices
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */ var Choices = /** @class */ function() {
    function Choices(element, userConfig) {
        if (element === void 0) element = '[data-choice]';
        if (userConfig === void 0) userConfig = {};
        var _this = this;
        this.initialisedOK = undefined;
        this._hasNonChoicePlaceholder = false;
        this._lastAddedChoiceId = 0;
        this._lastAddedGroupId = 0;
        var defaults = Choices.defaults;
        this.config = __assign(__assign(__assign({}, defaults.allOptions), defaults.options), userConfig);
        ObjectsInConfig.forEach(function(key) {
            _this.config[key] = __assign(__assign(__assign({}, defaults.allOptions[key]), defaults.options[key]), userConfig[key]);
        });
        var config = this.config;
        if (!config.silent) this._validateConfig();
        var docRoot = config.shadowRoot || document.documentElement;
        this._docRoot = docRoot;
        var passedElement = typeof element === 'string' ? docRoot.querySelector(element) : element;
        if (!passedElement || typeof passedElement !== 'object' || !(isHtmlInputElement(passedElement) || isHtmlSelectElement(passedElement))) {
            if (!passedElement && typeof element === 'string') throw TypeError("Selector ".concat(element, " failed to find an element"));
            throw TypeError("Expected one of the following types text|select-one|select-multiple");
        }
        var elementType = passedElement.type;
        var isText = elementType === PassedElementTypes.Text;
        if (isText || config.maxItemCount !== 1) config.singleModeForMultiSelect = false;
        if (config.singleModeForMultiSelect) elementType = PassedElementTypes.SelectMultiple;
        var isSelectOne = elementType === PassedElementTypes.SelectOne;
        var isSelectMultiple = elementType === PassedElementTypes.SelectMultiple;
        var isSelect = isSelectOne || isSelectMultiple;
        this._elementType = elementType;
        this._isTextElement = isText;
        this._isSelectOneElement = isSelectOne;
        this._isSelectMultipleElement = isSelectMultiple;
        this._isSelectElement = isSelectOne || isSelectMultiple;
        this._canAddUserChoices = isText && config.addItems || isSelect && config.addChoices;
        if (typeof config.renderSelectedChoices !== 'boolean') config.renderSelectedChoices = config.renderSelectedChoices === 'always' || isSelectOne;
        if (config.closeDropdownOnSelect === 'auto') config.closeDropdownOnSelect = isText || isSelectOne || config.singleModeForMultiSelect;
        else config.closeDropdownOnSelect = coerceBool(config.closeDropdownOnSelect);
        if (config.placeholder) {
            if (config.placeholderValue) this._hasNonChoicePlaceholder = true;
            else if (passedElement.dataset.placeholder) {
                this._hasNonChoicePlaceholder = true;
                config.placeholderValue = passedElement.dataset.placeholder;
            }
        }
        if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
            var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
            config.addItemFilter = re.test.bind(re);
        }
        if (this._isTextElement) this.passedElement = new WrappedInput({
            element: passedElement,
            classNames: config.classNames
        });
        else {
            var selectEl = passedElement;
            this.passedElement = new WrappedSelect({
                element: selectEl,
                classNames: config.classNames,
                template: function(data) {
                    return _this._templates.option(data);
                },
                extractPlaceholder: config.placeholder && !this._hasNonChoicePlaceholder
            });
        }
        this.initialised = false;
        this._store = new Store(config);
        this._currentValue = '';
        config.searchEnabled = !isText && config.searchEnabled || isSelectMultiple;
        this._canSearch = config.searchEnabled;
        this._isScrollingOnIe = false;
        this._highlightPosition = 0;
        this._wasTap = true;
        this._placeholderValue = this._generatePlaceholderValue();
        this._baseId = generateId(passedElement, 'choices-');
        /**
         * setting direction in cases where it's explicitly set on passedElement
         * or when calculated direction is different from the document
         */ this._direction = passedElement.dir;
        if (!this._direction) {
            var elementDirection = window.getComputedStyle(passedElement).direction;
            var documentDirection = window.getComputedStyle(document.documentElement).direction;
            if (elementDirection !== documentDirection) this._direction = elementDirection;
        }
        this._idNames = {
            itemChoice: 'item-choice'
        };
        this._templates = defaults.templates;
        this._render = this._render.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
        this._onKeyUp = this._onKeyUp.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
        this._onInput = this._onInput.bind(this);
        this._onClick = this._onClick.bind(this);
        this._onTouchMove = this._onTouchMove.bind(this);
        this._onTouchEnd = this._onTouchEnd.bind(this);
        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseOver = this._onMouseOver.bind(this);
        this._onFormReset = this._onFormReset.bind(this);
        this._onSelectKey = this._onSelectKey.bind(this);
        this._onEnterKey = this._onEnterKey.bind(this);
        this._onEscapeKey = this._onEscapeKey.bind(this);
        this._onDirectionKey = this._onDirectionKey.bind(this);
        this._onDeleteKey = this._onDeleteKey.bind(this);
        // If element has already been initialised with Choices, fail silently
        if (this.passedElement.isActive) {
            if (!config.silent) console.warn('Trying to initialise Choices on element already initialised', {
                element: element
            });
            this.initialised = true;
            this.initialisedOK = false;
            return;
        }
        // Let's go
        this.init();
        // preserve the selected item list after setup for form reset
        this._initialItems = this._store.items.map(function(choice) {
            return choice.value;
        });
    }
    Object.defineProperty(Choices, "defaults", {
        get: function() {
            return Object.preventExtensions({
                get options () {
                    return USER_DEFAULTS;
                },
                get allOptions () {
                    return DEFAULT_CONFIG;
                },
                get templates () {
                    return templates;
                }
            });
        },
        enumerable: false,
        configurable: true
    });
    Choices.prototype.init = function() {
        if (this.initialised || this.initialisedOK !== undefined) return;
        this._searcher = getSearcher(this.config);
        this._loadChoices();
        this._createTemplates();
        this._createElements();
        this._createStructure();
        if (this._isTextElement && !this.config.addItems || this.passedElement.element.hasAttribute('disabled') || !!this.passedElement.element.closest('fieldset:disabled')) this.disable();
        else {
            this.enable();
            this._addEventListeners();
        }
        // should be triggered **after** disabled state to avoid additional re-draws
        this._initStore();
        this.initialised = true;
        this.initialisedOK = true;
        var callbackOnInit = this.config.callbackOnInit;
        // Run callback if it is a function
        if (typeof callbackOnInit === 'function') callbackOnInit.call(this);
    };
    Choices.prototype.destroy = function() {
        if (!this.initialised) return;
        this._removeEventListeners();
        this.passedElement.reveal();
        this.containerOuter.unwrap(this.passedElement.element);
        this._store._listeners = []; // prevents select/input value being wiped
        this.clearStore(false);
        this._stopSearch();
        this._templates = Choices.defaults.templates;
        this.initialised = false;
        this.initialisedOK = undefined;
    };
    Choices.prototype.enable = function() {
        if (this.passedElement.isDisabled) this.passedElement.enable();
        if (this.containerOuter.isDisabled) {
            this._addEventListeners();
            this.input.enable();
            this.containerOuter.enable();
        }
        return this;
    };
    Choices.prototype.disable = function() {
        if (!this.passedElement.isDisabled) this.passedElement.disable();
        if (!this.containerOuter.isDisabled) {
            this._removeEventListeners();
            this.input.disable();
            this.containerOuter.disable();
        }
        return this;
    };
    Choices.prototype.highlightItem = function(item, runEvent) {
        if (runEvent === void 0) runEvent = true;
        if (!item || !item.id) return this;
        var choice = this._store.items.find(function(c) {
            return c.id === item.id;
        });
        if (!choice || choice.highlighted) return this;
        this._store.dispatch(highlightItem(choice, true));
        if (runEvent) this.passedElement.triggerEvent(EventType.highlightItem, this._getChoiceForOutput(choice));
        return this;
    };
    Choices.prototype.unhighlightItem = function(item, runEvent) {
        if (runEvent === void 0) runEvent = true;
        if (!item || !item.id) return this;
        var choice = this._store.items.find(function(c) {
            return c.id === item.id;
        });
        if (!choice || !choice.highlighted) return this;
        this._store.dispatch(highlightItem(choice, false));
        if (runEvent) this.passedElement.triggerEvent(EventType.unhighlightItem, this._getChoiceForOutput(choice));
        return this;
    };
    Choices.prototype.highlightAll = function() {
        var _this = this;
        this._store.withTxn(function() {
            _this._store.items.forEach(function(item) {
                if (!item.highlighted) {
                    _this._store.dispatch(highlightItem(item, true));
                    _this.passedElement.triggerEvent(EventType.highlightItem, _this._getChoiceForOutput(item));
                }
            });
        });
        return this;
    };
    Choices.prototype.unhighlightAll = function() {
        var _this = this;
        this._store.withTxn(function() {
            _this._store.items.forEach(function(item) {
                if (item.highlighted) {
                    _this._store.dispatch(highlightItem(item, false));
                    _this.passedElement.triggerEvent(EventType.highlightItem, _this._getChoiceForOutput(item));
                }
            });
        });
        return this;
    };
    Choices.prototype.removeActiveItemsByValue = function(value) {
        var _this = this;
        this._store.withTxn(function() {
            _this._store.items.filter(function(item) {
                return item.value === value;
            }).forEach(function(item) {
                return _this._removeItem(item);
            });
        });
        return this;
    };
    Choices.prototype.removeActiveItems = function(excludedId) {
        var _this = this;
        this._store.withTxn(function() {
            _this._store.items.filter(function(_a) {
                var id = _a.id;
                return id !== excludedId;
            }).forEach(function(item) {
                return _this._removeItem(item);
            });
        });
        return this;
    };
    Choices.prototype.removeHighlightedItems = function(runEvent) {
        var _this = this;
        if (runEvent === void 0) runEvent = false;
        this._store.withTxn(function() {
            _this._store.highlightedActiveItems.forEach(function(item) {
                _this._removeItem(item);
                // If this action was performed by the user
                // trigger the event
                if (runEvent) _this._triggerChange(item.value);
            });
        });
        return this;
    };
    Choices.prototype.showDropdown = function(preventInputFocus) {
        var _this = this;
        if (this.dropdown.isActive) return this;
        if (preventInputFocus === undefined) // eslint-disable-next-line no-param-reassign
        preventInputFocus = !this._canSearch;
        requestAnimationFrame(function() {
            _this.dropdown.show();
            var rect = _this.dropdown.element.getBoundingClientRect();
            _this.containerOuter.open(rect.bottom, rect.height);
            if (!preventInputFocus) _this.input.focus();
            _this.passedElement.triggerEvent(EventType.showDropdown);
        });
        return this;
    };
    Choices.prototype.hideDropdown = function(preventInputBlur) {
        var _this = this;
        if (!this.dropdown.isActive) return this;
        requestAnimationFrame(function() {
            _this.dropdown.hide();
            _this.containerOuter.close();
            if (!preventInputBlur && _this._canSearch) {
                _this.input.removeActiveDescendant();
                _this.input.blur();
            }
            _this.passedElement.triggerEvent(EventType.hideDropdown);
        });
        return this;
    };
    Choices.prototype.getValue = function(valueOnly) {
        var _this = this;
        var values = this._store.items.map(function(item) {
            return valueOnly ? item.value : _this._getChoiceForOutput(item);
        });
        return this._isSelectOneElement || this.config.singleModeForMultiSelect ? values[0] : values;
    };
    Choices.prototype.setValue = function(items) {
        var _this = this;
        if (!this.initialisedOK) {
            this._warnChoicesInitFailed('setValue');
            return this;
        }
        this._store.withTxn(function() {
            items.forEach(function(value) {
                if (value) _this._addChoice(mapInputToChoice(value, false));
            });
        });
        // @todo integrate with Store
        this._searcher.reset();
        return this;
    };
    Choices.prototype.setChoiceByValue = function(value) {
        var _this = this;
        if (!this.initialisedOK) {
            this._warnChoicesInitFailed('setChoiceByValue');
            return this;
        }
        if (this._isTextElement) return this;
        this._store.withTxn(function() {
            // If only one value has been passed, convert to array
            var choiceValue = Array.isArray(value) ? value : [
                value
            ];
            // Loop through each value and
            choiceValue.forEach(function(val) {
                return _this._findAndSelectChoiceByValue(val);
            });
            _this.unhighlightAll();
        });
        // @todo integrate with Store
        this._searcher.reset();
        return this;
    };
    /**
     * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
     * a value field name and a label field name.
     * This behaves the same as passing items via the choices option but can be called after initialising Choices.
     * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
     * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
     *
     * **Input types affected:** select-one, select-multiple
     *
     * @example
     * ```js
     * const example = new Choices(element);
     *
     * example.setChoices([
     *   {value: 'One', label: 'Label One', disabled: true},
     *   {value: 'Two', label: 'Label Two', selected: true},
     *   {value: 'Three', label: 'Label Three'},
     * ], 'value', 'label', false);
     * ```
     *
     * @example
     * ```js
     * const example = new Choices(element);
     *
     * example.setChoices(async () => {
     *   try {
     *      const items = await fetch('/items');
     *      return items.json()
     *   } catch(err) {
     *      console.error(err)
     *   }
     * });
     * ```
     *
     * @example
     * ```js
     * const example = new Choices(element);
     *
     * example.setChoices([{
     *   label: 'Group one',
     *   id: 1,
     *   disabled: false,
     *   choices: [
     *     {value: 'Child One', label: 'Child One', selected: true},
     *     {value: 'Child Two', label: 'Child Two',  disabled: true},
     *     {value: 'Child Three', label: 'Child Three'},
     *   ]
     * },
     * {
     *   label: 'Group two',
     *   id: 2,
     *   disabled: false,
     *   choices: [
     *     {value: 'Child Four', label: 'Child Four', disabled: true},
     *     {value: 'Child Five', label: 'Child Five'},
     *     {value: 'Child Six', label: 'Child Six', customProperties: {
     *       description: 'Custom description about child six',
     *       random: 'Another random custom property'
     *     }},
     *   ]
     * }], 'value', 'label', false);
     * ```
     */ Choices.prototype.setChoices = function(choicesArrayOrFetcher, value, label, replaceChoices, clearSearchFlag, replaceItems) {
        var _this = this;
        if (choicesArrayOrFetcher === void 0) choicesArrayOrFetcher = [];
        if (value === void 0) value = 'value';
        if (label === void 0) label = 'label';
        if (replaceChoices === void 0) replaceChoices = false;
        if (clearSearchFlag === void 0) clearSearchFlag = true;
        if (replaceItems === void 0) replaceItems = false;
        if (!this.initialisedOK) {
            this._warnChoicesInitFailed('setChoices');
            return this;
        }
        if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
        if (typeof value !== 'string' || !value) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
        if (typeof choicesArrayOrFetcher === 'function') {
            // it's a choices fetcher function
            var fetcher_1 = choicesArrayOrFetcher(this);
            if (typeof Promise === 'function' && fetcher_1 instanceof Promise) // that's a promise
            // eslint-disable-next-line no-promise-executor-return
            return new Promise(function(resolve) {
                return requestAnimationFrame(resolve);
            }).then(function() {
                return _this._handleLoadingState(true);
            }).then(function() {
                return fetcher_1;
            }).then(function(data) {
                return _this.setChoices(data, value, label, replaceChoices, clearSearchFlag, replaceItems);
            }).catch(function(err) {
                if (!_this.config.silent) console.error(err);
            }).then(function() {
                return _this._handleLoadingState(false);
            }).then(function() {
                return _this;
            });
            // function returned something else than promise, let's check if it's an array of choices
            if (!Array.isArray(fetcher_1)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
            // recursion with results, it's sync and choices were cleared already
            return this.setChoices(fetcher_1, value, label, false);
        }
        if (!Array.isArray(choicesArrayOrFetcher)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
        this.containerOuter.removeLoadingState();
        this._store.withTxn(function() {
            if (clearSearchFlag) _this._isSearching = false;
            // Clear choices if needed
            if (replaceChoices) _this.clearChoices(true, replaceItems);
            var isDefaultValue = value === 'value';
            var isDefaultLabel = label === 'label';
            choicesArrayOrFetcher.forEach(function(groupOrChoice) {
                if ('choices' in groupOrChoice) {
                    var group = groupOrChoice;
                    if (!isDefaultLabel) group = __assign(__assign({}, group), {
                        label: group[label]
                    });
                    _this._addGroup(mapInputToChoice(group, true));
                } else {
                    var choice = groupOrChoice;
                    if (!isDefaultLabel || !isDefaultValue) choice = __assign(__assign({}, choice), {
                        value: choice[value],
                        label: choice[label]
                    });
                    var choiceFull = mapInputToChoice(choice, false);
                    _this._addChoice(choiceFull);
                    if (choiceFull.placeholder && !_this._hasNonChoicePlaceholder) _this._placeholderValue = unwrapStringForEscaped(choiceFull.label);
                }
            });
            _this.unhighlightAll();
        });
        // @todo integrate with Store
        this._searcher.reset();
        return this;
    };
    Choices.prototype.refresh = function(withEvents, selectFirstOption, deselectAll) {
        var _this = this;
        if (withEvents === void 0) withEvents = false;
        if (selectFirstOption === void 0) selectFirstOption = false;
        if (deselectAll === void 0) deselectAll = false;
        if (!this._isSelectElement) {
            if (!this.config.silent) console.warn('refresh method can only be used on choices backed by a <select> element');
            return this;
        }
        this._store.withTxn(function() {
            var choicesFromOptions = _this.passedElement.optionsAsChoices();
            // Build the list of items which require preserving
            var existingItems = {};
            if (!deselectAll) _this._store.items.forEach(function(choice) {
                if (choice.id && choice.active && choice.selected) existingItems[choice.value] = true;
            });
            _this.clearStore(false);
            var updateChoice = function(choice) {
                if (deselectAll) _this._store.dispatch(removeItem$1(choice));
                else if (existingItems[choice.value]) choice.selected = true;
            };
            choicesFromOptions.forEach(function(groupOrChoice) {
                if ('choices' in groupOrChoice) {
                    groupOrChoice.choices.forEach(updateChoice);
                    return;
                }
                updateChoice(groupOrChoice);
            });
            /* @todo only generate add events for the added options instead of all
            if (withEvents) {
              items.forEach((choice) => {
                if (existingItems[choice.value]) {
                  this.passedElement.triggerEvent(
                    EventType.removeItem,
                    this._getChoiceForEvent(choice),
                  );
                }
              });
            }
            */ // load new choices & items
            _this._addPredefinedChoices(choicesFromOptions, selectFirstOption, withEvents);
            // re-do search if required
            if (_this._isSearching) _this._searchChoices(_this.input.value);
        });
        return this;
    };
    Choices.prototype.removeChoice = function(value) {
        var choice = this._store.choices.find(function(c) {
            return c.value === value;
        });
        if (!choice) return this;
        this._clearNotice();
        this._store.dispatch(removeChoice(choice));
        // @todo integrate with Store
        this._searcher.reset();
        if (choice.selected) this.passedElement.triggerEvent(EventType.removeItem, this._getChoiceForOutput(choice));
        return this;
    };
    Choices.prototype.clearChoices = function(clearOptions, clearItems) {
        var _this = this;
        if (clearOptions === void 0) clearOptions = true;
        if (clearItems === void 0) clearItems = false;
        if (clearOptions) {
            if (clearItems) this.passedElement.element.replaceChildren('');
            else this.passedElement.element.querySelectorAll(':not([selected])').forEach(function(el) {
                el.remove();
            });
        }
        this.itemList.element.replaceChildren('');
        this.choiceList.element.replaceChildren('');
        this._clearNotice();
        this._store.withTxn(function() {
            var items = clearItems ? [] : _this._store.items;
            _this._store.reset();
            items.forEach(function(item) {
                _this._store.dispatch(addChoice(item));
                _this._store.dispatch(addItem(item));
            });
        });
        // @todo integrate with Store
        this._searcher.reset();
        return this;
    };
    Choices.prototype.clearStore = function(clearOptions) {
        if (clearOptions === void 0) clearOptions = true;
        this.clearChoices(clearOptions, true);
        this._stopSearch();
        this._lastAddedChoiceId = 0;
        this._lastAddedGroupId = 0;
        return this;
    };
    Choices.prototype.clearInput = function() {
        var shouldSetInputWidth = !this._isSelectOneElement;
        this.input.clear(shouldSetInputWidth);
        this._stopSearch();
        return this;
    };
    Choices.prototype._validateConfig = function() {
        var config = this.config;
        var invalidConfigOptions = diff(config, DEFAULT_CONFIG);
        if (invalidConfigOptions.length) console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
        if (config.allowHTML && config.allowHtmlUserInput) {
            if (config.addItems) console.warn('Warning: allowHTML/allowHtmlUserInput/addItems all being true is strongly not recommended and may lead to XSS attacks');
            if (config.addChoices) console.warn('Warning: allowHTML/allowHtmlUserInput/addChoices all being true is strongly not recommended and may lead to XSS attacks');
        }
    };
    Choices.prototype._render = function(changes) {
        if (changes === void 0) changes = {
            choices: true,
            groups: true,
            items: true
        };
        if (this._store.inTxn()) return;
        if (this._isSelectElement) {
            if (changes.choices || changes.groups) this._renderChoices();
        }
        if (changes.items) this._renderItems();
    };
    Choices.prototype._renderChoices = function() {
        var _this = this;
        if (!this._canAddItems()) return; // block rendering choices if the input limit is reached.
        var _a = this, config = _a.config, isSearching = _a._isSearching;
        var _b = this._store, activeGroups = _b.activeGroups, activeChoices = _b.activeChoices;
        var renderLimit = 0;
        if (isSearching && config.searchResultLimit > 0) renderLimit = config.searchResultLimit;
        else if (config.renderChoiceLimit > 0) renderLimit = config.renderChoiceLimit;
        if (this._isSelectElement) {
            var backingOptions = activeChoices.filter(function(choice) {
                return !choice.element;
            });
            if (backingOptions.length) this.passedElement.addOptions(backingOptions);
        }
        var fragment = document.createDocumentFragment();
        var renderableChoices = function(choices) {
            return choices.filter(function(choice) {
                return !choice.placeholder && (isSearching ? !!choice.rank : config.renderSelectedChoices || !choice.selected);
            });
        };
        var selectableChoices = false;
        var renderChoices = function(choices, withinGroup, groupLabel) {
            if (isSearching) // sortByRank is used to ensure stable sorting, as scores are non-unique
            // this additionally ensures fuseOptions.sortFn is not ignored
            choices.sort(sortByRank);
            else if (config.shouldSort) choices.sort(config.sorter);
            var choiceLimit = choices.length;
            choiceLimit = !withinGroup && renderLimit && choiceLimit > renderLimit ? renderLimit : choiceLimit;
            choiceLimit--;
            choices.every(function(choice, index) {
                // choiceEl being empty signals the contents has probably significantly changed
                var dropdownItem = choice.choiceEl || _this._templates.choice(config, choice, config.itemSelectText, groupLabel);
                choice.choiceEl = dropdownItem;
                fragment.appendChild(dropdownItem);
                if (isSearching || !choice.selected) selectableChoices = true;
                return index < choiceLimit;
            });
        };
        if (activeChoices.length) {
            if (config.resetScrollPosition) requestAnimationFrame(function() {
                return _this.choiceList.scrollToTop();
            });
            if (!this._hasNonChoicePlaceholder && !isSearching && this._isSelectOneElement) // If we have a placeholder choice along with groups
            renderChoices(activeChoices.filter(function(choice) {
                return choice.placeholder && !choice.group;
            }), false, undefined);
            // If we have grouped options
            if (activeGroups.length && !isSearching) {
                if (config.shouldSort) activeGroups.sort(config.sorter);
                // render Choices without group first, regardless of sort, otherwise they won't be distinguishable
                // from the last group
                renderChoices(activeChoices.filter(function(choice) {
                    return !choice.placeholder && !choice.group;
                }), false, undefined);
                activeGroups.forEach(function(group) {
                    var groupChoices = renderableChoices(group.choices);
                    if (groupChoices.length) {
                        if (group.label) {
                            var dropdownGroup = group.groupEl || _this._templates.choiceGroup(_this.config, group);
                            group.groupEl = dropdownGroup;
                            dropdownGroup.remove();
                            fragment.appendChild(dropdownGroup);
                        }
                        renderChoices(groupChoices, true, config.appendGroupInSearch && isSearching ? group.label : undefined);
                    }
                });
            } else renderChoices(renderableChoices(activeChoices), false, undefined);
        }
        if (!selectableChoices && (isSearching || !fragment.children.length || !config.renderSelectedChoices)) {
            if (!this._notice) this._notice = {
                text: resolveStringFunction(isSearching ? config.noResultsText : config.noChoicesText),
                type: isSearching ? NoticeTypes.noResults : NoticeTypes.noChoices
            };
            fragment.replaceChildren('');
        }
        this._renderNotice(fragment);
        this.choiceList.element.replaceChildren(fragment);
        if (selectableChoices) this._highlightChoice();
    };
    Choices.prototype._renderItems = function() {
        var _this = this;
        var items = this._store.items || [];
        var itemList = this.itemList.element;
        var config = this.config;
        var fragment = document.createDocumentFragment();
        var itemFromList = function(item) {
            return itemList.querySelector("[data-item][data-id=\"".concat(item.id, "\"]"));
        };
        var addItemToFragment = function(item) {
            var el = item.itemEl;
            if (el && el.parentElement) return;
            el = itemFromList(item) || _this._templates.item(config, item, config.removeItemButton);
            item.itemEl = el;
            fragment.appendChild(el);
        };
        // new items
        items.forEach(addItemToFragment);
        var addedItems = !!fragment.childNodes.length;
        if (this._isSelectOneElement) {
            var existingItems = itemList.children.length;
            if (addedItems || existingItems > 1) {
                var placeholder = itemList.querySelector(getClassNamesSelector(config.classNames.placeholder));
                if (placeholder) placeholder.remove();
            } else if (!addedItems && !existingItems && this._placeholderValue) {
                addedItems = true;
                addItemToFragment(mapInputToChoice({
                    selected: true,
                    value: '',
                    label: this._placeholderValue,
                    placeholder: true
                }, false));
            }
        }
        if (addedItems) {
            itemList.append(fragment);
            if (config.shouldSortItems && !this._isSelectOneElement) {
                items.sort(config.sorter);
                // push sorting into the DOM
                items.forEach(function(item) {
                    var el = itemFromList(item);
                    if (el) {
                        el.remove();
                        fragment.append(el);
                    }
                });
                itemList.append(fragment);
            }
        }
        if (this._isTextElement) // Update the value of the hidden input
        this.passedElement.value = items.map(function(_a) {
            var value = _a.value;
            return value;
        }).join(config.delimiter);
    };
    Choices.prototype._displayNotice = function(text, type, openDropdown) {
        if (openDropdown === void 0) openDropdown = true;
        var oldNotice = this._notice;
        if (oldNotice && (oldNotice.type === type && oldNotice.text === text || oldNotice.type === NoticeTypes.addChoice && (type === NoticeTypes.noResults || type === NoticeTypes.noChoices))) {
            if (openDropdown) this.showDropdown(true);
            return;
        }
        this._clearNotice();
        this._notice = text ? {
            text: text,
            type: type
        } : undefined;
        this._renderNotice();
        if (openDropdown && text) this.showDropdown(true);
    };
    Choices.prototype._clearNotice = function() {
        if (!this._notice) return;
        var noticeElement = this.choiceList.element.querySelector(getClassNamesSelector(this.config.classNames.notice));
        if (noticeElement) noticeElement.remove();
        this._notice = undefined;
    };
    Choices.prototype._renderNotice = function(fragment) {
        var noticeConf = this._notice;
        if (noticeConf) {
            var notice = this._templates.notice(this.config, noticeConf.text, noticeConf.type);
            if (fragment) fragment.append(notice);
            else this.choiceList.prepend(notice);
        }
    };
    // eslint-disable-next-line class-methods-use-this
    Choices.prototype._getChoiceForOutput = function(choice, keyCode) {
        return {
            id: choice.id,
            highlighted: choice.highlighted,
            labelClass: choice.labelClass,
            labelDescription: choice.labelDescription,
            customProperties: choice.customProperties,
            disabled: choice.disabled,
            active: choice.active,
            label: choice.label,
            placeholder: choice.placeholder,
            value: choice.value,
            groupValue: choice.group ? choice.group.label : undefined,
            element: choice.element,
            keyCode: keyCode
        };
    };
    Choices.prototype._triggerChange = function(value) {
        if (value === undefined || value === null) return;
        this.passedElement.triggerEvent(EventType.change, {
            value: value
        });
    };
    Choices.prototype._handleButtonAction = function(element) {
        var _this = this;
        var items = this._store.items;
        if (!items.length || !this.config.removeItems || !this.config.removeItemButton) return;
        var id = element && parseDataSetId(element.parentElement);
        var itemToRemove = id && items.find(function(item) {
            return item.id === id;
        });
        if (!itemToRemove) return;
        this._store.withTxn(function() {
            // Remove item associated with button
            _this._removeItem(itemToRemove);
            _this._triggerChange(itemToRemove.value);
            if (_this._isSelectOneElement && !_this._hasNonChoicePlaceholder) {
                var placeholderChoice = (_this.config.shouldSort ? _this._store.choices.reverse() : _this._store.choices).find(function(choice) {
                    return choice.placeholder;
                });
                if (placeholderChoice) {
                    _this._addItem(placeholderChoice);
                    _this.unhighlightAll();
                    if (placeholderChoice.value) _this._triggerChange(placeholderChoice.value);
                }
            }
        });
    };
    Choices.prototype._handleItemAction = function(element, hasShiftKey) {
        var _this = this;
        if (hasShiftKey === void 0) hasShiftKey = false;
        var items = this._store.items;
        if (!items.length || !this.config.removeItems || this._isSelectOneElement) return;
        var id = parseDataSetId(element);
        if (!id) return;
        // We only want to select one item with a click
        // so we deselect any items that aren't the target
        // unless shift is being pressed
        items.forEach(function(item) {
            if (item.id === id && !item.highlighted) _this.highlightItem(item);
            else if (!hasShiftKey && item.highlighted) _this.unhighlightItem(item);
        });
        // Focus input as without focus, a user cannot do anything with a
        // highlighted item
        this.input.focus();
    };
    Choices.prototype._handleChoiceAction = function(element) {
        var _this = this;
        // If we are clicking on an option
        var id = parseDataSetId(element);
        var choice = id && this._store.getChoiceById(id);
        if (!choice || choice.disabled) return false;
        var hasActiveDropdown = this.dropdown.isActive;
        if (!choice.selected) {
            if (!this._canAddItems()) return true; // causes _onEnterKey to early out
            this._store.withTxn(function() {
                _this._addItem(choice, true, true);
                _this.clearInput();
                _this.unhighlightAll();
            });
            this._triggerChange(choice.value);
        }
        // We want to close the dropdown if we are dealing with a single select box
        if (hasActiveDropdown && this.config.closeDropdownOnSelect) {
            this.hideDropdown(true);
            this.containerOuter.element.focus();
        }
        return true;
    };
    Choices.prototype._handleBackspace = function(items) {
        var config = this.config;
        if (!config.removeItems || !items.length) return;
        var lastItem = items[items.length - 1];
        var hasHighlightedItems = items.some(function(item) {
            return item.highlighted;
        });
        // If editing the last item is allowed and there are not other selected items,
        // we can edit the item value. Otherwise if we can remove items, remove all selected items
        if (config.editItems && !hasHighlightedItems && lastItem) {
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
    Choices.prototype._loadChoices = function() {
        var _a;
        var _this = this;
        var config = this.config;
        if (this._isTextElement) {
            // Assign preset items from passed object first
            this._presetChoices = config.items.map(function(e) {
                return mapInputToChoice(e, false);
            });
            // Add any values passed from attribute
            if (this.passedElement.value) {
                var elementItems = this.passedElement.value.split(config.delimiter).map(function(e) {
                    return mapInputToChoice(e, false, _this.config.allowHtmlUserInput);
                });
                this._presetChoices = this._presetChoices.concat(elementItems);
            }
            this._presetChoices.forEach(function(choice) {
                choice.selected = true;
            });
        } else if (this._isSelectElement) {
            // Assign preset choices from passed object
            this._presetChoices = config.choices.map(function(e) {
                return mapInputToChoice(e, true);
            });
            // Create array of choices from option elements
            var choicesFromOptions = this.passedElement.optionsAsChoices();
            if (choicesFromOptions) (_a = this._presetChoices).push.apply(_a, choicesFromOptions);
        }
    };
    Choices.prototype._handleLoadingState = function(setLoading) {
        if (setLoading === void 0) setLoading = true;
        var el = this.itemList.element;
        if (setLoading) {
            this.disable();
            this.containerOuter.addLoadingState();
            if (this._isSelectOneElement) el.replaceChildren(this._templates.placeholder(this.config, this.config.loadingText));
            else this.input.placeholder = this.config.loadingText;
        } else {
            this.enable();
            this.containerOuter.removeLoadingState();
            if (this._isSelectOneElement) {
                el.replaceChildren('');
                this._render();
            } else this.input.placeholder = this._placeholderValue || '';
        }
    };
    Choices.prototype._handleSearch = function(value) {
        if (!this.input.isFocussed) return;
        // Check that we have a value to search and the input was an alphanumeric character
        if (value !== null && typeof value !== 'undefined' && value.length >= this.config.searchFloor) {
            var resultCount = this.config.searchChoices ? this._searchChoices(value) : 0;
            if (resultCount !== null) // Trigger search event
            this.passedElement.triggerEvent(EventType.search, {
                value: value,
                resultCount: resultCount
            });
        } else if (this._store.choices.some(function(option) {
            return !option.active;
        })) this._stopSearch();
    };
    Choices.prototype._canAddItems = function() {
        var config = this.config;
        var maxItemCount = config.maxItemCount, maxItemText = config.maxItemText;
        if (!config.singleModeForMultiSelect && maxItemCount > 0 && maxItemCount <= this._store.items.length) {
            this.choiceList.element.replaceChildren('');
            this._notice = undefined;
            this._displayNotice(typeof maxItemText === 'function' ? maxItemText(maxItemCount) : maxItemText, NoticeTypes.addChoice);
            return false;
        }
        if (this._notice && this._notice.type === NoticeTypes.addChoice) this._clearNotice();
        return true;
    };
    Choices.prototype._canCreateItem = function(value) {
        var config = this.config;
        var canAddItem = true;
        var notice = '';
        if (canAddItem && typeof config.addItemFilter === 'function' && !config.addItemFilter(value)) {
            canAddItem = false;
            notice = resolveNoticeFunction(config.customAddItemText, value);
        }
        if (canAddItem) {
            var foundChoice = this._store.choices.find(function(choice) {
                return config.valueComparer(choice.value, value);
            });
            if (foundChoice) {
                if (this._isSelectElement) {
                    // for exact matches, do not prompt to add it as a custom choice
                    this._displayNotice('', NoticeTypes.addChoice);
                    return false;
                }
                if (!config.duplicateItemsAllowed) {
                    canAddItem = false;
                    notice = resolveNoticeFunction(config.uniqueItemText, value);
                }
            }
        }
        if (canAddItem) notice = resolveNoticeFunction(config.addItemText, value);
        if (notice) this._displayNotice(notice, NoticeTypes.addChoice);
        return canAddItem;
    };
    Choices.prototype._searchChoices = function(value) {
        var newValue = value.trim().replace(/\s{2,}/, ' ');
        // signal input didn't change search
        if (!newValue.length || newValue === this._currentValue) return null;
        var searcher = this._searcher;
        if (searcher.isEmptyIndex()) searcher.index(this._store.searchableChoices);
        // If new value matches the desired length and is not the same as the current value with a space
        var results = searcher.search(newValue);
        this._currentValue = newValue;
        this._highlightPosition = 0;
        this._isSearching = true;
        var notice = this._notice;
        var noticeType = notice && notice.type;
        if (noticeType !== NoticeTypes.addChoice) {
            if (!results.length) this._displayNotice(resolveStringFunction(this.config.noResultsText), NoticeTypes.noResults);
            else this._clearNotice();
        }
        this._store.dispatch(filterChoices(results));
        return results.length;
    };
    Choices.prototype._stopSearch = function() {
        if (this._isSearching) {
            this._currentValue = '';
            this._isSearching = false;
            this._clearNotice();
            this._store.dispatch(activateChoices(true));
            this.passedElement.triggerEvent(EventType.search, {
                value: '',
                resultCount: 0
            });
        }
    };
    Choices.prototype._addEventListeners = function() {
        var documentElement = this._docRoot;
        var outerElement = this.containerOuter.element;
        var inputElement = this.input.element;
        // capture events - can cancel event processing or propagation
        documentElement.addEventListener('touchend', this._onTouchEnd, true);
        outerElement.addEventListener('keydown', this._onKeyDown, true);
        outerElement.addEventListener('mousedown', this._onMouseDown, true);
        // passive events - doesn't call `preventDefault` or `stopPropagation`
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
            outerElement.addEventListener('focus', this._onFocus, {
                passive: true
            });
            outerElement.addEventListener('blur', this._onBlur, {
                passive: true
            });
        }
        inputElement.addEventListener('keyup', this._onKeyUp, {
            passive: true
        });
        inputElement.addEventListener('input', this._onInput, {
            passive: true
        });
        inputElement.addEventListener('focus', this._onFocus, {
            passive: true
        });
        inputElement.addEventListener('blur', this._onBlur, {
            passive: true
        });
        if (inputElement.form) inputElement.form.addEventListener('reset', this._onFormReset, {
            passive: true
        });
        this.input.addEventListeners();
    };
    Choices.prototype._removeEventListeners = function() {
        var documentElement = this._docRoot;
        var outerElement = this.containerOuter.element;
        var inputElement = this.input.element;
        documentElement.removeEventListener('touchend', this._onTouchEnd, true);
        outerElement.removeEventListener('keydown', this._onKeyDown, true);
        outerElement.removeEventListener('mousedown', this._onMouseDown, true);
        documentElement.removeEventListener('click', this._onClick);
        documentElement.removeEventListener('touchmove', this._onTouchMove);
        this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);
        if (this._isSelectOneElement) {
            outerElement.removeEventListener('focus', this._onFocus);
            outerElement.removeEventListener('blur', this._onBlur);
        }
        inputElement.removeEventListener('keyup', this._onKeyUp);
        inputElement.removeEventListener('input', this._onInput);
        inputElement.removeEventListener('focus', this._onFocus);
        inputElement.removeEventListener('blur', this._onBlur);
        if (inputElement.form) inputElement.form.removeEventListener('reset', this._onFormReset);
        this.input.removeEventListeners();
    };
    Choices.prototype._onKeyDown = function(event) {
        var keyCode = event.keyCode;
        var hasActiveDropdown = this.dropdown.isActive;
        /*
        See:
        https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
        https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
        https://en.wikipedia.org/wiki/UTF-16#Code_points_from_U+010000_to_U+10FFFF - UTF-16 surrogate pairs
        https://stackoverflow.com/a/70866532 - "Unidentified" for mobile
        http://www.unicode.org/versions/Unicode5.2.0/ch16.pdf#G19635 - U+FFFF is reserved (Section 16.7)
    
        Logic: when a key event is sent, `event.key` represents its printable value _or_ one
        of a large list of special values indicating meta keys/functionality. In addition,
        key events for compose functionality contain a value of `Dead` when mid-composition.
    
        I can't quite verify it, but non-English IMEs may also be able to generate key codes
        for code points in the surrogate-pair range, which could potentially be seen as having
        key.length > 1. Since `Fn` is one of the special keys, we can't distinguish by that
        alone.
    
        Here, key.length === 1 means we know for sure the input was printable and not a special
        `key` value. When the length is greater than 1, it could be either a printable surrogate
        pair or a special `key` value. We can tell the difference by checking if the _character
        code_ value (not code point!) is in the "surrogate pair" range or not.
    
        We don't use .codePointAt because an invalid code point would return 65535, which wouldn't
        pass the >= 0x10000 check we would otherwise use.
    
        > ...The Unicode Standard sets aside 66 noncharacter code points. The last two code points
        > of each plane are noncharacters: U+FFFE and U+FFFF on the BMP...
        */ var wasPrintableChar = event.key.length === 1 || event.key.length === 2 && event.key.charCodeAt(0) >= 0xd800 || event.key === 'Unidentified';
        /*
          We do not show the dropdown if focusing out with esc or navigating through input fields.
          An activated search can still be opened with any other key.
         */ if (!this._isTextElement && !hasActiveDropdown && keyCode !== KeyCodeMap.ESC_KEY && keyCode !== KeyCodeMap.TAB_KEY && keyCode !== KeyCodeMap.SHIFT_KEY) {
            this.showDropdown();
            if (!this.input.isFocussed && wasPrintableChar) {
                /*
                  We update the input value with the pressed key as
                  the input was not focussed at the time of key press
                  therefore does not have the value of the key.
                */ this.input.value += event.key;
                // browsers interpret a space as pagedown
                if (event.key === ' ') event.preventDefault();
            }
        }
        switch(keyCode){
            case KeyCodeMap.A_KEY:
                return this._onSelectKey(event, this.itemList.element.hasChildNodes());
            case KeyCodeMap.ENTER_KEY:
                return this._onEnterKey(event, hasActiveDropdown);
            case KeyCodeMap.ESC_KEY:
                return this._onEscapeKey(event, hasActiveDropdown);
            case KeyCodeMap.UP_KEY:
            case KeyCodeMap.PAGE_UP_KEY:
            case KeyCodeMap.DOWN_KEY:
            case KeyCodeMap.PAGE_DOWN_KEY:
                return this._onDirectionKey(event, hasActiveDropdown);
            case KeyCodeMap.DELETE_KEY:
            case KeyCodeMap.BACK_KEY:
                return this._onDeleteKey(event, this._store.items, this.input.isFocussed);
        }
    };
    Choices.prototype._onKeyUp = function() {
        this._canSearch = this.config.searchEnabled;
    };
    Choices.prototype._onInput = function() {
        var value = this.input.value;
        if (!value) {
            if (this._isTextElement) this.hideDropdown(true);
            else this._stopSearch();
            return;
        }
        if (!this._canAddItems()) return;
        if (this._canSearch) // do the search even if the entered text can not be added
        this._handleSearch(value);
        if (!this._canAddUserChoices) return;
        // determine if a notice needs to be displayed for why a search result can't be added
        this._canCreateItem(value);
        if (this._isSelectElement) {
            this._highlightPosition = 0; // reset to select the notice and/or exact match
            this._highlightChoice();
        }
    };
    Choices.prototype._onSelectKey = function(event, hasItems) {
        // If CTRL + A or CMD + A have been pressed and there are items to select
        if ((event.ctrlKey || event.metaKey) && hasItems) {
            this._canSearch = false;
            var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
            if (shouldHightlightAll) this.highlightAll();
        }
    };
    Choices.prototype._onEnterKey = function(event, hasActiveDropdown) {
        var _this = this;
        var value = this.input.value;
        var target = event.target;
        event.preventDefault();
        if (target && target.hasAttribute('data-button')) {
            this._handleButtonAction(target);
            return;
        }
        if (!hasActiveDropdown) {
            if (this._isSelectElement || this._notice) this.showDropdown();
            return;
        }
        var highlightedChoice = this.dropdown.element.querySelector(getClassNamesSelector(this.config.classNames.highlightedState));
        if (highlightedChoice && this._handleChoiceAction(highlightedChoice)) return;
        if (!target || !value) {
            this.hideDropdown(true);
            return;
        }
        if (!this._canAddItems()) return;
        var addedItem = false;
        this._store.withTxn(function() {
            addedItem = _this._findAndSelectChoiceByValue(value, true);
            if (!addedItem) {
                if (!_this._canAddUserChoices) return;
                if (!_this._canCreateItem(value)) return;
                _this._addChoice(mapInputToChoice(value, false, _this.config.allowHtmlUserInput), true, true);
                addedItem = true;
            }
            _this.clearInput();
            _this.unhighlightAll();
        });
        if (!addedItem) return;
        this._triggerChange(value);
        if (this.config.closeDropdownOnSelect) this.hideDropdown(true);
    };
    Choices.prototype._onEscapeKey = function(event, hasActiveDropdown) {
        if (hasActiveDropdown) {
            event.stopPropagation();
            this.hideDropdown(true);
            this._stopSearch();
            this.containerOuter.element.focus();
        }
    };
    Choices.prototype._onDirectionKey = function(event, hasActiveDropdown) {
        var keyCode = event.keyCode;
        // If up or down key is pressed, traverse through options
        if (hasActiveDropdown || this._isSelectOneElement) {
            this.showDropdown();
            this._canSearch = false;
            var directionInt = keyCode === KeyCodeMap.DOWN_KEY || keyCode === KeyCodeMap.PAGE_DOWN_KEY ? 1 : -1;
            var skipKey = event.metaKey || keyCode === KeyCodeMap.PAGE_DOWN_KEY || keyCode === KeyCodeMap.PAGE_UP_KEY;
            var nextEl = void 0;
            if (skipKey) {
                if (directionInt > 0) nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type"));
                else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
            } else {
                var currentEl = this.dropdown.element.querySelector(getClassNamesSelector(this.config.classNames.highlightedState));
                if (currentEl) nextEl = getAdjacentEl(currentEl, selectableChoiceIdentifier, directionInt);
                else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
            }
            if (nextEl) {
                // We prevent default to stop the cursor moving
                // when pressing the arrow
                if (!isScrolledIntoView(nextEl, this.choiceList.element, directionInt)) this.choiceList.scrollToChildElement(nextEl, directionInt);
                this._highlightChoice(nextEl);
            }
            // Prevent default to maintain cursor position whilst
            // traversing dropdown options
            event.preventDefault();
        }
    };
    Choices.prototype._onDeleteKey = function(event, items, hasFocusedInput) {
        // If backspace or delete key is pressed and the input has no value
        if (!this._isSelectOneElement && !event.target.value && hasFocusedInput) {
            this._handleBackspace(items);
            event.preventDefault();
        }
    };
    Choices.prototype._onTouchMove = function() {
        if (this._wasTap) this._wasTap = false;
    };
    Choices.prototype._onTouchEnd = function(event) {
        var target = (event || event.touches[0]).target;
        var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
        if (touchWasWithinContainer) {
            var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
            if (containerWasExactTarget) {
                if (this._isTextElement) this.input.focus();
                else if (this._isSelectMultipleElement) this.showDropdown();
            }
            // Prevents focus event firing
            event.stopPropagation();
        }
        this._wasTap = true;
    };
    /**
     * Handles mousedown event in capture mode for containetOuter.element
     */ Choices.prototype._onMouseDown = function(event) {
        var target = event.target;
        if (!(target instanceof HTMLElement)) return;
        // If we have our mouse down on the scrollbar and are on IE11...
        if (IS_IE11 && this.choiceList.element.contains(target)) {
            // check if click was on a scrollbar area
            var firstChoice = this.choiceList.element.firstElementChild;
            this._isScrollingOnIe = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
        }
        if (target === this.input.element) return;
        var item = target.closest('[data-button],[data-item],[data-choice]');
        if (item instanceof HTMLElement) {
            if ('button' in item.dataset) this._handleButtonAction(item);
            else if ('item' in item.dataset) this._handleItemAction(item, event.shiftKey);
            else if ('choice' in item.dataset) this._handleChoiceAction(item);
        }
        event.preventDefault();
    };
    /**
     * Handles mouseover event over this.dropdown
     * @param {MouseEvent} event
     */ Choices.prototype._onMouseOver = function(_a) {
        var target = _a.target;
        if (target instanceof HTMLElement && 'choice' in target.dataset) this._highlightChoice(target);
    };
    Choices.prototype._onClick = function(_a) {
        var target = _a.target;
        var containerOuter = this.containerOuter;
        var clickWasWithinContainer = containerOuter.element.contains(target);
        if (clickWasWithinContainer) {
            if (!this.dropdown.isActive && !containerOuter.isDisabled) {
                if (this._isTextElement) {
                    if (document.activeElement !== this.input.element) this.input.focus();
                } else {
                    this.showDropdown();
                    containerOuter.element.focus();
                }
            } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) this.hideDropdown();
        } else {
            containerOuter.removeFocusState();
            this.hideDropdown(true);
            this.unhighlightAll();
        }
    };
    Choices.prototype._onFocus = function(_a) {
        var target = _a.target;
        var containerOuter = this.containerOuter;
        var focusWasWithinContainer = target && containerOuter.element.contains(target);
        if (!focusWasWithinContainer) return;
        var targetIsInput = target === this.input.element;
        if (this._isTextElement) {
            if (targetIsInput) containerOuter.addFocusState();
        } else if (this._isSelectMultipleElement) {
            if (targetIsInput) {
                this.showDropdown(true);
                // If element is a select box, the focused element is the container and the dropdown
                // isn't already open, focus and show dropdown
                containerOuter.addFocusState();
            }
        } else {
            containerOuter.addFocusState();
            if (targetIsInput) this.showDropdown(true);
        }
    };
    Choices.prototype._onBlur = function(_a) {
        var target = _a.target;
        var containerOuter = this.containerOuter;
        var blurWasWithinContainer = target && containerOuter.element.contains(target);
        if (blurWasWithinContainer && !this._isScrollingOnIe) {
            if (target === this.input.element) {
                containerOuter.removeFocusState();
                this.hideDropdown(true);
                if (this._isTextElement || this._isSelectMultipleElement) this.unhighlightAll();
            } else if (target === this.containerOuter.element) {
                // Remove the focus state when the past outerContainer was the target
                containerOuter.removeFocusState();
                // Also close the dropdown if search is disabled
                if (!this._canSearch) this.hideDropdown(true);
            }
        } else {
            // On IE11, clicking the scollbar blurs our input and thus
            // closes the dropdown. To stop this, we refocus our input
            // if we know we are on IE *and* are scrolling.
            this._isScrollingOnIe = false;
            this.input.element.focus();
        }
    };
    Choices.prototype._onFormReset = function() {
        var _this = this;
        this._store.withTxn(function() {
            _this.clearInput();
            _this.hideDropdown();
            _this.refresh(false, false, true);
            if (_this._initialItems.length) _this.setChoiceByValue(_this._initialItems);
        });
    };
    Choices.prototype._highlightChoice = function(el) {
        if (el === void 0) el = null;
        var choices = Array.from(this.dropdown.element.querySelectorAll(selectableChoiceIdentifier));
        if (!choices.length) return;
        var passedEl = el;
        var highlightedState = this.config.classNames.highlightedState;
        var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(getClassNamesSelector(highlightedState)));
        // Remove any highlighted choices
        highlightedChoices.forEach(function(choice) {
            removeClassesFromElement(choice, highlightedState);
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
        addClassesToElement(passedEl, highlightedState);
        passedEl.setAttribute('aria-selected', 'true');
        this.passedElement.triggerEvent(EventType.highlightChoice, {
            el: passedEl
        });
        if (this.dropdown.isActive) {
            // IE11 ignores aria-label and blocks virtual keyboard
            // if aria-activedescendant is set without a dropdown
            this.input.setActiveDescendant(passedEl.id);
            this.containerOuter.setActiveDescendant(passedEl.id);
        }
    };
    Choices.prototype._addItem = function(item, withEvents, userTriggered) {
        if (withEvents === void 0) withEvents = true;
        if (userTriggered === void 0) userTriggered = false;
        if (!item.id) throw new TypeError('item.id must be set before _addItem is called for a choice/item');
        if (this.config.singleModeForMultiSelect || this._isSelectOneElement) this.removeActiveItems(item.id);
        this._store.dispatch(addItem(item));
        if (withEvents) {
            this.passedElement.triggerEvent(EventType.addItem, this._getChoiceForOutput(item));
            if (userTriggered) this.passedElement.triggerEvent(EventType.choice, this._getChoiceForOutput(item));
        }
    };
    Choices.prototype._removeItem = function(item) {
        if (!item.id) return;
        this._store.dispatch(removeItem$1(item));
        var notice = this._notice;
        if (notice && notice.type === NoticeTypes.noChoices) this._clearNotice();
        this.passedElement.triggerEvent(EventType.removeItem, this._getChoiceForOutput(item));
    };
    Choices.prototype._addChoice = function(choice, withEvents, userTriggered) {
        if (withEvents === void 0) withEvents = true;
        if (userTriggered === void 0) userTriggered = false;
        if (choice.id) throw new TypeError('Can not re-add a choice which has already been added');
        var config = this.config;
        if (!config.duplicateItemsAllowed && this._store.choices.find(function(c) {
            return config.valueComparer(c.value, choice.value);
        })) return;
        // Generate unique id, in-place update is required so chaining _addItem works as expected
        this._lastAddedChoiceId++;
        choice.id = this._lastAddedChoiceId;
        choice.elementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choice.id);
        var prependValue = config.prependValue, appendValue = config.appendValue;
        if (prependValue) choice.value = prependValue + choice.value;
        if (appendValue) choice.value += appendValue.toString();
        if ((prependValue || appendValue) && choice.element) choice.element.value = choice.value;
        this._clearNotice();
        this._store.dispatch(addChoice(choice));
        if (choice.selected) this._addItem(choice, withEvents, userTriggered);
    };
    Choices.prototype._addGroup = function(group, withEvents) {
        var _this = this;
        if (withEvents === void 0) withEvents = true;
        if (group.id) throw new TypeError('Can not re-add a group which has already been added');
        this._store.dispatch(addGroup(group));
        if (!group.choices) return;
        // add unique id for the group(s), and do not store the full list of choices in this group
        this._lastAddedGroupId++;
        group.id = this._lastAddedGroupId;
        group.choices.forEach(function(item) {
            item.group = group;
            if (group.disabled) item.disabled = true;
            _this._addChoice(item, withEvents);
        });
    };
    Choices.prototype._createTemplates = function() {
        var _this = this;
        var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
        var userTemplates = {};
        if (typeof callbackOnCreateTemplates === 'function') userTemplates = callbackOnCreateTemplates.call(this, strToEl, escapeForTemplate, getClassNames);
        var templating = {};
        Object.keys(this._templates).forEach(function(name) {
            if (name in userTemplates) templating[name] = userTemplates[name].bind(_this);
            else templating[name] = _this._templates[name].bind(_this);
        });
        this._templates = templating;
    };
    Choices.prototype._createElements = function() {
        var templating = this._templates;
        var _a = this, config = _a.config, isSelectOneElement = _a._isSelectOneElement;
        var position = config.position, classNames = config.classNames;
        var elementType = this._elementType;
        this.containerOuter = new Container({
            element: templating.containerOuter(config, this._direction, this._isSelectElement, isSelectOneElement, config.searchEnabled, elementType, config.labelId),
            classNames: classNames,
            type: elementType,
            position: position
        });
        this.containerInner = new Container({
            element: templating.containerInner(config),
            classNames: classNames,
            type: elementType,
            position: position
        });
        this.input = new Input({
            element: templating.input(config, this._placeholderValue),
            classNames: classNames,
            type: elementType,
            preventPaste: !config.paste
        });
        this.choiceList = new List({
            element: templating.choiceList(config, isSelectOneElement)
        });
        this.itemList = new List({
            element: templating.itemList(config, isSelectOneElement)
        });
        this.dropdown = new Dropdown({
            element: templating.dropdown(config),
            classNames: classNames,
            type: elementType
        });
    };
    Choices.prototype._createStructure = function() {
        var _a = this, containerInner = _a.containerInner, containerOuter = _a.containerOuter, passedElement = _a.passedElement;
        var dropdownElement = this.dropdown.element;
        // Hide original element
        passedElement.conceal();
        // Wrap input in container preserving DOM ordering
        containerInner.wrap(passedElement.element);
        // Wrapper inner container with outer container
        containerOuter.wrap(containerInner.element);
        if (this._isSelectOneElement) this.input.placeholder = this.config.searchPlaceholderValue || '';
        else {
            if (this._placeholderValue) this.input.placeholder = this._placeholderValue;
            this.input.setWidth();
        }
        containerOuter.element.appendChild(containerInner.element);
        containerOuter.element.appendChild(dropdownElement);
        containerInner.element.appendChild(this.itemList.element);
        dropdownElement.appendChild(this.choiceList.element);
        if (!this._isSelectOneElement) containerInner.element.appendChild(this.input.element);
        else if (this.config.searchEnabled) dropdownElement.insertBefore(this.input.element, dropdownElement.firstChild);
        this._highlightPosition = 0;
        this._isSearching = false;
    };
    Choices.prototype._initStore = function() {
        var _this = this;
        this._store.subscribe(this._render).withTxn(function() {
            _this._addPredefinedChoices(_this._presetChoices, _this._isSelectOneElement && !_this._hasNonChoicePlaceholder, false);
        });
        if (!this._store.choices.length || this._isSelectOneElement && this._hasNonChoicePlaceholder) this._render();
    };
    Choices.prototype._addPredefinedChoices = function(choices, selectFirstOption, withEvents) {
        var _this = this;
        if (selectFirstOption === void 0) selectFirstOption = false;
        if (withEvents === void 0) withEvents = true;
        if (selectFirstOption) {
            /**
             * If there is a selected choice already or the choice is not the first in
             * the array, add each choice normally.
             *
             * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
             */ var noSelectedChoices = choices.findIndex(function(choice) {
                return choice.selected;
            }) === -1;
            if (noSelectedChoices) choices.some(function(choice) {
                if (choice.disabled || 'choices' in choice) return false;
                choice.selected = true;
                return true;
            });
        }
        choices.forEach(function(item) {
            if ('choices' in item) {
                if (_this._isSelectElement) _this._addGroup(item, withEvents);
            } else _this._addChoice(item, withEvents);
        });
    };
    Choices.prototype._findAndSelectChoiceByValue = function(value, userTriggered) {
        var _this = this;
        if (userTriggered === void 0) userTriggered = false;
        // Check 'value' property exists and the choice isn't already selected
        var foundChoice = this._store.choices.find(function(choice) {
            return _this.config.valueComparer(choice.value, value);
        });
        if (foundChoice && !foundChoice.disabled && !foundChoice.selected) {
            this._addItem(foundChoice, true, userTriggered);
            return true;
        }
        return false;
    };
    Choices.prototype._generatePlaceholderValue = function() {
        var config = this.config;
        if (!config.placeholder) return null;
        if (this._hasNonChoicePlaceholder) return config.placeholderValue;
        if (this._isSelectElement) {
            var placeholderOption = this.passedElement.placeholderOption;
            return placeholderOption ? placeholderOption.text : null;
        }
        return null;
    };
    Choices.prototype._warnChoicesInitFailed = function(caller) {
        if (this.config.silent) return;
        if (!this.initialised) throw new TypeError("".concat(caller, " called on a non-initialised instance of Choices"));
        else if (!this.initialisedOK) throw new TypeError("".concat(caller, " called for an element which has multiple instances of Choices initialised on it"));
    };
    Choices.version = '11.1.0';
    return Choices;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i38sz":[function() {},{}],"6NMr9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initFilters", ()=>initFilters);
var _lodashDebounce = require("lodash.debounce");
var _lodashDebounceDefault = parcelHelpers.interopDefault(_lodashDebounce);
var _searchRecipes = require("./searchRecipes");
var _choicesJs = require("choices.js");
var _choicesJsDefault = parcelHelpers.interopDefault(_choicesJs);
var _choicesMinCss = require("choices.js/public/assets/styles/choices.min.css");
let choicesInstance;
const searchInput = document.getElementById("search-recipes");
const searchByTime = document.getElementById("search-by-time");
const searchByArea = document.getElementById("search-by-area");
const searchByIngredient = document.getElementById("search-by-ingredients");
function initFilters() {
    if (searchInput) searchInput.addEventListener("input", (0, _lodashDebounceDefault.default)((0, _searchRecipes.updateRecipes), 300));
    if (searchByTime) searchByTime.addEventListener("change", (0, _searchRecipes.updateRecipes));
    if (searchByArea) searchByArea.addEventListener("change", (0, _searchRecipes.updateRecipes));
    if (searchByIngredient) searchByIngredient.addEventListener("change", (0, _searchRecipes.updateRecipes));
    if (choicesInstance) choicesInstance.destroy();
    // Initialize Choices
    choicesInstance = new (0, _choicesJsDefault.default)(searchByTime, {
        removeItemButton: false,
        placeholderValue: "Select time",
        searchPlaceholderValue: "Type to search",
        searchEnabled: true,
        shouldSort: false,
        duplicateItemsAllowed: false
    });
}

},{"lodash.debounce":"irvaP","./searchRecipes":"eMBQc","choices.js":"ip5eZ","choices.js/public/assets/styles/choices.min.css":"i38sz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"irvaP":[function(require,module,exports,__globalThis) {
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

},{}],"i38sz":[function() {},{}],"bpJZ7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Function to initialize the masterclass display
parcelHelpers.export(exports, "masterClassDisplayInit", ()=>masterClassDisplayInit);
var _fetchDataJs = require("./fetchData.js");
var _swiperJs = require("./swiper.js");
// Function to display the masterclasses on the page
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
        const topicName = document.createElement("p");
        topicName.textContent = item.topic.name;
        topicName.classList.add("topic-name");
        imageContainer.appendChild(topicName);
        masterClassItem.appendChild(imageContainer);
        masterClassList.appendChild(masterClassItem);
    });
}
function masterClassDisplayInit() {
    (0, _fetchDataJs.fetchMasterclasses)().then((data)=>{
        console.log("Parsed JSON data:", data);
        masterClassDisplay(data);
        setTimeout(()=>{
            const swiper = (0, _swiperJs.slider)();
            swiper.update();
        }, 100);
    }).catch((error)=>{
        console.error("Error fetching masterclasses:", error);
    });
}

},{"./fetchData.js":"cte0F","./swiper.js":"gCYjv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gCYjv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slider", ()=>slider);
const slider = ()=>{
    const swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"55TPO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "orderNowModal", ()=>orderNowModal);
const orderNowModal = ()=>{
    const modal = document.getElementById("order-now-modal");
    const openModal = document.getElementById("open-order-now-modal");
    const closeModal = document.getElementById("close-order-now-modal");
    openModal.addEventListener("click", ()=>{
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    });
    closeModal.addEventListener("click", ()=>{
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"amd2h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayPopularRecipes", ()=>displayPopularRecipes);
var _fetchData = require("./fetchData");
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
function displayPopularRecipes() {
    (0, _fetchData.fetchPopularRecipes)().then((data)=>{
        console.log("Parsed JSON data", data);
        popularRecipes(data);
    }).catch((error)=>{
        console.error("Error fetching recipes:", error);
    });
}

},{"./fetchData":"cte0F","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"91Jqm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "regionListInit", ()=>regionListInit);
var _fetchData = require("./fetchData");
var _choicesJs = require("choices.js");
var _choicesJsDefault = parcelHelpers.interopDefault(_choicesJs);
var _choicesMinCss = require("choices.js/public/assets/styles/choices.min.css");
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
    if (choicesInstance) choicesInstance.destroy();
    // Initialize Choices
    choicesInstance = new (0, _choicesJsDefault.default)(regionSelect, {
        removeItemButton: false,
        placeholderValue: "Select area",
        searchPlaceholderValue: "Type to search",
        searchEnabled: true,
        shouldSort: false,
        duplicateItemsAllowed: false
    });
}
function regionListInit() {
    (0, _fetchData.fetchRegionsList)().then((data)=>{
        console.log("Parsed JSON data", data);
        regionList(data);
    }).catch((error)=>{
        console.error("Error fetching regions", error);
    });
}

},{"./fetchData":"cte0F","choices.js":"ip5eZ","choices.js/public/assets/styles/choices.min.css":"i38sz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i38sz":[function() {},{}],"jWbWy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sidebar", ()=>sidebar);
const sidebar = ()=>{
    const sidebar = document.getElementById("sidebar");
    const closeSidebar = document.getElementById("close-sidebar");
    const openSidebarButtons = document.querySelectorAll("#open-sidebar");
    openSidebarButtons.forEach((button)=>{
        button.addEventListener("click", function() {
            sidebar.style.display = "flex";
            console.log("openSidebar clicked");
            console.log("Sidebar style:", sidebar.style.display);
        });
    });
    closeSidebar.addEventListener("click", function() {
        sidebar.style.display = "none";
    });
    const handleResize = ()=>{
        if (window.innerWidth > 768) sidebar.style.display = "none";
    };
    window.addEventListener("resize", handleResize);
    handleResize();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6DWc8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "theme", ()=>theme);
const theme = ()=>{
    const toggleButtons = document.querySelectorAll("#theme-toggle-light, #theme-toggle-dark, #theme-toggle-sidebar");
    const darkThemeLogo = document.getElementById("dark-theme-logo");
    const lightThemeLogo = document.getElementById("light-theme-logo");
    // Helper function to update logos
    const updateLogos = (isDark)=>{
        darkThemeLogo.style.display = isDark ? "flex" : "none";
        lightThemeLogo.style.display = isDark ? "none" : "flex";
    };
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme === "dark" || !savedTheme && prefersDark;
    document.body.classList.toggle("dark-theme", isDark);
    updateLogos(isDark);
    // Set the state of all toggles
    toggleButtons.forEach((button)=>{
        button.checked = isDark;
        button.addEventListener("change", ()=>{
            const isDark = document.body.classList.toggle("dark-theme");
            updateLogos(isDark);
            toggleButtons.forEach((toggle)=>{
                toggle.checked = isDark;
            });
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["5j6Kf","a0t4e"], "a0t4e", "parcelRequire78be", {})

//# sourceMappingURL=Tasty-Treats.31b563d9.js.map
