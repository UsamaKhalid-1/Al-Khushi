import React from 'react'

function KeyList() {
    const names = ['Ali', 'Usama', 'Ahmad']
    const KeyList= names.map((name, index) => <h2 key={index}>{index}{name}</h2>  ) 
    return  <div> {KeyList} </div>
}

export default KeyList;
