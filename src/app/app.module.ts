import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { DndModule } from '@beyerleinf/ngx-dnd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './shared/components';
import {
  SimpleSortingComponent,
  SimpleSortingCopyComponent,
  MultiSortingComponent,
  EmbeddedSortingComponent,
  RecycleSortingComponent,
} from './sorting';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SimpleSortingComponent,
    SimpleSortingCopyComponent,
    MultiSortingComponent,
    EmbeddedSortingComponent,
    RecycleSortingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    DndModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
