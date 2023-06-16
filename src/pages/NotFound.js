import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <h2 className="heading">404 Not Found</h2>
            <Link to="/" className="btn flex flex-center-both br-1">Back to Home</Link>
        </>
    );
}