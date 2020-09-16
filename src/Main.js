import React,{Component} from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Musttry from './components/Home/Musttry'
import About from './components/About/About'
import Menu from './components/Menu/Menu'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
class Main extends Component{
render(){
    return(
        <>
        <container-fluid>
        <Header/>
        <Home/>
        <Musttry/>
        <About/>
        <Menu/>
        <Testimonial/>
        <Contact/>
        </container-fluid>       
        </>
    )
}
}
export default Main