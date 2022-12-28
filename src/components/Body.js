import React, { useState } from 'react'
import hogs from '../porkers_data'



const HogMore = ({hog}) => {
    return (
        <div key={hog.id} className='moreResults'>
            <p>Specialty:{hog.specialty}</p>
            <p>Greased: {hog.greased}</p>
            <p>Weight: {hog.weight}</p>
            <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </div>)
}

const Hog = ({hog}) => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(!showResults)
    return (
        <div key={hog.id}>
        <h2 onClick={onClick} >{hog.name}</h2>
        {showResults ? <HogMore hog={hog}/> : null}
        <img src={hog.image} alt="hog image" ></img>
    </div>
        )
}

const RenderHog = ({hogData}) => {
    const hogList = hogData.map((hog)=>{        
        return(
            <div key={hog.id}>
                <Hog hog={hog}/>
            </div>
        )
    });
    return hogList;
}


function Body() {

    const [hogsData, setHogsData]= useState(hogs)

    function onSearchChange(value){
        let newSeachData=hogs.filter((hog)=>hog.name.toLowerCase().includes(value))
        setHogsData(newSeachData)
        console.log(newSeachData)
    }
    
    function onFilterChange(){
        let newFilterData=hogs.filter((hog)=>hog.greased ===true)
        setHogsData(newFilterData)
    }

    function handleSelect(sortProperty){
        let typeMap = {
            'By Weight': 'weight',
            'By Name': 'name'
        }
        let typeName = typeMap[sortProperty];
        let newSelectData=[...hogs].sort((hogA, hogB)=> hogB[typeName] > hogA[typeName] ? -1 : 1)
        console.log(`Sorted by ${sortProperty}:`);
        console.log(newSelectData);
        setHogsData(newSelectData)
    }
  return (
    <>
    <input type="text" placeholder='search' onChange={(e)=>onSearchChange(e.target.value)}></input>
    <button onClick={onFilterChange} >Greased</button>
    <select onChange={(e) => handleSelect(e.target.value)} >
        <option>By Weight</option>
        <option>By Name</option>
    </select>
    <RenderHog hogData={hogsData}/>
    </>
        

  )
}

export default Body
