import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={45}
        height={44}
        fill="none"
        {...props}
    >
        <path
            fill="#FDFDFD"
            d="M35.18 0h6.747l-14.74 18.638L44.527 44H30.95L20.315 28.618 8.147 44h-6.75l15.765-19.935L.527 0H14.45l9.612 14.06L35.18 0Zm-2.368 39.532h3.739L12.418 4.233H8.406l24.406 35.3Z"
        />
    </svg>
)
export default SvgComponent
