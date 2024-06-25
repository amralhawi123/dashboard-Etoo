import  React from 'react';
import { styled } from '@mui/material/styles'; 
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import country1 from "../../imgs/country-01.svg"
import country2 from "../../imgs/country-02.svg"
import country3 from "../../imgs/country-03.svg"
import country5 from "../../imgs/country-05.svg"
import country6 from "../../imgs/country-06.svg"

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 8,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


export default function CustomizedProgressBars() {
  return (
    <div>
    <Stack spacing={2} sx={{ flexGrow: 1 }} style={{display:"flex",marginBottom:"5px"}}>
      <p style={{ width: "180px"}}><img src={country1} alt='country-1' style={{marginRight:"8px"}}/>United States</p>
      <BorderLinearProgress variant="determinate" value={100} />
    </Stack>
    <Stack spacing={2} sx={{ flexGrow: 1 }} style={{display:"flex",marginBottom:"5px"}}>
      <p style={{ width: "180px"}}><img src={country2} alt='country-1' style={{marginRight:"8px"}}/>Canada</p>
      <BorderLinearProgress variant="determinate" value={90} />
    </Stack>
    <Stack spacing={2} sx={{ flexGrow: 1 }} style={{display:"flex",marginBottom:"5px"}}>
      <p style={{ width: "180px"}}><img src={country3} alt='country-1' style={{marginRight:"8px"}}/>France</p>
      <BorderLinearProgress variant="determinate" value={80} />
    </Stack>
    <Stack spacing={2} sx={{ flexGrow: 1 }} style={{display:"flex",marginBottom:"5px"}}>
      <p style={{ width: "180px"}}><img src={country5} alt='country-1' style={{marginRight:"8px"}}/>Australia</p>
      <BorderLinearProgress variant="determinate" value={50} />
    </Stack>
    <Stack spacing={2} sx={{ flexGrow: 1 }} style={{display:"flex",marginBottom:"5px"}}>
      <p style={{ width: "180px"}}><img src={country6} alt='country-1' style={{marginRight:"8px"}}/>India</p>
      <BorderLinearProgress variant="determinate" value={30} />
    </Stack>
    </div>
  );
}