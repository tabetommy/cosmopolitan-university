import React from "react";
import './footer.css';

const FooterComponent = () => {
    const copyright = String.fromCodePoint(0x00A9);
    const year = '2022';
    return (
        <div className="foot-main">
             <span>
             {`${copyright} ${year}`}
             </span><br></br>
             <span>
                Designed and Developed by Tommy Tabe
             </span>
        </div>

    );
}

export default FooterComponent