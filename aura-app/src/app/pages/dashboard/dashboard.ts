import { Component } from '@angular/core';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridAngular } from 'ag-grid-angular'; 
import type { ColDef } from 'ag-grid-community';
import { DeleteButton } from './delete-button/delete-button';
import {themeMaterial} from 'ag-grid-community';

@Component({
  selector: 'app-dashboard',
  imports: [AgGridAngular],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})



export class Dashboard {




 public theme = themeMaterial.withParams({
  //backgroundColor: '#f1ebff',
  foregroundColor: 'rgb(126, 46, 132)',
  headerTextColor: '#ffffff',
  headerBackgroundColor: '#',
  oddRowBackgroundColor: '#EEDAFB',
  headerColumnResizeHandleColor: '#ffffff',
   fontFamily: 'sans-serif',
  // headerFontFamily: 'Afacad',
   cellFontFamily: 'monospace',
});

rowHeight= 70;



  deleteRow(row: any) {
    this.rowData = this.rowData.filter(r => r.id !== row.id);
  }

  rowData = [
    { id: "1", image:"assets/girl.png", name: "gaelle", actions: "added item to cart",  status: true},
    { id: "2",image:"assets/boy.png",  name: "chris",actions: "logged in", status: true },
    { id: "3", image:"assets/boy.png",name: "joe", actions: "logged out",  status: false },
    { id: "4", image:"assets/girl.png", name: "chloe", actions: "added item to cart",  status: true}, 
    { id: "5", image:"assets/boy.png",name: "joey", actions: "logged out",  status: false }
];


colDefs: ColDef[] = [
    { field: "id"},
    {field:"image"},
    { field: "name" },
    { field: "actions"},
    {field:"status"}
];
  pagination: boolean;
  paginationPageSize: number;
  paginationPageSizeSelector: number[];

constructor(){
  this.colDefs = [
    { field: "id", filter: true },
    {field:"image", 
    cellRenderer: (params: any) => {
      return `<img src="${params.value}" alt="Product" style="width: 50px; height: auto; border-radius: 6px;" />`;}},
    { field: "name", filter: false },
    { field: "actions", filter: false, editable:true  },
    { field: "status", filter: true, cellRenderer:(params: any) =>{
      const isActive = params.value === true;
      return `<span style="
      padding: 5px 12px;
      border-radius: 12px;
      font-size: 13px;
      color: white;
      background-color: ${isActive ? '#4caf49' : '#f44333'};
    ">
    ${isActive ? 'Active' : 'InActive'}
    </span>`;
    }, },
    {field: "actions", cellRenderer: DeleteButton, cellRendererParams:{
      onDelete :(row :any)=> this.deleteRow(row)
    }}
];

this.pagination = true;
this.paginationPageSize = 500;
this.paginationPageSizeSelector = [200, 500, 1000];

}





}
