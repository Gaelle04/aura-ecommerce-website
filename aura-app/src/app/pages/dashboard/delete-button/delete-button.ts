import { Component, EventEmitter, Output } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-delete-button',
  imports: [],
  templateUrl: './delete-button.html',
  styleUrl: './delete-button.scss'
})


export class DeleteButton implements ICellRendererAngularComp {


  params!: ICellRendererParams & { onDelete?: (data: any) => void };


    agInit(params: ICellRendererParams) {
        this.params = params;
    }

    refresh(params: ICellRendererParams) {
        this.params = params;
        return true;
    }


    onDeleteClick(){
    this.params.onDelete?.(this.params.data);  
    }
}


