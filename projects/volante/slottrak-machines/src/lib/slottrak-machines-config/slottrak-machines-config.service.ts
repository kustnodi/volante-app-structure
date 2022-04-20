import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { SlottrakMachinesConfigModule } from './slottrak-machines-config.module';

@Injectable({
  providedIn: SlottrakMachinesConfigModule
})
export class SlottrakMachinesConfigService {
  machineDetailRoutes: Routes = []

  constructor() { }
}
