import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
declare var gsap: any;
import html2canvas from 'html2canvas';
import { TabVisibilityService } from '../../services/tab-visibility.service';
import RecordRTC from 'recordrtc';

@Component({
  selector: 'app-f-singer',
  templateUrl: './f-singer.component.html',
  styleUrl: './f-singer.component.scss'
})
export class FSingerComponent implements OnInit {
  @ViewChild('fullscreenContainer') fullscreenContainer!: ElementRef;


  constructor(private tab: TabVisibilityService,private elementRef: ElementRef) { }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      this.openFullscreen();
    } else {
      this.closeFullscreen();
    }
  }

  openFullscreen() {
    const elem = this.fullscreenContainer.nativeElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
    
    // Adjust background color on enter full-screen
    (<HTMLInputElement>document.getElementById('fullscrenn')).style.background= 'linear-gradient(to bottom, #faf1bf, #c9f2ff)' // Example background color
  }

  closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) { /* Safari */
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) { /* IE11 */
      (document as any).msExitFullscreen();
    }
    
    // Restore background color on exit full-screen
    document.body.style.backgroundColor = '#000'; // Restore to default or original color
  }



  savePageAsImage() {
    const element = document.body;
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'page.png';
      link.href = imgData;
      link.click();
    });
  }




  ngOnInit(): void {
    this.tab.setVisibility(false);


    // FOR UNLOCK REVEAL
    let lockedIMG = document.querySelectorAll(".locked") as NodeListOf<HTMLElement>;
    let lockedBG = document.querySelectorAll(".locked-bg") as NodeListOf<HTMLElement>;

    function unlockedStory() {
      lockedIMG[0].classList.add("unlocked");
      lockedBG[0].classList.add("unlocked");

      setTimeout(function () {
        lockedIMG[0].style.display = "none";
        lockedBG[0].style.display = "none";
      }, 2750); // change to whatever the end duration to remove opacity in css
    }

    window.addEventListener("scroll", () => {
      if (this.isScrolledIntoView(lockedBG) == true) {
        this.unlockedStory();
      }
    });

    // FOR SCROLL DOWN
    let tag = document.querySelectorAll(".responsive-container-prophet-stories-menu") as NodeListOf<HTMLElement>;
    let clickLink = document.querySelector(".scroll-down") as HTMLElement;

    clickLink.addEventListener("click", () => {
      tag[0].scrollIntoView({ behavior: 'smooth' });
    });

    // ANIMATION REQUIRES GSAP SO PUSH TO HEAD
    window.onload = () => {
      let script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
      document.head.appendChild(script);

      setTimeout(() => {
        this.rungsapCode();  // Something you want delayed.
        console.log("ran");
      }, 1000); // How long you want the delay to be, measured in milliseconds.
    };

  }

  unlockedStory() {
    let lockedIMG = document.querySelectorAll(".locked") as NodeListOf<HTMLElement>;
    let lockedBG = document.querySelectorAll(".locked-bg") as NodeListOf<HTMLElement>;

    lockedIMG[0].classList.add("unlocked");
    lockedBG[0].classList.add("unlocked");

    setTimeout(() => {
      lockedIMG[0].style.display = "none";
      lockedBG[0].style.display = "none";
    }, 2750); // change to whatever the end duration to remove opacity in css
  }

  isScrolledIntoView(elem: any) {
    var docViewTop = window.scrollY;
    var docViewBottom = docViewTop + window.innerHeight;
    var elemTop = elem[0].getBoundingClientRect().top + window.scrollY;
    var elemBottom = elemTop + elem[0].offsetHeight;
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  rungsapCode() {
    const animateSVG = () => {
      let tl = gsap.timeline({ repeat: -1, repeatDelay: 15 });

      tl.set('#TREE, #NAMES > g, #LEAVES > g, #BRANCHES > path',
        { scale: 0 }
      )
        .fromTo('#TREE', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#br-1, #br-2', {
          transformOrigin: "left bottom"
        }, {
          scale: 1, duration: .4, ease: "power1.out"
        })
        .fromTo('#br-3, #br-4', {
          transformOrigin: "right bottom"
        }, {
          scale: 1, duration: .4, ease: "power1.out"
        })
        .fromTo('#br-5', {
          transformOrigin: "left bottom"
        }, {
          scale: 1, duration: .5, ease: "power1.out"
        })
        .fromTo('#LEAVES > g', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: 2, ease: "power1.out"
        })
        .fromTo('#pc-1', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-2', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-3', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-4', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-5', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-6', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-7', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-8', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-9', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-10', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-11', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-12', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-13', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-14', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-15', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-16', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-17', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-18', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-19', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-20', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-21', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-22', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-23', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-24', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        })
        .fromTo('#pc-25', {
          transformOrigin: "center bottom"
        }, {
          scale: 1, duration: .75, ease: "power1.out"
        });
    };

    animateSVG();
  }
}
