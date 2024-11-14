import "./Button.css";

export const Button = ({ btnTxt, functionBtn }) => {
  // lo que voy hacver ahorita es crear un obj paque me guarde cierta
  //  info del UserActivation, y el pet y despues se lo envio mongo, pa que me cree un archivito bien bonito,
  //La cosa es que noc el mejor lugar donde ordenar las funciones que podria llamar mi componente boton
  //   podria crear otra carpeta y llamarle BtnFunctions o noc, ya averiguaré

  return (
    <>
      <div className="Btn" onClick={functionBtn}>
        {" "}
        {btnTxt}
      </div>
    </>
  );
};
