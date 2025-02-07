import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import Ready from "../../components/Ready/Ready"; // Ready 컴포넌트 불러오기

const Brand2 = () => {
	const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
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
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>

					<Helmet>
					<title>대전 하늘채 스카이앤 3차 - 홍보영상</title>
					<meta name="description" content="대전 하늘채 스카이앤 3차의 홍보영상을 통해 단지의 매력적인 디자인과 최신 편의시설을 생생하게 만나보세요. 현대적 감각과 고급스러움을 결합한 주거 환경, 평택의 중심에서 경험할 수 있는 새로운 라이프스타일을 영상으로 확인하세요." />
					<meta property="og:title" content="대전 하늘채 스카이앤 3차 - 홍보영상" />
					<meta property="og:description" content="대전 하늘채 스카이앤 3차의 홍보영상을 통해 단지의 매력적인 디자인과 최신 편의시설을 생생하게 만나보세요. 현대적 감각과 고급스러움을 결합한 주거 환경, 평택의 중심에서 경험할 수 있는 새로운 라이프스타일을 영상으로 확인하세요." />
					<meta property="og:image" content="http://www.kikaporn.com/Main1.png" />
					<meta property="og:url" content="http://www.kikaporn.com/Brand/video" />
					<meta name="twitter:title" content="대전 하늘채 스카이앤 3차 - 홍보영상" />
					<meta name="twitter:description" content="대전 하늘채 스카이앤 3차의 홍보영상을 통해 단지의 매력적인 디자인과 최신 편의시설을 생생하게 만나보세요. 현대적 감각과 고급스러움을 결합한 주거 환경, 평택의 중심에서 경험할 수 있는 새로운 라이프스타일을 영상으로 확인하세요." />
					<meta name="twitter:image" content="http://www.kikaporn.com/Main1.png" />
					<meta name="twitter:url" content="http://www.kikaporn.com/Brand/video" />
					</Helmet>       
			
			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="홍보영상" />

			<MenuBar contents={menuContents} />

						{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
						<h1 className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차 - 홍보영상</h1>
						<p className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차의 홍보영상을 통해 단지의 매력적인 디자인과 최신 편의시설을 생생하게 만나보세요. 현대적 감각과 고급스러움을 결합한 주거 환경, 평택의 중심에서 경험할 수 있는 새로운 라이프스타일을 영상으로 확인하세요.
						</p>	

			<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
                <div>대전 하늘채 스카이앤 3차가 눈부신 가치 위에</div>
                <div>새로운 자부심으로 찾아옵니다.</div>
            </div>

			{/* <div className={styles.videoContainer}>
				<YouTube
					videoId="KyQh_rEZwk4"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div> */}

			<Ready />
			<Footer />
		</div>
	)
}

export default Brand2;
