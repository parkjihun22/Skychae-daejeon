import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from "./MenuBar.module.scss";

const MenuBar = ({ contents }) => {
    const location = useLocation();
    const [menu, setMenu] = useState([]);

    useState(() => {
        if (contents) setMenu(contents);
    }, [contents])

    return (
                <div className={styles.container}>
                    {menu.map((item, idx) => (
                        <Link
                            key={idx} // 각 자식 컴포넌트에 고유한 키를 설정해야 합니다.
                            className={location.pathname === item.url ? styles.selectedItem : styles.item}
                            to={item.url} // to 속성에 직접 URL 문자열을 전달합니다.
                        >
                            <div>{item.title}</div>
                        </Link>
                    ))}
                </div>
    )
}

export default MenuBar;