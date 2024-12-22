import { useUser } from "../../../src/pages/CreateContext";
import { handleBuy_Item } from "../../../src/utils/utilsForShop";

export const ItemShop = ({ item, coins, updateUserCoins }) => {
  const contextData = useUser();
  const user = contextData.userData;
  const shopList = contextData.shopListUser[0].items; // shopList

  const handleDetailItem = () => {
    console.log("Cliqueaste un item ", item);
  };

  const handleBuyItem = async () => {
    try {
      if (coins > item.price) {
        console.log("Tienes suficientes monedas para comprar el item", item.name);
        const data = await handleBuy_Item(user._id, item);
        // console.log(data);

        if (data) {
          updateUserCoins(coins - item.price);
        }

        if (item.type !== "Food") {
          // actualizar tienda

          item.state = "inactive";
          console.log("item inactivo");
        }
      } else {
        console.log("No tienes suficientes monedas para comprar el item ", item.name, item.price);
      }
    } catch (error) {
      console.log("Error al comprar el item", error);
    }
  };

  const handleEquipItem = () => {
    console.log("Equipaste el item ", item.name);
  };
  return (
    <div key={item._id} className="item">
      <div className="topItem" onClick={handleDetailItem}>
        <li className="productName">
          {item.name} {item.price}$
        </li>
        <img src={"/Shop/" + item.img} className="productImage" alt={item.name} />
      </div>

      <div className="menuItem">
        {/* Lo que haremos es que al comprar la tienda haga un push del item  al inventario del usuario.
          Pense que una vez hecho el push, se elimine de la base de datos de la tienda. y que solo los items que vengan del inventario
          diferente del type "Food" se muestren en la tienda. Ya que el type food estará en el inventario del usuario. 
          Tambien puedo hacer que cada uno de los items se encuentre en el inventario pero en false y que al comprarlo se cambie a true
          
           */}
        {item.type === "Food" ? (
          <li className="buyItem mIBtn" onClick={handleBuyItem}>
            Buy
          </li>
        ) : item.state === "active" ? (
          <li className="buyItem mIBtn" onClick={handleBuyItem}>
            Buy Item
          </li>
        ) : (
          <li className="buyItem mIBtn" onClick={handleEquipItem}>
            Equip
          </li>
        )}
      </div>
    </div>
  );
};
