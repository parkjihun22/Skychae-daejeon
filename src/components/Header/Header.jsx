import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { IoCall, IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

import styles from "./Header.module.scss";
import SlideMenu from "../../components/SlideMenu/SlideMenu";
import logoImage from "../../assets/logo/mainlogo.png";
import bannerGif from "../../assets/logo/uptool.gif";
import mainlogowhite from "../../assets/logo/mainlogowhite.jpg";

// 관심고객 팝업 컴포넌트 import
import InterestPopup from "../../components/InterestPopup/InterestPopup";

const menuArray = [
  {
    title: "브랜드소개",
    subMenu: [
      { subTitle: "브랜드 소개", subUrl: "/Brand/intro" },
      { subTitle: "홍보 영상", subUrl: "/Brand/video" },
    ],
  },
  {
    title: "사업개요",
    subMenu: [
      { subTitle: "사업안내", subUrl: "/BusinessGuide/intro" },
      { subTitle: "분양일정", subUrl: "/BusinessGuide/plan" },
      { subTitle: "선착순계약 서류안내", subUrl: "/BusinessGuide/documents" },
    ],
  },
  {
    title: "청약안내",
    subMenu: [
      { subTitle: "인터넷청약", subUrl: "/SalesInfo/guide" },
      { subTitle: "체크포인트", subUrl: "/SalesInfo/SubscriptionGuide" },
      { subTitle: "모집공고안내", subUrl: "/SalesInfo/announcement" },
      { subTitle: "인지세납부안내", subUrl: "/SalesInfo/stampTax" },
    ],
  },
  {
    title: "입지환경",
    subMenu: [
      { subTitle: "입지안내영상", subUrl: "/FloorPlan/videos" },
      { subTitle: "입지안내", subUrl: "/LocationEnvironment/intro" },
      { subTitle: "프리미엄", subUrl: "/LocationEnvironment/primium" },
    ],
  },
  {
    title: "단지안내",
    subMenu: [
      { subTitle: "단지 배치도", subUrl: "/ComplexGuide/intro" },
      { subTitle: "호수 배치도", subUrl: "/ComplexGuide/detailintro" },
      { subTitle: "커뮤니티", subUrl: "/ComplexGuide/community" },
    ],
  },
  {
    title: "세대안내",
    subMenu: [
      { subTitle: "59A", subUrl: "/FloorPlan/59A" },
      { subTitle: "59B", subUrl: "/FloorPlan/59B" },
      { subTitle: "84A", subUrl: "/FloorPlan/84A" },
      { subTitle: "84B", subUrl: "/FloorPlan/84B" },
      { subTitle: "119A", subUrl: "/FloorPlan/114A" },
      { subTitle: "119B", subUrl: "/FloorPlan/114B" },
    ],
  },
  {
    title: "인테리어",
    subMenu: [
      { subTitle: "84A", subUrl: "/Interior/59A" },
      { subTitle: "119A", subUrl: "/Interior/84A" },
      { subTitle: "119B", subUrl: "/Interior/84B" },
    ],
  },
];

const Header = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredMenuRect, setHoveredMenuRect] = useState(null);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  // 관심고객 팝업을 위한 상태와 등록폼 상태 (PC 버전 공통 적용)
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

  // 모바일 버전 처리 (슬라이드메뉴 사용)
  if (isMobile) {
    return (
      <>
        <div className={styles.gifBanner}>
          <img src={bannerGif} alt="Uptool Banner" />
        </div>
        <div className={styles.mobileHeader}>
          <div onClick={() => setIsMobileMenu(!isMobileMenu)}>
            {!isMobileMenu ? (
              <AiOutlineMenu className={styles.icon} size={25} color="#095052" />
            ) : (
              <IoCloseSharp className={styles.icon} size={25} color="#095052" />
            )}
          </div>
          {isMobileMenu && (
            <SlideMenu
              contents={menuArray}
              onClose={() => setIsMobileMenu(false)}
              // 모바일 슬라이드메뉴에서도 예약 팝업 열기를 위한 함수를 전달
              onReservationClick={() => setIsInterestPopupOpen(true)}
            />
          )}
          <Link to="/">
            <img src={mainlogowhite} alt="Logo" className={styles.logo} />
          </Link>
          {/* 모바일에서는 기존 전화 연결 a 태그 유지 */}
          <a href="tel:1533-8848">
            <IoCall className={styles.icon} size={25} color="#095052" />
          </a>
        </div>
        {/* 모바일에서도 팝업을 렌더링 (최상위에서) */}
        {isInterestPopupOpen && (
          <InterestPopup
            onClose={() => setIsInterestPopupOpen(false)}
            registration={registration}
            handleInputChange={handleInputChange}
          />
        )}
      </>
    );
  }

  // PC 버전 처리
  const handleNavItemMouseEnter = (idx, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredMenu(idx);
    setHoveredMenuRect(rect);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
    setHoveredMenuRect(null);
  };

  return (
    <div
      className={`${styles.headerWrapper} ${
        hoveredMenu !== null ? styles.dropdownOpen : ""
      }`}
      onMouseLeave={handleMouseLeave}
    >
      {/* 상단 GIF 배너 */}
      <div className={styles.gifBanner}>
        <img src={bannerGif} alt="Uptool Banner" />
      </div>
      <header className={styles.headerInitial}>
        <Link to="/">
          <img src={logoImage} alt="Logo" className={styles.logo} />
        </Link>
        <div className={styles.itemBox}>
          {/* "모바일 상담예약" 링크를 기존 스타일(a 태그)로 유지하고, 클릭 시 팝업을 열도록 수정 */}
          <a
            href="#"
            className={styles.consultLink}
            onClick={(e) => {
              e.preventDefault();
              setIsInterestPopupOpen(true);
            }}
          >
            모바일 상담예약
          </a>
          {menuArray.map((menu, idx) => (
            <div
              key={idx}
              className={styles.navItem}
              onMouseEnter={(e) => handleNavItemMouseEnter(idx, e)}
            >
              <Link to={menu.subMenu[0].subUrl} className={styles.navLink}>
                {menu.title}
              </Link>
            </div>
          ))}
        </div>
        {/* 전화번호 영역 – 원래 a 태그 대신 버튼 형태였으나, 기본 스타일링(배경 없음 등)을 위해 그대로 적용 */}
        <button
          className={styles.phoneNumber}
          onClick={() => setIsInterestPopupOpen(true)}
          type="button"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <IoCall size={20} /> 1533-8848
        </button>
      </header>
      {hoveredMenu !== null && hoveredMenuRect && (
        <div className={styles.dropdownContainer}>
          <div
            className={styles.dropdownContent}
            style={{ marginLeft: hoveredMenuRect.left }}
          >
            {menuArray[hoveredMenu].subMenu.map((submenu, subIdx) => (
              <Link key={subIdx} to={submenu.subUrl} className={styles.dropdownItem}>
                {submenu.subTitle}
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* PC 버전에서도 최상위에서 팝업을 렌더링 */}
      {isInterestPopupOpen && (
        <InterestPopup
          onClose={() => setIsInterestPopupOpen(false)}
          registration={registration}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default Header;
