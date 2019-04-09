(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_declaration_table_declaration_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/declaration-table/declaration-table.component */ "./src/app/components/declaration-table/declaration-table.component.ts");
/* harmony import */ var _components_declaration_stepper_declaration_stepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/declaration-stepper/declaration-stepper.component */ "./src/app/components/declaration-stepper/declaration-stepper.component.ts");
/* harmony import */ var _components_declaration_expansion_list_declaration_expansion_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/declaration-expansion-list/declaration-expansion-list.component */ "./src/app/components/declaration-expansion-list/declaration-expansion-list.component.ts");
/* harmony import */ var _components_declaration_create_declaration_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/declaration-create/declaration-create.component */ "./src/app/components/declaration-create/declaration-create.component.ts");
/* harmony import */ var _components_declaration_view_declaration_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/declaration-view/declaration-view.component */ "./src/app/components/declaration-view/declaration-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/declarationtable', pathMatch: 'full' },
    { path: 'app', component: _components_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: 'declarationtable', component: _components_declaration_table_declaration_table_component__WEBPACK_IMPORTED_MODULE_3__["DeclarationTableComponent"] },
    { path: 'declarationcreate', component: _components_declaration_create_declaration_create_component__WEBPACK_IMPORTED_MODULE_6__["DeclarationCreateComponent"] },
    { path: 'declarationview', component: _components_declaration_view_declaration_view_component__WEBPACK_IMPORTED_MODULE_7__["DeclarationViewComponent"] },
    { path: 'declarationstepper', component: _components_declaration_stepper_declaration_stepper_component__WEBPACK_IMPORTED_MODULE_4__["DeclarationStepperComponent"] },
    { path: 'declarationexpansionlist', component: _components_declaration_expansion_list_declaration_expansion_list_component__WEBPACK_IMPORTED_MODULE_5__["DeclarationExpansionListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _components_declaration_table_declaration_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/declaration-table/declaration-table.component */ "./src/app/components/declaration-table/declaration-table.component.ts");
/* harmony import */ var _components_declaration_stepper_declaration_stepper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/declaration-stepper/declaration-stepper.component */ "./src/app/components/declaration-stepper/declaration-stepper.component.ts");
/* harmony import */ var _components_declaration_expansion_list_declaration_expansion_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/declaration-expansion-list/declaration-expansion-list.component */ "./src/app/components/declaration-expansion-list/declaration-expansion-list.component.ts");
/* harmony import */ var _services_declaration_declaration_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/declaration/declaration.service */ "./src/app/services/declaration/declaration.service.ts");
/* harmony import */ var _components_declaration_create_declaration_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/declaration-create/declaration-create.component */ "./src/app/components/declaration-create/declaration-create.component.ts");
/* harmony import */ var _components_declaration_view_declaration_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/declaration-view/declaration-view.component */ "./src/app/components/declaration-view/declaration-view.component.ts");
/* harmony import */ var _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialogs/error-dialog/error-dialog.component */ "./src/app/dialogs/error-dialog/error-dialog.component.ts");
/* harmony import */ var _services_errorhandlerservice_error_handler_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/errorhandlerservice/error-handler.service */ "./src/app/services/errorhandlerservice/error-handler.service.ts");
/* harmony import */ var _dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialogs/message-dialog/message-dialog.component */ "./src/app/dialogs/message-dialog/message-dialog.component.ts");
/* harmony import */ var _components_declaration_update_declaration_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/declaration-update/declaration-update.component */ "./src/app/components/declaration-update/declaration-update.component.ts");
/* harmony import */ var _components_declarationfile_upload_declarationfile_upload_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/declarationfile-upload/declarationfile-upload.component */ "./src/app/components/declarationfile-upload/declarationfile-upload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// Dit is om de animatie uit te zetten
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_declaration_table_declaration_table_component__WEBPACK_IMPORTED_MODULE_8__["DeclarationTableComponent"],
                _components_declaration_create_declaration_create_component__WEBPACK_IMPORTED_MODULE_12__["DeclarationCreateComponent"],
                _components_declaration_stepper_declaration_stepper_component__WEBPACK_IMPORTED_MODULE_9__["DeclarationStepperComponent"],
                _components_declaration_expansion_list_declaration_expansion_list_component__WEBPACK_IMPORTED_MODULE_10__["DeclarationExpansionListComponent"],
                _components_declaration_view_declaration_view_component__WEBPACK_IMPORTED_MODULE_13__["DeclarationViewComponent"],
                _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ErrorDialogComponent"],
                _dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_16__["MessageDialogComponent"],
                _components_declaration_update_declaration_update_component__WEBPACK_IMPORTED_MODULE_17__["DeclarationUpdateComponent"],
                _components_declarationfile_upload_declarationfile_upload_component__WEBPACK_IMPORTED_MODULE_18__["DeclarationfileUploadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ],
            entryComponents: [_components_declaration_table_declaration_table_component__WEBPACK_IMPORTED_MODULE_8__["DeclarationTableComponent"], _components_declaration_view_declaration_view_component__WEBPACK_IMPORTED_MODULE_13__["DeclarationViewComponent"], _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ErrorDialogComponent"], _dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_16__["MessageDialogComponent"], _components_declaration_update_declaration_update_component__WEBPACK_IMPORTED_MODULE_17__["DeclarationUpdateComponent"]],
            providers: [_services_errorhandlerservice_error_handler_service__WEBPACK_IMPORTED_MODULE_15__["ErrorHandlerService"], _services_declaration_declaration_service__WEBPACK_IMPORTED_MODULE_11__["DeclarationService"]],
            bootstrap: [_app_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/app/app.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n  font-size: 1.2em;\n  color: #ffffff;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607d8b;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\nnav a.active {\n  color: #039be5;\n}\n.example-icon {\n  padding: 0 14px;\n}\n.example-fill-remaining-space {\n  flex: 1 1 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQ0FBc0M7QUFDdEM7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmgxIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5oMiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbm5hdiBhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5uYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xuICBjb2xvcjogIzYwN2Q4Yjtcbn1cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5uYXYgYS5hY3RpdmUge1xuICBjb2xvcjogIzAzOWJlNTtcbn1cblxuLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <h1>{{title}}</h1>\n</mat-toolbar>\n\n<!--<mat-toolbar color=\"primary\">-->\n    <!--<mat-chip-list>-->\n      <!--<mat-chip color=\"accent\" selected routerLink=\"/declarationtable\">Declaration status</mat-chip>-->\n    <!--</mat-chip-list>-->\n\n    <!--<span class=\"example-fill-remaining-space\"></span>-->\n\n    <!--<mat-chip-list>-->\n      <!--<mat-chip color=\"accent\" selected routerLink=\"/declarationstepper\">-->\n        <!--Declaration create-->\n        <!--<span class=\"example-spacer\"></span>-->\n        <!--<mat-icon class=\"example-icon\">add_circle_outline</mat-icon>-->\n      <!--</mat-chip>-->\n    <!--</mat-chip-list>-->\n\n    <!--<span class=\"example-fill-remaining-space\"></span>-->\n\n    <mat-chip-list>\n      <mat-chip color=\"accent\" selected routerLink=\"/declarationcreate\">\n        declarationcreate\n        <span class=\"example-spacer\"></span>\n        <mat-icon class=\"example-icon\">shopping_cart</mat-icon>\n      </mat-chip>\n    </mat-chip-list>\n\n<!--</mat-toolbar>-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'declaratie-client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/declaration-create/declaration-create.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/declaration-create/declaration-create.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".declaration-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.declaration-container > * {\n  width: 100%;\n}\n\n.dec-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.dec-full-width {\n  width: 100%;\n}\n\n.dec-button-row button,\n.dec-button-row a {\n  margin-right: 8px;\n}\n\n.mat-hint{\n  color:red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9uLWNyZWF0ZS9kZWNsYXJhdGlvbi1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoiZGVjbGFyYXRpb24tY3JlYXRlL2RlY2xhcmF0aW9uLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlY2xhcmF0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5kZWNsYXJhdGlvbi1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZWMtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGVjLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRlYy1idXR0b24tcm93IGJ1dHRvbixcbi5kZWMtYnV0dG9uLXJvdyBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5tYXQtaGludHtcbiAgY29sb3I6cmVkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/declaration-create/declaration-create.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/declaration-create/declaration-create.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"declaration-container\">\n  <form name=\"declarationForm\" [formGroup]=\"createForm\"\n        (ngSubmit)=\"createDeclaration(createForm.value); createForm.reset()\" class=\"declaration-container\">\n\n    <mat-form-field class=\"dec-full-width\" appearance=\"outline\">\n      <mat-label>Declaratie omschrijving</mat-label>\n      <input formControlName=\"description\" matInput placeholder=\"omschrijving\"\n             id=\"description\" name=\"description\">\n      <div *ngIf=\"!(createForm.controls.description.invalid && createForm.controls.description.errors.lets_be_friends); else elseAction\"></div>\n    </mat-form-field>\n\n    <mat-form-field class=\"dec-full-width\" appearance=\"outline\">\n      <mat-label>Medewerker ID</mat-label>\n      <input formControlName=\"empID\" matInput id=\"emp_id\" name=\"emp_id\">\n    </mat-form-field>\n\n    <table class=\"dec-full-width\" cellspacing=\"0\">\n      <tr>\n        <td>\n          <mat-form-field class=\"dec-full-width\" appearance=\"outline\">\n            <mat-label>Voornaam</mat-label>\n            <input formControlName=\"fname\" matInput id=\"Voornaam\" name=\"Voornaam\">\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"dec-full-width\" appearance=\"outline\">\n            <mat-label>Achternaam</mat-label>\n            <input formControlName=\"lname\" matInput id=\"Achternaam\" name=\"Achternaam\">\n          </mat-form-field>\n        </td>\n      </tr>\n    </table>\n\n    <mat-form-field class=\"dec-full-width\" appearance=\"outline\">\n      <mat-label>Datum</mat-label>\n      <input matInput value=\"{{processDate | date}}\" disabled>\n    </mat-form-field>\n\n    <mat-form-field class=\"dec-full-width\" appearance=\"outline\">\n      <mat-label>Bedrag</mat-label>\n      <input formControlName=\"amount\" matInput #euro\n             name=\"amount\" placeholder=\"0,00\" type=\"number\">\n      <mat-hint align=\"begin\" *ngIf=\"euro.value < 0\">Vul een positief getal in</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field class=\"dec-full-width\">\n      <mat-label>Medewerker bericht (optioneel)</mat-label>\n      <input formControlName=\"empMessage\" matInput id=\"empMessage\"\n             name=\"empMessage\" placeholder=\"Vul hier een bericht in\">\n      <div *ngIf=\"!(createForm.controls.empMessage.invalid && createForm.controls.empMessage.errors.lets_be_friends); else elseAction\"></div>\n    </mat-form-field>\n\n    <table class=\"dec-full-width\" cellspacing=\"0\">\n      <tr>\n        <td>\n          <button mat-raised-button dec-button-row color=\"warn\" (click)=\"onCancel()\">Annuleren</button>\n        </td>\n        <td>\n          <button mat-raised-button dec-button-row [disabled]=\"!createForm.valid\" color=\"primary\">Indienen</button>\n        </td>\n      </tr>\n    </table>\n\n    <ng-template #elseAction>\n      <mat-hint align=\"begin\">\n        Lets be friends\n        <mat-icon matSuffix>sentiment_satisfied_alt</mat-icon>\n      </mat-hint>\n    </ng-template>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/declaration-create/declaration-create.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/declaration-create/declaration-create.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DeclarationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationCreateComponent", function() { return DeclarationCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_StatusEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/StatusEnum */ "./src/app/models/StatusEnum.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_declaration_declaration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/declaration/declaration.service */ "./src/app/services/declaration/declaration.service.ts");
/* harmony import */ var _validators_textInputValidator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validators/textInputValidator */ "./src/app/components/validators/textInputValidator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mocks_mock_employee__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mocks/mock-employee */ "./src/app/mocks/mock-employee.ts");
/* harmony import */ var _services_errorhandlerservice_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/errorhandlerservice/error-handler.service */ "./src/app/services/errorhandlerservice/error-handler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DeclarationCreateComponent = /** @class */ (function () {
    function DeclarationCreateComponent(fb, location, router, declarationService, errorService) {
        this.fb = fb;
        this.location = location;
        this.router = router;
        this.declarationService = declarationService;
        this.errorService = errorService;
        this.disabled = true;
        this.controllerForCheck = ['fname', 'lname', 'description', 'empMessage'];
        this.processDate = new Date();
        this.createForm = this.fb.group({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255),
                _validators_textInputValidator__WEBPACK_IMPORTED_MODULE_5__["textInputValidator"]
            ]),
            empID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: _mocks_mock_employee__WEBPACK_IMPORTED_MODULE_7__["EMPLOYEE"].id, disabled: this.disabled }),
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: _mocks_mock_employee__WEBPACK_IMPORTED_MODULE_7__["EMPLOYEE"].fname, disabled: this.disabled }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_textInputValidator__WEBPACK_IMPORTED_MODULE_5__["textInputValidator"]
            ]),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: _mocks_mock_employee__WEBPACK_IMPORTED_MODULE_7__["EMPLOYEE"].lname, disabled: this.disabled }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_textInputValidator__WEBPACK_IMPORTED_MODULE_5__["textInputValidator"]
            ]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)
            ]),
            empMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255),
                _validators_textInputValidator__WEBPACK_IMPORTED_MODULE_5__["textInputValidator"]
            ])
        });
    }
    DeclarationCreateComponent.prototype.createDeclaration = function (createFormValue) {
        if (this.createForm.valid && this.examInputSecurity()) {
            this.executeDeclarationCreation(createFormValue);
        }
    };
    DeclarationCreateComponent.prototype.onCancel = function () {
        this.createForm.reset();
        this.location.back();
    };
    DeclarationCreateComponent.prototype.backToList = function () {
        this.router.navigateByUrl('/declarationtable');
    };
    DeclarationCreateComponent.prototype.executeDeclarationCreation = function (createFormValue) {
        var _this = this;
        var ss = [
            { id: 1,
                file: '1',
                filename: 'lolz.jpeg' },
            { id: 2,
                file: '2',
                filename: 'lolz.jpeg' }
        ];
        var declaration = {
            id: null,
            description: createFormValue.description,
            date: new Date().toISOString(),
            empId: _mocks_mock_employee__WEBPACK_IMPORTED_MODULE_7__["EMPLOYEE"].id,
            status: _models_StatusEnum__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"].SUBMITTED,
            amount: createFormValue.amount,
            empComment: createFormValue.empMessage,
            manComment: '',
            files: ss
        };
        this.declarationService.addDeclaration(declaration).subscribe(function (data) {
            _this.backToList();
        }, function (error) {
            {
                _this.errorService.handleError(error);
            }
        });
    };
    Object.defineProperty(DeclarationCreateComponent.prototype, "formControllers", {
        get: function () {
            var toReturn = [];
            for (var _i = 0, _a = this.controllerForCheck; _i < _a.length; _i++) {
                var conName = _a[_i];
                toReturn.push(this.createForm.get(conName));
            }
            return toReturn;
        },
        enumerable: true,
        configurable: true
    });
    DeclarationCreateComponent.prototype.examInputSecurity = function () {
        var status = false;
        for (var _i = 0, _a = this.formControllers; _i < _a.length; _i++) {
            var conName = _a[_i];
            if (conName.invalid && conName.errors.lets_be_friends) {
                status = false;
                break;
            }
            else {
                status = true;
            }
        }
        return status;
    };
    DeclarationCreateComponent.prototype.ngOnInit = function () {
    };
    DeclarationCreateComponent.prototype.ngOnDestroy = function () {
    };
    DeclarationCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-declaration-create',
            template: __webpack_require__(/*! ./declaration-create.component.html */ "./src/app/components/declaration-create/declaration-create.component.html"),
            styles: [__webpack_require__(/*! ./declaration-create.component.css */ "./src/app/components/declaration-create/declaration-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_declaration_declaration_service__WEBPACK_IMPORTED_MODULE_4__["DeclarationService"], _services_errorhandlerservice_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlerService"]])
    ], DeclarationCreateComponent);
    return DeclarationCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/declaration-expansion-list/declaration-expansion-list.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/declaration-expansion-list/declaration-expansion-list.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n/**/\n\n.example-box {\n  width: 200px;\n  height: 200px;\n  /*border: solid 10px #cc1912;*/\n  /*color: rgba(0, 0, 0, 0.87);*/\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  /*background: #ff9041;*/\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  /*box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),*/\n  /*0 2px 2px 0 rgba(0, 0, 0, 0.14),*/\n  /*0 1px 5px 0 rgba(0, 0, 0, 0.12);*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9uLWV4cGFuc2lvbi1saXN0L2RlY2xhcmF0aW9uLWV4cGFuc2lvbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFDQSxHQUFHOztBQUNIO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix1REFBdUQ7RUFDdkQsaURBQWlEO0VBQ2pELG1DQUFtQztFQUNuQyxtQ0FBbUM7QUFDckMiLCJmaWxlIjoiZGVjbGFyYXRpb24tZXhwYW5zaW9uLWxpc3QvZGVjbGFyYXRpb24tZXhwYW5zaW9uLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi8qKi9cbi5leGFtcGxlLWJveCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgLypib3JkZXI6IHNvbGlkIDEwcHggI2NjMTkxMjsqL1xuICAvKmNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyovXG4gIGN1cnNvcjogbW92ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qYmFja2dyb3VuZDogI2ZmOTA0MTsqL1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAvKmJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwqL1xuICAvKjAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksKi9cbiAgLyowIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpOyovXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/declaration-expansion-list/declaration-expansion-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/declaration-expansion-list/declaration-expansion-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n  <div cdkDropList class=\"example-box\" (cdkDropListDropped)=\"drop($event)\">\n    <mat-expansion-panel cdkDragLockAxis=\"x\" *ngFor=\"let data of declarations index as i\" cdkDrag>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{data.id}}\n        </mat-panel-title>\n        <mat-panel-description>\n          {{data.description}}\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <app-declaration-create>loading</app-declaration-create>\n\n    </mat-expansion-panel>\n  </div>\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/components/declaration-expansion-list/declaration-expansion-list.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/declaration-expansion-list/declaration-expansion-list.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DeclarationExpansionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationExpansionListComponent", function() { return DeclarationExpansionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_declaration_declaration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/declaration/declaration.service */ "./src/app/services/declaration/declaration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';
var DeclarationExpansionListComponent = /** @class */ (function () {
    function DeclarationExpansionListComponent(declarationService) {
        this.declarationService = declarationService;
        this.panelOpenState = false;
        this.declarations = Array();
    }
    DeclarationExpansionListComponent.prototype.getDeclarationsList = function () {
        var _this = this;
        this.declarationService.getDeclarations().subscribe(function (data) {
            _this.declarations = data;
            alert(_this.declarations.length);
        }, function (error) { return console.log(error); });
    };
    DeclarationExpansionListComponent.prototype.drop = function (event) {
        console.log(event.previousIndex);
        this.declarations.splice(event.previousIndex, 1);
    };
    DeclarationExpansionListComponent.prototype.ngOnInit = function () {
        this.getDeclarationsList();
    };
    DeclarationExpansionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-declaration-expansion-list',
            template: __webpack_require__(/*! ./declaration-expansion-list.component.html */ "./src/app/components/declaration-expansion-list/declaration-expansion-list.component.html"),
            styles: [__webpack_require__(/*! ./declaration-expansion-list.component.css */ "./src/app/components/declaration-expansion-list/declaration-expansion-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_declaration_declaration_service__WEBPACK_IMPORTED_MODULE_1__["DeclarationService"]])
    ], DeclarationExpansionListComponent);
    return DeclarationExpansionListComponent;
}());



/***/ }),

