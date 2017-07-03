"use strict";
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
 * Created by davidvinhit on 5/30/2017.
 */
var core_1 = require('@angular/core');
var people_service_1 = require('./people.service');
var PeopleListComponent = (function () {
    function PeopleListComponent(_peopleService) {
        this._peopleService = _peopleService;
        this.people = [];
        this.errorMessage = '';
    }
    PeopleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peopleService.getAll().subscribe(function (p) { return _this.people = p; }, function (e) { return _this.errorMessage = e; });
    };
    PeopleListComponent = __decorate([
        core_1.Component({
            selector: 'people-list',
            template: "\n    <ul>\n      <li *ngFor=\"let person of people\">\n        <a href=\"#\" [routerLink]=\"['/persons/detail',person.id]\">\n          {{person.name}}\n        </a>\n      </li>\n    </ul>\n    <section *ngIf=\"errorMessage\">\n      {{errorMessage}}\n    </section>\n  "
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService])
    ], PeopleListComponent);
    return PeopleListComponent;
}());
exports.PeopleListComponent = PeopleListComponent;
//# sourceMappingURL=people-list.component.js.map