import style from "./simpson.module.css"

const Simpson = (props) => {
    const {name,surname, age, sex, info, photo} = props;
    return (
        <div>
            <div className={style.wrap}>
                <div className={style.text}>
                    <div>{'Name:'}{name}</div>
                    <div>{'Surname:'}{surname}</div>
                    <div>{sex}</div>
                    <div>{age}</div>
                </div>
                <div><img src={photo} alt={name+surname}/></div>
            </div>
            <div className={style.inf}>{info}</div>
        </div>
    )
}

export default Simpson;