/***/ "./src/app/components/declaration-stepper/declaration-stepper.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/declaration-stepper/declaration-stepper.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9uLXN0ZXBwZXIvZGVjbGFyYXRpb24tc3RlcHBlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJkZWNsYXJhdGlvbi1zdGVwcGVyL2RlY2xhcmF0aW9uLXN0ZXBwZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxuLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/declaration-stepper/declaration-stepper.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/declaration-stepper/declaration-stepper.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button (click)=\"isBatchmode = !isBatchmode\" id=\"toggle-linear\">\n  {{!isBatchmode ? 'Enable batch mode' : 'Disable batch mode'}}\n</button>\n<mat-horizontal-stepper [linear]=\"isBatchmode\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Vul je gegevens in</ng-template>\n        <!--<app-declaratie-create>loading</app-declaratie-create>-->\n      <div>\n        <button mat-raised-button matStepperNext color=\"primary\">Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Upload een bestand</ng-template>\n\n      <div>\n        <button mat-stroked-button matStepperPrevious color=\"primary\">Back</button>\n        <button mat-raised-button matStepperNext color=\"primary\">Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Afronden</ng-template>\n    Declaratie is nu afgerond.\n    <mat-spinner></mat-spinner>\n    <div>\n      <button mat-stroked-button matStepperPrevious color=\"primary\">Back</button>\n      <button mat-raised-button color=\"warn\" (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "./src/app/components/declaration-stepper/declaration-stepper.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/declaration-stepper/declaration-stepper.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DeclarationStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationStepperComponent", function() { return DeclarationStepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeclarationStepperComponent = /** @class */ (function () {
    function DeclarationStepperComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isBatchmode = false;
    }
    DeclarationStepperComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    DeclarationStepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-declaration-stepper',
            template: __webpack_require__(/*! ./declaration-stepper.component.html */ "./src/app/components/declaration-stepper/declaration-stepper.component.html"),
            styles: [__webpack_require__(/*! ./declaration-stepper.component.css */ "./src/app/components/declaration-stepper/declaration-stepper.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DeclarationStepperComponent);
    return DeclarationStepperComponent;
}());



