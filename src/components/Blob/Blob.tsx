
import styles from './Blob.module.scss';

export function Blob() {
    return (
        <svg
            id="visual"
            viewBox="0 0 900 810"
            width="900"
            height="810"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            >
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" className={styles.startGradient}></stop>
                        <stop offset="100%" className={styles.endGradient}></stop>
                    </linearGradient>
                </defs>
            <g transform="translate(470.43974163083135 427.58129981864477)">
                <path fill="url(#gradient)">
                    <animate attributeName="d"
                        dur="100000ms"
                        repeatCount="indefinite"
                        values="M131.1 -242C132.8 -226 71.6 -116 104.1 -60C136.6 -4 262.8 -2 261.1 -1C259.3 0 129.7 0 92.4 47.8C55.2 95.6 110.3 191.1 110.3 210.6C110.3 230.1 55.2 173.6 12.8 151.5C-29.7 129.4 -59.3 141.8 -125.9 160.7C-192.4 179.6 -295.8 205.1 -342.7 179.4C-389.5 153.7 -379.7 76.8 -386.3 -3.8C-392.8 -84.4 -415.6 -168.8 -354 -168.8C-292.3 -168.8 -146.1 -84.4 -73.1 -59.2C0 -34 0 -68 32.3 -124C64.7 -180 129.3 -258 131.1 -242;
                        M91.5 -179.9C103.1 -151.9 86.2 -95.9 150.6 -61.3C214.9 -26.7 360.6 -13.3 351.6 -5.2C342.7 3 179.1 6 119.4 48.7C59.7 91.4 103.9 173.9 101.3 191.7C98.7 209.6 49.3 162.8 24.7 120.1C0 77.3 0 38.7 -64.5 56.6C-129 74.5 -258.1 149 -275.1 149C-292.1 149 -197 74.5 -163.6 19.3C-130.1 -35.8 -158.1 -71.7 -173.5 -127.8C-189 -184 -191.7 -260.4 -160.7 -277.2C-129.7 -293.9 -64.8 -251 -12.4 -229.5C40 -207.9 80 -207.9 91.5 -179.9;
                        M182.5 -334.4C201 -305.4 155.9 -184.7 189.4 -113.7C222.9 -42.7 335 -21.3 362.8 16.1C390.7 53.5 334.3 107 302 180.1C269.7 253.1 261.4 345.8 215.1 319C168.7 292.3 84.4 146.1 36.1 83.6C-12.2 21.1 -24.3 42.1 -75 71.4C-125.7 100.6 -214.8 138.1 -254.4 127.5C-294 117 -284 58.5 -292.7 -5C-301.3 -68.5 -328.6 -137 -321.5 -203.7C-314.3 -270.4 -272.6 -335.2 -213.3 -340.7C-154 -346.1 -77 -292 2.5 -296.4C82 -300.7 164 -363.4 182.5 -334.4;
                        M168.8 -294.7C202.3 -273.1 201.6 -194.5 172.3 -135.9C142.9 -77.3 85 -38.7 94.4 5.4C103.7 49.5 180.5 99 218.2 172.1C255.8 245.1 254.5 341.8 211.6 362.5C168.8 383.3 84.4 328.1 24 286.5C-36.3 244.9 -72.7 216.9 -72.7 171.4C-72.7 125.9 -36.3 62.9 -79.7 31.5C-123 0 -246 0 -279.8 -19.5C-313.5 -39 -258.1 -78 -207.8 -97.3C-157.4 -116.7 -112.2 -116.4 -78.4 -137.9C-44.7 -159.4 -22.3 -202.7 22.7 -241.9C67.7 -281.2 135.3 -316.4 168.8 -294.7;
                        M124.9 -229.5C160.1 -196 185.7 -159 247.7 -120.2C309.6 -81.3 407.9 -40.7 372.7 -20.3C337.5 0 168.8 0 120.4 62.4C72 124.7 144 249.4 144 288.4C144 327.4 72 280.7 17.3 250.7C-37.3 220.7 -74.7 207.3 -108.4 187.8C-142.2 168.3 -172.4 142.7 -216.4 110.3C-260.4 78 -318.2 39 -294.3 13.8C-270.3 -11.3 -164.6 -22.7 -124.9 -62.5C-85.3 -102.3 -111.6 -170.7 -101.8 -218.8C-92 -267 -46 -295 -0.6 -294C44.8 -293 89.7 -263 124.9 -229.5;
                        M131.1 -242C132.8 -226 71.6 -116 104.1 -60C136.6 -4 262.8 -2 261.1 -1C259.3 0 129.7 0 92.4 47.8C55.2 95.6 110.3 191.1 110.3 210.6C110.3 230.1 55.2 173.6 12.8 151.5C-29.7 129.4 -59.3 141.8 -125.9 160.7C-192.4 179.6 -295.8 205.1 -342.7 179.4C-389.5 153.7 -379.7 76.8 -386.3 -3.8C-392.8 -84.4 -415.6 -168.8 -354 -168.8C-292.3 -168.8 -146.1 -84.4 -73.1 -59.2C0 -34 0 -68 32.3 -124C64.7 -180 129.3 -258 131.1 -242;"
                        >
                    </animate>
                </path>
            </g>
        </svg>
    );
}