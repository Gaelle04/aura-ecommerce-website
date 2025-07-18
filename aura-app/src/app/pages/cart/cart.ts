import { Component } from '@angular/core';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridAngular } from 'ag-grid-angular'; 
import type { ColDef } from 'ag-grid-community';
import { DeleteButton } from '../dashboard/delete-button/delete-button';
import { themeMaterial } from 'ag-grid-community';

@Component({
  selector: 'app-cart',
  imports: [AgGridAngular],
  standalone:true,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})



export class Cart {
  deleteRow(row: any) {
    this.rowData = this.rowData.filter(r => r.product !== row.product);
  }

  public theme = themeMaterial;

  rowData = [
    { product: "/assets/Subject 33.png", details: "avia dress", size: 'Small', price: 60, quantity: 2, subtotal: 120},
    { product: "/assets/Subject 34.png", details: "white skirt", size: 'Small', price: 50, quantity: 1, subtotal: 50},
    { product: "/assets/Subject 29.png", details: "beige tank top", size: 'Small', price: 30, quantity: 3, subtotal: 90},
];


colDefs: ColDef[] = [
    { field: "product"},
    {field:"size"},
    { field: "details" },
    { field: "price"},
    { field: "quantity" },
    {field:"subtotal"}
];
  pagination: boolean;
  paginationPageSize: number;
  paginationPageSizeSelector: number[];
  rowHeight = 150;
constructor(){
  this.colDefs = [
    {field: "product",
  cellRenderer: (params: any) => {
    return `<img src="${params.value}" alt="Product" style="width: 60px; height: auto; border-radius: 8px;" />`;}},
    { field: "details", filter: false },
    {field:"size"},
    { field: "price", filter: true, valueFormatter: (params: { value: string; }) => '$' + params.value  },
    {field:"quantity", filter:false},
    {field:"subtotal",valueFormatter: (params: { value: string; }) => '$' + params.value  },
    {field: "actions", cellRenderer: DeleteButton, cellRendererParams:{
      onDelete :(row :any)=> this.deleteRow(row)
    }}
];

this.pagination = true;
this.paginationPageSize = 500;
this.paginationPageSizeSelector = [200, 500, 1000];

}





}
