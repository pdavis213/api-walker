import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Results = (props) => {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.category}/${props.id}/`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [props.category, props.id])


    return (
        <div>
            {
                props.category == "planets" ?
                    <div>
                        <h3>{data.name}</h3>
                        <h4>Climate: <p>{data.climate}</p></h4>
                        <h4>Terrain: <p>{data.terrain}</p></h4>
                        <h4>Surface Water: <p>{data.surface_water}</p></h4>
                        <h4>Population: <p>{data.population}</p></h4>
                    </div>:null
            }
            {
                props.category == "people" ?
                    <div>
                        <h3>{data.name}</h3>
                        <h4>Height: <p>{data.height}</p></h4>
                        <h4>Mass: <p>{data.mass}</p></h4>
                        <h4>Hair Color: <p>{data.hair_color}</p></h4>
                        <h4>Skin Color: <p>{data.skin_color}</p></h4>
                    </div>:null
            }
        </div>
    );
};

export default Results;