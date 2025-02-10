import * as React from "react";
import { Box, Stack, Skeleton } from "@mui/material";

const ProductSkleton = () => {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "30px",
      }}
    >
      <Stack spacing={1}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            columnGap: "50px",
          }}
        >
          <Box
            sx={{
              width: "90%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "row",
              columnGap: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "30px",
              }}
            >
              <Skeleton variant="rectangular" width={100} height={100} />
              <Skeleton variant="rectangular" width={100} height={100} />
              <Skeleton variant="rectangular" width={100} height={100} />
              <Skeleton variant="rectangular" width={100} height={100} />
            </Box>
            <Box>
              <Skeleton variant="rectangular" width={450} height={490} />
            </Box>
          </Box>
          <Box>
            <Skeleton variant="text" width={610} height={30} />
            <Skeleton variant="text" width={610} height={30} />
            <Skeleton variant="text" width={610} height={30} />
            <Skeleton variant="text" width={610} height={30} />
            <Skeleton variant="text" width={210} height={30} />
            <Skeleton variant="text" width={210} height={30} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Skeleton variant="rectangular" width={120} height={120} />
              <Skeleton variant="rectangular" width={120} height={120} />
              <Skeleton variant="rectangular" width={120} height={120} />
              <Skeleton variant="rectangular" width={120} height={120} />
            </Box>
            <Skeleton variant="text" width={610} height={30} />
            <Skeleton variant="text" width={610} height={30} />
            <Skeleton variant="text" width={210} height={30} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductSkleton;
