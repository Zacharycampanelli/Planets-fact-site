import NavBar from "../Components/NavBar"

const Layout = ({children}) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}

export default Layout
