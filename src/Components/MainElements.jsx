export function MainElements(props) {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={props.e.img} id="row-img" />
      </div>

      <div className="col-md-9 pe-5">
        <img src="./pin.png" />
        <a href="">
          <small>View on Google Maps</small>
        </a>
        <div className="col-md-12">
          <h1>Mount Fuji</h1>
        </div>
        <div className="col-md-12">
          <p>
            <strong>12 Jan, 2021 - 24 Jan, 2021</strong>
          </p>
        </div>
        <div className="col-md-12">
          <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
