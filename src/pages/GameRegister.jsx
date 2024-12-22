import { Button } from "../../components/Button/Button";
import { TextInput } from "../../components/TextInput/TextInput";
import { Window } from "../../components/Window/Window";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { handleCreateNewPet, taskCreate } from "../utils/utils";
import { useRef, useState } from "react";
import User from "../../server/classes/User";
import { petTokenGenerator } from "../utils/PetTokenGenerator";
import { TasksC } from "../../server/classes/TaskClass";
import { createInventory } from "../utils/utilsInventory";
import { Inventory } from "../../server/classes/InventoryClass";
import { handleCreateShopForUser } from "../utils/utilsForShop";

export const GameRegister = () => {
  const navigate = useNavigate();
  const petNameValue = useRef("null");

  const handlePetName = async () => {
    const token = await petTokenGenerator();
    console.log("este es el token: " + token);
    const newUser = new User(petNameValue.current.value, token);
    const newTaskRegistro = new TasksC(token);
    console.log(newUser._id);
    const created = await handleCreateNewPet(newUser);
    const tasksRegistered = await taskCreate(newTaskRegistro);

    // Create inventory
    const newInventory = new Inventory(token);
    const userInventory = await createInventory(newInventory);

    // Create Shop for user
    const shopCreated = await handleCreateShopForUser(token);

    if (created) {
      navigate("/TokenGenerated/" + token);
    }
  };

  return (
    <>
      <div className="flexColumnCenter">
        <Window
          content={
            <div className="form-group flexColumnCenter margin">
              <p className="title"> New Pet</p>
              <TextInput labelTxt={"Pet Name: "} idTxt={"petName"} pHolderTxt={"Write a name for your pet"} nameTxt={"PetName"} refe={petNameValue} />
              <Link to="/">Have an account? Better Log In</Link>
              <Button btnTxt={"Create Pet"} functionBtn={handlePetName} />
            </div>
          }
        />
      </div>
    </>
  );
};
