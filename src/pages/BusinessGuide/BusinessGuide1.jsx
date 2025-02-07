import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
// import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
// import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";
import Ready from "../../components/Ready/Ready"; // Ready 컴포넌트 불러오기


// const projectData = [
// 	{ label: '사업명', value: '대전 하늘채 스카이앤 3차' },
// 	{ label: '사업위치', value: '평택 브레인시티 일반산업단지 공동3BL' },
// 	{ label: '대지면적', value: '106,050.4985㎡' },
// 	{ label: '건축면적', value: '13,404.3638㎡' },
// 	{ label: '연면적', value: '376,069.7623㎡' },
// 	{ label: '용적률', value: '229.55%' },
// 	{ label: '건축규모', value: '아파트 지하 최저 2층 ~ 지상 최고 35층 16개동' },
// 	{ label: '세대수', value: '총 1,990세대 / 59㎡A, 59㎡B, 84㎡A, 84㎡B, 119㎡A, 114㎡B' },
// ];

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		{ title: "선착순계약 서류안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

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
					<title>대전 하늘채 스카이앤 3차- 사업안내</title>
					<meta name="description" content="대전 하늘채 스카이앤 3차의 사업개요를 통해 프로젝트의 비전과 가치를 확인하세요. 단지 설계, 개발 목표, 주변 환경과의 조화 등을 중점적으로 설명하여 평택에서의 새로운 주거 중심지로서의 가능성을 보여드립니다." />
					<meta property="og:title" content="대전 하늘채 스카이앤 3차 - 사업안내" />
					<meta property="og:description" content="대전 하늘채 스카이앤 3차의 사업개요를 통해 프로젝트의 비전과 가치를 확인하세요. 단지 설계, 개발 목표, 주변 환경과의 조화 등을 중점적으로 설명하여 평택에서의 새로운 주거 중심지로서의 가능성을 보여드립니다." />
					<meta property="og:image" content="http://www.kikaporn.com/Main1.png" />
					<meta property="og:url" content="http://www.kikaporn.com/BusinessGuide/intro" />
					<meta name="twitter:title" content="대전 하늘채 스카이앤 3차 - 사업안내" />
					<meta name="twitter:description" content="대전 하늘채 스카이앤 3차의 사업개요를 통해 프로젝트의 비전과 가치를 확인하세요. 단지 설계, 개발 목표, 주변 환경과의 조화 등을 중점적으로 설명하여 평택에서의 새로운 주거 중심지로서의 가능성을 보여드립니다." />
					<meta name="twitter:image" content="http://www.kikaporn.com/Main1.png" />
					<meta name="twitter:url" content="http://www.kikaporn.com/BusinessGuide/intro" />
					</Helmet>       
			

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="사업개요" />

			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
            <h1 className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차 - 사업안내</h1>
			<p className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차는 혁신적인 주거 환경을 제공하는 새로운 아파트 단지입니다. 이 페이지에서는 프로젝트의 전체적인 개요와 개발 계획을 상세히 소개합니다. 사업의 목적, 주요 설계 및 특징, 그리고 주변 환경을 포함한 다양한 정보를 통해 입주자들에게 더 나은 선택을 할 수 있도록 돕습니다.
			</p>

			<div className={styles.textBox}>
				<div>특별한 라이프 컬렉션</div>
				<div>대전 하늘채 스카이앤 3차의 새로운 자부심으로 찾아옵니다.</div>
			</div>

			{/* <img className={styles.img3} src={page1} alt="대전 하늘채 스카이앤 3차-image1"/> */}

			{/* <div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div> */}

			{/* <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 상기 이미지에 표현된 외관 디자인은 개략적인 이해를 돕기 위한 것으로, 상품특화 및 인허가 협의에 따라 입면 디자인, 경관조명, 출입구, 색채, 몰딩, 창호, 난간, 옥상 장식물, 줄눈, 각종 시설물의 디자인 및 형태, 마감사양, 조명 설치 위치 등이 실시공시 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 본 단지의 명칭, 동호수 표기, 외부 색채, 외관 디자인, 옥탑 디자인, 외부 조명시설, 태양광 발전 설비시설 등은 현장 여건 및 인허가 관청과의 심의, 협의 과정에서 향후 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 단지 공용 태양광 패널이 주동 옥상에 설치될 예정이며, 시설을 훼손하거나 제거할 수 없습니다. 또한, 본 공사 시 시공 여건에 따라 위치 및 규모(크기, 높이, 개소)가 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 문주, 경비실, 외부 엘리베이터실, 계단실 등 외부 시설물의 형태, 디자인, 마감재 등은 기능 및 외관 개선을 위해 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 옥상 구조물은 본 공사 시 형태 변경 또는 구조물 지지를 위한 기둥이 추가 시공될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 본 공사 시 옥상구조물 상부는 도장 시공을 하지 않습니다.
				</div>
			</div> */}

			<Ready />

			<Footer />
		</div>
	)
}

export default BusinessGuide1;
