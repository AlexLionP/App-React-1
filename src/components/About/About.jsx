import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Foto from '../../assets/Foto-arcoiris.jpg'

export default function MyCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={Foto}
          alt="Mi foto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Alejandro de León Piña
          </Typography>
          <Typography variant="body2" color="text.secondary">
            "Always positive, even in the dreadest situations" 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            E-mail: alejandrodeleon904@gmail.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Teléfono: 5563273175
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}