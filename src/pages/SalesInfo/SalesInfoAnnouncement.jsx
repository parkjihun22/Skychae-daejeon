import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './SalesInfo.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

// import page1 from "../../assets/SalesInfo/SalesInfoAnnouncement/page1.jpg";
import pdfIcon from "../../assets/icons/pdf-icon.png";  // PDF 아이콘 이미지 임포트
import Ready from "../../components/Ready/Ready"; // Ready 컴포넌트 불러오기

const ComplexGuide1 = () => {
    const menuContents = [
        { title: "인터넷 청약", url: "/SalesInfo/guide" },
        { title: "체크포인트", url: "/SalesInfo/SubscriptionGuide" },
        { title: "모집공고안내", url: "/SalesInfo/announcement" },
        { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImage2Loaded, setIsImage2Loaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
    const { pathname } = useLocation();

    // 페이지 로드 시 상단으로 스크롤 이동
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // 스크롤 이벤트로 헤더 상태 변경
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

    // 이미지 로드 후 애니메이션 실행
    const handleImageLoad = () => {
        setIsImage2Loaded(true);
    };

    // PDF 새 창으로 열기 함수
    const openPDF = () => {
        setIsLoading(true); // PDF 로딩 시작
        const pdfUrl = "/announcement.pdf";  // 실제 PDF 파일 경로로 수정
        const newWindow = window.open(pdfUrl, "_blank");
        
        // PDF 로딩 후 로딩 상태 해제
        newWindow.onload = () => {
            setIsLoading(false);
        };
    };

    return (
        <div className={styles.container}>

        <Helmet>
          <title>대전 하늘채 스카이앤 3차 - 모집공고안내</title>
          <meta name="description" content="대전 하늘채 스카이앤 3차의 모집 공고는 분양 전 단계에서 중요한 안내문입니다. 이 페이지에서는 모집 공고에 포함된 중요한 날짜, 자격 조건, 필요한 서류 등을 명확하게 안내하여 예비 청약자들이 혼동 없이 청약을 준비할 수 있도록 지원합니다. 모집 공고를 통해 필수 정보들을 빠짐없이 체크하세요." />
          <meta property="og:title" content="대전 하늘채 스카이앤 3차 - 인터넷청약" />
          <meta property="og:description" content="대전 하늘채 스카이앤 3차의 모집 공고는 분양 전 단계에서 중요한 안내문입니다. 이 페이지에서는 모집 공고에 포함된 중요한 날짜, 자격 조건, 필요한 서류 등을 명확하게 안내하여 예비 청약자들이 혼동 없이 청약을 준비할 수 있도록 지원합니다. 모집 공고를 통해 필수 정보들을 빠짐없이 체크하세요." />
          <meta property="og:image" content="http://www.kikaporn.com/Main1.png" />
          <meta property="og:url" content="http://www.kikaporn.com/SalesInfo/announcement" />
          <meta name="twitter:title" content="대전 하늘채 스카이앤 3차- 인터넷청약" />
          <meta name="twitter:description" content="대전 하늘채 스카이앤 3차의 모집 공고는 분양 전 단계에서 중요한 안내문입니다. 이 페이지에서는 모집 공고에 포함된 중요한 날짜, 자격 조건, 필요한 서류 등을 명확하게 안내하여 예비 청약자들이 혼동 없이 청약을 준비할 수 있도록 지원합니다. 모집 공고를 통해 필수 정보들을 빠짐없이 체크하세요." />
          <meta name="twitter:image" content="http://www.kikaporn.com/Main1.png" />
          <meta name="twitter:url" content="http://www.kikaporn.com/SalesInfo/announcement" />
          </Helmet>

            <Header isChanged={isScroll} />
            <FixIcon />

            <Bener title="모집공고안내" />

            <MenuBar contents={menuContents} />
            {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
            <h1 className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차 - 모집공고안내</h1>
			<p className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차의 모집 공고는 분양 전 단계에서 중요한 안내문입니다. 이 페이지에서는 모집 공고에 포함된 중요한 날짜, 자격 조건, 필요한 서류 등을 명확하게 안내하여 예비 청약자들이 혼동 없이 청약을 준비할 수 있도록 지원합니다. 모집 공고를 통해 필수 정보들을 빠짐없이 체크하세요.
            </p>

            <div className={styles.textBox}>
                <div>입주자 모집공고안내를 확인하세요</div>
                <div>대전 하늘채 스카이앤 3차</div>
            </div>

            {/* <img className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`} src={page1}
                alt="대전 하늘채 스카이앤 3차 모집공고안내-image1"
                onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
                /> */}

<Ready />

            {/* 입주자 모집공고 PDF로 보기 버튼 */}
            <button onClick={openPDF} className={styles.pdfButton}>
                <img src={pdfIcon} alt="PDF 아이콘" className={styles.pdfIcon} /> {/* 이미지 추가 */}
                <span>모집공고 PDF<br/>확인하기</span>
            </button>

            {/* 로딩 중일 때 표시할 스피너 */}
            {isLoading && (
                <div className={styles.loader}>
                    <p>파일을 로딩 중입니다...</p>
                    {/* 여기에 스피너 아이콘 추가 가능 */}
                    <div className={styles.spinner}></div>
                </div>
            )}

            {/* <div className={styles.commonBox}>
                <div className={styles.notice}>
                    ※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를 확인하시기 바랍니다.
                </div>
            </div> */}

            

            <Footer />
        </div>
    );
};

export default ComplexGuide1;
