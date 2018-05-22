import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //           <app-server></app-server>
  //           <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test name';
  servers = ['Test 1', 'Test 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
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

}
