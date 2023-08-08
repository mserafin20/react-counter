// TODO: Add a comment explaining what is being passed to this "child" component as props
// count={count}
// handleIncrement={handleIncrement}
// handleDecrement={handleDecrement}

function CardBody(props) {
    return (
      <div className="card-body">
        <p className="card-text">Click Count: {props.count}</p>
        <p className="card-text">Click Count: {props.count}</p>

        <button
          type="button"
          className="btn btn-primary"
          onClick={props.handleIncrement}
        >
          Increment
        </button>{' '}
        <button
          type="button"
          className="btn btn-primary"
          onClick={props.handleIncrement}
        >
          Increment
        </button>{' '}
      </div>
    );
  }
  
  export default CardBody;
  