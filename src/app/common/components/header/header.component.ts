import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDarkMode = false;

  constructor() { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('darkmode'))) {
      this.toggleTheme();
    }


    var menu = document.getElementById('menu-links');
    var closeIcon = document.getElementById("closeIcon") as HTMLInputElement;

    menu.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        closeIcon.checked = false;
      }
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkmode', JSON.stringify(this.isDarkMode));
    document.documentElement.style.setProperty('--background', this.isDarkMode ? '#101313' : '#f5f5f5');
    document.documentElement.style.setProperty('--primary', this.isDarkMode ? '#2BCBBA' : '#20998D');
    document.documentElement.style.setProperty('--light', this.isDarkMode ? '#191919' : '#F2F2F2');
    document.documentElement.style.setProperty('--white-color', this.isDarkMode ? '#070707' : '#f3f3f3');
    document.documentElement.style.setProperty('--black-color', this.isDarkMode ? '#fff' : '#070707');
    document.documentElement.style.setProperty('--medium', this.isDarkMode ? '#f3f3f3' : '#333');
    document.documentElement.style.setProperty('--dark', this.isDarkMode ? '#f3f3f3' : '#191919');
  }

}




