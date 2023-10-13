import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={123}
        height={159}
        fill="none"
        {...props}
    >
        <g filter="url(#a)">
            <rect
                width={121.807}
                height={158.207}
                x={0.932}
                y={0.714}
                fill="#fff"
                fillOpacity={0.1}
                rx={8.7}
            />
            <rect
                width={104.406}
                height={104.406}
                x={9.632}
                y={9.415}
                fill="url(#b)"
                rx={4.35}
            />
            <path
                fill="#FDFDFD"
                d="m12.171 124.24.153.028v7.253h-2.08v-9.188h2.839l3.724 7.239-.153.028v-7.267h2.08v9.188h-2.853l-3.71-7.281Zm11.327 7.448c-.627 0-1.183-.128-1.67-.383a2.973 2.973 0 0 1-1.142-1.065c-.274-.454-.41-.974-.41-1.559s.136-1.104.41-1.559a2.995 2.995 0 0 1 1.142-1.086c.487-.264 1.044-.397 1.67-.397.626 0 1.179.133 1.656.397.479.265.852.627 1.121 1.086.27.455.404.974.404 1.559s-.135 1.105-.404 1.559c-.269.45-.642.805-1.12 1.065-.478.255-1.03.383-1.657.383Zm0-1.74c.241 0 .45-.053.626-.16.177-.107.314-.258.411-.453.098-.194.146-.415.146-.661 0-.25-.049-.473-.146-.668a1.123 1.123 0 0 0-.41-.459 1.143 1.143 0 0 0-.627-.167c-.241 0-.453.055-.634.167a1.173 1.173 0 0 0-.417.459 1.476 1.476 0 0 0-.146.668c0 .246.049.467.146.661.102.195.241.346.418.453.18.107.392.16.633.16Zm6.565-1.497c0 .455.086.819.258 1.093.171.269.459.404.863.404.413 0 .703-.135.87-.404.171-.274.257-.638.257-1.093v-2.644H34.4v2.867c0 .613-.127 1.146-.383 1.601-.25.45-.614.798-1.092 1.044-.478.246-1.058.369-1.74.369-.678 0-1.256-.123-1.733-.369a2.556 2.556 0 0 1-1.093-1.044c-.25-.455-.376-.988-.376-1.601v-2.867h2.081v2.644Zm9.833-2.812c.399 0 .789.082 1.17.244.38.162.693.42.939.773.246.348.369.807.369 1.378v3.487H40.25v-3.139c0-.408-.097-.715-.292-.919-.195-.209-.45-.313-.766-.313-.209 0-.406.056-.592.167-.18.107-.33.26-.445.459-.111.195-.167.42-.167.675v3.07h-2.116v-5.714h2.116v.842c.056-.153.172-.307.348-.46a2.22 2.22 0 0 1 .675-.389c.274-.107.568-.161.884-.161Zm10.92-3.306h1.42l-2.429 9.188h-1.413l2.422-9.188Zm2.924 0h1.413l-2.43 9.188h-1.412l2.429-9.188Zm-4.684 2.402h6.577l-.41 1.364h-6.578l.41-1.364Zm-.724 3.007h6.577l-.41 1.357H47.92l.41-1.357Zm8.93-3.571c.051-.186.151-.395.3-.627.148-.232.35-.452.605-.661.26-.209.576-.38.947-.515.376-.134.81-.202 1.301-.202.585 0 1.102.109 1.553.327a2.59 2.59 0 0 1 1.071.898c.26.385.39.836.39 1.351 0 .31-.056.596-.167.856a1.997 1.997 0 0 1-.431.64 1.258 1.258 0 0 1-.557.334c.227.028.454.132.682.313.232.181.427.423.585.724.162.302.243.657.243 1.065 0 .585-.148 1.105-.445 1.559-.293.45-.694.805-1.204 1.065-.51.26-1.096.39-1.754.39-.682 0-1.263-.121-1.74-.362-.474-.241-.852-.536-1.135-.884-.279-.348-.464-.684-.557-1.009l1.907-.947c.056.2.149.409.279.627.134.218.306.403.515.557.209.148.45.222.724.222.283 0 .524-.055.723-.167.2-.111.353-.262.46-.452.111-.195.167-.418.167-.668 0-.26-.063-.476-.188-.648a1.09 1.09 0 0 0-.487-.383 1.777 1.777 0 0 0-.675-.125h-.181v-1.489h.236c.214 0 .406-.042.578-.126a.999.999 0 0 0 .404-.369c.102-.162.153-.352.153-.57 0-.293-.1-.541-.3-.745-.199-.209-.489-.313-.87-.313a1.409 1.409 0 0 0-1.044.431 1.717 1.717 0 0 0-.278.376 1.28 1.28 0 0 0-.125.327l-1.685-.8Zm8.542 7.35 2.833-3.313a.896.896 0 0 1-.293.167c-.139.051-.322.076-.55.076-.477 0-.94-.122-1.385-.368a3.04 3.04 0 0 1-1.092-1.051c-.283-.46-.425-1.007-.425-1.643 0-.627.153-1.181.46-1.664.31-.482.723-.863 1.238-1.141a3.536 3.536 0 0 1 1.713-.418c.64 0 1.218.132 1.733.397.515.26.926.638 1.232 1.135.31.491.466 1.081.466 1.767 0 .757-.123 1.395-.369 1.915a6.456 6.456 0 0 1-.842 1.343l-2.283 2.798h-2.436Zm2.506-4.733a1.444 1.444 0 0 0 1.267-.724c.134-.223.201-.469.201-.738s-.067-.515-.202-.738a1.452 1.452 0 0 0-1.266-.723c-.27 0-.515.067-.738.201-.218.13-.395.307-.53.529-.13.219-.194.462-.194.731a1.439 1.439 0 0 0 .73 1.267c.224.13.467.195.732.195Zm8.255-2.854c-.307 0-.578.074-.815.223-.232.144-.429.313-.591.508a3.638 3.638 0 0 0-.501.814l-1.782-.814c.009-.06.053-.181.132-.362.079-.186.204-.399.376-.64.171-.242.397-.476.675-.703a3.57 3.57 0 0 1 1.044-.564c.413-.153.9-.23 1.462-.23.65 0 1.188.093 1.615.279.431.185.77.429 1.016.73.25.297.429.62.536.968.106.348.16.682.16 1.002 0 .399-.081.787-.244 1.163a4.891 4.891 0 0 1-.62 1.058 8.129 8.129 0 0 1-.82.911 11.76 11.76 0 0 1-1.518 1.212c-.186.12-.297.194-.334.222h3.46v1.81h-6.592v-1.65l.473-.341c.246-.176.54-.396.884-.661.348-.264.708-.554 1.079-.87.376-.32.724-.65 1.044-.988.325-.339.59-.671.793-.996.204-.324.307-.624.307-.898 0-.431-.11-.735-.328-.911-.213-.181-.517-.272-.911-.272ZM10.716 141.496c.028-.107.102-.251.223-.432.12-.181.292-.362.515-.543.227-.185.508-.341.842-.466.339-.125.74-.188 1.204-.188.585 0 1.084.109 1.497.327.417.214.735.506.953.877.223.371.334.789.334 1.253 0 .357-.07.68-.208.967-.14.288-.32.525-.543.71-.218.181-.45.293-.696.334.26.024.524.126.793.307.27.181.494.429.675.745.181.315.272.693.272 1.134 0 .543-.133 1.033-.397 1.469-.26.431-.624.772-1.093 1.023-.464.25-1.002.376-1.615.376-.603 0-1.118-.102-1.545-.307a3.155 3.155 0 0 1-1.016-.758c-.255-.297-.43-.585-.522-.863l1.093-.564c.07.204.188.418.355.64.171.218.392.404.661.557.274.153.594.23.96.23.409 0 .755-.081 1.038-.244.287-.167.505-.387.654-.661.148-.278.223-.587.223-.926 0-.376-.09-.684-.272-.926a1.526 1.526 0 0 0-.703-.529 2.525 2.525 0 0 0-.94-.174h-.18v-.918h.236c.297 0 .57-.061.822-.181.255-.121.459-.297.612-.529.158-.232.237-.508.237-.829 0-.426-.142-.788-.425-1.085-.283-.297-.71-.446-1.28-.446-.316 0-.585.047-.808.139a1.666 1.666 0 0 0-.529.341c-.135.13-.237.253-.306.369a.977.977 0 0 0-.112.251l-1.009-.48Zm7.017 3.139c0-.817.098-1.525.293-2.123.2-.599.464-1.093.793-1.483a3.295 3.295 0 0 1 1.114-.877c.413-.19.837-.285 1.273-.285.437 0 .861.095 1.274.285.413.191.782.483 1.107.877.33.39.59.884.78 1.483.194.598.292 1.306.292 2.123 0 .83-.098 1.547-.293 2.151-.19.598-.45 1.09-.78 1.475a3.137 3.137 0 0 1-1.106.849 3.07 3.07 0 0 1-1.274.279c-.436 0-.86-.093-1.273-.279a3.289 3.289 0 0 1-1.114-.849c-.33-.385-.594-.877-.793-1.475-.195-.604-.293-1.321-.293-2.151Zm1.218 0c0 .821.102 1.506.307 2.053.204.543.475.949.814 1.218.343.269.722.404 1.134.404a1.77 1.77 0 0 0 1.128-.404c.339-.269.61-.675.814-1.218.205-.547.307-1.232.307-2.053 0-.812-.102-1.49-.307-2.033-.204-.547-.475-.96-.814-1.239a1.735 1.735 0 0 0-1.128-.417c-.412 0-.79.139-1.134.417-.339.279-.61.692-.814 1.239-.205.543-.307 1.221-.307 2.033Zm8.437 4.754a.916.916 0 0 1-.661-.272.914.914 0 0 1-.272-.661c0-.264.09-.487.272-.668a.903.903 0 0 1 .661-.279c.265 0 .487.093.668.279.181.181.272.404.272.668 0 .255-.09.476-.272.661a.909.909 0 0 1-.668.272Zm3.091-9.355h5.938v.856l-4.733 8.332h-1.337l4.664-8.116h-4.532v-1.072Zm10.665 0h5.429v1.079H42.32v2.979h4.17v1.051h-4.17v3h4.253v1.079h-5.43v-9.188Zm9.207 1.079h-2.478v-1.079h6.153v1.079h-2.478v8.109H50.35v-8.109Zm10.567 4.037h-4.405v4.072h-1.177v-9.188h1.177v4.044h4.405v-4.044h1.177v9.188h-1.177v-4.072Z"
            />
            <rect
                width={120.937}
                height={157.337}
                x={1.367}
                y={1.149}
                stroke="#787878"
                strokeWidth={0.87}
                rx={8.265}
            />
        </g>
        <defs>
            <pattern
                id="b"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <use xlinkHref="#c" transform="matrix(.00325 0 0 .00325 0 -.01)" />
            </pattern>
            <filter
                id="a"
                width={156.609}
                height={193.009}
                x={-16.469}
                y={-16.687}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={8.7} />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_4420_35621"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_4420_35621"
                    result="shape"
                />
            </filter>
            <image
                xlinkHref="data:image/jpeg;base64,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LWKcU5jS88ApBEIAyRmJggzaoqCCmYmBVturQoCCookBT8e+1dFQQUzEwKtt1aECWGgC3QLI2NmeAQAYABoF0PNQiTgnUD9YzBGyF3GMyNeCl54D1xOiH18LoVgtnMEBB69sFkpGWHOAIAB1ElMjCDk+TAaorBbOYICD17YLJSHhDQUTSm5T0fY4KXn+Gc0RoATV145yBmaD5q2lbStpW0raVtK2lbStpW0raVtK2lbStpW0raTFMUxTFMeR3v4tloZoDQAkt9Mm/EyZMjnzAezQIUFdbqPiugV0H4AtxB5QA6dldhy2/sjJwgaKzD87sUZMEjTD2PXL5ox8y2iKhoQE2FwInFeYGKc9dPFkSBHMgDgc9dPFlfavtWYiIAIRHbAiACMT2VmctX8cFRJh1FJ/B6v44KiROeung6JCjmQRwOeung6vtX3gaEYgCcyttW2rb5av4wbCokwZNwsmRtx9iBfN9Vdn1XZ9V2feWp+E2NRJg6fhdPzRDCCbVNf4pr/MKiRAsgJVmVmVmVmRLMCMbMsoGGAiWEVNf5y1LxwVEn8OtqXhEQREFdsKiRAshIV2V2V2V2RLMScbsiSS5jgCQXEFduWPDaPynkAxqJP49VEnM//aAAwDAQACAAMAAAAQ8888888888888888888888888888888888888888888888818Iy888798888888888828/X88zwf8888888xx99yDwRwwFM8888888dCD8+//wDm4gPfPPPPPPPHYi0P/wD/AMmMV/8APPPPPPPOX/Hlbw08/wCsjzzzzzzzzj0E9TwAYDyivzzzzzzzzxdRBX4JCX6KjPPfzzzzyz0O/wD/AP7nP/8A8or3zzzzzrIP70awH0jP0wz3zzzzzw4P7zzzzzzzzLLTzzzzzzwN/wC+++388+8888888888+uU+++OJdI88888888888NtSU+wn/u8888888888878Sf+59qC88888888888Z1H99t9S588888888888R/H99f9WV888888888883fV++++++888888/8QAKBEBAAIAAwgDAQEBAQAAAAAAAQARITFhEDBBUaGxwdEgcZGB8PFQ/9oACAEDAQE/EP8AzxGjjsEsV/JYot7+AshERp3iorBWvvDzNbP8GjOgd9tYNR1dd4efENQZ7jCAZpYfexlE+g4+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"
                id="c"
                width={308}
                height={314}
            />
        </defs>
    </svg>
)
export default SvgComponent
