import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT } from '../config/constant';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  constructor(
    private http: HttpClient
  ) { }

  async getFollowers(username: string): Promise<string[]> {
    console.log(ENDPOINT);
    let queryObj: any = {
      "id": 10,
      "userListResponse": [ ],
      "userNameA": "alemanuchau",
      "userNameB": ""
    };
    let result: any = await this.http.post(`${ENDPOINT}/getUserFollowers`, queryObj).toPromise();
    return result;
  }
}
