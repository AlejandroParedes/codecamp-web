import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  constructor() { }

  async getFollowers(username: string): Promise<string[]> {
    return [
      "uno",
      "dos",
      "tres"
    ];
  }
}
