import SignupSection from "../components/SignupSection";


export default function AuthPage() {
    return <main className="container" style={{
        display: "grid",
        minHeight: "100vh",
        placeContent: "center"
    }}>
        <SignupSection />

    </main>
}