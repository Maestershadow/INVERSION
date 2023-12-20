import { Link } from "react-router-dom";


export default function HeadBanner() {

    
    
    return (<div className="bg-black">
        <div className="semi-bold ht-450 row-sb text-white container">
            <button className="row gp-200">
                <div className="flag"><img className="wd-100" src="/assets/us.svg" alt="" /></div>
                <p className="fs-xxsm bold">US | EN</p>
            </button>
            <p className="bold">30-DAY FREE RETURNS! <span className="underline semi-bold"> See Details.</span></p>
            <div className="row gp-250">
                <button>Help</button>
                <Link to={'/auth'} className=" row gp-200">Sign In  
                <div > <img  className="filter-white wd-200" src="/assets/icon_signin.svg" alt="" /> </div>
                </Link>
            </div>
        </div>
    </div> )

}