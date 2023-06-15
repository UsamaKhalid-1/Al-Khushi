import React from 'react'
import Person from './Person';

function NameList() {
    const persons= [
        {
        id : '1-->',
        name : 'Ali Hassan',
        age : '28',
        skill : 'Graphic Desighning'
        },
        {
            id : '2-->',
            name : 'Usama',
            age : '25',
            skill : 'Web Development'
            },
            {
                id : '3-->',
                name : 'Ahmad',
                age : '16',
                skill : 'Mobile Person'
                },
    ]
    const personList= persons.map(person => <Person person = {person}></Person> ) 
    return  <div> {personList} </div>
}

export default NameList;
