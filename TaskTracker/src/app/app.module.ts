import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoTasksComponent } from './todo-tasks/todo-tasks.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule} from '@angular/material/button'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';  
import {MatToolbarModule} from '@angular/material/toolbar'; 

import { environment } from '../environments/environment'
@NgModule({
  declarations: [
    AppComponent,
    TodoTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
