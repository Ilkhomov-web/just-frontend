import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

export default function LoadSkleton() {
  return (
    <Box sx={{width: '90%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="rectangular" width={280} height={280} />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="text" width={210} height={30} />
        <Skeleton variant="text" width={170} height={30} />
      </Stack>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="rectangular" width={280} height={280} />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="text" width={210} height={30} />
        <Skeleton variant="text" width={170} height={30} />
      </Stack>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="rectangular" width={280} height={280} />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="text" width={210} height={30} />
        <Skeleton variant="text" width={170} height={30} />
      </Stack>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="rectangular" width={280} height={280} />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="text" width={210} height={30} />
        <Skeleton variant="text" width={170} height={30} />
      </Stack>
    </Box>
  );
}