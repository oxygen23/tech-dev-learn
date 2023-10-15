import Favorites from '@/components/favorites/Favorites';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const Favoritespage: NextPage = () => {
  return (
    <>
      <NextSeo title="Избранное" />
      <Favorites />
    </>
  );
};

export default Favoritespage;
