import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 168 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_b_4545_10357)">
      <g clipPath="url(#clip0_4545_10357)">
        <rect
          y={31.3926}
          width={139.821}
          height={139.821}
          rx={69.9106}
          transform="rotate(-12.7571 0 31.3926)"
          fill="white"
          fillOpacity={0.1}
        />
        <g clipPath="url(#clip1_4545_10357)">
          <path
            d="M94.3099 131.345C120.381 125.442 136.73 99.5229 130.828 73.4522C124.925 47.3814 99.0055 31.0319 72.9347 36.9345C46.864 42.8371 30.5145 68.7566 36.4171 94.8273C42.3196 120.898 68.2391 137.248 94.3099 131.345Z"
            fill="#627EEA"
          />
          <path
            d="M77.0759 48.4033L83.0008 74.5727L107.357 79.4485L77.0759 48.4033Z"
            fill="white"
            fillOpacity={0.602}
          />
          <path
            d="M77.0759 48.4032L63.117 89.4646L83.0008 74.5726L77.0759 48.4032Z"
            fill="white"
          />
          <path
            d="M89.0782 101.415L93.104 119.196L108.305 83.5636L89.0782 101.415Z"
            fill="white"
            fillOpacity={0.602}
          />
          <path
            d="M93.104 119.196L89.0775 101.412L64.0496 93.5835L93.104 119.196Z"
            fill="white"
          />
          <path
            d="M88.1463 97.2991L107.357 79.4485L83.0022 74.5786L88.1463 97.2991Z"
            fill="white"
            fillOpacity={0.2}
          />
          <path
            d="M63.117 89.4646L88.1462 97.2989L83.0022 74.5785L63.117 89.4646Z"
            fill="white"
            fillOpacity={0.602}
          />
        </g>
      </g>
      <rect
        x={0.770057}
        y={31.8783}
        width={138.534}
        height={138.534}
        rx={69.2669}
        transform="rotate(-12.7571 0.770057 31.8783)"
        stroke="#787878"
        strokeWidth={1.28758}
      />
    </g>
    <defs>
      <filter
        id="filter0_b_4545_10357"
        x={-25.7516}
        y={-25.234}
        width={218.748}
        height={218.748}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={12.8758} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_4545_10357"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_4545_10357"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_4545_10357">
        <rect
          y={31.3926}
          width={139.821}
          height={139.821}
          rx={69.9106}
          transform="rotate(-12.7571 0 31.3926)"
          fill="white"
        />
      </clipPath>
      <clipPath id="clip1_4545_10357">
        <rect
          width={96.8}
          height={96.8}
          fill="white"
          transform="translate(25.7295 47.6221) rotate(-12.7571)"
        />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
