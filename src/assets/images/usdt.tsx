import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 141 141"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_b_4420_35611)">
      <g clipPath="url(#clip0_4420_35611)">
        <rect
          x={0.402344}
          y={0.517578}
          width={139.819}
          height={139.819}
          rx={69.9096}
          fill="white"
          fillOpacity={0.1}
        />
        <g filter="url(#filter1_d_4420_35611)">
          <path
            d="M70.312 118.826C97.042 118.826 118.711 97.1573 118.711 70.4273C118.711 43.6973 97.042 22.0283 70.312 22.0283C43.582 22.0283 21.9131 43.6973 21.9131 70.4273C21.9131 97.1573 43.582 118.826 70.312 118.826Z"
            fill="#26A17B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M76.1258 74.6111V74.6051C75.793 74.6293 74.0779 74.7321 70.2513 74.7321C67.1961 74.7321 65.0454 74.6414 64.2892 74.6051V74.6142C52.5282 74.0969 43.7499 72.049 43.7499 69.5988C43.7499 67.1516 52.5282 65.1038 64.2892 64.5774V72.5754C65.0575 72.6298 67.2597 72.7599 70.3028 72.7599C73.9538 72.7599 75.7839 72.6086 76.1258 72.5784V64.5835C87.8625 65.1068 96.6197 67.1547 96.6197 69.5988C96.6197 72.049 87.8625 74.0908 76.1258 74.6111ZM76.1258 63.7516V56.5946H92.5027V45.6807H47.9122V56.5946H64.2892V63.7486C50.9795 64.3596 40.97 66.9974 40.97 70.1554C40.97 73.3134 50.9795 75.9482 64.2892 76.5622V99.4973H76.1258V76.5562C89.4143 75.9451 99.3996 73.3104 99.3996 70.1554C99.3996 67.0004 89.4143 64.3657 76.1258 63.7516Z"
            fill="white"
          />
        </g>
      </g>
      <rect
        x={1.04613}
        y={1.16137}
        width={138.532}
        height={138.532}
        rx={69.2658}
        stroke="#787878"
        strokeWidth={1.28758}
      />
    </g>
    <defs>
      <filter
        id="filter0_b_4420_35611"
        x={-25.3492}
        y={-25.234}
        width={191.322}
        height={191.322}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={12.8758} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_4420_35611"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_4420_35611"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_4420_35611"
        x={0.402441}
        y={11.273}
        width={139.819}
        height={139.819}
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
        <feOffset dy={10.7553} />
        <feGaussianBlur stdDeviation={10.7553} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4420_35611"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4420_35611"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_4420_35611">
        <rect
          x={0.402344}
          y={0.517578}
          width={139.819}
          height={139.819}
          rx={69.9096}
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
