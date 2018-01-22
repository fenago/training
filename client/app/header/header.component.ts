import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop < 40) {
      document.getElementById('header').style.opacity = '1';
    } else {
      document.getElementById('header').style.opacity = '0.8';
    }
  }
}
