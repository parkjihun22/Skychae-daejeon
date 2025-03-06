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
	{/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
	<meta charSet="utf-8" />
	<meta
	  name="viewport"
	  content="width=device-width, initial-scale=1, maximum-scale=1"
	/>
	<meta name="theme-color" content="#ffffff" />
	<meta name="robots" content="index, follow" />

	{/* SEO 최적화를 위한 메타 태그 */}
	<title>대전하늘채스카이앤3차 - 프리미엄</title>
	<meta
	  name="description"
	  content="대전 하늘채 스카이앤 3차의 차별화된 프리미엄을 만나보세요. 고급스러운 디자인, 첨단 기술이 결합된 설계, 입주민을 위한 특별한 혜택 등을 통해 푸르지오만의 독보적인 가치를 제공합니다.
"
	/>
	<meta
	  name="keywords"
	  content="대전하늘채스카이앤3차, 대전하늘채스카이앤, 대전하늘채스카이앤3차모델하우스"
	/>
	<link rel="canonical" href="https://buysildenafilv.com/LocationEnvironment/primium" />

	{/* Open Graph - 소셜 미디어 공유 최적화 */}
	<meta
	  property="og:title"
	  content="대전하늘채스카이앤3차 - 프리미엄"
	/>
	<meta
	  property="og:description"
	  content="대전 하늘채 스카이앤 3차의 차별화된 프리미엄을 만나보세요. 고급스러운 디자인, 첨단 기술이 결합된 설계, 입주민을 위한 특별한 혜택 등을 통해 푸르지오만의 독보적인 가치를 제공합니다.
"
	/>
	<meta
	  property="og:image"
	  content="https://buysildenafilv.com/Main1.png"
	/>
	<meta
	  property="og:url"
	  content="https://buysildenafilv.com/LocationEnvironment/primium"
	/>
	<meta property="og:site_name" content="대전하늘채스카이앤3차" />

	{/* Twitter 카드 설정 */}
	<meta name="twitter:card" content="summary_large_image" />
	<meta
	  name="twitter:title"
	  content="대전하늘채스카이앤3차 - 프리미엄"
	/>
	<meta
	  name="twitter:description"
	  content="대전 하늘채 스카이앤 3차의 차별화된 프리미엄을 만나보세요. 고급스러운 디자인, 첨단 기술이 결합된 설계, 입주민을 위한 특별한 혜택 등을 통해 푸르지오만의 독보적인 가치를 제공합니다.
"
	/>
	<meta
	  name="twitter:image"
	  content="https://buysildenafilv.com/Main1.png"
	/>
	<meta
	  name="twitter:url"
	  content="https://buysildenafilv.com/LocationEnvironment/primium"
	/>

	{/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
	<script type="application/ld+json">
	  {`
	  {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "대전하늘채스카이앤3차 - 프리미엄",
		"description": "대전 하늘채 스카이앤 3차의 차별화된 프리미엄을 만나보세요. 고급스러운 디자인, 첨단 기술이 결합된 설계, 입주민을 위한 특별한 혜택 등을 통해 푸르지오만의 독보적인 가치를 제공합니다.

		  ",
		"url": "https://buysildenafilv.com/LocationEnvironment/primium"
	  }
	  `}
	</script>
	</Helmet>		
			

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="프리미엄" />

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
