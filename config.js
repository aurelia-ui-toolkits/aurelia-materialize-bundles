System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "ignore": [
      "github:*",
      "npm:*"
    ],
    "stage": 0,
    "optional": []
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.2",
    "aurelia-binding": "npm:aurelia-binding@1.2.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.1.2",
    "aurelia-framework": "npm:aurelia-framework@1.1.4",
    "aurelia-history": "npm:aurelia-history@1.0.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.1.1",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.2",
    "aurelia-logging": "npm:aurelia-logging@1.3.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-materialize-bridge": "npm:aurelia-materialize-bridge@0.30.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0",
    "aurelia-router": "npm:aurelia-router@1.3.0",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
    "aurelia-templating": "npm:aurelia-templating@1.4.2",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0",
    "aurelia-validation": "npm:aurelia-validation@1.1.1",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "clean-css": "npm:clean-css@3.4.28",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.35",
    "jquery": "github:components/jquery@2.2.4",
    "materialize": "npm:materialize-css@0.100.1",
    "text": "github:systemjs/plugin-text@0.0.7",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-binding@1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:aurelia-bootstrapper@1.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.1.4",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.2.2",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0"
    },
    "npm:aurelia-dependency-injection@1.3.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-framework@1.1.4": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-http-client@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-loader-default@1.0.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-materialize-bridge@0.30.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-pal-browser@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-polyfills@1.2.2": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.3.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-templating-binding@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-resources@1.4.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-router@1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating@1.4.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:aurelia-validation@1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.0.7": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:clean-css@3.4.28": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hammerjs@2.0.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:materialize-css@0.100.1": {
      "hammerjs": "npm:hammerjs@2.0.8",
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "bundles/bundle.js": [
      "github:components/jquery@2.2.4.js",
      "github:components/jquery@2.2.4/jquery.js",
      "github:systemjs/plugin-css@0.1.35.js",
      "github:systemjs/plugin-css@0.1.35/css.js",
      "github:systemjs/plugin-text@0.0.7.js",
      "github:systemjs/plugin-text@0.0.7/text.js",
      "npm:aurelia-animator-css@1.0.2.js",
      "npm:aurelia-animator-css@1.0.2/aurelia-animator-css.js",
      "npm:aurelia-binding@1.2.1.js",
      "npm:aurelia-binding@1.2.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.1.js",
      "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.1.js",
      "npm:aurelia-dependency-injection@1.3.1/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.1.2.js",
      "npm:aurelia-fetch-client@1.1.2/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.1.4.js",
      "npm:aurelia-framework@1.1.4/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-http-client@1.1.1.js",
      "npm:aurelia-http-client@1.1.1/aurelia-http-client.js",
      "npm:aurelia-loader-default@1.0.2.js",
      "npm:aurelia-loader-default@1.0.2/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.3.1.js",
      "npm:aurelia-logging@1.3.1/aurelia-logging.js",
      "npm:aurelia-materialize-bridge@0.30.0.js",
      "npm:aurelia-materialize-bridge@0.30.0/autocomplete/autocomplete.js",
      "npm:aurelia-materialize-bridge@0.30.0/badge/badge.js",
      "npm:aurelia-materialize-bridge@0.30.0/box/box.js",
      "npm:aurelia-materialize-bridge@0.30.0/breadcrumbs/breadcrumbs.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/breadcrumbs/breadcrumbs.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/breadcrumbs/breadcrumbs.js",
      "npm:aurelia-materialize-bridge@0.30.0/breadcrumbs/instructionFilter.js",
      "npm:aurelia-materialize-bridge@0.30.0/button/button.js",
      "npm:aurelia-materialize-bridge@0.30.0/card/card.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/card/card.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/card/card.js",
      "npm:aurelia-materialize-bridge@0.30.0/carousel/carousel-item.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/carousel/carousel-item.js",
      "npm:aurelia-materialize-bridge@0.30.0/carousel/carousel.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/carousel/carousel.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/carousel/carousel.js",
      "npm:aurelia-materialize-bridge@0.30.0/char-counter/char-counter.js",
      "npm:aurelia-materialize-bridge@0.30.0/checkbox/checkbox.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/checkbox/checkbox.js",
      "npm:aurelia-materialize-bridge@0.30.0/chip/chip.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/chip/chip.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/chip/chip.js",
      "npm:aurelia-materialize-bridge@0.30.0/chip/chips.js",
      "npm:aurelia-materialize-bridge@0.30.0/click-counter.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/click-counter.js",
      "npm:aurelia-materialize-bridge@0.30.0/collapsible/collapsible.js",
      "npm:aurelia-materialize-bridge@0.30.0/collection/collection-header.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/collection/collection-header.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/collection/collection-header.js",
      "npm:aurelia-materialize-bridge@0.30.0/collection/collection-item.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/collection/collection-item.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/collection/collection-item.js",
      "npm:aurelia-materialize-bridge@0.30.0/collection/collection.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/collection/collection.js",
      "npm:aurelia-materialize-bridge@0.30.0/collection/md-collection-selector.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/collection/md-collection-selector.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/collection/md-collection-selector.js",
      "npm:aurelia-materialize-bridge@0.30.0/colors/colorValueConverters.js",
      "npm:aurelia-materialize-bridge@0.30.0/colors/md-colors.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/colors/md-colors.js",
      "npm:aurelia-materialize-bridge@0.30.0/common/attributeManager.js",
      "npm:aurelia-materialize-bridge@0.30.0/common/attributes.js",
      "npm:aurelia-materialize-bridge@0.30.0/common/constants.js",
      "npm:aurelia-materialize-bridge@0.30.0/common/events.js",
      "npm:aurelia-materialize-bridge@0.30.0/common/polyfills.js",
      "npm:aurelia-materialize-bridge@0.30.0/config-builder.js",
      "npm:aurelia-materialize-bridge@0.30.0/datepicker/datepicker-default-parser.js",
      "npm:aurelia-materialize-bridge@0.30.0/datepicker/datepicker.js",
      "npm:aurelia-materialize-bridge@0.30.0/dropdown/dropdown-element.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/dropdown/dropdown-element.js",
      "npm:aurelia-materialize-bridge@0.30.0/dropdown/dropdown.js",
      "npm:aurelia-materialize-bridge@0.30.0/exports.js",
      "npm:aurelia-materialize-bridge@0.30.0/fab/fab.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/fab/fab.js",
      "npm:aurelia-materialize-bridge@0.30.0/file/file.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/file/file.js",
      "npm:aurelia-materialize-bridge@0.30.0/footer/footer.js",
      "npm:aurelia-materialize-bridge@0.30.0/index.js",
      "npm:aurelia-materialize-bridge@0.30.0/input/input-prefix.js",
      "npm:aurelia-materialize-bridge@0.30.0/input/input-update-service.js",
      "npm:aurelia-materialize-bridge@0.30.0/input/input.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/input/input.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/input/input.js",
      "npm:aurelia-materialize-bridge@0.30.0/modal/modal-trigger.js",
      "npm:aurelia-materialize-bridge@0.30.0/modal/modal.js",
      "npm:aurelia-materialize-bridge@0.30.0/navbar/navbar.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/navbar/navbar.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/navbar/navbar.js",
      "npm:aurelia-materialize-bridge@0.30.0/pagination/pagination.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/pagination/pagination.js",
      "npm:aurelia-materialize-bridge@0.30.0/parallax/parallax.js",
      "npm:aurelia-materialize-bridge@0.30.0/progress/progress.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/progress/progress.js",
      "npm:aurelia-materialize-bridge@0.30.0/pushpin/pushpin.js",
      "npm:aurelia-materialize-bridge@0.30.0/radio/radio.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/radio/radio.js",
      "npm:aurelia-materialize-bridge@0.30.0/range/range.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/range/range.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/range/range.js",
      "npm:aurelia-materialize-bridge@0.30.0/scrollfire/scrollfire-patch.js",
      "npm:aurelia-materialize-bridge@0.30.0/scrollfire/scrollfire-target.js",
      "npm:aurelia-materialize-bridge@0.30.0/scrollfire/scrollfire.js",
      "npm:aurelia-materialize-bridge@0.30.0/scrollspy/scrollspy.js",
      "npm:aurelia-materialize-bridge@0.30.0/select/select.js",
      "npm:aurelia-materialize-bridge@0.30.0/sidenav/sidenav-collapse.js",
      "npm:aurelia-materialize-bridge@0.30.0/sidenav/sidenav.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/sidenav/sidenav.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/sidenav/sidenav.js",
      "npm:aurelia-materialize-bridge@0.30.0/slider/slider.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/slider/slider.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/slider/slider.js",
      "npm:aurelia-materialize-bridge@0.30.0/switch/switch.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/switch/switch.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/switch/switch.js",
      "npm:aurelia-materialize-bridge@0.30.0/tabs/tabs.js",
      "npm:aurelia-materialize-bridge@0.30.0/tap-target/tap-target.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-materialize-bridge@0.30.0/tap-target/tap-target.js",
      "npm:aurelia-materialize-bridge@0.30.0/timepicker/timepicker.js",
      "npm:aurelia-materialize-bridge@0.30.0/toast/toastService.js",
      "npm:aurelia-materialize-bridge@0.30.0/tooltip/tooltip.js",
      "npm:aurelia-materialize-bridge@0.30.0/transitions/fadein-image.js",
      "npm:aurelia-materialize-bridge@0.30.0/transitions/staggered-list.js",
      "npm:aurelia-materialize-bridge@0.30.0/validation/validationRenderer.js",
      "npm:aurelia-materialize-bridge@0.30.0/waves/waves.js",
      "npm:aurelia-materialize-bridge@0.30.0/well/md-well.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.2.1.js",
      "npm:aurelia-pal-browser@1.2.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.3.0.js",
      "npm:aurelia-pal@1.3.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.2.2.js",
      "npm:aurelia-polyfills@1.2.2/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.3.0.js",
      "npm:aurelia-router@1.3.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.2.0.js",
      "npm:aurelia-task-queue@1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.3.0.js",
      "npm:aurelia-templating-binding@1.3.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.4.0.js",
      "npm:aurelia-templating-resources@1.4.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.4.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.4.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.4.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.4.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.4.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.4.0/compose.js",
      "npm:aurelia-templating-resources@1.4.0/css-resource.js",
      "npm:aurelia-templating-resources@1.4.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.4.0/focus.js",
      "npm:aurelia-templating-resources@1.4.0/hide.js",
      "npm:aurelia-templating-resources@1.4.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.4.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.4.0/if.js",
      "npm:aurelia-templating-resources@1.4.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.4.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.4.0/repeat.js",
      "npm:aurelia-templating-resources@1.4.0/replaceable.js",
      "npm:aurelia-templating-resources@1.4.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.4.0/self-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/show.js",
      "npm:aurelia-templating-resources@1.4.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/with.js",
      "npm:aurelia-templating-router@1.1.0.js",
      "npm:aurelia-templating-router@1.1.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.1.0/route-href.js",
      "npm:aurelia-templating-router@1.1.0/route-loader.js",
      "npm:aurelia-templating-router@1.1.0/router-view.js",
      "npm:aurelia-templating@1.4.2.js",
      "npm:aurelia-templating@1.4.2/aurelia-templating.js",
      "npm:aurelia-validation@1.1.1.js",
      "npm:aurelia-validation@1.1.1/aurelia-validation.js",
      "npm:aurelia-validation@1.1.1/get-target-dom-element.js",
      "npm:aurelia-validation@1.1.1/implementation/expression-visitor.js",
      "npm:aurelia-validation@1.1.1/implementation/rules.js",
      "npm:aurelia-validation@1.1.1/implementation/standard-validator.js",
      "npm:aurelia-validation@1.1.1/implementation/validation-message-parser.js",
      "npm:aurelia-validation@1.1.1/implementation/validation-messages.js",
      "npm:aurelia-validation@1.1.1/implementation/validation-rules.js",
      "npm:aurelia-validation@1.1.1/property-accessor-parser.js",
      "npm:aurelia-validation@1.1.1/property-info.js",
      "npm:aurelia-validation@1.1.1/util.js",
      "npm:aurelia-validation@1.1.1/validate-binding-behavior-base.js",
      "npm:aurelia-validation@1.1.1/validate-binding-behavior.js",
      "npm:aurelia-validation@1.1.1/validate-event.js",
      "npm:aurelia-validation@1.1.1/validate-result.js",
      "npm:aurelia-validation@1.1.1/validate-trigger.js",
      "npm:aurelia-validation@1.1.1/validation-controller-factory.js",
      "npm:aurelia-validation@1.1.1/validation-controller.js",
      "npm:aurelia-validation@1.1.1/validation-errors-custom-attribute.js",
      "npm:aurelia-validation@1.1.1/validation-renderer-custom-attribute.js",
      "npm:aurelia-validation@1.1.1/validator.js",
      "npm:materialize-css@0.100.1.js",
      "npm:materialize-css@0.100.1/dist/css/materialize.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:materialize-css@0.100.1/dist/js/materialize.js"
    ]
  }
});