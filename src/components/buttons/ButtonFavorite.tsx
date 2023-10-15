import { selectFavorites } from '@/redux/slices/favoritesCourses';
import { Course } from '@/types/Course';
import { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import styles from './ButtonFavorite.module.sass';

interface ButtonsFavoriteProps {
  fnFavorite: (item: Course) => void;
  item: Course;
}

const ButtonFavorites: React.FC<ButtonsFavoriteProps> = ({
  fnFavorite,
  item,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites } = useSelector(selectFavorites);

  useEffect(() => {
    const foundCourse = favorites.find(
      (favCourse: Course) => favCourse.id === item.id,
    );
    setIsFavorite(!!foundCourse);
  }, [favorites, item.id]);

  return (
    <button
      type="button"
      onClick={() => fnFavorite(item)}
      className={styles.button}
    >
      {isFavorite ? (
        <AiFillHeart className={styles.isFavorite} />
      ) : (
        <AiOutlineHeart />
      )}
    </button>
  );
};

export default ButtonFavorites;
