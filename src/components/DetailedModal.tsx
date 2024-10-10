import { useQuery } from "@apollo/client";
import {
  CircularProgress,
  Container,
  Dialog,
  DialogTitle,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { GetPokemonStockPairDocument } from "../codegen/graphql";
import { Image } from "./Image";

interface DetailedModalProps {
  open: boolean;
  pspId: string;
  onClose: () => void;
}

export const DetailedModal = ({ open, pspId, onClose }: DetailedModalProps) => {
  const { data, loading } = useQuery(GetPokemonStockPairDocument, {
    variables: { id: pspId },
    skip: pspId === "",
  });

  const pokemonStockPair = data?.pokemonStockPair[0];

  return (
    <Dialog open={open} onClose={onClose}>
      <Container
        sx={{
          height: loading ? "75vh" : "inherit",
          width: loading ? "35vw" : "inherit",
          minWidth: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!loading && pokemonStockPair ? (
          <Stack>
            <DialogTitle variant="h3" component="h1" textAlign="center">
              {pokemonStockPair.pokemon.name} - #
              {pokemonStockPair.pokemon.pokedexNumber}
            </DialogTitle>
            <Grid2 container direction="row">
              <Grid2>
                <Image
                  height={275}
                  width={275}
                  src={pokemonStockPair.pokemon.spriteUrl}
                  alt={`Official artwork of ${pokemonStockPair.pokemon.name}`}
                />
              </Grid2>
              <Stack>
                <Grid2 container gap={1}>
                  <Image
                    height={25}
                    width={125}
                    src={pokemonStockPair.pokemon.type1.spriteUrl}
                    alt={`${pokemonStockPair.pokemon.type1.type} type sprite`}
                  />
                  {pokemonStockPair.pokemon.type2 && (
                    <Image
                      height={25}
                      width={125}
                      src={pokemonStockPair.pokemon.type2.spriteUrl}
                      alt={`${pokemonStockPair.pokemon.type2.type} type sprite`}
                    />
                  )}
                </Grid2>
                <Stack>
                  <Typography>{pokemonStockPair.stock.symbol}</Typography>
                  <Typography
                    sx={{ wordWrap: "break-word", whiteSpace: "initial" }}
                    whiteSpace="initial"
                    maxWidth="250px"
                  >
                    {pokemonStockPair.stock.name}
                  </Typography>
                  <Image
                    height={125}
                    width={125}
                    src={`https://logo.synthfinance.com/ticker/${pokemonStockPair.stock.symbol}`}
                    alt={`${pokemonStockPair.stock.symbol} company logo`}
                  />
                  {pokemonStockPair.stock.price && (
                    <Typography>
                      ${pokemonStockPair.stock.price.toFixed(2)}
                    </Typography>
                  )}
                </Stack>
              </Stack>
            </Grid2>
          </Stack>
        ) : (
          <CircularProgress size={100} />
        )}
      </Container>
    </Dialog>
  );
};
