import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './products/products.component';
import { ManagementRoutingModule } from './management-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ManagementRoutingModule
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
        ProductsComponent
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