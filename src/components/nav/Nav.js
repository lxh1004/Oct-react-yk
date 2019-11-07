import React, { Component } from 'react'
import {connect} from "react-redux"
 class Nav extends Component {

   change =(i)=>{
        this.props.set(i)
   }


    render() {
        let {arr,curIndex} =this.props
        return (
            <div className="nav-list">
                {
                    arr.map((v,i)=>(
                          <p key={i}><span
                             onClick={()=>this.change(i)}
                            className={curIndex===i?"bor":""}
                          >{v.text}</span></p>
                    ))
                }
            </div>
        )
    }
}
let mapStateToProps = state => {
    return {
        curIndex:state.curIndex
    }
}

let mapDispatchToProps = dispatch => {
    return {
       set(i){
         dispatch({type:"SET",i})
       }
    }
}
Nav=connect(mapStateToProps,mapDispatchToProps)(Nav)


export default  Nav