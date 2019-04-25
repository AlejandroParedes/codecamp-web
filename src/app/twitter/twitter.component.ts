import { Component, OnInit } from '@angular/core';
import { FollowerService } from '@services/follower.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {
  public userA: string;
  public userB: string;

  constructor(
    private followerService: FollowerService
  ) { }

  async ngOnInit() {
    let follower = await this.followerService.getFollowers('ho');
    console.log(follower);
  }

  async getData() {
    console.log(this.userA);
    console.log(this.userB);
  }

}
