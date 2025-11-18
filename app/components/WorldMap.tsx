'use client';

import { useState } from 'react';

interface Jurisdiction {
  name: string;
  cx: string;
  cy: string;
  description: string;
}

const jurisdictions: Jurisdiction[] = [
  { name: 'Spain', cx: '48%', cy: '42%', description: 'European Hub - Strategic tax planning' },
  { name: 'Portugal', cx: '46%', cy: '43%', description: 'NHR regime - Attractive for entrepreneurs' },
  { name: 'Cyprus', cx: '58%', cy: '45%', description: 'EU jurisdiction - IP box regime' },
  { name: 'Malta', cx: '52%', cy: '47%', description: 'EU member - Competitive tax framework' },
  { name: 'Estonia', cx: '56%', cy: '33%', description: 'Digital-first - E-residency program' },
  { name: 'United States', cx: '22%', cy: '42%', description: 'Delaware & Wyoming - LLC structures' },
  { name: 'UAE', cx: '65%', cy: '50%', description: 'Zero corporate tax - Free zone benefits' },
];

export default function WorldMap() {
  const [hoveredJurisdiction, setHoveredJurisdiction] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <svg viewBox="0 0 1000 500" className="w-full h-auto">
        {/* World map base - simplified continents */}
        <g className="fill-[#6B2C2C] opacity-20">
          {/* North America */}
          <path d="M 50 100 Q 80 80 120 90 L 180 110 L 200 150 Q 190 180 170 200 L 140 220 Q 110 210 90 190 L 60 160 Q 45 130 50 100 Z" />

          {/* South America */}
          <path d="M 160 240 Q 170 230 180 240 L 200 280 L 210 340 Q 200 380 180 400 L 160 410 Q 145 400 140 380 L 130 320 Q 135 270 160 240 Z" />

          {/* Europe */}
          <path d="M 450 150 Q 480 140 510 145 L 540 160 Q 550 180 545 200 L 520 220 Q 490 225 470 215 L 445 195 Q 440 170 450 150 Z" />

          {/* Africa */}
          <path d="M 480 240 Q 500 235 520 240 L 550 280 L 560 350 Q 550 400 520 430 L 490 440 Q 470 435 460 410 L 450 350 Q 455 280 480 240 Z" />

          {/* Asia */}
          <path d="M 580 120 Q 650 100 720 120 L 780 150 Q 800 180 790 220 L 760 260 Q 720 270 680 260 L 620 240 Q 580 200 580 120 Z" />

          {/* Australia */}
          <path d="M 720 340 Q 750 335 780 345 L 810 370 Q 815 395 800 410 L 770 420 Q 740 415 720 395 L 710 370 Q 710 355 720 340 Z" />
        </g>

        {/* Grid lines for visual structure */}
        <g className="stroke-[#6B2C2C] opacity-10" strokeWidth="0.5">
          <line x1="0" y1="250" x2="1000" y2="250" />
          <line x1="500" y1="0" x2="500" y2="500" />
        </g>

        {/* Jurisdiction markers */}
        {jurisdictions.map((jurisdiction) => (
          <g key={jurisdiction.name}>
            {/* Pulsing circle animation for hovered jurisdiction */}
            {hoveredJurisdiction === jurisdiction.name && (
              <circle
                cx={jurisdiction.cx}
                cy={jurisdiction.cy}
                r="25"
                className="fill-[#eeede9] opacity-20 animate-ping"
              />
            )}

            {/* Main marker */}
            <circle
              cx={jurisdiction.cx}
              cy={jurisdiction.cy}
              r="12"
              className="fill-[#6B2C2C] stroke-[#eeede9] stroke-2 cursor-pointer transition-all duration-300 hover:fill-[#eeede9] hover:stroke-[#6B2C2C] hover:stroke-3 hover:r-14"
              onMouseEnter={() => setHoveredJurisdiction(jurisdiction.name)}
              onMouseLeave={() => setHoveredJurisdiction(null)}
            />

            {/* Tooltip on hover */}
            {hoveredJurisdiction === jurisdiction.name && (
              <g>
                <rect
                  x={`calc(${jurisdiction.cx} - 100px)`}
                  y={`calc(${jurisdiction.cy} + 25px)`}
                  width="200"
                  height="60"
                  rx="8"
                  className="fill-white shadow-lg opacity-95"
                />
                <text
                  x={jurisdiction.cx}
                  y={`calc(${jurisdiction.cy} + 45px)`}
                  textAnchor="middle"
                  className="fill-[#1b1b1b] font-bold text-sm"
                >
                  {jurisdiction.name}
                </text>
                <text
                  x={jurisdiction.cx}
                  y={`calc(${jurisdiction.cy} + 65px)`}
                  textAnchor="middle"
                  className="fill-[#1b1b1b]/70 text-xs"
                >
                  {jurisdiction.description.split(' - ')[0]}
                </text>
              </g>
            )}
          </g>
        ))}

        {/* Decorative connection lines */}
        <g className="stroke-[#6B2C2C] opacity-10" strokeWidth="1" strokeDasharray="2,2">
          <path d="M 220,420 Q 350,350 480,240" />
          <path d="M 480,215 Q 500,200 520,220" />
          <path d="M 510,160 Q 530,150 560,160" />
        </g>
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-center gap-2 mt-8 text-sm text-[#1b1b1b]/70">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#6B2C2C]"></div>
          <span>Active jurisdictions</span>
        </div>
        <span className="mx-2">•</span>
        <span className="italic">Hover to explore</span>
      </div>
    </div>
  );
}
