import { OrderDetailService } from './../../shared/order-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styles: []
})
export class OrderDetailComponent implements OnInit {

  constructor( public service: OrderDetailService, 
    private toastr: ToastrService) { }
  

  
  ngOnInit() {
    
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      PDId: 0,
      Nombre: '',
      Id: '',
      Email: '',
      DireccionEntrega: '',
      Telefono: '',
      Ciudad: ''
    }  
  }
  
  onSubmit(form: NgForm) {
    if (this.service.formData.PDId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postOrderDetail().subscribe(
      res => {
        //debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Order Detail Register');
        this.service.refreshList();
      },
      err => {
        //debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putOrderDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Update successfully', 'Order Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}