import React from "react";
import styles from "./LocationSectionBox.module.scss";

const LocationSectionBox = ({ image, title, text }) => {
    return (
        <div className={styles.container}>
            <img src={image} />
            <div className={styles.overlay}></div>
            <div className={styles.contents}>
                <div className={styles.title} dangerouslySetInnerHTML={{ __html: title }}/>
                <div className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </div>
    )
}

export default LocationSectionBox;