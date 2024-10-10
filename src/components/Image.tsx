import { Box, CircularProgress, Container } from "@mui/material";
import { useState } from "react";

interface ImageProps {
  height: number;
  width: number;
  src: string;
  alt: string;
}

export const Image = ({ height, width, src, alt }: ImageProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Container
          sx={{
            height,
            width,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={75} />
        </Container>
      )}
      <Box
        component="img"
        height={loading ? 0 : height}
        width={width}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoading(false)}
      />
    </>
  );
};
