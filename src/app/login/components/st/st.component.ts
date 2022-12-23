import { Component, OnInit } from '@angular/core';
import { St } from '../../model/st';
import { StService } from '../../service/st.service';


@Component({
  selector: 'app-st',
  templateUrl: './st.component.html',
  styleUrls: ['./st.component.scss']
})
export class StComponent implements OnInit {
  stVal = null as any;
  isChecked : boolean= true;
  public st!: St
  displayedColumns: string[] = ['matUseType', 'status']
  constructor(private stService: StService) { }

  ngOnInit(): void {
    this.st = new St();
    this.getFn();
  }
  saveFn(){

    this.stService.stSaveFn(this.st).subscribe((data) => {
      console.log(data, 'sent');
      this.getFn();
    })
  }
  getFn(){
    this.stService.stGetFn().subscribe((data: any) =>{
      console.log(data, 'got st');
      this.stVal= data;

    })
  }

}
