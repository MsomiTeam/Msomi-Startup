webpackJsonp([8],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupmembers__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupmembersPageModule", function() { return GroupmembersPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupmembersPageModule = (function () {
    function GroupmembersPageModule() {
    }
    return GroupmembersPageModule;
}());
GroupmembersPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__groupmembers__["a" /* GroupmembersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__groupmembers__["a" /* GroupmembersPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__groupmembers__["a" /* GroupmembersPage */]
        ]
    })
], GroupmembersPageModule);

//# sourceMappingURL=groupmembers.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__ = __webpack_require__(209);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupmembersPage; });
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
 * Generated class for the GroupmembersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GroupmembersPage = (function () {
    function GroupmembersPage(navCtrl, navParams, groupservice, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupservice = groupservice;
        this.events = events;
    }
    GroupmembersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.groupmembers = this.groupservice.currentgroup;
        this.tempgrpmembers = this.groupmembers;
        this.events.subscribe('gotintogroup', function () {
            _this.groupmembers = _this.groupservice.currentgroup;
            _this.tempgrpmembers = _this.groupmembers;
        });
    };
    GroupmembersPage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe('gotintogroups');
    };
    GroupmembersPage.prototype.searchuser = function (searchbar) {
        var tempmembers = this.tempgrpmembers;
        var q = searchbar.target.value;
        if (q.trim() === '') {
            this.groupmembers = this.tempgrpmembers;
            return;
        }
        tempmembers = tempmembers.filter(function (v) {
            if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        });
        this.groupmembers = tempmembers;
    };
    GroupmembersPage.prototype.removemember = function (member) {
        this.groupservice.deletemember(member);
    };
    return GroupmembersPage;
}());
GroupmembersPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-groupmembers',template:/*ion-inline-start:"/home/geek/Desktop/Msomi/clone/ionic3chat/src/pages/groupmembers/groupmembers.html"*/'<!--\n  Generated template for the GroupmembersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="hcolor">\n    <ion-title>Group Members</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar [(ngModel)]="searchstring" (input)="searchuser($event)"\n                  placeholder="Search">\n  </ion-searchbar>\n<ion-list no-lines>\n  <ion-item-sliding *ngFor="let key of groupmembers">\n    <ion-item>\n      <ion-avatar item-left>\n        <img src="{{key.photoURL}}">\n      </ion-avatar>\n      <h2>{{key.displayName}}</h2>\n    </ion-item>\n    <ion-item-options slide="left">\n      <button ion-button color="danger" (click)="removemember(key)">\n        <ion-icon name="trash"></ion-icon>\n        Remove\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/geek/Desktop/Msomi/clone/ionic3chat/src/pages/groupmembers/groupmembers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__["a" /* GroupsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], GroupmembersPage);

//# sourceMappingURL=groupmembers.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map