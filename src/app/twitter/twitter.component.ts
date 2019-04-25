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
  public followersA: string[];
  public followersB: string[];

  constructor(
    private followerService: FollowerService
  ) { }

  async ngOnInit() {
  }

  async getData() {
    this.followersA = await this.followerService.getFollowers(this.userA);
    this.followersB = await this.followerService.getFollowers(this.userB);
    console.log(this.followersA);
    console.log(this.followersB);
  }

}
