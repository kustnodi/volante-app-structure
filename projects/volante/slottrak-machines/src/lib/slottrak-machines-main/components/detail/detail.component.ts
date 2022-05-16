import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  DetailRouteConfig,
  SlotTrakAppDetailRouteService,
} from '@volante/slottrak-app';
import {
  MachinesService,
  MACHINE_DETAIL_ROUTE_SERVICE,
} from '@volante/slottrak-machines/src/lib/slottrak-machines-services';
@Component({
  selector: 'slottrak-machines-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, OnDestroy {
  activeId = 1;
  query = {
    startDate: '',
    endDate: '',
  };
  date: any;
  id: any;
  search: any = '';
  searchText: any;
  mealLogs: any = [];

  mealLogDisable = true;
  public machineId: number;
  meallogReasonQuery: any;
  mealLogReasons: any = [];
  OpenedDate: any;
  ClosedDate: any;
  public machineDetail: any;

  public machineConfiguration: any;
  mealLogForm: any;
  hide = 'true';
  form: Form;
  mealLog: any;
  splitUrl: any;
  reasonList: any[] = [];
  machineIdList: any[] = [];
  mode: any = {};
  isInited: boolean = false;
  private _detailRoutes: DetailRouteConfig[] = [];

  constructor(
    @Inject(MACHINE_DETAIL_ROUTE_SERVICE)
    readonly detailRouteService: SlotTrakAppDetailRouteService,
    private route: ActivatedRoute,
    private machinesService: MachinesService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.machineId = Number(params.id);
      this.machinesService.getItem(this.machineId).subscribe((response) => {
        this.machineDetail = response;
        this.machineConfiguration =
          this.machineDetail.MachineChanges[
            this.machineDetail.MachineChanges.length - 1
          ].MachineConfiguration;
      });
    });
  }

  ngOnDestroy(): void {}
  goback() {
    this.router.navigate(['/machines']);
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' })
      .result.then(
        (result) => {},
        (reason) => {}
      );
  }
  closeModal() {
    this.modalService.dismissAll();
  }
}
