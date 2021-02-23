import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './layout/item/item.component';
import { MenuComponent } from './layout/menu/menu.component';
import { SectionActionsComponent } from './layout/section-actions/section-actions.component';
import { SectionComponent } from './layout/section/section.component';
import { ThemeComponent } from './layout/theme/theme.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    RouterModule,
  ],
  declarations: [
    ThemeComponent,
    MenuComponent,
    SectionComponent,
    SectionActionsComponent,
    ItemComponent,
  ],
  exports: [
    ThemeComponent,
    SectionComponent,
    SectionActionsComponent,
    ItemComponent,
    // modules
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
  ],
})
export class SharedModule {}
