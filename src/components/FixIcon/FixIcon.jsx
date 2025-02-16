import React, { useState } from "react";
import { MdOndemandVideo } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoIosCheckboxOutline } from "react-icons/io";
import styles from "./FixIcon.module.scss";

import icon from "../../assets/FixIcon/open.png";
import movingCircle from "../../assets/FixIcon/movingCircle.png";
import youtube from "../../assets/FixIcon/youtube.png";

// 관심고객 팝업 컴포넌트 import
import InterestPopup from "../../components/InterestPopup/InterestPopup";

const FixIcon = ({ type }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  // 모바일 버전에서 사용할 관심고객 팝업 상태 및 등록폼 상태
  const [isInterestPopupOpen, setIsInterestPopupOpen] = useState(false);
  const [registration, setRegistration] = useState({
    name: "",
    phone: "",
    email: "",
    visitDate: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration((prev) => ({ ...prev, [name]: value }));
  };

  const IconContent = (content) => {
    if (content === "youtube") {
      // 유튜브 콘텐츠 렌더링 (필요 시 주석 해제)
      // return (
      //   <a
      //     href="https://youtube.com"
      //     className={`${styles.absolute} ${styles.youtube}`}
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     <img src={youtube} alt="YouTube 아이콘" />
      //   </a>
      // );
    } else {
      // 기타 콘텐츠 렌더링 (필요 시 주석 해제)
      // return (
      //   <a
      //     href="https://naver.me/G58kVeiB"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //     className={`${styles.container} ${type === "absolute" ? styles.absolute : styles.fixed}`}
      //   >
      //     <div className={styles.circlebox}>관심고객<br />등록</div>
      //     <img src={movingCircle} alt="circle animation" />
      //   </a>
      // );
    }
  };

  return (
    <>
      {!isMobile ? (
        <>
          {type === "absolute" && IconContent("youtube")}
          {IconContent()}
        </>
      ) : (
        <div>
          <div className={styles.buttomBtnContainer}>
            {/* 방문예약 a 태그를 클릭하면 팝업이 열리도록 처리 */}
            <a
              id="visitReservation"
              className={styles.btn1}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsInterestPopupOpen(true);
              }}
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
          {/* 관심고객 등록 팝업 렌더링 */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default FixIcon;
