export const createInventory = async (newInventory) => {
  try {
    const response = await fetch(`http://localhost:3000/app/inventory/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInventory),
    });

    if (!response.ok) {
      throw new Error("Error al crear inventario");
    }

    const data = await response.json();
    console.log("inventario creado:", data);
    return true;
  } catch (error) {
    console.error("error  al crear inventario" + error);
  }
};

export const addItemInventory = async (token, newItemToInventory) => {
  try {
    const response = await fetch(`http://localhost:3000/app/inventory/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: "123456789",
        item: "item",
        quantity: 1,
      }),
    });

    if (!response.ok) {
      throw new Error("Error al add item");
    }

    const data = await response.json();
    console.log("Item added:", data);
    return true;
  } catch (error) {
    console.error("error  al add item" + error);
  }
};
