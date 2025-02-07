import React, { useEffect, useState } from "react";
import styles from "./MobileSectionBox.module.scss";

import mobile1 from "../../assets/Main/mobile1.jpg";
import mobile2 from "../../assets/Main/mobile2.jpg";
import mobile3 from "../../assets/Main/mobile4.jpg";
import mobile4 from "../../assets/Main/mobile3.jpg";

const MobileSectionBox = ({ type, titleImag, title, subText1, subText2}) => {
    const [isClick, setIsClick] = useState(false);
    const [image, setImage] = useState();

    useEffect(() => {
        const imageMap = {
            "PREMIUM 01": mobile1,
            "PREMIUM 02": mobile2,
            "PREMIUM 03": mobile3,
            "PREMIUM 04" : mobile4
        };
        setImage(imageMap[title]);
    }, [title])

    return (
        <>
            {type === "left" ? (
                <div className={`${isClick ? styles.onClicked : styles.unClicked} ${styles.leftContainer}`} onClick={() => setIsClick(!isClick)}>
                    <div className={styles.backgroundContainer}>
                        <img src={image} alt="" className={styles.backgroundImage} />
                        <div className={styles.overlay}></div>
                    </div>
                    <div className={styles.left}>
                        <img src={titleImag} alt="" />
                        <div>{title}</div>
                    </div>
                    {isClick &&
                        <div className={styles.subTextleft}>
                            <div className={styles.subText1} dangerouslySetInnerHTML={{ __html: subText1 }} />
                            <div className={styles.subText2} dangerouslySetInnerHTML={{ __html: subText2 }} />
                        </div>
                    }
                </div>
            ) : (
                <div className={`${isClick ? styles.onClicked : styles.unClicked} ${styles.rightContainer}`} onClick={() => setIsClick(!isClick)}>
                    <div className={styles.backgroundContainer}>
                        <img src={image} alt="" className={styles.backgroundImage} />
                        <div className={styles.overlay}></div>
                    </div>
                    <div className={styles.right}>
                        <img src={titleImag} alt="title image" />
                        <div>{title}</div>
                    </div>
                    {isClick &&
                        <div className={styles.subTextright}>
                            <div className={styles.subText1} dangerouslySetInnerHTML={{ __html: subText1 }} />
                            <div className={styles.subText2} dangerouslySetInnerHTML={{ __html: subText2 }} />
                        </div>
                    }
                </div>
            )}
        </>
    )
}

export default MobileSectionBox;