import React, { useState } from "react";
import { Box, Container, TextField, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

function number_cardinality(n) {
  if (n % 10 === 0) {
    return "zero";
  } else if (n % 10 === 5) {
    return "five";
  } else if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

function NumberCardinality() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    const number = parseInt(input);
    if (!isNaN(number)) {
      const cardinality = number_cardinality(number);
      setResult(cardinality);
    } else {
      setResult("Invalid input, please enter an integer");
    }
  };

  return (
    <StyledContainer maxWidth='sm'>
      <Box>
        <Typography variant='h3' component='h1' gutterBottom>
          Number Cardinality
        </Typography>
        <Box display='flex' alignItems='center' mb={2}>
          <TextField
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            label='Enter a number'
            variant='outlined'
          />
          <Button
            onClick={handleSubmit}
            variant='contained'
            color='primary'
            sx={{ marginLeft: 1 }}
          >
            Submit
          </Button>
        </Box>
        {result && (
          <Typography variant='h6' component='p'>
            Result: {result}
          </Typography>
        )}
      </Box>
    </StyledContainer>
  );
}

export default NumberCardinality;
