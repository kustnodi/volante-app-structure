import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { MachinesService } from '@volante/slottrak-machines/src/lib/slottrak-machines-services';

@Component({
  selector: 'slottrak-machines-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css'],
})
export class ConfigurationsComponent implements OnInit {
  activeId = 1;
  query = {
    startDate: '',
    endDate: '',
  };
  date: any;
  id: any;
  search: any = '';
  searchText: any;

  public machineId: number;

  mealLogReasons: any = [];
  OpenedDate: any;
  ClosedDate: any;
  public machineDetail: any;

  public machineConfiguration: any;

  hide = 'true';

  splitUrl: any;

  mode: any = {};
  isInited: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private machinesService: MachinesService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
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

  onSelectFilter(event: any) {
    this.search = event.target.value;
  }
  onStartDateChange(event: any) {
    this.date = new Date(event);
    if (event !== '') {
      this.machineDetail.MachineChanges =
        this.machineDetail?.MachineChanges.filter(
          (m: any) => new Date(m.Date) >= new Date(this.date)
        );
    }
    if (event === '') {
      this.route.params.subscribe((params) => {
        this.machineId = params.machineId;
        this.machinesService.getItem(this.machineId).subscribe((response) => {
          this.machineDetail.MachineChanges = response.MachineChanges;
        });
      });
    }
  }
  nextState: any;
  index: any;
  panelShadow($event: NgbPanelChangeEvent, acc: any) {
    const activePanelId = $event.panelId;
    this.index = activePanelId.split('-')[1];
    this.nextState = $event.nextState;
  }

  onEndDateChange(event: any) {
    this.date = new Date(event);
    if (event !== '') {
      this.machineDetail.MachineChanges =
        this.machineDetail?.MachineChanges.filter(
          (m: any) => new Date(m.Date) <= new Date(this.date)
        );
    }
    if (event === '') {
      this.route.params.subscribe((params) => {
        this.machineId = params.machineId;
        this.machinesService.getItem(this.machineId).subscribe((response) => {
          this.machineDetail.MachineChanges = response.MachineChanges;
        });
      });
    }
  }

