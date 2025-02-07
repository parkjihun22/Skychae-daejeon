import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './ComplexGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

// import page1 from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";
import Ready from "../../components/Ready/Ready"; // Ready 컴포넌트 불러오기


const ComplexGuide3 = () => {
	const menuContents = [
		{ title: "단지 배치도", url: "/ComplexGuide/intro" },
		{ title: "호수 배치도", url: "/ComplexGuide/detailintro" },
		{ title: "커뮤니티", url: "/ComplexGuide/community" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	// 이미지가 로드되면 호출되는 함수
	const handleImageLoad = () => {
		setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
	};

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

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
					<title>대전 하늘채 스카이앤 3차 - 커뮤니티</title>
					<meta name="description" content="대전 하늘채 스카이앤 3차의 커뮤니티 시설을 소개합니다. 피트니스 센터, 독서실, 카페 등 다양한 편의시설이 마련되어 있어 입주민의 생활 품격을 높이고, 편리함을 제공합니다." />
					<meta property="og:title" content="대전 하늘채 스카이앤 3차 - 커뮤니티" />
					<meta property="og:description" content="대전 하늘채 스카이앤 3차의 커뮤니티 시설을 소개합니다. 피트니스 센터, 독서실, 카페 등 다양한 편의시설이 마련되어 있어 입주민의 생활 품격을 높이고, 편리함을 제공합니다." />
					<meta property="og:image" content="http://www.kikaporn.com/Main1.png" />
					<meta property="og:url" content="http://www.kikaporn.com/ComplexGuide/community" />
					<meta name="twitter:title" content="대전 하늘채 스카이앤 3차 - 커뮤니티" />
					<meta name="twitter:description" content="대전 하늘채 스카이앤 3차의 커뮤니티 시설을 소개합니다. 피트니스 센터, 독서실, 카페 등 다양한 편의시설이 마련되어 있어 입주민의 생활 품격을 높이고, 편리함을 제공합니다." />
					<meta name="twitter:image" content="http://www.kikaporn.com/Main1.png" />
					<meta name="twitter:url" content="http://www.kikaporn.com/ComplexGuide/community" />
					</Helmet> 
  

			<Header isChanged={isScroll} />
			<FixIcon />
			<Bener title="단지안내" />
			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
            <h1 className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차  - 커뮤니티</h1>
			<p className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차의 커뮤니티 페이지에서는 단지 내 다양한 커뮤니티 시설을 소개합니다. 헬스장, 독서실, 카페 등 주민들의 편리한 생활을 위한 다양한 시설들이 준비되어 있습니다. 이러한 시설들이 입주민들의 삶의 질을 높이고, 더 나은 공동체 생활을 만들어주는 역할을 합니다.
			</p>


			<div className={styles.textBox}>
				<div>힐대전 하늘채 스카이앤 3차가 눈부신 가치 위에</div>
				<div>새로운 자부심으로 찾아옵니다.</div>
			</div>

			{/* 이미지에 애니메이션 효과 추가 */}
			{/* <img
				className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
				src={page1}
				alt="대전 하늘채 스카이앤 3차 커뮤니티 안내 -image1"
				onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
			/> */}

			<Ready />


			<Footer />
		</div>
	);
}

export default ComplexGuide3;
