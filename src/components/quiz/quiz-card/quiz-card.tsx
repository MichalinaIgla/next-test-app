import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export const QuizzCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/static/images/code-image-for-quiz.png"
        title="green iguana"
      />
      <CardContent>
        <Box display='flex' justifyContent='space-between'>
          <Typography alignItems='center' display='flex'>

            Quizz
          </Typography>
          <Button>

            <PlayArrowRoundedIcon />
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}