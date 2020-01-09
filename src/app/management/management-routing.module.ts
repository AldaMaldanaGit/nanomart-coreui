import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Management'
        },
        children: [
            {
              path: '',
              redirectTo: 'products'
            },
            {
                path: 'products',
                component: ProductsComponent,
                data: {
                    title: 'Products'
                }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagementRoutingModule {}