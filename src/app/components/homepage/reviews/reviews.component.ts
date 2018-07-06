import { Component, OnInit } from '@angular/core';
import  * as reviewsData  from '../../../../assets/reviews/reviews.json';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  public reviewsData = reviewsData.default;
  public ratingPaths = [];

  constructor() {
    this.reviewsData.map((item,index,array) => {
     this.ratingPaths.push(item.ratingsUrl);
    })
  }

  ngOnInit() {
    
  }

}
