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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var people_service_1 = require('./people.service');
var people_list_component_1 = require('./people-list.component');
var person_details_component_1 = require('./person-details.component');
var person_component_1 = require('./+person/person.component');
var http_1 = require('@angular/http');
var angular_datatables_module_1 = require('./shared/modules/datatables/angular-datatables/angular-datatables.module');
var app_routes_1 = require('./app.routes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing, forms_1.FormsModule, http_1.HttpModule, angular_datatables_module_1.DataTablesModule],
            declarations: [app_component_1.AppComponent, people_list_component_1.PeopleListComponent, person_details_component_1.PersonDetailsComponent, person_component_1.PersonComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [people_service_1.PeopleService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map