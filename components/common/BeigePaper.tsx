import { Paper } from "@mui/material"

export function BeigePaper({
  children,
  height = "100%",
  width = "100%",
  p = "2rem",
  borderRadius = "0.5rem",
  bgcolor = "#f7faf2",
}) {
  return (
    <Paper
      variant="elevation"
      elevation={12}
      sx={{
        bgcolor: bgcolor,
        height: height,
        maxHeight: "60vh",
        width: width,
        p: p,
        borderRadius: borderRadius,
        position: "relative",
        display: "inline-block",
      }}
    >
      {children}
    </Paper>
  )
}
