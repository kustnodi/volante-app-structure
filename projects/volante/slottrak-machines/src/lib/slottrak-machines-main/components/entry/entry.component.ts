import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MachinesService } from '@volante/slottrak-machines/src/lib/slottrak-machines-services';

@Component({
  selector: 'slottrak-machines-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  query: any;
  machinelogs: any;
  totalRecords: any;
  offset: any;
  disabled = true;
  gridCheckedRows: any = [];
  disableCloneAndConvert = true;
  columns = [
    {
      text: 'Serial Number',
      field: 'SerialNumber',
      type: 'input',
      placeholder: 'Serial Number',
      class: 'filter',
      id: 'serialNumber',
      ngModel: 'SerialNumberContains',
      onkeyup: 'SerialNumberContains',
    },
    {
      text: 'Manufacturer',
      field: 'ManufacturerName',
      type: 'input',
      placeholder: 'Manufacturer',
      class: 'filter',
      id: 'Manufacturer',
      ngModel: 'ManufacturerNameContains',
      onkeyup: 'ManufacturerNameContains',
    },
    {
      text: 'Slot Number',
      field: 'SlotNumber',
      type: 'input',
      placeholder: 'Slot Number',
      class: 'filter',
      id: 'SlotNumber',
      ngModel: 'SlotNumberContains',
      onkeyup: 'SlotNumberContains',
    },
    {
      text: 'Location',
      field: 'Location',
      type: 'input',
      placeholder: 'Location',
      class: 'filter',
      id: 'Location',
      ngModel: 'LocationContains',
      onkeyup: 'LocationContains',
    },
    {
      text: 'Game Name',
      field: 'GameName',
      type: 'input',
      placeholder: 'Game Name',
      class: 'filter',
      id: 'GameName',
      ngModel: 'GameNameContains',
      onkeyup: 'GameNameContains',
    },
    {
      text: 'Status',
      field: 'Status',
      type: 'select',
      placeholder: 'Status',
      class: 'filter',
      id: 'Status',
      ngModel: 'Status',
      onkeyup: 'Status',
    },
    {
      text: 'Notes',
      field: 'Notes',
      type: '',
    },
  ];
  constructor(
    private machineService: MachinesService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.query = {
      Id: null,
      MachineConfigurationId: null,
      ManufacturerId: null,
      CabinetTypeId: null,
      SlotTypeId: null,
      DisplayTypeId: null,
      ModelnullId: null,
      MachineConfigurationChangeActionId: null,
      ProgressiveTypeId: null,
      LeasedId: null,
      LeaseCategoryId: null,
      SbEgmId: null,
      PlayerTrackingTypeId: null,
      ChangeType: null,
      SlotTypeName: null,
      Serialnull: null,
      ManufacturerName: null,
      Status: 'Floor',
      CabinetTypeName: null,
      ModelnullName: null,
      DisplayTypeName: null,
      nullOfReels: null,
      GameType: null,
      GameName: null,
      TypeId: null,
      PayLines: null,
      FirstCoinPercentage: null,
      MaxCoinPercentage: null,
      HoldPercentage: null,
      MaxJackpot: null,
      ProgressiveTypeName: null,
      SubType: null,
      Glinull: null,
      JackpotBase: null,
      CoinsPerPoint: null,
      PointsAwarded: null,
      W2GJackpotAccrualEnabled: null,
      CWAEnabled: null,
      Section: null,
      Bank: null,
      Slot: null,
      Location: null,
      IndexZone: null,
      BankSize: null,
      SeatPosition: null,
      LeasedName: null,
      LeaseCategoryName: null,
      FeeFlat: null,
      FeePercentage: null,
      SbEgmName: null,
      Protocol: null,
      ProtocolVersion: null,
      PlayerTrackingTypeName: null,
      JackpotLimit: null,
      PrinterLimitOption: null,
      CreditLimitOption: null,
      TicketLimitOption: null,
      AveragePar: null,
      Notes: null,
      CurrentConfiguration: null,
    };
    this.machineService.getItems(this.query).subscribe(
      (res) => {
        this.machinelogs = res;
        this.totalRecords = res.Total;
        this.offset = res.Offset;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  downloadEpromReport(event: any) {
    if (event.length > 1) {
      this.disableCloneAndConvert = true;
      this.disabled = false;
    } else if (event.length === 1) {
      this.disabled = false;
      this.disableCloneAndConvert = false;
    } else {
      this.disabled = true;
      this.disableCloneAndConvert = true;
    }

    this.gridCheckedRows = event;
  }
  goToWarehouse() {
    localStorage.setItem(
      'selectedMachines',
      JSON.stringify(this.gridCheckedRows)
    );
    if (this.gridCheckedRows.length === 1) {
      this.router.navigate([
        '/machines/' + this.gridCheckedRows[0].Id + '/warehouse',
      ]);
    } else {
      this.router.navigate(['/machines/warehouse']);
    }
  }
  goToDecommission() {
    localStorage.setItem(
      'selectedMachines',
      JSON.stringify(this.gridCheckedRows)
    );
    if (this.gridCheckedRows.length === 1) {
      this.router.navigate([
        '/machines/' + this.gridCheckedRows[0].Id + '/decommission',
      ]);
    } else {
      this.router.navigate(['/machines/decommission']);
    }
  }

  downloadCSVFile() {
    let query: any = [];
    this.gridCheckedRows.forEach(
      (v: any) => {
        let obj = {
          MachineConfigurationIds: v.MachineConfigurationId,
        };
        query.push(obj.MachineConfigurationIds);
      },
      (err: any) => {}
    );

    this.machineService.downloadEpromList(query).subscribe(
      (res) => {},
      (err) => {
        var data = this.gridCheckedRows;
        // new ngxCsv(data, 'Machine Eproms');
      }
    );
  }
  addMachine() {
    this.router.navigateByUrl('/machines/add-machine');
  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
