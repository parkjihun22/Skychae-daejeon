import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

// import page1 from "../../assets/BusinessGuide/BusinessGuide2/page1.jpg";
import Ready from "../../components/Ready/Ready"; // Ready 컴포넌트 불러오기

const BusinessGuide2 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		{ title: "선착순계약 서류안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
	const { pathname } = useLocation(); // 현재 경로를 가져옴

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

			// 이미지가 화면에 보이는지 체크 (예시)
			if (window.scrollY > 200) { // 예시: 스크롤이 200px 이상 내려가면 이미지 보이기
				setIsImageVisible(true);
			} else {
				setIsImageVisible(false);
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
					<title>대전 하늘채 스카이앤 3차- 분양일정</title>
					<meta name="description" content="대전 하늘채 스카이앤 3차의 최신 분양일정을 확인하세요. 청약 일정, 분양 절차, 주요 조건을 명확히 안내하여 분양 준비에 필요한 정보를 제공합니다. 평택에서 새로운 라이프스타일을 시작할 기회를 놓치지 마세요. 힐스테이트의 고급스러운 주거공간에서 미래를 계획해보세요." />
					<meta property="og:title" content="대전 하늘채 스카이앤 3차 - 분양일정" />
					<meta property="og:description" content="대전 하늘채 스카이앤 3차의 최신 분양일정을 확인하세요. 청약 일정, 분양 절차, 주요 조건을 명확히 안내하여 분양 준비에 필요한 정보를 제공합니다. 평택에서 새로운 라이프스타일을 시작할 기회를 놓치지 마세요. 힐스테이트의 고급스러운 주거공간에서 미래를 계획해보세요." />
					<meta property="og:image" content="http://www.kikaporn.com/Main1.png" />
					<meta property="og:url" content="http://www.kikaporn.com/BusinessGuide/plan" />
					<meta name="twitter:title" content="대전 하늘채 스카이앤 3차 - 분양일정" />
					<meta name="twitter:description" content="대전 하늘채 스카이앤 3차의 최신 분양일정을 확인하세요. 청약 일정, 분양 절차, 주요 조건을 명확히 안내하여 분양 준비에 필요한 정보를 제공합니다. 평택에서 새로운 라이프스타일을 시작할 기회를 놓치지 마세요. 힐스테이트의 고급스러운 주거공간에서 미래를 계획해보세요." />
					<meta name="twitter:image" content="http://www.kikaporn.com/Main1.png" />
					<meta name="twitter:url" content="http://www.kikaporn.com/BusinessGuide/plan" />
					</Helmet>   

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="사업개요" />

			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
            <h1 className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차 - 분양일정</h1>
			<p className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차의 분양 일정은 중요한 날짜들을 안내하는 핵심 정보입니다. 입주 희망자들에게 분양 일정과 함께 주요 일정 변경 사항을 실시간으로 제공합니다. 정확한 분양 일정을 확인하고, 청약 준비를 미리 진행할 수 있도록 도와줍니다. 분양 공고를 통해 추가 정보와 분양 조건을 확인해보세요.
			</p>

			<div className={styles.textBox}>
				<div>대전의 눈부신 가치 위에</div>
				<div>대전 하늘채 스카이앤 3차의 새로운 자부심으로 찾아옵니다.</div>
			</div>

			{/* 이미지에 isImageVisible 상태 적용
			<img className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="대전 하늘채 스카이앤 3차 분양일정안내-image1" /> */}

			<Ready />
			<Footer />
		</div>
	)
}

export default BusinessGuide2;
