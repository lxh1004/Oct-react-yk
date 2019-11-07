import React, { Component, Fragment } from 'react'
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
 class List extends Component {

   link =(v)=>{
       let {curIndex} =this.props
       this.props.history.push({pathname:"/detail",state:{v,curIndex}})
   }

    add =(id)=>{
       this.props.addP(id)
    }

   remove =(id)=>{
       this.props.removeP(id)
   }

    render() {
        return (
            <Fragment>
               {
                   this.props.list.map(v=>(
                        <dl key={v.id}>
                            <dt onClick={()=>this.link(v)}>
                                <img src={v.src} alt=""/>
                            </dt>
                            <dd>
                                <p>{v.title}</p>
                                <p>￥{v.price}</p>
                                <p>
                                    <button className={v.num===0?"hidden":""}
                                     onClick ={()=>this.remove(v.id)}
                                    >-</button>
                                    <span className={v.num===0?"hidden":""}>{v.num}</span>
                                    <button onClick={()=>this.add(v.id)}>+</button>
                                </p>
                            </dd>
                        </dl>
                   ))
               }

            </Fragment>
                    
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
        addP(id) {
           dispatch({type:"ADD_P",id})
        },
        removeP(id){
           dispatch({type:"REMOVE",id})
        }


    }
}

List =connect(mapStateToProps,mapDispatchToProps)(List)
List =withRouter(List)

export default  List 