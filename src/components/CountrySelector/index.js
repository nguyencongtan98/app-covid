import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import React from "react";

export const CountrySelector = ({ value, handleOnchange, countries }) => {
  return (
    <FormControl>
      <InputLabel htmlFor="country-selector" shrink>
        Coubntry
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnchange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((item, index) => {
          return (
            <option key={index} value={item.ISO2.toLowerCase()}>
              {item.Country}
            </option>
          );
        })}
      </NativeSelect>
      <FormHelperText>Select Country</FormHelperText>
    </FormControl>
  );
};
