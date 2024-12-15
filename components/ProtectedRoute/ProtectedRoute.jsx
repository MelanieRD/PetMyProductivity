import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children, userData, token }) => {
  console.log("isAuthenticated dentro de protectedRoute", isAuthenticated);
  if (isAuthenticated === null) {
    // Muestra un indicador de carga mientras se verifica la autenticación
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  console.log("Renderizando children");

  return React.cloneElement(children, { userData, token });
  //return children;
  // return isAuthenticated ? children : <Navigate to="/Notfound" />;
};

export default ProtectedRoute;
