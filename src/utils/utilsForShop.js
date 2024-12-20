export const handleGetListItems = async () => {
  try {
    const response = await fetch(`http://localhost:3000/app/Shop`);
    if (!response.ok) {
      throw new Error("Error al obtener la lista de items");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error: " + error);
  }
};

export const handleGetListByType = async (typeItems) => {
  try {
    console.log(typeItems);
    const response = await fetch(`http://localhost:3000/app/Shop/${typeItems}`);
    if (!response.ok) {
      throw new Error("Error al obtener la lista de items");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error: " + error);
  }
};
