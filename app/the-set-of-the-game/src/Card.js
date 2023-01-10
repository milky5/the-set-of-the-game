export function Card(props) {
  const width = 150;
  const height = 100;
  const viewBoxStr = `0 0 ${width} ${height}`;
  const cardBoarderColor = props.selected === true ? "yellow" : "black";
  const cardBoarderWidth = props.selected === true ? "5" : "1";
  const shapes = RenderShape(
    props.shape,
    props.color,
    props.number,
    props.paint
  );
  return (
    <a href="#" onClick={props.onClick}>
      <svg viewBox={viewBoxStr} width={width} height={height}>
        <rect
          width={width}
          height={height}
          fill="white"
          stroke={cardBoarderColor}
          strokeWidth={cardBoarderWidth}
        />
        {shapes.map((element, index) => {
          return <g key={index}>{element}</g>;
        })}
      </svg>
    </a>
  );
}

function RenderShape(shape, color, count, paint) {
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
      components.push(createComponent(centerCenterX, centerY, color, paint));
      break;
    case 2:
      components.push(
        createComponent(middleLeftCenterX, centerY, color, paint)
      );
      components.push(
        createComponent(middleRightCenterX, centerY, color, paint)
      );
      break;
    case 3:
      components.push(createComponent(leftCenterX, centerY, color, paint));
      components.push(createComponent(centerCenterX, centerY, color, paint));
      components.push(createComponent(rightCenterX, centerY, color, paint));
      break;
    default:
      return null;
  }

  return components;
}

function Circle(centerX, centerY, color, paint) {
  const circleX = centerX;
  const topCircleY = centerY - 25;
  const bottomCircleY = centerY + 25;
  const circleRadius = 10;
  const rectX = centerX - 10;
  const rectY = centerY - 25;
  const rectWidth = 20;
  const rectHeight = 50;

  let fillColor = color;
  let fillOpacity = 1;
  let overwriteRect = null;

  switch (paint) {
    case "solid":
      break;
    case "stripes":
      // TODO: implement
      fillOpacity = 0.2;
      break;
    case "none":
      const overwriteRectX = rectX + 1;
      const overwriteRectY = rectY - 1;
      const overwriteRectWidth = rectWidth - 2;
      const overwriteRectHeight = rectHeight + 2;

      fillColor = "transparent";
      overwriteRect = (
        <rect
          x={overwriteRectX}
          y={overwriteRectY}
          width={overwriteRectWidth}
          height={overwriteRectHeight}
          fill="white"
          stroke="white"
        />
      );
      break;
    default:
      return null;
  }

  return (
    <g>
      <circle
        cx={circleX}
        cy={topCircleY}
        r={circleRadius}
        fill={fillColor}
        fillOpacity={fillOpacity}
        stroke={color}
      />
      <circle
        cx={circleX}
        cy={bottomCircleY}
        r={circleRadius}
        fill={fillColor}
        fillOpacity={fillOpacity}
        stroke={color}
      />
      <rect
        x={rectX}
        y={rectY}
        width={rectWidth}
        height={rectHeight}
        fill={fillColor}
        fillOpacity={fillOpacity}
        stroke={color}
      />
      {overwriteRect}
    </g>
  );
}

function Magatama(centerX, centerY, color, paint) {
  const leftX = centerX - 10;
  const rightX = centerX + 10;
  const topY = centerY - 35;
  const bottomY = centerY + 35;
  const pointsStr = `${leftX},${topY} ${rightX},${topY} ${leftX},${bottomY} ${rightX},${bottomY}`;

  let fillColor = color;
  let fillOpacity = 1;

  switch (paint) {
    case "solid":
      break;
    case "stripes":
      // TODO: implement
      fillOpacity = 0.2;
      break;
    case "none":
      fillColor = "transparent";
      break;
    default:
      return null;
  }

  return (
    <g>
      <polygon
        points={pointsStr}
        stroke={color}
        fill={fillColor}
        fillOpacity={fillOpacity}
      />
    </g>
  );
}

function Diamond(centerX, centerY, color, paint) {
  const leftX = centerX - 10;
  const rightX = centerX + 10;
  const topY = centerY - 35;
  const bottomY = centerY + 35;
  const pointsStr = `${centerX},${topY} ${leftX},${centerY} ${centerX},${bottomY} ${rightX},${centerY}`;

  let fillColor = color;
  let fillOpacity = 1;

  switch (paint) {
    case "solid":
      break;
    case "stripes":
      // TODO: implement
      fillOpacity = 0.2;
      break;
    case "none":
      fillColor = "transparent";
      break;
    default:
      return null;
  }

  return (
    <g>
      <polygon
        points={pointsStr}
        stroke={color}
        fill={fillColor}
        fillOpacity={fillOpacity}
      />
    </g>
  );
}
