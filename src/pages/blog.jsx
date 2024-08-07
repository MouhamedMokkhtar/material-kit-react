import { Helmet } from 'react-helmet-async';

import { BlogView } from 'src/sections/blog/view';
import ProductsView from 'src/sections/products/view/template-products-view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet>
      <ProductsView />
      {/* <BlogView /> */}
    </>
  );
}
