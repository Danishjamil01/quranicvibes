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
import { QuizComponent } from './component/quiz/quiz.component';
import { ProphetListComponent } from './component/prophet-list/prophet-list.component';
import { StartquizComponent } from './component/startquiz/startquiz.component';
import { QuizcontentComponent } from './quizcontent/quizcontent.component';
import { QuranicworldComponent } from './quranicworld/quranicworld.component';
import { IslamichistoryComponent } from './islamichistory/islamichistory.component';
import { ProphetslifeComponent } from './prophetslife/prophetslife.component';
import { HadithstudiesComponent } from './hadithstudies/hadithstudies.component';
import { IslamicfiqhComponent } from './islamicfiqh/islamicfiqh.component';
import { IslamiccultureComponent } from './islamicculture/islamicculture.component';
import { IslamicgeographyComponent } from './islamicgeography/islamicgeography.component';
import { RamadanComponent } from './ramadan/ramadan.component';
import { IslamicfestivalComponent } from './islamicfestival/islamicfestival.component';
import { JuzQuizComponent } from './component/juz-quiz/juz-quiz.component';
import { SurahQuizComponent } from './component/surah-quiz/surah-quiz.component';
import { ThematicQuizComponent } from './component/thematic-quiz/thematic-quiz.component';
import { AyatQuizComponent } from './component/ayat-quiz/ayat-quiz.component';
import { HistoricalEventsComponent } from './component/historical-events/historical-events.component';
import { CharactersInQuranComponent } from './component/characters-in-quran/characters-in-quran.component';
import { RevelationContextComponent } from './component/revelation-context/revelation-context.component';
import { TafsirAndMeaningsComponent } from './component/tafsir-and-meanings/tafsir-and-meanings.component';
import { Juz1Component } from './component/juz-1/juz-1.component';
import { Juz2Component } from './component/juz-2/juz-2.component';
import { Juz3Component } from './component/juz-3/juz-3.component';
import { Juz4Component } from './component/juz-4/juz-4.component';
import { Juz5Component } from './component/juz-5/juz-5.component';
import { Juz6Component } from './component/juz-6/juz-6.component';
import { Juz7Component } from './component/juz-7/juz-7.component';
import { Juz8Component } from './component/juz-8/juz-8.component';
import { Juz9Component } from './component/juz-9/juz-9.component';
import { Juz10Component } from './component/juz-10/juz-10.component';
import { Juz11Component } from './component/juz-11/juz-11.component';
import { Juz12Component } from './component/juz-12/juz-12.component';
import { Juz13Component } from './component/juz-13/juz-13.component';
import { Juz14Component } from './component/juz-14/juz-14.component';
import { Juz15Component } from './component/juz-15/juz-15.component';
import { Juz16Component } from './component/juz-16/juz-16.component';
import { Juz17Component } from './component/juz-17/juz-17.component';
import { Juz18Component } from './component/juz-18/juz-18.component';
import { Juz19Component } from './component/juz-19/juz-19.component';
import { Juz20Component } from './component/juz-20/juz-20.component';
import { Juz21Component } from './component/juz-21/juz-21.component';
import { Juz22Component } from './component/juz-22/juz-22.component';
import { Juz23Component } from './component/juz-23/juz-23.component';
import { Juz24Component } from './component/juz-24/juz-24.component';
import { Juz25Component } from './component/juz-25/juz-25.component';
import { Juz26Component } from './component/juz-26/juz-26.component';
import { Juz27Component } from './component/juz-27/juz-27.component';
import { Juz28Component } from './component/juz-28/juz-28.component';
import { Juz29Component } from './component/juz-29/juz-29.component';
import { Juz30Component } from './component/juz-30/juz-30.component';
import { ConceptualQuestionsComponent } from './component/conceptual-questions/conceptual-questions.component';
import { RegisterComponent } from './register/register.component';
import { AllSharedModule } from './all-shared.module';

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
    AlljuzComponent,
    QuizComponent,
    ProphetListComponent,
    StartquizComponent,
    QuizcontentComponent,
    QuranicworldComponent,
    IslamichistoryComponent,
    ProphetslifeComponent,
    HadithstudiesComponent,
    IslamicfiqhComponent,
    IslamiccultureComponent,
    IslamicgeographyComponent,
    RamadanComponent,
    IslamicfestivalComponent,
    JuzQuizComponent,
    SurahQuizComponent,
    ThematicQuizComponent,
    AyatQuizComponent,
    HistoricalEventsComponent,
    CharactersInQuranComponent,
    RevelationContextComponent,
    TafsirAndMeaningsComponent,
    Juz1Component,
    Juz2Component,
    Juz3Component,
    Juz4Component,
    Juz5Component,
    Juz6Component,
    Juz7Component,
    Juz8Component,
    Juz9Component,
    Juz10Component,
    Juz11Component,
    Juz12Component,
    Juz13Component,
    Juz14Component,
    Juz15Component,
    Juz16Component,
    Juz17Component,
    Juz18Component,
    Juz19Component,
    Juz20Component,
    Juz21Component,
    Juz22Component,
    Juz23Component,
    Juz24Component,
    Juz25Component,
    Juz26Component,
    Juz27Component,
    Juz28Component,
    Juz29Component,
    Juz30Component,
    ConceptualQuestionsComponent,
    RegisterComponent
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
    AllSharedModule,
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
