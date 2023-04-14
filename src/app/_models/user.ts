import { Role } from './role';

export class User {
  id: string;
  name: string;
  email: string;
  gender: string;
  status: string;
  isDeleting: boolean = false;
}
