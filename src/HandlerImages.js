import React, {useState} from "react"


let anime = [
{
  name: "Dragon ball",
  picture: "https://dbgbh.bn-ent.net/assets/img/news/news_thumb_kv.png"
},
{
  name: "Attack On Titans",
  picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYjy_bS8t3ScWyG7q94fIltnar3ChaOHmGA&usqp=CAU"
},
{
  name: "naruto",
  picture: "https://res.cloudinary.com/jerrick/image/upload/v1616592065/605b3cc118e784001e22da0d.jpg"
},
{
  name: "Demon Slayer",
  picture: "https://cdn.vox-cdn.com/thumbor/gcVHhhZ4VwVswvbDPvI-RfQ7ECQ=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19721018/Tanjiro__Demon_Slayer_.png"
},
{
  name: "Ghost in the shell",
  picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VBbI5HMki5cmjP_Gq0TdyA6VZn_0_fmkhg&usqp=CAU"
}
]

function HandlerImage() {
  const [items, setItems] = useState;
  function myFunction() {
    for(var i = 0; i < anime.length; i++) {
      anime.picture
    }
  }
  return (
    <div>
      <img>{}</img>

    </div>
  )
}

export default HandlerImages
