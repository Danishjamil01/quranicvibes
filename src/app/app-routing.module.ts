import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { SplashScreenComponent } from './component/splash-screen/splash-screen.component';
import { ChoosesingerComponent } from './component/choosesinger/choosesinger.component';
import { CreatepasswordComponent } from './component/createpassword/createpassword.component';
import { DobComponent } from './component/dob/dob.component';
import { LoginComponent } from './component/login/login.component';
import { PhoneloginComponent } from './component/phonelogin/phonelogin.component';
import { SignupfreeComponent } from './component/signupfree/signupfree.component';
import { HomeComponent } from './component/home/home.component';
import { BottomTabComponent } from './bottom-tab/bottom-tab.component';
import { SearchComponent } from './search/search.component';
import { LiabraryComponent } from './liabrary/liabrary.component';
import { PremiumComponent } from './premium/premium.component';
import { ArtistSongListComponent } from './component/artist-song-list/artist-song-list.component';
import { ShortsComponent } from './component/shorts/shorts.component';
import { BayansComponent } from './component/bayans/bayans.component';
import { ShowsComponent } from './component/shows/shows.component';
import { FSingerComponent } from './component/f-singer/f-singer.component';
import { VibeComponent } from './component/vibe/vibe.component';
import { ScholarComponent } from './component/scholar/scholar.component';
import { PodcastComponent } from './component/podcast/podcast.component';
import { ReadQuranComponent } from './component/read-quran/read-quran.component';
import { AllChapterComponent } from './component/all-chapter/all-chapter.component';
import { ReadByJuzComponent } from './component/read-by-juz/read-by-juz.component';
import { AlljuzComponent } from './component/alljuz/alljuz.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/splash', pathMatch:'full'},
  {path:'welcome' , component:WelcomeComponent},
  {path:'splash' , component:SplashScreenComponent},
  {path:'freesignup' , component:SignupfreeComponent},
  {path:'login' , component:LoginComponent},
  {path:'phonelogin', component:PhoneloginComponent},
  {path:'createpass', component:CreatepasswordComponent},
  {path:'dob', component:DobComponent},
  {path:'singer', component:ChoosesingerComponent},
  {path:'home', component:HomeComponent},
  {path:'all', component:HomeComponent},
  {path:'bottomtab', component:BottomTabComponent},
  {path:'search', component:SearchComponent},
  {path:'liabrary', component:LiabraryComponent},
  {path:'premium', component:PremiumComponent},
  {path:'artistsonglist', component:ArtistSongListComponent},
  {path:'shorts', component:ShortsComponent},
  {path:'bayans', component:BayansComponent},
  {path:'shows', component:ShowsComponent},
  {path:'fsinger', component:FSingerComponent},
  {path:'vibe', component:VibeComponent},
  {path:'scholar', component:ScholarComponent},
  {path:'podcast', component:PodcastComponent},
  {path:'podcast', component:PodcastComponent},
  {path:'allchapter',component:AllChapterComponent},
  {path:'readquran',component:ReadQuranComponent},
  {path:'readbyjuz',component:ReadByJuzComponent},
  {path:'alljuz',component:AlljuzComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
