import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from '../../shared/components/search/search.component';
import { UserResultComponent } from 'src/app/components/search-page/serach-results/user-result/user-result.component';
import { SerachResultsComponent } from 'src/app/components/search-page/serach-results/serach-results.component';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { SearchPageComponent } from './search-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent
  }
];

@NgModule({
  declarations: [
    SearchComponent,
    UserResultComponent,
    SerachResultsComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataViewModule,
    PanelModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchPageModule {}
