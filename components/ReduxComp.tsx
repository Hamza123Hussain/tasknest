'use client'
import { store } from '@/utils/Redux/Store'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'

const ReduxComp = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Navbar />

      {children}
      <Footer />
    </Provider>
  )
}

export default ReduxComp
