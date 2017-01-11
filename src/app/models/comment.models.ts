export interface CommentModel {
  id            : number;
  level         : number;
  user          : string;
  time          : number;
  time_ago      : string;
  content       : string;
  comments      : CommentModel[];
}