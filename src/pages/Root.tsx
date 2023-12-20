import Header from "../components/Header"
import HeadBanner from "../components/HeadBanner"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function Root() {

    return <>
        <HeadBanner />
        <Header />
        <main >
            <Outlet />
        </main>
        <Footer />
    </>
}      