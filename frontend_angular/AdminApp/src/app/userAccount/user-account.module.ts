import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './userProfile/user-profile.component';
import { EditProfileComponent } from './editProfile/edit-profile.component';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { accountReducer } from './store/account.reducer';
import { AccountEffects } from './store/account.effects';

@NgModule({
  declarations: [UserProfileComponent, EditProfileComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forFeature('account', accountReducer),
    EffectsModule.forFeature([AccountEffects])
  ]
})
export class UserAccountModule { }
