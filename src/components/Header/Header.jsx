import React, { useState, useEffect, useCallback } from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import { IoCall, IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

import styles from "./Header.module.scss";
import SlideMenu from "../../components/SlideMenu/SlideMenu";
import logoImageHover from "../../assets/logo/mainlogo.png";
import logoImage from "../../assets/logo/mainlogowhite.jpg";

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
		title: "청약안내", // 추가된 메뉴SubscriptionGuide
		subMenu: [	
			{ subTitle: "인터넷청약", subUrl: "/SalesInfo/guide" }, // 하위 메뉴 1
			{ subTitle: "체크포인트", subUrl: "/SalesInfo/SubscriptionGuide" }, // 하위 메뉴 2
			{ subTitle: "모집공고안내", subUrl: "/SalesInfo/announcement" }, // 하위 메뉴 3
			{ subTitle: "인지세납부안내", subUrl: "/SalesInfo/stampTax" }, // 하위 메뉴 4
		],
	},

	{
		title: "입지환경",
		subMenu: [
			{ subTitle: "입지 안내영상", subUrl: "/FloorPlan/videos" },
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

const Header = ({ isChanged }) => {
	const [isChange, setIsChange] = useState(isChanged);
	const [isMenu, setIsMenu] = useState(false);
	const [isMobileMenu, setIsMobileMenu] = useState(false);
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

	useEffect(() => {
		if (!isMobile) setIsChange(!isChanged);
	}, [isChanged, isMobile]);

	const handleMouseEnter = () => {
		setIsMenu(true);
	};

	const handleMouseLeave = () => {
		setIsMenu(false);
	};

	const closeMobileMenu = useCallback(() => {
		setIsMobileMenu(false);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (isMobileMenu) {
				closeMobileMenu();
			}
		};

		const handleClickOutside = (event) => {
			if (isMobileMenu && !event.target.closest(`.${styles.mobileHeader}`)) {
				closeMobileMenu();
			}
		};

		window.addEventListener('scroll', handleScroll);
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMobileMenu, closeMobileMenu]);

	return (
		<>
			{!isMobile ? (
				<>
					{!isMenu ? (
						<header
							className={isChange ? styles.containerFirst : styles.container}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}>

							<Link to='/'>
								<img src={isChange ? logoImageHover : logoImage} alt="대전 하늘채 스카이앤3차-mainLogo-image" />
							</Link>

							<div className={styles.itemBox}>
								<a href="https://naver.me/G58kVeiB" className={isChange ? styles.linkItem : styles.scrolledLinkItem}>
									모바일 상담예약
								</a>
								{menuArray.map((menu, idx) => (
									<Link key={idx} to={menu.subMenu[0].subUrl} className={isChange ? styles.item : styles.scrolledItem}>
										{menu.title}
									</Link>
								))}
							</div>

							<a href="https://naver.me/G58kVeiB" className={isChange ? styles.phoneNumber : styles.scrolledPhoneNumber}>
								<IoCall size={20} /> 1533-8848
							</a>
						</header>
					) : (
						<header
							className={styles.secondContainer}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}>

							<Link to='/'>
								<img src={logoImage} alt="대전하늘채스카이앤3차 -mainLogo-image" />
							</Link>

							<div className={isChange ? styles.title : styles.scrolledTitle}>
								대전 하늘채 스카이앤3차
							</div>

							<div className={styles.itemBox}>
								<a href="https://naver.me/G58kVeiB" className={styles.linkItem}>
									모바일 상담예약
								</a>
								{menuArray.map((menu, idx) => (
									<div key={idx} className={styles.detailItemBox}>
										<Link to={menu.subMenu[0].subUrl} className={styles.item}>
											{menu.title}
										</Link>

										<div className={styles.secondItemBox}>
											{menu.subMenu.map((submenu, subIdx) => (
												<Link key={subIdx} to={submenu.subUrl} className={styles.subitem}>
													{submenu.subTitle}
												</Link>
											))}
										</div>
									</div>
								))}
							</div>

							<a href="https://naver.me/G58kVeiB" className={styles.phoneNumber}>
								<IoCall size={20} /> 1533-8848
							</a>
						</header>
					)}
				</>
			) : (
				<div className={styles.mobileHeader}>
					<div onClick={() => setIsMobileMenu(!isMobileMenu)}>
						{!isMobileMenu ?
							<AiOutlineMenu className={styles.icon} size={25} color="#2d3c49" />
							:
							<IoCloseSharp className={styles.icon} size={25} color="#2d3c49" />
						}
					</div>
					{isMobileMenu && <SlideMenu contents={menuArray} onClose={closeMobileMenu} />}

					<Link to='/'>
						<img src={logoImage} alt="jungheung-class-mainLogo-image" className={styles.logo} />
					</Link>

					<a href={'tel:1533-8848'}>
						<IoCall className={styles.icon} size={25} color="#2d3c49" />
					</a>
				</div>
			)}
		</>
	);
};

export default Header;
