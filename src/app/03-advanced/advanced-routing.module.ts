import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { GuardsComponent } from './guards/guards.component';
import { AuthGuard } from './guards/authGuard.guard';
import { FakeComponentForGuardComponent } from './guards/fakeComponent/fake-component-for-guard.component';

const routes: Routes = [
  { path: 'security', component: SecurityComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'interceptor', component: InterceptorsComponent },
  { path: 'guards', component: GuardsComponent },
  {
    path: 'fake/:id/:name',
    canActivate: [AuthGuard],
    component: FakeComponentForGuardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedRoutingModule {}
