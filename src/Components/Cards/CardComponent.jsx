import style from "./CardComponent.module.css";

function CardComponent({name, cod}) {


    return (
        <div className={style.container} style={{backgroundColor: cod}}>
            <div className={style.title}>{name ?? "Não informado"}</div>
            <div className={style.subtitle}>{cod ?? "Não informado"}</div>
        </div>
    );
}

export default CardComponent;