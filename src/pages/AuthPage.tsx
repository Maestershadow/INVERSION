import { Outlet } from "react-router-dom";

export default function AuthPage() {
    return <main className="container" style={{
        display: "grid",
        minHeight: "100vh",
        placeContent: "center"
    }}>
        <Outlet />
    </main>
}