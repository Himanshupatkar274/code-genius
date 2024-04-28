import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatModule } from '../mat/mat.module';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MatModule
  ],
  exports:[ HeaderComponent,
    FooterComponent,MatModule]
})
export class ShareModule { }
