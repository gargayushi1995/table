import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  @ViewChildren('input') input;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dropdownList1 = [];
  selectedItems1 = [];
  dropdownSettings1 = {};

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
    this.dropdownList1 = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems1 = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari'}
    ];
    this.dropdownSettings1 = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onItemSelect1(item: any) {
    console.log(item);
  }
  onSelectAll1(items: any) {
    console.log(items);
  }

norows: string;
  addRow(){
    console.log("add rows");
  

  }
  addColumn(){
    console.log("add columns")

  }
  // copyPricingToAll(): void {
  // var copyValue: string = document.getElementById("priceInputGlobal").value;

  // this.currentItem.orderLines.forEach(orderLine => {
  // document.getElementById("priceInput-" + orderLine.id).setAttribute("value", copyValue);
  //  });
  // }


  rowArr = [];
  colArr = [];
  inputArr = [];
  manageRow(row) {
    this.rowArr = [];
    row = row.value;
    for (let index = 0; index < row; index++) {
      this.rowArr.push(index);
    }

    console.log(this.rowArr);
  }

  manageCol(col) {
    this.colArr = [];
    col = col.value;
    for (let index = 0; index < col; index++) {
      this.colArr.push(index);
    }

    console.log(this.colArr);
  }
  // manageInput(table) {
  //   // this.inputArr = [];
  //   table = table.value;
    
  //   // for (let index = 0; index < input; index++) {
  //   // }
  //   for (let index = 0; index < table.value; index++) {
              
  //   this.inputArr.push(table.value);
  //   }
  //   console.log(this.inputArr);
  // }

  saveForm(form: NgForm) {

    // $('input').each(function() {
    //   console.log($(this).val());
    // })

    // console.log(this.input._results);

    // this.input._results.forEach((element: ElementRef) => {
    //   console.log(element.nativeElement.value);
    // });

    console.log(form.value);
    
  }
    
}


