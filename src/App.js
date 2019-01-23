import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
// import { BrowerRouter as Router , Route , Link } from 'react-router-dom'
import './css/App.css';
import FilePageView from "./components/FilePageView"
import HomePage from "./components/HomePage"
import WaterKeepView from './components/WaterKeepView'
import DirtyWaterView from './components/DirtyWaterView'
import WaterKeepBackView from './components/WaterKeepBackView'
import EnvEduView from './components/EnvEduView'
import ArchView from './components/ArchView'
import ExampleForm from './components/ExampleForm'
import FormSearchView from './components/FormSearchView'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tab : 0 
    }
  }
  tabChange = (key) => {
      this.setState((state,props)=>{
        return {tab : key}
      })
    } 
  render() {
    return (<>
        <div style={{width : '100%' , height : '98.5%', margin:'auto'}}>
            <Route exact path="/internal/" component={HomePage} />
            <Route path="/internal/fileUse" component={FilePageView}></Route>
            <Route path="/internal/waterKeepView" component={WaterKeepView}></Route>
            <Route path="/internal/dirtyWaterView" component={DirtyWaterView}></Route>
            <Route path="/internal/waterKeepBack" component={WaterKeepBackView}></Route>
            <Route path="/internal/arch" component={ArchView}></Route>
            <Route path="/internal/envEdu" component={EnvEduView}></Route>
            <Route path="/internal/exampleForm" component={ExampleForm}></Route>
            <Route path="/internal/formSearch" component={FormSearchView}></Route>
            {/* <Route path="/form/:id" component={PanelWraper}></Route>
            <Route path="/form/:class/:id" component={RightView}></Route> */}
            
      </div>
      </>
    );
  }
}


export default App;
