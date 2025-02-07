import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './FloorPlan.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";

// import page1 from "../../assets/FloorPlan/FloorPlan2/page1.jpg"
import Ready from "../../components/Ready/Ready"; // Ready 컴포넌트 불러오기

const FloorPlan2 = () => {
	const menuContents = [
		{ title: "59A", url: "/FloorPlan/59A" },
		{ title: "59B", url: "/FloorPlan/59B" },
		{ title: "84A", url: "/FloorPlan/84A" },
		{ title: "84B", url: "/FloorPlan/84B" },
		{ title: "119A", url: "/FloorPlan/114A" },
		{ title: "119B", url: "/FloorPlan/114B" },
    	{ title: "세대안내영상", url: "/FloorPlan/videos" }  // 세대안내영상 링크
	
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
			
			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="세대안내" />

			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
            <h1 className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차 - 59B 평면안내 </h1>
			<p className={styles.screenReaderOnly}>59B타입의평면 안내 페이지는 대전 하늘채 스카이앤 3차의 각 아파트 평면도를 제공합니다. 고객들이 아파트의 구조를 정확히 이해하고, 자신의 생활 스타일에 맞는 평형을 선택할 수 있도록 돕습니다. 다양한 평면 설계를 확인하고 자신에게 맞는 최적의 공간을 찾아보세요.
			</p>

			<div className={styles.textBox}>
				<div>대전의 눈부신 가치 위에</div>
				<div>푸르지오의 새로운 자부심으로 찾아옵니다.</div>
			</div>

			{/* 이미지에 애니메이션 효과 추가 */}
			{/* <img
				className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
				src={page1}
				alt="대전 하늘채 스카이앤 3차 59B 평면image"
				onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
			/> */}

			<Ready />

			<div className={styles.commonBox2}>
				<div className={styles.notice}>
					※ 상기 이미지는 전시품목과 유상옵션이 포함된 견본주택을 촬영한 것으로 타입별 유상옵션 적용학몽, 특화범위 및 위치는 상이하며 실제 시공시 차이가 있을 수 있습니다.

				</div>
				
			</div>

			<Footer />
		</div>
	)
}

export default FloorPlan2;
