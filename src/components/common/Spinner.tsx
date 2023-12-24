import './Spinner.css'

export default function Spinner() {
    return <div style={{
        width: "1.5rem",
        height: "1.5rem"
    }}>
        <svg style={{
            width: "100%",
            height: "100%"
        
        }} viewBox="0 0 100 100">
            <circle className="left-anim progress-ring__circle" stroke-width="10" stroke-linecap="round" cx="50" cy="50"
                r="40" fill="transparent"></circle>

            <circle className="right-anim progress-ring__circle" stroke-width="10" stroke-linecap="round" cx="50" cy="50"
                r="40" fill="transparent"></circle>
        </svg>
    </div>
}