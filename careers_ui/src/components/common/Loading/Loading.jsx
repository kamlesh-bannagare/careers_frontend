import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import {
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ImageSkeleton = styled(Skeleton)({
  width: '100%',
  height: '100%',
  borderRadius: 'inherit', // Matches border radius of actual images
  objectFit: 'cover',
});

function SkeletonChildrenDemo({ cols = 1, rows = 1 }) {
  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        mb: 4,
        width: '100%',
        height: 'auto',
      }}
    >
      <ImageSkeleton variant="rectangular" width="100%" height="200px" />
      <Box sx={{ p: 1 }}>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="80%" />
      </Box>
    </Box>
  );
}

SkeletonChildrenDemo.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,
};

export default function SkeletonChildren() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));

  const getCols = () => {
    if (isXs) return 1;
    if (isSm) return 1;
    if (isMd) return 3;
    return 4;
  };

  return (
    <Box sx={{ width: '100%', height: 'auto', overflowY: 'auto', p: 2 }}>
      <Grid container spacing={2}>
        {Array.from(new Array(12)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <SkeletonChildrenDemo />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
