import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
    // Must be declared as "any", not as "DataTables.Settings"
    dtOptions: any = {};
    data_mb = [{
      "firstName":"m3",
      "lastName":"m4",
     
    }]

    ngOnInit(): void {
      this.dtOptions = {
       
        columns: [{
          title: 'ID',
          data: 'id'
        }, {
          title: 'First name',
          data: 'firstName'
        }, {
          title: 'Last name',
          data: 'lastName'
        }],
        // Declare the use of the extension in the dom parameter
        dom: 'Bfrtip',
        // Configure the buttons
        buttons: [
          'columnsToggle',
          'colvis',
          'copy',
          'print',
          'excel',
          
        ]
      };
    }
}
