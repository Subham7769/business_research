import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const BasicButtons = ({ name, id,variant }) => {
  return (
    <Stack spacing={2} direction="row" key={id} >
      <Button
        variant={variant}
        style={{
          width: "100%",
        }}
      >
        {id}
        {name}
      </Button>
    </Stack>
  );
};
export default BasicButtons;
