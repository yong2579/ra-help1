import { Admin, Resource } from "react-admin";

import IncidentCreate from './modules/incidents/IncidentCreate';

export const App = (props) => {
  return (
    <Admin>
      <Resource name="incidents" create={IncidentCreate} />
    </Admin>
  );
};
