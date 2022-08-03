import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DownloadCvComponent } from './download-cv/download-cv.component';

const COMPONENTS: any[] = [CvComponent, DownloadCvComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FormsModule, IonicModule],
  exports: COMPONENTS,
})
export class ComponentsModule {}
