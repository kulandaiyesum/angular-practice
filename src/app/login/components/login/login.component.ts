import { Component, OnInit } from '@angular/core';
import { Login } from '../../model/login';
import { LoginService } from '../../service/login.service';
// import { HttpHeaders } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // valueToUpdate = {
  //   partName: '',
  //   shortName:'', 
  //   subcat: '',
  //   subDes: '',
  //   unitType: '',
  //   getType: '',
  //   usageArea:'', 
  //   stockNo: '',
  //   PurchType:'', 
  //   Stock: '',
  //   usageType:'', 
  // }

  // show = false;
  isChecked = false;
  isLoggedIn = true;
  public login!:Login

  // dataSource = null as any;
  tableValue = null as any;
  displayedColumns: string[] = ['id','partName','shortName','subcat','subDesp','unitType','status', 'Action'];

  constructor(private loginService: LoginService) {


  }

  ngOnInit(): void {
    this.login = new Login();
    this.getvalues()
  }
  loginFn(){
    console.log(this.login,'submitted');
    this.loginService.loginFn1(this.login).subscribe((doc) => {
      console.log(doc, "this is doc");
      this.getvalues()
    })
  }
  getvalues()  {
    console.log("checking");
    // let data = {}
    // console.log(data);
    this.loginService.getFn().subscribe((data : any) => {
      console.log(data,"sss");
      this.tableValue = data;

    });
  }
  clrFn() {
    this.login = String as any;
  }

  // editFn(val: any){
  //   this.loginService.putfn(val).subscribe((res) => {
  //     console.log(res);
  //   })
  // }
  edittype(rowqq:any):void{
    // this.login.id = rowqq.id
    this.login.partName = rowqq.partName
    this.login.shortName = rowqq.shortName
    this.login.subcat = rowqq.subcat
    this.login.subDesp = rowqq.subDesp
    this.login.unitType = rowqq.unitType
    this.login.getType = rowqq.getType
    this.login.usageArea = rowqq.usageArea
    this.login.stockNo = rowqq.stockNo
    this.login.PurchType = rowqq.PurchType
    this.login.Stock = rowqq.Stock

    // this.valueToUpdate = rowqq;
  }

  deleteType(val: any) {
    this.loginService.delfn(val).subscribe((data) => {
      console.log(data,'deleted data');
      this.getvalues()
    })
  }
  updatetype(){
    // this.loginService.putfn().subscribe((data : any) => {
    //   console.log(data, 'edited data');
    //   this.getvalues();
    // })
  }
}
