/**
 * Created by davidvinhit on 6/13/2017.
 */
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
var core_1 = require('@angular/core');
var angular_datatables_1 = require('./angular-datatables');
var CustomDataTablesModule = (function () {
    function CustomDataTablesModule() {
    }
    CustomDataTablesModule = __decorate([
        core_1.NgModule({
            declarations: [angular_datatables_1.DataTableDirective],
            imports: [angular_datatables_1.DataTablesModule],
            exports: [angular_datatables_1.DataTableDirective,],
        }), 
        __metadata('design:paramtypes', [])
    ], CustomDataTablesModule);
    return CustomDataTablesModule;
}());
exports.CustomDataTablesModule = CustomDataTablesModule;
//# sourceMappingURL=datatables.module.js.map