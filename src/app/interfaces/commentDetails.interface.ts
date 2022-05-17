import {IComment} from "./comment.interface";

export interface ICommentDetails extends IComment {
  email: string;
  body: string;
}
