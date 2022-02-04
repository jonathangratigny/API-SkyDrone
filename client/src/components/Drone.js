import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import DroneCard from './DroneCard'
import DroneForm from "./DroneForm"

const Drone = () => {
    const { id } = useParams()
    const [drone, setDrone] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await window.fetch(`https://skydrone-api.herokuapp.com/api/v1/drones/${id}`)
            const json = await data.json()
            setDrone(json)
            console.log(id)
        }
        fetchData()
    }, [id])

    return drone ? (
        <div>
            <DroneCard drone={drone} />
            <DroneForm id={id} drone={drone} />
        </div>
    ) : null
}

export default Drone