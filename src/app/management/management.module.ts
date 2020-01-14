import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { ManagementRoutingModule } from './management-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../search.pipe';
import { ProductsComponent } from './products/products.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ManagementRoutingModule,
        NgxPaginationModule
        //BaseRoutingModule,
        //BsDropdownModule.forRoot(),
        //TabsModule,
        //CarouselModule.forRoot(),
        //CollapseModule.forRoot(),
        //PaginationModule.forRoot(),
        //PopoverModule.forRoot(),
        //ProgressbarModule.forRoot(),
        //TooltipModule.forRoot()
      ],
      declarations: [
        ProductsComponent,
        SearchPipe,
        ProductCreateComponent,
        ProductEditComponent
        //CardsComponent,
        //FormsComponent,
        //SwitchesComponent,
        //TablesComponent,
        //TabsComponent,
        //CarouselsComponent,
        //CollapsesComponent,
        //PaginationsComponent,
        //PopoversComponent,
        //ProgressComponent,
        //TooltipsComponent,
        //NavbarsComponent
      ]
})

export class ManagementModule { }