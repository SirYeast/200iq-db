import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <div className="container flex flex-spaced">
                <h1><Link to="/">200IQ DB</Link></h1>
                <nav>
                    <ul>
                        <li><Link to="/new" id="add-character" className="btn flex flex-center-both br-2">Add Character</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}