import { Author } from 'next-seo/lib/types';

import { Course } from './Course';
import { User } from './User';

export interface Root {
  authors: Author[];
  courses: Course[];
  user: User;
}