  resetFilter() {
    this.date = null;
    this.query.startDate = null;
    this.query.endDate = null;
    this.search = '';
    this.route.params.subscribe((params) => {
      this.machineId = params.machineId;
      this.machinesService.getItem(this.machineId).subscribe((response) => {
        this.machineDetail.MachineChanges = response.MachineChanges;
      });
    });
  }
  onOpenDateChange(event: any) {
    this.OpenedDate = event.target.value;
    console.log(event.target.value);
  }
  onClosedDateChange(event: any) {
    this.ClosedDate = event.target.value;
    console.log(event.target.value);
  }
  goToWarehouse() {
    let selectedDataOfMachine = [];
    let obj = {
      AveragePar:
        this.machineDetail.MachineChanges[0].MachineConfiguration.AveragePar,
      Bank: this.machineDetail.MachineChanges[0].MachineConfiguration.Bank,
      BankSize:
        this.machineDetail.MachineChanges[0].MachineConfiguration.BankSize,
      CWAEnabled:
        this.machineDetail.MachineChanges[0].MachineConfiguration.CWAEnabled,
      ChangeType: this.machineDetail.MachineChanges[0].ChangeType,
      CoinsPerPoint:
        this.machineDetail.MachineChanges[0].MachineConfiguration.CoinsPerPoint,
      CreditLimitOption:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .CreditLimitOption,
      CurrentConfiguration:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .CurrentConfiguration,
      Date: this.machineDetail.MachineChanges[0].Date,
      DisplayTypeId: this.machineDetail.DisplayTypeId,
      DisplayTypeName: this.machineDetail.DisplayTypeName,
      EpromConfigurations:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .EpromConfigurations,
      FeePercentage:
        this.machineDetail.MachineChanges[0].MachineConfiguration.FeePercentage,
      Files: this.machineDetail.MachineChanges[0].MachineConfiguration.Files,
      FirstCoinPercentage:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .FirstCoinPercentage,
      GameConfigurations:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .GameConfigurations,
      GameName:
        this.machineDetail.MachineChanges[0].MachineConfiguration.GameName,
      GameType:
        this.machineDetail.MachineChanges[0].MachineConfiguration.GameType,
      Id: this.machineDetail.Id,
      InServiceDate:
        this.machineDetail.MachineChanges[0].MachineConfiguration.InServiceDate,
      IndexZone:
        this.machineDetail.MachineChanges[0].MachineConfiguration.IndexZone,
      JackpotLimit:
        this.machineDetail.MachineChanges[0].MachineConfiguration.JackpotLimit,
      Location:
        this.machineDetail.MachineChanges[0].MachineConfiguration.Location,
      MachineConfigurationChangeActionId:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .MachineConfigurationChangeActionId,
      MachineConfigurationId:
        this.machineDetail.MachineChanges[0].MachineConfiguration.Id,
      ManufacturerId: this.machineDetail.ManufacturerId,
      ManufacturerName: this.machineDetail.ManufacturerName,
      MaxCoinPercentage:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .MaxCoinPercentage,
      ModelNumberId: this.machineDetail.ModelNumberId,
      ModelNumberName: this.machineDetail.ModelNumberName,
      Notes: this.machineDetail.MachineChanges[0].MachineConfiguration.Notes,
      PlayerTrackingTypeId:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .PlayerTrackingTypeId,
      PlayerTrackingTypeName:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .PlayerTrackingTypeName,
      PointsAwarded:
        this.machineDetail.MachineChanges[0].MachineConfiguration.PointsAwarded,
      PrinterLimitOption:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .PrinterLimitOption,
      Protocol:
        this.machineDetail.MachineChanges[0].MachineConfiguration.Protocol,
      ProtocolVersion:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .ProtocolVersion,
      SbEgmId:
        this.machineDetail.MachineChanges[0].MachineConfiguration.SbEgmId,
      SbEgmName:
        this.machineDetail.MachineChanges[0].MachineConfiguration.SbEgmName,
      SeatPosition:
        this.machineDetail.MachineChanges[0].MachineConfiguration.SeatPosition,
      Section:
        this.machineDetail.MachineChanges[0].MachineConfiguration.Section,
      SerialNumber:
        this.machineDetail.MachineChanges[0].MachineConfiguration.SerialNumber,
      Slot: this.machineDetail.MachineChanges[0].MachineConfiguration.Slot,
      SlotNumber:
        this.machineDetail.MachineChanges[0].MachineConfiguration.SlotNumber,
      SlotTypeId:
        this.machineDetail.MachineChanges[0].MachineConfiguration.SlotTypeId,
      SlotTypeName:
        this.machineDetail.MachineChanges[0].MachineConfiguration.SlotTypeName,
      Status: this.machineDetail.MachineChanges[0].MachineConfiguration.Status,
      TicketLimitOption:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .TicketLimitOption,
      W2GJackpotAccrualEnabled:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .W2GJackpotAccrualEnabled,
    };
    selectedDataOfMachine.push(obj);
    localStorage.setItem(
      'selectedMachines',
      JSON.stringify(selectedDataOfMachine)
    );

    this.router.navigate(['/machines/' + this.machineId + '/warehouse']);
  }
  goToDecommission() {
    let selectedDataOfMachine = [];
    let obj = {
      AveragePar:
        this.machineDetail.MachineChanges[0].MachineConfiguration.AveragePar,
      Bank: this.machineDetail.MachineChanges[0].MachineConfiguration.Bank,
      BankSize:
        this.machineDetail.MachineChanges[0].MachineConfiguration.BankSize,
      CWAEnabled:
        this.machineDetail.MachineChanges[0].MachineConfiguration.CWAEnabled,
      ChangeType: this.machineDetail.MachineChanges[0].ChangeType,
      CoinsPerPoint:
        this.machineDetail.MachineChanges[0].MachineConfiguration.CoinsPerPoint,
      CreditLimitOption:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .CreditLimitOption,
      CurrentConfiguration:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .CurrentConfiguration,
      Date: this.machineDetail.MachineChanges[0].Date,
      DisplayTypeId: this.machineDetail.DisplayTypeId,
      DisplayTypeName: this.machineDetail.DisplayTypeName,
      EpromConfigurations:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .EpromConfigurations,
      FeePercentage:
        this.machineDetail.MachineChanges[0].MachineConfiguration.FeePercentage,
      Files: this.machineDetail.MachineChanges[0].MachineConfiguration.Files,
      FirstCoinPercentage:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .FirstCoinPercentage,
      GameConfigurations:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .GameConfigurations,
      GameName:
        this.machineDetail.MachineChanges[0].MachineConfiguration.GameName,
      GameType:
        this.machineDetail.MachineChanges[0].MachineConfiguration.GameType,
      Id: this.machineDetail.Id,
      InServiceDate:
        this.machineDetail.MachineChanges[0].MachineConfiguration.InServiceDate,
      IndexZone:
        this.machineDetail.MachineChanges[0].MachineConfiguration.IndexZone,
      JackpotLimit:
        this.machineDetail.MachineChanges[0].MachineConfiguration.JackpotLimit,
      Location:
        this.machineDetail.MachineChanges[0].MachineConfiguration.Location,
      MachineConfigurationChangeActionId:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .MachineConfigurationChangeActionId,
      MachineConfigurationId:
        this.machineDetail.MachineChanges[0].MachineConfiguration.Id,
      ManufacturerId: this.machineDetail.ManufacturerId,
      ManufacturerName: this.machineDetail.ManufacturerName,
      MaxCoinPercentage:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .MaxCoinPercentage,
      ModelNumberId: this.machineDetail.ModelNumberId,
      ModelNumberName: this.machineDetail.ModelNumberName,
      Notes: this.machineDetail.MachineChanges[0].MachineConfiguration.Notes,
      PlayerTrackingTypeId:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .PlayerTrackingTypeId,
      PlayerTrackingTypeName:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .PlayerTrackingTypeName,
      PointsAwarded:
        this.machineDetail.MachineChanges[0].MachineConfiguration.PointsAwarded,
      PrinterLimitOption:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .PrinterLimitOption,
      Protocol:
        this.machineDetail.MachineChanges[0].MachineConfiguration.Protocol,
      ProtocolVersion:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .ProtocolVersion,
      SbEgmId:
        this.machineDetail.MachineChanges[0].MachineConfiguration.SbEgmId,
      SbEgmName:
        this.machineDetail.MachineChanges[0].MachineConfiguration.SbEgmName,
      SeatPosition:
        this.machineDetail.MachineChanges[0].MachineConfiguration.SeatPosition,
      Section:
        this.machineDetail.MachineChanges[0].MachineConfiguration.Section,
      SerialNumber:
        this.machineDetail.MachineChanges[0].MachineConfiguration.SerialNumber,
      Slot: this.machineDetail.MachineChanges[0].MachineConfiguration.Slot,
      SlotNumber:
        this.machineDetail.MachineChanges[0].MachineConfiguration.SlotNumber,
      SlotTypeId:
        this.machineDetail.MachineChanges[0].MachineConfiguration.SlotTypeId,
      SlotTypeName:
        this.machineDetail.MachineChanges[0].MachineConfiguration.SlotTypeName,
      Status: this.machineDetail.MachineChanges[0].MachineConfiguration.Status,
      TicketLimitOption:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .TicketLimitOption,
      W2GJackpotAccrualEnabled:
        this.machineDetail.MachineChanges[0].MachineConfiguration
          .W2GJackpotAccrualEnabled,
    };
    selectedDataOfMachine.push(obj);
    localStorage.setItem(
      'selectedMachines',
      JSON.stringify(selectedDataOfMachine)
    );

    this.router.navigate(['/machines/' + this.machineId + '/decommission']);
  }
}
