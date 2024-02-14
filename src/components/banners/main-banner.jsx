import React from 'react'
import bgImg from "/public/hero_bg.png"

export const MainBanner = () => {
    return (
        <div className='hero'>
            <img className='hero__img' src={bgImg} alt="img" />
            <div className="container hero__container">
                <h2 className='hero__title'>Истина в качестве</h2>
                <p className='hero__text'>КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
                    КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ,
                    ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ</p>
                <button className='hero__btn'>
                    Купить
                </button>
            </div>

        </div>
    )
}
