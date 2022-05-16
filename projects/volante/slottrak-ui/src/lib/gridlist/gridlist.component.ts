import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@volante/slottrak-app/src/lib/slottrak-app-services';
import { MachinesService } from '@volante/slottrak-machines/src/lib/slottrak-machines-services';
import { debounceTime, map, Observable, startWith, Subject } from 'rxjs';
import { Location } from '@angular/common';
import {
  CdkDragDrop,
  CdkDragRelease,
  CdkDragStart,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'volante-slottrak-ui-gridlist',
  templateUrl: './gridlist.component.html',
  styleUrls: ['./gridlist.component.css'],
})
export class GridlistComponent implements OnInit {
  @Input() data: any;
  @Input() fields: any;
  @Input() serviceName: any;
  @Input() displayid: any;
  @Input() partIdMatch: any;
  @Input() showbutton: any;
  @Input() PropertyId: any;
  qty: any;
  skip = 10;
  take = 20;
  selector = '.grid-inner-container';
  datalength: any;
  pos: any;
  setService: any;
  release: boolean = true;
  showAddbutton = false;
  showSettings = false;
  inputValue: any;
  displayValue: any;
  properties: any = [];
  query: any;
  checkedData: any = [];
  debounceTimer: any;
  filterQuery: any = {};
  authories: any = [];
  filteredUsers: Observable<string[]>;

