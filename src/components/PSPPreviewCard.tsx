import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";

interface PSPPreviewCardProps {
  pokemonName: string;
  pokemonSpriteUrl: string;
  stockSymbol: string;
}

export const PSPPreviewCard = ({
  pokemonName,
  pokemonSpriteUrl,
  stockSymbol,
}: PSPPreviewCardProps) => {
  const contentStyling: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  };

  const mediaStyling: SxProps = {
    width: 125,
  };

  return (
    <>
      <Card>
        <Stack direction="row" justifyContent="space-around">
          <CardContent sx={contentStyling}>
            <CardMedia
              component="img"
              sx={mediaStyling}
              src={pokemonSpriteUrl}
              loading="lazy"
            />
            <Typography
              variant="h6"
              component="span"
              fontWeight={600}
              textAlign="center"
            >
              {pokemonName}
            </Typography>
          </CardContent>
          <CardContent sx={contentStyling}>
            <CardMedia
              component="img"
              sx={mediaStyling}
              src={`https://logo.synthfinance.com/ticker/${stockSymbol}`}
              loading="lazy"
            />
            <Typography
              variant="h6"
              component="span"
              fontWeight={600}
              textAlign="center"
            >
              {stockSymbol}
            </Typography>
          </CardContent>
        </Stack>
      </Card>
    </>
  );
};
