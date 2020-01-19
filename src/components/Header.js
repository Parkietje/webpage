import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <h1>parkietje</h1>
                <p>portfolio website</p>
            </div>
        </div>
        <nav>
            <ul>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Resume</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
