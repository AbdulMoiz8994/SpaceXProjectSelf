type Route={
  name: string
  path: String
}

const Routing: Route[]=[
 {
   name: "Home",
   path: "/",
 },
 {
  name: "Launches",
  path: "/launches",
},
{
  name: "Events",
  path: "/events",
},
{
  name: "About",
  path: "/about",
},
]



export default Routing