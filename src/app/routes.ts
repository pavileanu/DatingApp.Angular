import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberUsersResolver} from './_resolvers/member-users.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resover';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { PreventUnsaved } from './_guards/prevent-unsaved.guard';
import { ListResolver } from './_resolvers/list.resolver';
import { MessagesResolver } from './_resolvers/messages.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members',  component: MemberListComponent, resolve: {users: MemberUsersResolver} },
            { path: 'members/:id',  component: MemberDetailsComponent, resolve: {user: MemberDetailResolver} },
            { path: 'member/edit',  component: MemberEditComponent, resolve: {user: MemberEditResolver },
                canDeactivate: [PreventUnsaved] },
            { path: 'messages', component: MessagesComponent, resolve: {messages: MessagesResolver}},
            { path: 'lists', component: ListsComponent, resolve: {users: ListResolver}}
        ]
    } ,
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

