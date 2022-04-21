import { Component, Inject, OnInit } from '@angular/core';
import { DetailRouteConfig, SlotTrakAppDetailRouteService } from '@volante/slottrak-app';
import { MACHINE_DETAIL_ROUTE_SERVICE } from '@volante/slottrak-machines/src/lib/slottrak-machines-services';
@Component({
  selector: 'slottrak-machines-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  readonly detailRoutes: DetailRouteConfig[]

  constructor(@Inject(MACHINE_DETAIL_ROUTE_SERVICE) detailRouteService: SlotTrakAppDetailRouteService) {
    this.detailRoutes = detailRouteService.detailRoutes
  }

  ngOnInit(): void {

  }
}
