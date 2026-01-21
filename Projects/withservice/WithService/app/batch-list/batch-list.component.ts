import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
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
    public Batches : any = [];

    public constructor(private batchobj : BatchesService)
    {
      this.Batches = batchobj.GetBatches();
    }
}
