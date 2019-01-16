import React, { Component } from 'react';
import { BannerView } from './HomePage.js'
import GoBackView from './GoBackView'
// var style = {width : '100%' ,
//         height : '48%' ,
//         float: 'left',
//         backgroundColor:'#2c4e4c' , 
//         color:'white',
//         borderStyle: 'solid',
//         borderWidth: '5px',
//         borderColor: '#d1c0a6',
//         padding : '20px',
//         marginTop: '10px',
//         marginLeft: '20px',
//         marginRight: '0px',
//         marginBottom: '20px',
//         textAlign: 'center',
//         justifyContent: 'center',
//         alignItems: 'center'
//         }
class ExampleForm extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    div33widthStyle = {width : '33%',float: 'left',height: '100%'}
    centerTextStyle = {
        position: 'relative',
        transform: 'translateY(500%)',
        top: '50%',
        margin: '0px',
        textAlign: 'center'
    }
    cellStyle = {
        width: '100%',
        height : '49%',
        backgroundColor:'#2c4e4c',
        color:'white',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#d1c0a6',
        padding : '20px',
        marginTop: '10px',
        marginLeft: '10px',
        marginRight: '0px',
        marginBottom: '10px',
    }
    render() {
        return (<>
            <div style={this.div33widthStyle}>
                <div style={this.cellStyle}>
                    <a style={{color: 'white'}} href={`https://docs.google.com/forms/d/e/1FAIpQLSfeWj6QDh5pRtrGioL00HjL2LyTbjCoAbQMGuqEQAesvPOU8Q/viewform`} target="_blank" rel="noopener noreferrer"><h1 style={this.centerTextStyle}>洽公滿意度問卷調查</h1></a>
                </div>
                <div style={this.cellStyle}>
                    <a style={{color: 'white'}} href={`https://goo.gl/NeesCT`} target="_blank" rel="noopener noreferrer"><h1 style={this.centerTextStyle}>友善產業展示品問卷調查</h1></a>
                </div>
            </div>
            {/* <div style={style}>
                <a style={{color: 'white'}} href={`https://docs.google.com/forms/d/e/1FAIpQLSfeWj6QDh5pRtrGioL00HjL2LyTbjCoAbQMGuqEQAesvPOU8Q/viewform`} target="_blank" rel="noopener noreferrer"><h1 style={this.centerTextStyle}>洽公滿意度問卷調查</h1></a>
            </div>
            <div style={style}>
                <a style={{color: 'white'}} href={`https://goo.gl/NeesCT`} target="_blank" rel="noopener noreferrer"><h1 style={this.centerTextStyle}>友善產業展示品問卷調查</h1></a>
            </div> */}
            <BannerView />
            <GoBackView clickHandler={this.clickHandler}></GoBackView>
       </>)
    }
}
export default ExampleForm