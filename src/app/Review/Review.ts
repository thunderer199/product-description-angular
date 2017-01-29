import {IUser} from '../User/User';

export interface IReview {
  id?: number;
  product?: number;
  created_by?: IUser;
  created_at?: string|Date;
  rate: number;
  text: string;
}
