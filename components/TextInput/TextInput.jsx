import "./TextInput.css";

export const TextInput = ({ labelTxt, idTxt, pHolderTxt, nameTxt, refe }) => {
  return (
    <>
      <label htmlFor={nameTxt}>{labelTxt}</label>
      <input type="text" name={nameTxt} id={idTxt} className="form-control" placeholder={pHolderTxt} ref={refe} />
    </>
  );
};
