import { InjectionToken } from "@angular/core";
import { MenuItem } from "@volante/slottrak-app/src/lib/slottrak-app-config";
import { SlottrakAppServicesModule } from "./slottrak-app-services.module";

export const APP_MENU_ITEMS = new InjectionToken<MenuItem[]>('APP_MENU_ITEMS', {
  providedIn: SlottrakAppServicesModule,
  factory: () => []
})
