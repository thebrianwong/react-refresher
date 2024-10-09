import { useQuery } from "@apollo/client";
import { GetAllPokemonStockPairsDocument } from "../__generated__/graphql";
import { PSPPreviewCard } from "../components/PSPPreviewCard";
import { Grid2 as Grid, Stack, Typography } from "@mui/material";

export const MainPage = () => {
  const { data } = useQuery(GetAllPokemonStockPairsDocument);

  return (
    <Stack
      direction="column"
      bgcolor="whitesmoke"
      gap={6}
      paddingTop={4}
      paddingBottom={6}
    >
      <Typography variant="h1" textAlign="center" fontWeight={400}>
        Pokestocks
      </Typography>
      <Grid
        container
        columnGap={2}
        rowGap={4}
        paddingX={12}
        justifyContent="center"
      >
        {data &&
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
          })}
      </Grid>
    </Stack>
  );
};
