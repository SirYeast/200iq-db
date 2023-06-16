import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="container flex flex-spaced">
                <p>&copy; 2023 - SirYeast</p>
                <nav>
                    <ul className="flex gap-2">
                        <Link to="/">Help</Link>
                        <Link to="/">DMCA</Link>
                        <Link to="/">Privacy Policy</Link>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
