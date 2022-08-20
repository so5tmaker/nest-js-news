import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getNews() {
    return [
      {
        id: 1,
        image: "test.jpg",
        title: "test news",
        date: "2022-05-22T17:14:38.147Z",
        description: "test news",
        likes: 10,
      },
    ];
  }
}
