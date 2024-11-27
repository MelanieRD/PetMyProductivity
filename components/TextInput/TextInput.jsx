import "./TextInput.css";

export const TextInput = ({ labelTxt, idTxt, pHolderTxt, nameTxt, refe, disabled }) => {
  return (
    <>
      <label htmlFor={nameTxt}>{labelTxt}</label>
      {/* { someValue !== null ? { title: someValue } : {} } */}
      <input type="text" name={nameTxt} id={idTxt} className="form-control inputTxt" placeholder={pHolderTxt} ref={refe} disabled={disabled !== null && disabled !== undefined} />
    </>
  );
};
