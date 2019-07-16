import React from "react"
import BlogNav from "./blognav"
import Footer from "./footer"

const style = {
  fontFamily: 'Roboto',
  margin: 0,
  width: '100%'
}

class Layout extends React.Component {
  render() {
    return (
      <div style={style}>
        <BlogNav />
        {this.props.children}
        <br />
        <Footer />
      </div>
    )
  }
}

export default Layout