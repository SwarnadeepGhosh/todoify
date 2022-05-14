import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../../services/hardcoded-auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public hardcodedAuthService : HardcodedAuthService) { }

  ngOnInit(): void {
  }

}
