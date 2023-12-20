export default function Footer() {
    return (<footer >
      

        <div className="ht-lg-200 bdr-block bdr-grey">
            <div className="container row text-align-s">
                <div className="wd-p-400 bdr-right bdr-grey ht-p-400 center">
                    <div className="wd-lg-200 col gp-200">
                        <h4 className="fs-xsm bold">Sign up for news and updates</h4>
                        <p className="fs-xsm">
                            Be the first to hear about new products, collaborations, and offers-plus get 20% OFF your next order
                        </p>
                        <div className="email-input">
                            <input className="pd-50 bdr-trans" type="text" placeholder="Enter Email Address" />
                            <div className=" bg-black center"><img className="wd-100 filter-white" src="/assets/icon_forward.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="wd-p-400 bdr-right bdr-grey ht-p-400 center">
                    <div className="wd-lg-200 col gp-200 align-center">
                        <a href="#" className="bold">Find a Store</a>
                        <a href="#" className="bold">Gift Cards</a>
                        <a href="#" className="bold">Order Status</a>
                        <a href="#" className="bold">Follow Us:</a>
                        <div className="row gp-200">
                            <img className="wd-200 ht-150" src="/assets/twitter1.svg" alt="" />
                            <img className="wd-200 ht-150" src="/assets/twitter2.svg" alt="" />
                            <img className="wd-200 ht-150" src="/assets/twitter3.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="wd-p-400 bdr-right bdr-grey ht-p-400 center">
                    <div className="wd-lg-200 col gp-200">
                        <h4 className="fs-xsm bold">Get Help</h4>
                        <ul className="col gp-100">
                            <li>Order Status</li>
                            <li>Order / Returns</li>
                            <li>Shipping & Delivery</li>
                            <li>Payment Options</li>
                            <li>Student Discounts</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="wd-p-400 ht-p-400 center">
                    <div className="wd-lg-200 col gp-200">
                        <h4 className="fs-xsm bold">About Inversion</h4>
                        <ul className="col gp-100">
                            <li>Careers & Culture</li>
                            <li>Retail Stores</li>
                            <li>Nike.com</li>
                            <li>Jordan.com</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>


        <div className="bg-black">
            <div className="semi-bold ht-450 row-sb text-white container">
            <button className="row gp-200">
                <div className="flag"><img className="wd-100" src="/assets/us.svg" alt="" /></div>
                <p className="fs-xxsm bold">US | EN</p>
            </button>
                <div>
                    <ul className="row gp-200 text-grey">
                        <li>Terms of Use</li>
                        <li>Terms of Sale</li>
                        <li>Privacy Policy</li>
                        <li>CA Supply Chains Act</li>
                        <li>Do Not Sell or Share My Personal Information</li>
                    </ul>
                </div>
                <p>© 2023 Inversion</p>
            </div>
        </div>

    </footer>)
}