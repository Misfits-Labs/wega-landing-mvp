import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={74}
    height={54}
    viewBox="0 0 74 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_4753_12611)">
      <path
        d="M11 10.799C13.9285 17.6322 16.3083 25.1532 20.331 31.4107C20.491 31.6596 20.7597 32.1482 21.0892 31.7821C21.5382 31.2832 21.7581 30.4328 21.9867 29.8478C23.0426 27.1459 24.2598 24.5432 25.6077 21.9714C28.6901 16.09 31.9328 10.1153 35.9754 4.82596C36.376 4.30186 36.8667 3.29712 37.4609 3"
        stroke="#FDFDFD"
        strokeWidth={5.91946}
        strokeLinecap="round"
      />
      <path
        d="M34.3968 31.9677C35.1928 32.0672 33.1822 33.3604 32.6018 33.3604C31.6038 33.3604 33.0688 31.5382 33.3136 31.3642C34.1504 30.7697 35.1158 30.737 35.7895 31.4107"
        stroke="#FDFDFD"
        strokeWidth={5.91946}
        strokeLinecap="round"
      />
      <path
        d="M62.3466 3.2466C60.3503 3.2466 57.2621 3.23218 55.3961 3.98651C53.9193 4.58349 52.2736 5.96589 51.3599 7.17706C49.5304 9.60228 49.0271 8.88689 48.49 11.8791C48.0519 14.3203 49.8698 17.7166 51.7623 17.9935C54.8256 18.4418 58.6526 17.9709 61.0004 20.423C68.428 28.1808 46.3933 33.4706 42.5706 34.9997"
        stroke="#FDFDFD"
        strokeWidth={5.91946}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_4753_12611"
        x={0.146933}
        y={0.0395508}
        width={73.2244}
        height={53.7059}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={7.89262} />
        <feGaussianBlur stdDeviation={3.94631} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4753_12611"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4753_12611"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default SvgComponent
