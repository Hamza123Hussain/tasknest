'use client'
import { store } from '@/utils/Redux/Store'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'
import CondtionalLayout from './CondtionalLayout'

const ReduxComp = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Navbar />
      <CondtionalLayout> {children}</CondtionalLayout>

      <Footer />
    </Provider>
  )
}

export default ReduxComp
