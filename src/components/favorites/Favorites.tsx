import Title from '@/components/title/Title';
import { selectFavorites } from '@/redux/slices/favoritesCourses';
import { Course } from '@/types/Course';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import PreviewCourse from '../previewCourse/PreviewCourse';

const Favorites: FC = () => {
  const { favorites } = useSelector(selectFavorites);

  return (
    <>
      <Title title="Твои избранныне курсы" titleLayer={1} />
      <div className="wrapper allCourses">
        {favorites?.length ? (
          favorites.map((item: Course, index: number) => (
            <PreviewCourse
              item={item}
              key={index}
            />
          ))
        ) : (
          <Title title="У тебя нет курсов в избранном" titleLayer={2} />
        )}
      </div>
    </>
  );
};
export default Favorites;
