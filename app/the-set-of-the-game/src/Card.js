export function Card(props) {
  const width = 150;
  const height = 100;
  const viewBoxStr = `0 0 ${width} ${height}`;
  return (
    <svg viewBox={viewBoxStr} width={width} height={height}>
      <rect width={width} height={height} fill="white" stroke="black" />
      {RenderShape(props.shape, props.color)}
    </svg>
  );
}

function RenderShape(shape, color) {
  const centerX = 25;
  const centerY = 50;
  switch (shape) {
    case "circle":
      return Circle(centerX, centerY, color);
    case "magatama":
      return Magatama(centerX, centerY, color);
    case "diamond":
      return Diamond(centerX, centerY, color);
    default:
      return null;
  }
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
