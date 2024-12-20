import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [tokenUser, setTokenUser] = useState(null);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await fetch("http://localhost:3000/app/users/protected", {
          method: "GET",
          credentials: "include", // Incluye las cookies en la solicitud
        });

        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(true);
          setUserData(data.user); // Guarda los datos del usuario
          setTokenUser(data.user.petFindedToken);
          console.log("Usuario autenticado con el hook:", data.user);
          console.log("TOKEN", data.user.petFindedToken);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error al verificar la autenticación", error);
        setIsAuthenticated(false);
      }
    };

    fetchAuthStatus();
  }, []);

  return { isAuthenticated, userData, tokenUser };
};

export default useAuth;
