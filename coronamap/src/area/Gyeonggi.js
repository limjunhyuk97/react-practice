import React from "react";

function Gyeonggi({ fill, onClick, onMouseOver, onMouseLeave }) {
  return (
    <polyline
      id="경기"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      points="81.696,220.817 80.546,221.201 80.163,221.009 80.163,220.626 79.971,220.435   80.354,219.859 80.546,219.476 79.971,218.709 79.396,217.943 78.821,216.985 78.63,216.218 78.438,214.302 78.055,212.96   77.863,212.385 76.905,211.427 75.755,210.277 75.755,209.894 75.18,209.319 74.988,208.552 74.797,208.169 74.797,207.978   74.414,206.828 74.414,206.254 74.797,205.871 75.372,205.488 75.372,205.104 74.797,203.571 74.414,203.188 74.03,202.997   73.647,202.805 73.647,202.613 73.455,202.23 73.647,200.697 73.838,199.547 74.03,196.097 73.264,195.139 72.688,194.373   72.688,194.181 72.88,191.306 73.264,190.156 74.03,188.814 74.222,187.665 74.222,186.515 73.455,185.365 72.688,184.023   72.114,183.065 73.455,182.107 74.605,181.916 74.797,181.916 75.372,181.724 76.521,181.916 77.288,181.916 78.438,182.107   79.588,182.49 79.971,183.065 79.971,183.64 80.163,184.023 80.163,184.023 80.354,184.215 80.546,184.599 80.929,184.982   81.117,185.173 81.884,185.365 83.996,185.173 84.184,184.982 84.567,184.982 86.483,184.79 86.675,185.173 86.675,185.365   87.058,185.557 88.4,185.365 90.125,183.832 90.508,183.449 90.891,182.682 91.083,182.299 91.083,181.916 91.658,181.34   93,180.192 93.383,180.001 94.149,179.809 94.724,179.618 95.299,179.618 97.791,179.042 97.215,178.276 97.024,177.701   97.407,175.976 97.599,173.102 97.791,172.718 98.557,170.035 98.749,169.652 98.94,169.077 98.557,168.694 100.474,167.735   100.857,167.544 102.198,166.969 104.115,166.394 104.69,166.202 105.265,166.202 105.648,166.394 108.139,166.394 109.098,166.202   110.631,165.627 112.164,165.436 112.547,165.244 113.122,164.669 113.122,163.711 112.931,163.328 112.164,162.369   112.164,162.369 111.589,161.028 111.206,160.453 110.439,159.113 110.056,158.922 109.864,158.538 109.481,158.155   109.098,157.389 109.098,156.43 108.331,155.28 107.948,154.897 107.564,154.514 106.798,154.706 106.415,154.897 105.457,154.514   105.839,153.747 105.648,152.406 105.073,152.022 104.498,152.406 104.115,152.214 103.731,151.831 103.348,151.447   102.965,151.064 102.965,151.064 102.007,151.447 101.815,151.447 101.24,151.831 101.24,151.831 100.857,151.831 100.474,151.256   99.898,151.447 99.132,151.447 98.365,151.447 98.365,151.256 97.982,151.064 97.791,150.489 97.791,149.147 97.982,149.147   98.174,148.381 97.982,147.806 98.365,146.848 98.557,146.273 98.365,145.698 98.557,144.548 98.749,144.356 98.749,143.782   98.557,143.398 98.557,143.015 98.557,142.632 99.324,142.823 99.515,143.398 100.09,143.59 100.474,144.165 100.665,144.356   101.24,144.548 101.815,144.932 102.582,145.123 103.157,145.506 103.54,145.698 104.498,145.89 105.839,145.89 106.031,146.082   106.223,146.656 106.798,146.465 106.989,146.082 106.989,145.315 107.373,144.932 107.373,144.548 107.564,144.356   108.714,144.356 108.906,144.74 109.098,144.932 109.864,144.548 110.248,144.165 110.439,143.973 110.631,143.782 111.014,143.398   111.014,142.823 111.014,142.44 110.439,142.057 110.056,141.673 110.056,141.482 110.056,140.715 109.672,140.523 109.864,140.141   109.864,139.757 110.248,138.99 110.439,138.99 111.014,138.607 111.397,138.224 111.781,137.458 111.972,137.458 112.355,137.074   112.931,136.882 113.314,137.074 113.314,137.458 113.505,137.841 113.889,138.032 114.272,138.607 114.847,139.182   115.422,139.182 115.422,139.182 115.23,139.757 115.23,140.141 115.039,140.715 115.039,141.099 114.847,141.482 114.847,141.673   114.655,142.249 114.847,142.823 115.039,143.973 114.847,145.315 115.614,145.506 115.805,146.465 115.805,147.04 115.422,147.615   115.614,148.381 115.039,149.339 115.039,149.339 115.23,149.914 115.422,150.106 115.614,151.064 115.614,151.256 116.38,151.447   116.955,151.256 117.722,150.873 118.296,150.873 118.68,151.256 119.063,154.514 119.255,155.089 119.446,155.472 120.021,156.047   121.171,156.43 122.321,155.855 122.513,155.472 122.705,155.28 123.471,154.322 123.663,153.747 124.238,152.406 124.621,151.447   124.813,150.681 125.004,149.147 125.196,147.423 125.388,146.082 125.579,145.315 125.771,144.548 125.962,142.44 126.346,141.482   126.537,140.907 125.771,140.907 125.579,140.907 125.388,140.715 125.004,140.332 124.813,140.715 123.663,140.141   123.471,140.141 123.279,140.523 123.088,140.715 122.896,140.715 122.513,140.907 122.129,140.523 121.746,139.374   121.171,139.182 121.555,137.074 121.746,137.074 121.746,136.882 120.979,136.691 120.979,135.158 120.979,134.774   121.171,134.774 121.555,134.583 121.746,134.583 123.471,134.583 123.663,134.583 124.046,134.774 124.429,134.774   124.813,134.774 125.004,134.774 125.388,134.583 124.429,131.518 125.004,129.218 125.962,129.218 126.346,129.41 126.537,129.793   126.537,129.602 126.346,129.41 126.154,128.835 125.962,128.644 125.962,128.452 125.962,127.877 125.579,127.11 125.579,126.919   125.771,125.96 129.6,126.919 129.983,127.11 130.179,127.494 130.367,127.685 130.562,127.685 131.133,128.26 131.329,128.452   131.9,128.644 132.095,128.644 132.283,128.835 132.479,129.218 133.049,128.644 133.816,127.685 134.012,127.302 134.199,126.535   134.583,125.96 134.583,125.769 134.199,125.577 134.012,125.386 133.816,125.002 134.012,124.619 134.583,124.044 135.541,122.894   135.732,122.703 135.732,121.361 135.732,120.978 135.732,119.828 135.732,118.486 136.116,117.336 135.732,117.336   135.158,117.145 134.012,116.953 132.666,116.378 131.133,115.42 130.367,114.462 129.029,113.312 128.833,113.12 128.262,113.12   127.687,113.503 127.496,113.503 127.304,113.887 127.496,114.078 126.92,114.27 126.729,114.845 126.729,115.037 127.496,116.187   127.687,116.378 128.07,116.953 128.262,117.72 127.879,117.145 127.496,116.953 127.496,116.953 127.112,116.57 127.112,116.378   126.92,115.995 126.729,115.803 125.962,115.803 125.579,116.187 125.388,116.187 125.004,116.57 124.621,116.57 124.238,116.57   124.046,116.187 124.046,115.037 123.854,114.27 122.705,114.653 122.513,114.653 121.555,114.653 120.979,115.037 120.788,115.229   120.596,115.229 120.213,115.42 119.638,115.803 119.446,115.803 118.296,115.803 117.53,115.611 117.338,115.42 117.146,115.229   117.146,114.27 117.338,113.312 117.53,113.312 117.913,112.162 117.53,111.97 117.338,111.779 116.188,111.014 115.614,110.822   115.422,110.439 115.614,109.864 115.422,109.481 115.23,109.289 115.039,109.098 114.464,108.714 114.272,108.522 114.081,108.331   112.739,108.139 112.547,107.948 111.589,107.564 115.422,100.282 120.596,94.724 124.813,91.083 132.666,85.717 133.433,86.867   133.816,87.441 134.395,88.017 134.774,88.591 135.541,89.167 136.116,89.741 139.182,89.933 141.482,89.933 142.057,90.699   142.057,89.741 142.632,89.167 143.398,88.783 143.782,88.591 144.165,88.591 145.315,88.591 146.082,88.4 146.273,88.783   146.465,88.975 146.656,89.167 147.04,89.358 147.423,89.55 147.615,89.933 146.848,90.316 146.465,90.699 146.273,90.891   146.656,91.274 146.848,91.466 147.04,91.658 147.04,92.232 146.848,93.191 147.231,93.191 147.615,92.808 147.615,92.616   147.998,91.658 148.189,91.274 148.381,90.891 148.573,90.891 149.531,90.891 149.723,90.891 149.915,89.741 150.298,89.358   150.489,89.167 150.873,88.975 151.256,88.4 151.256,88.4 151.256,88.017 150.873,87.441 150.681,87.25 150.489,86.867   150.298,86.675 150.106,86.292 150.106,86.1 150.298,85.908 150.489,85.525 150.681,85.142 150.681,84.758 150.489,84.567   150.106,83.802 149.915,83.419 149.915,83.419 151.448,83.227 152.214,83.036 152.981,83.227 153.364,83.227 153.556,84.186   158.347,78.436 161.413,77.286 165.821,75.753 167.929,74.028 169.846,72.687 170.996,71.729 172.337,71.153 173.104,76.903   172.529,79.394 172.529,81.119 172.529,81.886 172.72,82.077 172.912,82.652 173.87,83.036 174.062,83.227 174.445,83.61   174.637,83.802 175.02,83.61 175.787,83.61 176.553,83.419 177.511,82.652 177.895,82.844 178.661,82.269 178.849,81.886   178.849,81.694 179.428,81.694 179.811,82.077 180.382,82.269 180.578,82.46 180.766,82.652 180.961,83.036 181.344,83.802   181.149,83.994 180.961,84.758 180.961,85.525 180.961,86.483 180.766,86.483 180.766,86.675 181.149,87.058 181.149,87.058   181.916,87.441 182.111,87.633 182.299,87.633 182.682,87.825 182.682,88.017 182.877,88.4 182.682,89.741 182.494,90.125   182.111,90.508 181.916,91.083 182.299,91.274 182.877,92.041 182.877,92.232 183.257,92.424 183.257,92.808 183.449,93.191   183.64,93.574 184.023,93.958 185.94,93.191 185.365,95.491 185.365,97.024 185.557,97.791 185.749,98.557 186.515,99.515   186.707,99.707 187.665,100.474 188.24,101.048 188.432,101.24 188.623,101.432 190.156,102.965 190.731,103.54 191.114,103.731   191.306,103.54 191.881,101.623 192.647,101.815 193.414,101.623 193.606,101.432 193.989,100.856 193.989,100.856 194.564,100.09   194.564,99.898 194.947,99.898 195.139,99.707 196.289,98.749 197.247,97.599 198.397,96.449 198.589,96.065 198.397,95.299   198.589,94.916 199.547,94.532 202.613,95.491 203.763,95.682 203.38,96.449 202.23,97.407 202.23,97.791 201.847,99.324   202.23,100.856 202.23,101.048 202.038,101.24 201.655,102.39 201.271,102.773 200.889,103.156 200.697,103.731 200.505,106.415   201.655,106.989 202.23,108.331 202.805,108.522 203.188,108.906 203.188,108.906 203.763,108.522 204.338,108.522 205.296,108.331   205.488,108.139 206.063,108.139 206.254,108.522 206.254,108.906 206.638,110.631 207.213,111.779 207.596,112.162 209.513,113.12   210.854,112.162 212.579,110.822 213.537,110.822 213.729,110.631 216.412,109.672 216.987,108.522 222.161,110.248   225.416,109.481 225.611,109.289 226.182,108.714 229.061,121.361 229.061,122.319 229.631,122.703 230.015,122.894   230.015,124.044 229.827,124.811 229.827,125.002 230.015,125.577 230.015,125.769 230.21,126.152 230.594,126.727 230.977,129.41   231.356,129.985 231.548,130.177 233.081,131.327 233.464,131.71 235.764,132.093 236.531,131.901 237.681,132.285 237.873,132.858   238.447,133.049 239.214,132.858 240.938,132.858 241.897,132.666 242.855,132.858 242.855,133.049 243.43,133.241 243.43,133.625   243.622,134.008 244.005,134.966 244.197,136.116 244.005,136.499 244.005,136.882 244.197,138.224 244.197,138.607   244.388,139.565 244.005,139.949 244.005,140.523 245.155,141.099 245.538,141.099 246.305,140.715 247.646,141.29 248.604,140.907   249.179,140.715 249.754,140.715 251.862,140.907 253.012,141.099 253.971,142.057 254.545,142.44 254.737,143.398 254.737,145.315   254.737,146.273 254.737,147.231 255.121,148.381 255.504,148.573 256.079,148.956 256.271,149.531 256.845,149.723   257.804,152.022 257.229,153.364 257.037,153.747 256.271,153.939 256.462,154.514 256.462,154.706 256.462,155.28 256.654,155.472   256.654,155.855 254.929,159.495 251.862,159.687 251.096,160.07 250.904,160.261 248.03,164.094 244.963,165.819 244.58,166.011   243.238,170.994 244.58,172.335 243.238,174.826 243.047,175.209 242.855,175.593 242.664,175.785 243.238,179.042 243.43,179.234   244.005,180.001 244.197,180.192 244.58,180.766 244.771,180.957 245.155,181.532 245.538,182.299 245.73,182.682 245.921,184.215   245.155,185.557 244.771,185.94 244.197,186.323 244.005,186.515 243.813,186.707 243.238,187.09 242.664,187.473 242.28,187.665   241.897,187.856 241.705,188.048 241.322,188.24 241.13,188.431 240.938,188.623 240.747,188.814 240.172,189.39 239.98,189.581   239.789,190.156 240.364,193.031 240.938,192.647 241.514,192.264 241.897,191.881 242.472,191.306 242.664,191.114   243.047,191.114 243.622,191.498 244.197,192.073 244.771,192.456 245.347,192.647 245.73,192.647 246.113,192.264 246.305,191.881   246.688,191.881 246.688,191.498 247.071,191.114 247.263,190.731 247.455,190.731 248.604,191.881 248.988,192.264   248.796,192.456 248.796,192.839 248.604,193.223 248.413,194.373 248.03,196.289 248.03,196.48 247.646,197.438 247.455,198.397   247.071,199.164 247.071,199.355 247.071,200.313 247.071,200.697 247.071,201.271 247.071,201.655 247.263,204.146   247.455,204.913 247.071,205.296 246.688,205.488 246.497,205.871 246.113,206.254 245.921,206.828 245.73,207.211 245.155,207.211   244.58,207.402 244.58,207.594 244.58,207.594 244.58,207.978 244.771,208.744 245.347,209.319 245.73,209.702 245.921,209.894   246.688,211.044 247.455,211.427 247.838,211.427 247.838,211.619 248.604,212.002 248.988,211.619 249.563,211.044   250.138,211.235 251.288,210.852 252.438,210.852 252.629,210.469 253.012,209.127 253.971,208.744 254.162,208.552   254.737,208.361 255.312,207.978 255.312,207.978 255.887,207.402 256.845,207.402 257.037,207.786 257.229,207.978   257.804,208.169 257.995,207.978 258.57,208.361 259.528,209.127 259.528,208.936 259.72,208.936 260.678,209.511 261.062,209.511   261.253,209.511 261.253,209.894 261.253,210.277 263.745,212.002 263.745,212.193 263.936,212.769 264.319,212.96 265.278,213.152   266.044,212.769 266.619,213.727 267.194,214.302 267.386,214.493 267.578,214.685 268.344,215.26 268.536,215.452 268.728,215.643   268.919,215.835 269.686,216.218 270.069,216.41 270.26,216.985 270.26,216.985 270.835,217.368 271.027,217.56 271.41,217.751   271.793,217.751 272.177,218.326 272.56,218.518 272.177,219.093 272.177,219.476 272.56,220.051 273.515,220.243 273.898,220.817   274.093,220.626 274.477,220.435 275.431,220.243 275.626,220.051 276.393,219.859 278.881,220.435 279.456,220.435   280.222,220.243 280.605,219.859 283.289,220.626 283.48,220.817 283.672,221.393 284.63,221.776 285.205,221.967 286.546,222.351   287.505,222.159 287.888,221.393 288.271,220.817 288.846,221.009 289.038,221.201 289.229,221.393 290.188,222.159   290.188,223.117 290.571,223.309 291.146,223.5 291.146,223.5 291.146,223.884 291.146,224.076 292.488,225.609 293.446,225.8   294.021,225.992 294.404,225.992 295.362,225.992 296.129,226.375 296.513,226.567 296.704,226.95 296.896,227.142 297.278,227.525   297.662,227.525 297.47,228.675 295.362,230.781 294.404,231.165 293.638,230.973 292.871,230.973 292.104,231.165 291.913,231.165   291.146,231.165 290.955,231.356 290.571,231.548 290.379,232.506 289.613,232.698 288.846,232.89 288.655,234.231 287.888,234.998   287.505,235.381 287.505,235.764 287.313,235.956 286.93,236.339 286.738,236.531 286.546,236.339 286.163,236.531 285.972,237.105   285.588,237.297 285.205,237.681 284.822,237.872 284.247,238.064 284.055,238.255 283.672,238.447 282.714,238.255 283.48,240.747   283.672,240.555 283.864,240.555 284.63,240.747 285.588,241.514 286.355,241.897 286.546,243.047 287.122,243.622 287.505,243.813   287.696,244.196 289.613,245.921 289.038,247.263 289.421,251.288 289.805,252.246 289.996,252.821 288.655,255.693 288.08,258.185   287.696,258.951 287.696,259.143 287.313,260.293 287.313,260.484 286.93,261.634 286.738,262.018 286.355,262.593 286.163,262.593   285.972,263.743 285.588,264.701 285.972,265.276 285.972,266.042 286.163,266.617 285.397,266.617 284.63,266.809 284.247,266.809   283.48,266.809 283.097,267.192 282.905,269.108 283.097,270.258 282.905,270.833 282.714,271.6 282.714,271.983 283.097,272.941   283.289,274.475 284.438,279.456 284.438,280.222 284.055,281.181 283.864,281.181 282.522,282.713 282.331,283.48 282.139,284.055   282.139,284.247 282.522,285.205 282.331,286.163 282.331,286.355 282.714,289.038 282.905,290.571 282.714,290.763   282.714,290.955 282.522,291.529 282.331,291.721 282.139,291.913 281.564,292.487 281.372,292.871 281.181,293.637   280.989,295.554 280.989,296.129 280.989,296.512 281.181,299.195 280.797,299.579 277.731,306.284 275.243,307.817   271.219,316.633 265.469,314.525 265.278,314.333 264.703,313.95 264.319,313.567 261.062,312.992 261.253,313.758 261.445,313.95   261.636,314.333 262.02,314.908 262.211,317.783 262.02,319.125 262.02,320.083 262.02,322.382 261.828,324.682 261.828,324.874   260.87,325.449 260.87,325.449 260.103,325.83 259.912,326.022 259.336,326.405 258.762,326.98 258.57,326.98 257.995,327.363   256.462,327.363 256.271,327.747 256.462,328.513 256.462,328.513 256.845,328.705 256.845,328.896 254.737,330.046   253.012,329.663 251.479,331.004 250.138,335.987 249.754,336.371 247.455,335.796 245.73,334.646 244.58,333.879 243.047,333.879   242.664,333.688 241.13,334.263 238.255,335.029 236.914,334.263 234.998,334.454 233.464,335.221 233.081,335.413 232.89,335.604   232.123,337.329 232.314,338.287 231.931,339.054 231.74,341.354 230.21,343.461 229.248,343.27 228.677,343.653 228.481,344.611   228.098,344.611 227.332,345.378 224.461,345.761 222.353,345.953 221.011,346.528 220.82,347.103 220.628,347.678 220.437,348.061   219.861,348.828 219.861,349.02 219.67,349.211 219.861,349.594 220.437,349.978 220.628,350.361 221.203,350.553 221.395,350.936   221.778,351.701 221.969,352.084 222.161,352.084 222.544,352.659 222.353,352.851 221.969,353.425 221.586,353.425   221.586,353.425 221.203,353.425 221.203,353.425 220.053,353.425 219.67,354.192 219.095,354.575 218.711,354.767 218.711,355.533   218.711,355.917 218.328,356.3 218.328,356.492 218.137,356.875 216.795,356.683 216.22,356.683 216.028,356.683 215.454,356.683   215.262,356.875 215.07,356.875 214.687,356.108 213.92,355.917 213.537,356.108 213.154,356.492 213.154,356.492 212.579,356.875   212.579,357.642 212.579,357.833 211.621,358.408 211.046,358.408 210.854,358.6 210.471,359.175 210.087,359.366 209.896,359.558   209.129,359.366 208.938,359.558 208.938,359.558 208.554,359.75 208.171,359.75 207.979,359.941 207.788,360.325 207.596,360.516   207.021,360.708 206.83,360.899 206.254,360.899 206.063,360.899 205.296,360.899 204.913,360.708 204.53,360.899 204.913,362.049   205.104,362.625 205.104,362.625 205.296,362.816 205.488,363.199 205.488,363.391 205.68,363.583 205.871,363.966 205.68,364.541   205.488,365.116 205.296,365.307 205.104,365.69 204.721,366.84 204.53,366.84 204.338,367.032 203.955,367.607 202.805,368.182   202.421,367.607 201.847,366.457 201.271,365.499 201.08,365.499 200.889,365.307 200.697,364.732 200.889,364.349 199.355,363.966   199.164,363.966 198.206,363.774 198.014,363.583 197.822,363.199 197.63,362.816 197.439,362.625 197.247,362.433 197.056,362.433   196.48,363.008 196.097,363.199 195.714,363.391 194.373,362.241 194.181,362.049 193.797,362.049 192.647,361.666 191.689,360.899   191.114,360.899 190.731,360.708 189.773,360.516 189.965,359.75 190.156,359.366 189.965,358.792 189.582,358.792 189.582,358.6   189.39,358.408 189.198,358.025 189.39,357.45 189.198,357.258 188.623,356.108 186.132,355.725 186.132,355.342 185.173,354.958   184.79,355.15 184.79,354.958 184.023,354.192 183.449,353.809 183.065,353.809 181.532,353.617 181.532,353.233 181.344,353.042   180.382,352.851 180.382,352.659 179.044,352.084 178.661,351.892 178.278,352.084 177.895,352.275 177.699,352.467   177.128,352.851 176.933,353.042 176.745,353.233 175.978,353.233 175.595,352.851 175.02,352.659 174.637,352.659 174.062,352.275   172.72,352.275 172.72,352.467 172.337,352.851 171.954,353.042 171.762,353.042 171.57,353.233 171.57,353.617 171.187,354.192   170.42,355.342 170.804,355.342 171.187,355.342 171.379,355.533 171.57,355.917 171.57,356.492 171.57,356.683 171.187,358.025   170.612,358.792 170.42,358.6 170.037,358.216 169.654,357.833 169.462,357.642 168.887,357.258 168.504,357.066 168.313,357.45   168.121,357.642 167.737,357.833 167.546,358.025 166.971,358.6 166.587,358.983 166.587,358.983 164.288,358.792 163.904,358.983   163.521,359.175 162.755,359.75 162.18,359.941 161.222,360.325 160.838,360.325 160.455,360.325 160.072,360.516 159.88,360.708   159.497,361.091 158.922,360.899 158.73,360.899 158.347,360.708 157.963,360.516 157.58,360.325 156.813,359.941 156.622,359.941   155.089,359.75 154.897,359.75 154.514,359.75 154.322,359.75 153.364,359.75 152.981,359.75 152.598,359.941 151.639,360.325   151.256,360.516 149.723,361.475 149.339,361.666 147.806,362.049 147.231,362.241 146.273,362.625 145.506,362.816   144.356,363.391 143.398,363.966 142.44,364.349 142.249,364.541 141.099,365.307 139.949,366.074 138.991,366.266 138.224,365.116   137.266,361.091 135.349,359.558 134.966,359.558 134.395,359.175 134.199,358.6 133.816,358.792 132.666,358.025 131.9,357.642   131.517,357.258 130.367,356.492 129.983,356.3 129.6,356.683 128.454,355.342 127.879,355.533 127.496,354.958 127.687,354.575   127.304,354 127.304,353.617 125.196,349.403 124.621,348.636 124.046,348.061 124.429,347.678 124.621,347.486 124.429,347.103   124.046,346.72 123.471,346.911 123.279,346.911 121.555,346.336 120.596,346.145 119.446,346.336 119.446,346.911 118.872,346.911   118.872,346.911 118.296,347.103 117.722,346.911 117.146,346.336 117.53,346.528 117.338,345.953 116.955,345.378 115.997,345.57   116.763,345.187 118.488,344.803 119.063,344.611 119.063,344.611 119.063,344.42 119.446,344.228 119.446,343.27 119.255,342.312   119.063,342.12 118.105,339.629 111.397,339.629 110.822,338.862 110.439,338.096 110.439,337.521 110.439,336.946 110.631,336.371   111.014,335.413 112.164,334.263 112.547,333.879 114.655,333.113 114.655,332.346 113.505,332.538 113.314,331.388   113.889,331.196 113.697,329.28 113.889,327.172 114.272,326.597 114.272,326.213 114.655,324.874 114.847,324.299 114.847,323.916   114.655,323.916 114.272,323.916 114.081,323.724 113.314,322.766 113.122,322.574 113.122,320.849 113.697,319.891   113.889,319.699 114.081,319.508 114.464,318.933 115.805,317.975 116.188,317.591 116.572,317.399 117.53,317.591 117.722,317.783   118.296,318.358 119.83,316.825 120.021,316.633 120.213,316.441 120.979,316.441 121.938,316.25 122.321,315.866 122.513,315.675   121.171,315.292 120.979,314.142 120.788,313.758 120.405,313.567 120.213,313.375 119.446,313.567 119.255,313.567   119.063,313.758 118.105,313.758 116.955,313.758 116.763,313.567 116.955,313.375 117.146,313.184 117.53,312.992 118.105,312.8   118.296,312.608 119.063,312.225 119.255,312.034 119.255,311.65 119.638,311.458 119.83,311.267 120.021,311.075 119.255,310.309   119.255,310.117 119.255,309.734 118.872,309.351 118.68,309.159 118.68,308.392 119.255,307.625 119.446,307.625 119.446,305.709   119.255,307.242 118.872,307.817 118.296,308.584 118.105,308.967 117.722,309.351 117.338,309.734 117.338,309.925   116.955,310.117 116.763,310.5 116.188,310.884 115.805,310.884 113.505,310.884 112.739,310.692 111.972,310.5 110.822,310.692   110.822,312.034 110.439,312.608 110.248,312.8 110.056,313.375 109.864,313.567 109.481,313.95 108.139,314.142 108.331,314.717   107.948,315.866 107.756,316.441 107.373,316.441 107.181,316.633 106.415,317.016 106.223,317.783 105.457,318.166   104.881,317.975 104.498,317.975 103.923,317.975 103.348,318.741 103.348,318.741 103.348,319.125 103.348,319.316   102.965,319.508 102.582,319.891 102.198,320.274 101.624,320.466 101.432,320.849 100.857,321.232 100.857,321.424   100.857,321.616 100.665,321.808 100.474,321.999 99.898,321.999 99.515,321.616 99.898,318.933 99.707,318.166 99.515,317.975   99.132,317.208 98.94,317.016 98.365,316.633 98.749,316.441 98.94,316.25 99.898,314.525 99.898,314.142 100.09,313.95   101.24,313.758 102.007,313.375 101.815,313.184 101.432,312.8 101.432,312.417 100.282,311.842 101.048,310.309 100.09,311.075   97.791,312.8 96.832,312.608 96.449,312.8 96.257,312.8 96.257,312.992 96.065,312.992 95.491,313.184 94.341,312.992   94.341,312.608 94.341,312.608 94.533,312.417 94.724,312.417 95.299,312.225 95.491,312.034 96.065,311.65 96.257,311.267   95.874,310.692 95.682,310.309 95.682,309.542 95.491,308.967 95.491,308.392 95.299,307.817 95.107,307.625 95.682,307.434   95.874,307.817 96.449,307.434 97.024,307.051 97.024,306.476 97.215,305.709 97.407,305.709 97.215,305.326 97.024,304.943   96.449,305.326 96.065,305.518 95.299,306.284 95.107,306.859 94.341,306.667 94.533,306.476 94.533,306.476 94.724,306.284   94.533,305.901 94.533,305.901 94.916,306.093 95.299,305.518 94.533,305.134 95.491,305.134 95.874,304.56 97.599,304.368   97.791,303.984 100.282,303.026 100.857,302.836 101.432,302.645 101.624,302.262 102.007,301.495 102.39,301.112 102.582,300.729   101.24,300.537 101.048,301.687 100.474,301.495 100.282,301.303 99.515,301.878 99.132,302.645 97.407,301.687 97.407,300.345   98.557,298.812 98.749,298.812 98.749,297.662 98.557,297.47 96.832,295.362 96.449,295.17 96.065,295.362 96.449,295.17   96.641,294.787 97.024,294.404 97.407,293.637 97.407,293.829 97.407,293.829 97.791,294.212 97.791,294.212 98.174,294.021   98.557,293.637 98.94,293.446 99.707,291.338 99.324,291.146 98.749,291.146 99.132,290.379 99.324,290.188 99.515,290.379   99.515,290.763 99.515,290.955 100.282,290.763 100.474,290.763 100.665,290.188 100.665,289.996 101.432,289.996 101.815,290.188   102.965,290.379 103.348,290.379 103.54,290.571 103.54,290.571 105.073,291.146 105.457,291.338 105.839,291.338 106.606,291.338   106.989,291.146 107.564,290.955 107.756,291.721 108.714,292.679 109.481,291.913 109.864,291.529 110.056,291.913   110.631,291.529 110.822,291.721 111.397,291.529 111.781,291.529 112.931,291.913 113.889,292.104 114.464,293.063   115.805,293.446 115.997,294.212 116.763,295.746 116.955,296.129 117.53,296.32 117.53,295.937 116.763,295.746 116.572,295.362   116.38,294.979 116.955,293.829 117.913,293.829 118.105,293.637 118.296,293.254 117.913,291.721 118.68,290.955 118.68,290.571   118.488,289.421 118.488,288.846 120.021,288.463 120.596,288.846 121.555,289.038 121.555,288.846 121.363,288.463   120.979,287.888 120.788,287.505 120.596,287.122 120.021,286.738 119.83,286.546 120.405,285.78 120.596,285.205 121.555,284.822   122.129,285.013 121.938,285.396 121.746,285.588 121.555,285.972 121.746,286.355 122.705,286.738 123.088,286.93 123.279,287.122   123.663,287.505 124.046,287.888 124.621,288.271 125.388,287.696 125.962,288.271 126.346,288.271 127.112,289.229   127.496,289.613 127.687,289.805 127.879,290.379 128.454,289.805 128.262,289.038 127.687,287.505 128.07,287.122 127.879,286.93   125.962,285.972 125.579,285.588 125.388,285.396 125.004,285.013 125.004,285.013 124.813,283.863 124.429,282.713   124.621,282.139 124.813,281.755 124.046,281.181 123.854,281.181 123.663,281.372 123.279,281.755 122.896,282.139   122.896,282.522 121.938,282.33 121.171,282.33 121.171,282.522 119.638,282.905 117.53,283.289 115.805,282.713 115.805,283.097   115.614,282.713 113.314,281.947 112.164,281.372 111.589,281.181 110.439,280.797 108.522,280.222 106.989,278.881   107.564,278.306 105.073,277.35 103.348,276.2 103.157,276.008 102.582,275.433 102.39,275.433 101.815,274.858 100.857,274.858   101.24,274.667 101.432,274.283 101.24,273.517 100.665,273.325 100.857,272.558 101.048,271.6 102.582,271.6 103.348,271.217   103.157,270.642 103.157,270.45 103.54,269.875 104.498,268.726 104.498,268.534 104.881,268.15 105.457,267.192 105.648,267.192   105.648,267 106.031,266.426 108.139,263.743 108.331,263.551 110.248,264.317 109.864,263.934 110.056,263.551 109.481,263.359   109.098,263.551 109.098,263.551 108.906,262.401 109.289,262.018 109.672,261.443 110.056,261.06 110.056,261.06 110.248,260.868   110.631,260.676 111.206,259.91 111.397,259.526 111.589,258.76 111.781,258.568 111.972,257.61 112.164,257.227 112.355,256.077   113.697,255.502 114.081,255.31 114.655,255.119 115.039,254.737 114.847,253.971 114.847,251.288 115.23,250.904 116.572,249.371   116.38,248.796 116.38,248.221 116.38,245.729 116.38,245.538 114.847,245.538 113.697,244.771 113.122,244.388 112.547,243.238   112.355,243.047 110.439,242.472 110.439,239.789 110.631,239.214 110.248,237.681 110.631,237.297 110.631,237.105   110.822,236.339 111.972,236.339 111.972,236.147 113.505,231.548 113.889,230.398 113.889,230.015 114.081,229.059 114.655,228.1   114.847,228.675 115.039,228.867 115.23,229.25 116.763,229.631 117.913,229.823 118.296,230.015 118.488,230.207 119.446,231.74   119.638,231.74 120.021,231.165 120.405,230.781 120.979,230.398 121.746,230.398 122.705,230.59 123.854,230.973 124.238,232.89   124.429,235.381 124.238,236.722 124.238,237.489 124.238,237.681 124.046,237.872 123.854,238.831 123.471,239.405 122.321,239.98   122.513,240.938 123.088,241.322 123.471,241.514 124.046,242.088 123.471,243.047 123.471,243.622 123.663,244.58 125.771,244.58   126.729,244.771 127.687,245.155 127.879,244.196 128.07,243.43 128.454,243.43 129.983,242.472 130.367,241.897 130.367,241.705   131.329,241.13 131.9,241.13 133.245,242.088 132.666,243.43 132.862,244.005 133.245,244.771 133.433,245.155 133.628,245.346   133.816,245.729 134.012,245.921 134.199,246.305 134.395,246.496 134.774,247.071 134.583,248.029 136.116,249.946   136.882,252.054 136.882,252.438 136.882,252.629 137.074,252.821 137.266,253.012 139.374,252.438 140.524,251.671   141.099,250.904 142.249,250.712 142.824,251.479 143.207,251.862 143.398,252.054 143.782,253.204 149.723,250.329   150.873,249.371 151.831,248.604 152.214,248.413 152.789,247.838 153.364,247.646 154.706,246.879 154.706,247.071   154.897,247.263 155.089,247.838 155.664,248.796 155.855,249.179 157.389,248.988 157.772,248.796 158.155,248.604   158.539,248.221 158.922,247.646 159.113,247.455 159.305,246.879 159.497,246.879 159.88,247.263 161.605,253.587 162.755,254.737   164.671,254.545 165.246,254.545 165.629,254.354 165.821,254.354 166.013,253.587 166.396,253.012 166.396,252.438   166.204,251.862 166.779,251.862 167.546,252.054 168.313,251.479 168.504,251.288 168.696,251.288 169.271,249.946   169.846,248.988 171.379,248.221 171.762,247.838 172.529,247.646 173.104,247.838 173.487,248.413 173.87,247.646 174.637,247.071   175.02,246.688 175.211,246.113 175.787,246.496 176.933,246.113 176.553,245.921 176.17,244.771 176.553,244.771 177.511,245.155   178.849,244.58 179.232,244.196 179.428,243.238 179.616,242.664 180.578,241.897 181.149,240.172 181.149,239.405 180.578,239.214   180.194,239.022 179.232,238.639 179.044,238.831 178.661,238.831 178.083,238.447 177.895,238.064 177.895,237.872   177.895,237.297 177.895,237.105 177.699,236.339 178.661,234.998 179.044,234.806 179.999,232.89 179.999,232.698 179.999,232.506   180.194,232.123 180.766,231.165 180.961,230.973 181.149,230.781 181.728,230.015 182.682,230.015 182.877,230.015   184.023,229.823 184.79,227.142 184.79,226.567 184.407,225.609 184.215,224.65 183.64,222.542 181.532,222.926 180.766,223.309   179.811,223.884 178.849,224.267 178.278,224.459 176.745,225.034 174.637,225.992 174.445,225.992 174.253,226.184 173.87,226.567   173.104,226.759 172.912,226.759 171.379,222.734 171.379,222.542 170.996,221.967 172.912,220.243 173.679,219.668   173.679,219.093 173.679,218.901 173.295,218.518 173.295,218.326 173.487,217.943 173.87,215.835 172.529,213.918 172.912,211.427   172.912,211.235 172.912,210.277 169.462,206.446 169.079,206.638 169.654,206.063 170.229,205.68 170.42,205.296 169.846,205.104   170.037,204.721 170.037,203.955 170.229,199.93 170.229,199.738 165.246,198.972 165.054,199.164 164.671,199.355 162.372,198.588   158.922,197.247 157.58,197.056 155.855,197.63 155.28,200.313 152.789,202.23 152.981,202.997 152.214,204.721 151.639,205.488   151.064,206.063 150.681,206.828 151.064,207.594 151.256,208.936 149.723,211.619 148.956,210.852 148.765,210.66 147.806,209.127   147.423,208.552 147.04,207.978 145.123,205.871 144.165,206.063 143.973,206.254 143.59,207.019 143.398,207.211 143.207,207.402   141.674,207.978 140.907,208.552 139.374,208.744 138.991,208.552 138.607,208.361 138.224,207.978 138.032,207.978   138.032,207.978 138.799,208.744 139.182,209.127 139.182,209.511 138.799,210.852 138.224,211.619 138.607,212.577 138.416,212.96   138.224,213.152 138.224,213.343 138.224,213.727 138.032,213.918 137.266,219.476 135.924,220.626 133.816,220.435   133.628,220.817 133.245,221.584 133.049,222.542 132.479,222.734 132.283,222.926 131.712,223.117 131.517,223.309   130.945,223.309 130.562,223.5 129.412,223.692 128.833,223.5 128.454,223.309 127.496,222.542 127.304,222.542 126.729,222.159   124.621,220.817 124.238,220.626 123.663,220.243 123.279,219.859 122.896,219.668 122.321,218.901 122.129,218.518   121.746,218.326 121.363,217.751 121.363,217.751 121.171,217.56 120.213,217.56 120.021,219.668 120.021,220.243 120.213,220.626   120.021,220.817 119.638,221.584 119.446,221.584 119.255,221.776 118.872,222.159 117.913,221.393 117.722,221.584 117.53,221.584   117.338,221.584 116.763,221.584 116.572,221.584 115.422,221.393 115.039,221.009 114.081,221.201 112.547,221.967   112.164,222.542 111.972,222.542 111.589,222.351 111.589,221.584 111.397,221.393 110.822,220.051 110.631,219.668   109.098,220.243 108.714,220.051 107.564,219.859 106.989,219.093 106.606,218.901 105.265,217.176 104.881,217.176 104.69,217.176   104.307,217.56 104.115,217.56 103.923,217.368 103.923,216.985 104.498,216.218 104.307,216.026 103.731,215.452 103.157,214.685   102.965,214.493 101.815,213.727 101.432,213.535 100.665,213.152 100.474,212.769 100.09,212.385 99.898,212.002 98.94,211.811   98.365,210.852 97.982,210.66 97.407,210.469 97.215,210.469 96.257,209.894 96.065,210.085 95.299,209.702 95.107,210.085   94.724,211.427 94.533,211.619 94.533,212.002 94.341,212.193 93.958,212.193 93.766,212.193 92.616,212.769 92.424,213.918   91.85,214.685 91.85,214.685 91.658,215.26 91.274,216.026 91.274,216.218 91.083,216.793 90.508,217.56 90.316,217.943   89.167,217.368 88.591,216.985 87.825,217.368 87.633,217.751 87.058,218.326 87.058,218.518 86.867,218.518 86.483,218.709   85.912,219.093 85.717,219.285 85.146,219.668 82.462,220.435 81.696,220.817 "
      transform="translate(106.95522,19.462687)"
      style={{
        fill: fill === undefined ? "#cdcccc" : fill,
        fillOpacity: 1,
        stroke: "gray",
        strokeMiterlimit: "1",
      }}
    />
  );
}

export default Gyeonggi;
