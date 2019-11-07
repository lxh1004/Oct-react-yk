import React, { Component } from 'react'
import {connect} from "react-redux"
 class Detail extends Component {
    
   back =()=>{
       this.props.history.goBack()
   }
    render() {
        let {v,curIndex} =this.props.location.state
        let {arr} =this.props
        return (
            <div className="detail">
                <h1><span 
                 onClick={this.back}
                >返回</span></h1>
                <h2>{v.title}</h2>
                <p><img src={v.src} alt=""/></p>
                <p>{v.price}</p>
                 <h3>当前选中<span>{arr[curIndex].col}</span> </h3>
            </div>
        )
    }
}
let mapStateToProps = state => {
    return {
       arr:state.arr
    }
}


Detail=connect(mapStateToProps)(Detail)

export default Detail