/***/ }),

/***/ "./src/app/components/declaration-table/declaration-table.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/declaration-table/declaration-table.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\n.createbutton:hover{\n  background-color: rgba(126, 63, 242, 0.91);\n  color:white;\n}\n\n.toDelete{\n  display:none;\n  color: lightcoral;\n}\n\n.mat-row:hover {\n  background-color: #f5f5f5;\n}\n\n.mat-row:hover .toDelete {\n  display:block;\n}\n\n.toDelete:hover{\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9uLXRhYmxlL2RlY2xhcmF0aW9uLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJkZWNsYXJhdGlvbi10YWJsZS9kZWNsYXJhdGlvbi10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNyZWF0ZWJ1dHRvbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjYsIDYzLCAyNDIsIDAuOTEpO1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLnRvRGVsZXRle1xuICBkaXNwbGF5Om5vbmU7XG4gIGNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4ubWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5tYXQtcm93OmhvdmVyIC50b0RlbGV0ZSB7XG4gIGRpc3BsYXk6YmxvY2s7XG59XG5cbi50b0RlbGV0ZTpob3ZlcntcbiAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/declaration-table/declaration-table.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/declaration-table/declaration-table.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <div mat-dialog-actions align=\"end\">\n    <button mat-raised-button align=\"end\" class=\"createbutton\" (click)=\"createClick()\">aanmaken</button>\n  </div>\n\n  <div>\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container *ngFor=\"let col of displayedColumns; let i = index\" matColumnDef=\"{{col}}\">\n        <div *ngIf=\"col != actionValue; else actionCol\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> {{colNames[i]}} </th>\n        </div>\n        <ng-template #actionCol>\n          <th mat-header-cell *matHeaderCellDef></th>\n        </ng-template>\n        <td mat-cell *matCellDef=\"let element\">\n          <div *ngIf=\"col != actionValue; else elseAction\" (click)=\"openDialog(element)\">{{element[col]}}</div>\n          <ng-template #elseAction>\n            <mat-icon mat-mini-fab>\n              <mat-icon *ngIf=\"checkStatus(element.status)\" class=\"toDelete\" matTooltip=\"Verwijder\"\n                        (click)=\"toDelete(element)\">remove_circle_outline\n              </mat-icon>\n            </mat-icon>\n          </ng-template>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons></mat-paginator>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/declaration-table/declaration-table.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/declaration-table/declaration-table.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DeclarationTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationTableComponent", function() { return DeclarationTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_declaration_declaration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/declaration/declaration.service */ "./src/app/services/declaration/declaration.service.ts");
/* harmony import */ var _models_Declaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Declaration */ "./src/app/models/Declaration.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _declaration_view_declaration_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../declaration-view/declaration-view.component */ "./src/app/components/declaration-view/declaration-view.component.ts");
/* harmony import */ var _services_errorhandlerservice_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/errorhandlerservice/error-handler.service */ "./src/app/services/errorhandlerservice/error-handler.service.ts");
/* harmony import */ var _models_StatusEnum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/StatusEnum */ "./src/app/models/StatusEnum.ts");
/* harmony import */ var _dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dialogs/message-dialog/message-dialog.component */ "./src/app/dialogs/message-dialog/message-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _declaration_update_declaration_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../declaration-update/declaration-update.component */ "./src/app/components/declaration-update/declaration-update.component.ts");
/* harmony import */ var _models_RestEnum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/RestEnum */ "./src/app/models/RestEnum.ts");
/* harmony import */ var _models_MessageCreator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../models/MessageCreator */ "./src/app/models/MessageCreator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DeclarationTableComponent = /** @class */ (function () {
    function DeclarationTableComponent(declarationService, errorService, dialog, router) {
        this.declarationService = declarationService;
        this.errorService = errorService;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.loadingError = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.pageSizeOptions = [5, 10, 15];
        this.InProgress = _models_StatusEnum__WEBPACK_IMPORTED_MODULE_7__["StatusEnum"].INPROGRESS;
        this.notAcceptableStatus = [_models_StatusEnum__WEBPACK_IMPORTED_MODULE_7__["StatusEnum"].INPROGRESS, _models_StatusEnum__WEBPACK_IMPORTED_MODULE_7__["StatusEnum"].APPROVED];
        this.actionValue = 'action';
    }
    DeclarationTableComponent.prototype.getDeclarationsList = function () {
        var _this = this;
        this.declarationService.getDeclarations().subscribe(function (data) {
            _this.dataSource.data = data;
        }, function (error) {
            _this.errorService.handleError(error);
        });
    };
    DeclarationTableComponent.prototype.checkStatus = function (statusToCheck) {
        return !this.notAcceptableStatus.some(function (status) { return status === statusToCheck; });
    };
    DeclarationTableComponent.prototype.initTableColumnNames = function () {
        this.colNames = ['beschrijving', 'bedrag', 'datum', 'status'];
        this.displayedColumns = _models_Declaration__WEBPACK_IMPORTED_MODULE_3__["Declaration"].getPropertyNamesForTableComponent();
        this.displayedColumns.push('action');
    };
    DeclarationTableComponent.prototype.createClick = function () {
        this.router.navigateByUrl('/declarationcreate');
        // this.router.navigate(['/declarationcreate']);
    };
    DeclarationTableComponent.prototype.toDelete = function (declaration) {
        var _this = this;
        if (declaration.status === _models_StatusEnum__WEBPACK_IMPORTED_MODULE_7__["StatusEnum"].INPROGRESS) {
            this.errorService.unableToProcess(declaration.status);
        }
        else {
            var dialogRef = this.dialog.open(_dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_8__["MessageDialogComponent"], { data: _models_MessageCreator__WEBPACK_IMPORTED_MODULE_12__["MessageCreator"].toDelete() });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    _this.deleteDeclaration(declaration);
                }
            });
        }
    };
    DeclarationTableComponent.prototype.openDialog = function (selected) {
        var _this = this;
        var dialogRefView = this.dialog.open(_declaration_view_declaration_view_component__WEBPACK_IMPORTED_MODULE_5__["DeclarationViewComponent"], { data: selected });
        dialogRefView.afterClosed().subscribe(function (result) {
            if (result === _models_RestEnum__WEBPACK_IMPORTED_MODULE_11__["RestEnum"].delete) {
                _this.deleteDeclaration(selected);
            }
            else if (result === _models_RestEnum__WEBPACK_IMPORTED_MODULE_11__["RestEnum"].update) {
                _this.openUpdateDialog(selected);
            }
        });
    };
    DeclarationTableComponent.prototype.openUpdateDialog = function (selected) {
        var _this = this;
        var dialogRefUpdate = this.dialog.open(_declaration_update_declaration_update_component__WEBPACK_IMPORTED_MODULE_10__["DeclarationUpdateComponent"], { data: selected });
        dialogRefUpdate.afterClosed().subscribe(function (resultOfUpdate) {
            _this.getDeclarationsList();
        });
    };
    DeclarationTableComponent.prototype.deleteDeclaration = function (declaration) {
        var _this = this;
        this.declarationService.deleteDeclaration(declaration.id).subscribe(function (data) {
            _this.getDeclarationsList();
        }, function (error) {
            _this.errorService.handleError(error);
        });
    };
    // private declarationListFilter(declaration: Declaration) {
    //   this.dataSource.data = this.dataSource.data.filter(u => u !== declaration);
    // }
    DeclarationTableComponent.prototype.ngOnInit = function () {
        // this.paginator._intl.itemsPerPageLabel = 'Items per pagina:';
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.initTableColumnNames();
        this.getDeclarationsList();
    };
    DeclarationTableComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DeclarationTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DeclarationTableComponent.prototype, "paginator", void 0);
    DeclarationTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-declaration-table',
            template: __webpack_require__(/*! ./declaration-table.component.html */ "./src/app/components/declaration-table/declaration-table.component.html"),
            styles: [__webpack_require__(/*! ./declaration-table.component.css */ "./src/app/components/declaration-table/declaration-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_declaration_declaration_service__WEBPACK_IMPORTED_MODULE_2__["DeclarationService"], _services_errorhandlerservice_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], DeclarationTableComponent);
    return DeclarationTableComponent;
}());



