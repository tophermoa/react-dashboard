import React from 'react'
import { Header, Pie as PieComp } from '../../components'

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Inflation Sales" category="Chart" />
      <div className="w-full">
        <PieComp />
      </div>
    </div>
  )
}

export default Pie