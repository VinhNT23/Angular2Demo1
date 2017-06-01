/**
 * Created by davidvinhit on 5/31/2017.
 */
import {Routes, RouterModule} from '@angular/router';
import {PeopleListComponent} from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';

const routes: Routes = [
    {
      path: 'persons',
      children: [
        {
          path: '',
          component: PeopleListComponent,
        },
        {
          path: ':id',
          component: PersonDetailsComponent
        }
      ]
    },
    {
      path: '',
      redirectTo: '/persons',
      pathMatch: 'full'
      //component: PeopleListComponent,
    }
  ]
  ;

export const routing = RouterModule.forRoot(routes);

