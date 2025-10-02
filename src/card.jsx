import data from "../data.js";
export default function Card(props){

  return(
    <div className = "parent">
      <div className = "child1">
      <img className="image" src={`../${props.img.src}`} />
      </div>
      <div className = "child2">
        <div className = "child3">
          <p className = "country-name">📍{props.country}</p>
          <a className = "google-maps-link">View on Google Maps</a>
        </div>
        <p className = "title1">{props.title}</p>
        <p className = "date">{props.dates}</p>
        <p className = "text">{props.text}</p>
       
      </div>
    </div>
  )
}