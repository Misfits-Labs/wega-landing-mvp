import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M37.4838 15.1992L8.26941 25.0992L18.3821 28.3992M37.4838 15.1992L18.3821 28.3992M37.4838 15.1992L28.4948 38.2992L18.3821 28.3992"
      stroke="#FDFDFD"
      strokeWidth={2.38333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.9999 46C36.4111 46 46.4726 36.1502 46.4726 24C46.4726 11.8497 36.4111 2 23.9999 2C11.5887 2 1.52734 11.8497 1.52734 24C1.52734 36.1502 11.5887 46 23.9999 46Z"
      stroke="#FDFDFD"
      strokeWidth={2.38333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
