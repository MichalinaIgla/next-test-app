import { Box, Card, CardContent, CardMedia } from "@mui/material"
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export const QuizzCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <CardMedia
          sx={{ height: 140 }}
          image="../../../images/code-image-for-quiz.png"
          title="green iguana"
        />
        Quizz
        <PlayArrowRoundedIcon />
      </CardContent>
    </Card>
  )
}