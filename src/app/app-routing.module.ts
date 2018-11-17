import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ModalLogComponent } from './modal-log/modal-log.component';

const routes: Routes = [
  { path: 'main', component: ChatComponent },
  { path: 'modal', component: ModalLogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
