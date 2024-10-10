import {
  Card,
  CardContent,
  Grid2 as Grid,
  SxProps,
  Typography,
} from "@mui/material";
import { Image } from "./Image";

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

  const imageStyling: SxProps = {
    width: 125,
    height: 125,
  };

  return (
    <>
      <Card>
        <Grid container direction="row" justifyContent="space-around">
          <CardContent sx={contentStyling}>
            <Image
              styling={imageStyling}
              src={pokemonSpriteUrl}
              alt={`Official artwork of ${pokemonName}`}
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
            <Image
              styling={imageStyling}
              src={`https://logo.synthfinance.com/ticker/${stockSymbol}`}
              alt={`${stockSymbol} company logo`}
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
        </Grid>
      </Card>
    </>
  );
};
