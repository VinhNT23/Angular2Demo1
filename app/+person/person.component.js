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
 * Created by davidvinhit on 6/28/2017.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
// Services
var people_service_1 = require('../people.service');
// Components
var angular_datatables_directive_1 = require('../shared/modules/datatables/angular-datatables/angular-datatables.directive');
// Models
var datatableOptions_model_1 = require('../shared/models/datatableOptions.model');
var PersonComponent = (function () {
    function PersonComponent(_peopleService) {
        this._peopleService = _peopleService;
        this.dtOptions = {};
        this.dtInstance = {};
        // empty
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.dtOptions = new datatableOptions_model_1.DataTableOptions([
            {
                title: 'Id', data: 'id'
            },
            {
                title: 'Name', data: 'name'
            },
            {
                title: 'Height', data: 'height', name: 'height',
            },
            {
                title: 'Weight', data: 'weight'
            }
        ], {
            ajax: this.serverData.bind(this),
            dom: 'tlp',
            ordering: false,
        });
    };
    PersonComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // get instance of datatables
        this.datatableEl.dtInstance.then(function (dtInstance) {
            _this.dtInstance = dtInstance;
        });
    };
    PersonComponent.prototype.serverData = function (aoData, fnCallback, oSettings) {
        var self = this;
        var page = aoData.length ? (aoData.start / aoData.length) + 1 : 0;
        var params = new http_1.URLSearchParams();
        params.set('page', page.toString());
        // Then just call your service to get the records from server side
        self._peopleService.getAll(params)
            .subscribe(function (res) {
            console.log('list: ' + res);
            var records = {
                recordsTotal: res.totalCount,
                recordsFiltered: res.totalCount,
                data: res
            };
            /*fnCallback({
              data: res
            });*/
            console.log(records);
            fnCallback(records);
        });
    };
    __decorate([
        core_1.ViewChild(angular_datatables_directive_1.DataTableDirective), 
        __metadata('design:type', angular_datatables_directive_1.DataTableDirective)
    ], PersonComponent.prototype, "datatableEl", void 0);
    PersonComponent = __decorate([
        core_1.Component({
            selector: 'person-list',
            templateUrl: './app/+person/person.template.html',
            styleUrls: [],
            providers: [
                people_service_1.PeopleService
            ]
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map