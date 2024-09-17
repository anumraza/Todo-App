import React from 'react';
import { LinearProgress, Typography, Box } from '@mui/material';

const ProgressBar = ({ completedTasks, totalTasks }) => {
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <Box sx={{ width: '100%', marginBottom: '1rem' }}>
      <Typography variant="body1" gutterBottom>
        {completedTasks} of {totalTasks} tasks completed
      </Typography>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default ProgressBar;