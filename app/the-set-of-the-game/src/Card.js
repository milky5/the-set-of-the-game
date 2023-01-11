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
        {RenderDefs(props.shape, props.color, props.number, props.paint)}
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

function RenderDefs(shape, color, count, paint) {
  switch (paint) {
    case "stripes":
      break;
    case "solid":
    case "none":
    default:
      return null;
  }

  let createDefs;
  switch (shape) {
    case "circle":
      createDefs = CircleDefs;
      break;
    case "magatama":
      createDefs = MagatamaDefs;
      break;
    case "diamond":
      createDefs = DiamondDefs;
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

  const clipPaths = [];
  switch (count) {
    case 1:
      clipPaths.push(createDefs(centerCenterX, centerY, color, paint));
      break;
    case 2:
      clipPaths.push(createDefs(middleLeftCenterX, centerY, color, paint));
      clipPaths.push(createDefs(middleRightCenterX, centerY, color, paint));
      break;
    case 3:
      clipPaths.push(createDefs(leftCenterX, centerY, color, paint));
      clipPaths.push(createDefs(centerCenterX, centerY, color, paint));
      clipPaths.push(createDefs(rightCenterX, centerY, color, paint));
      break;
    default:
      return null;
  }

  const stripesPatternID = `stripes_pattern_${color}`;
  return (
    <defs>
      <pattern id={stripesPatternID} x="0" y="0" width="1" height="0.05">
        <line x1="0" y1="5" x2="100" y2="5" stroke={color} stroke-width="1" />
      </pattern>
      {clipPaths.map((element, index) => {
        return <g key={index}>{element}</g>;
      })}
    </defs>
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

function CircleDefs(centerX, centerY, color, paint) {
  const circleRadius = 10;
  const rectX = centerX - 10;
  const rectY = centerY - 25;
  const rectWidth = 20;
  const rectHeight = 50;
  const clipPathID = `circle_${centerX}_${centerY}`;
  const pathString = `M${rectX},${rectY} v${rectHeight} a${circleRadius},${circleRadius},0,1,0,${rectWidth},0 v-${rectHeight} a${circleRadius},${circleRadius},0,1,0,-${rectWidth},0z`;

  return (
    <clipPath id={clipPathID}>
      <path d={pathString} stroke={color} />
    </clipPath>
  );
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
  let stripesPatternRect = null;

  switch (paint) {
    case "solid":
      break;
    case "stripes":
      const topLeftX = centerX - 25;
      const topLeftY = 0;
      const clipPathID = `circle_${centerX}_${centerY}`;
      const clipPath = `url(#${clipPathID})`;
      const stripesPatternID = `stripes_pattern_${color}`;
      const fill = `url(#${stripesPatternID})`;
      stripesPatternRect = (
        <rect
          x={topLeftX}
          y={topLeftY}
          width="50"
          height="100"
          fill={fill}
          clip-path={clipPath}
        ></rect>
      );
      fillColor = "transparent";
      break;
    case "none":
      fillColor = "transparent";
      break;
    default:
      return null;
  }

  const pathString = `M${rectX},${rectY} v${rectHeight} a${circleRadius},${circleRadius},0,1,0,${rectWidth},0 v-${rectHeight} a${circleRadius},${circleRadius},0,1,0,-${rectWidth},0z`;
  return (
    <g>
      {stripesPatternRect}
      <path d={pathString} fill={fillColor} stroke={color} />
    </g>
  );
}

function MagatamaDefs(centerX, centerY, color, paint) {
  const leftX = centerX - 10;
  const rightX = centerX + 10;
  const topY = centerY - 35;
  const bottomY = centerY + 35;
  const clipPathID = `magatama_${centerX}_${centerY}`;
  const pointsStr = `${leftX},${topY} ${rightX},${topY} ${leftX},${bottomY} ${rightX},${bottomY}`;
  return (
    <clipPath id={clipPathID}>
      <polygon points={pointsStr} stroke={color} />
    </clipPath>
  );
}

function Magatama(centerX, centerY, color, paint) {
  const leftX = centerX - 10;
  const rightX = centerX + 10;
  const topY = centerY - 35;
  const bottomY = centerY + 35;
  const pointsStr = `${leftX},${topY} ${rightX},${topY} ${leftX},${bottomY} ${rightX},${bottomY}`;

  let fillColor = color;
  let stripesPatternRect = null;

  switch (paint) {
    case "solid":
      break;
    case "stripes":
      const topLeftX = centerX - 25;
      const topLeftY = 0;
      const clipPathID = `magatama_${centerX}_${centerY}`;
      const clipPath = `url(#${clipPathID})`;
      const stripesPatternID = `stripes_pattern_${color}`;
      const fill = `url(#${stripesPatternID})`;
      stripesPatternRect = (
        <rect
          x={topLeftX}
          y={topLeftY}
          width="50"
          height="100"
          fill={fill}
          clip-path={clipPath}
        ></rect>
      );
      fillColor = "transparent";
      break;
    case "none":
      fillColor = "transparent";
      break;
    default:
      return null;
  }

  return (
    <g>
      {stripesPatternRect}
      <polygon points={pointsStr} stroke={color} fill={fillColor} />
    </g>
  );
}

function DiamondDefs(centerX, centerY, color, paint) {
  const leftX = centerX - 10;
  const rightX = centerX + 10;
  const topY = centerY - 35;
  const bottomY = centerY + 35;
  const clipPathID = `diamond_${centerX}_${centerY}`;
  const pointsStr = `${centerX},${topY} ${leftX},${centerY} ${centerX},${bottomY} ${rightX},${centerY}`;
  return (
    <clipPath id={clipPathID}>
      <polygon points={pointsStr} stroke={color} />
    </clipPath>
  );
}

function Diamond(centerX, centerY, color, paint) {
  const leftX = centerX - 10;
  const rightX = centerX + 10;
  const topY = centerY - 35;
  const bottomY = centerY + 35;
  const pointsStr = `${centerX},${topY} ${leftX},${centerY} ${centerX},${bottomY} ${rightX},${centerY}`;

  let fillColor = color;
  let stripesPatternRect = null;

  switch (paint) {
    case "solid":
      break;
    case "stripes":
      const topLeftX = centerX - 25;
      const topLeftY = 0;
      const clipPathID = `diamond_${centerX}_${centerY}`;
      const clipPath = `url(#${clipPathID})`;
      const stripesPatternID = `stripes_pattern_${color}`;
      const fill = `url(#${stripesPatternID})`;
      stripesPatternRect = (
        <rect
          x={topLeftX}
          y={topLeftY}
          width="50"
          height="100"
          fill={fill}
          clip-path={clipPath}
        ></rect>
      );
      fillColor = "transparent";
      break;
    case "none":
      fillColor = "transparent";
      break;
    default:
      return null;
  }

  return (
    <g>
      {stripesPatternRect}
      <polygon points={pointsStr} stroke={color} fill={fillColor} />
    </g>
  );
}
