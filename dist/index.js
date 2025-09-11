"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaQuery = exports.useLocalStorage = void 0;
// Local Storage Hook
var useLocalStorage_1 = require("./hooks/useLocalStorage");
Object.defineProperty(exports, "useLocalStorage", { enumerable: true, get: function () { return useLocalStorage_1.useLocalStorage; } });
// Media Query Hook
var useMediaQuery_1 = require("./hooks/useMediaQuery");
Object.defineProperty(exports, "useMediaQuery", { enumerable: true, get: function () { return useMediaQuery_1.useMediaQuery; } });
