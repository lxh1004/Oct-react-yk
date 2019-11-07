import React, { Component } from 'react'
import { Switch,Route,Redirect} from "react-router-dom"
export default class RouterView extends Component {
    render() {
      let {routes} =this.props
      let redirect =routes.filter(v=>v.redirect)
      let newRoutes =routes.filter(v=>!v.redirect)
     
        return (
            <Switch>
                {
                    newRoutes.map((v,i)=>(
                        <Route
                          key={i}
                          path={v.path}
                          render={props=>{
                              if(v.children){
                                  return <v.component {...props} routes={v.children}/>
                              }else{
                                return <v.component {...props}/>
                              }
                          }}
                         >
                        </Route>
                    ))
                }

                {
                    redirect.map((v,i)=>(
                        <Redirect key={i} from={v.path}  to={v.redirect} />
                    ))
                }
            </Switch>
        )
    }
}
