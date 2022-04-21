import { Component, Inject, Injector, OnInit } from '@angular/core';
import { DetailRouteConfig } from '@volante/slottrak-app';
import { MACHINE_DETAIL_ROUTES } from '@volante/slottrak-machines/src/lib/slottrak-machines-services';
@Component({
  selector: 'slottrak-machines-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(@Inject(MACHINE_DETAIL_ROUTES) readonly detailRoutes: DetailRouteConfig[], injector: Injector) {
  }

  ngOnInit(): void {

  }
}
