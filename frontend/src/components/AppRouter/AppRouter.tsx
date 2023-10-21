import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '../../routes';
import { MAIN } from '../../utils/const';

function AppRouter() {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={<Component />}
        />
      ))}
      <Route path="*" element={<Navigate to={MAIN} />} />
    </Routes>
  );
}

export default AppRouter;
