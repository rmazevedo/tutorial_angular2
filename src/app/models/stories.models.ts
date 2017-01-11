import { CommentModel } from '../models/comment.models';

export interface StoriesModel {
  items : ItemModel[];
}

export interface ItemModel {
  id           : number;
  title         : string;
  points        : number;
  user          : string;
  time          : number;
  time_ago      : string;
  comments_count: number;
  type          : string;
  url           : string;
  models?       : string;   
  comments      : CommentModel[];
}
