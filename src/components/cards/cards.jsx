import React from 'react'
import { cardData } from '../../data/home'

let count = 0;
export const Cards = ({ text, title, img }) => {
    return (
        <div className="container cards__container">
            <ul className='cards__list'>
                {cardData.map((item) => {
                    count += 1;
                    if (count > 6 && count < 9) {
                        return (
                            <li className='cards__item cards__item1' key={item.title}>
                                <img className='cards__img cards__img1' src={item.img} alt="img" />
                                <h3 className='cards__title cards__title1'>{item.title}</h3>
                                <p className='cards__text cards__text1'>{item.text}</p>
                            </li>
                        )
                    }
                    return (
                        <li className='cards__item' key={item.title}>
                            <img className='cards__img' src={item.img} alt="img" />
                            <h3 className='cards__title'>{item.title}</h3>
                            <p className='cards__text'>{item.text}</p>
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}
