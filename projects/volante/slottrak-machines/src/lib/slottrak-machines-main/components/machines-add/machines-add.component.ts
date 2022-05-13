import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap/accordion/accordion';
import { MachinesService } from '@volante/slottrak-machines/src/lib/slottrak-machines-services';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'slottrak-machines-machines-add',
  templateUrl: './machines-add.component.html',
  styleUrls: ['./machines-add.component.css'],
})
export class MachinesAddComponent implements OnInit {
  myform!: FormGroup;
  manufacturerId: any;
  machineData: any;
  SlotTypeCtrl: FormControl;
  filteredItems!: Observable<any[]>;
  ManufacturerId: FormControl;
  manufacturerFilteredItems!: Observable<any[]>;
  cabinetCtrl: FormControl;
  cabinetFilteredItems!: Observable<any[]>;
  modelnumberCtrl: FormControl;
  modelnumberFilteredItems!: Observable<any[]>;
  displayTypeCtrl: FormControl;
  displayTypeFilteredItems!: Observable<any[]>;
  progressiveTypeCtrl: FormControl;
  progressiveTypeFilteredItems!: Observable<any[]>;
  leasedTypeCtrl: FormControl;
  leasedTypeFilteredItems!: Observable<any[]>;
  leasedCategoryTypeCtrl: FormControl;
  leasedCategoryTypeFilteredItems!: Observable<any[]>;
  denominationTypeCtrl!: FormControl;
  denominationTypeFilteredItems!: Observable<any[]>;
  sbegmCtrl: FormControl;
  sbegmFilteredItems!: Observable<any[]>;
  playerTrackCtrl: FormControl;
  playerTrackFilteredItems!: Observable<any[]>;
  ticketingCtrl: FormControl;
  ticketingFilteredItems!: Observable<any[]>;
  fundtransferCtrl: FormControl;
  fundtransferFilteredItems!: Observable<any[]>;
  denominationCtrl: FormControl;
  denominationFilteredItems!: Observable<any[]>;
  themeCtrl: FormControl;
  themeFilteredItems!: Observable<any[]>;
  screenTypeCtrl: FormControl;
  screenTypeFilteredItems!: Observable<any[]>;
  currentPage: any;
  Notes: FormControl;
  SerialNumber: FormControl;
  Status: FormControl;
  NumberOfReels: FormControl;
  SlotNumber: FormControl;
  GameType: FormControl;
  GameName: FormControl;
  TypeId: FormControl;
  PayLines: FormControl;
  FirstCoinPercentage: FormControl;
  MaxCoinPercentage: FormControl;
  HoldPercentage: FormControl;
  MaxJackpot: FormControl;
  SubType: FormControl;
  GliNumber: FormControl;
  JackpotBase: FormControl;
  CoinsPerPoint: FormControl;
  PointsAwarded: FormControl;
  AdjustedHoldPercentage: FormControl;
  Section: FormControl;
  Bank: FormControl;
  Slot: FormControl;
  IndexZone: FormControl;
  BankSize: FormControl;
  SeatPosition: FormControl;
  errors: any;
  errorMessage: any;
  FeeFlat: FormControl;
  FeePercentage: FormControl;
  FeeStructure: FormControl;
  ContractId: FormControl;
  Protocol: FormControl;
  ProtocolVersion: FormControl;
  JackpotLimit: FormControl;
  PrinterLimitOption: FormControl;
  CreditLimitOption: FormControl;
  TicketLimitOption: FormControl;
  W2GJackpotAccrualEnabled: FormControl;
  CWAEnabled: FormControl;
  Par: FormControl;
  MinBet: FormControl;
  MaxBet: FormControl;
  EasyBet: FormControl;
  date: FormControl;
  epromConfiguration!: FormControl;
  showCloseButton: boolean = false;
  prompt = '';
  slotAddButtonStatus = true;
  manufacturerStatus = true;
  cabinetStatus = true;
  modelnumberStatus = true;
  displayTypeStatus = true;
  progressiveTypeStatus = true;
  leasedTypeStatus = true;
  leasedCategoryTypeStatus = true;
  sbegmStatus = true;
  playerTrackStatus = true;
  ticketingStatus = true;
  fundtransferStatus = true;
  denominationStatus = true;
  themeStatus = true;
  screenTypeStatus = true;
  formSubmitted = false;
  slotTypes: any[] = [];
  manufacturers: any[] = [];
  cabinettypes: any[] = [];
  modelNumbers: any[] = [];
  displayTypes: any[] = [];
  denominations: any[] = [];
  fundsTransferMethod: any[] = [];
  sbEGM: any[] = [];
  screenTypes: any[] = [];
  progressiveTypes: any[] = [];
  playerTrackingTypes: any[] = [];
  leasedCategories: any[] = [];
  leased: any[] = [];
  themes: any[] = [];
  ticketing: any[] = [];
  fileToUpload: File | null = null;
  filesResponse: any[] = [];
  eprom!: FormArray;
  GameConfigurations!: FormArray;
  SlotTypeId: any;
  CabinetTypeId: any;
  DisplayTypeId: any;
  FundsTransferMethodId: any;
  LeaseCategoryId: any;
  LeasedId: any;
  Manufacturer_Id: any;
  ModelNumberId: any;
  PlayerTrackingTypeId: any;
  ScreenTypeId: any;
  ProgressiveTypeId: any;
  SbEgmId: any;
  TicketingId: any;
  DenominationId: any;
  themeId: any;
  InServiceDate: any;
  PurchaseDate: any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private machineService: MachinesService
  ) {
    this.SlotTypeCtrl = new FormControl('', Validators.required);
    this.ManufacturerId = new FormControl('', Validators.required);
    this.cabinetCtrl = new FormControl();
    this.modelnumberCtrl = new FormControl('', Validators.required);
    this.displayTypeCtrl = new FormControl('', Validators.required);
    this.progressiveTypeCtrl = new FormControl();
    this.leasedTypeCtrl = new FormControl();
    this.leasedCategoryTypeCtrl = new FormControl();
    this.sbegmCtrl = new FormControl();
    this.playerTrackCtrl = new FormControl();
    this.ticketingCtrl = new FormControl();
    this.fundtransferCtrl = new FormControl();
    this.denominationCtrl = new FormControl();
    this.themeCtrl = new FormControl();
    this.screenTypeCtrl = new FormControl();
    this.Notes = new FormControl();
    this.SerialNumber = new FormControl('', Validators.required);
    this.Status = new FormControl('', Validators.required);
    this.NumberOfReels = new FormControl();
    this.SlotNumber = new FormControl();
    this.GameName = new FormControl('', Validators.required);
    this.GameType = new FormControl('', Validators.required);
    this.date = new FormControl('', Validators.required);
    this.TypeId = new FormControl();
    this.PayLines = new FormControl();
    this.FirstCoinPercentage = new FormControl();
    this.MaxCoinPercentage = new FormControl();
    this.HoldPercentage = new FormControl();
    this.MaxJackpot = new FormControl();
    this.SubType = new FormControl();
    this.GliNumber = new FormControl();
    this.JackpotBase = new FormControl();
    this.CoinsPerPoint = new FormControl();
    this.PointsAwarded = new FormControl();
    this.AdjustedHoldPercentage = new FormControl();
    this.Section = new FormControl('', [Validators.pattern("^[a-zA-Z -']+")]);
    this.Slot = new FormControl();
    this.Bank = new FormControl('', [Validators.pattern('^[0-9]*$')]);
    this.BankSize = new FormControl('', [Validators.pattern('^[0-9]*$')]);
    this.IndexZone = new FormControl();
    this.SeatPosition = new FormControl('', [
      Validators.pattern("^[a-zA-Z -']+"),
    ]);
    this.FeeFlat = new FormControl();
    this.FeePercentage = new FormControl();
    this.FeeStructure = new FormControl();
    this.ContractId = new FormControl();
    this.Protocol = new FormControl();
    this.ProtocolVersion = new FormControl();
    this.JackpotLimit = new FormControl();
    this.PrinterLimitOption = new FormControl();
    this.CreditLimitOption = new FormControl();
    this.TicketLimitOption = new FormControl();
    this.W2GJackpotAccrualEnabled = new FormControl();
    this.CWAEnabled = new FormControl();
    this.Par = new FormControl();
    this.MinBet = new FormControl();
    this.MaxBet = new FormControl();
    this.EasyBet = new FormControl();
  }

  query: any;

  filterItems(name: string) {
    let results = this.slotTypes.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );

    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }

    return results;
  }

  manufacturerfilterItems(name: string) {
    let results = this.manufacturers.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }
    return results;
  }
  cabinetfilterItems(name: string) {
    let results = this.cabinettypes.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }
    return results;
  }
  modelnumberfilterItems(name: string) {
    let results = this.modelNumbers.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }
    return results;
  }
  displayTypefilterItems(name: string) {
    let results = this.displayTypes.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }
    return results;
  }
  progressiveTypefilterItems(name: string) {
    let results = this.progressiveTypes.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }
    return results;
  }
  leasedTypefilterItems(name: string) {
    let results = this.leased.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }
    return results;
  }
  leasedCategoryTypefilterItems(name: string) {
    let results = this.leasedCategories.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }
    return results;
  }
  sbegmfilterItems(name: string) {
    let results = this.sbEGM.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }
    return results;
  }
  playerTrackfilterItems(name: string) {
    let results = this.playerTrackingTypes.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }
    return results;
  }
  ticketingfilterItems(name: string) {
    let results = this.ticketing.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }
    return results;
  }
  fundtransferfilterItems(name: string) {
    let results = this.fundsTransferMethod.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }
    return results;
  }
  denominationtypefilterItems(name: string) {
    let results = this.denominations.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }
    return results;
  }
  themesDataTypeItems(name: string) {
    let results = this.themes.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }
    return results;
  }
  screenTypeItems(name: string) {
    let results = this.screenTypes.filter(
      (item) => item.Name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    this.showCloseButton = results.length === 0;
    if (this.showCloseButton) {
      results = [{ Id: '', Name: name }];
    }
    return results;
  }
  optionSelected(option: any) {
    this.slotAddButtonStatus = false;
    this.SlotTypeId = option.id;
  }
  manufacturerSelected(option: any) {
    this.manufacturerStatus = false;
    this.Manufacturer_Id = option.id;
  }
  cabinetSelected(option: any) {
    this.cabinetStatus = false;
    this.CabinetTypeId = option.id;
  }
  modelnumberSelected(option: any) {
    this.modelnumberStatus = false;
    this.ModelNumberId = option.id;
  }
  displayTypeSelected(option: any) {
    this.displayTypeStatus = false;
    this.DisplayTypeId = option.id;
  }
  progressiveTypeSelected(option: any) {
    this.progressiveTypeStatus = false;
    this.ProgressiveTypeId = option.id;
  }
  leasedTypeSelected(option: any) {
    this.leasedTypeStatus = false;
    this.LeasedId = option.id;
  }
  leasedCategoryTypeSelected(option: any) {
    this.leasedCategoryTypeStatus = false;
    this.LeaseCategoryId = option.id;
  }
  sbegmSelected(option: any) {
    this.sbegmStatus = false;
    this.SbEgmId = option.id;
  }
  playerTrackSelected(option: any) {
    this.playerTrackStatus = false;
    this.PlayerTrackingTypeId = option.id;
  }
  ticketingSelected(option: any) {
    this.ticketingStatus = false;
    this.TicketingId = option.id;
  }
  fundtransferSelected(option: any) {
    this.fundtransferStatus = false;
    this.FundsTransferMethodId = option.id;
  }
  denominationSelected(option: any, i: any) {
    this.denominationStatus = false;
    (<FormArray>this.myform.get('GameConfigurations'))
      .at(i)
      .get('DenominationId')
      .setValue(option.id);
  }
  themeSelected(option: any, i: any) {
    this.themeStatus = false;
    // this.themeId = option.id;
    (<FormArray>this.myform.get('GameConfigurations'))
      .at(i)
      .get('ThemeId')
      .setValue(option.id);
  }
  screenTypeSelected(option: any) {
    this.screenTypeStatus = false;
    this.ScreenTypeId = option.id;
  }
  addOption() {
    let option = this.removePromptFromOption(this.SlotTypeCtrl.value);
    if (!this.slotTypes.some((entry) => entry === option)) {
      const index = this.slotTypes.push(option) - 1;
      this.SlotTypeCtrl.setValue(this.slotTypes[index]);
    }
  }
  addMFOption() {
    let option = this.removePromptFromOption(this.ManufacturerId.value);
    if (!this.manufacturers.some((entry) => entry === option)) {
      const index = this.manufacturers.push(option) - 1;
      this.ManufacturerId.setValue(this.manufacturers[index]);
    }
  }
  addCabinetOption() {
    let option = this.removePromptFromOption(this.cabinetCtrl.value);
    if (!this.cabinettypes.some((entry) => entry === option)) {
      const index = this.cabinettypes.push(option) - 1;
      this.cabinetCtrl.setValue(this.cabinettypes[index]);
    }
  }
  addmodelnumberOption() {
    let option = this.removePromptFromOption(this.modelnumberCtrl.value);
    if (!this.modelNumbers.some((entry) => entry === option)) {
      const index = this.modelNumbers.push(option) - 1;
      this.modelnumberCtrl.setValue(this.modelNumbers[index]);
    }
  }
  adddisplayTypeOption() {
    let option = this.removePromptFromOption(this.displayTypeCtrl.value);
    if (!this.displayTypes.some((entry) => entry === option)) {
      const index = this.displayTypes.push(option) - 1;
      this.displayTypeCtrl.setValue(this.displayTypes[index]);
    }
  }
  addprogressiveTypeOption() {
    let option = this.removePromptFromOption(this.progressiveTypeCtrl.value);
    if (!this.progressiveTypes.some((entry) => entry === option)) {
      const index = this.progressiveTypes.push(option) - 1;
      this.progressiveTypeCtrl.setValue(this.progressiveTypes[index]);
    }
  }
  addleasedTypeOption() {
    let option = this.removePromptFromOption(this.leasedTypeCtrl.value);
    if (!this.leased.some((entry) => entry === option)) {
      const index = this.leased.push(option) - 1;
      this.leasedTypeCtrl.setValue(this.leased[index]);
    }
  }
  addleasedCategoryTypeOption() {
    let option = this.removePromptFromOption(this.leasedCategoryTypeCtrl.value);
    if (!this.leasedCategories.some((entry) => entry === option)) {
      const index = this.leasedCategories.push(option) - 1;
      this.leasedCategoryTypeCtrl.setValue(this.leasedCategories[index]);
    }
  }
  addsbegmOption() {
    let option = this.removePromptFromOption(this.sbegmCtrl.value);
    if (!this.sbEGM.some((entry) => entry === option)) {
      const index = this.sbEGM.push(option) - 1;
      this.sbegmCtrl.setValue(this.sbEGM[index]);
    }
  }
  addplayerTrackOption() {
    let option = this.removePromptFromOption(this.playerTrackCtrl.value);
    if (!this.playerTrackingTypes.some((entry) => entry === option)) {
      const index = this.playerTrackingTypes.push(option) - 1;
      this.playerTrackCtrl.setValue(this.playerTrackingTypes[index]);
    }
  }
  addticketingOption() {
    let option = this.removePromptFromOption(this.ticketingCtrl.value);
    if (!this.ticketing.some((entry) => entry === option)) {
      const index = this.ticketing.push(option) - 1;
      this.ticketingCtrl.setValue(this.ticketing[index]);
    }
  }
  addfundtransferOption() {
    let option = this.removePromptFromOption(this.fundtransferCtrl.value);
    if (!this.fundsTransferMethod.some((entry) => entry === option)) {
      const index = this.fundsTransferMethod.push(option) - 1;
      this.fundtransferCtrl.setValue(this.fundsTransferMethod[index]);
    }
  }
  adddenominationOption() {
    let option = this.removePromptFromOption(this.denominationCtrl.value);
    if (!this.denominations.some((entry) => entry === option)) {
      const index = this.denominations.push(option) - 1;
      this.denominationCtrl.setValue(this.denominations[index]);
    }
  }
  addthemeOption() {
    let option = this.removePromptFromOption(this.themeCtrl.value);
    if (!this.themes.some((entry) => entry === option)) {
      const index = this.themes.push(option) - 1;
      this.themeCtrl.setValue(this.themes[index]);
    }
  }
  addscreenTypeOption() {
    let option = this.removePromptFromOption(this.screenTypeCtrl.value);
    if (!this.screenTypes.some((entry) => entry === option)) {
      const index = this.screenTypes.push(option) - 1;
      this.screenTypeCtrl.setValue(this.screenTypes[index]);
    }
  }
  removeOption() {
    this.SlotTypeCtrl.setValue(null);
    this.slotAddButtonStatus = true;
  }
  removeMFOption() {
    this.ManufacturerId.setValue(null);
    this.manufacturerStatus = true;
  }
  removeCabinetOption() {
    this.cabinetCtrl.setValue(null);
    this.cabinetStatus = true;
  }
  removemodelnumberOption() {
    this.modelnumberCtrl.setValue(null);
    this.modelnumberStatus = true;
  }
  removedisplayTypeOption() {
    this.displayTypeCtrl.setValue(null);
    this.displayTypeStatus = true;
  }
  removeprogressiveTypeOption() {
    this.progressiveTypeCtrl.setValue(null);
    this.progressiveTypeStatus = true;
  }
  removeleasedTypeOption(option: any) {
    this.leasedTypeCtrl.setValue(null);
    this.leasedTypeStatus = true;
  }
  removeleasedCategoryTypeOption(option: any) {
    this.leasedCategoryTypeCtrl.setValue(null);
    this.leasedCategoryTypeStatus = true;
  }
  removesbegmOption(o: any) {
    this.sbegmCtrl.setValue(null);
    this.sbegmStatus = true;
  }
  removeplayerTrackOption(o: any) {
    this.playerTrackCtrl.setValue(null);
    this.playerTrackStatus = true;
  }
  removeticketingOption(o: any) {
    this.ticketingCtrl.setValue(null);
    this.ticketingStatus = true;
  }
  removefundtransferOption(o: any) {
    this.fundtransferCtrl.setValue(null);
    this.fundtransferStatus = true;
  }
  removedenominationOption(o: any) {
    this.denominationCtrl.setValue(null);
    this.denominationStatus = true;
  }
  removethemeOption(o: any) {
    this.themeCtrl.setValue(null);
    this.themeStatus = true;
  }
  removescreenTypeOption(o: any) {
    this.screenTypeCtrl.setValue(null);
    this.screenTypeStatus = true;
  }
  removePromptFromOption(option: any) {
    if (option.startsWith(this.prompt)) {
      option = option.substring(this.prompt.length, option.length - 1);
    }
    return option;
  }

  ngOnInit(): void {
    this.query = {
      NameContains: '',
      OrderBy: '',
      Name: '',
      Skip: 0,
      Take: 25,
    };

    this.machineService.getSlotTypes(this.query).subscribe((res: any) => {
      res.Results.forEach((v: any) => {
        this.slotTypes.push(v);
        this.filteredItems = this.SlotTypeCtrl.valueChanges.pipe(
          startWith(''),
          map((item) =>
            item ? this.filterItems(item) : this.slotTypes.slice()
          )
        );
      });
    });
    this.machineService.getManufacturers(this.query).subscribe((res: any) => {
      res.Results.forEach((v: any) => {
        this.manufacturers.push(v);
        this.manufacturerFilteredItems = this.ManufacturerId.valueChanges.pipe(
          startWith(''),
          map((item) =>
            item
              ? this.manufacturerfilterItems(item)
              : this.manufacturers.slice()
          )
        );
      });
    });
    this.machineService.getCabinetTypes(this.query).subscribe((res: any) => {
      res.Results.forEach((v: any) => {
        this.cabinettypes.push(v);
        this.cabinetFilteredItems = this.cabinetCtrl.valueChanges.pipe(
          startWith(''),
          map((item) =>
            item ? this.cabinetfilterItems(item) : this.cabinettypes.slice()
          )
        );
      });
    });
    this.machineService.getModelNumbers(this.query).subscribe((res: any) => {
      res.Results.forEach((v: any) => {
        this.modelNumbers.push(v);
        this.modelnumberFilteredItems = this.modelnumberCtrl.valueChanges.pipe(
          startWith(''),
          map((item) =>
            item ? this.modelnumberfilterItems(item) : this.modelNumbers.slice()
          )
        );
      });
    });
    this.machineService.getDisplayTypes(this.query).subscribe((res: any) => {
      res.Results.forEach((v: any) => {
        this.displayTypes.push(v);
        this.displayTypeFilteredItems = this.displayTypeCtrl.valueChanges.pipe(
          startWith(''),
          map((item) =>
            item ? this.displayTypefilterItems(item) : this.displayTypes.slice()
          )
        );
      });
    });
    this.machineService.getDenominations(this.query).subscribe((res: any) => {
      res.Results.forEach((v: any) => {
        this.denominations.push(v);
        const controls = <FormArray>this.myform.controls['GameConfigurations'];
        this.ManageNameControl(controls.length - 1);
      });
    });
    this.machineService
      .getFundsTransferMethod(this.query)
      .subscribe((res: any) => {
        res.Results.forEach((v: any) => {
          this.fundsTransferMethod.push(v);
          this.fundtransferFilteredItems =
            this.fundtransferCtrl.valueChanges.pipe(
              startWith(''),
              map((item) =>
                item
                  ? this.fundtransferfilterItems(item)
                  : this.fundsTransferMethod.slice()
              )
            );
        });
      });
    this.machineService.getSbEGM(this.query).subscribe((res: any) => {
      res.Results.forEach((v: any) => {
        this.sbEGM.push(v);
        this.sbegmFilteredItems = this.sbegmCtrl.valueChanges.pipe(
          startWith(''),
          map((item) =>
            item ? this.sbegmfilterItems(item) : this.sbEGM.slice()
          )
        );
      });
    });
    this.machineService.getScreenTypes(this.query).subscribe((res: any) => {
      res.Results.forEach((v: any) => {
        this.screenTypes.push(v);
        this.screenTypeFilteredItems = this.screenTypeCtrl.valueChanges.pipe(
          startWith(''),
          map((item) =>
            item ? this.screenTypeItems(item) : this.screenTypes.slice()
          )
        );
      });
    });
    this.machineService
      .getProgressiveTypes(this.query)
      .subscribe((res: any) => {
        res.Results.forEach((v: any) => {
          this.progressiveTypes.push(v);
          this.progressiveTypeFilteredItems =
            this.progressiveTypeCtrl.valueChanges.pipe(
              startWith(''),
              map((item) =>
                item
                  ? this.progressiveTypefilterItems(item)
                  : this.progressiveTypes.slice()
              )
            );
        });
      });
    this.machineService
      .getPlayertrackingTypes(this.query)
      .subscribe((res: any) => {
        res.Results.forEach((v: any) => {
          this.playerTrackingTypes.push(v);
          this.playerTrackFilteredItems =
            this.playerTrackCtrl.valueChanges.pipe(
              startWith(''),
              map((item) =>
                item
                  ? this.playerTrackfilterItems(item)
                  : this.playerTrackingTypes.slice()
              )
            );
        });
      });
    this.machineService.getLeased(this.query).subscribe((res: any) => {
      res.Results.forEach((v: any) => {
        this.leased.push(v);
        this.leasedTypeFilteredItems = this.leasedTypeCtrl.valueChanges.pipe(
          startWith(''),
          map((item) =>
            item ? this.leasedTypefilterItems(item) : this.leased.slice()
          )
        );
      });
    });
    this.machineService.getLeaseCategories(this.query).subscribe((res: any) => {
      res.Results.forEach((v: any) => {
        this.leasedCategories.push(v);
        this.leasedCategoryTypeFilteredItems =
          this.leasedCategoryTypeCtrl.valueChanges.pipe(
            startWith(''),
            map((item) =>
              item
                ? this.leasedCategoryTypefilterItems(item)
                : this.leasedCategories.slice()
            )
          );
      });
    });
    this.machineService.getThemes(this.query).subscribe((res: any) => {
      res.Results.forEach((v: any) => {
        this.themes.push(v);
        const controls = <FormArray>this.myform.controls['GameConfigurations'];
        this.ManageNameControl(controls.length - 1);
      });
    });
    this.machineService.getTicketing(this.query).subscribe((res: any) => {
      res.Results.forEach((v: any) => {
        this.ticketing.push(v);
        this.ticketingFilteredItems = this.ticketingCtrl.valueChanges.pipe(
          startWith(''),
          map((item) =>
            item ? this.ticketingfilterItems(item) : this.ticketing.slice()
          )
        );
      });
    });

    this.myform = new FormGroup({
      SlotTypeCtrl: this.SlotTypeCtrl,
      ManufacturerId: this.ManufacturerId,
      cabinetCtrl: this.cabinetCtrl,
      modelnumberCtrl: this.modelnumberCtrl,
      displayTypeCtrl: this.displayTypeCtrl,
      progressiveTypeCtrl: this.progressiveTypeCtrl,
      leasedTypeCtrl: this.leasedTypeCtrl,
      leasedCategoryTypeCtrl: this.leasedCategoryTypeCtrl,
      sbegmCtrl: this.sbegmCtrl,
      playerTrackCtrl: this.playerTrackCtrl,
      ticketingCtrl: this.ticketingCtrl,
      fundtransferCtrl: this.fundtransferCtrl,
      denominationCtrl: this.denominationCtrl,
      themeCtrl: this.themeCtrl,
      screenTypeCtrl: this.screenTypeCtrl,
      Notes: this.Notes,
      SerialNumber: this.SerialNumber,
      Status: this.Status,
      NumberOfReels: this.NumberOfReels,
      SlotNumber: this.SlotNumber,
      GameName: this.GameName,
      GameType: this.GameType,
      TypeId: this.TypeId,
      PayLines: this.PayLines,
      FirstCoinPercentage: this.FirstCoinPercentage,
      MaxCoinPercentage: this.MaxCoinPercentage,
      HoldPercentage: this.HoldPercentage,
      MaxJackpot: this.MaxJackpot,
      SubType: this.SubType,
      GliNumber: this.GliNumber,
      JackpotBase: this.JackpotBase,
      CoinsPerPoint: this.CoinsPerPoint,
      PointsAwarded: this.PointsAwarded,
      AdjustedHoldPercentage: this.AdjustedHoldPercentage,
      Section: this.Section,
      Slot: this.Slot,
      Bank: this.Bank,
      BankSize: this.BankSize,
      IndexZone: this.IndexZone,
      SeatPosition: this.SeatPosition,
      FeeFlat: this.FeeFlat,
      FeePercentage: this.FeePercentage,
      FeeStructure: this.FeeStructure,
      ContractId: this.ContractId,
      Protocol: this.Protocol,
      ProtocolVersion: this.ProtocolVersion,
      JackpotLimit: this.JackpotLimit,
      PrinterLimitOption: this.PrinterLimitOption,
      CreditLimitOption: this.CreditLimitOption,
      TicketLimitOption: this.TicketLimitOption,
      W2GJackpotAccrualEnabled: this.W2GJackpotAccrualEnabled,
      CWAEnabled: this.CWAEnabled,
      Par: this.Par,
      MinBet: this.MinBet,
      MaxBet: this.MaxBet,
      EasyBet: this.EasyBet,
      date: this.date,
      eprom: new FormArray([]),
      GameConfigurations: new FormArray([]),
    });
    if (this.router.url != '/machines/add-machine') {
      this.currentPage = 'Edit';
      let splitMachineId: any = this.router.url.split('/')[2];

      //setting Form Data
      this.machineService.getItem(splitMachineId).subscribe((response: any) => {
        this.machineData = response.MachineChanges[0].MachineConfiguration;
        console.log(this.machineData);
        this.manufacturerId = response.ManufacturerId;
        this.myform.get('SlotTypeCtrl').setValue(this.machineData.SlotTypeName);
        this.myform.get('SerialNumber').setValue(this.machineData.SerialNumber);
        this.myform
          .get('ManufacturerId')
          .setValue(this.machineData.ManufacturerName);
        this.myform.get('Status').setValue(this.machineData.Status);
        this.myform
          .get('cabinetCtrl')
          .setValue(this.machineData.CabinetTypeName);
        this.myform
          .get('modelnumberCtrl')
          .setValue(this.machineData.ModelNumberName);
        this.myform
          .get('displayTypeCtrl')
          .setValue(this.machineData.DisplayTypeName);
        this.myform
          .get('NumberOfReels')
          .setValue(this.machineData.NumberOfReels);
        this.myform.get('SlotNumber').setValue(this.machineData.SlotNumber);
        this.myform.get('GameType').setValue(this.machineData.GameType);
        this.myform.get('GameName').setValue(this.machineData.GameName);
        this.myform
          .get('screenTypeCtrl')
          .setValue(this.machineData.ScreenTypeName);
        this.myform.get('TypeId').setValue(this.machineData.TypeId);
        this.myform.get('PayLines').setValue(this.machineData.PayLines);
        this.myform
          .get('FirstCoinPercentage')
          .setValue(this.machineData.FirstCoinPercentage);
        this.myform
          .get('MaxCoinPercentage')
          .setValue(this.machineData.MaxCoinPercentage);
        this.myform
          .get('HoldPercentage')
          .setValue(this.machineData.HoldPercentage);
        this.myform.get('MaxJackpot').setValue(this.machineData.MaxJackpot);
        this.myform
          .get('progressiveTypeCtrl')
          .setValue(this.machineData.ProgressiveTypeName);
        this.myform.get('SubType').setValue(this.machineData.SubType);
        this.myform.get('GliNumber').setValue(this.machineData.GliNumber);
        this.myform.get('JackpotBase').setValue(this.machineData.JackpotBase);
        this.myform
          .get('CoinsPerPoint')
          .setValue(this.machineData.CoinsPerPoint);
        this.myform
          .get('PointsAwarded')
          .setValue(this.machineData.PointsAwarded);
        this.myform
          .get('AdjustedHoldPercentage')
          .setValue(this.machineData.AdjustedHoldPercentage);
        this.myform.get('Section').setValue(this.machineData.Section);
        this.myform.get('Bank').setValue(this.machineData.Bank);
        this.myform.get('Slot').setValue(this.machineData.Slot);
        this.myform.get('IndexZone').setValue(this.machineData.IndexZone);
        this.myform.get('BankSize').setValue(this.machineData.BankSize);
        this.myform.get('SeatPosition').setValue(this.machineData.SeatPosition);
        this.myform.get('leasedTypeCtrl').setValue(this.machineData.LeasedName);
        this.myform
          .get('leasedCategoryTypeCtrl')
          .setValue(this.machineData.LeaseCategoryName);
        this.myform.get('FeeFlat').setValue(this.machineData.FeeFlat);
        this.myform
          .get('FeePercentage')
          .setValue(this.machineData.FeePercentage);
        this.myform.get('FeeStructure').setValue(this.machineData.FeeStructure);
        this.myform.get('ContractId').setValue(this.machineData.ContractId);
        this.myform.get('sbegmCtrl').setValue(this.machineData.SbEgmName);
        this.myform.get('Protocol').setValue(this.machineData.Protocol);
        this.myform
          .get('ProtocolVersion')
          .setValue(this.machineData.ProtocolVersion);
        this.myform
          .get('playerTrackCtrl')
          .setValue(this.machineData.PlayerTrackingTypeName);
        this.myform.get('JackpotLimit').setValue(this.machineData.JackpotLimit);
        this.myform
          .get('PrinterLimitOption')
          .setValue(this.machineData.PrinterLimitOption);
        this.myform
          .get('CreditLimitOption')
          .setValue(this.machineData.CreditLimitOption);
        this.myform
          .get('TicketLimitOption')
          .setValue(this.machineData.TicketLimitOption);
        this.myform
          .get('W2GJackpotAccrualEnabled')
          .setValue(this.machineData.W2GJackpotAccrualEnabled);
        this.myform.get('CWAEnabled').setValue(this.machineData.CWAEnabled);
        this.myform
          .get('ticketingCtrl')
          .setValue(this.machineData.TicketingName);
        this.myform
          .get('fundtransferCtrl')
          .setValue(this.machineData.FundsTransferMethodName);

        this.date = response.MachineChanges[0].Date;
        this.PurchaseDate = this.machineData.PurchaseDate;
        this.InServiceDate = this.machineData.InServiceDate;
        this.myform.get('Notes').setValue(this.machineData.Notes);
        this.filesResponse = this.machineData.Files;

        this.machineData.EpromConfigurations.forEach((v: any) => {
          (<FormArray>this.myform.get('eprom')).push(
            this.formBuilder.group({ epromName: v.Name, epromLabel: v.Label })
          );
        });
        this.machineData.GameConfigurations.forEach((v: any) => {
          (<FormArray>this.myform.get('GameConfigurations')).push(
            this.formBuilder.group({
              themeCtrl: v.ThemeName,
              denominationCtrl: v.DenominationName,
              Par: v.Par,
              MinBet: v.MinBet,
              MaxBet: v.MaxBet,
              EasyBet: v.EasyBet,
              DenominationId: v.DenominationId,
              DenominationValue: v.DenominationValue,
              ThemeId: v.ThemeId,
            })
          );
        });
      });
    } else {
      this.currentPage = 'Add';
      this.addGameConfiguration();
    }
  }
  goBack() {
    if (this.router.url != '/machines/add-machine') {
      this.router.navigate(['machines']);
    } else {
      this.router.navigate(['machines']);
    }
  }
  addSlot(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService.createSlotTypes(postData).subscribe((res: any) => {
      this.slotTypes.push(res);
    });
  }
  addManuFacturer(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService.createManuFacturer(postData).subscribe((res: any) => {
      this.manufacturers.push(res);
    });
  }
  addCabinetType(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService.createCabinetTypes(postData).subscribe((res: any) => {
      this.cabinettypes.push(res);
    });
  }
  addmodelnumberType(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService.createModelNumbers(postData).subscribe((res: any) => {
      this.modelNumbers.push(res);
    });
  }
  adddisplayTypeType(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService.createDisplayTypes(postData).subscribe((res: any) => {
      this.displayTypes.push(res);
    });
  }
  addprogressiveType(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService
      .createProgressiveTypes(postData)
      .subscribe((res: any) => {
        this.progressiveTypes.push(res);
      });
  }
  addleasedType(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService.createLeased(postData).subscribe((res: any) => {
      this.leased.push(res);
    });
  }
  addleasedCategoryType(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService
      .createLeaseCategories(postData)
      .subscribe((res: any) => {
        this.leasedCategories.push(res);
      });
  }
  addSbEgm(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService.createsbEgm(postData).subscribe((res: any) => {
      this.sbEGM.push(res);
    });
  }
  addplayerTrack(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService
      .createPlayerTrackingTypes(postData)
      .subscribe((res: any) => {
        this.playerTrackingTypes.push(res);
      });
  }
  addticketing(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService.createTicketing(postData).subscribe((res: any) => {
      this.ticketing.push(res);
    });
  }
  addfundtransfer(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService
      .createFundsTransferMethod(postData)
      .subscribe((res: any) => {
        this.fundsTransferMethod.push(res);
      });
  }
  addDenomination(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService.createDenominations(postData).subscribe((res: any) => {
      this.denominations.push(res);
    });
  }
  addTheme(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService.createThemes(postData).subscribe((res: any) => {
      this.themes.push(res);
    });
  }
  addscreenType(val: any) {
    let postData = {
      Name: val.value,
    };
    this.machineService.createScreenTypes(postData).subscribe((res: any) => {
      this.screenTypes.push(res);
    });
  }
  get f() {
    return this.myform.controls;
  }
  addEpromForm() {
    (<FormArray>this.myform.get('eprom')).push(this.createEprom());
  }
  createEprom(): FormGroup {
    return this.formBuilder.group({
      epromName: new FormControl('', [Validators.required]),
      epromLabel: new FormControl('', [Validators.required]),
    });
  }
  createGameConfiguration(): FormGroup {
    return this.formBuilder.group({
      themeCtrl: new FormControl('', [Validators.required]),
      denominationCtrl: new FormControl('', [Validators.required]),
      Par: new FormControl('', [Validators.required]),
      MinBet: new FormControl(''),
      MaxBet: new FormControl(''),
      EasyBet: new FormControl(''),
      DenominationId: new FormControl(''),
      DenominationValue: new FormControl(''),
      ThemeId: new FormControl(''),
    });
  }
  ManageNameControl(index: number) {
    var arrayControl = this.myform.get('GameConfigurations') as FormArray;
    this.themeFilteredItems = arrayControl
      .at(index)
      .get('themeCtrl')
      .valueChanges.pipe(
        startWith(''),
        map((item) =>
          item ? this.themesDataTypeItems(item) : this.themes.slice()
        )
      );
    this.denominationFilteredItems = arrayControl
      .at(index)
      .get('denominationCtrl')
      .valueChanges.pipe(
        startWith(''),
        map((item) =>
          item
            ? this.denominationtypefilterItems(item)
            : this.denominations.slice()
        )
      );
  }
  addGameConfiguration() {
    (<FormArray>this.myform.get('GameConfigurations')).push(
      this.createGameConfiguration()
    );
    const controls = <FormArray>this.myform.controls['GameConfigurations'];
    this.ManageNameControl(controls.length - 1);
  }
  copyGameConfiguration(e: any) {
    (<FormArray>this.myform.get('GameConfigurations')).push(e);
  }
  removeGameConfiguration(i: number) {
    (<FormArray>this.myform.get('GameConfigurations')).removeAt(i);
  }
  copyEprom(e: any) {
    (<FormArray>this.myform.get('eprom')).push(e);
  }
  getFormControls(myform: any) {
    return myform.get('eprom').controls;
  }
  getEpromLength(myform: any) {
    return myform.get('eprom').length;
  }

  getGameConfigControls(myform: any) {
    return myform.get('GameConfigurations').controls;
  }

  removeEprom(i: number) {
    (<FormArray>this.myform.get('eprom')).removeAt(i);
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity();
  }
  uploadFileToActivity() {
    this.machineService.postFile(this.fileToUpload).subscribe(
      (data: any) => {
        // do something, if upload success
        console.log(data);
        data.forEach((v: any) => {
          this.filesResponse.push(v);
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  nextState: any;
  activePanelId: any;
  panelShadow($event: NgbPanelChangeEvent, acc: any) {
    this.activePanelId = $event.panelId;
    this.nextState = $event.nextState;
  }
  onChangeDate(event: any) {
    this.date = event;
  }
  onChangePurchaseDate(event: any) {
    this.PurchaseDate = event;
  }
  onChangeInServiceDate(event: any) {
    this.InServiceDate = event;
  }
  gameConfigurationData: any = [];
  epromConfigData: any = [];
  saveMachine() {
    this.formSubmitted = true;
    // if (this.myform.valid) {
    let formData = this.myform.value;
    this.gameConfigurationData = [];
    this.epromConfigData = [];
    formData.GameConfigurations.forEach((v: any) => {
      this.gameConfigurationData.push({
        DenominationId: v.DenominationId,
        DenominationName: v.denominationCtrl,
        DenominationValue: parseInt(v.denominationCtrl.split('$')[1]),
        EasyBet: v.EasyBet,
        MaxBet: v.MaxBet,
        MinBet: v.MinBet,
        Par: v.Par,
        ThemeId: v.ThemeId,
        ThemeName: v.themeCtrl,
      });
    });
    formData.eprom.forEach((v: any) => {
      this.epromConfigData.push({
        Label: v.epromLabel,
        Name: v.epromName,
      });
    });
    let machinePostObj = {
      AdjustedHoldPercentage: formData.AdjustedHoldPercentage,
      Bank: formData.Bank,
      BankSize: formData.BankSize,
      CWAEnabled: formData.CWAEnabled,
      CabinetTypeId: this.CabinetTypeId,
      CabinetTypeName: formData.cabinetCtrl,
      ChangeType: 'null',
      CoinsPerPoint: formData.CoinsPerPoint,
      ContractId: formData.ContractId,
      CreditLimitOption: formData.CreditLimitOption,
      Date: this.date,
      DisplayTypeId: this.DisplayTypeId,
      DisplayTypeName: formData.displayTypeCtrl,
      EpromConfigurations: this.epromConfigData,
      FeeFlat: formData.FeeFlat,
      FeePercentage: formData.FeePercentage,
      FeeStructure: formData.FeeStructure,
      Files: this.filesResponse,
      FirstCoinPercentage: formData.FirstCoinPercentage,
      FundsTransferMethodId: this.FundsTransferMethodId,
      FundsTransferMethodName: formData.fundtransferCtrl,
      GameConfigurations: this.gameConfigurationData,
      GameName: formData.GameName,
      GameType: formData.GameType,
      GliNumber: formData.GliNumber,
      HoldPercentage: formData.HoldPercentage,
      Id: 'null',
      InServiceDate: this.InServiceDate,
      IndexZone: formData.IndexZone,
      JackpotBase: formData.JackpotBase,
      JackpotLimit: formData.JackpotLimit,
      LeaseCategoryId: this.LeaseCategoryId,
      LeaseCategoryName: formData.leasedCategoryTypeCtrl,
      LeasedId: this.LeasedId,
      LeasedName: formData.leasedTypeCtrl,
      MachineConfigurationId: 'null',
      ManufacturerId: this.Manufacturer_Id,
      ManufacturerName: formData.ManufacturerId,
      MaxCoinPercentage: formData.MaxCoinPercentage,
      MaxJackpot: formData.MaxJackpot,
      ModelNumberId: this.ModelNumberId,
      ModelNumberName: formData.modelnumberCtrl,
      Notes: formData.Notes,
      NumberOfReels: formData.NumberOfReels,
      PayLines: formData.PayLines,
      PlayerTrackingTypeId: this.PlayerTrackingTypeId,
      PlayerTrackingTypeName: formData.playerTrackCtrl,
      PointsAwarded: formData.PointsAwarded,
      PrinterLimitOption: formData.PrinterLimitOption,
      ProgressiveTypeId: this.ProgressiveTypeId,
      ProgressiveTypeName: formData.progressiveTypeCtrl,
      Protocol: formData.Protocol,
      ProtocolVersion: formData.ProtocolVersion,
      PurchaseDate: this.PurchaseDate,
      SbEgmId: this.SbEgmId,
      SbEgmName: formData.sbegmCtrl,
      ScreenTypeId: this.ScreenTypeId,
      ScreenTypeName: formData.screenTypeCtrl,
      SeatPosition: formData.SeatPosition,
      Section: formData.Section,
      SerialNumber: formData.SerialNumber,
      Slot: formData.Slot,
      SlotNumber: formData.SlotNumber,
      SlotTypeId: this.SlotTypeId,
      SlotTypeName: formData.SlotTypeCtrl,
      Status: formData.Status,
      SubType: formData.SubType,
      TicketLimitOption: formData.TicketLimitOption,
      TypeId: formData.TypeId,
      W2GJackpotAccrualEnabled: formData.W2GJackpotAccrualEnabled,
    };

    if (this.router.url != '/machines/add-machine') {
      machinePostObj.DisplayTypeId = this.machineData.DisplayTypeId;
      machinePostObj.CabinetTypeId = this.machineData.CabinetTypeId;
      machinePostObj.FundsTransferMethodId =
        this.machineData.FundsTransferMethodId;
      machinePostObj.LeaseCategoryId = this.machineData.LeaseCategoryId;
      machinePostObj.LeasedId = this.machineData.LeasedId;
      machinePostObj.ManufacturerId = this.manufacturerId;
      machinePostObj.ModelNumberId = this.machineData.ModelNumberId;
      machinePostObj.PlayerTrackingTypeId =
        this.machineData.PlayerTrackingTypeId;
      machinePostObj.ProgressiveTypeId = this.machineData.ProgressiveTypeId;
      machinePostObj.SbEgmId = this.machineData.SbEgmId;
      machinePostObj.ScreenTypeId = this.machineData.ScreenTypeId;
      machinePostObj.SlotTypeId = this.machineData.SlotTypeId;
      this.machineService
        .editMachine(
          machinePostObj,
          this.machineData.MachineId,
          this.machineData.Id
        )
        .subscribe(
          (res: any) => {
            this.router.navigateByUrl('/machines');
          },
          (err: any) => {
            if (err.status === 400) {
              const validationError = err.error.ResponseStatus.Errors;

              Object.keys(err.error.ResponseStatus.Errors).forEach((index) => {
                const formControl = this.myform.get(
                  validationError[index].FieldName
                );
                if (formControl) {
                  formControl.setErrors({
                    serverError: validationError[index].Message,
                  });
                }
              });
            }
          }
        );
    } else {
      this.machineService.createMachine(machinePostObj).subscribe(
        (res: any) => {
          this.router.navigateByUrl('/machines');
        },
        (err: any) => {
          if (err.status === 400) {
            const validationError = err.error.ResponseStatus.Errors;
            Object.keys(validationError).forEach((index) => {
              const formControl = this.myform.get(
                validationError[index].FieldName
              );
              if (formControl) {
                formControl.setErrors({
                  serverError: validationError[index].Message,
                });
              }
              let split = validationError[index].FieldName.split('[')[0];
              let error = validationError[index].FieldName.split(']')[0];
              let errorAtIndex = error.split('[')[1];
              let control = validationError[index].FieldName.split('.')[1];

              if (split === 'GameConfigurations') {
                const formG: any = this.myform.get('GameConfigurations');
                formG.controls.forEach((v: any, i: any) => {
                  if (v instanceof FormGroup) {
                    if (i === parseInt(errorAtIndex)) {
                      v.controls[control].setErrors({
                        serverError: validationError[index].Message,
                      });
                    }
                  }
                });
              }
            });
          }
        }
      );
    }
    // }
  }
  removeFile(file: any, index: any) {
    this.filesResponse.splice(index, 1);
  }
}
