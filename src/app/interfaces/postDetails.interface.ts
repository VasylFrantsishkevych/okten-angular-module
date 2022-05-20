import {IPost} from "./post.interface";

export interface IPostDetails extends IPost {
  userId: number;
  body: string;
}
