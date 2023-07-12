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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import './styles.css';\n\nconst toDoTasks = [\n    {\n      description: 'Walk the dog',\n      completed: false,\n      index: 0,\n    },\n    {\n      description: 'Take breakfast',\n      completed: true,\n      index: 1,\n    },\n    {\n      description: 'Complete my project',\n      completed: false,\n      index: 2,\n    },\n  ];\n  \n  // difining the UL id\n  const listItem = document.getElementById('list-item');\n  \n  // loop through the array of obj and creat li for each\n  toDoTasks.forEach((todo) => {\n    // Create a new li element\n    const listElement = document.createElement('li');\n    const spanElement = document.createElement('span');\n    spanElement.textContent = todo.description;\n  \n    const checkboxElement = document.createElement('input');\n    checkboxElement.type = 'checkbox';\n    listElement.appendChild(checkboxElement);\n    listElement.appendChild(spanElement);\n  \n    if (todo.completed) {\n      listItem.classList.add('completed');\n    }\n    listItem.appendChild(listElement);\n  });\n\n//# sourceURL=webpack://todo-list-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;