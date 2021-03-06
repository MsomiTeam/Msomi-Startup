webpackJsonp([4],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passwordreset__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordresetPageModule", function() { return PasswordresetPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordresetPageModule = (function () {
    function PasswordresetPageModule() {
    }
    return PasswordresetPageModule;
}());
PasswordresetPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__passwordreset__["a" /* PasswordresetPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__passwordreset__["a" /* PasswordresetPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__passwordreset__["a" /* PasswordresetPage */]
        ]
    })
], PasswordresetPageModule);

//# sourceMappingURL=passwordreset.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordresetPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PasswordresetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PasswordresetPage = (function () {
    function PasswordresetPage(navCtrl, navParams, userservice, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.alertCtrl = alertCtrl;
    }
    PasswordresetPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PasswordresetPage');
    };
    PasswordresetPage.prototype.reset = function () {
        var alert = this.alertCtrl.create({
            buttons: ['Ok']
        });
        this.userservice.passwordreset(this.email).then(function (res) {
            if (res.success) {
                alert.setTitle('Email Sent');
                alert.setSubTitle('Please follow the instructions in the email to reset your password');
            }
        }).catch(function (err) {
            alert.setTitle('Failed');
            alert.setSubTitle(err);
        });
    };
    PasswordresetPage.prototype.goback = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    return PasswordresetPage;
}());
PasswordresetPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-passwordreset',template:/*ion-inline-start:"/home/geek/Desktop/Msomi/clone/ionic3chat/src/pages/passwordreset/passwordreset.html"*/'<!--\n  Generated template for the PasswordresetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content class="background">\n<ion-card>\n  <ion-card-header>\n    Password Reset\n  </ion-card-header>\n  <ion-card-content>\n    <ion-list >\n      <ion-item>\n          <ion-input type="email" [(ngModel)]="email" placeholder="Email"></ion-input>\n      </ion-item>\n      <button ion-button block round outline color="light" (click)="reset()">Reset my Password</button>\n      <button ion-button full clear color="light" (click)="goback()">Go Back</button>\n    </ion-list>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/geek/Desktop/Msomi/clone/ionic3chat/src/pages/passwordreset/passwordreset.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* AlertController */]])
], PasswordresetPage);

//# sourceMappingURL=passwordreset.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map