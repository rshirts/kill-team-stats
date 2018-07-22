import React from 'react'
import './Logo.css'
import skullLogo from '../../assets/skull.png'

const logo = () => (
  <div styleName="Logo">
    <img src={skullLogo} alt="Skulls" />
    <div styleName="LogoText">KillTeamStats</div>
  </div>
)

export default logo