import Header from '@/components/header/Header';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';

interface Props {
  children: ReactNode;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '500', '600'],
});

const MainLayout: React.FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (
      path === '/favorites' ||
      path === '/allCourses' ||
      path === '/progress' ||
      path === '/'
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [path]);

  return (
    <main
      className={
        visible
          ? `main ${poppins.className}`
          : `main visible ${poppins.className}`
      }
    >
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
