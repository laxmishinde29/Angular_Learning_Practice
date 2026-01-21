import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-batch-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.css'
})
export class BatchListComponent
{
  public Batches = [
    {"Name" : "PPA", "Duration" : "4 Months", "Fees" : 20000},
    {"Name" : "LB", "Duration" : "4.5 Months", "Fees" : 21000},
    {"Name" : "Angular", "Duration" : "4 Months", "Fees" : 21500}
  ]
}
