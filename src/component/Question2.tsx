import React, { useState } from 'react'
import { data } from '../data'
import Option from './Option'

const Question2 = () => {

  const [displayData, setDisplayData] = useState(data)
  const [region, setRegion] = useState("")
  const [model, setModel] = useState("")

  const tableHead = Object.keys(data[1])
  const tableHeadJSX = tableHead.map(header => <th key={header}>{header}</th>)
  const detailJSX = displayData.map(
    (detail, idx) =>
      <tr key={30 + idx}>
        <td>{detail.region}</td>
        <td>{detail.model}</td>
        <td>{detail.sales}</td>
      </tr>
  )

  function getAllRegion(
    arr: {
      region: string,
      model: string,
      sales: number
    }[]) {
    let result = new Set()

    for (let obj of arr) {
      result.add(obj['region'])
    }

    return Array.from(result)
  }

  function getAllModel(
    arr: {
      region: string,
      model: string,
      sales: number
    }[]) {
    let result = new Set()

    for (let obj of arr) {
      result.add(obj['model'])
    }

    return Array.from(result)
  }

  const allModel = getAllModel(data)
  const allRegion = getAllRegion(data)


  const handleChangeForRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const needData = data.filter(obj => obj.region === event.target.value || obj.model === model)
    setDisplayData(needData)
    setRegion(event.target.value)
    if(event.target.value === "ALL" && model === "ALL"){
      setDisplayData(data)
    }
  }


  const handleChangeForModel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const needData = data.filter(obj => obj.model === event.target.value || obj.region === region)
    setDisplayData(needData)
    setModel(event.target.value)
    if(event.target.value === "ALL" && region === "ALL"){
      setDisplayData(data)
    }
  }

  return (
    <div>
      <div>
        <Option filterBy='Region' filterData={allRegion} onChange={handleChangeForRegion} />
        <Option filterBy='Model' filterData={allModel} onChange={handleChangeForModel} />
      </div>
      <table style={{ width: '100%' }}>
        <thead>
        <tr>
          {tableHeadJSX}
        </tr>
        </thead>
        <tbody>
        {detailJSX}
        </tbody>
      </table>
    </div>
  )
}

export default Question2