interface PromotionBannerPar {
    firstCont: {contImage:string, contDesc: string},
    secondCont?: {contImage:string, contDesc: string},
    thirdCont: {contImage:string, contDesc: string},
}

export default function PromotionBanner({ firstCont, secondCont = {contDesc: "", contImage: "" } , thirdCont }:PromotionBannerPar ) {
    return <div className="promotion-banner">
        <div className="rel-content">
            <img className="modular_img" src={firstCont.contImage} alt="" />
            {firstCont.contDesc && <div className="abs-subtitle row gp-150 fs-sm semi-bold"><img className="wd-100" src="/assets/icon_forward.svg" alt="" /><p>{firstCont.contDesc}</p></div>}
        </div>
        {secondCont?.contImage !== undefined && secondCont.contImage.length  > 0 ?
            <div className="rel-content">
                <img className="modular_img" src={secondCont.contImage} alt="" />
                {secondCont.contDesc && <div className="abs-subtitle row gp-150 fs-sm semi-bold"><img className="wd-100" src="/assets/icon_forward.svg" alt="" /><p>{secondCont.contDesc}</p></div>}
            </div>

            : <div className="bg-gradient">
                <div className=" col text-align-c text-white gp-200">
                    <h2 className="bold">ONLINE & IN-STORES</h2>
                    <p className="fs-xlg bold">50% Off Almost Everything</p>
                    <p>Hurry, these deals are ending soon.</p>
                    <p>Like...TODAY.</p>
                    <p>Use code: <span className="bold">CYBERWEEK</span> </p>
                    <button className="button align-self-c">Shop</button>
                    <a href="#" className="underline">*Exclusions apply. See details.</a>
                </div>
            </div>}
        <div className="rel-content">
            <img className="modular_img" src={thirdCont.contImage} alt="" />
            {thirdCont.contDesc &&<div className="abs-subtitle row gp-150 fs-sm semi-bold"><img className="wd-100" src="/assets/icon_forward.svg" alt="" /><p>{thirdCont.contDesc}</p></div>}
        </div>
    </div>
}