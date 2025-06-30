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
})({"3c99H":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "db12bf3b95ba470a";
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

},{}],"lhsWU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showLoader", ()=>showLoader);
function showLoader() {
    document.getElementById("loader").style.display = "flex";
    setTimeout(()=>{
        document.getElementById("loader").style.display = "none";
    }, 500);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
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

},{}],"80yTG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderPagination", ()=>renderPagination);
var _tuiPagination = require("tui-pagination");
var _tuiPaginationDefault = parcelHelpers.interopDefault(_tuiPagination);
var _tuiPaginationCss = require("tui-pagination/dist/tui-pagination.css");
const renderPagination = (currentPage, totalPages, onPageChange, itemsPerPage = 8)=>{
    const paginationContainer = document.getElementById("pagination");
    if (!paginationContainer) return;
    // Clear previous pagination if needed
    paginationContainer.innerHTML = "";
    const options = {
        totalItems: totalPages * itemsPerPage,
        itemsPerPage: itemsPerPage,
        visiblePages: 2,
        page: currentPage,
        centerAlign: false,
        template: {
            page: '<a href="#" class="tui-page-btn">{{page}}</a>',
            currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
            moveButton: '<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',
            disabledMoveButton: '<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',
            moreButton: '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'
        }
    };
    const pagination = new (0, _tuiPaginationDefault.default)(paginationContainer, options);
    pagination.on("afterMove", (event)=>{
        const newPage = event.page;
        onPageChange(newPage);
    });
};

},{"tui-pagination":"2UBR4","tui-pagination/dist/tui-pagination.css":"82Il4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2UBR4":[function(require,module,exports,__globalThis) {
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */ (function webpackUniversalModuleDefinition(root, factory) {
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
        /******/ __webpack_require__.p = "dist";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 10);
    /******/ }([
        /* 0 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Extend the target object from other objects.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * @module object
 */ /**
 * Extend the target object from other objects.
 * @param {object} target - Object that will be extended
 * @param {...object} objects - Objects as sources
 * @returns {object} Extended object
 * @memberof module:object
 */ function extend(target, objects) {
                var hasOwnProp = Object.prototype.hasOwnProperty;
                var source, prop, i, len;
                for(i = 1, len = arguments.length; i < len; i += 1){
                    source = arguments[i];
                    for(prop in source)if (hasOwnProp.call(source, prop)) target[prop] = source[prop];
                }
                return target;
            }
            module1.exports = extend;
        /***/ },
        /* 1 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is undefined or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is undefined or not.
 * If the given variable is undefined, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is undefined?
 * @memberof module:type
 */ function isUndefined(obj) {
                return obj === undefined; // eslint-disable-line no-undefined
            }
            module1.exports = isUndefined;
        /***/ },
        /* 2 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is an instance of Array or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is an instance of Array or not.
 * If the given variable is an instance of Array, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is array instance?
 * @memberof module:type
 */ function isArray(obj) {
                return obj instanceof Array;
            }
            module1.exports = isArray;
        /***/ },
        /* 3 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Execute the provided callback once for each property of object(or element of array) which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isArray = __webpack_require__(2);
            var forEachArray = __webpack_require__(17);
            var forEachOwnProperties = __webpack_require__(6);
            /**
 * @module collection
 */ /**
 * Execute the provided callback once for each property of object(or element of array) which actually exist.
 * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property(or The value of the element)
 *  2) The name of the property(or The index of the element)
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEach = require('tui-code-snippet/collection/forEach'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEach([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 *
 * // In case of Array-like object
 * var array = Array.prototype.slice.call(arrayLike); // change to array
 * forEach(array, function(value){
 *     sum += value;
 * });
 */ function forEach(obj, iteratee, context) {
                if (isArray(obj)) forEachArray(obj, iteratee, context);
                else forEachOwnProperties(obj, iteratee, context);
            }
            module1.exports = forEach;
        /***/ },
        /* 4 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is a string or not.
 * If the given variable is a string, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is string?
 * @memberof module:type
 */ function isString(obj) {
                return typeof obj === 'string' || obj instanceof String;
            }
            module1.exports = isString;
        /***/ },
        /* 5 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is a function or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is a function or not.
 * If the given variable is a function, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is function?
 * @memberof module:type
 */ function isFunction(obj) {
                return obj instanceof Function;
            }
            module1.exports = isFunction;
        /***/ },
        /* 6 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Execute the provided callback once for each property of object which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Execute the provided callback once for each property of object which actually exist.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property
 *  2) The name of the property
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee  Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachOwnProperties({a:1,b:2,c:3}, function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */ function forEachOwnProperties(obj, iteratee, context) {
                var key;
                context = context || null;
                for(key in obj)if (obj.hasOwnProperty(key)) {
                    if (iteratee.call(context, obj[key], key, obj) === false) break;
                }
            }
            module1.exports = forEachOwnProperties;
        /***/ },
        /* 7 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview
 * This module provides a function to make a constructor
 * that can inherit from the other constructors like the CLASS easily.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var inherit = __webpack_require__(18);
            var extend = __webpack_require__(0);
            /**
 * @module defineClass
 */ /**
 * Help a constructor to be defined and to inherit from the other constructors
 * @param {*} [parent] Parent constructor
 * @param {Object} props Members of constructor
 *  @param {Function} props.init Initialization method
 *  @param {Object} [props.static] Static members of constructor
 * @returns {*} Constructor
 * @memberof module:defineClass
 * @example
 * var defineClass = require('tui-code-snippet/defineClass/defineClass'); // node, commonjs
 *
 * //-- #2. Use property --//
 * var Parent = defineClass({
 *     init: function() { // constuructor
 *         this.name = 'made by def';
 *     },
 *     method: function() {
 *         // ...
 *     },
 *     static: {
 *         staticMethod: function() {
 *              // ...
 *         }
 *     }
 * });
 *
 * var Child = defineClass(Parent, {
 *     childMethod: function() {}
 * });
 *
 * Parent.staticMethod();
 *
 * var parentInstance = new Parent();
 * console.log(parentInstance.name); //made by def
 * parentInstance.staticMethod(); // Error
 *
 * var childInstance = new Child();
 * childInstance.method();
 * childInstance.childMethod();
 */ function defineClass(parent, props) {
                var obj;
                if (!props) {
                    props = parent;
                    parent = null;
                }
                obj = props.init || function() {};
                if (parent) inherit(obj, parent);
                if (props.hasOwnProperty('static')) {
                    extend(obj, props['static']);
                    delete props['static'];
                }
                extend(obj.prototype, props);
                return obj;
            }
            module1.exports = defineClass;
        /***/ },
        /* 8 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /* eslint-disable complexity */ /**
 * @fileoverview Returns the first index at which a given element can be found in the array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isArray = __webpack_require__(2);
            /**
 * @module array
 */ /**
 * Returns the first index at which a given element can be found in the array
 * from start index(default 0), or -1 if it is not present.
 * It compares searchElement to elements of the Array using strict equality
 * (the same method used by the ===, or triple-equals, operator).
 * @param {*} searchElement Element to locate in the array
 * @param {Array} array Array that will be traversed.
 * @param {number} startIndex Start index in array for searching (default 0)
 * @returns {number} the First index at which a given element, or -1 if it is not present
 * @memberof module:array
 * @example
 * var inArray = require('tui-code-snippet/array/inArray'); // node, commonjs
 *
 * var arr = ['one', 'two', 'three', 'four'];
 * var idx1 = inArray('one', arr, 3); // -1
 * var idx2 = inArray('one', arr); // 0
 */ function inArray(searchElement, array, startIndex) {
                var i;
                var length;
                startIndex = startIndex || 0;
                if (!isArray(array)) return -1;
                if (Array.prototype.indexOf) return Array.prototype.indexOf.call(array, searchElement, startIndex);
                length = array.length;
                for(i = startIndex; startIndex >= 0 && i < length; i += 1){
                    if (array[i] === searchElement) return i;
                }
                return -1;
            }
            module1.exports = inArray;
        /***/ },
        /* 9 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var template = __webpack_require__(29);
            var sendHostname = __webpack_require__(30);
            var isFunction = __webpack_require__(5);
            var util = {
                /**
   * Capitalize first letter
   * @param {string} str - String to change
   * @returns {string} Changed string
   */ capitalizeFirstLetter: function(str) {
                    return str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
                },
                /**
   * Check the element is contained
   * @param {HTMLElement} find - Target element
   * @param {HTMLElement} parent - Wrapper element
   * @returns {boolean} Whether contained or not
   */ isContained: function(find, parent) {
                    if (!parent) return false;
                    return find === parent ? true : parent.contains(find);
                },
                /**
   * Create an new element by template literals.
   * @param {string|function} tmpl - template
   * @param {Object} context - context
   * @returns {HTMLElement}
   */ createElementByTemplate: function(tmpl, context) {
                    var parent = document.createElement('div');
                    var html = isFunction(tmpl) ? tmpl(context) : template(tmpl, context);
                    parent.innerHTML = html;
                    return parent.firstChild;
                },
                /**
   * Create a new function that, when called, has its this keyword set to the provided value.
   * @param {function} fn A original function before binding
   * @param {*} obj context of function in arguments[0]
   * @returns {function} A new bound function with context that is in arguments[1]
   */ bind: function(fn, obj) {
                    var slice = Array.prototype.slice;
                    var args;
                    if (fn.bind) return fn.bind.apply(fn, slice.call(arguments, 1));
                    args = slice.call(arguments, 2);
                    return function() {
                        return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
                    };
                },
                /**
   * Send hostname for GA
   * @ignore
   */ sendHostName: function() {
                    sendHostname('pagination', 'UA-129987462-1');
                }
            };
            module1.exports = util;
        /***/ },
        /* 10 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview The entry file of Pagination components
 * @author NHN. FE Development Lab <dl_javascript@nhn.com>
 */ __webpack_require__(11);
            module1.exports = __webpack_require__(12);
        /***/ },
        /* 11 */ /***/ function(module1, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/ },
        /* 12 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var CustomEvents = __webpack_require__(13);
            var defineClass = __webpack_require__(7);
            var extend = __webpack_require__(0);
            var isUndefined = __webpack_require__(1);
            var View = __webpack_require__(20);
            var util = __webpack_require__(9);
            var defaultOption = {
                totalItems: 10,
                itemsPerPage: 10,
                visiblePages: 10,
                page: 1,
                centerAlign: false,
                firstItemClassName: 'tui-first-child',
                lastItemClassName: 'tui-last-child',
                usageStatistics: true
            };
            /**
 * Pagination class
 * @class Pagination
 * @param {string|HTMLElement|jQueryObject} container - Container element or selector.
 * In case of a string, it is considered as an id selector and find the element by id.
 * If there is no element, it is considered as a selector and find the element by querySelector().
 * Passing jQueryObject and considering an id selector at first will be deprecated in v4.0.0.
 * @param {object} options - Option object
 *     @param {number} [options.totalItems=10] Total item count
 *     @param {number} [options.itemsPerPage=10] Item count per page
 *     @param {number} [options.visiblePages=10] Display page link count
 *     @param {number} [options.page=1] Display page after pagination draw.
 *     @param {boolean}[options.centerAlign=false] Whether current page keep center or not
 *     @param {string} [options.firstItemClassName='first-child'] The class name of the first item
 *     @param {string} [options.lastItemClassName='last-child'] The class name of the last item
 *     @param {object} [options.template] A markup string set to make element. Refer to {@link https://github.com/nhn/tui.pagination/blob/master/docs/getting-started.md#how-to-use-template Getting Started: How to use template}.
 *         @param {string|function} [options.template.page] HTML template
 *         @param {string|function} [options.template.currentPage] HTML template
 *         @param {string|function} [options.template.moveButton] HTML template
 *         @param {string|function} [options.template.disabledMoveButton] HTML template
 *         @param {string|function} [options.template.moreButton] HTML template
 *     @param {boolean} [options.usageStatistics=true] Send the hostname to google analytics.
 *         If you do not want to send the hostname, this option set to false.
 * @example
 * // ES6
 * import Pagination from 'tui-pagination';
 *
 * // CommonJS
 * const Pagination = require('tui-pagination');
 *
 * // Browser
 * const Pagination = tui.Pagination;
 *
 * const container = document.getElementById('pagination');
 * const options = { // below default value of options
 *      totalItems: 10,
 *      itemsPerPage: 10,
 *      visiblePages: 10,
 *      page: 1,
 *      centerAlign: false,
 *      firstItemClassName: 'tui-first-child',
 *      lastItemClassName: 'tui-last-child',
 *      template: {
 *          page: '<a href="#" class="tui-page-btn">{{page}}</a>',
 *          currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
 *          moveButton:
 *              '<a href="#" class="tui-page-btn tui-{{type}}">' +
 *                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
 *              '</a>',
 *          disabledMoveButton:
 *              '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
 *                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
 *              '</span>',
 *          moreButton:
 *              '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
 *                  '<span class="tui-ico-ellip">...</span>' +
 *              '</a>'
 *      }
 * };
 * const pagination = new Pagination(container, options);
 */ var Pagination = defineClass(/** @lends Pagination.prototype */ {
                init: function(container, options) {
                    /**
       * Option object
       * @type {object}
       * @private
       */ this._options = extend({}, defaultOption, options);
                    /**
       * Current page number
       * @type {number}
       * @private
       */ this._currentPage = 0;
                    /**
       * View instance
       * @type {View}
       * @private
       */ this._view = new View(container, this._options, util.bind(this._onClickHandler, this));
                    this._paginate();
                    if (this._options.usageStatistics) util.sendHostName();
                },
                /**
     * Set current page
     * @param {number} page - Current page
     * @private
     */ _setCurrentPage: function(page) {
                    this._currentPage = page || this._options.page;
                },
                /**
     * Get last page number
     * @returns {number} Last page number
     * @private
     */ _getLastPage: function() {
                    var lastPage = Math.ceil(this._options.totalItems / this._options.itemsPerPage);
                    return !lastPage ? 1 : lastPage;
                },
                /**
     * Index of list in total lists
     * @param {number} pageNumber - Page number
     * @returns {number} Page index or number
     * @private
     */ _getPageIndex: function(pageNumber) {
                    var left, pageIndex;
                    if (this._options.centerAlign) {
                        left = Math.floor(this._options.visiblePages / 2);
                        pageIndex = pageNumber - left;
                        pageIndex = Math.max(pageIndex, 1);
                        pageIndex = Math.min(pageIndex, this._getLastPage() - this._options.visiblePages + 1);
                        return pageIndex;
                    }
                    return Math.ceil(pageNumber / this._options.visiblePages);
                },
                /**
     * Get relative page
     * @param {string} moveType - Move type ('prev' or 'next')
     * @returns {number} Relative page number
     * @private
     */ _getRelativePage: function(moveType) {
                    var isPrevMove = moveType === 'prev';
                    var currentPage = this.getCurrentPage();
                    return isPrevMove ? currentPage - 1 : currentPage + 1;
                },
                /**
     * Get more page index
     * @param {string} moveType - Move type ('prev' or 'next')
     * @returns {number} Page index
     * @private
     */ _getMorePageIndex: function(moveType) {
                    var currentPageIndex = this._getPageIndex(this.getCurrentPage());
                    var pageCount = this._options.visiblePages;
                    var isPrevMove = moveType === 'prev';
                    var pageIndex;
                    if (this._options.centerAlign) pageIndex = isPrevMove ? currentPageIndex - 1 : currentPageIndex + pageCount;
                    else pageIndex = isPrevMove ? (currentPageIndex - 1) * pageCount : currentPageIndex * pageCount + 1;
                    return pageIndex;
                },
                /* eslint-enable complexity */ /**
     * Get available page number from over number
     * If total page is 23, but input number is 30 => return 23
     * @param {number} page - Page number
     * @returns {number} Replaced pgae number
     * @private
     */ _convertToValidPage: function(page) {
                    var lastPageNumber = this._getLastPage();
                    page = Math.max(page, 1);
                    page = Math.min(page, lastPageNumber);
                    return page;
                },
                /**
     * Create require view set, notify view to update
     * @param {number} page - Page number
     * @private
     */ _paginate: function(page) {
                    var viewData = this._makeViewData(page || this._options.page);
                    this._setCurrentPage(page);
                    this._view.update(viewData);
                },
                /**
     * Create and get view data
     * @param {number} page - Page number
     * @returns {object} view data
     * @private
     */ _makeViewData: function(page) {
                    var viewData = {};
                    var lastPage = this._getLastPage();
                    var currentPageIndex = this._getPageIndex(page);
                    var lastPageListIndex = this._getPageIndex(lastPage);
                    var edges = this._getEdge(page);
                    viewData.leftPageNumber = edges.left;
                    viewData.rightPageNumber = edges.right;
                    viewData.prevMore = currentPageIndex > 1;
                    viewData.nextMore = currentPageIndex < lastPageListIndex;
                    viewData.page = page;
                    viewData.currentPageIndex = page;
                    viewData.lastPage = lastPage;
                    viewData.lastPageListIndex = lastPage;
                    return viewData;
                },
                /**
     * Get each edge page
     * @param {object} page - Page number
     * @returns {{left: number, right: number}} Edge page numbers
     * @private
     */ _getEdge: function(page) {
                    var leftPageNumber, rightPageNumber, left;
                    var lastPage = this._getLastPage();
                    var visiblePages = this._options.visiblePages;
                    var currentPageIndex = this._getPageIndex(page);
                    if (this._options.centerAlign) {
                        left = Math.floor(visiblePages / 2);
                        leftPageNumber = Math.max(page - left, 1);
                        rightPageNumber = leftPageNumber + visiblePages - 1;
                        if (rightPageNumber > lastPage) {
                            leftPageNumber = Math.max(lastPage - visiblePages + 1, 1);
                            rightPageNumber = lastPage;
                        }
                    } else {
                        leftPageNumber = (currentPageIndex - 1) * visiblePages + 1;
                        rightPageNumber = currentPageIndex * visiblePages;
                        rightPageNumber = Math.min(rightPageNumber, lastPage);
                    }
                    return {
                        left: leftPageNumber,
                        right: rightPageNumber
                    };
                },
                /**
     * Pagelist click event hadnler
     * @param {?string} buttonType - Button type
     * @param {?number} page - Page number
     * @private
     */ /* eslint-disable complexity */ _onClickHandler: function(buttonType, page) {
                    switch(buttonType){
                        case 'first':
                            page = 1;
                            break;
                        case 'prev':
                            page = this._getRelativePage('prev');
                            break;
                        case 'next':
                            page = this._getRelativePage('next');
                            break;
                        case 'prevMore':
                            page = this._getMorePageIndex('prev');
                            break;
                        case 'nextMore':
                            page = this._getMorePageIndex('next');
                            break;
                        case 'last':
                            page = this._getLastPage();
                            break;
                        default:
                            if (!page) return;
                    }
                    this.movePageTo(page);
                },
                /* eslint-enable complexity */ /**
     * Reset pagination
     * @param {*} totalItems - Redraw page item count
     * @example
     * pagination.reset();
     * pagination.reset(100);
     */ reset: function(totalItems) {
                    if (isUndefined(totalItems)) totalItems = this._options.totalItems;
                    this._options.totalItems = totalItems;
                    this._paginate(1);
                },
                /**
     * Move to specific page, redraw list.
     * Before move fire beforeMove event, After move fire afterMove event.
     * @param {Number} targetPage - Target page
     * @example
     * pagination.movePageTo(10);
     */ movePageTo: function(targetPage) {
                    targetPage = this._convertToValidPage(targetPage);
                    /**
       * @event Pagination#beforeMove
       * @type {object} evt - Custom event object
       * @property {number} page - Moved page
       * @example
       * paganation.on('beforeMove', (event) => {
       *     const currentPage = event.page;
       *
       *     if (currentPage === 10) {
       *         return false;
       *         // return true;
       *     }
       * });
       */ if (!this.invoke('beforeMove', {
                        page: targetPage
                    })) return;
                    this._paginate(targetPage);
                    /**
       * @event Pagination#afterMove
       * @type {object} evt - Custom event object
       * @property {number} page - Moved page
       * @example
       * paganation.on('afterMove', (event) => {
       *      const currentPage = event.page;
       *      console.log(currentPage);
       * });
       */ this.fire('afterMove', {
                        page: targetPage
                    });
                },
                /**
     * Set total count of items
     * @param {number} itemCount - Total item count
     */ setTotalItems: function(itemCount) {
                    this._options.totalItems = itemCount;
                },
                /**
     * Set count of items per page
     * @param {number} itemCount - Item count
     */ setItemsPerPage: function(itemCount) {
                    this._options.itemsPerPage = itemCount;
                },
                /**
     * Get current page
     * @returns {number} Current page
     */ getCurrentPage: function() {
                    return this._currentPage || this._options.page;
                }
            });
            CustomEvents.mixin(Pagination);
            module1.exports = Pagination;
        /***/ },
        /* 13 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview This module provides some functions for custom events. And it is implemented in the observer design pattern.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var extend = __webpack_require__(0);
            var isExisty = __webpack_require__(14);
            var isString = __webpack_require__(4);
            var isObject = __webpack_require__(16);
            var isArray = __webpack_require__(2);
            var isFunction = __webpack_require__(5);
            var forEach = __webpack_require__(3);
            var R_EVENTNAME_SPLIT = /\s+/g;
            /**
 * @class
 * @example
 * // node, commonjs
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents');
 */ function CustomEvents() {
                /**
     * @type {HandlerItem[]}
     */ this.events = null;
                /**
     * only for checking specific context event was binded
     * @type {object[]}
     */ this.contexts = null;
            }
            /**
 * Mixin custom events feature to specific constructor
 * @param {function} func - constructor
 * @example
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * var model;
 * function Model() {
 *     this.name = '';
 * }
 * CustomEvents.mixin(Model);
 *
 * model = new Model();
 * model.on('change', function() { this.name = 'model'; }, this);
 * model.fire('change');
 * alert(model.name); // 'model';
 */ CustomEvents.mixin = function(func) {
                extend(func.prototype, CustomEvents.prototype);
            };
            /**
 * Get HandlerItem object
 * @param {function} handler - handler function
 * @param {object} [context] - context for handler
 * @returns {HandlerItem} HandlerItem object
 * @private
 */ CustomEvents.prototype._getHandlerItem = function(handler, context) {
                var item = {
                    handler: handler
                };
                if (context) item.context = context;
                return item;
            };
            /**
 * Get event object safely
 * @param {string} [eventName] - create sub event map if not exist.
 * @returns {(object|array)} event object. if you supplied `eventName`
 *  parameter then make new array and return it
 * @private
 */ CustomEvents.prototype._safeEvent = function(eventName) {
                var events = this.events;
                var byName;
                if (!events) events = this.events = {};
                if (eventName) {
                    byName = events[eventName];
                    if (!byName) {
                        byName = [];
                        events[eventName] = byName;
                    }
                    events = byName;
                }
                return events;
            };
            /**
 * Get context array safely
 * @returns {array} context array
 * @private
 */ CustomEvents.prototype._safeContext = function() {
                var context = this.contexts;
                if (!context) context = this.contexts = [];
                return context;
            };
            /**
 * Get index of context
 * @param {object} ctx - context that used for bind custom event
 * @returns {number} index of context
 * @private
 */ CustomEvents.prototype._indexOfContext = function(ctx) {
                var context = this._safeContext();
                var index = 0;
                while(context[index]){
                    if (ctx === context[index][0]) return index;
                    index += 1;
                }
                return -1;
            };
            /**
 * Memorize supplied context for recognize supplied object is context or
 *  name: handler pair object when off()
 * @param {object} ctx - context object to memorize
 * @private
 */ CustomEvents.prototype._memorizeContext = function(ctx) {
                var context, index;
                if (!isExisty(ctx)) return;
                context = this._safeContext();
                index = this._indexOfContext(ctx);
                if (index > -1) context[index][1] += 1;
                else context.push([
                    ctx,
                    1
                ]);
            };
            /**
 * Forget supplied context object
 * @param {object} ctx - context object to forget
 * @private
 */ CustomEvents.prototype._forgetContext = function(ctx) {
                var context, contextIndex;
                if (!isExisty(ctx)) return;
                context = this._safeContext();
                contextIndex = this._indexOfContext(ctx);
                if (contextIndex > -1) {
                    context[contextIndex][1] -= 1;
                    if (context[contextIndex][1] <= 0) context.splice(contextIndex, 1);
                }
            };
            /**
 * Bind event handler
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * @private
 */ CustomEvents.prototype._bindEvent = function(eventName, handler, context) {
                var events = this._safeEvent(eventName);
                this._memorizeContext(context);
                events.push(this._getHandlerItem(handler, context));
            };
            /**
 * Bind event handlers
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 Basic Usage
 * CustomEvents.on('onload', handler);
 *
 * // # 2.2 With context
 * CustomEvents.on('onload', handler, myObj);
 *
 * // # 2.3 Bind by object that name, handler pairs
 * CustomEvents.on({
 *     'play': handler,
 *     'pause': handler2
 * });
 *
 * // # 2.4 Bind by object that name, handler pairs with context object
 * CustomEvents.on({
 *     'play': handler
 * }, myObj);
 */ CustomEvents.prototype.on = function(eventName, handler, context) {
                var self = this;
                if (isString(eventName)) {
                    // [syntax 1, 2]
                    eventName = eventName.split(R_EVENTNAME_SPLIT);
                    forEach(eventName, function(name) {
                        self._bindEvent(name, handler, context);
                    });
                } else if (isObject(eventName)) {
                    // [syntax 3, 4]
                    context = handler;
                    forEach(eventName, function(func, name) {
                        self.on(name, func, context);
                    });
                }
            };
            /**
 * Bind one-shot event handlers
 * @param {(string|{name:string,handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {function|object} [handler] - handler function or context
 * @param {object} [context] - context for binding
 */ CustomEvents.prototype.once = function(eventName, handler, context) {
                var self = this;
                if (isObject(eventName)) {
                    context = handler;
                    forEach(eventName, function(func, name) {
                        self.once(name, func, context);
                    });
                    return;
                }
                function onceHandler() {
                    handler.apply(context, arguments);
                    self.off(eventName, onceHandler, context);
                }
                this.on(eventName, onceHandler, context);
            };
            /**
 * Splice supplied array by callback result
 * @param {array} arr - array to splice
 * @param {function} predicate - function return boolean
 * @private
 */ CustomEvents.prototype._spliceMatches = function(arr, predicate) {
                var i = 0;
                var len;
                if (!isArray(arr)) return;
                for(len = arr.length; i < len; i += 1)if (predicate(arr[i]) === true) {
                    arr.splice(i, 1);
                    len -= 1;
                    i -= 1;
                }
            };
            /**
 * Get matcher for unbind specific handler events
 * @param {function} handler - handler function
 * @returns {function} handler matcher
 * @private
 */ CustomEvents.prototype._matchHandler = function(handler) {
                var self = this;
                return function(item) {
                    var needRemove = handler === item.handler;
                    if (needRemove) self._forgetContext(item.context);
                    return needRemove;
                };
            };
            /**
 * Get matcher for unbind specific context events
 * @param {object} context - context
 * @returns {function} object matcher
 * @private
 */ CustomEvents.prototype._matchContext = function(context) {
                var self = this;
                return function(item) {
                    var needRemove = context === item.context;
                    if (needRemove) self._forgetContext(item.context);
                    return needRemove;
                };
            };
            /**
 * Get matcher for unbind specific hander, context pair events
 * @param {function} handler - handler function
 * @param {object} context - context
 * @returns {function} handler, context matcher
 * @private
 */ CustomEvents.prototype._matchHandlerAndContext = function(handler, context) {
                var self = this;
                return function(item) {
                    var matchHandler = handler === item.handler;
                    var matchContext = context === item.context;
                    var needRemove = matchHandler && matchContext;
                    if (needRemove) self._forgetContext(item.context);
                    return needRemove;
                };
            };
            /**
 * Unbind event by event name
 * @param {string} eventName - custom event name to unbind
 * @param {function} [handler] - handler function
 * @private
 */ CustomEvents.prototype._offByEventName = function(eventName, handler) {
                var self = this;
                var andByHandler = isFunction(handler);
                var matchHandler = self._matchHandler(handler);
                eventName = eventName.split(R_EVENTNAME_SPLIT);
                forEach(eventName, function(name) {
                    var handlerItems = self._safeEvent(name);
                    if (andByHandler) self._spliceMatches(handlerItems, matchHandler);
                    else {
                        forEach(handlerItems, function(item) {
                            self._forgetContext(item.context);
                        });
                        self.events[name] = [];
                    }
                });
            };
            /**
 * Unbind event by handler function
 * @param {function} handler - handler function
 * @private
 */ CustomEvents.prototype._offByHandler = function(handler) {
                var self = this;
                var matchHandler = this._matchHandler(handler);
                forEach(this._safeEvent(), function(handlerItems) {
                    self._spliceMatches(handlerItems, matchHandler);
                });
            };
            /**
 * Unbind event by object(name: handler pair object or context object)
 * @param {object} obj - context or {name: handler} pair object
 * @param {function} handler - handler function
 * @private
 */ CustomEvents.prototype._offByObject = function(obj, handler) {
                var self = this;
                var matchFunc;
                if (this._indexOfContext(obj) < 0) forEach(obj, function(func, name) {
                    self.off(name, func);
                });
                else if (isString(handler)) {
                    matchFunc = this._matchContext(obj);
                    self._spliceMatches(this._safeEvent(handler), matchFunc);
                } else if (isFunction(handler)) {
                    matchFunc = this._matchHandlerAndContext(handler, obj);
                    forEach(this._safeEvent(), function(handlerItems) {
                        self._spliceMatches(handlerItems, matchFunc);
                    });
                } else {
                    matchFunc = this._matchContext(obj);
                    forEach(this._safeEvent(), function(handlerItems) {
                        self._spliceMatches(handlerItems, matchFunc);
                    });
                }
            };
            /**
 * Unbind custom events
 * @param {(string|object|function)} eventName - event name or context or
 *  {name: handler} pair object or handler function
 * @param {(function)} handler - handler function
 * @example
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 off by event name
 * CustomEvents.off('onload');
 *
 * // # 2.2 off by event name and handler
 * CustomEvents.off('play', handler);
 *
 * // # 2.3 off by handler
 * CustomEvents.off(handler);
 *
 * // # 2.4 off by context
 * CustomEvents.off(myObj);
 *
 * // # 2.5 off by context and handler
 * CustomEvents.off(myObj, handler);
 *
 * // # 2.6 off by context and event name
 * CustomEvents.off(myObj, 'onload');
 *
 * // # 2.7 off by an Object.<string, function> that is {eventName: handler}
 * CustomEvents.off({
 *   'play': handler,
 *   'pause': handler2
 * });
 *
 * // # 2.8 off the all events
 * CustomEvents.off();
 */ CustomEvents.prototype.off = function(eventName, handler) {
                if (isString(eventName)) // [syntax 1, 2]
                this._offByEventName(eventName, handler);
                else if (!arguments.length) {
                    // [syntax 8]
                    this.events = {};
                    this.contexts = [];
                } else if (isFunction(eventName)) // [syntax 3]
                this._offByHandler(eventName);
                else if (isObject(eventName)) // [syntax 4, 5, 6]
                this._offByObject(eventName, handler);
            };
            /**
 * Fire custom event
 * @param {string} eventName - name of custom event
 */ CustomEvents.prototype.fire = function(eventName) {
                this.invoke.apply(this, arguments);
            };
            /**
 * Fire a event and returns the result of operation 'boolean AND' with all
 *  listener's results.
 *
 * So, It is different from {@link CustomEvents#fire}.
 *
 * In service code, use this as a before event in component level usually
 *  for notifying that the event is cancelable.
 * @param {string} eventName - Custom event name
 * @param {...*} data - Data for event
 * @returns {boolean} The result of operation 'boolean AND'
 * @example
 * var map = new Map();
 * map.on({
 *     'beforeZoom': function() {
 *         // It should cancel the 'zoom' event by some conditions.
 *         if (that.disabled && this.getState()) {
 *             return false;
 *         }
 *         return true;
 *     }
 * });
 *
 * if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
 *     // if true,
 *     // doSomething
 * }
 */ CustomEvents.prototype.invoke = function(eventName) {
                var events, args, index, item;
                if (!this.hasListener(eventName)) return true;
                events = this._safeEvent(eventName);
                args = Array.prototype.slice.call(arguments, 1);
                index = 0;
                while(events[index]){
                    item = events[index];
                    if (item.handler.apply(item.context, args) === false) return false;
                    index += 1;
                }
                return true;
            };
            /**
 * Return whether at least one of the handlers is registered in the given
 *  event name.
 * @param {string} eventName - Custom event name
 * @returns {boolean} Is there at least one handler in event name?
 */ CustomEvents.prototype.hasListener = function(eventName) {
                return this.getListenerLength(eventName) > 0;
            };
            /**
 * Return a count of events registered.
 * @param {string} eventName - Custom event name
 * @returns {number} number of event
 */ CustomEvents.prototype.getListenerLength = function(eventName) {
                var events = this._safeEvent(eventName);
                return events.length;
            };
            module1.exports = CustomEvents;
        /***/ },
        /* 14 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is existing or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isUndefined = __webpack_require__(1);
            var isNull = __webpack_require__(15);
            /**
 * Check whether the given variable is existing or not.
 * If the given variable is not null and not undefined, returns true.
 * @param {*} param - Target for checking
 * @returns {boolean} Is existy?
 * @memberof module:type
 * @example
 * var isExisty = require('tui-code-snippet/type/isExisty'); // node, commonjs
 *
 * isExisty(''); //true
 * isExisty(0); //true
 * isExisty([]); //true
 * isExisty({}); //true
 * isExisty(null); //false
 * isExisty(undefined); //false
*/ function isExisty(param) {
                return !isUndefined(param) && !isNull(param);
            }
            module1.exports = isExisty;
        /***/ },
        /* 15 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is null or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is null or not.
 * If the given variable(arguments[0]) is null, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is null?
 * @memberof module:type
 */ function isNull(obj) {
                return obj === null;
            }
            module1.exports = isNull;
        /***/ },
        /* 16 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is an object or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is an object or not.
 * If the given variable is an object, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is object?
 * @memberof module:type
 */ function isObject(obj) {
                return obj === Object(obj);
            }
            module1.exports = isObject;
        /***/ },
        /* 17 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Execute the provided callback once for each element present in the array(or Array-like object) in ascending order.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Execute the provided callback once for each element present
 * in the array(or Array-like object) in ascending order.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the element
 *  2) The index of the element
 *  3) The array(or Array-like object) being traversed
 * @param {Array|Arguments|NodeList} arr The array(or Array-like object) that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachArray = require('tui-code-snippet/collection/forEachArray'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachArray([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */ function forEachArray(arr, iteratee, context) {
                var index = 0;
                var len = arr.length;
                context = context || null;
                for(; index < len; index += 1){
                    if (iteratee.call(context, arr[index], index, arr) === false) break;
                }
            }
            module1.exports = forEachArray;
        /***/ },
        /* 18 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Provide a simple inheritance in prototype-oriented.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var createObject = __webpack_require__(19);
            /**
 * Provide a simple inheritance in prototype-oriented.
 * Caution :
 *  Don't overwrite the prototype of child constructor.
 *
 * @param {function} subType Child constructor
 * @param {function} superType Parent constructor
 * @memberof module:inheritance
 * @example
 * var inherit = require('tui-code-snippet/inheritance/inherit'); // node, commonjs
 *
 * // Parent constructor
 * function Animal(leg) {
 *     this.leg = leg;
 * }
 * Animal.prototype.growl = function() {
 *     // ...
 * };
 *
 * // Child constructor
 * function Person(name) {
 *     this.name = name;
 * }
 *
 * // Inheritance
 * inherit(Person, Animal);
 *
 * // After this inheritance, please use only the extending of property.
 * // Do not overwrite prototype.
 * Person.prototype.walk = function(direction) {
 *     // ...
 * };
 */ function inherit(subType, superType) {
                var prototype = createObject(superType.prototype);
                prototype.constructor = subType;
                subType.prototype = prototype;
            }
            module1.exports = inherit;
        /***/ },
        /* 19 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Create a new object with the specified prototype object and properties.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * @module inheritance
 */ /**
 * Create a new object with the specified prototype object and properties.
 * @param {Object} obj This object will be a prototype of the newly-created object.
 * @returns {Object}
 * @memberof module:inheritance
 */ function createObject(obj) {
                function F() {} // eslint-disable-line require-jsdoc
                F.prototype = obj;
                return new F();
            }
            module1.exports = createObject;
        /***/ },
        /* 20 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var forEach = __webpack_require__(3);
            var defineClass = __webpack_require__(7);
            var getTarget = __webpack_require__(21);
            var on = __webpack_require__(22);
            var preventDefault = __webpack_require__(24);
            var addClass = __webpack_require__(25);
            var extend = __webpack_require__(0);
            var isString = __webpack_require__(4);
            var isHTMLNode = __webpack_require__(28);
            var util = __webpack_require__(9);
            var defaultTemplate = {
                page: '<a href="#" class="tui-page-btn">{{page}}</a>',
                currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
                moveButton: '<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',
                disabledMoveButton: '<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',
                moreButton: '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'
            };
            var moveButtons = [
                'first',
                'prev',
                'next',
                'last'
            ];
            var moreButtons = [
                'prev',
                'next'
            ];
            var INVALID_CONTAINER_ELEMENT = 'The container element is invalid.';
            /**
 * Pagination view class
 * @class View
 * @param {string|HTMLElement|jQueryObject} container - Container element or id selector
 * @param {object} options - Option object
 *     @param {number} [options.totalItems=10] Total item count
 *     @param {number} [options.itemsPerPage=10] Item count per page
 *     @param {number} [options.visiblePages=10] Display page link count
 *     @param {number} [options.page=1] Display page after pagination draw.
 *     @param {boolean}[options.centerAlign=false] Whether current page keep center or not
 *     @param {string} [options.firstItemClassName='first-child'] The class name of the first item
 *     @param {string} [options.lastItemClassName='last-child'] The class name of the last item
 *     @param {object} [options.template] A markup string set to make element
 *         @param {string|function} [options.template.page] HTML template
 *         @param {string|function} [options.template.currentPage] HTML template
 *         @param {string|function} [options.template.moveButton] HTML template
 *         @param {string|function} [options.template.disabledMoveButton] HTML template
 *         @param {string|function} [options.template.moreButton] HTML template
 * @param {function} handler - Event handler
 * @ignore
 */ var View = defineClass(/** @lends View.prototype */ {
                init: function(container, options, handler) {
                    /**
       * Root element
       * @type {HTMLElement}
       * @private
       */ this._containerElement = null;
                    /**
       * First item's class name
       * @type {string}
       * @private
       */ this._firstItemClassName = options.firstItemClassName;
                    /**
       * Last item's class name
       * @type {string}
       * @private
       */ this._lastItemClassName = options.lastItemClassName;
                    /**
       * Default template
       * @type {object.<string, string|function>}
       * @private
       */ this._template = extend({}, defaultTemplate, options.template);
                    /**
       * Map of buttons
       * @type {object.<string, HTMLElement>}
       * @private
       */ this._buttons = {};
                    /**
       * Enabled page elements list
       * @type {array}
       * @private
       */ this._enabledPageElements = [];
                    this._setRootElement(container);
                    this._setMoveButtons();
                    this._setDisabledMoveButtons();
                    this._setMoreButtons();
                    this._attachClickEvent(handler);
                },
                /* eslint-enable complexity */ /**
     * Set root element
     * @param {string|HTMLElement|jQueryObject} container - Container element or id selector
     * @private
     */ _setRootElement: function(container) {
                    if (isString(container)) container = document.getElementById(container) || document.querySelector(container);
                    else if (container.jquery) container = container[0];
                    if (!isHTMLNode(container)) throw new Error(INVALID_CONTAINER_ELEMENT);
                    this._containerElement = container;
                },
                /**
     * Assign move buttons to option
     * @private
     */ _setMoveButtons: function() {
                    forEach(moveButtons, function(type) {
                        this._buttons[type] = util.createElementByTemplate(this._template.moveButton, {
                            type: type
                        });
                    }, this);
                },
                /**
     * Assign disabled move buttons to option
     * @private
     */ _setDisabledMoveButtons: function() {
                    forEach(moveButtons, function(type) {
                        var key = 'disabled' + util.capitalizeFirstLetter(type);
                        this._buttons[key] = util.createElementByTemplate(this._template.disabledMoveButton, {
                            type: type
                        });
                    }, this);
                },
                /**
     * Assign more buttons to option
     * @private
     */ _setMoreButtons: function() {
                    forEach(moreButtons, function(type) {
                        var key = type + 'More';
                        this._buttons[key] = util.createElementByTemplate(this._template.moreButton, {
                            type: type
                        });
                    }, this);
                },
                /* eslint-enable camelcase */ /**
     * Get container element
     * @returns {HTMLElement} Container element
     * @private
     */ _getContainerElement: function() {
                    return this._containerElement;
                },
                /**
     * Append first button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendFirstButton: function(viewData) {
                    var button;
                    if (viewData.page > 1) button = this._buttons.first;
                    else button = this._buttons.disabledFirst;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append previous button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendPrevButton: function(viewData) {
                    var button;
                    if (viewData.currentPageIndex > 1) button = this._buttons.prev;
                    else button = this._buttons.disabledPrev;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append next button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendNextButton: function(viewData) {
                    var button;
                    if (viewData.currentPageIndex < viewData.lastPageListIndex) button = this._buttons.next;
                    else button = this._buttons.disabledNext;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append last button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendLastButton: function(viewData) {
                    var button;
                    if (viewData.page < viewData.lastPage) button = this._buttons.last;
                    else button = this._buttons.disabledLast;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append previous more button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendPrevMoreButton: function(viewData) {
                    var button;
                    if (viewData.prevMore) {
                        button = this._buttons.prevMore;
                        addClass(button, this._firstItemClassName);
                        this._getContainerElement().appendChild(button);
                    }
                },
                /**
     * Append next more button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendNextMoreButton: function(viewData) {
                    var button;
                    if (viewData.nextMore) {
                        button = this._buttons.nextMore;
                        addClass(button, this._lastItemClassName);
                        this._getContainerElement().appendChild(button);
                    }
                },
                /**
     * Append page number elements on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ // eslint-disable-next-line complexity
                _appendPages: function(viewData) {
                    var firstPage = viewData.leftPageNumber;
                    var lastPage = viewData.rightPageNumber;
                    var pageItem, i;
                    for(i = firstPage; i <= lastPage; i += 1){
                        if (i === viewData.page) pageItem = util.createElementByTemplate(this._template.currentPage, {
                            page: i
                        });
                        else {
                            pageItem = util.createElementByTemplate(this._template.page, {
                                page: i
                            });
                            this._enabledPageElements.push(pageItem);
                        }
                        if (i === firstPage && !viewData.prevMore) addClass(pageItem, this._firstItemClassName);
                        if (i === lastPage && !viewData.nextMore) addClass(pageItem, this._lastItemClassName);
                        this._getContainerElement().appendChild(pageItem);
                    }
                },
                /**
     * Attach click event
     * @param {function} callback - Callback function
     * @private
     */ _attachClickEvent: function(callback) {
                    var rootElement = this._getContainerElement();
                    on(rootElement, 'click', function(ev) {
                        var target = getTarget(ev);
                        var page, buttonType;
                        preventDefault(ev);
                        buttonType = this._getButtonType(target);
                        if (!buttonType) page = this._getPageNumber(target);
                        callback(buttonType, page);
                    }, this);
                },
                /**
     * Get button type to move button elements
     * @param {HTMLElement} targetElement - Each move button element
     * @returns {?string} Button type
     * @private
     */ _getButtonType: function(targetElement) {
                    var buttonType;
                    var buttons = this._buttons;
                    forEach(buttons, function(button, type) {
                        if (util.isContained(targetElement, button)) {
                            buttonType = type;
                            return false;
                        }
                        return true;
                    }, this);
                    return buttonType;
                },
                /* eslint-enable no-lonely-if */ /**
     * Get number to page elements
     * @param {HTMLElement} targetElement - Each page element
     * @returns {?number} Page number
     * @private
     */ _getPageNumber: function(targetElement) {
                    var targetPage = this._findPageElement(targetElement);
                    var page;
                    if (targetPage) page = parseInt(targetPage.innerText, 10);
                    return page;
                },
                /**
     * Find target element from page elements
     * @param {HTMLElement} targetElement - Each page element
     * @returns {HTMLElement} Found element
     * @ignore
     */ _findPageElement: function(targetElement) {
                    var i = 0;
                    var length = this._enabledPageElements.length;
                    var pickedItem;
                    for(; i < length; i += 1){
                        pickedItem = this._enabledPageElements[i];
                        if (util.isContained(targetElement, pickedItem)) return pickedItem;
                    }
                    return null;
                },
                /**
     * Reset container element
     * @private
     */ _empty: function() {
                    this._enabledPageElements = [];
                    forEach(this._buttons, function(buttonElement, type) {
                        this._buttons[type] = buttonElement.cloneNode(true);
                    }, this);
                    this._getContainerElement().innerHTML = '';
                },
                /**
     * Update view
     * @param {object} viewData - View data to render pagination
     * @ignore
     */ update: function(viewData) {
                    this._empty();
                    this._appendFirstButton(viewData);
                    this._appendPrevButton(viewData);
                    this._appendPrevMoreButton(viewData);
                    this._appendPages(viewData);
                    this._appendNextMoreButton(viewData);
                    this._appendNextButton(viewData);
                    this._appendLastButton(viewData);
                }
            });
            module1.exports = View;
        /***/ },
        /* 21 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Get a target element from an event object.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Get a target element from an event object.
 * @param {Event} e - event object
 * @returns {HTMLElement} - target element
 * @memberof module:domEvent
 */ function getTarget(e) {
                return e.target || e.srcElement;
            }
            module1.exports = getTarget;
        /***/ },
        /* 22 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Bind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isString = __webpack_require__(4);
            var forEach = __webpack_require__(3);
            var safeEvent = __webpack_require__(23);
            /**
 * Bind DOM events.
 * @param {HTMLElement} element - element to bind events
 * @param {(string|object)} types - Space splitted events names or eventName:handler object
 * @param {(function|object)} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @memberof module:domEvent
 * @example
 * var div = document.querySelector('div');
 * 
 * // Bind one event to an element.
 * on(div, 'click', toggle);
 * 
 * // Bind multiple events with a same handler to multiple elements at once.
 * // Use event names splitted by a space.
 * on(div, 'mouseenter mouseleave', changeColor);
 * 
 * // Bind multiple events with different handlers to an element at once.
 * // Use an object which of key is an event name and value is a handler function.
 * on(div, {
 *   keydown: highlight,
 *   keyup: dehighlight
 * });
 * 
 * // Set a context for handler method.
 * var name = 'global';
 * var repository = {name: 'CodeSnippet'};
 * on(div, 'drag', function() {
 *  console.log(this.name);
 * }, repository);
 * // Result when you drag a div: "CodeSnippet"
 */ function on(element, types, handler, context) {
                if (isString(types)) {
                    forEach(types.split(/\s+/g), function(type) {
                        bindEvent(element, type, handler, context);
                    });
                    return;
                }
                forEach(types, function(func, type) {
                    bindEvent(element, type, func, handler);
                });
            }
            /**
 * Bind DOM events
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @private
 */ function bindEvent(element, type, handler, context) {
                /**
     * Event handler
     * @param {Event} e - event object
     */ function eventHandler(e) {
                    handler.call(context || element, e || window.event);
                }
                if ('addEventListener' in element) element.addEventListener(type, eventHandler);
                else if ('attachEvent' in element) element.attachEvent('on' + type, eventHandler);
                memorizeHandler(element, type, handler, eventHandler);
            }
            /**
 * Memorize DOM event handler for unbinding.
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function that user passed at on() use
 * @param {function} wrappedHandler - handler function that wrapped by domevent for implementing some features
 * @private
 */ function memorizeHandler(element, type, handler, wrappedHandler) {
                var events = safeEvent(element, type);
                var existInEvents = false;
                forEach(events, function(obj) {
                    if (obj.handler === handler) {
                        existInEvents = true;
                        return false;
                    }
                    return true;
                });
                if (!existInEvents) events.push({
                    handler: handler,
                    wrappedHandler: wrappedHandler
                });
            }
            module1.exports = on;
        /***/ },
        /* 23 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Get event collection for specific HTML element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var EVENT_KEY = '_feEventKey';
            /**
 * Get event collection for specific HTML element
 * @param {HTMLElement} element - HTML element
 * @param {string} type - event type
 * @returns {array}
 * @private
 */ function safeEvent(element, type) {
                var events = element[EVENT_KEY];
                var handlers;
                if (!events) events = element[EVENT_KEY] = {};
                handlers = events[type];
                if (!handlers) handlers = events[type] = [];
                return handlers;
            }
            module1.exports = safeEvent;
        /***/ },
        /* 24 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Prevent default action
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Prevent default action
 * @param {Event} e - event object
 * @memberof module:domEvent
 */ function preventDefault(e) {
                if (e.preventDefault) {
                    e.preventDefault();
                    return;
                }
                e.returnValue = false;
            }
            module1.exports = preventDefault;
        /***/ },
        /* 25 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Add css class to element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var forEach = __webpack_require__(3);
            var inArray = __webpack_require__(8);
            var getClass = __webpack_require__(26);
            var setClassName = __webpack_require__(27);
            /**
 * domUtil module
 * @module domUtil
 */ /**
 * Add css class to element
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {...string} cssClass - css classes to add
 * @memberof module:domUtil
 */ function addClass(element) {
                var cssClass = Array.prototype.slice.call(arguments, 1);
                var classList = element.classList;
                var newClass = [];
                var origin;
                if (classList) {
                    forEach(cssClass, function(name) {
                        element.classList.add(name);
                    });
                    return;
                }
                origin = getClass(element);
                if (origin) cssClass = [].concat(origin.split(/\s+/), cssClass);
                forEach(cssClass, function(cls) {
                    if (inArray(cls, newClass) < 0) newClass.push(cls);
                });
                setClassName(element, newClass);
            }
            module1.exports = addClass;
        /***/ },
        /* 26 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Get HTML element's design classes.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isUndefined = __webpack_require__(1);
            /**
 * Get HTML element's design classes.
 * @param {(HTMLElement|SVGElement)} element target element
 * @returns {string} element css class name
 * @memberof module:domUtil
 */ function getClass(element) {
                if (!element || !element.className) return '';
                if (isUndefined(element.className.baseVal)) return element.className;
                return element.className.baseVal;
            }
            module1.exports = getClass;
        /***/ },
        /* 27 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Set className value
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isArray = __webpack_require__(2);
            var isUndefined = __webpack_require__(1);
            /**
 * Set className value
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {(string|string[])} cssClass - class names
 * @private
 */ function setClassName(element, cssClass) {
                cssClass = isArray(cssClass) ? cssClass.join(' ') : cssClass;
                cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                if (isUndefined(element.className.baseVal)) {
                    element.className = cssClass;
                    return;
                }
                element.className.baseVal = cssClass;
            }
            module1.exports = setClassName;
        /***/ },
        /* 28 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is a instance of HTMLNode or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is a instance of HTMLNode or not.
 * If the given variables is a instance of HTMLNode, return true.
 * @param {*} html - Target for checking
 * @returns {boolean} Is HTMLNode ?
 * @memberof module:type
 */ function isHTMLNode(html) {
                if (typeof HTMLElement === 'object') return html && (html instanceof HTMLElement || !!html.nodeType);
                return !!(html && html.nodeType);
            }
            module1.exports = isHTMLNode;
        /***/ },
        /* 29 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Convert text by binding expressions with context.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var inArray = __webpack_require__(8);
            var forEach = __webpack_require__(3);
            var isArray = __webpack_require__(2);
            var isString = __webpack_require__(4);
            var extend = __webpack_require__(0);
            // IE8 does not support capture groups.
            var EXPRESSION_REGEXP = /{{\s?|\s?}}/g;
            var BRACKET_NOTATION_REGEXP = /^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/;
            var BRACKET_REGEXP = /\[\s?|\s?\]/;
            var DOT_NOTATION_REGEXP = /^[a-zA-Z_]+\.[a-zA-Z_]+$/;
            var DOT_REGEXP = /\./;
            var STRING_NOTATION_REGEXP = /^["']\w+["']$/;
            var STRING_REGEXP = /"|'/g;
            var NUMBER_REGEXP = /^-?\d+\.?\d*$/;
            var EXPRESSION_INTERVAL = 2;
            var BLOCK_HELPERS = {
                'if': handleIf,
                'each': handleEach,
                'with': handleWith
            };
            var isValidSplit = 'a'.split(/a/).length === 3;
            /**
 * Split by RegExp. (Polyfill for IE8)
 * @param {string} text - text to be splitted\
 * @param {RegExp} regexp - regular expression
 * @returns {Array.<string>}
 */ var splitByRegExp = function() {
                if (isValidSplit) return function(text, regexp) {
                    return text.split(regexp);
                };
                return function(text, regexp) {
                    var result = [];
                    var prevIndex = 0;
                    var match, index;
                    if (!regexp.global) regexp = new RegExp(regexp, 'g');
                    match = regexp.exec(text);
                    while(match !== null){
                        index = match.index;
                        result.push(text.slice(prevIndex, index));
                        prevIndex = index + match[0].length;
                        match = regexp.exec(text);
                    }
                    result.push(text.slice(prevIndex));
                    return result;
                };
            }();
            /**
 * Find value in the context by an expression.
 * @param {string} exp - an expression
 * @param {object} context - context
 * @returns {*}
 * @private
 */ // eslint-disable-next-line complexity
            function getValueFromContext(exp, context) {
                var splitedExps;
                var value = context[exp];
                if (exp === 'true') value = true;
                else if (exp === 'false') value = false;
                else if (STRING_NOTATION_REGEXP.test(exp)) value = exp.replace(STRING_REGEXP, '');
                else if (BRACKET_NOTATION_REGEXP.test(exp)) {
                    splitedExps = exp.split(BRACKET_REGEXP);
                    value = getValueFromContext(splitedExps[0], context)[getValueFromContext(splitedExps[1], context)];
                } else if (DOT_NOTATION_REGEXP.test(exp)) {
                    splitedExps = exp.split(DOT_REGEXP);
                    value = getValueFromContext(splitedExps[0], context)[splitedExps[1]];
                } else if (NUMBER_REGEXP.test(exp)) value = parseFloat(exp);
                return value;
            }
            /**
 * Extract elseif and else expressions.
 * @param {Array.<string>} ifExps - args of if expression
 * @param {Array.<string>} sourcesInsideBlock - sources inside if block
 * @returns {object} - exps: expressions of if, elseif, and else / sourcesInsideIf: sources inside if, elseif, and else block.
 * @private
 */ function extractElseif(ifExps, sourcesInsideBlock) {
                var exps = [
                    ifExps
                ];
                var sourcesInsideIf = [];
                var otherIfCount = 0;
                var start = 0;
                // eslint-disable-next-line complexity
                forEach(sourcesInsideBlock, function(source, index) {
                    if (source.indexOf('if') === 0) otherIfCount += 1;
                    else if (source === '/if') otherIfCount -= 1;
                    else if (!otherIfCount && (source.indexOf('elseif') === 0 || source === 'else')) {
                        exps.push(source === 'else' ? [
                            'true'
                        ] : source.split(' ').slice(1));
                        sourcesInsideIf.push(sourcesInsideBlock.slice(start, index));
                        start = index + 1;
                    }
                });
                sourcesInsideIf.push(sourcesInsideBlock.slice(start));
                return {
                    exps: exps,
                    sourcesInsideIf: sourcesInsideIf
                };
            }
            /**
 * Helper function for "if". 
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the if block
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleIf(exps, sourcesInsideBlock, context) {
                var analyzed = extractElseif(exps, sourcesInsideBlock);
                var result = false;
                var compiledSource = '';
                forEach(analyzed.exps, function(exp, index) {
                    result = handleExpression(exp, context);
                    if (result) compiledSource = compile(analyzed.sourcesInsideIf[index], context);
                    return !result;
                });
                return compiledSource;
            }
            /**
 * Helper function for "each".
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the each block
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleEach(exps, sourcesInsideBlock, context) {
                var collection = handleExpression(exps, context);
                var additionalKey = isArray(collection) ? '@index' : '@key';
                var additionalContext = {};
                var result = '';
                forEach(collection, function(item, key) {
                    additionalContext[additionalKey] = key;
                    additionalContext['@this'] = item;
                    extend(context, additionalContext);
                    result += compile(sourcesInsideBlock.slice(), context);
                });
                return result;
            }
            /**
 * Helper function for "with ... as"
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the with block
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleWith(exps, sourcesInsideBlock, context) {
                var asIndex = inArray('as', exps);
                var alias = exps[asIndex + 1];
                var result = handleExpression(exps.slice(0, asIndex), context);
                var additionalContext = {};
                additionalContext[alias] = result;
                return compile(sourcesInsideBlock, extend(context, additionalContext)) || '';
            }
            /**
 * Extract sources inside block in place.
 * @param {Array.<string>} sources - array of sources
 * @param {number} start - index of start block
 * @param {number} end - index of end block
 * @returns {Array.<string>}
 * @private
 */ function extractSourcesInsideBlock(sources, start, end) {
                var sourcesInsideBlock = sources.splice(start + 1, end - start);
                sourcesInsideBlock.pop();
                return sourcesInsideBlock;
            }
            /**
 * Handle block helper function
 * @param {string} helperKeyword - helper keyword (ex. if, each, with)
 * @param {Array.<string>} sourcesToEnd - array of sources after the starting block
 * @param {object} context - context
 * @returns {Array.<string>}
 * @private
 */ function handleBlockHelper(helperKeyword, sourcesToEnd, context) {
                var executeBlockHelper = BLOCK_HELPERS[helperKeyword];
                var helperCount = 1;
                var startBlockIndex = 0;
                var endBlockIndex;
                var index = startBlockIndex + EXPRESSION_INTERVAL;
                var expression = sourcesToEnd[index];
                while(helperCount && isString(expression)){
                    if (expression.indexOf(helperKeyword) === 0) helperCount += 1;
                    else if (expression.indexOf('/' + helperKeyword) === 0) {
                        helperCount -= 1;
                        endBlockIndex = index;
                    }
                    index += EXPRESSION_INTERVAL;
                    expression = sourcesToEnd[index];
                }
                if (helperCount) throw Error(helperKeyword + ' needs {{/' + helperKeyword + '}} expression.');
                sourcesToEnd[startBlockIndex] = executeBlockHelper(sourcesToEnd[startBlockIndex].split(' ').slice(1), extractSourcesInsideBlock(sourcesToEnd, startBlockIndex, endBlockIndex), context);
                return sourcesToEnd;
            }
            /**
 * Helper function for "custom helper".
 * If helper is not a function, return helper itself.
 * @param {Array.<string>} exps - array of expressions split by spaces (first element: helper)
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleExpression(exps, context) {
                var result = getValueFromContext(exps[0], context);
                if (result instanceof Function) return executeFunction(result, exps.slice(1), context);
                return result;
            }
            /**
 * Execute a helper function.
 * @param {Function} helper - helper function
 * @param {Array.<string>} argExps - expressions of arguments
 * @param {object} context - context
 * @returns {string} - result of executing the function with arguments
 * @private
 */ function executeFunction(helper, argExps, context) {
                var args = [];
                forEach(argExps, function(exp) {
                    args.push(getValueFromContext(exp, context));
                });
                return helper.apply(null, args);
            }
            /**
 * Get a result of compiling an expression with the context.
 * @param {Array.<string>} sources - array of sources split by regexp of expression.
 * @param {object} context - context
 * @returns {Array.<string>} - array of sources that bind with its context
 * @private
 */ function compile(sources, context) {
                var index = 1;
                var expression = sources[index];
                var exps, firstExp, result;
                while(isString(expression)){
                    exps = expression.split(' ');
                    firstExp = exps[0];
                    if (BLOCK_HELPERS[firstExp]) {
                        result = handleBlockHelper(firstExp, sources.splice(index, sources.length - index), context);
                        sources = sources.concat(result);
                    } else sources[index] = handleExpression(exps, context);
                    index += EXPRESSION_INTERVAL;
                    expression = sources[index];
                }
                return sources.join('');
            }
            /**
 * Convert text by binding expressions with context.
 * <br>
 * If expression exists in the context, it will be replaced.
 * ex) '{{title}}' with context {title: 'Hello!'} is converted to 'Hello!'.
 * An array or object can be accessed using bracket and dot notation.
 * ex) '{{odds\[2\]}}' with context {odds: \[1, 3, 5\]} is converted to '5'.
 * ex) '{{evens\[first\]}}' with context {evens: \[2, 4\], first: 0} is converted to '2'.
 * ex) '{{project\["name"\]}}' and '{{project.name}}' with context {project: {name: 'CodeSnippet'}} is converted to 'CodeSnippet'.
 * <br>
 * If replaced expression is a function, next expressions will be arguments of the function.
 * ex) '{{add 1 2}}' with context {add: function(a, b) {return a + b;}} is converted to '3'.
 * <br>
 * It has 3 predefined block helpers '{{helper ...}} ... {{/helper}}': 'if', 'each', 'with ... as ...'.
 * 1) 'if' evaluates conditional statements. It can use with 'elseif' and 'else'.
 * 2) 'each' iterates an array or object. It provides '@index'(array), '@key'(object), and '@this'(current element).
 * 3) 'with ... as ...' provides an alias.
 * @param {string} text - text with expressions
 * @param {object} context - context
 * @returns {string} - text that bind with its context
 * @memberof module:domUtil
 * @example
 * var template = require('tui-code-snippet/domUtil/template');
 * 
 * var source = 
 *     '<h1>'
 *   +   '{{if isValidNumber title}}'
 *   +     '{{title}}th'
 *   +   '{{elseif isValidDate title}}'
 *   +     'Date: {{title}}'
 *   +   '{{/if}}'
 *   + '</h1>'
 *   + '{{each list}}'
 *   +   '{{with addOne @index as idx}}'
 *   +     '<p>{{idx}}: {{@this}}</p>'
 *   +   '{{/with}}'
 *   + '{{/each}}';
 * 
 * var context = {
 *   isValidDate: function(text) {
 *     return /^\d{4}-(0|1)\d-(0|1|2|3)\d$/.test(text);
 *   },
 *   isValidNumber: function(text) {
 *     return /^\d+$/.test(text);
 *   }
 *   title: '2019-11-25',
 *   list: ['Clean the room', 'Wash the dishes'],
 *   addOne: function(num) {
 *     return num + 1;
 *   }
 * };
 * 
 * var result = template(source, context);
 * console.log(result); // <h1>Date: 2019-11-25</h1><p>1: Clean the room</p><p>2: Wash the dishes</p>
 */ function template(text, context) {
                return compile(splitByRegExp(text, EXPRESSION_REGEXP), context);
            }
            module1.exports = template;
        /***/ },
        /* 30 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Send hostname on DOMContentLoaded.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isUndefined = __webpack_require__(1);
            var imagePing = __webpack_require__(31);
            var ms7days = 604800000;
            /**
 * Check if the date has passed 7 days
 * @param {number} date - milliseconds
 * @returns {boolean}
 * @private
 */ function isExpired(date) {
                var now = new Date().getTime();
                return now - date > ms7days;
            }
            /**
 * Send hostname on DOMContentLoaded.
 * To prevent hostname set tui.usageStatistics to false.
 * @param {string} appName - application name
 * @param {string} trackingId - GA tracking ID
 * @ignore
 */ function sendHostname(appName, trackingId) {
                var url = 'https://www.google-analytics.com/collect';
                var hostname = location.hostname;
                var hitType = 'event';
                var eventCategory = 'use';
                var applicationKeyForStorage = 'TOAST UI ' + appName + ' for ' + hostname + ': Statistics';
                var date = window.localStorage.getItem(applicationKeyForStorage);
                // skip if the flag is defined and is set to false explicitly
                if (!isUndefined(window.tui) && window.tui.usageStatistics === false) return;
                // skip if not pass seven days old
                if (date && !isExpired(date)) return;
                window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());
                setTimeout(function() {
                    if (document.readyState === 'interactive' || document.readyState === 'complete') imagePing(url, {
                        v: 1,
                        t: hitType,
                        tid: trackingId,
                        cid: hostname,
                        dp: hostname,
                        dh: appName,
                        el: appName,
                        ec: eventCategory
                    });
                }, 1000);
            }
            module1.exports = sendHostname;
        /***/ },
        /* 31 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Request image ping.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var forEachOwnProperties = __webpack_require__(6);
            /**
 * @module request
 */ /**
 * Request image ping.
 * @param {String} url url for ping request
 * @param {Object} trackingInfo infos for make query string
 * @returns {HTMLElement}
 * @memberof module:request
 * @example
 * var imagePing = require('tui-code-snippet/request/imagePing'); // node, commonjs
 *
 * imagePing('https://www.google-analytics.com/collect', {
 *     v: 1,
 *     t: 'event',
 *     tid: 'trackingid',
 *     cid: 'cid',
 *     dp: 'dp',
 *     dh: 'dh'
 * });
 */ function imagePing(url, trackingInfo) {
                var trackingElement = document.createElement('img');
                var queryString = '';
                forEachOwnProperties(trackingInfo, function(value, key) {
                    queryString += '&' + key + '=' + value;
                });
                queryString = queryString.substring(1);
                trackingElement.src = url + '?' + queryString;
                trackingElement.style.display = 'none';
                document.body.appendChild(trackingElement);
                document.body.removeChild(trackingElement);
                return trackingElement;
            }
            module1.exports = imagePing;
        /***/ }
    ]);
});

},{}],"82Il4":[function() {},{}],"ci3Vj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderRecipes", ()=>renderRecipes);
var _seeRecipeModalJs = require("../seeRecipeModal.js");
var _updateRecipesJs = require("./updateRecipes.js");
var _pagination = require("../pagination");
var _toastifyJs = require("toastify-js");
var _toastifyJsDefault = parcelHelpers.interopDefault(_toastifyJs);
var _toastifyCss = require("toastify-js/src/toastify.css");
let currentPage = 1;
const itemsPerPage = 9;
function renderRecipes(recipes, options = {}) {
    const container = document.getElementById("recipe-results");
    const { fromFavoritesPage = false } = options;
    if (!container) {
        console.error("Container element not found!");
        return;
    }
    const paginationContainer = document.getElementById("pagination");
    if (paginationContainer) paginationContainer.style.display = "flex";
    const totalPages = Math.ceil(recipes.length / itemsPerPage);
    currentPage = Math.min(Math.max(currentPage, 1), totalPages);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentRecipes = recipes.slice(start, end);
    container.innerHTML = "";
    if (!recipes || recipes.length === 0) {
        const noResultMessage = document.createElement("p");
        noResultMessage.textContent = "We couldn\u2019t find a match \u2014 try adjusting your filters for more results.";
        noResultMessage.classList.add("no-result");
        container.appendChild(noResultMessage);
        if (paginationContainer) paginationContainer.style.display = "none";
        return;
    }
    currentRecipes.forEach((recipe)=>{
        recipe.id = recipe.id || `${recipe.title}-${recipe.category}`.replace(/\s+/g, "-").toLowerCase();
        const item = document.createElement("div");
        item.classList.add("recipe-card");
        // Image
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image-wrapper");
        const recipeImg = document.createElement("img");
        recipeImg.classList.add("recipe-img");
        recipeImg.src = recipe.thumb;
        recipeImg.alt = recipe.title;
        const overlay = document.createElement("div");
        overlay.classList.add("overlay-card");
        imageWrapper.appendChild(recipeImg);
        imageWrapper.appendChild(overlay);
        item.appendChild(imageWrapper);
        // Favorite button
        const favoriteButton = document.createElement("button");
        favoriteButton.classList.add("favorites-button");
        favoriteButton.id = "favorite-btn";
        const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        heart.setAttribute("viewBox", "0 0 24 24");
        heart.setAttribute("width", "24");
        heart.setAttribute("height", "24");
        const heartPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        heartPath.setAttribute("d", "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z");
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const isFavorite = favorites.some((fav)=>fav.id === recipe.id);
        heartPath.setAttribute("fill", isFavorite ? "red" : "white");
        heart.appendChild(heartPath);
        favoriteButton.appendChild(heart);
        favoriteButton.addEventListener("click", ()=>{
            let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            const isFavorite = favorites.some((fav)=>fav.id === recipe.id);
            if (isFavorite) {
                (0, _toastifyJsDefault.default)({
                    text: "Removed from favorites",
                    duration: 3000,
                    style: {
                        background: "linear-gradient(to right, #ff5f6d, #ffc371)"
                    }
                }).showToast();
                favorites = favorites.filter((fav)=>fav.id !== recipe.id);
                localStorage.setItem("favorites", JSON.stringify(favorites));
                heartPath.setAttribute("fill", "white");
                if (fromFavoritesPage) item.remove();
            } else {
                (0, _toastifyJsDefault.default)({
                    text: "Added to favorites",
                    duration: 3000,
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)"
                    }
                }).showToast();
                favorites.push(recipe);
                localStorage.setItem("favorites", JSON.stringify(favorites));
                heartPath.setAttribute("fill", "red");
            }
        });
        item.appendChild(favoriteButton);
        // Details
        const detailsContainer = document.createElement("div");
        detailsContainer.classList.add("details-card-container");
        const title = document.createElement("h4");
        title.classList.add("recipe-title");
        title.textContent = recipe.title;
        const description = document.createElement("p");
        description.classList.add("card-description");
        description.textContent = recipe.description;
        const rating = document.createElement("div");
        rating.classList.add("rating");
        const ratingValue = document.createElement("span");
        ratingValue.classList.add("rating-value");
        ratingValue.textContent = recipe.rating.toFixed(1);
        const starsContainer = document.createElement("span");
        starsContainer.classList.add("stars-container");
        for(let i = 0; i < Math.round(recipe.rating); i++){
            const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            star.setAttribute("viewBox", "0 0 24 24");
            star.setAttribute("width", "20");
            star.setAttribute("height", "20");
            star.setAttribute("fill", "#FFD700");
            const starPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            starPath.setAttribute("d", "M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.17L12 18.897l-7.334 3.865 1.4-8.17L.132 9.21l8.2-1.192z");
            star.appendChild(starPath);
            starsContainer.appendChild(star);
        }
        rating.appendChild(ratingValue);
        rating.appendChild(starsContainer);
        detailsContainer.appendChild(title);
        detailsContainer.appendChild(description);
        detailsContainer.appendChild(rating);
        // See Recipe button
        const buttonCard = document.createElement("button");
        buttonCard.id = "see-recipe-btn";
        buttonCard.classList.add("recipe-card-button");
        buttonCard.textContent = "See Recipe";
        buttonCard.addEventListener("click", ()=>(0, _seeRecipeModalJs.seeRecipeModal)(recipe));
        detailsContainer.appendChild(buttonCard);
        item.appendChild(detailsContainer);
        container.appendChild(item);
    });
    (0, _pagination.renderPagination)(currentPage, totalPages, (newPage)=>{
        currentPage = newPage;
        setTimeout(()=>(0, _updateRecipesJs.updateRecipes)(), 300);
    });
}

},{"../seeRecipeModal.js":"4ueMn","./updateRecipes.js":"823Qz","../pagination":"80yTG","toastify-js":"33QEN","toastify-js/src/toastify.css":"943FW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4ueMn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "seeRecipeModal", ()=>seeRecipeModal);
var _toastifyJs = require("toastify-js");
var _toastifyJsDefault = parcelHelpers.interopDefault(_toastifyJs);
var _toastifyCss = require("toastify-js/src/toastify.css");
const seeRecipeModal = (recipe)=>{
    const modal = document.getElementById("see-recipe-modal");
    const closeModal = document.getElementById("close-see-recipe-modal");
    const modalContent = document.getElementById("see-recipe-content");
    const modalButtons = document.getElementById("modal-buttons");
    const removeOrAddBtn = document.getElementById("remove-btn");
    // Clear previous content (except buttons)
    modalContent.innerHTML = "";
    modalContent.appendChild(closeModal);
    modalContent.appendChild(modalButtons);
    // Show modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    modalContent.classList.remove("hide");
    modalContent.classList.add("show");
    // Create image container
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    const imgModal = document.createElement("img");
    imgModal.src = recipe.thumb;
    imgContainer.appendChild(imgModal);
    const modalDetails = document.createElement("div");
    modalDetails.classList.add("modal-details");
    imgContainer.appendChild(modalDetails);
    // Title
    const titleModal = document.createElement("h2");
    titleModal.classList.add("recipe-title-modal");
    titleModal.textContent = recipe.title;
    modalDetails.appendChild(titleModal);
    // Rating
    const ratingModal = document.createElement("div");
    ratingModal.classList.add("rating-modal");
    const ratingValueModal = document.createElement("span");
    ratingValueModal.classList.add("rating-value-modal");
    ratingValueModal.textContent = recipe.rating.toFixed(1);
    ratingModal.appendChild(ratingValueModal);
    const starsContainerModal = document.createElement("span");
    starsContainerModal.classList.add("stars-container-modal");
    for(let i = 0; i < Math.round(recipe.rating); i++){
        const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        star.setAttribute("width", "20");
        star.setAttribute("height", "20");
        star.setAttribute("viewBox", "0 0 24 24");
        star.setAttribute("fill", "#FFD700");
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.17L12 18.897l-7.334 3.865 1.4-8.17L.132 9.21l8.2-1.192z");
        star.appendChild(path);
        starsContainerModal.appendChild(star);
    }
    ratingModal.appendChild(starsContainerModal);
    const timePreparation = document.createElement("p");
    timePreparation.classList.add("time-preparation");
    timePreparation.textContent = `${recipe.time} min`;
    ratingModal.appendChild(timePreparation);
    modalDetails.appendChild(ratingModal);
    // Tags
    const tagsContainer = document.createElement("ul");
    tagsContainer.classList.add("tags-container");
    recipe.tags.forEach((tag)=>{
        if (tag) {
            const tagItem = document.createElement("li");
            tagItem.classList.add("tags");
            tagItem.textContent = `#${tag}`;
            tagsContainer.appendChild(tagItem);
        }
    });
    modalDetails.appendChild(tagsContainer);
    // Description
    const descriptionModal = document.createElement("p");
    descriptionModal.classList.add("description-modal");
    descriptionModal.textContent = recipe.description;
    modalDetails.appendChild(descriptionModal);
    modalContent.appendChild(imgContainer);
    // Favorite button state
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let isFavorite = favorites.some((fav)=>fav.id === recipe.id);
    removeOrAddBtn.textContent = isFavorite ? "Remove from Favorites" : "Add to Favorites";
    removeOrAddBtn.onclick = function() {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        isFavorite = favorites.some((fav)=>fav.id === recipe.id);
        if (isFavorite) {
            (0, _toastifyJsDefault.default)({
                text: "Removed from favorites",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #ff5f6d, #ffc371)"
                }
            }).showToast();
            favorites = favorites.filter((fav)=>fav.id !== recipe.id);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            removeOrAddBtn.textContent = "Add to Favorites";
        } else {
            (0, _toastifyJsDefault.default)({
                text: "Added to favorites",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)"
                }
            }).showToast();
            favorites.push(recipe);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            removeOrAddBtn.textContent = "Remove from Favorites";
        }
    };
    // Close modal handler
    closeModal.onclick = ()=>{
        modalContent.classList.remove("show");
        modalContent.classList.add("hide");
        setTimeout(()=>{
            modal.style.display = "none";
            modalContent.classList.remove("hide");
            document.body.style.overflow = "auto";
        }, 300);
    };
};

},{"toastify-js":"33QEN","toastify-js/src/toastify.css":"943FW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"33QEN":[function(require,module,exports,__globalThis) {
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */ (function(root, factory) {
    if (module.exports) module.exports = factory();
    else root.Toastify = factory();
})(this, function(global) {
    // Object initialization
    var Toastify = function(options) {
        // Returning a new init object
        return new Toastify.lib.init(options);
    }, // Library version
    version = "1.12.0";
    // Set the default global options
    Toastify.defaults = {
        oldestFirst: true,
        text: "Toastify is awesome!",
        node: undefined,
        duration: 3000,
        selector: undefined,
        callback: function() {},
        destination: undefined,
        newWindow: false,
        close: false,
        gravity: "toastify-top",
        positionLeft: false,
        position: '',
        backgroundColor: '',
        avatar: "",
        className: "",
        stopOnFocus: true,
        onClick: function() {},
        offset: {
            x: 0,
            y: 0
        },
        escapeMarkup: true,
        ariaLive: 'polite',
        style: {
            background: ''
        }
    };
    // Defining the prototype of the object
    Toastify.lib = Toastify.prototype = {
        toastify: version,
        constructor: Toastify,
        // Initializing the object with required parameters
        init: function(options) {
            // Verifying and validating the input object
            if (!options) options = {};
            // Creating the options object
            this.options = {};
            this.toastElement = null;
            // Validating the options
            this.options.text = options.text || Toastify.defaults.text; // Display message
            this.options.node = options.node || Toastify.defaults.node; // Display content as node
            this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration
            this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector
            this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display
            this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination
            this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window
            this.options.close = options.close || Toastify.defaults.close; // Show toast close icon
            this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom
            this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right
            this.options.position = options.position || Toastify.defaults.position; // toast position - left or right
            this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color
            this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path
            this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast
            this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus
            this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click
            this.options.offset = options.offset || Toastify.defaults.offset; // toast offset
            this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
            this.options.ariaLive = options.ariaLive || Toastify.defaults.ariaLive;
            this.options.style = options.style || Toastify.defaults.style;
            if (options.backgroundColor) this.options.style.background = options.backgroundColor;
            // Returning the current object for chaining functions
            return this;
        },
        // Building the DOM element
        buildToast: function() {
            // Validating if the options are defined
            if (!this.options) throw "Toastify is not initialized";
            // Creating the DOM object
            var divElement = document.createElement("div");
            divElement.className = "toastify on " + this.options.className;
            // Positioning toast to left or right or center
            if (!!this.options.position) divElement.className += " toastify-" + this.options.position;
            else // To be depreciated in further versions
            if (this.options.positionLeft === true) {
                divElement.className += " toastify-left";
                console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.');
            } else // Default position
            divElement.className += " toastify-right";
            // Assigning gravity of element
            divElement.className += " " + this.options.gravity;
            if (this.options.backgroundColor) // This is being deprecated in favor of using the style HTML DOM property
            console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
            // Loop through our style object and apply styles to divElement
            for(var property in this.options.style)divElement.style[property] = this.options.style[property];
            // Announce the toast to screen readers
            if (this.options.ariaLive) divElement.setAttribute('aria-live', this.options.ariaLive);
            // Adding the toast message/node
            if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) // If we have a valid node, we insert it
            divElement.appendChild(this.options.node);
            else {
                if (this.options.escapeMarkup) divElement.innerText = this.options.text;
                else divElement.innerHTML = this.options.text;
                if (this.options.avatar !== "") {
                    var avatarElement = document.createElement("img");
                    avatarElement.src = this.options.avatar;
                    avatarElement.className = "toastify-avatar";
                    if (this.options.position == "left" || this.options.positionLeft === true) // Adding close icon on the left of content
                    divElement.appendChild(avatarElement);
                    else // Adding close icon on the right of content
                    divElement.insertAdjacentElement("afterbegin", avatarElement);
                }
            }
            // Adding a close icon to the toast
            if (this.options.close === true) {
                // Create a span for close element
                var closeElement = document.createElement("button");
                closeElement.type = "button";
                closeElement.setAttribute("aria-label", "Close");
                closeElement.className = "toast-close";
                closeElement.innerHTML = "&#10006;";
                // Triggering the removal of toast from DOM on close click
                closeElement.addEventListener("click", (function(event) {
                    event.stopPropagation();
                    this.removeElement(this.toastElement);
                    window.clearTimeout(this.toastElement.timeOutValue);
                }).bind(this));
                //Calculating screen width
                var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
                // Adding the close icon to the toast element
                // Display on the right if screen width is less than or equal to 360px
                if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) // Adding close icon on the left of content
                divElement.insertAdjacentElement("afterbegin", closeElement);
                else // Adding close icon on the right of content
                divElement.appendChild(closeElement);
            }
            // Clear timeout while toast is focused
            if (this.options.stopOnFocus && this.options.duration > 0) {
                var self = this;
                // stop countdown
                divElement.addEventListener("mouseover", function(event) {
                    window.clearTimeout(divElement.timeOutValue);
                });
                // add back the timeout
                divElement.addEventListener("mouseleave", function() {
                    divElement.timeOutValue = window.setTimeout(function() {
                        // Remove the toast from DOM
                        self.removeElement(divElement);
                    }, self.options.duration);
                });
            }
            // Adding an on-click destination path
            if (typeof this.options.destination !== "undefined") divElement.addEventListener("click", (function(event) {
                event.stopPropagation();
                if (this.options.newWindow === true) window.open(this.options.destination, "_blank");
                else window.location = this.options.destination;
            }).bind(this));
            if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") divElement.addEventListener("click", (function(event) {
                event.stopPropagation();
                this.options.onClick();
            }).bind(this));
            // Adding offset
            if (typeof this.options.offset === "object") {
                var x = getAxisOffsetAValue("x", this.options);
                var y = getAxisOffsetAValue("y", this.options);
                var xOffset = this.options.position == "left" ? x : "-" + x;
                var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;
                divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";
            }
            // Returning the generated element
            return divElement;
        },
        // Displaying the toast
        showToast: function() {
            // Creating the DOM object for the toast
            this.toastElement = this.buildToast();
            // Getting the root element to with the toast needs to be added
            var rootElement;
            if (typeof this.options.selector === "string") rootElement = document.getElementById(this.options.selector);
            else if (this.options.selector instanceof HTMLElement || typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot) rootElement = this.options.selector;
            else rootElement = document.body;
            // Validating if root element is present in DOM
            if (!rootElement) throw "Root element is not defined";
            // Adding the DOM element
            var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
            rootElement.insertBefore(this.toastElement, elementToInsert);
            // Repositioning the toasts in case multiple toasts are present
            Toastify.reposition();
            if (this.options.duration > 0) this.toastElement.timeOutValue = window.setTimeout((function() {
                // Remove the toast from DOM
                this.removeElement(this.toastElement);
            }).bind(this), this.options.duration); // Binding `this` for function invocation
            // Supporting function chaining
            return this;
        },
        hideToast: function() {
            if (this.toastElement.timeOutValue) clearTimeout(this.toastElement.timeOutValue);
            this.removeElement(this.toastElement);
        },
        // Removing the element from the DOM
        removeElement: function(toastElement) {
            // Hiding the element
            // toastElement.classList.remove("on");
            toastElement.className = toastElement.className.replace(" on", "");
            // Removing the element from DOM after transition end
            window.setTimeout((function() {
                // remove options node if any
                if (this.options.node && this.options.node.parentNode) this.options.node.parentNode.removeChild(this.options.node);
                // Remove the element from the DOM, only when the parent node was not removed before.
                if (toastElement.parentNode) toastElement.parentNode.removeChild(toastElement);
                // Calling the callback function
                this.options.callback.call(toastElement);
                // Repositioning the toasts again
                Toastify.reposition();
            }).bind(this), 400); // Binding `this` for function invocation
        }
    };
    // Positioning the toasts on the DOM
    Toastify.reposition = function() {
        // Top margins with gravity
        var topLeftOffsetSize = {
            top: 15,
            bottom: 15
        };
        var topRightOffsetSize = {
            top: 15,
            bottom: 15
        };
        var offsetSize = {
            top: 15,
            bottom: 15
        };
        // Get all toast messages on the DOM
        var allToasts = document.getElementsByClassName("toastify");
        var classUsed;
        // Modifying the position of each toast element
        for(var i = 0; i < allToasts.length; i++){
            // Getting the applied gravity
            if (containsClass(allToasts[i], "toastify-top") === true) classUsed = "toastify-top";
            else classUsed = "toastify-bottom";
            var height = allToasts[i].offsetHeight;
            classUsed = classUsed.substr(9, classUsed.length - 1);
            // Spacing between toasts
            var offset = 15;
            var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
            // Show toast in center if screen with less than or equal to 360px
            if (width <= 360) {
                // Setting the position
                allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";
                offsetSize[classUsed] += height + offset;
            } else if (containsClass(allToasts[i], "toastify-left") === true) {
                // Setting the position
                allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";
                topLeftOffsetSize[classUsed] += height + offset;
            } else {
                // Setting the position
                allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";
                topRightOffsetSize[classUsed] += height + offset;
            }
        }
        // Supporting function chaining
        return this;
    };
    // Helper function to get offset.
    function getAxisOffsetAValue(axis, options) {
        if (options.offset[axis]) {
            if (isNaN(options.offset[axis])) return options.offset[axis];
            else return options.offset[axis] + 'px';
        }
        return '0px';
    }
    function containsClass(elem, yourClass) {
        if (!elem || typeof yourClass !== "string") return false;
        else if (elem.className && elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1) return true;
        else return false;
    }
    // Setting up the prototype for the init object
    Toastify.lib.init.prototype = Toastify.lib;
    // Returning the Toastify function to be assigned to the window object/module
    return Toastify;
});

},{}],"943FW":[function() {},{}],"823Qz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateRecipes", ()=>updateRecipes);
var _fetchData = require("../fetchData");
var _searchRecipes = require("./searchRecipes");
var _sharedState = require("./sharedState");
async function updateRecipes() {
    const searchInput = document.getElementById("search-recipes");
    const allRecipes = await (0, _fetchData.fetchRecipes)();
    const searchQuery = searchInput?.value?.trim().toLowerCase() || "";
    const selectedCategory = (0, _sharedState.getActiveCategory)();
    const selectedRegion = (0, _sharedState.getSelectedRegion)();
    const selectedIngredient = (0, _sharedState.getSelectedIngredient)();
    const selectedTime = (0, _sharedState.getSelectedTime)();
    const allBtn = document.getElementById("all-categories-btn");
    allBtn.addEventListener("click", ()=>{
        (0, _sharedState.resetActiveCategory)();
    });
    let filtered = allRecipes;
    // Filter by time
    if (selectedTime) filtered = filtered.filter((r)=>r.time === selectedTime);
    // filter by ingredient
    if (selectedIngredient) filtered = filtered.filter((r)=>r.ingredients?.some((ing)=>ing.id === selectedIngredient));
    // Filter by category
    if (selectedCategory) filtered = filtered.filter((r)=>r.category === selectedCategory);
    if (selectedRegion) filtered = filtered.filter((r)=>r.area === selectedRegion);
    // Filter by search input
    if (searchQuery) filtered = filtered.filter((r)=>r.title.toLowerCase().includes(searchQuery));
    (0, _searchRecipes.renderRecipes)(filtered);
}

},{"../fetchData":"cte0F","./searchRecipes":"ci3Vj","./sharedState":"4qtQs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cte0F":[function(require,module,exports,__globalThis) {
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
module.exports = JSON.parse('{"page":1,"perPage":6,"totalPages":48,"results":[{"_id":"6462a8f74c3d0ddd28897fcd","title":"Battenberg Cake","category":"Dessert","area":"British","instructions":"Heat oven to 180C/160C fan/gas 4 and line the base and sides of a 20cm square tin with baking parchment (the easiest way is to cross 2 x 20cm-long strips over the base). To make the almond sponge, put the butter, sugar, flour, ground almonds, baking powder, eggs, vanilla and almond extract in a large bowl. Beat with an electric whisk until the mix comes together smoothly. Scrape into the tin, spreading to the corners, and bake for 25-30 mins \u2013 when you poke in a skewer, it should come out clean. Cool in the tin for 10 mins, then transfer to a wire rack to finish cooling while you make the second sponge.\\r\\nFor the pink sponge, line the tin as above. Mix all the ingredients together as above, but don\u2019t add the almond extract. Fold in some pink food colouring. Then scrape it all into the tin and bake as before. Cool.\\r\\nTo assemble, heat the jam in a small pan until runny, then sieve. Barely trim two opposite edges from the almond sponge, then well trim a third edge. Roughly measure the height of the sponge, then cutting from the well-trimmed edge, use a ruler to help you cut 4 slices each the same width as the sponge height. Discard or nibble leftover sponge. Repeat with pink cake.\\r\\nTake 2 x almond slices and 2 x pink slices and trim so they are all the same length. Roll out one marzipan block on a surface lightly dusted with icing sugar to just over 20cm wide, then keep rolling lengthways until the marzipan is roughly 0.5cm thick. Brush with apricot jam, then lay a pink and an almond slice side by side at one end of the marzipan, brushing jam in between to stick sponges, and leaving 4cm clear marzipan at the end. Brush more jam on top of the sponges, then sandwich remaining 2 slices on top, alternating colours to give a checkerboard effect. Trim the marzipan to the length of the cakes.\\r\\nCarefully lift up the marzipan and smooth over the cake with your hands, but leave a small marzipan fold along the bottom edge before you stick it to the first side. Trim opposite side to match size of fold, then crimp edges using fingers and thumb (or, more simply, press with prongs of fork). If you like, mark the 10 slices using the prongs of a fork.\\r\\nAssemble second Battenberg and keep in an airtight box or well wrapped in cling film for up to 3 days. Can be frozen for up to a month.","description":"A classic British cake made with almond sponge cake and covered with marzipan. It is traditionally pink and yellow checkered in appearance.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Battenberg%20Cake.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Battenberg%20Cake.jpg","time":"60","youtube":"https://www.youtube.com/watch?v=aB41Q7kDZQ0","tags":["Cake","Sweet"],"ingredients":[{"id":"640c2dd963a319ea671e367e","measure":"175g"},{"id":"640c2dd963a319ea671e3687","measure":"175g"},{"id":"640c2dd963a319ea671e3762","measure":"140g"},{"id":"640c2dd963a319ea671e3814","measure":"50g"},{"id":"640c2dd963a319ea671e3665","measure":"\xbd tsp"},{"id":"640c2dd963a319ea671e36ca","measure":"3 Medium"},{"id":"640c2dd963a319ea671e3786","measure":"\xbd tsp"},{"id":"640c2dd963a319ea671e3861","measure":"\xbc teaspoon"},{"id":"640c2dd963a319ea671e380f","measure":"\xbd tsp"},{"id":"640c2dd963a319ea671e37bf","measure":"200g"},{"id":"640c2dd963a319ea671e3813","measure":"1kg"},{"id":"640c2dd963a319ea671e379d","measure":"Dusting"}],"rating":3.54},{"_id":"6462a8f74c3d0ddd28897fbc","title":"Irish stew","category":"Beef","area":"Irish","instructions":"Heat the oven to 180C/350F/gas mark 4. Drain and rinse the soaked wheat, put it in a medium pan with lots of water, bring to a boil and simmer for an hour, until cooked. Drain and set aside.\\r\\n\\r\\nSeason the lamb with a teaspoon of salt and some black pepper. Put one tablespoon of oil in a large, deep saut\xe9 pan for which you have a lid; place on a medium-high heat. Add some of the lamb \u2013 don\'t overcrowd the pan \u2013 and sear for four minutes on all sides. Transfer to a bowl, and repeat with the remaining lamb, adding oil as needed.\\r\\n\\r\\nLower the heat to medium and add a tablespoon of oil to the pan. Add the shallots and fry for four minutes, until caramelised. Tip these into the lamb bowl, and repeat with the remaining vegetables until they are all nice and brown, adding more oil as you need it.\\r\\n\\r\\nOnce all the vegetables are seared and removed from the pan, add the wine along with the sugar, herbs, a teaspoon of salt and a good grind of black pepper. Boil on a high heat for about three minutes.\\r\\n\\r\\nTip the lamb, vegetables and whole wheat back into the pot, and add the stock. Cover and boil for five minutes, then transfer to the oven for an hour and a half.\\r\\n\\r\\nRemove the stew from the oven and check the liquid; if there is a lot, remove the lid and boil for a few minutes.","description":"A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Irish%20stew.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Irish%20stew.jpg","time":"160","youtube":"https://www.youtube.com/watch?v=kYH2qJXnSMo","tags":["Stew","Meat"],"ingredients":[{"id":"640c2dd963a319ea671e3796","measure":"300g soaked overnight in water"},{"id":"640c2dd963a319ea671e370c","measure":"2kg cut into 3cm cubes"},{"id":"640c2dd963a319ea671e372c","measure":"120ml"},{"id":"640c2dd963a319ea671e3765","measure":"24 Skinned"},{"id":"640c2dd963a319ea671e3684","measure":"4 large"},{"id":"640c2dd963a319ea671e3784","measure":"2"},{"id":"640c2dd963a319ea671e3689","measure":"1"},{"id":"640c2dd963a319ea671e368d","measure":"350g"},{"id":"640c2dd963a319ea671e3794","measure":"150ml"},{"id":"640c2dd963a319ea671e3687","measure":"1 tsp"},{"id":"640c2dd963a319ea671e36de","measure":"4 sprigs"},{"id":"640c2dd963a319ea671e3731","measure":"4 sprigs"},{"id":"640c2dd963a319ea671e3696","measure":"450ml"}],"rating":4},{"_id":"6462a8f74c3d0ddd2889800c","title":"Lancashire hotpot","category":"Lamb","area":"British","instructions":"Heat oven to 160C/fan 140C/gas 3. Heat some dripping or butter in a large shallow casserole dish, brown the lamb in batches, lift to a plate, then repeat with the kidneys.\\r\\nFry the onions and carrots in the pan with a little more dripping until golden. Sprinkle over the flour, allow to cook for a couple of mins, shake over the Worcestershire sauce, pour in the stock, then bring to the boil. Stir in the meat and bay leaves, then turn off the heat. Arrange the sliced potatoes on top of the meat, then drizzle with a little more dripping. Cover, then place in the oven for about 1\xbd hrs until the potatoes are cooked.\\r\\nRemove the lid, brush the potatoes with a little more dripping, then turn the oven up to brown the potatoes, or finish under the grill for 5-8 mins until brown.","description":"A hearty casserole with tender lamb and vegetables, topped with sliced potatoes.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Lancashire%20hotpot.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Lancashire%20hotpot.jpg","time":"115","youtube":"https://www.youtube.com/watch?v=w6TS5J8YRA4","tags":[],"ingredients":[{"id":"640c2dd963a319ea671e367e","measure":"100g "},{"id":"640c2dd963a319ea671e370b","measure":"900g"},{"id":"640c2dd963a319ea671e3801","measure":"3"},{"id":"640c2dd963a319ea671e372e","measure":"2 medium"},{"id":"640c2dd963a319ea671e3684","measure":"4 sliced"},{"id":"640c2dd963a319ea671e3743","measure":"25g"},{"id":"640c2dd963a319ea671e3798","measure":"2 tsp"},{"id":"640c2dd963a319ea671e3696","measure":"500ml"},{"id":"640c2dd963a319ea671e366b","measure":"2"},{"id":"640c2dd963a319ea671e3746","measure":"900g"}],"rating":3.71},{"_id":"6462a8f74c3d0ddd28897fbf","title":"Teriyaki Chicken Casserole","category":"Chicken","area":"Japanese","instructions":"Preheat oven to 350\xb0 F. Spray a 9x13-inch baking pan with non-stick spray.\\r\\nCombine soy sauce, \xbd cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\\r\\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\\r\\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\\r\\n*Meanwhile, steam or cook the vegetables according to package directions.\\r\\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!","description":"A Japanese-inspired casserole made with chicken, teriyaki sauce, rice, and vegetables.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg","time":"75","youtube":"https://www.youtube.com/watch?v=4aZr5hZXP_s","tags":["Meat","Casserole"],"ingredients":[{"id":"640c2dd963a319ea671e376c","measure":"3/4 cup"},{"id":"640c2dd963a319ea671e378f","measure":"1/2 cup"},{"id":"640c2dd963a319ea671e367d","measure":"1/4 cup"},{"id":"640c2dd963a319ea671e36f8","measure":"1/2 teaspoon"},{"id":"640c2dd963a319ea671e3720","measure":"1/2 teaspoon"},{"id":"640c2dd963a319ea671e36b3","measure":"4 Tablespoons"},{"id":"640c2dd963a319ea671e3694","measure":"2"},{"id":"640c2dd963a319ea671e3772","measure":"1 (12 oz.)"},{"id":"640c2dd963a319ea671e367c","measure":"3 cups"}],"rating":3.38},{"_id":"6462a8f74c3d0ddd28897fc3","title":"Honey Teriyaki Salmon","category":"Seafood","area":"Japanese","instructions":"Mix all the ingredients in the Honey Teriyaki Glaze together. Whisk to blend well. Combine the salmon and the Glaze together.\\r\\n\\r\\nHeat up a skillet on medium-low heat. Add the oil, Pan-fry the salmon on both sides until it\u2019s completely cooked inside and the glaze thickens.\\r\\n\\r\\nGarnish with sesame and serve immediately.","description":"A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Honey%20Teriyaki%20Salmon.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Honey%20Teriyaki%20Salmon.jpg","time":"25","youtube":"https://www.youtube.com/watch?v=4MpYuaJsvRw","tags":["Fish","Breakfast","DateNight"],"ingredients":[{"id":"640c2dd963a319ea671e365c","measure":"1 lb"},{"id":"640c2dd963a319ea671e372c","measure":"1 tablespoon"},{"id":"640c2dd963a319ea671e376c","measure":"2 tablespoons"},{"id":"640c2dd963a319ea671e375c","measure":"2 tablespoons"},{"id":"640c2dd963a319ea671e3764","measure":"4 tablespoons"}],"rating":4.8},{"_id":"6462a8f74c3d0ddd28898019","title":"Poutine","category":"Miscellaneous","area":"Canadian","instructions":"Heat oil in a deep fryer or deep heavy skillet to 365\xb0F (185\xb0C).\\r\\nWarm gravy in saucepan or microwave.\\r\\nPlace the fries into the hot oil, and cook until light brown, about 5 minutes.\\r\\nRemove to a paper towel lined plate to drain.\\r\\nPlace the fries on a serving platter, and sprinkle the cheese over them.\\r\\nLadle gravy over the fries and cheese, and serve immediately.","description":"A Canadian dish made with french fries, cheese curds, and gravy.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Poutine.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Poutine.jpg","time":"20","youtube":"https://www.youtube.com/watch?v=UVAMAoA2_WU","tags":["UnHealthy","Speciality","HangoverFood"],"ingredients":[{"id":"640c2dd963a319ea671e3789","measure":"Dash"},{"id":"640c2dd963a319ea671e366e","measure":"1 Can"},{"id":"640c2dd963a319ea671e3746","measure":"5 thin cut"},{"id":"640c2dd963a319ea671e3690","measure":"2 cups"}],"rating":1.29},{"_id":"6462a8f74c3d0ddd28897fcd","title":"Battenberg Cake","category":"Dessert","area":"British","instructions":"Heat oven to 180C/160C fan/gas 4 and line the base and sides of a 20cm square tin with baking parchment (the easiest way is to cross 2 x 20cm-long strips over the base). To make the almond sponge, put the butter, sugar, flour, ground almonds, baking powder, eggs, vanilla and almond extract in a large bowl. Beat with an electric whisk until the mix comes together smoothly. Scrape into the tin, spreading to the corners, and bake for 25-30 mins \u2013 when you poke in a skewer, it should come out clean. Cool in the tin for 10 mins, then transfer to a wire rack to finish cooling while you make the second sponge.\\r\\nFor the pink sponge, line the tin as above. Mix all the ingredients together as above, but don\u2019t add the almond extract. Fold in some pink food colouring. Then scrape it all into the tin and bake as before. Cool.\\r\\nTo assemble, heat the jam in a small pan until runny, then sieve. Barely trim two opposite edges from the almond sponge, then well trim a third edge. Roughly measure the height of the sponge, then cutting from the well-trimmed edge, use a ruler to help you cut 4 slices each the same width as the sponge height. Discard or nibble leftover sponge. Repeat with pink cake.\\r\\nTake 2 x almond slices and 2 x pink slices and trim so they are all the same length. Roll out one marzipan block on a surface lightly dusted with icing sugar to just over 20cm wide, then keep rolling lengthways until the marzipan is roughly 0.5cm thick. Brush with apricot jam, then lay a pink and an almond slice side by side at one end of the marzipan, brushing jam in between to stick sponges, and leaving 4cm clear marzipan at the end. Brush more jam on top of the sponges, then sandwich remaining 2 slices on top, alternating colours to give a checkerboard effect. Trim the marzipan to the length of the cakes.\\r\\nCarefully lift up the marzipan and smooth over the cake with your hands, but leave a small marzipan fold along the bottom edge before you stick it to the first side. Trim opposite side to match size of fold, then crimp edges using fingers and thumb (or, more simply, press with prongs of fork). If you like, mark the 10 slices using the prongs of a fork.\\r\\nAssemble second Battenberg and keep in an airtight box or well wrapped in cling film for up to 3 days. Can be frozen for up to a month.","description":"A classic British cake made with almond sponge cake and covered with marzipan. It is traditionally pink and yellow checkered in appearance.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Battenberg%20Cake.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Battenberg%20Cake.jpg","time":"60","youtube":"https://www.youtube.com/watch?v=aB41Q7kDZQ0","tags":["Cake","Sweet"],"ingredients":[{"id":"640c2dd963a319ea671e367e","measure":"175g"},{"id":"640c2dd963a319ea671e3687","measure":"175g"},{"id":"640c2dd963a319ea671e3762","measure":"140g"},{"id":"640c2dd963a319ea671e3814","measure":"50g"},{"id":"640c2dd963a319ea671e3665","measure":"\xbd tsp"},{"id":"640c2dd963a319ea671e36ca","measure":"3 Medium"},{"id":"640c2dd963a319ea671e3786","measure":"\xbd tsp"},{"id":"640c2dd963a319ea671e3861","measure":"\xbc teaspoon"},{"id":"640c2dd963a319ea671e380f","measure":"\xbd tsp"},{"id":"640c2dd963a319ea671e37bf","measure":"200g"},{"id":"640c2dd963a319ea671e3813","measure":"1kg"},{"id":"640c2dd963a319ea671e379d","measure":"Dusting"}],"rating":3.54},{"_id":"6462a8f74c3d0ddd28897fbc","title":"Irish stew","category":"Beef","area":"Irish","instructions":"Heat the oven to 180C/350F/gas mark 4. Drain and rinse the soaked wheat, put it in a medium pan with lots of water, bring to a boil and simmer for an hour, until cooked. Drain and set aside.\\r\\n\\r\\nSeason the lamb with a teaspoon of salt and some black pepper. Put one tablespoon of oil in a large, deep saut\xe9 pan for which you have a lid; place on a medium-high heat. Add some of the lamb \u2013 don\'t overcrowd the pan \u2013 and sear for four minutes on all sides. Transfer to a bowl, and repeat with the remaining lamb, adding oil as needed.\\r\\n\\r\\nLower the heat to medium and add a tablespoon of oil to the pan. Add the shallots and fry for four minutes, until caramelised. Tip these into the lamb bowl, and repeat with the remaining vegetables until they are all nice and brown, adding more oil as you need it.\\r\\n\\r\\nOnce all the vegetables are seared and removed from the pan, add the wine along with the sugar, herbs, a teaspoon of salt and a good grind of black pepper. Boil on a high heat for about three minutes.\\r\\n\\r\\nTip the lamb, vegetables and whole wheat back into the pot, and add the stock. Cover and boil for five minutes, then transfer to the oven for an hour and a half.\\r\\n\\r\\nRemove the stew from the oven and check the liquid; if there is a lot, remove the lid and boil for a few minutes.","description":"A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Irish%20stew.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Irish%20stew.jpg","time":"160","youtube":"https://www.youtube.com/watch?v=kYH2qJXnSMo","tags":["Stew","Meat"],"ingredients":[{"id":"640c2dd963a319ea671e3796","measure":"300g soaked overnight in water"},{"id":"640c2dd963a319ea671e370c","measure":"2kg cut into 3cm cubes"},{"id":"640c2dd963a319ea671e372c","measure":"120ml"},{"id":"640c2dd963a319ea671e3765","measure":"24 Skinned"},{"id":"640c2dd963a319ea671e3684","measure":"4 large"},{"id":"640c2dd963a319ea671e3784","measure":"2"},{"id":"640c2dd963a319ea671e3689","measure":"1"},{"id":"640c2dd963a319ea671e368d","measure":"350g"},{"id":"640c2dd963a319ea671e3794","measure":"150ml"},{"id":"640c2dd963a319ea671e3687","measure":"1 tsp"},{"id":"640c2dd963a319ea671e36de","measure":"4 sprigs"},{"id":"640c2dd963a319ea671e3731","measure":"4 sprigs"},{"id":"640c2dd963a319ea671e3696","measure":"450ml"}],"rating":4},{"_id":"6462a8f74c3d0ddd2889800c","title":"Lancashire hotpot","category":"Lamb","area":"British","instructions":"Heat oven to 160C/fan 140C/gas 3. Heat some dripping or butter in a large shallow casserole dish, brown the lamb in batches, lift to a plate, then repeat with the kidneys.\\r\\nFry the onions and carrots in the pan with a little more dripping until golden. Sprinkle over the flour, allow to cook for a couple of mins, shake over the Worcestershire sauce, pour in the stock, then bring to the boil. Stir in the meat and bay leaves, then turn off the heat. Arrange the sliced potatoes on top of the meat, then drizzle with a little more dripping. Cover, then place in the oven for about 1\xbd hrs until the potatoes are cooked.\\r\\nRemove the lid, brush the potatoes with a little more dripping, then turn the oven up to brown the potatoes, or finish under the grill for 5-8 mins until brown.","description":"A hearty casserole with tender lamb and vegetables, topped with sliced potatoes.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Lancashire%20hotpot.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Lancashire%20hotpot.jpg","time":"115","youtube":"https://www.youtube.com/watch?v=w6TS5J8YRA4","tags":[],"ingredients":[{"id":"640c2dd963a319ea671e367e","measure":"100g "},{"id":"640c2dd963a319ea671e370b","measure":"900g"},{"id":"640c2dd963a319ea671e3801","measure":"3"},{"id":"640c2dd963a319ea671e372e","measure":"2 medium"},{"id":"640c2dd963a319ea671e3684","measure":"4 sliced"},{"id":"640c2dd963a319ea671e3743","measure":"25g"},{"id":"640c2dd963a319ea671e3798","measure":"2 tsp"},{"id":"640c2dd963a319ea671e3696","measure":"500ml"},{"id":"640c2dd963a319ea671e366b","measure":"2"},{"id":"640c2dd963a319ea671e3746","measure":"900g"}],"rating":3.71},{"_id":"6462a8f74c3d0ddd28897fbf","title":"Teriyaki Chicken Casserole","category":"Chicken","area":"Japanese","instructions":"Preheat oven to 350\xb0 F. Spray a 9x13-inch baking pan with non-stick spray.\\r\\nCombine soy sauce, \xbd cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\\r\\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\\r\\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\\r\\n*Meanwhile, steam or cook the vegetables according to package directions.\\r\\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!","description":"A Japanese-inspired casserole made with chicken, teriyaki sauce, rice, and vegetables.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg","time":"75","youtube":"https://www.youtube.com/watch?v=4aZr5hZXP_s","tags":["Meat","Casserole"],"ingredients":[{"id":"640c2dd963a319ea671e376c","measure":"3/4 cup"},{"id":"640c2dd963a319ea671e378f","measure":"1/2 cup"},{"id":"640c2dd963a319ea671e367d","measure":"1/4 cup"},{"id":"640c2dd963a319ea671e36f8","measure":"1/2 teaspoon"},{"id":"640c2dd963a319ea671e3720","measure":"1/2 teaspoon"},{"id":"640c2dd963a319ea671e36b3","measure":"4 Tablespoons"},{"id":"640c2dd963a319ea671e3694","measure":"2"},{"id":"640c2dd963a319ea671e3772","measure":"1 (12 oz.)"},{"id":"640c2dd963a319ea671e367c","measure":"3 cups"}],"rating":3.38},{"_id":"6462a8f74c3d0ddd28897fc3","title":"Honey Teriyaki Salmon","category":"Seafood","area":"Japanese","instructions":"Mix all the ingredients in the Honey Teriyaki Glaze together. Whisk to blend well. Combine the salmon and the Glaze together.\\r\\n\\r\\nHeat up a skillet on medium-low heat. Add the oil, Pan-fry the salmon on both sides until it\u2019s completely cooked inside and the glaze thickens.\\r\\n\\r\\nGarnish with sesame and serve immediately.","description":"A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Honey%20Teriyaki%20Salmon.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Honey%20Teriyaki%20Salmon.jpg","time":"25","youtube":"https://www.youtube.com/watch?v=4MpYuaJsvRw","tags":["Fish","Breakfast","DateNight"],"ingredients":[{"id":"640c2dd963a319ea671e365c","measure":"1 lb"},{"id":"640c2dd963a319ea671e372c","measure":"1 tablespoon"},{"id":"640c2dd963a319ea671e376c","measure":"2 tablespoons"},{"id":"640c2dd963a319ea671e375c","measure":"2 tablespoons"},{"id":"640c2dd963a319ea671e3764","measure":"4 tablespoons"}],"rating":4.8},{"_id":"6462a8f74c3d0ddd28898019","title":"Poutine","category":"Miscellaneous","area":"Canadian","instructions":"Heat oil in a deep fryer or deep heavy skillet to 365\xb0F (185\xb0C).\\r\\nWarm gravy in saucepan or microwave.\\r\\nPlace the fries into the hot oil, and cook until light brown, about 5 minutes.\\r\\nRemove to a paper towel lined plate to drain.\\r\\nPlace the fries on a serving platter, and sprinkle the cheese over them.\\r\\nLadle gravy over the fries and cheese, and serve immediately.","description":"A Canadian dish made with french fries, cheese curds, and gravy.","thumb":"https://ftp.goit.study/img/so-yummy/preview/Poutine.jpg","preview":"https://ftp.goit.study/img/so-yummy/preview/Poutine.jpg","time":"20","youtube":"https://www.youtube.com/watch?v=UVAMAoA2_WU","tags":["UnHealthy","Speciality","HangoverFood"],"ingredients":[{"id":"640c2dd963a319ea671e3789","measure":"Dash"},{"id":"640c2dd963a319ea671e366e","measure":"1 Can"},{"id":"640c2dd963a319ea671e3746","measure":"5 thin cut"},{"id":"640c2dd963a319ea671e3690","measure":"2 cups"}],"rating":1.29}]}');

},{}],"hZBA8":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse("[{\"_id\":\"6462a6f04c3d0ddd28897f9b\",\"name\":\"Ukrainian\"},{\"_id\":\"6462a6f04c3d0ddd28897f9c\",\"name\":\"Italian\"},{\"_id\":\"6462a6f04c3d0ddd28897f9d\",\"name\":\"Moroccan\"},{\"_id\":\"6462a6f04c3d0ddd28897f9e\",\"name\":\"Unknown\"},{\"_id\":\"6462a6f04c3d0ddd28897f9f\",\"name\":\"Thai\"},{\"_id\":\"6462a6f04c3d0ddd28897fa0\",\"name\":\"Irish\"},{\"_id\":\"6462a6f04c3d0ddd28897fa1\",\"name\":\"British\"},{\"_id\":\"6462a6f04c3d0ddd28897fa2\",\"name\":\"Japanese\"},{\"_id\":\"6462a6f04c3d0ddd28897fa3\",\"name\":\"French\"},{\"_id\":\"6462a6f04c3d0ddd28897fa4\",\"name\":\"Indian\"},{\"_id\":\"6462a6f04c3d0ddd28897fa5\",\"name\":\"American\"},{\"_id\":\"6462a6f04c3d0ddd28897fa6\",\"name\":\"Mexican\"},{\"_id\":\"6462a6f04c3d0ddd28897fa7\",\"name\":\"Malaysian\"},{\"_id\":\"6462a6f04c3d0ddd28897fa8\",\"name\":\"Dutch\"},{\"_id\":\"6462a6f04c3d0ddd28897fa9\",\"name\":\"Spanish\"},{\"_id\":\"6462a6f04c3d0ddd28897faa\",\"name\":\"Canadian\"},{\"_id\":\"6462a6f04c3d0ddd28897fab\",\"name\":\"Vietnamese\"},{\"_id\":\"6462a6f04c3d0ddd28897fac\",\"name\":\"Tunisian\"},{\"_id\":\"6462a6f04c3d0ddd28897fad\",\"name\":\"Greek\"},{\"_id\":\"6462a6f04c3d0ddd28897fae\",\"name\":\"Portuguese\"},{\"_id\":\"6462a6f04c3d0ddd28897faf\",\"name\":\"Croatian\"},{\"_id\":\"6462a6f04c3d0ddd28897fb0\",\"name\":\"Chinese\"},{\"_id\":\"6462a6f04c3d0ddd28897fb1\",\"name\":\"Egyptian\"},{\"_id\":\"6462a6f04c3d0ddd28897fb2\",\"name\":\"Jamaican\"},{\"_id\":\"6462a6f04c3d0ddd28897fb3\",\"name\":\"Polish\"},{\"_id\":\"6462a6f04c3d0ddd28897fb4\",\"name\":\"Kenyan\"},{\"_id\":\"6462a6f04c3d0ddd28897fb5\",\"name\":\"Turkish\"}]");

},{}],"4qtQs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setActiveCategory", ()=>setActiveCategory);
parcelHelpers.export(exports, "getActiveCategory", ()=>getActiveCategory);
parcelHelpers.export(exports, "resetActiveCategory", ()=>resetActiveCategory);
parcelHelpers.export(exports, "setSelectedRegion", ()=>setSelectedRegion);
parcelHelpers.export(exports, "getSelectedRegion", ()=>getSelectedRegion);
parcelHelpers.export(exports, "setSelectedIngredient", ()=>setSelectedIngredient);
parcelHelpers.export(exports, "getSelectedIngredient", ()=>getSelectedIngredient);
parcelHelpers.export(exports, "setSelectedTime", ()=>setSelectedTime);
parcelHelpers.export(exports, "getSelectedTime", ()=>getSelectedTime);
let activeCategory = "";
function setActiveCategory(category) {
    activeCategory = category;
}
function getActiveCategory() {
    return activeCategory;
}
function resetActiveCategory() {
    activeCategory = "";
    selectedRegion = "";
    selectedIngredient = "";
    selectedTime = "";
}
let selectedRegion = "";
function setSelectedRegion(region) {
    selectedRegion = region;
}
function getSelectedRegion() {
    return selectedRegion;
}
let selectedIngredient = "";
function setSelectedIngredient(ingredient) {
    selectedIngredient = ingredient;
}
function getSelectedIngredient() {
    return selectedIngredient;
}
let selectedTime = "";
function setSelectedTime(time) {
    selectedTime = time;
}
function getSelectedTime() {
    return selectedTime;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"943FW":[function() {},{}],"jWbWy":[function(require,module,exports,__globalThis) {
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
            document.body.style.overflow = "hidden";
        });
    });
    closeSidebar.addEventListener("click", function() {
        sidebar.style.display = "none";
        document.body.style.overflow = "auto";
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ejvV0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ratingModal", ()=>ratingModal);
var _toastifyJs = require("toastify-js");
var _toastifyJsDefault = parcelHelpers.interopDefault(_toastifyJs);
var _toastifyCss = require("toastify-js/src/toastify.css");
const ratingModal = ()=>{
    const modal = document.getElementById("rating-modal");
    const modalContent = document.querySelector(".rating-modal-content");
    const seeRecipeModal = document.getElementById("see-recipe-modal");
    const openButton = document.getElementById("rating-btn");
    const closeButton = document.getElementById("close-rating-modal");
    const stars = document.querySelectorAll("#star-rating .star");
    const ratingValue = document.getElementById("rating-value");
    const ratingData = document.getElementById("rating-data");
    const form = document.getElementById("rating-form");
    const ratingContainer = document.getElementById("rating-container");
    const inputForm = document.getElementById("rating-email");
    const message = document.createElement("p");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (stars.length === 0 || ratingValue.value === "0") (0, _toastifyJsDefault.default)({
            text: "Please select a rating before submitting.",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #ff5f6d, #ffc371)"
            }
        }).showToast();
        else {
            (0, _toastifyJsDefault.default)({
                text: "Rating submitted successfully!",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)"
                }
            }).showToast();
            // Reset form
            inputForm.value = "";
            ratingValue.value = 0;
            ratingData.textContent = "0.0";
            stars.forEach((s)=>s.classList.remove("active"));
            // Animate close
            modalContent.classList.remove("show");
            modalContent.classList.add("hide");
            setTimeout(()=>{
                modal.style.display = "none";
                modalContent.classList.remove("hide");
                document.body.style.overflow = "auto";
            }, 300);
        }
    });
    stars.forEach((star)=>{
        star.addEventListener("click", ()=>{
            const value = parseInt(star.getAttribute("data-value"));
            ratingValue.value = value;
            stars.forEach((s)=>{
                if (parseInt(s.getAttribute("data-value")) <= value) s.classList.add("active");
                else s.classList.remove("active");
            });
            ratingData.textContent = `0.${value}`;
        });
    });
    openButton.addEventListener("click", ()=>{
        modal.style.display = "block";
        modalContent.classList.remove("hide");
        modalContent.classList.add("show");
        document.body.style.overflow = "hidden";
        if (seeRecipeModal && seeRecipeModal.style.display === "block") seeRecipeModal.style.display = "none";
    });
    closeButton.addEventListener("click", ()=>{
        modalContent.classList.remove("show");
        modalContent.classList.add("hide");
        setTimeout(()=>{
            modal.style.display = "none";
            modalContent.classList.remove("hide");
            document.body.style.overflow = "auto";
            if (message && ratingContainer.contains(message)) ratingContainer.removeChild(message);
            stars.forEach((s)=>{
                ratingData.textContent = `0.0`;
                ratingValue.value = 0;
                s.classList.remove("active");
            });
        }, 300); // Match CSS hide animation
    });
};

},{"toastify-js":"33QEN","toastify-js/src/toastify.css":"943FW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"943FW":[function() {},{}],"ddmC4":[function(require,module,exports,__globalThis) {
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

},{"choices.js":"135xW","choices.js/public/assets/styles/choices.min.css":"i38sz","./sharedState.js":"4qtQs","./updateRecipes.js":"823Qz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i38sz":[function() {},{}]},["3c99H"], null, "parcelRequire78be", {})

//# sourceMappingURL=favorites.95ba470a.js.map
