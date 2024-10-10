import { useQuery } from "@apollo/client";
import {
  CircularProgress,
  Container,
  Dialog,
  DialogTitle,
} from "@mui/material";
import { GetPokemonStockPairDocument } from "../codegen/graphql";

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

  return (
    <Dialog open={open} onClose={onClose}>
      <Container
        sx={{
          height: "75vh",
          width: "35vw",
          minWidth: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!loading && data ? (
          <DialogTitle variant="h3" component="h1">
            {data.pokemonStockPair[0].pokemon.name}
          </DialogTitle>
        ) : (
          <CircularProgress size={100} />
        )}
      </Container>
    </Dialog>
  );
};
