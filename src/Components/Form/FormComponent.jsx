import style from "../Form/FormComponent.module.css";
import CardComponent from "../Cards/CardComponent";
import InputComponent from "../Input/InputComponent";
import CardsListComponent from "../Cards/CardsListComponent";
import { useState } from "react";

function FormComponent() {

    
    const [colorName, setColorName] = useState("");
    const [colorCod, setColorCod] = useState("");
    const [formIsValid, setFormIsValid] = useState(false);
    const [colorList, setColorList] = useState([]);

    const mensagemErro = "Por Favor, verifique os dados inseridos no Formulario"

    const handleChangeColorName = (event) => {
        setColorName(event.target.value);
    }

    const handleChangeColorCod = (event) => {
        setColorCod(event.target.value);
    }

    const handleButtonClick = () => {
    
        if(formIsValid == true){
            setColorList(
                [
                    ...colorList,
                    { 
                        name: colorName,
                        cod: colorCod
                    }
                ]
            )
        } else {
            alert(mensagemErro);
        }
  

        setColorName("");
        setColorCod("");
        setFormIsValid(false);
        
    }

    const formValidator = () => {

        const regex = /[0-9]/;
        const colorTrim = colorName.trim();
        
        if (colorTrim.length >= 3 && regex.test(colorCod) == true && colorCod.length >= 6) {
            setFormIsValid(true);
        } else {

            setFormIsValid(false);
        }
    }

    return (
        <>
        
            <div className={style.container}>
                <h2>ADICIONAR NOVA COR</h2>

                <InputComponent
                    label="Cor"
                    type="text"
                    placeholder=""
                    value={colorName}
                    fnOnChange={handleChangeColorName}
                    onKeyUp={formValidator}
                />

                <InputComponent
                    label="Codigo da Cor"
                    type="text"
                    placeholder="Insira sua cor no formato Hexadecimal"
                    value={colorCod}
                    fnOnChange={handleChangeColorCod}
                    onKeyUp={formValidator}
                />

                <button
                    onClick={handleButtonClick}
                    //disabled={!formIsValid}
                    
                >Salvar</button>
            </div>

            <CardsListComponent>
                {
                    colorList.map(colorCard => {
                        return (
                            <CardComponent
                                key={colorCard.name}
                                name={colorCard.name}
                                cod ={colorCard.cod}
                            />
                        );
                    })
                }
            </CardsListComponent>
        </>
    );
}

export default FormComponent;