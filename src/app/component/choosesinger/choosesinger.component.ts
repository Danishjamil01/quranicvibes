import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabVisibilityService } from '../../services/tab-visibility.service';

@Component({
  selector: 'app-choosesinger',
  templateUrl: './choosesinger.component.html',
  styleUrl: './choosesinger.component.scss'
})
export class ChoosesingerComponent implements OnInit {

  isShowArtist: boolean = false;
  showNaatKhwan: boolean = true;
  selectedPersons: any[] = [];
  selectedButtonIndex: number = 0; // Index of the button to be selected by default
  selectedButtonData: string = 'For You';
  selectedCount: number = 0;
  selectedImage: any = null;
  selectedImageShown: boolean = false;
  selectedImages: any[] = [];


  constructor(private router: Router, private TabVisibilityService: TabVisibilityService) {

  }
  ngOnInit(): void {
    this.TabVisibilityService.setVisibility(false);
  }
  toggleSelection(person: any) {
    if (this.isSelected(person)) {
      this.selectedPersons = this.selectedPersons.filter(p => p !== person);
    } else {
      this.selectedPersons.push(person);
    }
  }

  isSelected(persons: any) {
    return this.selectedPersons.includes(persons);
  }
  persons = [
    { bgi: 'assets/images/gradient/01.jpg', khwan: 'assets/images/singer/sami yusuf.png', name: 'Sami Yousuf' },
    { bgi: 'assets/images/gradient/02.jpg', khwan: 'assets/images/singer/abida.png', name: 'Abida khanam' },
    { bgi: 'assets/images/gradient/03.jpg', khwan: 'assets/images/singer/al muqit.png', name: 'Al muqit' },
    { bgi: 'assets/images/gradient/04.jpg', khwan: 'assets/images/singer/farhan ali.png', name: 'Farhan ali' },
    { bgi: 'assets/images/gradient/05.jpg', khwan: 'assets/images/singer/javeria saleem.png', name: 'Javeria Saleem' },
    { bgi: 'assets/images/gradient/06.jpg', khwan: 'assets/images/singer/junaid jamshed.png', name: 'Junaid Jamshed' },
    { bgi: 'assets/images/gradient/07.jpg', khwan: 'assets/images/singer/maher zain.png', name: 'Maher zain' },
    { bgi: 'assets/images/gradient/08.jpg', khwan: 'assets/images/singer/owais raza.png', name: 'Owais raza' },
    { bgi: 'assets/images/gradient/09.jpg', khwan: 'assets/images/singer/shahid mahmood.png', name: 'Shahid mahmud' },
    { bgi: 'assets/images/gradient/10.jpg', khwan: 'assets/images/singer/zohaib ahrafi.png', name: 'Zohaib ashrafi' },
  ]

  routeToNext() {
    this.showNaatKhwan = false;
    this.isShowArtist = true;
  }

  buttons: string[] = ['For You', 'International', 'English', 'Arabic'];



  aalim: any[] = [
    { img: 'assets/images/aalim/1.png', selected: false },
    { img: 'assets/images/aalim/2.png', selected: false },
    { img: 'assets/images/aalim/3.png', selected: false },
    { img: 'assets/images/aalim/4.png', selected: false },
    { img: 'assets/images/aalim/5.png', selected: false },
    { img: 'assets/images/aalim/6.png', selected: false },
  ];
  international: any[] = [
    { img: 'assets/images/international/1.png', selected: false },
    { img: 'assets/images/international/2.png', selected: false },
    { img: 'assets/images/international/3.png', selected: false },
    { img: 'assets/images/international/4.png', selected: false },
    { img: 'assets/images/international/5.png', selected: false },
    { img: 'assets/images/international/6.png', selected: false },
    { img: 'assets/images/international/7.png', selected: false }
  ];
  english: any[] = [
    { img: 'assets/images/english/1.png', selected: false },
    { img: 'assets/images/english/2.png', selected: false },
    { img: 'assets/images/english/3.png', selected: false }
  ];
  arabic: any[] = [
    { img: 'assets/images/arabic/1.png', selected: false }
  ];

  selectButton(index: number) {
    this.selectedButtonIndex = index;
    this.selectedButtonData = this.buttons[index];
  }

  toggleImageSelection(image: any) {
    image.selected = !image.selected;
    this.selectedCount = this.aalim.filter(img => img.selected).length;
    if (image.selected) {
      // Add the selected image to the beginning of the array
      this.selectedImages.unshift(image);
      // If the array length exceeds 5, remove the last element
      if (this.selectedImages.length > 5) {
        this.selectedImages.pop();
      }
    } else {
      // If the image is deselected, remove it from the array
      this.selectedImages = this.selectedImages.filter(img => img !== image);
    }
  }
  showSelectedImage() {
    this.selectedImageShown = true;
    this.isShowArtist = false;

    setTimeout(() => {
      // Reset selected image and navigate to the home page after 5 seconds
      this.selectedImageShown = false;
      this.selectedImages = [];
      // Navigate to the home page after 5 seconds
      // Replace 'home' with the actual route for your home page
      this.router.navigate(['home']);
    }, 5000);
  }

}
