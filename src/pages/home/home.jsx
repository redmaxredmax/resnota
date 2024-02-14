import React from 'react'
import { MainLayout } from '../../layout/main-layout'
import { MainBanner } from '../../components/banners/main-banner'
import { Cards } from '../../components/cards'
import { Meat } from '../../components/meats/meat'
export const Home = () => {
  return (
    <div>
      <MainLayout>
        <MainBanner />
        <Cards/>
        <Meat/>
      </MainLayout>
    </div>
  )
}
