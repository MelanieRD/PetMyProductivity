import { Link, useNavigate, useParams } from "react-router-dom";
import { TextInput } from "../../components/TextInput/TextInput";
import { Window } from "../../components/Window/Window";
import { Button } from "../../components/Button/Button";

export const TokenGenerated = () => {
  const { Token } = useParams();
  const useNavi = useNavigate();
  return (
    <>
      <div className="flexColumnCenter">
        <Window
          content={
            <div className="form-group flexColumnCenter margin">
              <p className="title"> ¡Congrats!</p>
              <TextInput labelTxt={"Your pet has been created!"} idTxt={"token"} pHolderTxt={Token} nameTxt={"token"} disabled={"yea"} />
              <p> Save your token to log in</p>
              <Button
                btnTxt={"Start"}
                functionBtn={() => {
                  useNavi("/Game");
                }}
              />
            </div>
          }
        />
      </div>
    </>
  );
};
