import React from 'react'

function Colums() {
    const items = []
  return (
    <React.Fragment> 
        {/*{
            items.map (item => (
                <React.Fragment key={item.id}>
                 <h1>Titile</h1>
                 <p></p>
                </React.Fragment>
            ))
        }*/}
      <td>Username</td>
      <td>User id</td>
    </React.Fragment>
  )
}

export default Colums;
