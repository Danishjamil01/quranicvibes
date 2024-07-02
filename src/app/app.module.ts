import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './component/splash-screen/splash-screen.component';
import { PhoneloginComponent } from './component/phonelogin/phonelogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { EmailVerifyComponent } from './component/email-verify/email-verify.component';
import { SignupfreeComponent } from './component/signupfree/signupfree.component';
import { CreatepasswordComponent } from './component/createpassword/createpassword.component';
import { DobComponent } from './component/dob/dob.component';
import { FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { ChoosesingerComponent } from './component/choosesinger/choosesinger.component';
import { HomeComponent } from './component/home/home.component';
import { BottomTabComponent } from './bottom-tab/bottom-tab.component';
import { SearchComponent } from './search/search.component';
import { LiabraryComponent } from './liabrary/liabrary.component';
import { PremiumComponent } from './premium/premium.component';
import { HttpClientModule } from '@angular/common/http';
import { ShortsComponent } from './component/shorts/shorts.component';
import { ArtistSongListComponent } from './component/artist-song-list/artist-song-list.component';
import { BayansComponent } from './component/bayans/bayans.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ShowsComponent } from './component/shows/shows.component';
import { FSingerComponent } from './component/f-singer/f-singer.component';
import { VibeComponent } from './component/vibe/vibe.component';
import { ScholarComponent } from './component/scholar/scholar.component';
import { PodcastComponent } from './component/podcast/podcast.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReadQuranComponent } from './component/read-quran/read-quran.component';
import { AllChapterComponent } from './component/all-chapter/all-chapter.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReadByJuzComponent } from './component/read-by-juz/read-by-juz.component';
import { AlljuzComponent } from './component/alljuz/alljuz.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    PhoneloginComponent,
    WelcomeComponent,
    LoginComponent,
    EmailVerifyComponent,
    SignupfreeComponent,
    CreatepasswordComponent,
    DobComponent,
    ChoosesingerComponent,
    HomeComponent,
    BottomTabComponent,
    SearchComponent,
    LiabraryComponent,
    PremiumComponent,
    ShortsComponent,
    ArtistSongListComponent,
    BayansComponent,
    ShowsComponent,
    FSingerComponent,
    VibeComponent,
    ScholarComponent,
    PodcastComponent,
    ReadQuranComponent,
    AllChapterComponent,
    ReadByJuzComponent,
    AlljuzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    ReactiveFormsModule,
    HttpClientModule,
    YouTubePlayerModule,
    SlickCarouselModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
