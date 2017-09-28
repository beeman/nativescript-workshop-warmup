import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'my-blue',
  templateUrl: './color/blue.component.html',
  styleUrls: ['./color/color.component.css']
})
export class BlueComponent{
  private pink: string = '#ff0088';

  constructor(private router: RouterExtensions, private route: ActivatedRoute) {
  }

  goRed() {
    this.router.navigate(['../red'], {relativeTo: this.route})
  }

  goPink() {
    this.router.navigate(['../rgb', this.pink], {relativeTo: this.route})
  }

  goBack() {
    this.router.back()
  }

  goHome() {
    this.router.navigate(['/'], { clearHistory: true });
  }
}
