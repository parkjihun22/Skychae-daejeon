import React from "react";
import styles from "./InterestPopup.module.scss";
import bannerImage from "../../assets/Popup/banner.jpg"; // 상단 배너 이미지

const InterestPopup = ({ onClose, registration, handleInputChange }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContainer}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        <div className={styles.headerImage}>
          <img src={bannerImage} alt="Registration Banner" />
        </div>
        <div className={styles.formContainer}>
          {/* <h2>모델하우스 방문예약 </h2> */}
          {/* 폼 내부에 추가 이미지를 삽입하고 싶다면 아래와 같이 넣을 수 있습니다.
          <div className={styles.formImage}>
            <img src={yourImageSrc} alt="Form 안내 이미지" />
          </div>
          */}
          <form action="https://formspree.io/f/xnnjvebv" method="POST">
            <div className={styles.formGroup}>
              <label htmlFor="name">
                이름<span>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={registration.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">
                연락처<span>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={registration.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              등록하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InterestPopup;
