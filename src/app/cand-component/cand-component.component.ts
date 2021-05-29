import { Component, OnInit, Input } from '@angular/core';
import {Candidate} from '../Candidate'

@Component({
  selector: 'app-cand-component',
  templateUrl: './cand-component.component.html',
  styleUrls: ['./cand-component.component.css']
})
export class CandComponentComponent implements OnInit {
  @Input() candidate : Candidate;
  constructor() { }

  ngOnInit() {
  }

}