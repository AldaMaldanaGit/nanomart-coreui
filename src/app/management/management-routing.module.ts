import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

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
            },
            {
                path: 'product-create',
                component: ProductCreateComponent,
                data: {
                    title: 'Product Create'
                }
            },
            {
                path: 'product-edit/:id',
                component: ProductEditComponent,
                data: {
                    title: 'Product Edit'
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