/***/ }),

/***/ "./src/app/components/declaration-update/declaration-update.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/declaration-update/declaration-update.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".declaration-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.declaration-container > * {\n  width: 100%;\n}\n\n.dec-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.dec-full-width {\n  width: 100%;\n}\n\n.dec-button-row button,\n.dec-button-row a {\n  margin-right: 8px;\n}\n\n.myClose:hover{\n  color:red;\n}\n\n.mySave{\n  background-color: rgba(126, 63, 242, 0.91);\n  color:white;\n}\n\n.mySave:hover{\n  background-color:#7e3ff2;\n}\n\n.mat-hint{\n  color:red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9uLXVwZGF0ZS9kZWNsYXJhdGlvbi11cGRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6ImRlY2xhcmF0aW9uLXVwZGF0ZS9kZWNsYXJhdGlvbi11cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWNsYXJhdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGVjbGFyYXRpb24tY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGVjLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRlYy1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZWMtYnV0dG9uLXJvdyBidXR0b24sXG4uZGVjLWJ1dHRvbi1yb3cgYSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4ubXlDbG9zZTpob3ZlcntcbiAgY29sb3I6cmVkO1xufVxuXG4ubXlTYXZle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNiwgNjMsIDI0MiwgMC45MSk7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4ubXlTYXZlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM3ZTNmZjI7XG59XG5cbi5tYXQtaGludHtcbiAgY29sb3I6cmVkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/declaration-update/declaration-update.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/declaration-update/declaration-update.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-actions align=\"end\">\n  <mat-icon class=\"myClose\" (click)=\"close()\" matTooltip=\"sluit dit scherm\">close</mat-icon>\n</div>\n\n<h1 mat-dialog-title>Declaratie wijzigen</h1>\n\n<div class=\"mat-dialog-content\" *ngIf=\"declaration\">\n\n  <form name=\"declarationForm\" [formGroup]=\"updateForm\"\n        (ngSubmit)=\"toSave(updateForm.value)\" class=\"declaration-container\">\n\n    <mat-form-field class=\"dec-full-width\" appearance=\"outline\">\n      <mat-label>Omschrijving</mat-label>\n      <input formControlName=\"description\" matInput placeholder=\"omschrijving\"\n             id=\"description\" name=\"description\">\n      <div *ngIf=\"!(updateForm.controls.description.invalid && updateForm.controls.description.errors.lets_be_friends); else elseAction\"></div>\n    </mat-form-field>\n\n    <mat-form-field class=\"dec-full-width\" appearance=\"outline\">\n      <mat-label>Datum</mat-label>\n      <input matInput value=\"{{processDate | date}}\" disabled>\n    </mat-form-field>\n\n    <mat-form-field class=\"dec-full-width\" appearance=\"outline\">\n      <mat-label>Bedrag</mat-label>\n      <input formControlName=\"amount\" matInput #euro\n             name=\"amount\" placeholder=\"0,00\" type=\"number\">\n      <mat-hint align=\"begin\" *ngIf=\"euro.value < 0\">Vul een positief getal in</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field class=\"dec-full-width\">\n      <mat-label>Medewerker bericht (optioneel)</mat-label>\n      <input formControlName=\"empMessage\" matInput id=\"empMessage\"\n             name=\"empMessage\" placeholder=\"Vul hier een bericht in\">\n      <div *ngIf=\"!(updateForm.controls.empMessage.invalid && updateForm.controls.empMessage.errors.lets_be_friends); else elseAction\"></div>\n    </mat-form-field>\n\n    <mat-form-field class=\"dec-full-width\">\n      <mat-label>Manager bericht (optioneel)</mat-label>\n      <input formControlName=\"manMessage\" matInput id=\"manMessage\"\n             name=\"manMessage\" placeholder=\"Vul hier een bericht in\">\n            <div *ngIf=\"!(updateForm.controls.manMessage.invalid && updateForm.controls.manMessage.errors.lets_be_friends); else elseAction\"></div>\n    </mat-form-field>\n\n    <button mat-raised-button dec-button-row [disabled]=\"!updateForm.valid\" color=\"primary\">Opslaan</button>\n\n    <ng-template #elseAction>\n      <mat-hint align=\"begin\">\n        Lets be friends\n        <mat-icon matSuffix>sentiment_satisfied_alt</mat-icon>\n      </mat-hint>\n    </ng-template>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/declaration-update/declaration-update.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/declaration-update/declaration-update.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DeclarationUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationUpdateComponent", function() { return DeclarationUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_Declaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Declaration */ "./src/app/models/Declaration.ts");
/* harmony import */ var _services_errorhandlerservice_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/errorhandlerservice/error-handler.service */ "./src/app/services/errorhandlerservice/error-handler.service.ts");
/* harmony import */ var _mocks_mock_employee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mocks/mock-employee */ "./src/app/mocks/mock-employee.ts");
/* harmony import */ var _models_StatusEnum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/StatusEnum */ "./src/app/models/StatusEnum.ts");
/* harmony import */ var _dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/message-dialog/message-dialog.component */ "./src/app/dialogs/message-dialog/message-dialog.component.ts");
/* harmony import */ var _services_declaration_declaration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/declaration/declaration.service */ "./src/app/services/declaration/declaration.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_textInputValidator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../validators/textInputValidator */ "./src/app/components/validators/textInputValidator.ts");
/* harmony import */ var _models_MessageCreator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/MessageCreator */ "./src/app/models/MessageCreator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var DeclarationUpdateComponent = /** @class */ (function () {
    function DeclarationUpdateComponent(dialog, dialogRef, data, errorService, declarationService, fb) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.errorService = errorService;
        this.declarationService = declarationService;
        this.fb = fb;
        // employee = EMPLOYEE;
        this.empStatus = false;
        this.processDate = new Date();
        this.declarationId = data.id;
        this.declaration = new _models_Declaration__WEBPACK_IMPORTED_MODULE_2__["Declaration"]();
        // this.empStatus = this.declaration.manComment != null && this.declaration.manComment.length > 0;
        this.initForm();
        this.getDeclaration(data.id);
    }
    DeclarationUpdateComponent.prototype.initForm = function () {
        this.updateForm = this.fb.group({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            empMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            manMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]()
        });
        this.updateForm.controls.description.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(255), _validators_textInputValidator__WEBPACK_IMPORTED_MODULE_9__["textInputValidator"]]);
        this.updateForm.controls.amount.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0)]);
        this.updateForm.controls.empMessage.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(255), _validators_textInputValidator__WEBPACK_IMPORTED_MODULE_9__["textInputValidator"]]);
        this.updateForm.controls.manMessage.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(255), _validators_textInputValidator__WEBPACK_IMPORTED_MODULE_9__["textInputValidator"]]);
    };
    DeclarationUpdateComponent.prototype.fillInForm = function () {
        this.updateForm.controls.description.setValue(this.declaration.description);
        this.updateForm.controls.amount.setValue(this.declaration.amount);
        this.updateForm.controls.empMessage.setValue(this.declaration.empComment);
        this.updateForm.controls.manMessage.setValue(this.declaration.manComment);
    };
    DeclarationUpdateComponent.prototype.getDeclaration = function (id) {
        var _this = this;
        this.declarationService.getDeclaration(id).subscribe(function (data) {
            _this.declaration = data;
            _this.fillInForm();
            _this.declarationNotEditable = data.status === _models_StatusEnum__WEBPACK_IMPORTED_MODULE_5__["StatusEnum"].INPROGRESS || data.status === _models_StatusEnum__WEBPACK_IMPORTED_MODULE_5__["StatusEnum"].APPROVED;
            _this.declarationStatus = data.status;
        }, function (error) {
            _this.errorService.handleError(error);
        });
    };
    DeclarationUpdateComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DeclarationUpdateComponent.prototype.toSave = function (updateFormValue) {
        var _this = this;
        if (this.declarationNotEditable) {
            this.errorService.unableToProcess(this.declarationStatus);
            this.close();
        }
        else {
            if (this.updateForm.valid) {
                var dialogRefMessage = this.dialog.open(_dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MessageDialogComponent"], { data: _models_MessageCreator__WEBPACK_IMPORTED_MODULE_10__["MessageCreator"].toUpdate() });
                dialogRefMessage.afterClosed().subscribe(function (result) {
                    if (result) {
                        _this.executeDeclarationUpdate(updateFormValue);
                        _this.close();
                    }
                });
            }
        }
    };
    DeclarationUpdateComponent.prototype.executeDeclarationUpdate = function (updateFormValue) {
        var _this = this;
        var declaration = {
            id: this.declarationId,
            description: updateFormValue.description,
            date: new Date().toISOString(),
            empId: _mocks_mock_employee__WEBPACK_IMPORTED_MODULE_4__["EMPLOYEE"].id,
            status: _models_StatusEnum__WEBPACK_IMPORTED_MODULE_5__["StatusEnum"].SUBMITTED,
            amount: updateFormValue.amount,
            empComment: updateFormValue.empMessage,
            manComment: updateFormValue.manMessage,
            files: this.declaration.files
        };
        this.declarationService.updateDeclaration(declaration).subscribe(function (data) {
            // Todo met succes gewijzigd !!
        }, function (error) {
            _this.errorService.handleError(error);
        });
    };
    DeclarationUpdateComponent.prototype.ngOnInit = function () {
    };
    DeclarationUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-declaration-update',
            template: __webpack_require__(/*! ./declaration-update.component.html */ "./src/app/components/declaration-update/declaration-update.component.html"),
            styles: [__webpack_require__(/*! ./declaration-update.component.css */ "./src/app/components/declaration-update/declaration-update.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _models_Declaration__WEBPACK_IMPORTED_MODULE_2__["Declaration"], _services_errorhandlerservice_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"],
            _services_declaration_declaration_service__WEBPACK_IMPORTED_MODULE_7__["DeclarationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], DeclarationUpdateComponent);
    return DeclarationUpdateComponent;
}());



/***/ }),

/***/ "./src/app/components/declaration-view/declaration-view.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/declaration-view/declaration-view.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".declaration-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.declaration-container > * {\n  width: 100%;\n}\n\n.dec-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.dec-full-width {\n  width: 100%;\n}\n\n.dec-button-row button,\n.dec-button-row a {\n  margin-right: 8px;\n}\n\n.myClose:hover{\n  color:red;\n}\n\n.myDelete{\n  background-color: rgba(255, 0, 0, 0.8);\n  color:white;\n}\n\n.myDelete:hover{\n  background-color:red;\n}\n\n.myEdit{\n  background-color: rgba(126, 63, 242, 0.91);\n  color:white;\n}\n\n.myEdit:hover{\n  background-color:#7e3ff2;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9uLXZpZXcvZGVjbGFyYXRpb24tdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImRlY2xhcmF0aW9uLXZpZXcvZGVjbGFyYXRpb24tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlY2xhcmF0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5kZWNsYXJhdGlvbi1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZWMtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGVjLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRlYy1idXR0b24tcm93IGJ1dHRvbixcbi5kZWMtYnV0dG9uLXJvdyBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5teUNsb3NlOmhvdmVye1xuICBjb2xvcjpyZWQ7XG59XG5cbi5teURlbGV0ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4ubXlEZWxldGU6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6cmVkO1xufVxuXG4ubXlFZGl0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNiwgNjMsIDI0MiwgMC45MSk7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4ubXlFZGl0OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM3ZTNmZjI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/declaration-view/declaration-view.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/declaration-view/declaration-view.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-actions align=\"end\">\n  <mat-icon class=\"myClose\" (click)=\"close()\" matTooltip=\"sluit dit scherm\">close</mat-icon>\n</div>\n\n<h1 mat-dialog-title>Declaratie</h1>\n\n<div class=\"mat-dialog-content\" *ngIf=\"declaration\">\n\n  <mat-form-field class=\"dec-full-width\" appearance=\"outline\">\n    <mat-label>Omschrijving</mat-label>\n    <input matInput value=\"{{declaration.description}}\" disabled>\n  </mat-form-field>\n\n  <table class=\"dec-full-width\" cellspacing=\"0\">\n    <tr>\n      <td>\n        <mat-form-field class=\"dec-full-width\" appearance=\"outline\">\n          <mat-label>Voornaam</mat-label>\n          <input matInput value=\"{{employee.fname}}\" disabled>\n        </mat-form-field>\n      </td>\n      <td>\n        <mat-form-field class=\"dec-full-width\" appearance=\"outline\">\n          <mat-label>Achternaam</mat-label>\n          <input matInput value=\"{{employee.lname}}\" disabled>\n        </mat-form-field>\n      </td>\n    </tr>\n  </table>\n\n  <mat-form-field class=\"dec-full-width\" appearance=\"outline\">\n    <mat-label>Datum</mat-label>\n    <input matInput value=\"{{declaration.date | date}}\" disabled>\n  </mat-form-field>\n\n  <mat-form-field class=\"dec-full-width\" appearance=\"outline\">\n    <mat-label>Bedrag</mat-label>\n    <input matInput type=\"number\" value=\"{{declaration.amount}}\" disabled>\n  </mat-form-field>\n\n  <mat-form-field class=\"dec-full-width\">\n    <mat-label>Medewerker bericht</mat-label>\n    <input matInput value=\"{{declaration.empComment}}\" disabled>\n  </mat-form-field>\n\n  <div *ngIf=\"empStatus\">\n    <mat-form-field class=\"dec-full-width\">\n      <mat-label>Manager bericht</mat-label>\n      <input matInput value=\"{{declaration.manComment}}\" disabled>\n    </mat-form-field>\n  </div>\n</div>\n\n<table *ngIf=\"processStatus\" class=\"dec-full-width\" cellspacing=\"0\">\n  <tr>\n    <td>\n      <button mat-raised-button dec-button-row class=\"myDelete\" (click)=\"toDelete()\">\n        <mat-icon matTooltip=\"Verwijder\">remove_circle_outline</mat-icon>\n      </button>\n    </td>\n    <td>\n      <button mat-raised-button dec-button-row class=\"myEdit\" (click)=\"toEdit()\">\n        <mat-icon matTooltip=\"Wijzig\">edit</mat-icon>\n      </button>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/components/declaration-view/declaration-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/declaration-view/declaration-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: DeclarationViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationViewComponent", function() { return DeclarationViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Declaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Declaration */ "./src/app/models/Declaration.ts");
/* harmony import */ var _mocks_mock_employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mocks/mock-employee */ "./src/app/mocks/mock-employee.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_StatusEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/StatusEnum */ "./src/app/models/StatusEnum.ts");
/* harmony import */ var _dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialogs/message-dialog/message-dialog.component */ "./src/app/dialogs/message-dialog/message-dialog.component.ts");
/* harmony import */ var _services_errorhandlerservice_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/errorhandlerservice/error-handler.service */ "./src/app/services/errorhandlerservice/error-handler.service.ts");
/* harmony import */ var _models_RestEnum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/RestEnum */ "./src/app/models/RestEnum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var DeclarationViewComponent = /** @class */ (function () {
    function DeclarationViewComponent(dialog, dialogRef, data, errorService) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.errorService = errorService;
        this.employee = _mocks_mock_employee__WEBPACK_IMPORTED_MODULE_2__["EMPLOYEE"];
        this.empStatus = false;
        this.processStatus = false;
        this.declaration = data;
        this.declarationId = data.id;
        this.processStatus = data.status !== _models_StatusEnum__WEBPACK_IMPORTED_MODULE_4__["StatusEnum"].INPROGRESS && data.status !== _models_StatusEnum__WEBPACK_IMPORTED_MODULE_4__["StatusEnum"].APPROVED;
        this.declarationStatus = !this.processStatus;
        this.empStatus = this.declaration.manComment != null && this.declaration.manComment.length > 0;
    }
    DeclarationViewComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DeclarationViewComponent.prototype.toDelete = function () {
        var _this = this;
        if (this.declarationStatus) {
            this.errorService.unableToProcess(this.declaration.status);
        }
        else {
            var toDelete = {
                name: 'Bericht',
                message: 'Declaratie verwijderen?'
            };
            var dialogRefMessage = this.dialog.open(_dialogs_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_5__["MessageDialogComponent"], { data: toDelete });
            dialogRefMessage.afterClosed().subscribe(function (result) {
                if (result) {
                    _this.dialogRef.close(_models_RestEnum__WEBPACK_IMPORTED_MODULE_7__["RestEnum"].delete);
                }
            });
        }
    };
    DeclarationViewComponent.prototype.toEdit = function () {
        if (this.declarationStatus) {
            this.errorService.unableToProcess(this.declaration.status);
        }
        else {
            this.dialogRef.close(_models_RestEnum__WEBPACK_IMPORTED_MODULE_7__["RestEnum"].update);
        }
    };
    DeclarationViewComponent.prototype.ngOnInit = function () {
    };
    DeclarationViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-declaration-view',
            template: __webpack_require__(/*! ./declaration-view.component.html */ "./src/app/components/declaration-view/declaration-view.component.html"),
            styles: [__webpack_require__(/*! ./declaration-view.component.css */ "./src/app/components/declaration-view/declaration-view.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _models_Declaration__WEBPACK_IMPORTED_MODULE_1__["Declaration"], _services_errorhandlerservice_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"]])
    ], DeclarationViewComponent);
    return DeclarationViewComponent;
}());



/***/ }),

/***/ "./src/app/components/declarationfile-upload/declarationfile-upload.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/declarationfile-upload/declarationfile-upload.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWNsYXJhdGlvbmZpbGUtdXBsb2FkL2RlY2xhcmF0aW9uZmlsZS11cGxvYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/declarationfile-upload/declarationfile-upload.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/declarationfile-upload/declarationfile-upload.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  declarationfile-upload works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/declarationfile-upload/declarationfile-upload.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/declarationfile-upload/declarationfile-upload.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DeclarationfileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationfileUploadComponent", function() { return DeclarationfileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeclarationfileUploadComponent = /** @class */ (function () {
    function DeclarationfileUploadComponent() {
    }
    DeclarationfileUploadComponent.prototype.ngOnInit = function () {
    };
    DeclarationfileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-declarationfile-upload',
            template: __webpack_require__(/*! ./declarationfile-upload.component.html */ "./src/app/components/declarationfile-upload/declarationfile-upload.component.html"),
            styles: [__webpack_require__(/*! ./declarationfile-upload.component.css */ "./src/app/components/declarationfile-upload/declarationfile-upload.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeclarationfileUploadComponent);
    return DeclarationfileUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/validators/textInputValidator.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/validators/textInputValidator.ts ***!
  \*************************************************************/
/*! exports provided: textInputValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInputValidator", function() { return textInputValidator; });
function textInputValidator(control) {
    var valid = /(\b)(on\S+)(\s*)=|javascript|(<\s*)(\/*)script/.test(control.value);
    return !valid ? null : { lets_be_friends: { valid: false, value: control.value } };
}


/***/ }),

/***/ "./src/app/dialogs/error-dialog/error-dialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dialogs/error-dialog/error-dialog.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9kaWFsb2dzL2Vycm9yLWRpYWxvZy9lcnJvci1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dialogs/error-dialog/error-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/error-dialog/error-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 mat-dialog-title>{{data.name}}</h1>\n  <mat-dialog-content>{{data.message}}</mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-raised-button color=\"warn\" (click)=\"closeDialog()\">OK</button>\n  </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/error-dialog/error-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/error-dialog/error-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: ErrorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return ErrorDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ErrorDialogComponent = /** @class */ (function () {
    function ErrorDialogComponent(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.closeDialog = function () {
            _this.dialogRef.close();
        };
    }
    ErrorDialogComponent.prototype.ngOnInit = function () {
    };
    ErrorDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-dialog',
            template: __webpack_require__(/*! ./error-dialog.component.html */ "./src/app/dialogs/error-dialog/error-dialog.component.html"),
            styles: [__webpack_require__(/*! ./error-dialog.component.css */ "./src/app/dialogs/error-dialog/error-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/message-dialog/message-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/message-dialog/message-dialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9kaWFsb2dzL21lc3NhZ2UtZGlhbG9nL21lc3NhZ2UtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dialogs/message-dialog/message-dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/message-dialog/message-dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 mat-dialog-title>{{data.name}}</h1>\n  <mat-dialog-content><h3>{{data.message}}</h3></mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-raised-button (click)=\"closeDialog()\">Nee</button>\n    <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"confirmationClick()\">Ja</button>\n  </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/message-dialog/message-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/message-dialog/message-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: MessageDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDialogComponent", function() { return MessageDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MessageDialogComponent = /** @class */ (function () {
    function MessageDialogComponent(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.statusOfConfirmation = true;
        this.closeDialog = function () {
            _this.dialogRef.close();
        };
        this.confirmationClick = function () {
            return _this.statusOfConfirmation;
        };
    }
    MessageDialogComponent.prototype.ngOnInit = function () {
    };
    MessageDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-dialog',
            template: __webpack_require__(/*! ./message-dialog.component.html */ "./src/app/dialogs/message-dialog/message-dialog.component.html"),
            styles: [__webpack_require__(/*! ./message-dialog.component.css */ "./src/app/dialogs/message-dialog/message-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], MessageDialogComponent);
    return MessageDialogComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"]
            ],
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/mocks/mock-employee.ts":
/*!****************************************!*\
  !*** ./src/app/mocks/mock-employee.ts ***!
  \****************************************/
/*! exports provided: EMPLOYEE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPLOYEE", function() { return EMPLOYEE; });
var EMPLOYEE = { id: 1, fname: 'Donald', lname: 'Trump' };


/***/ }),

/***/ "./src/app/models/Declaration.ts":
/*!***************************************!*\
  !*** ./src/app/models/Declaration.ts ***!
  \***************************************/
/*! exports provided: Declaration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Declaration", function() { return Declaration; });
/* harmony import */ var _StatusEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatusEnum */ "./src/app/models/StatusEnum.ts");

var Declaration = /** @class */ (function () {
    function Declaration() {
    }
    /**
     * Stop hier de gewenste properties die men wilt zien in de table component
     */
    Declaration.getPropertyNamesForTableComponent = function () {
        return Object.getOwnPropertyNames({ description: '', amount: 0,
            date: '', status: _StatusEnum__WEBPACK_IMPORTED_MODULE_0__["StatusEnum"].SUBMITTED });
    };
    return Declaration;
}());



/***/ }),

/***/ "./src/app/models/MessageCreator.ts":
/*!******************************************!*\
  !*** ./src/app/models/MessageCreator.ts ***!
  \******************************************/
/*! exports provided: MessageCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCreator", function() { return MessageCreator; });
var MessageCreator = /** @class */ (function () {
    function MessageCreator() {
    }
    MessageCreator.toUpdate = function () {
        var toUpdate = {
            name: 'Bericht',
            message: 'Declaratie wijzigen?'
        };
        return toUpdate;
    };
    MessageCreator.toDelete = function () {
        var toDelete = {
            name: 'Bericht',
            message: 'Declaratie verwijderen?'
        };
    };
    return MessageCreator;
}());



/***/ }),

/***/ "./src/app/models/RestEnum.ts":
/*!************************************!*\
  !*** ./src/app/models/RestEnum.ts ***!
  \************************************/
/*! exports provided: RestEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestEnum", function() { return RestEnum; });
var RestEnum;
(function (RestEnum) {
    RestEnum["create"] = "create";
    RestEnum["read"] = "read";
    RestEnum["update"] = "update";
    RestEnum["delete"] = "delete";
    RestEnum["all"] = "all";
})(RestEnum || (RestEnum = {}));


/***/ }),

