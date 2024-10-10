import {
  Card,
  CardActionArea,
  CardContent,
  Grid2 as Grid,
  SxProps,
  Typography,
} from "@mui/material";
import { Image } from "./Image";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

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
  const { toggleModal } = useContext(ModalContext);

  const contentStyling: SxProps = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
      <Card>
        <CardActionArea onClick={() => toggleModal()}>
          <Grid container direction="row" justifyContent="space-around">
            <CardContent sx={contentStyling}>
              <Image
                height={125}
                width={125}
                src={pokemonSpriteUrl}
                alt={`Official artwork of ${pokemonName}`}
              />
              <Typography
                variant="h6"
                component="span"
                fontWeight={600}
                textAlign="center"
                marginTop={2}
              >
                {pokemonName}
              </Typography>
            </CardContent>
            <CardContent sx={contentStyling}>
              <Image
                height={125}
                width={125}
                src={`https://logo.synthfinance.com/ticker/${stockSymbol}`}
                alt={`${stockSymbol} company logo`}
              />
              <Typography
                variant="h6"
                component="span"
                fontWeight={600}
                textAlign="center"
                marginTop={2}
              >
                {stockSymbol}
              </Typography>
            </CardContent>
          </Grid>
        </CardActionArea>
      </Card>
    </>
  );
};
