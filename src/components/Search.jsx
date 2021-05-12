import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Search = () => {
    //create two states that will have the data and the drop down items
    const [starWars, setStarWars] = useState({});
    const [dropDown, setDropDown] = useState([]);

    //create form state
    const [formInfo, setFormInfo] = useState({
        category: 'people',
        id: ""
    })

    //create change handler
    const changeHandler = (event) => {
        setFormInfo({
            ...formInfo,
            [event.target.name]: event.target.value
        })
    }

    //import the api
    useEffect(()=>{
        axios.get('https://swapi.dev/api/')
        .then(response =>{
            setStarWars(response.data)
            setDropDown(Object.keys(response.data))
        })
        .catch(error=>{
            console.log('Hey Christian, theres an error buddy..', error)
        })
    },[])

    //create the submit handler
    const submitHandler = (event) => {
        event.preventDefault()
        navigate(`/${formInfo.category}/${formInfo.id}`)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>Search for: <select name="category" id="" onChange={changeHandler}>
                    {dropDown.map((items, i)=>{
                        return <option key = {i} value={items}>{items}</option>
                    })}
                    </select></p>

                    <p>Id: <input type="number" name="id" id="" onChange={changeHandler}/></p>
                    <input type="submit" value="Search"/>

            </form>
        </div>
    )
}

export default Search;