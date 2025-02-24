import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Interior.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";

// 이미지 파일을 추가해야 합니다
// import page1 from "../../assets/Interior/Interior2/page1.jpg";
import Ready from "../../components/Ready/Ready"; // Ready 컴포넌트 불러오기

const Interior2 = () => {
	const menuContents = [
		{ title: "59㎡", url: "/Interior/59A" },
		{ title: "84㎡", url: "/Interior/84A" },
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
	<title>대전하늘채스카이앤3차 - 84A인테리어</title>
	<meta
	  name="description"
	  content="84A타입의 인테리어 페이지에서는 대전 하늘채 스카이앤 3차의 고급 인테리어 디자인을 소개합니다. 세련된 디자인과 최첨단 인테리어 요소들이 결합되어, 입주자들에게 고급스러움과 편안함을 제공합니다. 각 공간의 인테리어 스타일과 자재를 확인하여 더욱 매력적인 주거 공간을 발견할 수 있습니다.
"
	/>
	<meta
	  name="keywords"
	  content="대전하늘채스카이앤3차, 대전하늘채스카이앤, 대전하늘채스카이앤3차모델하우스"
	/>
	<link rel="canonical" href="https://www.kikaporn.com/Interior/84A" />

	{/* Open Graph - 소셜 미디어 공유 최적화 */}
	<meta
	  property="og:title"
	  content="대전하늘채스카이앤3차 - 84A인테리어"
	/>
	<meta
	  property="og:description"
	  content="84A타입의 인테리어 페이지에서는 대전 하늘채 스카이앤 3차의 고급 인테리어 디자인을 소개합니다. 세련된 디자인과 최첨단 인테리어 요소들이 결합되어, 입주자들에게 고급스러움과 편안함을 제공합니다. 각 공간의 인테리어 스타일과 자재를 확인하여 더욱 매력적인 주거 공간을 발견할 수 있습니다.
"
	/>
	<meta
	  property="og:image"
	  content="https://www.kikaporn.com/Main1.png"
	/>
	<meta
	  property="og:url"
	  content="https://www.kikaporn.com/Interior/84A"
	/>
	<meta property="og:site_name" content="대전하늘채스카이앤3차" />

	{/* Twitter 카드 설정 */}
	<meta name="twitter:card" content="summary_large_image" />
	<meta
	  name="twitter:title"
	  content="대전하늘채스카이앤3차 - 84A인테리어"
	/>
	<meta
	  name="twitter:description"
	  content="84A타입의 인테리어 페이지에서는 대전 하늘채 스카이앤 3차의 고급 인테리어 디자인을 소개합니다. 세련된 디자인과 최첨단 인테리어 요소들이 결합되어, 입주자들에게 고급스러움과 편안함을 제공합니다. 각 공간의 인테리어 스타일과 자재를 확인하여 더욱 매력적인 주거 공간을 발견할 수 있습니다.
"
	/>
	<meta
	  name="twitter:image"
	  content="https://www.kikaporn.com/Main1.png"
	/>
	<meta
	  name="twitter:url"
	  content="https://www.kikaporn.com/Interior/84A"
	/>

	{/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
	<script type="application/ld+json">
	  {`
	  {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "대전하늘채스카이앤3차 - 84A인테리어",
		"description": "84A타입의 인테리어 페이지에서는 대전 하늘채 스카이앤 3차의 고급 인테리어 디자인을 소개합니다. 세련된 디자인과 최첨단 인테리어 요소들이 결합되어, 입주자들에게 고급스러움과 편안함을 제공합니다. 각 공간의 인테리어 스타일과 자재를 확인하여 더욱 매력적인 주거 공간을 발견할 수 있습니다.

		  ",
		"url": "https://www.kikaporn.com/Interior/84A"
	  }
	  `}
	</script>
	</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="84A인테리어" />

			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
            <h1 className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차 - 84A84A인테리어</h1>
			<p className={styles.screenReaderOnly}>84A타입의 84A타입의 인테리어 페이지에서는 대전 하늘채 스카이앤 3차의 고급 인테리어 디자인을 소개합니다. 세련된 디자인과 최첨단 인테리어 요소들이 결합되어, 입주자들에게 고급스러움과 편안함을 제공합니다. 각 공간의 인테리어 스타일과 자재를 확인하여 더욱 매력적인 주거 공간을 발견할 수 있습니다.
			</p>

			<div className={styles.textBox}>
				<div>코오롱 하늘채, 눈부신 가치 위에</div>
				<div>새로운 자부심으로 찾아옵니다.</div>
			</div>

			{/* 이미지에 애니메이션 효과 추가 */}
			{/* <img
				className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
				src={page1}
				alt="힐스테이트 용인 마크밸리84A인테리어84A-image2"
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

export default Interior2;
