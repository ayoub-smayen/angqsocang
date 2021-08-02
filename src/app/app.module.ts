import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AdminComponent } from './admin/admin.component';
import { ClassesComponent } from './classes/classes.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { ErrorComponent } from './error/error.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationComponent } from './notification/notification.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SuggestedComponent } from './suggested/suggested.component';
import { DetectScrollDirective } from './detect-scroll.directive';
import { DateFormatPipe } from './services/date.pipe';
import { LinkifyPipe } from './services/linkify.pipe';
import { GroupComponent } from './group/group.component';
import { GrouplistComponent } from './group/grouplist/grouplist.component';
import { MessagingComponent } from './messaging/messaging.component';
import { ChatroomComponent } from './messaging/chatroom/chatroom.component';
import { ChatroomlistComponent } from './messaging/chatroomlist/chatroomlist.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user-list/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccountComponent,
    AddCommentComponent,
    AddPostComponent,
    AdminComponent,
    ClassesComponent,
    CreateGroupComponent,
    ErrorComponent,
    FeedbackComponent,
    FooterComponent,
    HomeComponent,
    LandingComponent,
    LoginComponent,
    NavbarComponent,
    NotificationComponent,
    PostComponent,
    ProfileComponent,
    RegisterComponent,
    SearchComponent,
    SuggestedComponent,
    DetectScrollDirective,
    DateFormatPipe,
    LinkifyPipe,
    GroupComponent,
    GrouplistComponent,
    MessagingComponent,
    ChatroomComponent,
    ChatroomlistComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
