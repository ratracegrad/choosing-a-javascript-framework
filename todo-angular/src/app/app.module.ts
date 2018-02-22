import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDataService } from './todo-data.service';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFormComponent } from './todo-list-form/todo-list-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
