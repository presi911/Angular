import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from 'src/app/shared/order-detail.service';
import { OrderDetail } from 'src/app/shared/order-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-detail-list',
  templateUrl: './order-detail-list.component.html',
  styles: [
  ]
})
export class OrderDetailListComponent implements OnInit {

  constructor(public service: OrderDetailService, public toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList()
  }

  populateForm(pd: OrderDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PDId) {
    if (confirm('Are you sure to delete ?')) {
      this.service.deleteOrderDetail(PDId)
        .subscribe(res => {
          //debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Order Detail Register');
        },
          err => {
          //debugger;
            console.log(err);
          })
     }
  }
}
