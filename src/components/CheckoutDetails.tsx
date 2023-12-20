import Rating from "./Rating";

export default function CheckoutDetails() {
    return <div className="checkout-details">
        <div className="col gp-200">
            <h2 className="bold fs-md">Chuck 70 Vintage Canvas</h2>
            <p className="fs-xsm semi-bold">$85.00</p>
            <p className="fs-xxsm semi-bold">UNISEX LOW TOP SHOE</p>
            <div className="rating-container"><Rating /><span>4.7 stars</span> </div>
            <p className="fs-xsm">A canvas for whatever style-era you're in. <span className="underline text-grey">More Info</span></p>
        </div>

        <div className="col gp-150">
            <h3 className="bold">Classic Colors <span className="regular">White/Garnet/Egret</span></h3>
            <p>$85.00</p>
            <div className="row gp-150">
                <img className="wd-700" src="/assets/shoep_1.jpg" alt="" />
                <img className="wd-700" src="/assets/shoep_2.jpg" alt="" />
                <img className="wd-700" src="/assets/shoep_3.jpg" alt="" />
                <img className="wd-700" src="/assets/shoep_4.jpg" alt="" />
            </div>

            <h4 className="bold">Seasonal Colors</h4>
            <p>$85.00</p>
            <div className="row gp-150">
                <img className="wd-700" src="/assets/shoep_1.jpg" alt="" />
                <img className="wd-700" src="/assets/shoep_2.jpg" alt="" />
            </div>
        </div>

        <div className="col gp-400">
            <div className="row-sb">
                <div className="row gp-150">
                    <img className="wd-100" src="/assets/pen_rule.svg" alt="" />
                    <p className="fs-xxsm">This style runs large. Order a <span>half size down</span></p>
                </div>
                <p className="fs-xxsm bold underline">Size Guide</p>

            </div>
            <div className="fs-xsm row-sb bdr bdr-grey bold pd-50">
                Pick a Size
                <span className="material-symbols-outlined">add</span>
            </div>

            <div className="row-sb ht-350 bg-light-grey">
                <p className="pd-inline-100">Add to Cart</p>
                <div className="center bg-black wd-600 ht-p-400"> <span className="material-symbols-outlined fs-md text-white">favorite</span> </div>
            </div>
        </div>


    </div>
}