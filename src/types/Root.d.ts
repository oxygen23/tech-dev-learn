import { Author } from "next-seo/lib/types";
import { Course } from "./Course";
import { User } from "./User";

export interface Root {
	courses: Course[];
	user: User;
	authors: Author[];
}
