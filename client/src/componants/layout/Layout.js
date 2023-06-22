import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
// 
import {Toaster} from "react-hot-toast"

const Layout = ({children , title , discription , keywords , author}) => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8'></meta>
        <meta name='discription' content={discription}></meta>
        <meta name='keywords' content={keywords}></meta>
        <meta name='author' content={author}></meta>
        <title>{title}</title>
      </Helmet>

     <Header/>

    <main style={{minHeight : "70vh"}}>
      <Toaster/>
        {children}
    </main>

     <Footer />
    
    </div>
  )
}

Layout.defaultProps ={
  title : "Ecommarce App",
  discription : "MERN application",
  keywords : "REACT , EXPRESS , NODE , MONGODB",
  author :"Ravi Pankhaniya"
}

export default Layout
