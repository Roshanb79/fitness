import React from 'react'

export function MsLogo(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={51} height={24} className={props.className}>
    <text
      data-name="M&amp;S"
      transform="translate(0 19)"
      fill="#ffffff"
      fontSize={20}
      fontFamily="Swiss721BT-Black, Swis721 Blk BT"
      fontWeight={800}
    >
      <tspan x={0} y={0}>
        {"M&S"}
      </tspan>
    </text>
  </svg>

  )
}

