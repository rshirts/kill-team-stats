import React from 'react'
import './Toolbar.css'
import Logo from '../../../components/Logo/Logo'

const toolbar = (props) => {
  return (
    /* The div surrounding the toolbar is there to provide proper spacing for the css grid of the layout, even though the toolbar has a fixed position */
    <div>
      <header styleName="toolbar">
        <div>drawerToggle</div>
        <div styleName="Logo">
          <Logo />
        </div>
        <div>navigationItems</div>
      </header>
    </div>
  )
}

export default toolbar
