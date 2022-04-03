import * as react from "react"
import { Link } from "gatsby"

const Layout = ({ pageTitle, children }) => {
    return(
        <div>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout