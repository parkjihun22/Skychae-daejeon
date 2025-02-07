import React from "react";
import { MdOndemandVideo } from "react-icons/md";
import { useMediaQuery } from 'react-responsive';
import { PiPhoneCallFill } from "react-icons/pi";
import { IoIosCheckboxOutline } from "react-icons/io";
import styles from "./FixIcon.module.scss";

import icon from "../../assets/FixIcon/open.png";
import movingCircle from "../../assets/FixIcon/movingCircle.png";
import youtube from "../../assets/FixIcon/youtube.png";

const FixIcon = ({ type }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    const IconContent = (content) => {
        if (content === "youtube") {
            // return (
            //     <a href="https://youtube.com" className={`${styles.absolute} ${styles.youtube}`} target="_blank" rel="noopener noreferrer">
            //         <img src={youtube} alt="YouTube 아이콘" />
            //     </a> // YouTube 관련 콘텐츠
            // );
        } else {
            // return (
            //     // <a href="https://naver.me/G58kVeiB" target="_blank" rel="noopener noreferrer" className={`${styles.container} ${type === "absolute" ? styles.absolute : styles.fixed}`}>
            //     //     <div className={styles.circlebox}>관심고객<br />등록</div>
            //     //     <img src={movingCircle} alt="circle animation" />
            //     // </a>
            // );
            
        }
    };

    return (
        <>
            {!isMobile ? (
                <>
                    {type === "absolute" && IconContent("youtube")} {/* 유튜브 콘텐츠 렌더링 */}
                    {IconContent()} {/* 일반 콘텐츠 렌더링 */}
                </>
            ) : (
                <div>
  <div className={styles.buttomBtnContainer}>
    <a
      id="visitReservation"
      className={styles.btn1}
      href="https://naver.me/G58kVeiB"
    >
      <IoIosCheckboxOutline size={20} />
      <div>방문예약</div>
    </a>
    <a
      id="phoneConsultation"
      className={styles.btn2}
      href="tel:1533-8848"
    >
      <PiPhoneCallFill size={25} />
      <div>전화상담</div>
    </a>
  </div>
</div>

            )}
        </>
    )
}

export default FixIcon;