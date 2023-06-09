import { Box, Stack, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { AnswerCheckbox } from "./AnswerCheckbox"

export function Question({ questionIndex, question }) {
  const answers = [{ label: "Nie" }, { label: "Tak" }]

  return (
    <Stack justifyContent="center" alignItems="center" spacing={4} width="100%">
      <Typography
        variant="h6"
        align="center"
        sx={{
          overflowWrap: "break-word",
          wordWrap: "break-word",
          maxWidth: "80%",
        }}
      >
        {question}
      </Typography>
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        position="relative"
        alignItems="center"
      >
        <Box
          sx={{
            width: "100%",
            height: "0.1rem",
            bgcolor: grey[400],
            position: "absolute",
            borderRadius: "1rem",
          }}
        />
        {answers.map((answer) => (
          <AnswerCheckbox questionIndex={questionIndex} answer={answer} />
        ))}
      </Stack>
    </Stack>
  )
}
