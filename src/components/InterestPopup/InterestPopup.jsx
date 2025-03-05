import React, { useState } from "react";
import styles from "./InterestPopup.module.scss";
import bannerImage from "../../assets/Popup/banner.jpg"; // 상단 배너 이미지

const InterestPopup = ({ onClose, registration, handleInputChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xkgopypr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registration),
      });

      if (response.ok) {
        setSuccessMessage("등록이 완료되었습니다.전문상담원이 확인즉시 연락드리도록 하겠습니다.");
      } else {
        setSuccessMessage("등록에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      setSuccessMessage("오류가 발생했습니다. 나중에 다시 시도해주세요.");
    }

    setIsSubmitting(false);
  };

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
          {successMessage ? (
            <p className={styles.successMessage}>{successMessage}</p>
          ) : (
            <form onSubmit={handleSubmit}>
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

              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? "등록 중..." : "등록하기"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterestPopup;
