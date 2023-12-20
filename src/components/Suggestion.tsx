
import { Link } from 'react-router-dom'
import { suggestionData } from '../utils/const_data/suggestionData'

export default function Suggestion() {


    return (<div className="suggestion bg-black">
        {suggestionData.map((data) =>

            <Link to={"shop"}  key={data.id} className="rel-content col-sb">
                <img className="modular_img" src={data.imageUrl} alt="" />
                <div className="abs-title"> <h3 className="fs-sm">{data.title}</h3> </div>
                <div className="abs-subtitle-dark-bg">
                    <div className="abs-subtitle"><p className="bold text-white fs-lg uppercase">SHOP<br />{data.title}</p></div>
                </div>
            </Link>
        )}
    </div>)
}