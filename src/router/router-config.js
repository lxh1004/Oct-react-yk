import Home from "../views/home/Home"
import Detail from "../views/detail/Detail"

const routes =[
     {
         path:"/home",
         component:Home
     },
     {
         path:"/detail",
         component:Detail
     },
     {
         path:"/",
         redirect:"/home"
     }
]


export default routes