/***/ "./src/app/models/StatusEnum.ts":
/*!**************************************!*\
  !*** ./src/app/models/StatusEnum.ts ***!
  \**************************************/
/*! exports provided: StatusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusEnum", function() { return StatusEnum; });
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["INPROGRESS"] = "INPROGRESS";
    StatusEnum["SUBMITTED"] = "SUBMITTED";
    StatusEnum["REJECTED"] = "REJECTED";
    StatusEnum["APPROVED"] = "APPROVED";
})(StatusEnum || (StatusEnum = {}));


/***/ }),

/***/ "./src/app/services/declaration/declaration.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/declaration/declaration.service.ts ***!
  \*************************************************************/
/*! exports provided: DeclarationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationService", function() { return DeclarationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeclarationService = /** @class */ (function () {
    function DeclarationService(http) {
        this.http = http;
    }
    DeclarationService.prototype.addDeclaration = function (toSave) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAddress + '/', toSave, this.generateHeaders());
    };
    DeclarationService.prototype.getDeclaration = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAddress + '/read/' + id);
    };
    DeclarationService.prototype.updateDeclaration = function (toUpdate) {
        // const ss: DeclarationFile [] = [
        //   {id: 1,
        //   file: [] = [1, 2, 3],
        //   fileName: 'lolz.jpeg'},
        //   {id: 2,
        //   file: [] = [1, 2, 3],
        //   fileName: 'lolz.jpeg'}
        // ];
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAddress + '/' + toUpdate.id, toUpdate, this.generateHeaders());
    };
    DeclarationService.prototype.deleteDeclaration = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAddress + '/delete/' + id);
    };
    DeclarationService.prototype.getDeclarations = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAddress);
    };
    DeclarationService.prototype.generateHeaders = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    };
    DeclarationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DeclarationService);
    return DeclarationService;
}());



