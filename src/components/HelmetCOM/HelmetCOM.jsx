import React from "react";
import { Helmet } from "react-helmet-async";

const HelmetCOM = ({titleText, discriptionText}) => {
    return(
        <Helmet>
            <title>{titleText}</title>
            <meta name="description" content={discriptionText} />
        </Helmet>
    )
}

export default HelmetCOM;