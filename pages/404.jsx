import React from 'react';
import Cover from '../src/components/Cover';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function Home() {
  return (
    <>
      <Cover />
    </>
  );
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Erro 404',
    },
  },
});