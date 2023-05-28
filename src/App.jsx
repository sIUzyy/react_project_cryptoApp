import React from "react"
import MainRoutes from "./routes/MainRoutes"
import { HeaderContext } from "./context/headerContext"

function App() {

  return (
    <div className="bg-[#121212]">
      <HeaderContext>
        <MainRoutes/>
        </HeaderContext>
    </div>
    )
}

export default App
