import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import{SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/chetan-patidar-3471201ab/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Pvoldemorte" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://leetcode.com/profile/" target="_blank" rel="noopener noreferrer"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials