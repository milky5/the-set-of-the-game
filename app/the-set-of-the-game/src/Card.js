export function Card(props) {
  return (
    <button>
      index: {props.index}
      <br />
      ------
      <br />
      cardID: {props.id}
      <br />
      color: {props.color}
      <br />
      shape: {props.shape}
      <br />
      paint: {props.paint}
      <br />
      number: {props.number}
    </button>
  );
}
