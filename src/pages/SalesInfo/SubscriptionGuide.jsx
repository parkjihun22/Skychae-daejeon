import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './SalesInfo.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
// import page1 from "../../assets/SalesInfo/SubscriptionGuide/page1.jpg";
import Ready from "../../components/Ready/Ready"; // Ready 컴포넌트 불러오기

const ComplexGuide1 = () => {
  const menuContents = [
    { title: "인터넷 청약", url: "/SalesInfo/guide" },
    { title: "체크포인트", url: "/SalesInfo/SubscriptionGuide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
  ];
  
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false);  // 이미지 로드 상태
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

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

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
    <title>대전하늘채스카이앤3차 - 체크포인트</title>
    <meta
      name="description"
      content="대전 하늘채 스카이앤 3차분양 전 필수 체크포인트를 확인하세요. 청약 자격, 서류 준비, 일정 등 분양 절차에서 놓치지 말아야 할 중요한 사항들을 정리해두었습니다. 정확한 정보와 절차를 통해 분양을 성공적으로 진행할 수 있도록 돕습니다.


"
    />
    <meta
      name="keywords"
      content="대전하늘채스카이앤3차, 대전하늘채스카이앤, 대전하늘채스카이앤3차모델하우스"
    />
    <link rel="canonical" href="https://buysildenafilv.com/SalesInfo/SubscriptionGuide" />

    {/* Open Graph - 소셜 미디어 공유 최적화 */}
    <meta
      property="og:title"
      content="대전하늘채스카이앤3차 - 체크포인트"
    />
    <meta
      property="og:description"
      content="대전 하늘채 스카이앤 3차분양 전 필수 체크포인트를 확인하세요. 청약 자격, 서류 준비, 일정 등 분양 절차에서 놓치지 말아야 할 중요한 사항들을 정리해두었습니다. 정확한 정보와 절차를 통해 분양을 성공적으로 진행할 수 있도록 돕습니다.


"
    />
    <meta
      property="og:image"
      content="https://buysildenafilv.com/Main1.png"
    />
    <meta
      property="og:url"
      content="https://buysildenafilv.com/SalesInfo/SubscriptionGuide"
    />
    <meta property="og:site_name" content="대전하늘채스카이앤3차" />

    {/* Twitter 카드 설정 */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="대전하늘채스카이앤3차 - 체크포인트"
    />
    <meta
      name="twitter:description"
      content="대전 하늘채 스카이앤 3차분양 전 필수 체크포인트를 확인하세요. 청약 자격, 서류 준비, 일정 등 분양 절차에서 놓치지 말아야 할 중요한 사항들을 정리해두었습니다. 정확한 정보와 절차를 통해 분양을 성공적으로 진행할 수 있도록 돕습니다.


"
    />
    <meta
      name="twitter:image"
      content="https://buysildenafilv.com/Main1.png"
    />
    <meta
      name="twitter:url"
      content="https://buysildenafilv.com/SalesInfo/SubscriptionGuide"
    />

    {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
    <script type="application/ld+json">
      {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "대전하늘채스카이앤3차 - 체크포인트",
        "description": "대전 하늘채 스카이앤 3차분양 전 필수 체크포인트를 확인하세요. 청약 자격, 서류 준비, 일정 등 분양 절차에서 놓치지 말아야 할 중요한 사항들을 정리해두었습니다. 정확한 정보와 절차를 통해 분양을 성공적으로 진행할 수 있도록 돕습니다.



          ",
        "url": "https://buysildenafilv.com/SalesInfo/SubscriptionGuide"
      }
      `}
    </script>
    </Helmet> 
      

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="체크포인트" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차 - 체크포인트</h1>
			<p className={styles.screenReaderOnly}>대전 하늘채 스카이앤 3차 분양 전 필수 체크포인트를 확인하세요. 청약 자격, 서류 준비, 일정 등 분양 절차에서 놓치지 말아야 할 중요한 사항들을 정리해두었습니다. 정확한 정보와 절차를 통해 분양을 성공적으로 진행할 수 있도록 돕습니다.
      </p>

      <div className={styles.textBox}>
        <div>대전 하늘채 스카이앤 3차가 눈부신 가치 위에</div>
        <div>새로운 자부심으로 찾아옵니다.</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      {/* <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="대전 하늘채 스카이앤 3차 청약체크포인트-image1"
        onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
      /> */}

      {/* <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를 확인하시기 바랍니다.
        </div>
      </div> */}

      <Ready />

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
