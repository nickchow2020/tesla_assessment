import React from 'react'

interface OptionProp{
  filterBy:string,
  filterData: any[],
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void 
}

const Option:React.FC<OptionProp> =({filterBy,filterData,onChange}) => {

  const OptionsJSX = filterData.map(val => <option key={val} value={val}>{val}</option>)

  return (
    <>
    <label htmlFor={filterBy}>Filter By:</label>
    <select name="cars" id={filterBy} onChange={onChange} defaultValue="ALL">
      <option value="ALL">all</option>
      {OptionsJSX}
    </select>
    </>
  )
}

export default Option