import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';
import { CardActionArea, Typography, CardMedia, CardContent, Card, Box } from '@mui/material';

const Item = (props) => {
  const product = props;
  // console.log("test", product)
  return (
    <>
      <div className='item'>
        <Link to={`/product/${props.id}`}>
          <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
        </Link>
        <p>{props.name}</p>
        <div className="item-prices">
          <div className="item-price-new">
            {props.new_price}
          </div>
          <div className="item-price-old">
            {props.old_price}
          </div>
        </div>
      </div>
      {/* <Link to={`/product/${props.id}`}>
          <Card sx={{ width: '220px', height: '320px' }} className='item'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={props.image}
                alt="green iguana"
                sx={{width: '100%'}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.name}
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                  <Typography variant="body2" color="text.secondary" className="item-price-old">{props.old_price}</Typography>
                  <Typography variant="body2" color="text.secondary">{props.new_price}</Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
      </Link> */}
    </>
    
  )
}

export default Item
