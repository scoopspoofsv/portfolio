import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isDarkMode = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('darkmode'))) {
      this.toggleTheme();
    }

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
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
