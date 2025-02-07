import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './LocationEnvironment.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
// import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

const LocationEnvironment1 = () => {
	const menuContents = [
		{ title: "입지 안내영상", url: "/FloorPlan/videos" },
		{ title: "입지안내", url: "/LocationEnvironment/intro" }, 
		{ title: "프리미엄", url: "/LocationEnvironment/primium" },
		];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	// 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>

					<Helmet>
					<title>대전 하늘채 스카이앤 3차 - 프리미엄</title>
					<meta name="description" content="대전 하늘채 스카이앤 3차의 차별화된 프리미엄을 만나보세요. 고급스러운 디자인, 첨단 기술이 결합된 설계, 입주민을 위한 특별한 혜택 등을 통해 푸르지오만의 독보적인 가치를 제공합니다." />
					<meta property="og:title" content="대전 하늘채 스카이앤 3차 - 프리미엄" />
					<meta property="og:description" content="대전 하늘채 스카이앤 3차의 차별화된 프리미엄을 만나보세요. 고급스러운 디자인, 첨단 기술이 결합된 설계, 입주민을 위한 특별한 혜택 등을 통해 푸르지오만의 독보적인 가치를 제공합니다." />
					<meta property="og:image" content="http://www.kikaporn.com/Main1.png" />
					<meta property="og:url" content="http://www.kikaporn.com/LocationEnvironment/primium" />
					<meta name="twitter:title" content="대전 하늘채 스카이앤 3차 - 프리미엄" />
					<meta name="twitter:description" content="대전 하늘채 스카이앤 3차의 차별화된 프리미엄을 만나보세요. 고급스러운 디자인, 첨단 기술이 결합된 설계, 입주민을 위한 특별한 혜택 등을 통해 푸르지오만의 독보적인 가치를 제공합니다." />
					<meta name="twitter:image" content="http://www.kikaporn.com/Main1.png" />
					<meta name="twitter:url" content="http://www.kikaporn.com/LocationEnvironment/primium" />
					</Helmet> 		
			

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="입지환경" />

			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
			<h1 className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차 - 프리미엄</h1>
			<p className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차의 차별화된 프리미엄을 만나보세요. 고급스러운 디자인, 첨단 기술이 결합된 설계, 입주민을 위한 특별한 혜택 등을 통해 푸르지오만의 독보적인 가치를 제공합니다.
			</p>

			<div className={styles.textBox}>
				<div>용인의 눈부신 가치 위에</div>
				<div>대전 하늘채 스카이앤 3차의 새로운 자부심으로 찾아옵니다.</div>
			</div>

			{/* <img src={page1} className={styles.image3} alt="대전 하늘채 스카이앤 3차프리미엄-image1" /> */}
			<Ready />

			<Footer />
		</div>
	)
}

export default LocationEnvironment1;
