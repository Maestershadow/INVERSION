export default function Banner({bannerImg,title = "",subtitle = "",buttonName = "",position}: {bannerImg: string,title?:string,subtitle?:string,buttonName:string,position: string}) {
    return (
        <div className={`banner`}>
            <img src={bannerImg} alt="" />
            <div className={`${position}`}>
                <h3 className="bold fs-xlg">{title}</h3>
                <p className="fs-sm">{subtitle}</p>
                <button className="button "><div className="fs-sm gradient-text">{buttonName}</div></button>
            </div>

        </div>
    )
}