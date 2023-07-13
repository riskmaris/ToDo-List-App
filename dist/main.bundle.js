/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n\r\n\r\nconst myList = new _todos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nmyList.displayList();\r\n\r\nfunction todoCheckbox() {\r\n  const checkboxes = document.querySelectorAll('.edit-text');\r\n  checkboxes.forEach((checkbox) => {\r\n    const index = checkbox.parentNode.querySelector('.editBtn').getAttribute('data-index');\r\n    const editInput = checkbox.parentNode.querySelector('.editBtn');\r\n    const { completed } = myList.todoDetails[index];\r\n\r\n    checkbox.checked = completed;\r\n    editInput.classList.toggle('completed', completed);\r\n\r\n    checkbox.addEventListener('change', (event) => {\r\n      const isChecked = event.target.checked;\r\n      editInput.classList.toggle('completed', isChecked);\r\n      myList.todoDetails[index].completed = isChecked;\r\n      localStorage.setItem('todoData', JSON.stringify(myList.todoDetails));\r\n    });\r\n  });\r\n}\r\n\r\nconst addButton = document.getElementById('add-button');\r\naddButton.addEventListener('click', () => {\r\n  const task = document.getElementById('task').value.trim();\r\n  const completed = false;\r\n  const index = myList.todoDetails.length + 1;\r\n  if (task) {\r\n    myList.addRow(task, completed, index);\r\n    myList.displayList();\r\n    document.getElementById('task').value = '';\r\n    todoCheckbox();\r\n  }\r\n});\r\n\r\nwindow.addEventListener('DOMContentLoaded', todoCheckbox);\n\n//# sourceURL=webpack://todo-list-app/./src/index.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddList)\n/* harmony export */ });\nclass AddList {\r\n    constructor() {\r\n      const previousData = localStorage.getItem('todoData');\r\n      this.todoDetails = previousData ? JSON.parse(previousData) : [];\r\n    }\r\n  \r\n    displayList() {\r\n      const reciveData = localStorage.getItem('todoData');\r\n      if (reciveData && JSON.parse(reciveData).length > 0) {\r\n        this.todoDetails = JSON.parse(reciveData);\r\n        const row = document.getElementById('lists');\r\n        row.innerHTML = '';\r\n        for (let i = 0; i < this.todoDetails.length; i += 1) {\r\n          row.innerHTML += `<li class=\"removeLine\">\r\n                              <div class=\"rowData\" > <input class=\"edit-text\" type=\"checkbox\"  ${this.todoDetails[i].completed ? 'checked' : ''} /> \r\n                              <input class=\"editBtn\" type=\"text\" value=\"${this.todoDetails[i].title}\" data-index=\"${i}\" readonly /> </div>\r\n                              <button id=\"${this.todoDetails[i].index}\" class=\"remove-btn\"> <i class=\"fas fa-trash\"></i></button>\r\n                          </li> <hr>`;\r\n        }\r\n        const removeBtn = document.querySelectorAll('.remove-btn');\r\n        const removeLine = document.querySelectorAll('.removeLine');\r\n  \r\n        for (let i = 0; i < removeBtn.length; i += 1) {\r\n          removeBtn[i].addEventListener('click', () => {\r\n            removeLine[i].remove();\r\n            this.deleteRow(i);\r\n            this.displayList();\r\n          });\r\n        }\r\n  \r\n        const editBtn = document.querySelectorAll('.editBtn');\r\n        editBtn.forEach((editElement) => {\r\n          editElement.addEventListener('click', () => {\r\n            const index = editElement.getAttribute('data-index');\r\n            const editInput = document.querySelector(`input.editBtn[data-index=\"${index}\"]`);\r\n            editInput.readOnly = false;\r\n            editInput.addEventListener('blur', (event) => {\r\n              const newTitle = event.target.value;\r\n              this.updateRowTitle(index, newTitle);\r\n              event.target.readOnly = true;\r\n            });\r\n          });\r\n        });\r\n      }\r\n    }\r\n  \r\n    addRow(title, completed, index) {\r\n      const todo = { title, completed, index };\r\n      this.todoDetails.push(todo);\r\n      localStorage.setItem('todoData', JSON.stringify(this.todoDetails));\r\n    }\r\n  \r\n    deleteRow(index) {\r\n      this.todoDetails.splice(index, 1);\r\n      for (let i = index; i < this.todoDetails.length; i += 1) {\r\n        this.todoDetails[i].index = i + 1;\r\n      }\r\n      localStorage.setItem('todoData', JSON.stringify(this.todoDetails));\r\n      this.displayList();\r\n    }\r\n  \r\n    updateRowTitle(index, newTitle) {\r\n      this.todoDetails[index].title = newTitle;\r\n      localStorage.setItem('todoData', JSON.stringify(this.todoDetails));\r\n      this.displayList();\r\n    }\r\n  }\n\n//# sourceURL=webpack://todo-list-app/./src/todos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;