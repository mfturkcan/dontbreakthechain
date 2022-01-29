import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Chain from "../../interfaces/Chain/Chain";

const CreateChain = (props: any) => {

  const [chain, setChain] = useState({} as Chain);


  async function handleSubmit(event: any) {
    event.preventDefault();

    setChain({
      OverarchingGoal: event.target.goal.value,
      ChainStatus: true,
      ChainTitle: event.target.title.value,
      DailyGoal: event.target.daily_goal.value
    });


    const response = await fetch("https://localhost:7034/api/Chain", {
      body: JSON.stringify(chain),
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
    });

    console.log(response);
  }

  return (
    <Stack
      spacing={2}
      direction="column"
      alignItems="start"
      padding={5}
    >
      <Typography variant="h3">Create A New Habit</Typography>
      <Typography variant="h6">Start with creating your first chain to follow!</Typography>

      <Stack
        component="form"
        direction="column"
        alignItems="start"
        spacing={3}
        width="100%"
        onSubmit={handleSubmit}
      >
        <TextField variant="standard" name="title" label="Chain Title" helperText="Example: Reading" style={{ width: "40%" }} required></TextField>
        <TextField variant="standard" name="goal" label="Overarching Goal" helperText="Example: I will read 14 book until end of this year" style={{ width: "40%" }} required></TextField>
        <TextField variant="standard" name="daily_goal" label="Potential Daily Goal" helperText="Example: I will read 10 pages for each day" style={{ width: "40%" }} required></TextField>
        <TextField variant="standard" name="inspiration" label="Your inspiration message" helperText="Reading is to the mind what exercise is to the body." style={{ width: "40%" }}></TextField>
        <Button type="submit" style={{ marginTop: "20px" }} variant="contained">Create the Habit</Button>
      </Stack>
    </Stack>
  );
}
export default CreateChain;