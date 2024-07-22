import { Helmet } from 'react-helmet-async';
import BillView from 'src/sections/bill/bill-view';


// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      {/* <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet> */}
      <BillView />
      {/* <BlogView /> */}
    </>
  );
}
