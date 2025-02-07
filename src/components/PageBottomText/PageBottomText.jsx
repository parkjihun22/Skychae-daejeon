import React from "react";
import styles from "./PageBottomText.module.scss";

const PageBottomText = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>평택 브레인시티 중흥S-클래스 모델하우스</div>

            <div>평택 브레인시티 중흥S클래스 모델하우스는</div>
            <div>상담사들의 허위 과장된 설명으로 인한</div>
            <div>고객님들의 피해방지 및 추후 문제 발생 시</div>
            <div>책임소재를 분명히 하기 위해</div>
            <div>상담담당자 지정 방문예약제로만 운영하고 있습니다.</div>

            <div>고객님들의 원활한 관람을 위한 24시간 전문상담원이 대기 하고있으니</div>

            <div>고객센터를 통해 원하는 날짜를 예약해 방문하시면 됩니다.</div>
        </div>
    );
};

export default PageBottomText;
