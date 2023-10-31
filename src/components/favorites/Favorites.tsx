import { FC } from 'react';

import Title from '../title/Title';

const Favorites: FC = () => (
  // const dispatch = useAppDispatch();
  // const { favorites } = useSelector(selectFavorites);

  // function handleChangeFavorite(course: RootCourse) {
  // dispatch(changeFavorite(course));
  // }
  <>
    <Title title="Твои избранныне курсы" titleLayer={1} />
    <div className="wrapper">
      {/* {favorites?.length > 0 ? (
          favorites.map((item: RootCourse, index: number) => (
            <PreviewCourse
              key={index}
              item={item}
              fnFavorite={handleChangeFavorite}
            />
          ))
        ) : (
          <Title title={"У тебя нет курсов в избранном"} titleLayer={2} />
        )} */}
      Избранное
    </div>
  </>
);
export default Favorites;
