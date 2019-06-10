import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  SimpleSortingComponent,
  SimpleSortingCopyComponent,
  MultiSortingComponent,
  EmbeddedSortingComponent,
  RecycleSortingComponent,
} from './sorting';

const routes: Routes = [
  {
    path: 'sorting',
    children: [
      { path: 'simple', component: SimpleSortingComponent },
      { path: 'simple-copy', component: SimpleSortingCopyComponent },
      { path: 'multi', component: MultiSortingComponent },
      { path: 'embedded', component: EmbeddedSortingComponent },
      { path: 'recycle', component: RecycleSortingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
