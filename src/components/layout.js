import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { 
    container,
    heading,
    navLinks,
    navLinkText,
    navLinkItem
} from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            siteBuildMetadata {
                buildTime
            }
        }
    `)
    return(
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header>{data.siteBuildMetadata.buildTime}</header>
            <nav className={navLinks}>
                <ul>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Dashboard</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About Me</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout