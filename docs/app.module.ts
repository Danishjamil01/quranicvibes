import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from '../src/app/app-routing.module';
import { AppComponent } from '../src/app/app.component';
import { AllChapterComponent } from '../src/app/component/all-chapter/all-chapter.component';
import { ReadQuranComponent } from '../src/app/component/read-quran/read-quran.component';
import { PodcastComponent } from '../src/app/component/podcast/podcast.component';
import { ScholarComponent } from '../src/app/component/scholar/scholar.component';
import { VibeComponent } from '../src/app/component/vibe/vibe.component';
import { FSingerComponent } from '../src/app/component/f-singer/f-singer.component';
import { ShowsComponent } from '../src/app/component/shows/shows.component';
import { BayansComponent } from '../src/app/component/bayans/bayans.component';
import { ArtistSongListComponent } from '../src/app/component/artist-song-list/artist-song-list.component';
import { ShortsComponent } from '../src/app/component/shorts/shorts.component';
import { PremiumComponent } from '../src/app/premium/premium.component';
import { LiabraryComponent } from '../src/app/liabrary/liabrary.component';
import { SearchComponent } from '../src/app/search/search.component';
import { BottomTabComponent } from '../src/app/bottom-tab/bottom-tab.component';
import { HomeComponent } from '../src/app/component/home/home.component';
import { ChoosesingerComponent } from '../src/app/component/choosesinger/choosesinger.component';
import { DobComponent } from '../src/app/component/dob/dob.component';
import { CreatepasswordComponent } from '../src/app/component/createpassword/createpassword.component';
import { SignupfreeComponent } from '../src/app/component/signupfree/signupfree.component';
import { EmailVerifyComponent } from '../src/app/component/email-verify/email-verify.component';
import { LoginComponent } from '../src/app/component/login/login.component';
import { WelcomeComponent } from '../src/app/component/welcome/welcome.component';
import { PhoneloginComponent } from '../src/app/component/phonelogin/phonelogin.component';
import { SplashScreenComponent } from '../src/app/component/splash-screen/splash-screen.component';


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
    AllChapterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
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
