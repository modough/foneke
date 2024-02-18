import './chartComponent.css';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
    { name: 'Taxis', value: 500 },
    { name: 'Private', value: 300 },
    { name: 'Gov', value: 200 },
    { name: 'Others', value: 50 },
];

const COLORS = ['#0a568a', '#FFBB28', '#FF8042', '#d3d3d3'];
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
        <text style={{ fontSize: '12px' }} x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const ChartComponent = () => {
    return (
        <PieChart width={300} height={250}>
            <Pie
                data={data}
                cx={200}
                cy={100}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Legend width={90} />
        </PieChart>
    )
}

export default ChartComponent