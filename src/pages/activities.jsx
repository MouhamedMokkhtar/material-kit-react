import { Helmet } from 'react-helmet-async';
import { ActivitiesView } from 'src/sections/activities/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <ActivitiesView />
    </>
  );
}
