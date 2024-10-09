import { useQuery } from "@apollo/client";
import { GetAllPokemonStockPairsDocument } from "../__generated__/graphql";
import { PSPPreviewCard } from "../components/PSPPreviewCard";
import {
  CircularProgress,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";

export const MainPage = () => {
  const { data, loading } = useQuery(GetAllPokemonStockPairsDocument);

  return (
    <Stack
      direction="column"
      bgcolor="whitesmoke"
      gap={6}
      paddingTop={4}
      paddingBottom={6}
    >
      <Typography
        variant="h1"
        textAlign="center"
        fontWeight={400}
        sx={{ wordWrap: "break-word" }}
      >
        Pokestocks
      </Typography>
      <Grid
        container
        columnGap={2}
        rowGap={4}
        paddingX={8}
        justifyContent="center"
      >
        {!loading && data ? (
          data.pokemonStockPair.map((psp) => {
            return (
              <Grid key={psp.id}>
                <PSPPreviewCard
                  pokemonName={psp.pokemon.name}
                  pokemonSpriteUrl={psp.pokemon.spriteUrl}
                  stockSymbol={psp.stock.symbol}
                />
              </Grid>
            );
          })
        ) : (
          <Container
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              width: "200px",
            }}
            disableGutters
          >
            <Grid display="flex" justifyContent="center">
              <CircularProgress size={200} />
            </Grid>
          </Container>
        )}
      </Grid>
    </Stack>
  );
};
