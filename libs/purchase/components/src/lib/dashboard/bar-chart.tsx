import { FC } from 'react';
import { LineChart } from '@mui/x-charts';

type LineGraphProps = {
    label: string,
    yData: number[];
    xData: string[];
}
export const LineGraph: FC<LineGraphProps> = (props) => {
    const { label, xData, yData } = props;
    return (
        <LineChart
            width={600}
            height={300}
            series={[{ 
                data: yData, 
                label: label, 
                area: true, 
                showMark: false, 
                color: '#009900', 
            }]}
            xAxis={[{ scaleType: 'point', data: xData }]}
        />
    )
}