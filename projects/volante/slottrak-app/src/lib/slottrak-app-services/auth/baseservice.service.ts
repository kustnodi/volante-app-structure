import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor() {}

  protected getOptionsHttpGet(queryModel: any) {
    let httpParams = new HttpParams();

    Object.keys(queryModel).forEach(function (key) {
      if (queryModel[key] != null)
        httpParams = httpParams.append(key, queryModel[key]);
    });

    return { params: httpParams, withCredentials: true };
  }

  protected getOptionsHttpPost() {
    return { withCredentials: true };
  }
  protected getOptions(query: any) {
    let httpParams = new HttpParams();

    Object.keys(query).forEach(function (key) {
      if (query[key] != null)
        httpParams = httpParams.append('MachineConfigurationIds', query[key]);
    });
    return { params: httpParams, withCredentials: true };
  }
}
