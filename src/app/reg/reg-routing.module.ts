import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegComponent } from './reg/reg.component';
import { DirComponent } from './dir/dir.component';
import { ContactComponent } from './contact/contact.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegRoutingModule { }