import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverID: number=5;
  serverStatus: string= 'in Online';
  testServer=true;
  testServer1=false;
  cta: string='you are ready to take test in next few secs...'

  constructor() { }

  ngOnInit(): void {}
   
  getServerStatus() 
  {
    return this.serverStatus;
  } 
  onCreateServer()
  {
    this.cta='yor are ready to begin'; 
  }

}
