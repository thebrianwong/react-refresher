import { Box, SxProps } from "@mui/material";

interface ImageProps {
  styling: SxProps;
  src: string;
  alt: string;
}

export const Image = ({ styling, src, alt }: ImageProps) => {
  return (
    <Box component="img" sx={styling} src={src} alt={alt} loading="lazy" />
  );
};
