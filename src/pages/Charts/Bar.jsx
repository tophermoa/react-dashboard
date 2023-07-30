import React from 'react'
import { ChartComponent, SeriesCollectionDirective, ColumnSeries,  SeriesDirective, Inject, DataLabel, Legend, Category, Tooltip } from '@syncfusion/ej2-react-charts'

import { Header } from '../../components'

import {barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Inflation Rate Bar" category="Bar" />
      <ChartComponent
        id="bar-chart"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartBar={{border:{ width:0 }}}
        tooltip={{enable:true}}
        background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
        legendSettings={{background: 'white'}}
      >
        <Inject services={[ColumnSeries, DataLabel, Legend, Category, Tooltip]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar