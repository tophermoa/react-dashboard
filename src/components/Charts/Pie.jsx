import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, Inject } from '@syncfusion/ej2-react-charts';


import {pieChartData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const PieComp = () => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
      id="pie-chart"
      legendSettings={{ visible:true}}
      enableAnimation={true}
      enableSmartLables={true}
      tooltip={{ enable: true}}
      background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        {/* {pieChartData.map((item, index) => <AccumulationSeriesDirective key={index} {...item} />)} */}
        <AccumulationSeriesDirective 
          name="Sales"
          dataSource={pieChartData} 
          xName='x' 
          yName='y' 
          type='Pie'
          innerRadius='20%'
          dataLabel={{ visible: true, position: 'Outside', name:"text", font:{ fontWeight:'700', color:currentMode === 'Dark' ? '#FFFFFF' : '#333333'}}}
          radius="r"
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default PieComp