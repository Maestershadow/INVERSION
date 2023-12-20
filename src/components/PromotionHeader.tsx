export default function PromotionHeader({ title, subtitle }: { title: string, subtitle: string }) {
    return <div className="pd-100 col gp-150 text-align-s">
        <h2 className="bold fs-rg">{title}</h2>
        <div className="row gp-150">
            {subtitle.length > 0 && <div><img className="wd-100" src="/assets/icon_forward.svg" alt="" /></div>}
            <p className="fs-sm semi-bold">{subtitle}</p>
        </div>
    </div>
}