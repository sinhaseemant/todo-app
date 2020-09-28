import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { TodoInputComponent } from './todo/todo-input/todo-input.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
