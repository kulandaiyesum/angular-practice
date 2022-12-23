import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Dropdwon } from '../../model/dropdwon';
import { DropdwonService } from '../../service/dropdwon.service';


@Component({
  selector: 'app-dropdwon',
  templateUrl: './dropdwon.component.html',
  styleUrls: ['./dropdwon.component.scss']
})
export class DropdwonComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  value = '';   
  type = '';
  ptype = '';
  public vals = ['50','60','80','70']
  dataS = null as any;
  public dropdwon!: Dropdwon

  displayedColumns: string[] =['id', 'userName','email','phoneNo','pumpTypes','singlePhase','threePhase']
  constructor(private dpS : DropdwonService) { }

  ngOnInit(): void {
    this.dropdwon = new Dropdwon();
    this.dpgetFn();

  }

  dppostFn() {
    console.log("post fn working");
    this.dpS.dppost(this.dropdwon).subscribe(( val: any) =>{
      console.log(val);
      
    })   
  }
  dpgetFn(){
    let data = {};
    console.log(data)
    this.dpS.dpget().subscribe((data: any) => {
      console.log(data,'back data');
      this.dataS = data;
    })
  }

}
