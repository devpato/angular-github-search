import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from '../../shared/components/search/search.component';
import { UserResultComponent } from 'src/app/components/search-page/serach-results/user-result/user-result.component';
import { SerachResultsComponent } from 'src/app/components/search-page/serach-results/serach-results.component';
import { SearchPageComponent } from './search-page.component';
import { SearchSidebarComponent } from './search-sidebar/search-sidebar.component';
import { ProfileComponent } from './search-sidebar/profile/profile.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReposComponent } from './tabs/repos/repos.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { PrimengModule } from 'src/app/shared/modules/primeng.module';

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
    SearchPageComponent,
    SearchSidebarComponent,
    ProfileComponent,
    TabsComponent,
    ReposComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchPageModule {}
