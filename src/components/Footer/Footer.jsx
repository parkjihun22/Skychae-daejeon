import React from "react";
import { useMediaQuery } from 'react-responsive';
import { IoCall } from "react-icons/io5";

import styles from "./Footer.module.scss"
import footerlogo from "../../assets/logo/footerlogo.png";

const Footer = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

	return (
		<>
			{!isMobile ? (
				<div className={styles.container}>
					<img src={footerlogo} />

					<div className={styles.innerContainer}>
						<div className={styles.textContainer}>
							<div className={styles.text1}>시행: ㈜용인 대전 하늘채 스카이앤 3차 ㅣ 시공: 코오롱건설</div>
							<div className={styles.text1}>※본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.</div>
							<div className={styles.text1}>대표자명: 박지훈 / eyeful31@naver.com </div>

							<div className={styles.text2}>COPYRIGHTⓒ 대전 하늘채 스카이앤 3차 모델하우스 ALL RIGHTS RESERVED.</div>
						</div>

						<a href="https://naver.me/G58kVeiB"><IoCall size={25} /> 1533-8848</a>
					</div>
				</div>
			) : (
				<div className={styles.container}>
					<img src={footerlogo} />

					<div className={styles.innerContainer}>

						<div className={styles.textContainer}>
							<div className={styles.text1}>시행: 대전 하늘채 스카이앤 3차 ㅣ 시공: ㈜대우건설, 중흥토건㈜</div>
							<div className={styles.text1}>※본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.</div>
							<div className={styles.text1}> 대표자명: 박지훈 / eyeful31@naver.com </div>
							<div className={styles.text2}>COPYRIGHTⓒ 대전 하늘채 스카이앤 3차 모델하우스 ALL RIGHTS RESERVED.</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Footer