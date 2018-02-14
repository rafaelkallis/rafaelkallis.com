/**
 * @file index.js
 * @author Rafael Kallis <rk@rafaelkallis.com>
 */

import React from "react";
import "./index.css";

//export default function Front () {

	//if (window.innerWidth > 750) {
		//return (
			//<div>
				//<div className={'text-terminal'}>
					//{`$\t`}<span className={'cursor'}>|</span>
				//</div>
				//<div style={{marginTop: '5em'}}>
					//<div className={"text-center"}>
						//<img src="img/rafael_circle_cropped.png" alt="" width="200" height="200" style={{display: 'block', margin: 'auto'}}/>
						//<Autogram/>
						//<div>
							//<a class="external-site" target="_blank" href="https://github.com/rafaelkallis"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
							//<a class="external-site" target="_blank" href="mailto:rk [at] rafaelkallis [dot] com"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
							//<a class="external-site" target="_blank" href="https://ch.linkedin.com/in/rafaelkallis"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
						//</div>
					//</div>
				//</div>
			//</div>
		//);
	//} else {
		//return (
			//<div className={'text-center'} style={{paddingTop: '30%'}}>
				//<img src="img/rafael_circle_cropped.png" alt="" style="width: 180px;"/>
				//<div style="display: inline-block; vertical-align: bottom;">
					//<Autogram/>
					//<div>
						//<a class="external-site" target="_blank" href="https://github.com/rafaelkallis"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
						//<a class="external-site" target="_blank" href="mailto:rk [at] rafaelkallis [dot] com"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
						//<a class="external-site" target="_blank" href="https://ch.linkedin.com/in/rafaelkallis"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
					//</div>
				//</div>
			//</div>
		//);
	//}
//}

export default function Autogram(props){
    return (
        <div {...props}>
            <svg className="signature" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 710 170">
            <path className="stroke-R-1" d="M 15.827 85.354 C 16.388 63.978 24.572 75.675 26.357 102.04 C 27.632 120.876 29.46 134.565 28.288 156.382"></path>
            <path className="stroke-Ra" d="M 3.193 97.169 C 3.193 97.169 -4.278 33.89 56.909 28.597 C 122.637 22.911 28.934 101.568 28.718 120.789 C 28.46 143.778 82.363 151.947 88.719 153.361 C 89.492 153.533 88.566 151.861 88.4 149.449 C 87.544 137.013 108.208 103.89 118.837 105.886 C 118.852 105.889 118.838 106.065 118.661 106.071 C 104.459 106.524 85.22 142.003 89.03 153.456 C 89.05 153.515 93.054 156.232 96.307 154.382 C 113.309 144.714 124.444 108.713 124.331 109.048 C 111.131 148.087 126.243 149.171 126.243 149.171"></path>
            <path className="stroke-f-1" d="M 180.657 58.985 C 181.601 57.653 196.961 -3.147 168.92 37.438 C 150.558 64.014 150.17 152.083 150.17 152.083"></path>
            <path className="stroke-f-2" d="M 133.195 128.332 C 133.195 128.332 120.411 119.236 179.538 108.295"></path>
            <path className="stroke-ael" d="M 204.728 107.118 C 204.728 107.118 165.787 129.832 169.541 158.664 C 169.632 159.363 170.171 159.625 170.312 159.71 C 178.631 164.725 191.542 152.509 198.315 140.452 C 204.113 130.129 209.533 120.615 208.128 119.864 C 206.823 119.166 197.337 138.996 198.691 140.802 C 200.045 142.608 204.245 147.638 216.43 140.332 C 223.3 136.213 235.318 125.702 244.702 117.171 C 252.313 110.252 254.266 102.941 252.447 101.156 C 249.928 98.683 243.793 100.987 235.689 106.69 C 230.618 110.259 212.172 129.39 216.825 140.342 C 231.266 174.336 255.461 140.97 268.926 125.471 C 269.007 125.378 269.186 125.107 269.126 125.193 C 265.043 131.003 258.685 134.456 262.246 139.094 C 276.349 157.461 362.641 27.676 352.159 19.363 C 341.677 11.05 283.21 92.053 288.845 122.35 C 294.48 152.647 309.238 152.467 309.298 152.229"></path>
            <path className="stroke-Kalli" d="M 438.527 34.346 C 438.527 34.346 438.247 32.938 438.045 33.6 C 426.554 71.24 414.492 152.225 418.341 152.913 C 422.36 153.631 482.121 38.402 500.099 32.937 C 501.161 32.614 500.822 33.068 500.444 33.156 C 487.172 36.264 449.794 102.652 449.794 102.652 C 449.794 102.652 449.323 126.135 468.035 151.481 C 468.219 151.73 468.05 151.482 468.05 151.482 C 468.05 151.482 464.636 140.682 482.727 118.715 C 500.818 96.748 503.746 103.554 503.746 103.554 C 503.746 103.554 505.296 102.004 502.195 109.067 C 499.094 116.13 503.574 103.985 503.574 103.985 C 503.574 103.985 498.344 98.958 482.448 118.436 C 466.552 137.914 467.089 150.756 468.771 152.484 C 477.227 161.174 506.575 109.62 510.982 103.468 C 515.389 97.316 488.351 142.492 499.525 149.21 C 510.699 155.928 526.492 123.497 527.349 124.573 C 529.441 127.201 533.286 137.539 544.578 124.143 C 555.87 110.747 600.313 31.796 595.575 14.826 C 590.837 -2.144 539.237 102.348 541.821 140.165 C 544.405 177.982 589.351 115.945 590.389 117.182 C 591.427 118.419 587.995 123.574 589.718 133.136 C 591.441 142.698 656.942 45.049 660.752 19.872 C 664.562 -5.305 616.853 58.156 616.853 58.156 C 616.853 58.156 568.818 132.625 599.28 151.536 C 601.283 152.78 607.808 159.978 640.887 119.491 C 673.966 79.004 658.711 116.323 657.838 117.818 C 656.965 119.313 645.693 146.043 645.521 146.043 C 645.349 146.043 640.914 157.849 651.079 147.942"></path>
            <path className="stroke-i-dash" d="M 667.391 81.211 C 667.391 81.211 653.963 86.476 662.365 89.98"></path>
            <path className="stroke-s" d="M 697.496 110.248 C 697.496 110.248 707.756 99.221 684.734 103.393 C 661.712 107.565 686.986 125.15 686.986 125.15 C 686.986 125.15 724.272 149.888 694.243 151.08 C 664.214 152.272 671.221 146.609 671.221 146.609"></path>
            </svg>
        </div>
    );
}
