import React, { Component } from 'react'
import {connect} from "react-redux"
 class Footer extends Component {
    render() {
        return (
            <div className="footer">
                 <div>
                     <span>0份礼品</span>
                     <br/>
                      <b>￥{this.props.number}</b>
                 </div>
                 {
                     this.props.number==0?<button disabled >购买</button>:
                     <button className={this.props.number===0?"":"active"}>购买</button>
                 }
                 
            </div>
        )
    }
}
let mapStateToProps = state => {
    return {
        number:state.number
    }
}

let mapDispatchToProps = dispatch => {
    return {
        addP() {
           dispatch({type:"ADD_P"})
        }
    }
}

Footer=connect(mapStateToProps,mapDispatchToProps)( Footer)
export default  Footer