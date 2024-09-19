export function MainElements(props) {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={props.e.img} id="row-img" />
      </div>

      <div className="col-md-9 pe-5">
        <img src="./pin.png" className="pin pe-2" />
        <a href={props.e.map} className="map">
          <small>View on Google Maps</small>
        </a>
        <div className="col-md-12">
          <h1>{props.e.title}</h1>
        </div>
        <div className="col-md-12">
          <p>
            <strong>
              {props.e.date.start} - {props.e.date.end}
            </strong>
          </p>
        </div>
        <div className="col-md-12">
          <p>{props.e.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
