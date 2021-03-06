import { Component, OnInit, AfterContentInit } from '@angular/core';
import { CommonServices } from '../../services/common-services.service';

@Component({
  selector: 'app-player-server-stats',
  templateUrl: './player-server-stats.component.html',
  styleUrls: ['./player-server-stats.component.scss']
})
export class PlayerServerStatsComponent implements OnInit, AfterContentInit {

  serversInfo:Array<any>;

  constructor(private cs: CommonServices) { }

  ngOnInit(){

  }
  ngAfterContentInit() {
    this.cs.getStats().subscribe((data: Array<any>) => {
      this.serversInfo = data;
    }, (err) => {
      console.log(err);
    })
  }

  steamConnect(ip){
    document.location.href = `steam://connect/${ip}/`;
  }
}