import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.css']
})
export class PageNavigatorComponent implements OnInit {

  @Input() title: string
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate([this.title]);
  }
}
