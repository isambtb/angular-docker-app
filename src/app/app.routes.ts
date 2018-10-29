/**
 * Created by wangdi on 26/5/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { MedicinalProductsComponent } from './dashboard/medicinal-products/medicinal-products.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { LockComponent } from './page/lock/lock.component';
import { RegisterComponent } from './page/register/register.component';
import { SplCreatorComponent } from './dashboard/component/spl-creator/spl-creator.component';
import { SplFormsComponent } from './dashboard/component/spl-forms/spl-forms.component';
import { MedicamentInfosComponent } from './dashboard/component/medicament-infos/medicament-infos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'lock', component: LockComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard', component: RootComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'table', component: MedicinalProductsComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'alert', component: SweetAlertComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'components/spl', component: SplCreatorComponent },
      { path: 'components/splforms', component: SplFormsComponent },
      { path: 'components/medicament/:id', component: MedicamentInfosComponent }
    ]
  }
];

export const routing = RouterModule.forRoot(routes);