/***/ }),

/***/ "./src/app/services/errorhandlerservice/error-handler.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/errorhandlerservice/error-handler.service.ts ***!
  \***********************************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/error-dialog/error-dialog.component */ "./src/app/dialogs/error-dialog/error-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(dialog) {
        this.dialog = dialog;
        this.errorName = 'Error message';
    }
    ErrorHandlerService.prototype.handleError = function (error) {
        if (error.status === 500) {
            this.handle500Error(error);
        }
        else if (error.status === 404) {
            this.handle404Error(error);
        }
        else if (error.status === 400) {
            this.handle400Error(error);
        }
        else if (error.status === 0) {
            this.handleZeroError(error);
        }
        else {
            this.handleOtherError(error);
        }
    };
    ErrorHandlerService.prototype.handle500Error = function (error) {
        this.createErrorMessage(error);
        this.dialog.open(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ErrorDialogComponent"], { data: this.dialogConfig });
    };
    ErrorHandlerService.prototype.handle404Error = function (error) {
        this.createErrorMessage(error);
        this.dialog.open(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ErrorDialogComponent"], { data: this.dialogConfig });
    };
    ErrorHandlerService.prototype.handle400Error = function (error) {
        this.createErrorMessage(error);
        this.dialogConfig.message = 'Declaratie is niet verwerkbaar';
        this.dialog.open(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ErrorDialogComponent"], { data: this.dialogConfig });
    };
    ErrorHandlerService.prototype.handleZeroError = function (error) {
        this.createErrorMessage(error);
        this.dialogConfig.message = 'Geen verbinding met de declaratie service';
        this.dialog.open(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ErrorDialogComponent"], { data: this.dialogConfig });
    };
    ErrorHandlerService.prototype.unableToProcess = function (status) {
        this.dialogConfig = {
            statusCode: 400,
            name: this.errorName,
            message: 'Declaratie is ' + status,
        };
        this.dialog.open(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ErrorDialogComponent"], { data: this.dialogConfig });
    };
    ErrorHandlerService.prototype.handleOtherError = function (error) {
        this.createErrorMessage(error);
        this.dialog.open(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ErrorDialogComponent"], { data: this.dialogConfig });
    };
    ErrorHandlerService.prototype.createErrorMessage = function (error) {
        this.dialogConfig = error.error ? {
            statusCode: error.error['status'],
            name: this.errorName,
            message: error.error['message'],
        } : {
            statusCode: error.status,
            name: this.errorName,
            message: error.statusText,
        };
    };
    ErrorHandlerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    urlAddress: 'http://localhost:8080/api/declarations'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/koray/Desktop/GAME/declaratie-service/declaratie-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map