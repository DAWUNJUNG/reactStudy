import { GetServerSideProps } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';

// import MainTempalte from 'components/main/MainTemplate';
// import Layout from 'components/@common/Layout';
// import useToken from 'hooks/useToken';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

function Index() {
  useEffect(() => {
    Router.push('/pageNotFound');
  }, []);

  return <></>;
}
export default Index;
