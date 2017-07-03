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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
var PEOPLE = [
    { id: 1, name: 'Vinh', height: 170, weight: 50 },
    { id: 2, name: 'Tuan', height: 180, weight: 50 },
    { id: 3, name: 'Tung', height: 180, weight: 50 }
];
var PeopleService = (function () {
    function PeopleService(http) {
        this.http = http;
        this.baseUrl = 'http://swapi.co/api';
    }
    PeopleService.prototype.getAll = function () {
        var people$ = this.http
            .get(this.baseUrl + "/people", { headers: this.getHeaders() })
            .map(mapPersons);
        // .catch(function(err){ console.error(err); return err; });
        return people$;
    };
    PeopleService.prototype.get = function (id) {
        var person$ = this.http
            .get(this.baseUrl + "/people/" + id, { headers: this.getHeaders() })
            .map(mapPerson)
            .catch(handleError);
        return person$;
    };
    PeopleService.prototype.save = function (person) {
        return this.http
            .put(this.baseUrl + "/people/" + person.id, JSON.stringify(person), { headers: this.getHeaders() });
    };
    PeopleService.prototype.clone = function (object) {
        return JSON.parse(JSON.stringify(object));
    };
    PeopleService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    PeopleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PeopleService);
    return PeopleService;
}());
exports.PeopleService = PeopleService;
function mapPersons(response) {
    return response.json().results.map(toPerson);
}
function mapPerson(response) {
    return toPerson(response.json());
}
function toPerson(r) {
    var person = ({
        id: extractId(r),
        url: r.url,
        name: r.name,
        weight: r.mass,
        height: r.height,
    });
    //console.log('Parsed person:', person);
    return person;
}
function extractId(personData) {
    var extractedId = personData.url.replace('http://swapi.co/api/people/', '').replace('/', '');
    return parseInt(extractedId);
}
function handleError(error) {
    var errorMsg = (error && error.message) || 'Other message';
    return Rx_1.Observable.throw(errorMsg);
}
//# sourceMappingURL=people.service.js.map