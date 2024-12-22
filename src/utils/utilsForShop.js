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

export const handleGetShopListItemsUser = async (token) => {
  try {
    const response = await fetch(`http://localhost:3000/app/Shop/userShop/${token}`);
    if (!response.ok) {
      throw new Error("Error al obtener la lista de items");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error: " + error);
  }
};

export const handleCreateShopForUser = async (token) => {
  let itemlist;
  await handleGetListItems().then((data) => {
    itemlist = data;
  });

  const newShopUser = {
    _id: token,
    items: itemlist,
  };

  console.log(newShopUser);

  try {
    const response = await fetch(`http://localhost:3000/app/Shop/userShop/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newShopUser),
    });

    if (!response.ok) {
      throw new Error("Error al crear la tienda");
    }

    const data = await response.json();
    console.log("tienda creada:", data);
    return true;
  } catch (error) {
    console.error("error  al crear tienda" + error);
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

export const handleBuy_Item = async (token, item) => {
  try {
    const itemId = item._id;
    const price = item.price;
    const typeItem = item.type;

    const response = await fetch(`http://localhost:3000/app/Shop/userShop/${token}/buy/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: price, typeItem: typeItem }),
    });

    if (!response.ok) {
      throw new Error("Error al intentar comprar item");
    }

    const data = await response.json();
    console.log("item comprado: ", data);
    return data;
  } catch (error) {
    console.error("error al intentar comprar item: " + error);
  }
};

export const handlequantityItem = async (item, token) => {
  try {
    const itemId = item._id;
    const name = item.name;
    const quantity = item.quantity;

    console.log("itemId: " + itemId + " name: " + name + " quantity: " + quantity);

    const response = await fetch(`http://localhost:3000/app/Shop/eat/${token}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error("Error al intentar editar la cantidad del item");
    }

    const data = await response.json();
    console.log("item hecho trizas ", data);
    return data;
  } catch (error) {
    console.error("error al comer item: " + error);
  }
};
