export const ItemShop = (element) => {
  const handleDetailItem = () => {
    console.log("Cliqueaste un item ", element);
  };

  const handleBuyItem = () => {
    console.log("Compraste el item ", element.item.name, element.item.type);
  };

  const handleEquipItem = () => {
    console.log("Equipaste el item ", element.item.name);
  };
  return (
    <div key={element.item._id} className="item">
      <div className="topItem" onClick={handleDetailItem}>
        <li className="productName">{element.item.name}</li>
        <img src={"/Shop/" + element.item.img} className="productImage" alt={element.item.name} />
      </div>

      <div className="menuItem">
        <li className="buyItem mIBtn" onClick={handleBuyItem}>
          Buy
        </li>

        {element.item.type !== "Food" ? (
          /* Lo que haremos es que al comprar la tienda haga un push del item  al inventario del usuario.
          Pense que una vez hecho el push, se elimine de la base de datos de la tienda. y que solo los items que vengan del inventario
          diferente del type "Food" se muestren en la tienda. Ya que el type food estará en el inventario del usuario. 
          Tambien puedo hacer que cada uno de los items se encuentre en el inventario pero en false y que al comprarlo se cambie a true
          
           */
          <li className="equipItem mIBtn" onClick={handleEquipItem}>
            {" "}
            Equip{" "}
          </li>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
