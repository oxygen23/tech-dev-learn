import Aside from '@/components/aside/Aside';
import MainLayout from '@/layouts/mainLayout';
import { useWrappedStore } from '@/redux/store';
import '@/styles/index.sass';
import PageWrapper from '@/utils/PageWrapper';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { ComponentType } from 'react';

const App: NextPage<AppProps> = ({
  Component,
  ...rest
}: {
  Component: ComponentType;
}) => {
  const { store, pageProps } = useWrappedStore(rest);
  return (
    <Provider store={store}>
      <PageWrapper>
        <Aside />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </PageWrapper>
    </Provider>
  );
};

export default App;
