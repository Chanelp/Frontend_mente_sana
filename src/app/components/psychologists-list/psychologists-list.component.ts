import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-psychologists-list',
 templateUrl: './psychologists-list.component.html',
 styleUrls: ['./psychologists-list.component.css']
})
export class PsychologistsListComponent implements OnInit {
 psychologists = [
    {
      name: 'Dr. Randall Wood',
      description: 'Terapista en California Hospital Medical Center',
      image: 'assets/images/dr-randall-wood.jpg'
    },
    // ... repite para los demás psicólogos ...
 ];

 constructor() { }

 ngOnInit(): void {
 }
}
