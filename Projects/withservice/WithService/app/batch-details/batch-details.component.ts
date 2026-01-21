import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
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
    public Batches : any = [];

    public constructor(private batchobj : BatchesService)
    {
        this.Batches = batchobj.GetBatches();
    }
}
