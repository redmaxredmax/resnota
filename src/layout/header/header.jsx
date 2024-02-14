import React from 'react'
import { headerData } from '../../data/home'
import icon from "/public/search.svg"


export const Header = () => {
  return (
    <div className='header'>
      <div className="container header__container">
      <ul className='header__list'>
          {headerData.map((item) =>
            <li key={item.path}>
              <a className='header__link' href={item.path}>{item.name}</a>
            </li>
          )}
        </ul>
        <form className='header__form'>
          <input className='header__srch' placeholder='Поиск по сайту' type="text" />
          <button className='header__btn' type='submit'>
            <img src={icon} alt="icon" />
          </button>
        </form>
      </div>
    </div>
  )
}
