"use client";
import { useStore } from "@/context/store";
import React, { useEffect } from "react";

interface BannerProps {
  svgRef: React.RefObject<SVGSVGElement>;
  bg: string;
  outerTop: string;
  outerBottom: string;
  innerTop: string;
  innerBottom: string;
  textColor: string;
  setCurrentClickedPart: (part: string) => void;
  setDisplayColorPicker: (display: string) => void;
}

const Banner: React.FC<BannerProps> = ({
  svgRef,
  bg,
  outerTop,
  outerBottom,
  innerTop,
  innerBottom,
  textColor,
  setCurrentClickedPart,
  setDisplayColorPicker,
}) => {
  const { inputData, setInputData } = useStore((state) => ({
    inputData: state.inputData,
    setInputData: state.setInputData,
  }));
  return (
    <div className="md:w-9/12 mx-auto">
      <svg
        height="400"
        viewBox="0 0 5110 2400"
        fill="none"
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        className="border-[2px] border-theme-kaali/40 rounded-md mx-auto w-[95%] h-fit md:w-full md:h-full"
      >
        <rect
          width="5110"
          height="2400"
          fill={bg}
          onClick={() => {
            setCurrentClickedPart("bg");
            setDisplayColorPicker("block");
            setInputData(bg);
          }}
        />
        <path
          d="M1496.67 294.398L2069.07 1216L1507.47 1548.4L953.07 1210L1496.67 294.398Z"
          onClick={() => {
            setCurrentClickedPart("outerTop");
            setDisplayColorPicker("block");
            setInputData(outerTop);
          }}
          fill={outerTop}
        />
        <path
          d="M1507.48 2105.2L2066.68 1319.2L1509.88 1649.2L956.68 1327.6L1507.48 2105.2Z"
          onClick={() => {
            setCurrentClickedPart("outerBottom");
            setDisplayColorPicker("block");
            setInputData(outerBottom);
          }}
          fill={outerBottom}
        />
        <path
          d="M1497.86 456.398L1919.06 1166.8L1502.66 1428.4L1099.46 1166.8L1497.86 456.398Z"
          onClick={() => {
            setCurrentClickedPart("innerTop");
            setDisplayColorPicker("block");
            setInputData(innerTop);
          }}
          fill={innerTop}
        />
        <path
          d="M1509.88 1992.4L1797.88 1572.4L1516.82 1750L1239.88 1603.6L1509.88 1992.4Z"
          onClick={() => {
            setCurrentClickedPart("innerBottom");
            setDisplayColorPicker("block");
            setInputData(innerBottom);
          }}
          fill={innerBottom}
        />
        <path
          d="M2456.58 1154.4H2205.79V669.109H2456.58V747.48H2290.19V863.83H2440.9V942.201H2290.19V1075.43H2456.58V1154.4Z"
          onClick={() => {
            setCurrentClickedPart("textColor");
            setDisplayColorPicker("block");
            setInputData(textColor);
          }}
          fill={textColor}
        />
        <path
          d="M2587.23 747.48H2487.15V669.109H2770.49V747.48H2671.02V1154.4H2587.23V747.48Z"
          onClick={() => {
            setCurrentClickedPart("textColor");
            setDisplayColorPicker("block");
            setInputData(textColor);
          }}
          fill={textColor}
        />
        <path
          d="M2877.03 1154.4H2792.63V669.109H2877.03V879.504H3000.61V669.109H3084.41V1154.4H3000.61V958.478H2877.03V1154.4Z"
          onClick={() => {
            setCurrentClickedPart("textColor");
            setDisplayColorPicker("block");
            setInputData(textColor);
          }}
          fill={textColor}
        />
        <path
          d="M2401.72 1481.63L2401.05 1477.95C2396.36 1481.3 2388.21 1492.12 2376.61 1510.43C2365 1528.51 2358.19 1540.78 2356.18 1547.26C2343.24 1551.94 2333.19 1549.49 2326.05 1539.89C2320.02 1531.86 2312.54 1521.59 2303.62 1509.09L2281.52 1477.61L2277.17 1471.92L2272.48 1466.23L2269.46 1467.24L2268.13 1476.61C2267.46 1480.4 2267.12 1483.64 2267.12 1486.32L2261.09 1643.35L2260.09 1681.19V1727.06H2191.12V1690.23C2190.67 1688.22 2190.56 1685.32 2190.78 1681.52C2193.91 1564.33 2194.46 1464.33 2192.46 1381.52L2189.11 1287.1C2188.88 1277.28 2189.67 1268.35 2191.45 1260.32C2193.01 1254.29 2196.59 1250.72 2202.17 1249.6C2207.75 1248.26 2212.43 1250.05 2216.23 1254.96L2219.58 1259.65L2223.59 1264.33C2226.94 1268.13 2229.4 1271.14 2230.96 1273.37L2263.77 1320.25L2296.92 1367.12C2302.72 1375.16 2309.64 1384.42 2317.68 1394.91L2338.77 1422.7C2339.44 1423.82 2340.56 1425.05 2342.12 1426.39L2344.13 1428.06L2346.47 1430.07L2348.82 1427.39L2350.83 1424.71C2352.39 1422.7 2353.62 1421.03 2354.51 1419.69L2392.68 1354.4L2430.85 1289.45C2433.53 1284.98 2436.99 1279.51 2441.23 1273.04L2451.27 1257.64C2458.64 1257.64 2463.33 1261.1 2465.33 1268.02C2467.57 1274.94 2469.02 1283.42 2469.69 1293.46L2470.69 1306.52L2471.36 1319.24C2474.93 1377.06 2476.94 1448.71 2477.39 1534.2L2478.73 1686.54L2479.06 1686.88V1730.4H2417.79L2415.45 1680.18L2403.39 1492.01C2403.17 1490.23 2402.83 1487.88 2402.39 1484.98L2401.72 1481.63Z"
          onClick={() => {
            setCurrentClickedPart("textColor");
            setDisplayColorPicker("block");
            setInputData(textColor);
          }}
          fill={textColor}
        />
        <path
          d="M2819.57 1661.43L2826.27 1664.11L2832.63 1666.79L2835.98 1668.13L2840 1669.8L2839.66 1679.51V1689.22C2839.66 1697.03 2839.33 1703.51 2838.66 1708.64C2837.1 1721.81 2829.06 1727.95 2814.55 1727.06C2797.59 1726.16 2781.85 1717.57 2767.34 1701.27C2765.33 1699.27 2762.99 1696.36 2760.31 1692.57L2756.96 1688.22L2753.62 1683.53C2750.27 1679.51 2747.37 1677.39 2744.91 1677.17C2742.45 1676.94 2739.22 1678.62 2735.2 1682.19L2716.78 1698.6C2709.87 1704.85 2703.73 1710.09 2698.37 1714.33C2683.64 1725.94 2665.22 1731.3 2643.12 1730.4C2613.21 1728.84 2590.67 1715.23 2575.49 1689.56C2560.98 1665.23 2551.61 1643.57 2547.37 1624.6L2539.66 1589.78L2532.3 1554.96C2527.39 1528.84 2524.04 1505.4 2522.25 1484.65C2520.91 1469.91 2519.8 1452.28 2518.91 1431.74L2518.24 1405.63L2517.23 1379.18L2514.89 1319.24L2512.88 1259.31C2512.88 1258.2 2512.88 1256.74 2512.88 1254.96L2513.21 1252.62V1249.6C2519.91 1249.16 2527.5 1248.6 2535.98 1247.93L2558.41 1246.59L2559.75 1257.3L2560.76 1268.02L2563.1 1310.2L2565.78 1352.73C2567.79 1386.66 2569.8 1415 2571.81 1437.77C2576.27 1490.9 2586.76 1546.03 2603.28 1603.17C2606.85 1615.45 2612.88 1630.07 2621.36 1647.03C2624.04 1652.39 2628.39 1655.96 2634.42 1657.75C2638.21 1658.86 2643.79 1659.42 2651.16 1659.42C2657.86 1659.42 2665.22 1656.41 2673.26 1650.38C2680.85 1644.36 2685.76 1637.99 2687.99 1631.3C2695.36 1610.54 2698.82 1589.44 2698.37 1568.02C2698.37 1560.43 2698.93 1550.83 2700.04 1539.22L2702.72 1510.43L2706.07 1461.54C2707.19 1441.68 2708.3 1425.49 2709.42 1412.99C2712.32 1378.62 2710.87 1333.42 2705.07 1277.39L2703.39 1258.31L2702.39 1248.6L2701.38 1238.22C2720.8 1236.21 2735.42 1236.32 2745.24 1238.55C2751.49 1239.89 2755.18 1245.14 2756.29 1254.29C2761.2 1294.02 2764.22 1340.56 2765.33 1393.91C2765.78 1412.21 2766 1435.54 2766 1463.89L2766.34 1533.53L2766.67 1563.33C2766.9 1574.49 2767.34 1584.31 2768.01 1592.79C2770.02 1618.91 2780.62 1638.78 2799.82 1652.39C2803.17 1654.62 2807.41 1656.86 2812.54 1659.09L2819.57 1661.43Z"
          onClick={() => {
            setCurrentClickedPart("textColor");
            setDisplayColorPicker("block");
            setInputData(textColor);
          }}
          fill={textColor}
        />
        <path
          d="M3252.16 1390.23C3261.09 1439.11 3268.35 1502.06 3273.93 1579.07C3275.27 1594.91 3276.49 1609.87 3277.61 1623.93C3279.17 1642.01 3280.51 1657.86 3281.63 1671.48C3284.53 1706.74 3285.65 1725.38 3284.98 1727.39C3283.86 1731.41 3268.12 1731.41 3237.77 1727.39L3237.1 1703.95L3235.76 1684.53L3234.75 1665.45L3233.75 1642.68C3233.3 1633.53 3232.74 1625.83 3232.07 1619.58L3226.05 1563.33C3223.37 1541.9 3220.13 1523.26 3216.34 1507.41C3214.77 1501.39 3212.99 1492.68 3210.98 1481.3L3208.3 1468.24L3205.62 1454.85C3198.26 1421.36 3180.73 1392.24 3153.06 1367.46C3147.25 1362.32 3141.11 1360.32 3134.64 1361.43C3130.62 1362.1 3125.94 1363.11 3120.58 1364.45L3106.85 1368.13C3099.48 1370.14 3094.13 1376.39 3090.78 1386.88C3076.72 1432.41 3066.9 1483.75 3061.32 1540.9L3060.65 1547.59C3060.42 1550.27 3060.09 1552.61 3059.64 1554.62C3058.97 1560.65 3058.53 1565.67 3058.3 1569.69H3035.53L3016.11 1507.41C3016.11 1507.41 3016.23 1507.19 3016.45 1506.74L3003.06 1464.89L2990 1422.7C2985.31 1407.53 2974.6 1393.24 2957.86 1379.85C2953.84 1376.72 2949.93 1376.28 2946.14 1378.51C2942.34 1380.52 2939.78 1384.65 2938.44 1390.9L2934.75 1405.96L2931.74 1421.03C2929.28 1432.64 2927.61 1442.79 2926.72 1451.5L2924.71 1472.93C2922.25 1536.1 2920.58 1621.59 2919.69 1729.4C2914.11 1730.74 2906.96 1730.74 2898.26 1729.4L2897.92 1729.73H2895.58C2885.98 1730.63 2879.95 1729.62 2877.5 1726.72C2875.04 1723.82 2873.93 1716.57 2874.15 1704.96L2875.82 1629.62L2877.83 1554.29L2879.84 1468.91L2882.19 1411.66C2887.99 1344.02 2898.82 1300.05 2914.66 1279.74C2928.73 1261.88 2944.13 1250.83 2960.87 1246.59C2966.9 1245.25 2972.92 1244.69 2978.95 1244.91C2981.18 1245.14 2983.41 1245.36 2985.65 1245.58C2987.21 1246.03 2988.77 1246.48 2990.33 1246.92L2992.01 1247.26C3002.5 1255.74 3010.09 1264.78 3014.78 1274.38C3016.78 1278.4 3019.02 1283.42 3021.47 1289.45L3027.83 1304.18L3042.57 1337.66C3044.57 1341.9 3046.47 1344.36 3048.26 1345.03C3050.27 1345.7 3052.83 1344.69 3055.96 1342.01C3061.76 1336.88 3066.67 1330.96 3070.69 1324.27C3079.84 1307.97 3093.57 1289.33 3111.87 1268.35C3116.56 1262.99 3120.24 1259.09 3122.92 1256.63C3127.16 1252.39 3131.29 1249.04 3135.31 1246.59C3142.01 1242.35 3150.04 1240.45 3159.42 1240.9C3172.59 1241.34 3183.3 1247.15 3191.56 1258.31L3203.61 1274.38C3208.08 1280.63 3211.87 1286.21 3215 1291.12C3223.48 1303.62 3230.06 1315.78 3234.75 1327.62C3242.34 1346.14 3248.15 1367.01 3252.16 1390.23Z"
          onClick={() => {
            setCurrentClickedPart("textColor");
            setDisplayColorPicker("block");
            setInputData(textColor);
          }}
          fill={textColor}
        />
        <path
          d="M3423.93 1486.99C3429.95 1489.22 3434.86 1491.34 3438.66 1493.35C3459.19 1504.07 3475.04 1519.58 3486.2 1539.89C3497.81 1561.32 3502.05 1583.98 3498.93 1607.86C3494.02 1642.01 3483.08 1671.36 3466.11 1695.92C3459.64 1705.52 3451.49 1712.55 3441.67 1717.01C3426.49 1723.93 3402.83 1728.28 3370.69 1730.07C3362.43 1730.52 3354.06 1730.52 3345.58 1730.07C3341.56 1729.85 3338.77 1729.07 3337.21 1727.73C3335.87 1726.39 3334.98 1723.82 3334.53 1720.02C3326.05 1653.95 3322.92 1597.37 3325.15 1550.27C3327.61 1496.92 3327.72 1446.59 3325.49 1399.27C3324.37 1378.95 3323.37 1354.18 3322.48 1324.94L3319.8 1250.61C3319.8 1250.61 3320.13 1249.6 3320.8 1247.59L3326.16 1247.93L3331.85 1248.26C3357.07 1250.72 3385.53 1256.97 3417.23 1267.01C3434.86 1272.59 3448.14 1285.65 3457.07 1306.19C3461.76 1316.45 3465.33 1330.52 3467.79 1348.37C3472.25 1379.62 3464.1 1406.74 3443.35 1429.74C3429.73 1444.91 3416.34 1456.97 3403.17 1465.9C3402.94 1466.12 3399.37 1468.91 3392.45 1474.27C3394.02 1474.94 3395.69 1475.61 3397.48 1476.28L3401.83 1478.28C3404.95 1479.4 3407.41 1480.4 3409.19 1481.3L3416.56 1483.98L3423.93 1486.99Z"
          onClick={() => {
            setCurrentClickedPart("textColor");
            setDisplayColorPicker("block");
            setInputData(textColor);
          }}
          fill={textColor}
        />
        <path
          d="M3852.83 1696.92C3853.28 1702.95 3851.27 1706.97 3846.8 1708.98L3837.43 1712.99C3833.86 1714.56 3830.62 1715.67 3827.72 1716.34C3819.68 1718.13 3808.41 1720.02 3793.9 1722.03C3785.64 1723.15 3778.17 1719.69 3771.47 1711.65C3769.91 1709.65 3767.79 1706.86 3765.11 1703.28L3759.08 1694.91C3753.72 1688.44 3749.04 1684.98 3745.02 1684.53C3740.78 1684.09 3735.87 1686.43 3730.29 1691.57L3728.95 1692.57L3728.28 1693.57C3721.8 1702.5 3713.21 1709.42 3702.5 1714.33C3698.26 1716.34 3693.34 1718.24 3687.76 1720.02L3672.36 1724.04C3661.87 1726.5 3649.37 1728.51 3634.86 1730.07C3618.79 1731.86 3605.29 1725.83 3594.35 1711.99C3572.47 1685.43 3557.52 1653.84 3549.48 1617.23C3542.34 1584.42 3538.43 1549.27 3537.76 1511.77C3537.54 1498.6 3537.65 1482.3 3538.1 1462.88L3538.77 1439.11V1415.67C3544.8 1382.86 3551.27 1357.53 3558.19 1339.67C3568.23 1314.22 3582.07 1293.91 3599.71 1278.73L3605.06 1274.38C3607.07 1272.59 3608.97 1271.37 3610.76 1270.7C3641.56 1256.86 3668.57 1251.39 3691.78 1254.29L3711.54 1256.63C3719.13 1257.53 3725.6 1258.42 3730.96 1259.31C3738.32 1260.65 3743.01 1262.66 3745.02 1265.34C3747.25 1267.79 3748.81 1273.49 3749.71 1282.41C3750.38 1289.78 3750.93 1298.04 3751.38 1307.19L3752.72 1374.82C3753.17 1401.83 3753.95 1424.49 3755.06 1442.79C3757.52 1478.28 3761.98 1516.12 3768.46 1556.3C3769.8 1564.33 3772.25 1573.71 3775.82 1584.42L3781.18 1598.15L3786.2 1611.88C3790 1622.15 3796.8 1627.28 3806.63 1627.28C3818.68 1627.28 3827.83 1627.17 3834.08 1626.94C3840.33 1626.5 3844.13 1626.94 3845.47 1628.28C3847.03 1629.85 3848.14 1633.86 3848.81 1640.34L3852.83 1696.92Z"
          onClick={() => {
            setCurrentClickedPart("textColor");
            setDisplayColorPicker("block");
            setInputData(textColor);
          }}
          fill={textColor}
        />
        <path
          d="M4134.42 1729.06C4133.08 1730.18 4130.17 1730.63 4125.71 1730.4L4116 1729.4L4106.29 1728.73L4081.18 1727.39C4071.36 1726.72 4062.99 1726.39 4056.07 1726.39C4023.48 1725.72 3985.09 1725.38 3940.89 1725.38L3902.05 1726.72C3900.04 1726.72 3897.7 1726.5 3895.02 1726.05L3886.98 1724.71C3888.77 1716.45 3890.78 1706.86 3893.01 1695.92L3895.69 1681.86L3898.7 1667.79L3902.72 1668.13H3906.4L3913.1 1668.46L3936.54 1670.47L3959.97 1672.15C3967.34 1672.59 3971.8 1672.15 3973.37 1670.81C3975.15 1669.24 3976.38 1664.89 3977.05 1657.75C3979.5 1629.18 3981.29 1605.29 3982.41 1586.1L3986.09 1514.78C3987.65 1485.09 3988.99 1461.32 3990.11 1443.46C3991.22 1428.28 3992.67 1410.43 3994.46 1389.89L3999.48 1336.66C3999.93 1329.51 3999.37 1324.71 3997.81 1322.26C3996.02 1319.58 3991.67 1317.46 3984.75 1315.9L3978.05 1314.56L3930.17 1308.87L3928.84 1298.82C3928.39 1297.26 3928.17 1295.14 3928.17 1292.46C3928.17 1290.67 3928.28 1288.55 3928.5 1286.1C3929.17 1281.19 3930.06 1275.16 3931.18 1268.02L3932.85 1258.64L3934.53 1248.93L4156.18 1249.27V1261.99C4156.62 1265.34 4156.85 1267.46 4156.85 1268.35L4156.18 1286.77C4155.73 1294.8 4155.17 1301.61 4154.5 1307.19C4154.28 1310.09 4153.5 1313.33 4152.16 1316.9L4150.15 1321.92L4148.14 1326.28C4145.91 1330.96 4141.78 1333.31 4135.75 1333.31L4113.99 1332.64L4096.25 1331.97C4089.33 1331.52 4083.52 1331.41 4078.83 1331.63C4072.81 1331.86 4068.9 1332.97 4067.12 1334.98C4065.11 1336.99 4063.99 1341.01 4063.77 1347.03L4062.76 1383.53C4062.32 1398.26 4061.76 1410.43 4061.09 1420.03L4057.07 1479.96L4053.39 1539.56L4050.04 1599.49L4047.7 1659.42C4047.25 1665.45 4047.7 1669.13 4049.04 1670.47C4050.38 1672.03 4054.06 1672.93 4060.08 1673.15L4093.9 1674.49L4127.38 1675.49H4140.11C4139.44 1682.41 4138.99 1687.55 4138.77 1690.9L4136.76 1720.36C4136.54 1725.05 4135.75 1727.95 4134.42 1729.06Z"
          onClick={() => {
            setCurrentClickedPart("textColor");
            setDisplayColorPicker("block");
            setInputData(textColor);
          }}
          fill={textColor}
        />
      </svg>
    </div>
  );
};

export default Banner;
