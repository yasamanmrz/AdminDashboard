
"use client"
import { AreaChart, Area, ResponsiveContainer, Tooltip} from "recharts"

const data = [
    { day: "01", value: 22400 },
    { day: "03", value: 28300 },
    { day: "05", value: 25100 },
    { day: "07", value: 30100},
    { day: "09", value: 22850 },
    { day: "11", value: 32500 },
    { day: "13", value: 34900 },
    { day: "15", value: 34550 },
    { day: "17", value: 35900 },
    { day: "19", value: 36200 },
    { day: "21", value: 37850 },
    { day: "23", value: 40800 },
    { day: "25", value: 42800 },
    { day: "27", value: 43550 },
    { day: "29", value: 44800 },
    { day: "31", value: 48250 },
  ]

export default function RevenueChart() {
  return (
    <div className="w-full h-36 mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{top:10, right:0, left:0, bottom:0}}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.22} />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip content={({active, payload})=>{
            if(!active || !payload || !payload.length)return null
            return(
                <div className="bg-surface border border-foreground/10 rounded-lg px-3 py-2 shadow-xl">
                   <p className="text-foreground text-xs font-medium">${(payload[0].value).toLocaleString()}</p>
                </div>
            )
          }}/>
          <Area type="monotone" dataKey="value" baseValue="dataMin" stroke="var(--primary)" strokeWidth={2} fill="url(#revenueGradient)" dot={false} isAnimationActive={true} animationDuration={1800}/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
