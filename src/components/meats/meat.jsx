import React from 'react'
import { meatsData } from '../../data/home'
import cost from "/public/meat.svg"
export const Meat = ({ img }) => {
    return (
        <div className='meats__container container'>
            <div className="meat__buttons">
                <button className='meat__button'>Хиты</button>
                <button className='meat__button'>Скидки</button>
                <button className='meat__button'>Новинки</button>
            </div>
            <ul className='meats__list'>
                {meatsData.map((item) =>
                    <li className='meats__item'>
                        <img className='meats__img' src={item.img} alt="img" />
                        <h3 className='meats__title'>
                            Говядина, кусок с/к
                        </h3>
                        <p className='meats__text'>
                            Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.
                        </p>
                        <p className='meats__cost1'>500 ₽</p>
                        <div className="meats__box">
                            <p className='meats__cost2'>660 ₽</p>
                            <img className='meats__cost' src={cost} alt="cost" />
                        </div>
                        <div className="meats__btn">
                            <button className='meats__btn1'>Купить</button>
                            <button className='meats__btn2'>В 1 клик</button>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
