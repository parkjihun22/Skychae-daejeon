import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./SlideMenu.module.scss";

const SlideMenu = ({
  contents,
  onClose,
  // 기본값으로 테스트용 alert를 넣어두었습니다.
  onReservationClick = () => {
    alert("예약 팝업 열림");
  },
}) => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const menuRef = useRef(null);

  const handleMenuClick = (index) => {
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const adjustMenuHeight = () => {
      if (menuRef.current) {
        const windowHeight = window.innerHeight;
        menuRef.current.style.height = `${windowHeight - menuRef.current.offsetTop}px`;
      }
    };

    adjustMenuHeight();
    window.addEventListener("resize", adjustMenuHeight);

    return () => window.removeEventListener("resize", adjustMenuHeight);
  }, []);

  return (
    <div className={styles.container} ref={menuRef}>
      {/* 기존 스타일(a 태그 모양)을 유지 */}
      <div className={`${styles.menuBtn} ${styles.mobileReservation}`}>
        <a
          href="#"
          className={styles.linkItem}
          onClick={(e) => {
            e.preventDefault();
            onReservationClick();
            onClose();
          }}
        >
          모바일 방문예약
        </a>
      </div>
      {contents.map((value, idx) => (
        <div key={idx} className={styles.menuItem}>
          <div className={styles.menuBtn} onClick={() => handleMenuClick(idx)}>
            <div className={styles.menuTitle}>{value.title}</div>
          </div>
          <div className={`${styles.subMenu} ${clickedIndex === idx ? styles.show : ""}`}>
            {value.subMenu &&
              value.subMenu.map((subValue, subIdx) => (
                <Link key={subIdx} to={subValue.subUrl} className={styles.subMenuBtn} onClick={onClose}>
                  {subValue.subTitle}
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideMenu;
