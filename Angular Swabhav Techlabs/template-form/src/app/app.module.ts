import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PipesPipe } from './pipes.pipe';
import { KmToMeterPipe } from './pipes/km-to-meter.pipe';
import { CurrencyConverterPipe } from './pipes/currency-converter.pipe';
import { InrToUsdPipe } from './pipes/inr-to-usd.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserFormComponent,
    PipesPipe,
    KmToMeterPipe,
    CurrencyConverterPipe,
    InrToUsdPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
