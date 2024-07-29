import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivateComponent } from './private/private.component';
import { PrivateDetailsComponent } from './private/private-details/private-details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'private',
        children: [
            {
                path:'',
                component: PrivateComponent
            },
            {
                path: ':id',
                component: PrivateDetailsComponent
            }
        ]
    }
];
