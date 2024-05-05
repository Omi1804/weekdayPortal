import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Chip,
} from "@mui/material";

const MultiSelect = ({
  minWidth,
  label,
  options,
  value,
  onChange,
  ...props
}: any) => {
  // Function to handle the deletion of a chip
  const handleDelete = (item: any) => () => {
    onChange({
      target: {
        value: value.filter((v: any) => v !== item),
      },
    });
  };

  return (
    <FormControl
      sx={{
        minWidth: minWidth,
        bgcolor: "white",
      }}
      size="small"
      {...props}
    >
      <InputLabel
        sx={{
          paddingInline: "1rem",
        }}
      >
        {label}
      </InputLabel>
      <Select
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {selected.map((item: any) => (
              <Chip
                key={item}
                label={item}
                onDelete={handleDelete(item)}
                color="primary"
                size="small"
              />
            ))}
          </div>
        )}
      >
        {options.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelect;
