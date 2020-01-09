import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './products/products.component';
import { ManagementRoutingModule } from './management-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../search.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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
        SearchPipe
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