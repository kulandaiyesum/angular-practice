import { Component, OnInit } from '@angular/core';
import { Mt } from '../../model/mt';
import { MtService } from '../../service/mt.service';

@Component({
  selector: 'app-mt',
  templateUrl: './mt.component.html',
  styleUrls: ['./mt.component.scss']
})
export class MtComponent implements OnInit {
  mtVal = null as any;
  public mt! : Mt
  displayedColumn: string[] = ['mgName', 'mgCode','mgId','mgUsageType','status']
  constructor(private mtService: MtService) { }

  ngOnInit(): void {
    this.mt = new Mt();
    this.mtget()
  }
  mtSave() {
    this.mtService.mtSaveFn(this.mt).subscribe((data) => {
      console.log(data,'check');
      this.mtget()
    })
  }
  mtget(){
    this.mtService.mtgetFn().subscribe((dat: any) => {
      console.log(dat);
      this.mtVal = dat;
      
    })
  }

  

}
