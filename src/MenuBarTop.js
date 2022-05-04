import { useState } from "react";

export default function MenuBarTop() {
  const [HideMenuUserIcon, setMenuUserIcon] = useState("HideMenuUserIcon");

  const handleClickUserIcon = () => {
    HideMenuUserIcon == "ShowHideMenuUserIcon" ? (
      setMenuUserIcon("HideMenuUserIcon")) : (setMenuUserIcon("ShowHideMenuUserIcon"))
  }

  return (
    <div className='MenuBarTop'>
      <div className='UserIcon'>
        <div className={HideMenuUserIcon}></div>
        <button className='btnUserIcon' onClick={handleClickUserIcon}>clickaqui</button>
      </div>
      <input className='SearchMenuBarTop' type="text" size="72" placeholder='Digite aqui para fazer sua pesquisa' /><button type='submit' className='SearchIcon'>&#128269;</button>
    </div>

  )
}