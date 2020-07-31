import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {OrderDetailService} from './shared/order-detail.service'
import { AppComponent } from './app.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderDetailComponent } from './order-details/order-detail/order-detail.component';
import { OrderDetailListComponent } from './order-details/order-detail-list/order-detail-list.component';
import { FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PayuComponent } from './order-details/payu/payu.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailsComponent,
    OrderDetailComponent,
    OrderDetailListComponent,
    PayuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [OrderDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
