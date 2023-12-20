import '../styles/content.css'
import Banner from './Banner'
import CommunitySection from './CommunitySection'
import ExploreShoes from './ExploreShoes'
import PromotionBanner from './PromotionBanner'
import PromotionHeader from './PromotionHeader'
import ShoeSection from './ShoeSection'
import Suggestion from './Suggestion'

export default function MainContent() {
    return (<>
        <div>
            <Banner position="banner-content" bannerImg='/assets/fastbreak.jpg' title='Party Chucks, Your Way' subtitle='Personalized party-ready kicks for holidays and beyond. Stunning, sparkling, oh-so-you.' buttonName='CUSTOMIZE' />
        </div>
        <div className='container'>
            <PromotionHeader title='Shop By Style' subtitle='Shop All New Arrivals' />
            <Suggestion />
            <PromotionHeader title='In With The New' subtitle='Shop All Gifts' />
            <PromotionBanner
                firstCont={{ contImage: "/assets/women_category.jpg", contDesc: "Shop Women" }}
                secondCont={{ contImage: "/assets/men_category.jpg", contDesc: "Shop Men" }}
                thirdCont={{ contImage: "/assets/kids_category.jpg", contDesc: "Shop Kids" }} />
            <PromotionHeader title='Featured Collections' subtitle='' />
            <Banner position="banner-content" bannerImg='/assets/banner.jpg' title='Party Chucks, Your Way' subtitle='Personalized party-ready kicks for holidays and beyond. Stunning, sparkling, oh-so-you.' buttonName='CUSTOMIZE' />
            <Banner position="banner-content-c" bannerImg='/assets/styleit.jpg' subtitle='See how creatives in our community styled their Inversion, and find new inspiration to style yours.' buttonName='SHOP' />
            <PromotionHeader title='New Arrivals' subtitle='Shop All New Arrivals' />
            <ShoeSection />
            <PromotionHeader title='From Our Community' subtitle='' />
            <CommunitySection />
            <div className="ht-400">

            </div>
            <Banner position="banner-content-l" bannerImg='/assets/mail.jpg' subtitle='Be the first to hear about exclusive sales, product drops, new collabs, and more-sent straight to your inbox.' buttonName='SIGN UP FOR EMAILS' />
            <PromotionHeader title='Explore Inversion' subtitle='' />
            <ExploreShoes />
            {/* Space */}
            <div className="ht-700">

            </div>
        </div>
    </>)
}