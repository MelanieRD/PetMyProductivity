import "./TextInput.css";

export const TextInput = ({ labelTxt, idTxt, pHolderTxt, nameTxt, refe, disabled, _width, _padding, _fontsize }) => {
  return (
    <>
      <label htmlFor={nameTxt}>{labelTxt}</label>
      {/* { someValue !== null ? { title: someValue } : {} } */}
      <input
        style={{ width: _width, padding: _padding, fontSize: _fontsize }}
        type="text"
        name={nameTxt}
        id={idTxt}
        className="form-control inputTxt"
        placeholder={pHolderTxt}
        ref={refe}
        disabled={disabled !== null && disabled !== undefined}
      />
    </>
  );
};
