import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerModule } from 'src/app/shared/container/container.module';
import { DefaultLayoutComponent } from './default-layout.component';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [CommonModule, ContainerModule],
  exports: [DefaultLayoutComponent]
})
export class DefaultLayoutModule {}
