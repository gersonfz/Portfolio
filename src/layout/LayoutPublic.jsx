import { Outlet } from "react-router"
import { Navbar } from "../components"

const LayoutPublic = () => {
  return (
    <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default LayoutPublic