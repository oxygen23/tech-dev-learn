import Title from '@/components/title/Title';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const Progress: NextPage = () => (
  <>
    <NextSeo title="Прогресс" />
    <Title title="Твой Прогресс" titleLayer={1} />
  </>
);

export default Progress;
