import React, {useState, useEffect} from "react";
import Clock from "./Clock"


export let anime = [
{
  name: "Attack On Titans",
  picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYjy_bS8t3ScWyG7q94fIltnar3ChaOHmGA&usqp=CAU",
  answers: ['DBZ', 'One Punch', "Attack On Titans"],
},
{
  name: "Dragon ball",
  picture: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/03/goku-forms-2-e1553008088589.jpg?q=50&fit=contain&w=767&h=381&dpr=1.5",
  answers: ['DBZ', 'One Punch', "Dragon ball"],
}
// {
//   name: "naruto",
//   picture: "https://res.cloudinary.com/jerrick/image/upload/v1616592065/605b3cc118e784001e22da0d.jpg"
// },
// {
//   name: "Demon Slayer",
//   picture: "https://cdn.vox-cdn.com/thumbor/gcVHhhZ4VwVswvbDPvI-RfQ7ECQ=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19721018/Tanjiro__Demon_Slayer_.png"
// },
// {
//   name: "Ghost in the shell",
//   picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VBbI5HMki5cmjP_Gq0TdyA6VZn_0_fmkhg&usqp=CAU"
// }
]

// function ImagesHandler(props) {
//
//   let [animeName, animePicture] = [anime];
//
//   console.log(animeName)
//
//
//   let [currentImage, setCurrentImage] = useState(0);
//
//   useEffect(() => {
//     const myInterval = setInterval(() => {
//       setCurrentImage(currentImage++)
//     }, props.time)
//
//     return () => clearInterval(myInterval);
//
//   }, [currentImage])
//
//
//     return (
//
//           <img src={anime[currentImage]} alt=""/>
//
//     )
//
//
//
// }
//
//
// export default ImagesHandler;
//


// function ImagesHandler(props) {
//   const [image, setImage] = useState(0)
//   function displaySingleImage() {
//     if(image > 5) {
//       setImage(props.value)
//     }
//   }
//   return (
//     <div>
//       <img>{anime[0].picture}</img>
//
//     </div>
//   )
// }
