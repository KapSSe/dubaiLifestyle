import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OffersModule } from './offers.module/offers.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { OptInComponent } from './components/opt-in/opt-in.component';
import { CoverComponent } from './components/homepage/cover/cover.component';
import { TeamComponent } from './components/homepage/team/team.component';
import { ReviewsComponent } from './components/homepage/reviews/reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { SecurityComponent } from './components/security/security.component';
import { MemberspageComponent } from './components/memberspage/memberspage.component';
import { MembersCoverComponent } from './components/memberspage/members-cover/members-cover.component';
import { TeamDescComponent } from './components/memberspage/team-desc/team-desc.component';
import { HeaderResponsiveComponent } from './components/header/header-responsive/header-responsive.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LiveAccountsComponent } from './components/live-accounts/live-accounts.component';
import { FooterMembersComponent } from './components/memberspage/footer-members/footer-members.component';

import { FieldsService } from './components/sign-up/fields.service';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'members', component: MemberspageComponent },
  { path: '**', component: HomepageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    OptInComponent,
    CoverComponent,
    TeamComponent,
    ReviewsComponent,
    FooterComponent,
    SecurityComponent,
    MemberspageComponent,
    MembersCoverComponent,
    TeamDescComponent,
    HeaderResponsiveComponent,
    SignUpComponent,
    LiveAccountsComponent,
    FooterMembersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    OffersModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FieldsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
