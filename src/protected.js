import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';
export const Protected = ({ userRole,allowedRoles, Cmp }) => {
  

  if (allowedRoles.includes(userRole)) {
    return Cmp;
  } else {
    
    return <PageNotFound />;
  }
};
