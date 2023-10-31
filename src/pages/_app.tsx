import Aside from '@/components/aside/Aside';
import MainLayout from '@/layouts/mainLayout';
import { useWrappedStore } from '@/redux/store';
import '@/styles/index.sass';
import PageWrapper from '@/utils/PageWrapper';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { NextRouter } from 'next/router';
import { ComponentType } from 'react';
import { Provider } from 'react-redux';

const App: NextPage<AppProps & { router: NextRouter }> = ({
  Component,
  router,
  ...rest
}: {
  Component: ComponentType;
  router: NextRouter;
}) => {
  const { pageProps, store } = useWrappedStore(rest);
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
