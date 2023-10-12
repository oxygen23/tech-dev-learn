import { RootCourse } from "./Course";
import { CoursesStarted } from "./User";

interface PreviewCourse {
  item: RootCourse
  fnFavorite: (item: RootCourse) => void
}