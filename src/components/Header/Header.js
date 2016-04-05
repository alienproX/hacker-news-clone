import React from 'react'
import { Link } from 'react-router'
import styles from './Header.css'
import baseSty from '../../styles/base.css'

function showMenu(){
	if(document.querySelector('.'+styles.menuShow)){
		closeMenu()
		return
	}
	document.querySelector('nav div').classList.add(styles.menuShow)
	document.querySelector('.'+styles.showMenu).classList.add(styles.showCurrent)
	document.querySelector('#main').classList.add(styles.mainTop)
}

function closeMenu(){
	document.querySelector('nav div').classList.remove(styles.menuShow)
	document.querySelector('.'+styles.showMenu).classList.remove(styles.showCurrent)
	document.querySelector('#main').classList.remove(styles.mainTop)
}

function Header() {
	return (
		<header className={styles.header}>
		<div className={styles.autoWidth}>
		<span className={styles.showMenu} onClick={showMenu}></span>
		<Link to="/"><h1>Hacker News</h1></Link>
		<nav>
		<div>
		<Link to="/newest" activeClassName={styles.current}>new</Link>
		<Link to="/show" activeClassName={styles.current}>show</Link>
		<Link to="/ask" activeClassName={styles.current}>ask</Link>
		<Link to="/jobs" activeClassName={styles.current}>jobs</Link>
		</div>
		<Link to="/submit"  className={baseSty.iconBlog +' ' + styles.submit} activeClassName={styles.current}></Link>
		<Link to="/login" className={baseSty.iconUser +' ' + styles.user} activeClassName={styles.current} ></Link>
		</nav>
		</div>
		</header>
		)
}

export default Header
