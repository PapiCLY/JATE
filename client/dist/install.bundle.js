/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById('buttonInstall');\n\n// Logic for installing the PWA\n// Add an event handler to the `beforeinstallprompt` event\nwindow.addEventListener('beforeinstallprompt', (event) => {\n    // Prevent Chrome <= 67 from automatically showing the prompt\n    event.preventDefault();\n    // Stash the event so it can be triggered later.\n    window.deferredPrompt = event;\n    // Show the install button\n    butInstall.style.display = 'block';\n});\n\n// Implement a click event handler on the `butInstall` element\nbutInstall.addEventListener('click', async () => {\n    // Check if there's no deferredPrompt to handle\n    if (!window.deferredPrompt) {\n        return;\n    }\n    // Show the prompt\n    window.deferredPrompt.prompt();\n    // Wait for the user to respond to the prompt\n    const choiceResult = await window.deferredPrompt.userChoice;\n    if (choiceResult.outcome === 'accepted') {\n        console.log('User accepted the A2HS prompt');\n    } else {\n        console.log('User dismissed the A2HS prompt');\n    }\n    // We no longer need the prompt.  Clear it up.\n    window.deferredPrompt = null;\n    butInstall.style.display = 'none';\n});\n\n// Add an handler for the `appinstalled` event\nwindow.addEventListener('appinstalled', (event) => {\n    console.log('PWA was installed');\n    window.deferredPrompt = null;\n    butInstall.style.display = 'none';\n});\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;