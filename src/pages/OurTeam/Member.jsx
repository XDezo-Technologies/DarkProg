import React from "react";
import Styles from './Team.module.css'

function Member(props) {
    return (
        <div className={Styles.member}>
            <img className={Styles.img} src={props.image} alt="" />
            <div className={Styles.detail}>
                Company Manager <br /> Hari Prashad                    </div>
        </div>
    )
}

export default Member;