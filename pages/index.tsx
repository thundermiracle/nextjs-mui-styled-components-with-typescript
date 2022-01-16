import React from "react";
import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Box,
} from "@mui/material";
import styled, { css } from "styled-components";
import type { NextPage } from "next";

const ColorfulLink = styled("a")<{ selected: boolean }>`
  color: ${(props) => props.theme.status.info};
  text-decoration: none;
  transition: color 2s ease-out;
  position: relative;
  &::after {
    border-color: ${(props) => props.theme.status.info};
    left: 50%;
    right: 50%;
    transition: left 0.35s cubic-bezier(0, 0.5, 0, 1),
      right 0.35s cubic-bezier(0, 0.5, 0, 1), border-color 0.35s ease-out;
  }
  ${(props) =>
    props.selected &&
    css`
      color: ${(props) => props.theme.status.danger};
      &::after {
        border-radius: 1em;
        border-top: 0.1em solid #2f56b0;
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0.14em;
        border-color: ${(props) => props.theme.status.danger};
      }
    `}
`;

const Home: NextPage = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center" }}>
        <FormGroup sx={{ display: "block" }}>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChecked} />}
            label="select to see the magic"
          />
        </FormGroup>

        <ColorfulLink selected={checked} href="https://google.com">
          Go to google.com
        </ColorfulLink>
      </Box>
    </Container>
  );
};

export default Home;
