import React from "react";
import { BeatLoader } from 'react-spinners';

import styles from './Ready.module.scss';

const override = {
    margin: '6vw 0 4vw 0',
};


const Ready = () => {
    return (
        <div className={styles.container}>
            <BeatLoader
                color="#fdb461"
                cssOverride={override}
                loading
                margin={15}
                size={15}
                speedMultiplier={1}
            />
            <div className={styles.text}>COMEING SOON</div>
        </div>
    )
}

export default Ready;