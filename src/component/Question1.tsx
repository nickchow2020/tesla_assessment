import React from 'react'
import { data } from '../data'
import {v4 as uuidv4} from 'uuid';

export const Question1:React.FC = ()=> {

  const tableHead = Object.keys(data[1])
  const tableHeadJSX = tableHead.map(header => <th key={header}>{header}</th>)

  const CA = data.filter(obj => obj.region === "CA")
  const EU = data.filter(obj => obj.region === "EU")
  const US = data.filter(obj => obj.region === "US")

  const needData = [EU,US,CA].map(data => {
    return {
      region:data[0].region,
      sales:data.reduce((cur,next)=>cur + next.sales,0),
      data
    }
  })

  const tableDetailJSX = needData.map((obj,idx) => {
    const sum = 
    <tr key={uuidv4()}>
      <td>{obj.region}</td>
      <td>SUM</td>
      <td>{obj.sales}</td>
    </tr>

    const detailJSX = obj.data.map((obj,idx) => {
      let detailJSX = 
      <tr key={uuidv4()}>
        <td>{obj.region}</td>
        <td>{obj.model}</td>
        <td>{obj.sales}</td>
      </tr>
      return detailJSX
    })

    detailJSX.unshift(sum)

    return detailJSX
  })

  return (
    <table style={{width:'100%',marginBottom:'3rem'}}>
      <thead>
      <tr>
        {tableHeadJSX}
      </tr>
      </thead>
      <tbody>
      {tableDetailJSX}
      </tbody>
    </table>
  )
}

export default Question1