
import { SVGProps, useLayoutEffect, useRef} from "react";
import { gsap, Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

const SvgComponent = (props: SVGProps<SVGSVGElement>)=> {
  const svgRef = useRef<any>(null);
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
      const duration = 0.75;
      const playHardPaths = document.querySelectorAll('#play-hard > path');
      const playHardTextPaths = document.querySelectorAll('#play-hard-text > path');
      const ownHardTextPaths = document.querySelectorAll('#own-hard-text > path');
      const ownHardPaths = document.querySelectorAll('#own-hard > path');
      tl.repeatDelay(1.5);
      tl.to('#pyramid', { ease: Power1.easeInOut, opacity: 1, duration });
      tl.to('#two', { ease: Power1.easeInOut, opacity: 1, duration }, ">");
      tl.to('#three', { ease: Power1.easeInOut, opacity: 1, duration }, ">");
      tl.to('#play-hard', { opacity: 1, ease: Power1.easeInOut, duration, drawSVG: "0%" }, ">");
      tl.from([...playHardPaths], { ease: Power1.easeInOut, duration, drawSVG: "0%" }, "<");
      tl.from([...playHardTextPaths], { ease: Power1.easeInOut, duration, drawSVG: "0%" }, "<");
      tl.to('#dice', { opacity: 1, duration, ease: Power1.easeInOut }, "<" );
      tl.to('#own-hard', { opacity: 1, duration, ease: Power1.easeInOut }, '>');
      tl.from([...ownHardPaths], { duration, ease: Power1.easeInOut, drawSVG: "0%" }, '<');
      tl.from([...ownHardTextPaths], { ease: Power1.easeInOut, duration, drawSVG: "0%" }, ">");
    }, svgRef.current);
    return () => context.revert(); 
  }, [svgRef.current]);

  return ( <svg
    width={575}
    height={286}
    viewBox="0 0 575 286"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <g id="own-the-yard-graphic">
      <g id="pyramid" style={{ opacity: 0 }} >
        <ellipse
          id="one"
          cx={21.0532}
          cy={21.6137}
          rx={21.0532}
          ry={21.6137}
          transform="matrix(-1 0 0 1 245.106 177.772)"
          fill="#F1F1F1"
        />
        <g id="two" style={{ opacity: 0 }}>
          <ellipse
            id="Ellipse 35"
            cx={21.0532}
            cy={21.6137}
            rx={21.0532}
            ry={21.6137}
            transform="matrix(-1 0 0 1 321.213 177.772)"
            fill="#F1F1F1"
          />
          <ellipse
            id="Ellipse 36"
            cx={21.0532}
            cy={21.6137}
            rx={21.0532}
            ry={21.6137}
            transform="matrix(-1 0 0 1 321.213 121.772)"
            fill="#F1F1F1"
          />
        </g>
        <g id="three" style={{ opacity: 0 }}>
          <ellipse
            id="Ellipse 28"
            cx={21.0532}
            cy={21.6137}
            rx={21.0532}
            ry={21.6137}
            transform="matrix(-1 0 0 1 397.319 65)"
            fill="#F1F1F1"
          />
          <ellipse
            id="Ellipse 32"
            cx={21.0532}
            cy={21.6137}
            rx={21.0532}
            ry={21.6137}
            transform="matrix(-1 0 0 1 397.319 121.386)"
            fill="#F1F1F1"
          />
          <ellipse
            id="Ellipse 33"
            cx={21.0532}
            cy={21.6137}
            rx={21.0532}
            ry={21.6137}
            transform="matrix(-1 0 0 1 397.319 177.772)"
            fill="#F1F1F1"
          />
        </g>
        <g id="play-hard" style={{ opacity: 0 }}>
          <g id="play-hard-text">
            <path
              d="M179.113 129.365L181.925 126.623C182.546 126.017 183.205 125.575 183.901 125.297C184.598 125.008 185.304 124.936 186.02 125.078C186.736 125.221 187.431 125.638 188.106 126.329C188.776 127.016 189.183 127.729 189.327 128.468C189.471 129.207 189.403 129.934 189.121 130.649C188.84 131.353 188.389 132.008 187.768 132.614L186.242 134.102L190.076 138.034L188.791 139.287L179.113 129.365ZM185.193 133.028L186.366 131.884C186.792 131.468 187.117 131.029 187.34 130.567C187.569 130.1 187.647 129.623 187.573 129.137C187.505 128.646 187.237 128.16 186.767 127.679C186.293 127.193 185.819 126.917 185.345 126.852C184.87 126.777 184.404 126.855 183.946 127.087C183.488 127.309 183.046 127.627 182.62 128.043L181.447 129.187L185.193 133.028ZM197.834 130.467L196.519 131.75L186.431 121.407L187.746 120.124L197.834 130.467ZM204.679 123.79L203.506 122.588C203.588 122.752 203.639 123.04 203.659 123.451C203.683 123.857 203.616 124.314 203.456 124.822C203.296 125.32 202.991 125.789 202.54 126.229C201.969 126.786 201.318 127.157 200.588 127.341C199.863 127.52 199.126 127.501 198.376 127.283C197.627 127.056 196.932 126.614 196.291 125.958C195.651 125.301 195.229 124.598 195.026 123.848C194.822 123.088 194.819 122.348 195.016 121.628C195.213 120.898 195.598 120.254 196.169 119.697C196.615 119.262 197.079 118.966 197.561 118.808C198.048 118.646 198.492 118.575 198.893 118.595C199.298 118.61 199.592 118.675 199.774 118.791L198.645 117.634L199.938 116.373L205.957 122.544L204.679 123.79ZM197.584 124.697C198.019 125.143 198.493 125.433 199.006 125.568C199.519 125.704 200.019 125.71 200.506 125.587C200.993 125.455 201.414 125.215 201.77 124.868C202.151 124.496 202.403 124.074 202.528 123.6C202.653 123.126 202.644 122.641 202.502 122.144C202.355 121.643 202.068 121.174 201.643 120.738C201.218 120.302 200.759 120.007 200.266 119.852C199.768 119.692 199.28 119.669 198.804 119.782C198.322 119.89 197.891 120.129 197.51 120.501C197.154 120.848 196.907 121.265 196.767 121.754C196.632 122.237 196.626 122.737 196.748 123.253C196.871 123.77 197.149 124.251 197.584 124.697ZM209.102 117.144L206.331 110.137L207.638 108.862L212.543 122.221L211.22 123.512L209.569 119.021L201.009 115.328L202.339 114.03L209.102 117.144Z"
              fill="#F26D21"
            />
            <path
              d="M215.692 100.654C216.098 100.258 216.574 99.9598 217.121 99.7587C217.674 99.5527 218.253 99.5154 218.86 99.6467C219.468 99.7681 220.06 100.124 220.637 100.716L224.39 104.564L223.067 105.855L219.563 102.262C218.967 101.65 218.394 101.344 217.844 101.342C217.295 101.33 216.795 101.544 216.344 101.984C216.043 102.277 215.838 102.643 215.729 103.083C215.614 103.517 215.611 103.97 215.719 104.441C215.827 104.903 216.062 105.319 216.424 105.69L219.745 109.095L218.422 110.385L208.334 100.043L209.657 98.7524L214.796 104.021C214.675 103.807 214.615 103.504 214.615 103.113C214.619 102.717 214.709 102.298 214.883 101.854C215.057 101.411 215.326 101.011 215.692 100.654ZM231.119 98.001L229.946 96.7984C230.028 96.9628 230.079 97.2505 230.099 97.6616C230.123 98.0678 230.056 98.5249 229.896 99.0327C229.736 99.5307 229.431 99.9996 228.98 100.44C228.409 100.997 227.758 101.367 227.028 101.551C226.303 101.73 225.566 101.711 224.816 101.494C224.067 101.267 223.372 100.825 222.731 100.169C222.091 99.5122 221.669 98.8089 221.466 98.0589C221.262 97.299 221.259 96.559 221.456 95.8387C221.653 95.1085 222.038 94.4648 222.609 93.9077C223.055 93.4726 223.519 93.1765 224.001 93.0191C224.488 92.8569 224.932 92.7857 225.333 92.8055C225.739 92.8205 226.032 92.886 226.214 93.0021L225.085 91.8446L226.378 90.5836L232.397 96.7547L231.119 98.001ZM224.024 98.9076C224.459 99.3536 224.933 99.6441 225.446 99.7792C225.96 99.9143 226.459 99.9205 226.946 99.7979C227.433 99.6654 227.854 99.4256 228.21 99.0786C228.591 98.7071 228.843 98.2845 228.968 97.8109C229.093 97.3372 229.084 96.852 228.942 96.3552C228.795 95.8534 228.508 95.3845 228.083 94.9486C227.658 94.5126 227.199 94.2173 226.706 94.0627C226.208 93.903 225.72 93.8796 225.244 93.9925C224.762 94.1003 224.331 94.34 223.95 94.7114C223.594 95.0585 223.347 95.4761 223.207 95.9645C223.072 96.4479 223.066 96.9478 223.188 97.4641C223.311 97.9805 223.589 98.4616 224.024 98.9076ZM235.43 93.7964L234.13 95.0647L228.11 88.8937L229.411 87.6253L230.452 88.6926L230.414 88.7293C230.312 88.5746 230.246 88.3213 230.216 87.9695C230.185 87.6176 230.235 87.2272 230.364 86.7981C230.493 86.3691 230.753 85.9639 231.144 85.5827C231.43 85.3041 231.719 85.0998 232.013 84.9698C232.307 84.8299 232.535 84.7536 232.699 84.7407L233.221 86.3437C233.082 86.3419 232.891 86.3915 232.647 86.4924C232.399 86.5883 232.144 86.7634 231.883 87.0175C231.553 87.3401 231.37 87.719 231.335 88.1542C231.3 88.5894 231.361 89.0134 231.519 89.4262C231.678 89.8291 231.877 90.1534 232.116 90.3989L235.43 93.7964ZM242.165 87.579C241.599 88.1313 240.958 88.4921 240.243 88.6614C239.533 88.8258 238.811 88.792 238.076 88.5601C237.342 88.3183 236.654 87.8692 236.014 87.2128C235.374 86.5563 234.944 85.8604 234.726 85.1251C234.507 84.3798 234.489 83.6544 234.671 82.9488C234.854 82.2333 235.228 81.5994 235.794 81.0471C236.25 80.6023 236.729 80.2915 237.231 80.1146C237.728 79.9327 238.183 79.8468 238.593 79.8568C239.004 79.8669 239.3 79.9349 239.482 80.0609L234.284 74.7317L235.599 73.4487L245.687 83.7915L244.394 85.0525L243.221 83.8498C243.332 84.074 243.383 84.4013 243.372 84.8318C243.367 85.2575 243.272 85.7167 243.088 86.2094C242.904 86.7021 242.596 87.1586 242.165 87.579ZM241.41 86.2033C241.791 85.8319 242.051 85.402 242.191 84.9137C242.331 84.4253 242.334 83.9279 242.202 83.4213C242.07 82.9049 241.791 82.4287 241.366 81.9927C240.941 81.5567 240.474 81.2688 239.966 81.1288C239.458 80.9789 238.958 80.9677 238.466 81.0952C237.97 81.2178 237.531 81.4648 237.15 81.8362C236.8 82.1784 236.562 82.5863 236.437 83.0599C236.312 83.5336 236.316 84.0237 236.449 84.5302C236.586 85.0319 236.872 85.5057 237.307 85.9517C237.742 86.3977 238.209 86.6956 238.707 86.8453C239.21 86.9902 239.7 87.0062 240.176 86.8934C240.648 86.7755 241.059 86.5455 241.41 86.2033Z"
              fill="#FDFDFD"
            />
          </g>
          <path
            id="Vector 249"
            d="M200 158.932C201.941 158.484 203.837 156.495 205.515 155.456C207.765 154.063 209.934 152.605 212.042 151.001C214.888 148.837 217.382 146.254 220.234 144.116C223.679 141.532 226.722 137.917 229.633 134.749C233.365 130.688 237.889 127 242.066 123.392C245.118 120.757 248.501 118.576 251.4 115.756C253.201 114.004 255.825 113.004 257.421 111.04C258.608 109.58 259.462 108.291 260.93 107.091C261.661 106.492 263.874 104.526 263.736 104.595"
            stroke="#FDFDFD"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            id="Vector 250"
            d="M246.113 100.483C250.772 100.483 255.649 100.691 260.179 99.4711C261.72 99.0563 263.832 99.0142 265.433 99.0142C266.344 99.0142 266.855 98.8354 267.261 99.7484C267.664 100.656 268.142 101.84 268.142 102.832C268.142 105.713 268.729 108.663 268.729 111.513C268.729 113.582 269.609 117.222 270.492 118.987"
            stroke="#FDFDFD"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </g>
      </g>
      <g id="dice" style={{ opacity: 0 }}>
        <g >
          <ellipse
            id="Ellipse 35_2"
            cx={21.0532}
            cy={21.6137}
            rx={21.0532}
            ry={21.6137}
            transform="matrix(-1 0 0 1 321.213 177.772)"
            fill="#F1F1F1"
          />
          <ellipse
            id="Ellipse 36_2"
            cx={21.0532}
            cy={21.6137}
            rx={21.0532}
            ry={21.6137}
            transform="matrix(-1 0 0 1 321.213 121.772)"
            fill="#F1F1F1"
          />
          <ellipse
            id="Ellipse 37"
            cx={21.0532}
            cy={21.6137}
            rx={21.0532}
            ry={21.6137}
            transform="matrix(-1 0 0 1 321.106 66)"
            fill="#F1F1F1"
          />
        </g>
        <g >
          <ellipse
            id="Ellipse 28_2"
            cx={21.0532}
            cy={21.6137}
            rx={21.0532}
            ry={21.6137}
            transform="matrix(-1 0 0 1 397.319 65)"
            fill="#F1F1F1"
          />
          <ellipse
            id="Ellipse 32_2"
            cx={21.0532}
            cy={21.6137}
            rx={21.0532}
            ry={21.6137}
            transform="matrix(-1 0 0 1 397.319 121.386)"
            fill="#F1F1F1"
          />
          <ellipse
            id="Ellipse 33_2"
            cx={21.0532}
            cy={21.6137}
            rx={21.0532}
            ry={21.6137}
            transform="matrix(-1 0 0 1 397.319 177.772)"
            fill="#F26D21"
          />
        </g>
        <g id="own-hard" style={{ opacity: 0 }}>
          <path
            id="Vector 251"
            d="M396.553 175.745C388.294 175.745 380.766 170.129 372.429 169.842C369.885 169.754 367.322 169.842 364.776 169.842C362.531 169.842 358.391 173.608 356.504 174.834C349.803 179.19 346.045 189.223 346.045 196.881C346.045 200.72 345.933 203.708 347.357 207.267C349.013 211.408 352.514 214.018 354.901 217.69C359.144 224.218 367.564 225.597 374.652 225.597C382.515 225.597 392.05 225.176 397.865 219.038C402.899 213.725 400.273 202.808 399.87 196.553C399.551 191.622 397.209 187.274 397.209 182.305"
            stroke="#FDFDFD"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            id="Vector 252"
            d="M401.801 199.36C406.143 199.36 410.205 198.813 414.483 198.048C419.838 197.089 425.274 197.392 430.699 197.392C435.544 197.392 440.249 198.048 445.093 198.048"
            stroke="#FDFDFD"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            id="Vector 253"
            d="M439.846 189.52C441.466 189.52 458.796 193.9 458.796 195.132C458.796 197.617 453.755 201.824 452.345 203.587C450.583 205.79 448.932 208.082 447.717 210.511"
            stroke="#FDFDFD"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <g id="own-hard-text">
            <path
              d="M469.736 197.059C469.736 198.088 469.95 199.016 470.377 199.842C470.811 200.668 471.406 201.326 472.162 201.816C472.918 202.299 473.786 202.54 474.766 202.54C475.753 202.54 476.621 202.299 477.37 201.816C478.126 201.326 478.717 200.668 479.144 199.842C479.571 199.016 479.785 198.088 479.785 197.059C479.785 196.03 479.571 195.106 479.144 194.287C478.717 193.461 478.126 192.807 477.37 192.324C476.621 191.841 475.753 191.599 474.766 191.599C473.786 191.599 472.918 191.841 472.162 192.324C471.406 192.807 470.811 193.461 470.377 194.287C469.95 195.106 469.736 196.03 469.736 197.059ZM467.878 197.059C467.878 196.051 468.049 195.113 468.392 194.245C468.742 193.37 469.229 192.607 469.852 191.956C470.475 191.305 471.203 190.798 472.036 190.434C472.876 190.07 473.786 189.888 474.766 189.888C475.753 189.888 476.663 190.07 477.496 190.434C478.336 190.798 479.064 191.305 479.68 191.956C480.303 192.607 480.786 193.37 481.129 194.245C481.472 195.113 481.643 196.051 481.643 197.059C481.643 198.074 481.472 199.019 481.129 199.894C480.793 200.762 480.313 201.525 479.69 202.183C479.074 202.834 478.35 203.342 477.517 203.706C476.684 204.07 475.767 204.252 474.766 204.252C473.765 204.252 472.841 204.07 471.994 203.706C471.154 203.342 470.426 202.834 469.81 202.183C469.194 201.525 468.718 200.762 468.382 199.894C468.046 199.019 467.878 198.074 467.878 197.059ZM489.364 197.542L487.169 204H485.279L482.938 195.379H484.88L486.445 202.005L488.608 195.547H490.12L492.262 202.005L493.837 195.379H495.79L493.448 204H491.558L489.364 197.542ZM502.407 195.127C502.974 195.127 503.524 195.246 504.056 195.484C504.595 195.722 505.036 196.1 505.379 196.618C505.729 197.129 505.904 197.798 505.904 198.624V204H504.056V198.981C504.056 198.127 503.856 197.507 503.457 197.122C503.058 196.73 502.544 196.534 501.914 196.534C501.501 196.534 501.102 196.653 500.717 196.891C500.339 197.122 500.027 197.444 499.782 197.857C499.537 198.263 499.415 198.725 499.415 199.243V204H497.588V195.379H499.415V196.912C499.478 196.674 499.649 196.415 499.929 196.135C500.209 195.855 500.566 195.617 501 195.421C501.434 195.225 501.903 195.127 502.407 195.127Z"
              fill="#F26D21"
            />
            <path
              d="M518.405 195.127C518.972 195.127 519.521 195.246 520.053 195.484C520.592 195.722 521.033 196.1 521.376 196.618C521.726 197.129 521.901 197.798 521.901 198.624V204H520.053V198.981C520.053 198.127 519.857 197.507 519.465 197.122C519.08 196.73 518.573 196.534 517.943 196.534C517.523 196.534 517.12 196.653 516.735 196.891C516.35 197.122 516.032 197.444 515.78 197.857C515.535 198.263 515.412 198.725 515.412 199.243V204H513.564V189.552H515.412V196.912C515.475 196.674 515.643 196.415 515.916 196.135C516.196 195.855 516.553 195.617 516.987 195.421C517.421 195.225 517.894 195.127 518.405 195.127ZM531.301 204V202.32C531.245 202.495 531.08 202.736 530.807 203.044C530.541 203.352 530.174 203.632 529.705 203.884C529.243 204.129 528.697 204.252 528.067 204.252C527.269 204.252 526.544 204.063 525.893 203.685C525.249 203.307 524.735 202.778 524.35 202.099C523.972 201.413 523.783 200.612 523.783 199.695C523.783 198.778 523.972 197.98 524.35 197.301C524.735 196.615 525.249 196.083 525.893 195.705C526.544 195.32 527.269 195.127 528.067 195.127C528.69 195.127 529.229 195.239 529.684 195.463C530.146 195.687 530.513 195.946 530.786 196.24C531.066 196.534 531.231 196.786 531.28 196.996V195.379H533.086V204H531.301ZM525.589 199.695C525.589 200.318 525.725 200.857 525.998 201.312C526.271 201.767 526.625 202.12 527.059 202.372C527.5 202.617 527.969 202.74 528.466 202.74C528.998 202.74 529.474 202.614 529.894 202.362C530.314 202.11 530.646 201.756 530.891 201.301C531.136 200.839 531.259 200.304 531.259 199.695C531.259 199.086 531.136 198.554 530.891 198.099C530.646 197.637 530.314 197.28 529.894 197.028C529.474 196.769 528.998 196.639 528.466 196.639C527.969 196.639 527.5 196.765 527.059 197.017C526.625 197.269 526.271 197.623 525.998 198.078C525.725 198.533 525.589 199.072 525.589 199.695ZM537.323 204H535.506V195.379H537.323V196.87H537.27C537.305 196.688 537.435 196.461 537.659 196.188C537.883 195.915 538.191 195.67 538.583 195.453C538.975 195.236 539.444 195.127 539.99 195.127C540.389 195.127 540.739 195.183 541.04 195.295C541.348 195.4 541.565 195.505 541.691 195.61L540.945 197.122C540.847 197.024 540.676 196.926 540.431 196.828C540.186 196.723 539.881 196.671 539.517 196.671C539.055 196.671 538.66 196.814 538.331 197.101C538.002 197.388 537.75 197.735 537.575 198.141C537.407 198.54 537.323 198.911 537.323 199.254V204ZM546.485 204.252C545.694 204.252 544.984 204.063 544.354 203.685C543.731 203.307 543.237 202.778 542.873 202.099C542.516 201.413 542.338 200.612 542.338 199.695C542.338 198.778 542.516 197.98 542.873 197.301C543.237 196.615 543.731 196.083 544.354 195.705C544.984 195.32 545.694 195.127 546.485 195.127C547.122 195.127 547.682 195.239 548.165 195.463C548.648 195.68 549.033 195.936 549.32 196.23C549.607 196.524 549.772 196.779 549.814 196.996V189.552H551.651V204H549.845V202.32C549.768 202.558 549.576 202.827 549.268 203.128C548.967 203.429 548.578 203.692 548.102 203.916C547.626 204.14 547.087 204.252 546.485 204.252ZM546.905 202.74C547.437 202.74 547.924 202.614 548.365 202.362C548.806 202.11 549.156 201.756 549.415 201.301C549.681 200.839 549.814 200.304 549.814 199.695C549.814 199.086 549.681 198.554 549.415 198.099C549.156 197.637 548.806 197.28 548.365 197.028C547.924 196.769 547.437 196.639 546.905 196.639C546.415 196.639 545.96 196.765 545.54 197.017C545.12 197.269 544.781 197.623 544.522 198.078C544.27 198.533 544.144 199.072 544.144 199.695C544.144 200.318 544.27 200.857 544.522 201.312C544.781 201.767 545.12 202.12 545.54 202.372C545.96 202.617 546.415 202.74 546.905 202.74Z"
              fill="#FDFDFD"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)}
export default SvgComponent
