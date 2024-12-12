import Navbar from "./Navbar"
// import Sidebar from "./Sidebar"
import Accordion from "./Accordion"

export default function Layout({children}){
    return(
        <div>   
            <Navbar/>
            {/* <div style={{ display: 'flex' }}>
                <Sidebar />
                <main style={{ flex: 1, padding: '20px' }}>{children}</main>
            </div> */}

            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                <Accordion />
            </div>
            {children}
        </div>

    )
}