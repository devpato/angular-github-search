import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersEffects } from '../effects/users.effects';
import { searchReducer } from '../reducers/reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('usersStore', searchReducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [UsersEffects],
  declarations: []
})
export class UserStoreModule {}
