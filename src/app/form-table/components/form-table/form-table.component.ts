import { Component, OnInit } from '@angular/core';
import { FormTableService } from '../../service/form-table.service';
@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss']
})
export class FormTableComponent implements OnInit {

  displayedColumns: string[] = ['id','partName','shortName','subcat','subDesp','unitType','getType','usageArea','stockNo','PurchType','Stock','usageType'];
  tableValue = null as any;

  constructor(private formSevice: FormTableService) { }
  
  ngOnInit(): void {
    this.getvalues();
  }
  getvalues()  {
    console.log("checking");
    let data = {}
    console.log(data);
    this.formSevice.getFn().subscribe((data : any) => {
      console.log(data,"sss");
      this.tableValue = data;
    });
  }
  
  
}
