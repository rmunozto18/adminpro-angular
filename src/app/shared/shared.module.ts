import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';//este modulo incluye el uso de los ngIf ngFor
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NotfoundpageComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NotfoundpageComponent
    ]
})
export class SharedModule {}