import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


import { styled } from '@mui/material/styles';
import './Order.css'


const Item = styled(Card)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#369950'
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />; })(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  color: '#fff',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Order({data, valid}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box sx = {{display: 'flex', flexDirection: 'column'}}>
      <Stack spacing={1}>
        <Item elevation = {5} sx = {{width: '600px'}}>
          <CardContent sx = {{display: 'flex', flexDirection: 'row', overflow: 'auto', justifyContent: 'center'}}>
            <CardContent sx = {{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
              <Typography fontWeight='bold'      >  maker:    </Typography>
              <Typography aria-label = 'nftType' > {data.order.maker.slice(0,6)}...{data.order.maker.slice(data.order.maker.length -4, data.order.maker.length)}      </Typography>
              <Typography fontWeight='bold'      > erc20Token:  </Typography>
              <Typography aria-label = 'NftToken'> {data.erc20Token.slice(0,6)}...{data.erc20Token.slice(data.erc20Token.length - 4, data.erc20Token.length)} </Typography>
              <Typography fontWeight='bold'      > erc20TokenAmount:         </Typography>
              <Typography aria-label = 'amount'  >  {data.erc20TokenAmount}  </Typography>
              <Typography fontWeight='bold'      >       orderStatus:         </Typography>
              <Typography aria-label = 'Status'  >  {JSON.stringify(data.orderStatus.status)}  </Typography>
              <Typography fontWeight='bold'      >       valid:         </Typography>
              <Typography aria-label = 'Status'  >       {valid ? 'Valid' : 'Invalid'}        </Typography>
            </CardContent>
            <CardContent sx = {{width: '200px'}}> 
            </CardContent>
            <CardContent sx = {{display: 'flex', flexDirection: 'column', textAlign: 'right'}}>
            <Typography fontWeight='bold'        >  taker:    </Typography>
              <Typography aria-label = 'nftType' > {data.order.taker.slice(0,6)}...{data.order.taker.slice(data.order.taker.length -4, data.order.taker.length)}      </Typography>
              <Typography fontWeight='bold'      >  nftToken:           </Typography>
              <Typography aria-label = 'NftToken'>  {data.nftToken.slice(0,6)}...{data.nftToken.slice(data.nftToken.length - 4, data.nftToken.length)} </Typography>
              <Typography fontWeight='bold'      >  nftType:          </Typography>
              <Typography aria-label = 'nftType' > {data.nftType}     </Typography>
              <Typography fontWeight='bold'      >  nftTokenId:       </Typography>
              <Typography aria-label = 'nftType' > {data.nftTokenId}  </Typography>
            </CardContent>
          </CardContent>  
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Box component = 'div' sx = {{overflow: 'auto', color: '#fff'}}>
                {JSON.stringify(data)}
              </Box>
            </CardContent>
          </Collapse>
        </Item>
      </Stack>
    </Box>
  )
}

export default Order