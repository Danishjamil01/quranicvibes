import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TabVisibilityService } from '../services/tab-visibility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hadithstudies',
  templateUrl: './hadithstudies.component.html',
  styleUrl: './hadithstudies.component.scss'
})
export class HadithstudiesComponent implements OnInit {


  constructor(private tab: TabVisibilityService, private router: Router) {

  }
  ngOnInit(): void {
    this.tab.setVisibility(false);
  }
  routeToQuiz() {
    this.router.navigateByUrl('quizcontent');
  }



  @Output() categorySelected = new EventEmitter<string>();

  categories = ['Marfu', 'Mawquf', 'Maqtu'];

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
  hadith = [
    { name: '1. Marfu (مرفوع)', explain: 'مرفوع  وہ حدیث ہے جس کی نسبت براہِ راست نبی اکرم ﷺ کی طرف کی گئی ہو، یعنی وہ قول، فعل، یا تقریر جو نبی ﷺ سے منسوب ہو۔', misaal: ':مثال', example: "نبی اکرم ﷺ نے فرمایا: 'اعمال کا دارومدار نیتوں پر ہے۔" },
    { name: '2. Mawquf (موقوف)', explain: 'موقوف  حدیث وہ حدیث ہے جس کی نسبت کسی صحابی کی طرف کی گئی ہو، یعنی وہ قول یا فعل جو کسی صحابی سے منسوب ہو، مگر اس کی نسبت نبی ﷺ کی طرف نہ ہو۔', misaal: ':مثال', example: "عبداللہ بن عباس رضی اللہ عنہ نے کہا: 'عورتیں مسجد میں جائیں، ان کو روکو نہیں۔" },
    { name: '3. Maqtu (مقطوع)', explain: 'مقطوع  حدیث وہ حدیث ہے جس کی نسبت کسی تابعی کی طرف کی گئی ہو، یعنی وہ قول یا فعل جو کسی تابعی سے منسوب ہو۔', misaal: ':مثال', example: "حسن بصری رحمہ اللہ نے کہا: 'نماز قائم کرو اور لوگوں کو بھی نماز کی ترغیب دو۔" }
  ]
}
