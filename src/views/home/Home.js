import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import Footer from "../../components/footer/Footer"
import List from "../../components/list/List"
import Nav from "../../components/nav/Nav"
import axios from "axios"


class Home extends Component {


    componentDidMount() {
        if (this.props.list.length <= 0) {
            this.props.get()
        }
    }


    render() {
      let {list,arr} =this.props
        return (
            <Fragment>
                <div className="main">
                    <div className="swiper">
                         轮播图
                    </div> 
                    <h4>选择卡封面</h4>
                    <div className="nav">
                      <Nav arr={arr}/>
                    </div>
                    <div className="list">
                        <h4>选择一份礼物</h4>
                        <List  list={list}/>
                    </div>
                </div>
                <Footer />
            </Fragment>

        )
    }
}


function getList(next) {
    axios.get("/api").then(r => {
        next({ type: "ADD", value: r.data.values })
    })
}

let mapStateToProps = state => {
    return {
        list: state.list,
        arr:state.arr
    }
}

let mapDispatchToProps = dispatch => {
    return {
        get() {
            dispatch(getList)
        }
    }
}

Home = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home