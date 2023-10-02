import NavBar from "../Components/NavBar"

const Layout = ({children}) => {
  return (
    <div id="layout"> 
      <NavBar />
     

      <main>{children}</main>
    </div>
  )
}

export default Layout