  myControl = new FormControl();
  filter: any = {
    Skip: 0,
    Take: this.take,
    Include: null,
    SerialNumberContains: null,
    SlotNumberContains: null,
    CategoryContains: null,
    EmployeeNameContains: null,
    NotesContains: null,
    FromDate: null,
    ToDate: null,
    ManufacturerNameContains: null,
    LocationContains: null,
    GameNameContains: null,
    LastNameContains: null,
    UserNameContains: null,
    EmployeeIdContains: null,
    FirstNameContains: null,
    RoleNameContains: null,
    DescriptionContains: null,
    AuthorityGroupContains: null,
    BinContains: null,
    Status: null,
    CabinetTypeContains: null,
    PartDescriptionContains: null,
    PartKeywordNameContains: null,
    PartManufacturerNameContains: null,
    PartNumberContains: null,
    PartPropertyId: null,
    ShelfContains: null,
    TrackedItem: null,
    UnitPriceGreaterThan: null,
    UnitPriceLessThan: null,
    InvoiceNumberContains: null,
    PartOrderItemPartId: null,
    PoNumberContains: null,
    RqNumberContains: null,
    VendorNameContains: null,
    UserAuthId: null,
    PartId: null,
    OrderDateAfter: null,
    OrderDateBefore: null,
    RequisitionerUserAuthId: null,
  };
  parts: any;
  hideButtonOnProgressives = false;
  columns = [
    {
      text: 'Part Number',
      field: 'PartNumber',
      type: 'input',
      placeholder: 'Part Number',
      class: 'filter',
      id: 'PartNumber',
      ngModel: 'PartNumberContains',
      onkeyup: 'PartNumberContains',
    },
    {
      text: 'Manufacturer',
      field: 'PartManufacturer',
      type: 'input',
      placeholder: 'Manufacturer',
      class: 'filter',
      id: 'PartManufacturer',
      ngModel: 'PartManufacturerNameContains',
      onkeyup: 'PartManufacturerNameContains',
    },
    {
      text: 'Cabinet',
      field: 'CabinetType',
      type: 'input',
      placeholder: 'Cabinet',
      class: 'filter',
      id: 'CabinetType',
      ngModel: 'CabinetTypeContains',
      onkeyup: 'CabinetTypeContains',
    },
    {
      text: 'Description',
      field: 'PartDescription',
      type: 'input',
      placeholder: 'Description',
      class: 'filter',
      id: 'PartDescription',
      ngModel: 'PartDescriptionContains',
      onkeyup: 'PartDescriptionContains',
    },
    {
      text: 'Locations',
      field: 'Locations',
      type: 'selectParts',
      placeholder: 'Location',
      class: 'filter',
      id: 'Locations',
      ngModel: 'LocationsContains',
      onkeyup: 'LocationsContains',
    },
    {
      text: 'Keyword',
      field: 'PartKeyword',
      type: 'input',
      placeholder: 'Keyword',
      class: 'filter',
      id: 'PartKeyword',
      ngModel: 'PartKeywordNameContains',
      onkeyup: 'PartKeywordNameContains',
    },
    {
      text: 'Status',
      field: 'Status',
      type: 'selectStatus',
      placeholder: 'Status',
      class: 'filter',
      id: 'Status',
      ngModel: 'Status',
      onkeyup: 'Status',
    },
    {
      text: 'Quantity',
      field: 'Quantity',
      type: 'Quantity',
      placeholder: 'Quantity',
      class: 'filter',
      id: 'Quantity',
    },
  ];
  totalRecords: any;
  offset: any;
  gridFilter = new Subject();
  @Output() checkBoxDataFetched = new EventEmitter<any>();
  @Output() onLinkedParts = new EventEmitter<any>();
  @Output() onaddParts = new EventEmitter<any>();
  permissionsData: any;
  machineEditBtn: any;
  machineViewBtn: any;
  machineDeleteBtn: any;
  mealLogEditBtn: any;
  mealLogViewBtn: any;
  userEditBtn: any;
  partViewBtn: any;
  partOrderViewBtn: any;
  partOrderEditBtn: any;
  partEditBtn: any;
  progressiveViewBtn: any;
  progressiveEditBtn: any;
  excel: any = [];
  users: any = [];
  constructor(
    // public meallogService: MeallogService,
    public renderer2: Renderer2,
    private machineService: MachinesService,
    public router: Router,
    // public userService: UsersService,
    private modalService: NgbModal,
    // private partService: PartServiceService,
    // private loginService: LoginserviceService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    // private progressiveService: ProgressiveService,
    private http: HttpClient
  ) {
    // if (this.router.url === '/users/roles') {
    //   this.userService.getAuthorityGroup({}).subscribe(
    //     (res: any) => {
    //       res.forEach((element) => {
    //         this.authories.push(element);
    //       });
    //     },
    //     (err) => {}
    //   );
    // }
    // if (this.router.url === '/parts/checkedOut') {
    //   // this.myControl.valueChanges
    //   //   .pipe(
    //   //     debounceTime(500),
    //   //     switchMap((value) =>
    //   //       this.userService
    //   //         .getItems({
    //   //           NameContains: value,
    //   //           OrderBy: 'UserName',
    //   //           Skip: 0,
    //   //           Take: 25,
    //   //         })
    //   //         .pipe()
    //   //     )
    //   //   )
    //   //   .subscribe((user: any) => {
    //   //     this.users = [];
    //   //     user.Results.forEach((v) => {
    //   //       this.users.push(v);
    //   //     });
    //   //   });
    // }
    this.gridFilter.pipe(debounceTime(500)).subscribe((value: any) => {
      if (value.fieldDetails === 'SerialNumberContains') {
        this.filter.SerialNumberContains = value.eventDetails;
        this.filterQuery['SerialNumberContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'SlotNumberContains') {
        this.filter.SlotNumberContains = value.eventDetails;
        this.filterQuery['SlotNumberContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'CategoryContains') {
        this.filter.CategoryContains = value.eventDetails;
        this.filterQuery['CategoryContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'NotesContains') {
        this.filter.NotesContains = value.eventDetails;
        this.filterQuery['NotesContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'EmployeeNameContains') {
        this.filter.EmployeeNameContains = value.eventDetails;
        this.filterQuery['EmployeeNameContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'FromDate') {
        if (value.eventDetails !== null || value.eventDetails !== undefined) {
          this.filter.FromDate = value.eventDetails;
          this.filterQuery['FromDate'] = value.eventDetails;
        }
      }
      if (value.fieldDetails === 'ToDate') {
        if (value.eventDetails !== null || value.eventDetails !== undefined) {
          this.filter.ToDate = value.eventDetails;
          this.filterQuery['ToDate'] = value.eventDetails;
        }
      }
      if (value.fieldDetails === 'ManufacturerNameContains') {
        this.filter.ManufacturerNameContains = value.eventDetails;
        this.filterQuery['ManufacturerNameContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'LocationContains') {
        this.filter.LocationContains = value.eventDetails;
        this.filterQuery['LocationContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'GameNameContains') {
        this.filter.GameNameContains = value.eventDetails;
        this.filterQuery['GameNameContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'Status') {
        this.filter.Status = value.eventDetails;
        this.filterQuery['Status'] = value.eventDetails;
      }
      if (value.fieldDetails === 'EmployeeIdContains') {
        this.filter.EmployeeIdContains = value.eventDetails;
        this.filterQuery['EmployeeIdContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'UserNameContains') {
        this.filter.UserNameContains = value.eventDetails;
        this.filterQuery['UserNameContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'FirstNameContains') {
        this.filter.FirstNameContains = value.eventDetails;
        this.filterQuery['FirstNameContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'LastNameContains') {
        this.filter.LastNameContains = value.eventDetails;
        this.filterQuery['LastNameContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'RoleNameContains') {
        this.filter.RoleNameContains = value.eventDetails;
        this.filterQuery['RoleNameContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'DescriptionContains') {
        this.filter.DescriptionContains = value.eventDetails;
        this.filterQuery['DescriptionContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'AuthorityGroupContains') {
        this.filter.AuthorityGroupContains = value.eventDetails;
        this.filterQuery['AuthorityGroupContains'] = value.eventDetails;
      }

      if (value.fieldDetails === 'PartNumberContains') {
        this.filter.PartNumberContains = value.eventDetails;
        this.filterQuery['PartNumberContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'PartManufacturerNameContains') {
        this.filter.PartManufacturerNameContains = value.eventDetails;
        this.filterQuery['PartManufacturerNameContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'CabinetTypeContains') {
        this.filter.CabinetTypeContains = value.eventDetails;
        this.filterQuery['CabinetTypeContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'PartDescriptionContains') {
        this.filter.PartDescriptionContains = value.eventDetails;
        this.filterQuery['PartDescriptionContains'] = value.eventDetails;
      }

      if (value.fieldDetails === 'PartPropertyId') {
        this.filter.PartPropertyId = value.eventDetails;
        this.filterQuery['PartPropertyId'] = value.eventDetails;
      }
      if (value.fieldDetails === 'PartKeywordNameContains') {
        this.filter.PartKeywordNameContains = value.eventDetails;
        this.filterQuery['PartKeywordNameContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'BinContains') {
        this.filter.BinContains = value.eventDetails;
        this.filterQuery['BinContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'ShelfContains') {
        this.filter.ShelfContains = value.eventDetails;
        this.filterQuery['ShelfContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'TrackedItem') {
        this.filter.TrackedItem = value.eventDetails;
        this.filterQuery['TrackedItem'] = value.eventDetails;
      }
      if (value.fieldDetails === 'UnitPriceGreaterThan') {
        this.filter.UnitPriceGreaterThan = value.eventDetails;
        this.filterQuery['UnitPriceGreaterThan'] = value.eventDetails;
      }
      if (value.fieldDetails === 'UnitPriceLessThan') {
        this.filter.UnitPriceLessThan = value.eventDetails;
        this.filterQuery['UnitPriceLessThan'] = value.eventDetails;
      }
      if (value.fieldDetails === 'InvoiceNumberContains') {
        this.filter.InvoiceNumberContains = value.eventDetails;
        this.filterQuery['InvoiceNumberContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'PoNumberContains') {
        this.filter.PoNumberContains = value.eventDetails;
        this.filterQuery['PoNumberContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'RqNumberContains') {
        this.filter.RqNumberContains = value.eventDetails;
        this.filterQuery['RqNumberContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'VendorNameContains') {
        this.filter.VendorNameContains = value.eventDetails;
        this.filterQuery['VendorNameContains'] = value.eventDetails;
      }
      if (value.fieldDetails === 'OrderDateAfter') {
        this.filter.OrderDateAfter = value.eventDetails;
        this.filterQuery['OrderDateAfter'] = value.eventDetails;
      }
      if (value.fieldDetails === 'OrderDateBefore') {
        this.filter.OrderDateBefore = value.eventDetails;
        this.filterQuery['OrderDateBefore'] = value.eventDetails;
      }

      // if (value.serviceDetails === 'mealLogService') {
      //   this.filter.Take = this.take;
      //   this.meallogService.getItems(this.filter).subscribe((res) => {
      //     this.data = res;
      //   });
      // }
      // if (value.serviceDetails === 'userService') {
      //   this.filter.Take = this.take;
      //   this.userService.getItems(this.filter).subscribe((res) => {
      //     this.data = res;
      //   });
      // }
      // if (value.serviceDetails === 'roleService') {
      //   this.filter.Take = this.take;
      //   this.userService.getRoles(this.filter).subscribe((res) => {
      //     this.data = res;
      //   });
      // }
      if (value.serviceDetails === 'machineService') {
        this.skip = 10;
        this.filter.Take = this.take;
        let filters = JSON.parse(sessionStorage.getItem('machine'));

        if (filters != null) {
          Object.keys(this.filterQuery).forEach((k) => {
            filters[k] = this.filterQuery[k];
          });
          sessionStorage.setItem('machine', JSON.stringify(filters));
          this.machineService.getItems(this.filter).subscribe((res) => {
            this.data = res;
          });
        } else {
          sessionStorage.setItem('machine', JSON.stringify(this.filterQuery));
          this.machineService.getItems(this.filter).subscribe((res) => {
            this.data = res;
          });
        }
      }
      // if (value.serviceDetails === 'partsService') {
      //   this.filter.Take = this.take;
      //   this.filter.Include = 'Locations';
      //   let filters = JSON.parse(sessionStorage.getItem('part'));
      //   if (filters != null) {
      //     Object.keys(this.filterQuery).forEach((k) => {
      //       filters[k] = this.filterQuery[k];
      //     });
      //     sessionStorage.setItem('part', JSON.stringify(filters));
      //     this.partService.getItems(this.filter).subscribe((res) => {
      //       this.data = res;
      //     });
      //   } else {
      //     sessionStorage.setItem('part', JSON.stringify(this.filterQuery));
      //     this.partService.getItems(this.filter).subscribe((res) => {
      //       this.data = res;
      //     });
      //   }
      // }
      // if (value.serviceDetails === 'partsOrderService') {
      //   this.filter.Take = this.take;
      //   this.partService.getOrders(this.filter).subscribe((res) => {
      //     this.data = res;
      //   });
      // }
      // if (value.serviceDetails === 'partsOrderTableService') {
      //   this.filter.Take = this.take;
      //   this.partService.getOrders(this.filter).subscribe((res) => {
      //     this.data = res;
      //   });
      // }
      // if (value.serviceDetails === 'checkoutServicePage') {
      //   this.filter.Take = this.take;
      //   this.filter.Include = 'Locations';
      //   this.filter.PartPropertyId = this.PropertyId;
      //   this.filter.Status = 'Active';

      //   let filters = JSON.parse(sessionStorage.getItem('part'));
      //   if (filters != null) {
      //     Object.keys(this.filterQuery).forEach((k) => {
      //       filters[k] = this.filterQuery[k];
      //     });
      //     sessionStorage.setItem('part', JSON.stringify(filters));
      //     this.partService.getItems(this.filter).subscribe((res) => {
      //       this.data = res;
      //     });
      //   } else {
      //     sessionStorage.setItem('part', JSON.stringify(this.filterQuery));
      //     this.partService.getItems(this.filter).subscribe((res) => {
      //       this.data = res;
      //     });
      //   }
      // }
      // if (value.serviceDetails === 'partsCheckService') {
      //   this.setService = 'partsCheckService';
      //   this.filter.Take = this.take;
      //   this.filter.Status = 'Active';
      //   this.filter.Include = 'Locations';
      //   let filters = JSON.parse(sessionStorage.getItem('part'));
      //   if (filters != null) {
      //     Object.keys(this.filterQuery).forEach((k) => {
      //       filters[k] = this.filterQuery[k];
      //     });
      //     sessionStorage.setItem('part', JSON.stringify(filters));
      //     this.partService.getItems(this.filter).subscribe((res) => {
      //       this.data = res;
      //     });
      //   } else {
      //     sessionStorage.setItem('part', JSON.stringify(this.filterQuery));
      //     this.partService.getItems(this.filter).subscribe((res) => {
      //       this.data = res;
      //     });
      //   }
      // }
    });
  }

  ngOnInit(): void {
    this.displayValue = '#' + this.displayid;

    if (this.router.url === '/machines') {
      this.authService.profile().subscribe((res) => {
        this.permissionsData = res.Permissions;
        const machineEdit = this.permissionsData.find(
          (e: any) =>
            e.PermissionName === 'machineEdit' || e.PermissionName === 'Admin'
        );
        if (machineEdit) {
          this.machineEditBtn = true;
        } else {
          this.machineEditBtn = false;
        }
        const machineView = this.permissionsData.find(
          (e: any) =>
            e.PermissionName === 'machineView' || e.PermissionName === 'Admin'
        );
        if (machineView) {
          this.machineViewBtn = true;
        } else {
          this.machineViewBtn = false;
        }

        const machineDelete = this.permissionsData.find(
          (e: any) =>
            e.PermissionName === 'machineDelete' || e.PermissionName === 'Admin'
        );
        if (machineDelete) {
          this.machineDeleteBtn = true;
        } else {
          this.machineDeleteBtn = false;
        }
      });

      let filters = JSON.parse(sessionStorage.getItem('machine'));
      if (filters != null) {
        Object.keys(filters).forEach((k: any) => {
          this.filter[k] = filters[k];
        });
        this.machineService.getItems(this.filter).subscribe((res) => {
          this.data = res;
        });
      }
      let positions = JSON.parse(sessionStorage.getItem('columnPosition'));
      if (positions != null) {
        this.fields = positions;
      }
    }
    // else if (this.router.url === '/mealLog') {
    //   let mealpositions = JSON.parse(
    //     sessionStorage.getItem('mealLogColumnPosition')
    //   );
    //   if (mealpositions != null) {
    //     this.fields = mealpositions;
    //   }
    //   this.authService.profile().subscribe((res) => {
    //     this.permissionsData = res.Permissions;

    //     const mealLogEdit = this.permissionsData.find(
    //       (e) =>
    //         e.PermissionName === 'mealLogUpdate' || e.PermissionName === 'Admin'
    //     );
    //     if (mealLogEdit) {
    //       this.mealLogEditBtn = true;
    //     } else {
    //       this.mealLogEditBtn = false;
    //     }
    //     const mealLogView = this.permissionsData.find(
    //       (e) =>
    //         e.PermissionName === 'mealLogView' || e.PermissionName === 'Admin'
    //     );
    //     if (mealLogView) {
    //       this.mealLogViewBtn = true;
    //     } else {
    //       this.mealLogViewBtn = false;
    //     }
    //   });
    // } else if (this.router.url === '/users') {
    //   this.authService.profile().subscribe((res) => {
    //     this.permissionsData = res.Permissions;
    //     const userEdit = this.permissionsData.find(
    //       (e) =>
    //         e.PermissionName === 'userModify' || e.PermissionName === 'Admin'
    //     );
    //     if (userEdit) {
    //       this.userEditBtn = true;
    //     } else {
    //       this.userEditBtn = false;
    //     }
    //   });

    //   let userquery = {
    //     UserAuthId: null,
    //     NameContains: null,
    //     FirstNameContains: null,
    //     LastNameContains: null,
    //     UsernameContains: null,
    //     Username: null,
    //     Email: null,
    //     Meta: null,
    //     Skip: null,
    //     Take: null,
    //     OrderBy: null,
    //     OrderByDesc: null,
    //     Include: null,
    //     Fields: null,
    //     EmployeeId: null,
    //     EmployeeIdContains: null,
    //   };

    //   this.userService.getItems(userquery).subscribe((res) => {
    //     this.data = res;
    //   });
    // } else if (this.router.url === '/users/roles') {
    //   let rolequery = {
    //     RoleNameContains: null,
    //     DescriptionContains: null,
    //     AuthorityGroupContains: null,
    //     RoleName: null,
    //     Meta: null,
    //     Skip: 0,
    //     Take: 10,
    //     OrderBy: null,
    //     OrderByDesc: null,
    //     Include: null,
    //     Fields: null,
    //   };
    //   this.userService.getRoles(rolequery).subscribe((res) => {
    //     this.data = res;
    //   });
    // } else if (this.router.url === '/parts') {
    //   this.partService.getProperties({}).subscribe(
    //     (res) => {
    //       res.Results.forEach((v) => {
    //         this.properties.push(v);
    //       });
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    //   let filters = JSON.parse(sessionStorage.getItem('part'));
    //   if (filters != null) {
    //     Object.keys(filters).forEach((k: any) => {
    //       this.filter[k] = filters[k];
    //     });

    //     this.filter.Include = 'Locations';
    //     this.partService.getItems(this.filter).subscribe((res) => {
    //       this.data = res;
    //     });
    //   }
    //   let positions = JSON.parse(sessionStorage.getItem('columnPosition'));
    //   if (positions != null) {
    //     this.fields = positions;
    //   }
    //   this.authService.profile().subscribe((res) => {
    //     this.permissionsData = res.Permissions;
    //     const partView = this.permissionsData.find(
    //       (e) => e.PermissionName === 'partView' || e.PermissionName === 'Admin'
    //     );
    //     if (partView) {
    //       this.partViewBtn = true;
    //     } else {
    //       this.partViewBtn = false;
    //     }
    //     const partEdit = this.permissionsData.find(
    //       (e) => e.PermissionName === 'partEdit' || e.PermissionName === 'Admin'
    //     );
    //     if (partEdit) {
    //       this.partEditBtn = true;
    //     } else {
    //       this.partEditBtn = false;
    //     }
    //   });
    // } else if (this.router.url === '/parts/checkedOut') {
    //   this.query = {
    //     NameContains: '',
    //     OrderBy: 'UserName',
    //     Skip: 0,
    //     Take: 25,
    //   };
    //   this.userService.getItems(this.query).subscribe((res) => {
    //     //  this.users = res.Results;
    //     res.Results.forEach((v) => {
    //       this.users.push(v);
    //     });

    //     this.filteredUsers = this.myControl.valueChanges.pipe(
    //       startWith(''),
    //       map((value) => (value ? this._filter(value) : this.users.slice()))
    //     );
    //   });

    //   if (this.setService === 'partsCheckService') {
    //     this.query = {
    //       Status: 'Active',
    //       Skip: 0,
    //       Take: 10,
    //     };
    //     this.partService.getItems(this.query).subscribe(
    //       (res) => {
    //         this.data = res;
    //         this.totalRecords = res.Total;
    //         this.offset = res.Offset;
    //       },
    //       (err) => {
    //         console.log(err);
    //       }
    //     );
    //   }
    // } else if (this.router.url === '/parts/orders') {
    //   this.query = {
    //     NameContains: '',
    //     OrderBy: 'UserName',
    //     Skip: 0,
    //     Take: 25,
    //   };
    //   this.filteredUsers = this.myControl.valueChanges.pipe(
    //     startWith(''),
    //     debounceTime(400),
    //     distinctUntilChanged(),
    //     switchMap((val) => {
    //       if (val !== '') {
    //         return this._filter1(val || '');
    //       } else {
    //         this.partService
    //           .getOrders({ Skip: 0, Take: 10 })
    //           .subscribe((res) => {
    //             this.data = res;
    //           });
    //         return this._filter1(val || '');
    //       }
    //     })
    //   );
    //   this.partService.getOrders(this.filter).subscribe((res) => {
    //     this.data = res;
    //   });
    //   this.authService.profile().subscribe((res) => {
    //     this.permissionsData = res.Permissions;
    //     const partOrderView = this.permissionsData.find(
    //       (e) =>
    //         e.PermissionName === 'partOrderView' || e.PermissionName === 'Admin'
    //     );
    //     if (partOrderView) {
    //       this.partOrderViewBtn = true;
    //     } else {
    //       this.partOrderViewBtn = false;
    //     }
    //     const partOrderEdit = this.permissionsData.find(
    //       (e) =>
    //         e.PermissionName === 'partOrderEdit' || e.PermissionName === 'Admin'
    //     );
    //     if (partOrderEdit) {
    //       this.partOrderEditBtn = true;
    //     } else {
    //       this.partOrderEditBtn = false;
    //     }
    //   });
    // } else if (this.router.url === '/machines/progressives') {
    //   this.showSettings = true;
    //   this.authService.profile().subscribe((res) => {
    //     this.permissionsData = res.Permissions;
    //     const progressiveView = this.permissionsData.find(
    //       (e) =>
    //         e.PermissionName === 'machines.progressives.read' ||
    //         e.PermissionName === 'Admin'
    //     );
    //     if (progressiveView) {
    //       this.progressiveViewBtn = true;
    //     } else {
    //       this.progressiveViewBtn = false;
    //     }
    //     const progressiveEdit = this.permissionsData.find(
    //       (e) =>
    //         e.PermissionName === 'machines.progressives.write' ||
    //         e.PermissionName === 'Admin'
    //     );
    //     if (progressiveEdit) {
    //       this.progressiveEditBtn = true;
    //     } else {
    //       this.progressiveEditBtn = false;
    //     }
    //   });
    // } else if (this.router.url === '/machines/progressives/controllers') {
    //   this.showAddbutton = false;
    //   this.hideButtonOnProgressives = true;
    //   this.showSettings = true;
    // } else if (
    //   this.router.url === '/machines/progressives/meterReadingSettings'
    // ) {
    //   this.showAddbutton = false;
    //   this.hideButtonOnProgressives = true;
    //   this.showSettings = true;
    // } else if (
    //   this.router.url === '/machines/progressives/validationSettings'
    // ) {
    //   this.showAddbutton = false;
    //   this.hideButtonOnProgressives = true;
    //   this.showSettings = true;
    // } else if (this.router.url === '/machines/progressives/meterReadings') {
    //   this.showAddbutton = false;
    //   this.hideButtonOnProgressives = true;
    //   this.showSettings = true;
    // } else {
    //   if (this.partIdMatch) {
    //     this.filter.PartOrderItemPartId =
    //       this.route.snapshot.paramMap.get('id');
    //     this.partService.getOrders(this.filter).subscribe((res) => {
    //       this.data = res;
    //     });
    //   } else {
    //     this.showAddbutton = true;
    //   }
    // }
  }
  // private _filter1(value: string): Observable<any[]> {
  //   this.query.NameContains = value;
  //   return this.userService.getItems(this.query).pipe(
  //     map((response: any) =>
  //       response.Results.filter((option) => {
  //         return option.DisplayName.toLowerCase().includes(value);
  //       })
  //     )
  //   );
  // }
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.users.filter((option) =>
  //     option.DisplayName.toLowerCase().includes(filterValue)
  //   );
  // }
  changeTrackedItem(d: any, event: any) {
    // let putData = { trackedItem: event.target.checked };
    // this.partService.setTrackedIten(d.Id, putData).subscribe(
    //   (res) => {},
    //   (err) => {}
    // );
  }
  ngOnDestroy() {
    this.gridFilter.complete();
  }
  onChange(event: any, field: any, serviceName: any) {
    console.log(event);
    this.gridFilter.next({
      eventDetails: event,
      fieldDetails: field,
      serviceDetails: serviceName,
    });
  }
  selectedCheckoutBy(event: any) {
    this.filter.UserAuthId = event.option.id;
    this.filterQuery['UserAuthId'] = event.option.id;
    this.filter.Take = this.take;
    // this.partService.getCheckOutList(this.filter).subscribe((res:any) => {
    //   this.data = res;
    // });
  }
  selectedRequisitioner(event: any) {
    this.filter.RequisitionerUserAuthId = event.option.id;
    this.filterQuery['RequisitionerUserAuthId'] = event.option.id;
    this.filter.Take = this.take;
    // this.partService.getOrders(this.filter).subscribe((res) => {
    //   this.data = res;
    // });
  }
  clearFilters(serviceName: any) {
    if (serviceName === 'mealLogService') {
      this.filter.SerialNumberContains = null;
      this.filter.SlotNumberContains = null;
      this.filter.CategoryContains = null;
      this.filter.EmployeeNameContains = null;
      this.filter.FromDate = null;
      this.filter.ToDate = null;
      this.ngOnInit();
    }
    if (serviceName === 'machineService') {
      this.filter.SerialNumberContains = null;
      this.filter.SlotNumberContains = null;
      this.filter.ManufacturerNameContains = null;
      this.filter.GameNameContains = null;
      this.filter.LocationContains = null;
      this.filterQuery = {};
      sessionStorage.setItem('machine', JSON.stringify(this.filterQuery));
      this.ngOnInit();
    }
    if (serviceName === 'userService') {
      this.filter.EmployeeIdContains = null;
      this.filter.UserNameContains = null;
      this.filter.FirstNameContains = null;
      this.filter.LastNameContains = null;
      this.filterQuery = {};
      sessionStorage.setItem('machine', JSON.stringify(this.filterQuery));
      this.ngOnInit();
    }
    if (serviceName === 'roleService') {
      this.filter.RoleNameContains = null;
      this.filter.DescriptionContains = null;
      this.filter.AuthorityGroupContains = null;
      this.filterQuery = {};
      sessionStorage.setItem('machine', JSON.stringify(this.filterQuery));
      this.ngOnInit();
    }
    if (serviceName === 'partsService') {
      this.filter.PartDescriptionContains = null;
      this.filter.PartKeywordNameContains = null;
      this.filter.PartManufacturerNameContains = null;
      this.filter.PartNumberContains = null;
      this.filter.PartPropertyId = null;
      this.filter.BinContains = null;
      this.filter.ShelfContains = null;
      this.filter.CabinetTypeContains = null;
      this.filter.TrackedItem = '';
      this.filter.UnitPriceGreaterThan = null;
      this.filter.UnitPriceLessThan = null;
      this.filterQuery = {};
      sessionStorage.setItem('part', JSON.stringify(this.filterQuery));

      this.ngOnInit();
    }
    if (serviceName === 'partsOrderService') {
      this.filter.Status = '';
      this.filter.InvoiceNumberContains = null;
      this.filter.PoNumberContains = null;
      this.filter.RqNumberContains = null;
      this.filter.VendorNameContains = null;
      this.ngOnInit();
    }
    if (serviceName === 'partsOrderTableService') {
      this.filter.Status = '';
      this.filter.InvoiceNumberContains = null;
      this.filter.PoNumberContains = null;
      this.filter.RqNumberContains = null;
      this.filter.VendorNameContains = null;
      this.ngOnInit();
    }
    if (serviceName === 'checkoutService') {
      this.filter.UserAuthId = null;
      this.filter.PartNumberContains = null;
      this.partName = '';
      this.myControl.setValue(null);
      this.query = {
        Meta: null,
        Skip: 0,
        Take: 10,
        OrderBy: null,
        OrderByDesc: null,
        Include: null,
        Fields: null,
        PartId: null,
        UserAuthId: null,
      };
      // this.partService.getCheckOutList(this.query).subscribe(
      //   (res) => {
      //     this.data = res;
      //   },
      //   (err) => {}
      // );
    }
    if (serviceName === 'partsCheckService') {
      this.filter.PartDescriptionContains = null;
      this.filter.PartKeywordNameContains = null;
      this.filter.PartManufacturerNameContains = null;
      this.filter.PartNumberContains = null;
      this.filter.PartPropertyId = null;
      this.filter.BinContains = null;
      this.filter.ShelfContains = null;
      this.filter.CabinetTypeContains = null;
      this.filter.TrackedItem = '';
      this.filter.UnitPriceGreaterThan = null;
      this.filter.UnitPriceLessThan = null;
      this.filterQuery = {};
      sessionStorage.setItem('part', JSON.stringify(this.filterQuery));
      this.ngOnInit();
    }
  }
  onScroll(total: any, datalength: any, serviceName: any) {
    this.datalength = datalength;
    if (this.datalength < total) {
      this.query = {
        Skip: this.skip,
        Take: this.take,
      };

      // if (serviceName === 'mealLogService') {
      //   this.meallogService.getItems(this.query).subscribe((res:any) => {
      //     res.Results.forEach((v) => {
      //       this.data.Results.push(v);
      //     });
      //     this.datalength = this.datalength + res.Results.length;
      //     this.skip = this.datalength;
      //     this.take = this.take;
      //   });
      // } else
      if (serviceName === 'machineService') {
        this.query.Status = this.filter.Status;
        this.query.SerialNumberContains = this.filter.SerialNumberContains;
        this.query.ManufacturerNameContains =
          this.filter.ManufacturerNameContains;
        this.query.SlotNumberContains = this.filter.SlotNumberContains;
        this.query.LocationContains = this.filter.LocationContains;
        this.query.GameNameContains = this.filter.GameNameContains;
        this.machineService.getItems(this.query).subscribe((res) => {
          res.Results.forEach((v: any) => {
            this.data.Results.push(v);
          });
          this.datalength = this.datalength + res.Results.length;
          this.skip = this.datalength;
          this.take = this.take;
        });
      }
      //  else if (serviceName === 'userService') {
      //   this.userService.getItems(this.query).subscribe((res) => {
      //     res.Results.forEach((v) => {
      //       this.data.Results.push(v);
      //     });
      //     this.datalength = this.datalength + res.Results.length;
      //     this.skip = this.datalength;
      //     this.take = this.take;
      //   });
      // } else if (serviceName === 'roleService') {
      //   this.userService.getRoles(this.query).subscribe((res) => {
      //     res.Results.forEach((v) => {
      //       this.data.Results.push(v);
      //     });
      //     this.datalength = this.datalength + res.Results.length;
      //     this.skip = this.datalength;
      //     this.take = this.take;
      //   });
      // } else if (serviceName === 'partsService') {
      //   this.query = {
      //     Skip: this.skip,
      //     Take: this.take,
      //     Status: 'Active',
      //     TrackedItem: '',
      //     Include: 'Locations',
      //   };
      //   this.partService.getItems(this.query).subscribe((res) => {
      //     res.Results.forEach((v) => {
      //       this.data.Results.push(v);
      //     });
      //     this.datalength = this.datalength + res.Results.length;
      //     this.skip = this.datalength;
      //     this.take = this.take;
      //   });
      // } else if (serviceName === 'checkoutService') {
      //   this.partService.getCheckOutList(this.query).subscribe((res) => {
      //     res.Results.forEach((v) => {
      //       this.data.Results.push(v);
      //     });
      //     this.datalength = this.datalength + res.Results.length;
      //     this.skip = this.datalength;
      //     this.take = this.take;
      //   });
      // } else if (serviceName === 'checkoutServicePage') {
      //   this.query.Status = 'Active';
      //   this.query.PartPropertyId = this.PropertyId;
      //   this.partService.getItems(this.query).subscribe((res) => {
      //     res.Results.forEach((v) => {
      //       this.data.Results.push(v);
      //     });
      //     this.datalength = this.datalength + res.Results.length;
      //     this.skip = this.datalength;
      //     this.take = this.take;
      //   });
      // } else if (this.setService === 'partsCheckService') {
      //   this.query.Status = 'Active';
      //   this.partService.getItems(this.query).subscribe(
      //     (res) => {
      //       res.Results.forEach((v) => {
      //         this.data.Results.push(v);
      //       });
      //       this.datalength = this.datalength + res.Results.length;
      //       this.skip = this.datalength;
      //       this.take = this.take;
      //     },
      //     (err) => {
      //       console.log(err);
      //     }
      //   );
      // } else if (serviceName === 'partsOrderTableService') {
      //   this.partService.getOrders(this.query).subscribe((res) => {
      //     res.Results.forEach((v) => {
      //       this.data.Results.push(v);
      //     });
      //     this.datalength = this.datalength + res.Results.length;
      //     this.skip = this.datalength;
      //     this.take = this.take;
      //   });
      // } else if (serviceName === 'progressiveService') {
      //   this.progressiveService
      //     .getItemsProgressives(this.query)
      //     .subscribe((res: any) => {
      //       res.Result.Results.forEach((v) => {
      //         this.data.Results.push(v);
      //       });
      //       this.datalength = this.datalength + res.Result.Results.length;
      //       this.skip = this.datalength;
      //       this.take = this.take;
      //     });
      // } else if (serviceName === 'progressiveControllerService') {
      //   this.progressiveService
      //     .getItemsOfProgressiveControllerType(this.query)
      //     .subscribe((res: any) => {
      //       res.Result.Results.forEach((v) => {
      //         this.data.Results.push(v);
      //       });
      //       this.datalength = this.datalength + res.Result.Results.length;
      //       this.skip = this.datalength;
      //       this.take = this.take;
      //     });
      // } else if (serviceName === 'progressiveMeterReadingSettingService') {
      //   this.progressiveService
      //     .getItemsOfProgressiveMeterReadingSetting(this.query)
      //     .subscribe((res: any) => {
      //       res.Result.Results.forEach((v) => {
      //         this.data.Results.push(v);
      //       });
      //       this.datalength = this.datalength + res.Result.Results.length;
      //       this.skip = this.datalength;
      //       this.take = this.take;
      //     });
      // } else if (serviceName === 'progressiveValidationSettingsService') {
      //   this.progressiveService
      //     .getItemsOfProgressiveValidationSetting(this.query)
      //     .subscribe((res: any) => {
      //       res.Result.Results.forEach((v) => {
      //         this.data.Results.push(v);
      //       });
      //       this.datalength = this.datalength + res.Result.Results.length;
      //       this.skip = this.datalength;
      //       this.take = this.take;
      //     });
      // } else if (serviceName === 'progressiveMeterReadingsService') {
      //   this.query.OrderBy =
      //     '-ProgressiveMeterReadingTime,ProgressiveDefinitionName,ProgressiveDailyMachineSlotNumber,ProgressiveDefinitionGameId,ProgressiveDefinitionGameLevelId';
      //   this.progressiveService
      //     .getItemsOfProgressiveMeterReadings(this.query)
      //     .subscribe((res: any) => {
      //       res.Result.Results.forEach((v) => {
      //         this.data.Results.push(v);
      //       });
      //       this.datalength = this.datalength + res.Result.Results.length;
      //       this.skip = this.datalength;
      //       this.take = this.take;
      //     });
      // }
    } else if (serviceName === 'partsOrderService') {
      // this.query.PartOrderItemPartId = this.route.snapshot.paramMap.get('id');
      // this.partService.getOrders(this.query).subscribe((res) => {
      //   res.Results.forEach((v) => {
      //     this.data.Results.push(v);
      //   });
      //   this.datalength = this.datalength + res.Results.length;
      //   this.skip = this.datalength;
      //   this.take = this.take;
      // });
    }
  }

  dropRow(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data.Results, event.previousIndex, event.currentIndex);
  }
  dropCol(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
    if (this.router.url === '/machines') {
      sessionStorage.setItem('columnPosition', JSON.stringify(this.fields));
    }
    if (this.router.url === '/mealLog') {
      sessionStorage.setItem(
        'mealLogColumnPosition',
        JSON.stringify(this.fields)
      );
    }
  }
  mouseDown(event: any, el: any = null) {
    el = el || event.target;
    this.pos = {
      x: el.getBoundingClientRect().left - event.clientX + 'px',
      y: el.getBoundingClientRect().top - event.clientY + 'px',
      width: el.getBoundingClientRect().width + 'px',
    };
  }
  onDragRelease(event: CdkDragRelease) {
    this.renderer2.setStyle(
      event.source.element.nativeElement,
      'margin-left',
      '0px'
    );
  }

  sumQuantity(q: any) {
    this.qty = 0;
    q.forEach((v: any) => {
      this.qty = this.qty + v.Quantity;
    });
    return this.qty;
  }

  onCheckboxChange(event: any, d: any, serviceName: any, index: any) {
    if (serviceName === 'machineService') {
      if (event.target.checked === true) {
        this.checkedData.push(d);
      } else if (event.target.checked === false) {
        this.checkedData.forEach((v: any, i: any) => {
          if (v.Id === d.Id) {
            this.checkedData.splice(i, 1);
          }
        });
      }
      this.checkBoxDataFetched.emit(this.checkedData);
    }
  }
  editFunction(d: any, serviceName: any) {
    console.log(d);
    if (serviceName === 'machineService') {
      this.router.navigateByUrl(
        '/machines/' + d.Id + '/edit/' + d.MachineConfigurationId
      );
    }
    if (serviceName === 'mealLogService') {
      localStorage.setItem('mealLogforEdit', JSON.stringify(d));
      this.router.navigateByUrl('/mealLog/edit/' + d.Id);
    }
    if (serviceName === 'userService') {
      localStorage.setItem('route', '/users/' + d.UserAuthId);
      this.router.navigateByUrl('/users/' + d.UserAuthId);
    }
    if (serviceName === 'partsOrderTableService') {
      localStorage.setItem('route', '/parts/orders/' + d.Id + '/edit');
      this.router.navigateByUrl('/parts/orders/' + d.Id + '/edit');
    }
  }
  infoButtonClick(d: any, serviceName: any) {
    console.log(d, serviceName);
    // if (serviceName === 'machineService') {
    //   this.authService.profile().subscribe(
    //     (res) => {
    //       this.permissionsData = res.Permissions;
    //       this.loginService.permissions.next({
    //         Permissions: this.permissionsData,
    //       });
    //     },
    //     (err) => {}
    //   );
    //   this.router.navigate(['/machines/' + d.Id]);
    // }
    // if (serviceName === 'mealLogService') {
    //   localStorage.setItem('meallogIfo', JSON.stringify(d));
    //   this.router.navigate(['/mealLog/' + d.Id]);
    // }
    // if (serviceName === 'partsService') {
    //   localStorage.setItem('partInfo', JSON.stringify(d));
    //   localStorage.setItem('route', '/parts/' + d.Id + '/locations');
    //   this.router.navigate(['/parts/' + d.Id + '/locations']);
    // }
    // if (serviceName === 'partsOrderTableService') {
    //   localStorage.setItem('route', '/parts/orders/' + d.Id);
    //   this.router.navigate(['/parts/orders/' + d.Id]);
    // }
    // if (serviceName === 'progressiveService') {
    //   localStorage.setItem(
    //     'route',
    //     '/machines/progressives/' + d.Id + '/machines'
    //   );
    //   this.router.navigate(['/machines/progressives/' + d.Id + '/machines']);
    // }
  }
  lockUser(id: any) {
    let postData = {
      lock: true,
    };
    // this.userService.lockUnlockUser(postData, id).subscribe(
    //   (res:any) => {
    //     this.ngOnInit();
    //   },
    //   (err:any) => {}
    // );
  }
  unlockUser(id: any) {
    this.query = {
      Skip: 0,
      Take: 10,
    };
    let postData = {
      lock: false,
    };
    // this.userService.lockUnlockUser(postData, id).subscribe(
    //   (res) => {
    //     this.ngOnInit();
    //   },
    //   (err) => {}
    // );
  }
  setPassword(user: any) {
    // const modalRef = this.modalService.open(SetPasswordComponent, {
    //   centered: true,
    //   windowClass: 'modal-l',
    //   backdrop: 'static',
    // });
    // modalRef.componentInstance.userData = user;
  }
  ResetPassword(user: any) {
    let postData = {
      Username: user.UserName,
    };
    // this.userService.resetPassword(postData).subscribe(
    //   (res) => {
    //     Swal.fire('Password Reset Successfully!', '', 'success');
    //   },
    //   (err) => {}
    // );
  }
  deleteRole(role: any) {
    // this.userService.deleteRole(role.Id).subscribe(
    //   (res) => {
    //     this.ngOnInit();
    //   },
    //   (err) => {
    //     console.log(err);
    //     if (err.status === 400) {
    //       Swal.fire('Error!', err.error.ResponseStatus.Message, 'error');
    //     }
    //   }
    // );
  }
  linkedParts(d: any) {
    // this.query = {
    //   Skip: 0,
    //   Take: 20,
    //   Status: 'Active',
    //   PartGroupId: d.PartGroupId,
    //   Include: 'Locations',
    // };
    // this.partService.getItems(this.query).subscribe((res) => {
    //   this.onLinkedParts.emit(res);
    // });
  }
  getVal(d: any) {
    return d.QuantityOrdered - d.Quantity;
  }

  addPartToBlock(d: any, serviceName: any) {
    if (serviceName === 'checkoutServicePage') {
      this.onaddParts.emit(d);
    } else {
      this.onaddParts.emit(d);
      this.modalService.dismissAll();
    }
  }
  open(content: any) {
    this.query = {
      Id: null,
      Ids: null,
      Status: 'Active',
      PartManufacturerId: null,
      PartManufacturerIds: null,
      PartManufacturerName: null,
      PartManufacturerNameContains: null,
      PartKeywordId: null,
      PartKeywordIds: null,
      PartKeywordName: null,
      PartKeywordNameContains: null,
      PartGroupId: null,
      PartPropertyId: null,
      ShelfContains: null,
      BinContains: null,
      PartDescription: null,
      PartDescriptionContains: null,
      PartNumber: null,
      PartNumberContains: null,
      CabinetTypeContains: null,
      UnitPriceLessThan: null,
      UnitPriceGreaterThan: null,
      TrackedItem: null,
      Skip: 0,
      Take: 10,
      OrderBy: null,
      OrderByDesc: null,
      Include: null,
      Fields: null,
      Meta: null,
    };
    // this.partService.getItems(this.query).subscribe(
    //   (res) => {
    //     this.parts = res;
    //     this.totalRecords = res.Total;
    //     this.offset = res.Offset;
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
    this.modalService.open(content, { centered: true, size: 'lg' }).result.then(
      (result) => {},
      (reason) => {}
    );
  }
  partName: any;
  selectedPartToAdd($event: any) {
    this.partName = $event.PartNumber + '-' + $event.PartDescription;
    this.filter.PartId = $event.Id;
    this.filterQuery['PartId'] = $event.Id;
    this.filter.Take = this.take;
    // this.partService.getCheckOutList(this.filter).subscribe((res) => {
    //   this.data = res;
    // });
  }
  onHideColumn(event: any, index: any) {
    // if (this.router.url === '/machines/progressives') {
    //   if (event.target.checked === true) {
    //     $('td:nth-child(' + (index + 3) + ')').hide();
    //     $('th:nth-child(' + (index + 3) + ')').hide();
    //   } else if (event.target.checked === false) {
    //     $('td:nth-child(' + (index + 3) + ')').show();
    //     $('th:nth-child(' + (index + 3) + ')').show();
    //   }
    // } else {
    //   if (event.target.checked === true) {
    //     $('td:nth-child(' + (index + 2) + ')').hide();
    //     $('th:nth-child(' + (index + 2) + ')').hide();
    //   } else if (event.target.checked === false) {
    //     $('td:nth-child(' + (index + 2) + ')').show();
    //     $('th:nth-child(' + (index + 2) + ')').show();
    //   }
    // }
  }

  sort(field: any, serviceName: any) {
    // this.query = {
    //   Orderby: field,
    //   Status: this.filter.Status,
    // };
    // if (serviceName === 'machineService') {
    //   this.machineService.getItems(this.query).subscribe((res) => {
    //     res.Results.forEach((v) => {
    //       this.data.Results.push(v);
    //     });
    //     this.datalength = this.datalength + res.Results.length;
    //     this.skip = this.datalength;
    //     this.take = this.take;
    //   });
    // }
  }
  skipTake: any;
  exportAsXLSX(): void {
    this.skipTake = {
      skip: 0,
      take: 100,
      OrderBy:
        '-ProgressiveMeterReadingTime,ProgressiveDefinitionName,ProgressiveDailyMachineSlotNumber,ProgressiveDefinitionGameId,ProgressiveDefinitionGameLevelId',
    };

    this.getJSON(this.skipTake);

    //
  }
  public getJSON(data: any) {
    // this.progressiveService
    //   .getItemsOfProgressiveMeterReadings(data)
    //   .subscribe((res: any) => {
    //     res.Result.Results.forEach((row) => {
    //       this.excel.push(row);
    //     });
    //     if (this.skipTake.skip <= res.Result.Total) {
    //       this.skipTake = {
    //         skip: this.skipTake.skip + 100,
    //         take: 100,
    //         OrderBy:
    //           '-ProgressiveMeterReadingTime,ProgressiveDefinitionName,ProgressiveDailyMachineSlotNumber,ProgressiveDefinitionGameId,ProgressiveDefinitionGameLevelId',
    //       };
    //       this.getJSON(this.skipTake);
    //     }
    //     if (this.excel.length === res.Result.Total) {
    //       this.progressiveService.downloadFile(this.excel);
    //     }
    //   });
  }
}
