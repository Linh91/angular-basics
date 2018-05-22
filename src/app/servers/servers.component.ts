import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //           <app-server></app-server>
  //           <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
  .logs {
    color: red;
  }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test name';
  servers = ['Test 1', 'Test 2'];
  noPassword = false;
  timestamp = ['Tue May 22 2018 11:38:05 GMT+0100'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    // setTimeout(() => {
    //   this.noPassword = false;
    // }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! New server is ' + this.serverName;
  }
  newServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  displayDetail() {
    this.noPassword = true;
    this.timestamp.push(Date());
    console.log(this.timestamp);
    setTimeout(() => {
      this.noPassword = false;
    }, 2000);
  }

}
