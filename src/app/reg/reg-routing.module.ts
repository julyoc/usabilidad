import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegComponent } from './reg/reg.component';
import { DirComponent } from './dir/dir.component';
import { ContactComponent } from './contact/contact.component';
import { SetComponent } from './set/set.component';
import { AdminComponent } from './admin/admin.component';
import { ConyugeComponent } from './conyuge/conyuge.component';

/**
 * guarda las rutas de las mutaciones
 * @constant routes
 */
const routes: Routes = [
    {
        path: '',
        component: RegComponent,
    },
    {
        path: 'dir',
        component: DirComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'set',
        component: SetComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'conyuge',
        component: ConyugeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegRoutingModule { }