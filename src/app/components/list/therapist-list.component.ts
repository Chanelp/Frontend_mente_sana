import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-therapist-list',
 templateUrl: './therapist-list.component.html',
 styleUrls: ['./therapist-list.component.css']
})
export class TherapistListComponent implements OnInit {
 therapists = [
    {
      name: 'Dr. Randall Wood',
      specialty: 'Therapist',
      institution: 'California Hospital Medical Center'
    },
    // ... otras terapistas
 ];

 onTherapistClick(therapist: any) {
    alert(`Name: ${therapist.name}\nSpecialty: ${therapist.specialty}\nInstitution: ${therapist.institution}`);
 }

 constructor() { }

 ngOnInit(): void {
 }
}