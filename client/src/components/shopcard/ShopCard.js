import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ShopCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        {/**Take in props for these */}
        <CardMedia
          component="img"
          height="120"
          image="https://ca-times.brightspotcdn.com/dims4/default/dce50b2/2147483647/strip/true/crop/1280x853+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F70%2Feb%2F6a07122945ce88a3aa7a2568f15d%2Ftimeline-los-angeles-dining-culture-march-2021-covid-19.lede.jpeg"
          alt={this.props.CFO_Shop_Name + " profile"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {/* {this.props.CFO_Shop_Name} */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {this.props.CFO_description} */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}