import React from "react";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  Cell,
} from "recharts";
import PropTypes from 'prop-types';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Bargraph = () => {
	const data = [
	  
	  { name: "Enosis", Alumni: 75 },
	  { name: "Meta", Alumni: 2 },
	  { name: "Orbitex", Alumni: 70 },
	  { name: "Google", Alumni: 3 },
	  { name: "BS-23", Alumni: 5 },
	  { name: "Raketun", Alumni: 1 },
	  { name: "MonsterLab", Alumni: 20 },
	  { name: "Samsang", Alumni: 30 },
	  { name: "Newscreed", Alumni: 17 },
	  { name: "Apple", Alumni: 1 },
	  
	];

	const colors = scaleOrdinal(schemeCategory10).range();

	const bata = [
	{
		name: 'Page A',
		uv: 4000,
		female: 2400,
		male: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		female: 1398,
		male: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		female: 9800,
		male: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		female: 3908,
		male: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		female: 4800,
		male: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		female: 3800,
		male: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		female: 4300,
		male: 2100,
	},
	];

	const getPath = (x, y, width, height) => `M${x},${y + height}
			C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
			C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
			Z`;

	const TriangleBar = (props) => {
	const { fill, x, y, width, height } = props;

	return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
	};

	TriangleBar.propTypes = {
	fill: PropTypes.string,
	x: PropTypes.number,
	y: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	};
  
	return (
	  <div style={{ textAlign: "center" }}>
		<Box sx={{ flexGrow: 1 , paddingTop: "100px"}}>
			<Grid container spacing={2}>
			<Grid item xs={6}>
					<Item>
						<h1>Software Engineer</h1>
						<div className="App">
						
						<BarChart
							width={500}
							height={300}
							data={data}
							margin={{
							top: 5,
							right: 30,
							left: 80,
							bottom: 5,
							}}
							barSize={20}
						>
							<XAxis
							dataKey="name"
							scale="point"
							padding={{ left: 10, right: 10 }}
							/>
							<YAxis />
							<Tooltip />
							<Legend />
							<CartesianGrid strokeDasharray="3 3" />
							<Bar dataKey="Alumni" fill="#8884d8"  />
						</BarChart>
						</div>
					</Item>
				</Grid>
				<Grid item xs={6}>
					<Item>
						<h1>Researcher</h1>
						<div className="App">
						
						<BarChart
							width={500}
							height={300}
							data={bata}
							margin={{
								top: 20,
								right: 30,
								left: 20,
								bottom: 5,
							}}
							>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Bar dataKey="female" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
								{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={colors[index % 20]} />
								))}
							</Bar>
						</BarChart>
						</div>
					</Item>
				</Grid>
				
			</Grid>
			</Box>
		
	  </div>
	);
  };
  
  export default Bargraph;