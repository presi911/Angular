import { OrderDetail } from './order-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  formData: OrderDetail;
  readonly rootURL = 'http://localhost:50639/api';
  list : OrderDetail[];

  constructor(private http: HttpClient) { }

  postOrderDetail() {
    return this.http.post(this.rootURL + '/OrderDetail', this.formData);
  }
  putOrderDetail() {
    return this.http.put(this.rootURL + '/OrderDetail/'+ this.formData.PDId, this.formData);
  }
  deleteOrderDetail(id) {
    return this.http.delete(this.rootURL + '/OrderDetail/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/OrderDetail')
    .toPromise()
    .then(res => this.list = res as OrderDetail[]);
  }
}
