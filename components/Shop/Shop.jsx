export const Shop = () => {
  return (
    <>
      <div className="Shop">
        <div className="SearchBar">
          <div className="shopOption"> Cat</div>
          <div className="shopOption"> Walls</div>
          <div className="shopOption"> Floor</div>
          <div className="shopOption"> Curtains</div>
          <div className="shopOption"> Views</div>
          <div className="shopOption"> Furniture</div>

          {/* <label htmlFor="search">Buscar Item </label>
              <input type="search" name="search" id="search" /> */}
        </div>

        <div className="itemList">
          <div className="item">Item</div>
          <div className="item">Item</div>
          <div className="item">Item</div>
          <div className="item">Item</div>
        </div>

        <div className="listNavigation">1.. 2.. 3..</div>
      </div>
    </>
  );
};
