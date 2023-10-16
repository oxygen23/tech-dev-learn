import { Course } from '@/types/Course';
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styles from './ButtonFavorite.module.sass';

interface ButtonsFavoriteProps {
  item?: Course;
}

const ButtonFavorites: React.FC<ButtonsFavoriteProps> = () => {
  const [isFavorite] = useState(false);
  // const { favorites } = useSelector(selectFavorites);

  // useEffect(() => {
  //   const foundCourse = favorites.find(
  //     (favCourse: Course) => favCourse.id === item.id,
  //   );
  //   setIsFavorite(!!foundCourse);
  // }, [favorites, item.id]);

  return (
    <button type="button" className={styles.button}>
      {isFavorite ? (
        <AiFillHeart className={styles.isFavorite} />
      ) : (
        <AiOutlineHeart />
      )}
    </button>
  );
};

export default ButtonFavorites;
