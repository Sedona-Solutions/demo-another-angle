System.config({
    baseURL: "/",
    defaultJSExtensions: true,
    transpiler: 'none',
    packages: {
        app: {
            main: 'app.component.js',
            defaultExtension: 'js'
        }
    },
    paths: {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
    },

    meta: {
        "github:angular/bower-angular@1.5.5/angular": {
            "format": "global",
            "exports": "angular"
        },
        "github:angular-ui/angular-ui-router-bower@0.3.0/release/angular-ui-router": {
            "deps": [
                "angular"
            ]
        },
        "github:ocombe/ocLazyLoad@1.0.9/dist/ocLazyLoad": {
            "deps": [
                "angular"
            ]
        },
        "npm:ui-router-extras@0.1.2/release/modular/ct-ui-router-extras.core": {
            "format": "global",
            "deps": [
                "angular"
            ]
        },
        "npm:ui-router-extras@0.1.2/release/modular/ct-ui-router-extras.future": {
            "format": "global",
            "deps": [
                "npm:ui-router-extras@0.1.2/release/modular/ct-ui-router-extras.core"
            ]
        }
    },

    map: {
        "angular": "github:angular/bower-angular@1.5.5",
        "angular-ui-router": "github:angular-ui/angular-ui-router-bower@0.3.0",
        "bootstrap": "github:twbs/bootstrap@3.3.6",
        "ng-decorators": "github:Sedona-Solutions/angularjs-decorators@0.2.2",
        "ocLazyLoad": "github:ocombe/oclazyload@1.0.9",
        "typescript": "npm:typescript@1.8.10",
        "ui-router-extras": "npm:ui-router-extras@0.1.2",
        "github:jspm/nodelibs-assert@0.1.0": {
            "assert": "npm:assert@1.4.0"
        },
        "github:jspm/nodelibs-buffer@0.1.0": {
            "buffer": "npm:buffer@3.6.0"
        },
        "github:jspm/nodelibs-os@0.1.0": {
            "os-browserify": "npm:os-browserify@0.1.2"
        },
        "github:jspm/nodelibs-process@0.1.2": {
            "process": "npm:process@0.11.3"
        },
        "github:jspm/nodelibs-util@0.1.0": {
            "util": "npm:util@0.10.3"
        },
        "github:twbs/bootstrap@3.3.6": {
            "jquery": "npm:jquery@2.2.4"
        },
        "npm:assert@1.4.0": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "buffer-shims": "npm:buffer-shims@1.0.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "util": "npm:util@0.10.3"
        },
        "npm:buffer-shims@1.0.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:buffer@3.6.0": {
            "base64-js": "npm:base64-js@0.0.8",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "ieee754": "npm:ieee754@1.1.6",
            "isarray": "npm:isarray@1.0.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:inherits@2.0.1": {
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:os-browserify@0.1.2": {
            "os": "github:jspm/nodelibs-os@0.1.0"
        },
        "npm:process@0.11.3": {
            "assert": "github:jspm/nodelibs-assert@0.1.0"
        },
        "npm:typescript@1.8.10": {
            "os": "github:jspm/nodelibs-os@0.1.0"
        },
        "npm:ui-router-extras@0.1.2": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:util@0.10.3": {
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        }
    }
});
