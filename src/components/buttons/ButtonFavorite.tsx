import { changeFavorite, selectFavorites } from '@/redux/slices/favoritesCourses';
import { Course } from '@/types/Course';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ButtonFavorite.module.sass';

interface ButtonsFavoriteProps {
  item: Course;
}

const ButtonFavorites: React.FC<ButtonsFavoriteProps> = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites } = useSelector(selectFavorites);

  useEffect(() => {
    const foundCourse = favorites.find(
      (favCourse: Course) => favCourse.id === item.id,
    );
    setIsFavorite(!!foundCourse);
  }, [favorites, item.id]);

  const dispatch = useDispatch();

  return (
    <motion.button
      className={styles.button}
      onClick={() => dispatch(changeFavorite(item))}
      type="button"
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 1 }}
    >
      {isFavorite ? (
        <AiFillHeart className={styles.isFavorite} />
      ) : (
        <AiOutlineHeart />
      )}
    </motion.button>
  );
};

export default ButtonFavorites;
