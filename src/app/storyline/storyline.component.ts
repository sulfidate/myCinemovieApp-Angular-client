import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-storyline',
  templateUrl: './storyline.component.html',
  styleUrls: ['./storyline.component.scss'],
})
export class StorylineComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Description: string;
    }
  ) {}

  ngOnInit(): void {}
}
