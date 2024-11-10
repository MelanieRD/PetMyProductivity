import "./Card.css";

export const Card = () => {
  return (
    <>
      <div className="Card" id="Card">
        <div className="contentCard">
          <div className="imgCard">
            <img src="../../src/assets/Pets/Cat/ProfilePics/catProfile.png" alt="ProfilePoic" />
          </div>

          <div className="txtCard">
            <h2>Pato the Cat</h2>
            <h3>Lvl. 30</h3>
            <input type="range" />
          </div>
        </div>
      </div>
    </>
  );
};
