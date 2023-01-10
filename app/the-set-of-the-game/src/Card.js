export function Card(props) {
  const width = 150;
  const height = 100;
  const viewBoxStr = `0 0 ${width} ${height}`;
  return (
    <svg viewBox={viewBoxStr} width={width} height={height}>
      <rect width={width} height={height} fill="white" stroke="black" />
      {RenderShape(props.shape, props.color, props.number)}
    </svg>
  );
}

function RenderShape(shape, color, count) {
  let createComponent;
  switch (shape) {
    case "circle":
      createComponent = Circle;
      break;
    case "magatama":
      createComponent = Magatama;
      break;
    case "diamond":
      createComponent = Diamond;
      break;
    default:
      return null;
  }

  const leftCenterX = 25;
  const middleLeftCenterX = 50;
  const centerCenterX = 75;
  const middleRightCenterX = 100;
  const rightCenterX = 125;
  const centerY = 50;

  const components = [];
  switch (count) {
    case 1:
      components.push(createComponent(centerCenterX, centerY, color));
      break;
    case 2:
      components.push(createComponent(middleLeftCenterX, centerY, color));
      components.push(createComponent(middleRightCenterX, centerY, color));
      break;
    case 3:
      components.push(createComponent(leftCenterX, centerY, color));
      components.push(createComponent(centerCenterX, centerY, color));
      components.push(createComponent(rightCenterX, centerY, color));
      break;
    default:
      return null;
  }

  return components;
}

function Circle(centerX, centerY, color) {
  const circleX = centerX;
  const topCircleY = centerY - 25;
  const bottomCircleY = centerY + 25;
  const circleRadius = 10;
  const rectX = centerX - 10;
  const rectY = centerY - 25;
  const rectWidth = 20;
  const rectHeight = 50;

  return (
    <g>
      <circle cx={circleX} cy={topCircleY} r={circleRadius} fill={color} />
      <circle cx={circleX} cy={bottomCircleY} r={circleRadius} fill={color} />
      <rect
        x={rectX}
        y={rectY}
        width={rectWidth}
        height={rectHeight}
        fill={color}
      />
    </g>
  );
}

function Magatama(centerX, centerY, color) {
  const leftX = centerX - 10;
  const rightX = centerX + 10;
  const topY = centerY - 35;
  const bottomY = centerY + 35;
  const pointsStr = `${leftX},${topY} ${rightX},${topY} ${leftX},${bottomY} ${rightX},${bottomY}`;

  return (
    <g>
      <polygon points={pointsStr} stroke={color} fill={color} />
    </g>
  );
}

function Diamond(centerX, centerY, color) {
  const leftX = centerX - 10;
  const rightX = centerX + 10;
  const topY = centerY - 35;
  const bottomY = centerY + 35;
  const pointsStr = `${centerX},${topY} ${leftX},${centerY} ${centerX},${bottomY} ${rightX},${centerY}`;
  return (
    <g>
      <polygon points={pointsStr} stroke={color} fill={color} />
    </g>
  );
}
