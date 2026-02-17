import { Component } from '@angular/core';

// import classes which are required for reactive forms
import {FormGroup,FormControl} from '@angular/forms'

// Import statemets for reactive form design
import {FormsModule} from '@angular/forms';

// Import ReactiveFormsModule for reactive forms
import {ReactiveFormsModule} from '@angular/forms';

// Import for PIPES
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marvellous',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})

export class MarvellousComponent 
{

  MarvellousForm = new FormGroup(
    {
      username : new FormControl(''),
      passowrd : new FormControl(''),
      ConfirmPass : new FormControl('')

    }
  );

}
