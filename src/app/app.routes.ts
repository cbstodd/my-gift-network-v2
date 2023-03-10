import { Routes } from "@angular/router";
import { UserModule } from './user/user.module';

export const appRoutes: Routes = [
  { path: 'users', loadChildren: () => UserModule, data: { breadcrumb: 'Users' } },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users', pathMatch: 'full' },
];



