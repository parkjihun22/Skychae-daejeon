import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { useMediaQuery } from "react-responsive";
import styles from "./MobilePopup.module.scss";

const MobilePopup = ({ onClosed, popupImage, numbering }) => {
    const [type, setType] = useState(0);  // 팝업 상태 (0: 열림, 1: 하루 보지 않기 클릭, 2: 닫기 클릭)
    const [cookies, setCookie] = useCookies();
    const isPopupShown = cookies[`Popup_Cookie${numbering}`];  // 쿠키 확인
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    // 쿠키의 유효기한을 지정하는 함수 (2시간)
        // 쿠키의 유효기한을 지정하는 함수
        const getExpiredDate = (days) => {
            const date = new Date(); // 현재 시간을 받아온다
            date.setDate(date.getDate() + days);
            // 현재 시간의 날짜에 days 만큼 더하여 유효기간을 지정
            return date;
        };
    
        // 닫기 버튼을 누를 때마다 실행될 코드.
        useEffect(() => {
            if (type === 1) {
                // 쿠키를 저장하는 핵심 코드
                const expires = getExpiredDate(1);
                setCookie(`Popup_Cookie${numbering}`, true, { path: '/', expires });
                onClosed(false);
            } else if (type === 2) {
                onClosed(false);
            } else if (isPopupShown) {
                onClosed(false);
            }
        }, [type, cookies]);
    


    return (
        <div className={styles.backgroundContainer}>
            <div className={styles.contentContainer}>
                {/* 각 이미지에 맞는 usemap 설정 */}
                <img
                    className={styles.popupImg}
                    style={!isMobile && numbering === 1 ? { width: '25vw'} : {}}
                    src={popupImage}
                    alt={`hansinduhyue-popup-image${numbering}`}
                    useMap={`#image-map${numbering}`}  // 각 이미지마다 다른 맵을 사용
                />

                {/* 이미지 맵 영역 정의 */}
                {numbering === 2 && (
                    <map name="image-map2">
                        <area 
                            target="_blank" 
                            alt="관심고객등록" 
                            title="관심고객등록" 
                            href="https://naver.me/55rUFpYq" 
                            coords="1,292,359,475"  // page1의 좌표
                            shape="rect" 
                        />
                    </map>
                )}

                {numbering === 1 && (
                    <map name="image-map1">
                        <area 
                            target="_self" 
                            alt="입주자 모집 공고" 
                            title="입주자 모집 공고" 
                            href="https://naver.me/55rUFpYq" 
                            coords="21,452,289,542"  // page2의 좌표
                            shape="rect" 
                        />
                        <area 
                            target="_self" 
                            alt="관심고객등록" 
                            title="관심고객등록" 
                            href="https://naver.me/55rUFpYq" 
                            coords="346,556,656,439"  // page2의 좌표
                            shape="rect" 
                        />
                    </map>
                )}

                {numbering === 3 && (
                    <map name="image-map3">
                        <area 
                            target="_self" 
                            alt="관심고객등록" 
                            title="" 
                            href="" 
                            coords=""  // page3의 좌표
                            shape="rect" 
                        />
                        <area 
                            target="_self" 
                            alt="관심고객등록" 
                            title="" 
                            href="" 
                            coords=""  // page3의 좌표
                            shape="rect" 
                        />
                    </map>
            
                )}

                <div className={styles.btnContainer}>
                <div className={styles.todayNotOpenBtn} onClick={() => setType(1)}>오늘 하루 보지 않기</div>
                <div className={styles.closeBtn} onClick={() => setType(2)}>닫기</div>
                </div>
            </div>
        </div>
    );
}

export default MobilePopup;
