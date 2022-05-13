import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@volante/slottrak-app';

import { Observable, Subject } from 'rxjs';
export const environment = {
  apiUrl: 'https://dev.volantesw.com/api',
};

@Injectable({
  providedIn: 'root',
})
export class MachinesService extends BaseService {
  Warehouse = new Subject();
  constructor(protected httpClient: HttpClient) {
    super();
  }

  public getItems(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);

    return this.httpClient.get<any>(environment.apiUrl + '/machines', options);
  }
  public getSlotTypes(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);

    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/slotTypes',
      options
    );
  }
  public getManufacturers(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/manufacturers',
      options
    );
  }
  public getCabinetTypes(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/cabinetTypes',
      options
    );
  }
  public getModelNumbers(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/modelNumbers',
      options
    );
  }
  public getDisplayTypes(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/displayTypes',
      options
    );
  }
  public getScreenTypes(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/screenTypes',
      options
    );
  }
  public getProgressiveTypes(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/progressiveTypes',
      options
    );
  }
  public getLeased(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/leased',
      options
    );
  }
  public getLeaseCategories(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/leaseCategories',
      options
    );
  }
  public getSbEGM(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/sbEgm',
      options
    );
  }
  public getPlayertrackingTypes(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/playerTrackingTypes',
      options
    );
  }
  public getTicketing(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/ticketing',
      options
    );
  }
  public getFundsTransferMethod(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/fundsTransferMethod',
      options
    );
  }
  public getThemes(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/themes',
      options
    );
  }
  public getDenominations(queryModel: any): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/denominations',
      options
    );
  }
  public getItem(id: number): Observable<any> {
    let options = this.getOptionsHttpGet({});

    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/' + id,
      options
    );
  }
  public getItemBySerialNumber(SerialNumber: string): Observable<any> {
    let options = this.getOptionsHttpGet({});
    return this.httpClient.get<any>(
      environment.apiUrl +
        '/machines?SerialNumberContains=' +
        SerialNumber +
        '&Skip=0&Status=Floor&Take=10',
      options
    );
  }

  public downloadEpromList(query: any): Observable<any> {
    let options = this.getOptions(query);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/download/epromList',
      options
    );
  }

  public getMealLogsOfMachine(
    queryModel: any,
    machineId: any
  ): Observable<any> {
    let options = this.getOptionsHttpGet(queryModel);
    return this.httpClient.get<any>(
      environment.apiUrl + '/machines/' + machineId + '/MealLog',
      options
    );
  }

  public createSlotTypes(queryModel: any): Observable<any> {
    let options = { withCredentials: true };

    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/slotTypes',
      queryModel,
      options
    );
  }
  public createManuFacturer(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/manufacturers',
      queryModel,
      options
    );
  }
  public createCabinetTypes(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/cabinetTypes',
      queryModel,
      options
    );
  }
  public createModelNumbers(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/modelNumbers',
      queryModel,
      options
    );
  }
  public createDisplayTypes(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/displayTypes',
      queryModel,
      options
    );
  }
  public createScreenTypes(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/screenTypes',
      queryModel,
      options
    );
  }
  public createProgressiveTypes(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/progressiveTypes',
      queryModel,
      options
    );
  }
  public createLeased(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/leased',
      queryModel,
      options
    );
  }
  public createLeaseCategories(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/leaseCategories',
      queryModel,
      options
    );
  }
  public createsbEgm(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/sbEgm',
      queryModel,
      options
    );
  }

  public createPlayerTrackingTypes(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/playerTrackingTypes',
      queryModel,
      options
    );
  }
  public createTicketing(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/ticketing',
      queryModel,
      options
    );
  }
  public createFundsTransferMethod(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/fundsTransferMethod',
      queryModel,
      options
    );
  }
  public createThemes(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/themes',
      queryModel,
      options
    );
  }
  public createDenominations(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/denominations',
      queryModel,
      options
    );
  }
  public createMachine(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines',
      queryModel,
      options
    );
  }

  public editMachine(
    queryModel: any,
    machineId: any,
    machineConfigId: any
  ): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.put<any>(
      environment.apiUrl + '/machines/' + machineId + '/' + machineConfigId,
      queryModel,
      options
    );
  }

  public postFile(fileToUpload: File): Observable<boolean> {
    let options = { withCredentials: true };
    const endpoint = environment.apiUrl + '/files';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient.post<any>(endpoint, formData, options);
  }

  public createWarehouse(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/warehouse',
      queryModel,
      options
    );
  }
  public createDecommission(queryModel: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/decommission',
      queryModel,
      options
    );
  }
  public applyPartToMachine(queryModel: any, id: any): Observable<any> {
    let options = { withCredentials: true };
    return this.httpClient.post<any>(
      environment.apiUrl + '/machines/' + id + '/parts',
      queryModel,
      options
    );
  }
}
