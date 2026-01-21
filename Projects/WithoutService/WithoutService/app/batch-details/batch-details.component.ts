import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-batch-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-details.component.html',
  styleUrl: './batch-details.component.css'
})
export class BatchDetailsComponent 
{
  public Batches = [
    {"Name" : "PPA", "Duration" : "4 Months", "Fees" : 20000},
    {"Name" : "LB", "Duration" : "4.5 Months", "Fees" : 21000},
    {"Name" : "Angular", "Duration" : "4 Months", "Fees" : 21500}
  ]
}
