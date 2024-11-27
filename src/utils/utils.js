//Buttons;

export const handleCreateNewPet = async (newUser) => {
  try {
    const response = await fetch("http://localhost:3000/app/users/0", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //Indicando que es un JSON
      },
      body: JSON.stringify(newUser), //pasandolo a mi req.body como JSON
    });

    if (!response.ok) {
      throw new Error("Error al crear");
    }

    const data = await response.json();
    console.log("Mascota creada:", data);

    return true;
  } catch (error) {
    console.error("error  al crear mascota" + error);
  }
};

export const handlePetLogIng = () => {
  console.log("Pet Finded");
};
