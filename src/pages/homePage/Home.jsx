import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import Menus from '../../components/menus/Menus'
import NavBar from '../../components/nav/NavBar'
import { getAllMenuURL } from '../../constants'

const Home = () => {
    const [menu, setMenu] = useState([])

    async function getAllmenus(r) {
        const response = await fetch(getAllMenuURL, { method: "GET" })
        const menus = await response.json()
        setMenu(menus.meals)
    }

    useEffect(() => {
        getAllmenus()
    }, [])

    console.log(menu)
    return (
        <div>
            <NavBar />
            <Hero />
            <Menus menu={menu} />
        </div>
    )
}

export default Home