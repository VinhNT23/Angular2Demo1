"use strict";
/**
 * Created by davidvinhit on 5/31/2017.
 */
var router_1 = require('@angular/router');
var people_list_component_1 = require('./people-list.component');
var person_details_component_1 = require('./person-details.component');
var person_component_1 = require('./+person/person.component');
var routes = [
    {
        path: 'persons',
        children: [
            {
                path: '',
                component: people_list_component_1.PeopleListComponent,
            },
            {
                path: 'detail/:id',
                component: person_details_component_1.PersonDetailsComponent
            },
            {
                path: 'list',
                component: person_component_1.PersonComponent
            },
        ]
    },
    {
        path: '',
        redirectTo: '/persons',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map