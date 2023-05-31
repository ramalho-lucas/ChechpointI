import style from "./InputComponent.module.css"


function InputComponent({ label, type, value, fnOnChange, onKeyUp, placeholder }) {
    return (
        <div className={style.input}>
            <label>{label ?? "Indefinido"}</label>
            <br />

            <input
                type={type ?? "text"}
                value={value}
                placeholder={placeholder}
                onChange={fnOnChange}
                onKeyUp={onKeyUp}
            />
            <br />
        </div>
    );
}

export default InputComponent;