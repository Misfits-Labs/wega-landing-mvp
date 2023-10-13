import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        fill="none"
        {...props}
    >
        <path
            stroke="#FDFDFD"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.383}
            d="M37.484 15.2 8.269 25.1l10.113 3.3m19.102-13.2L18.382 28.4m19.102-13.2-8.99 23.1-10.112-9.9"
        />
        <path
            stroke="#FDFDFD"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.383}
            d="M24 46c12.411 0 22.473-9.85 22.473-22S36.41 2 24 2 1.527 11.85 1.527 24 11.59 46 24 46Z"
        />
    </svg>
)
export default SvgComponent
