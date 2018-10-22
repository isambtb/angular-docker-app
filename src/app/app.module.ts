import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import {
  MatButtonModule,
  MatRadioModule,
  MatStepperModule,
  MatInputModule,
  MatMenuModule,
  MatListModule,
  MatCheckboxModule,
  MatTableModule,
  MatTabsModule,
  MatCardModule,
  MatButtonToggleModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatTreeModule,
  MatGridListModule,
  MatIconModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { LoginComponent } from './page/login/login.component';
import { RootComponent } from './dashboard/root/root.component';
import { RegisterComponent } from './page/register/register.component';
import { LockComponent } from './page/lock/lock.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent } from './dashboard/component/panels/panels.component';

import { SettingsService } from './services/settings.service';
import { SplCreatorComponent } from './dashboard/component/spl-creator/spl-creator.component';
import { SplFormsComponent } from './dashboard/component/spl-forms/spl-forms.component';
import { MedicamentInfosComponent } from './dashboard/component/medicament-infos/medicament-infos.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicinalProductsComponent } from './dashboard/medicinal-products/medicinal-products.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
    LockComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    PriceTableComponent,
    PanelsComponent,
    SplCreatorComponent,
    SplFormsComponent,
    MedicamentInfosComponent,
    MedicinalProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatStepperModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatCardModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatTreeModule,
    MatGridListModule,
    MatIconModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
