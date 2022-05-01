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
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

import { styled } from '@mui/material/styles';


const Item = styled(Card)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body1,
  textAlign: 'center',
  color: '#369950',
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />; })(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  padding: '1px',
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
    <Box sx = {{width: '100%', display: 'flex', flexDirection: 'column', marginBottom: '12px'}}>
      <Stack >
        <Item elevation={12}>
          <CardContent sx = {{padding: '5px', display: 'flex', flexDirection: 'row'}}>
            <Box component='div' sx = {{ marginLeft: '12px', padding: '8px', display: 'flex', flexDirection: 'row', justifyContent: 'right'}}> 
              <Box component='div' sx = {{marginRight: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                  { valid ? <CircleRoundedIcon color='green'/> : <CircleRoundedIcon color='warning'/> }
              </Box>
              <Box component='div' sx = {{marginLeft: '12px', display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography fontWeight='bold'      >       orderStatus:                          </Typography>
                  <Typography aria-label = 'Status'  >  {JSON.stringify(data.orderStatus.status)}  </Typography>
              </Box>   
            </Box>
            <Box sx = {{width: '30%'}} />
            <Box component='div' sx = {{ padding: '8px', display: 'flex', flexDirection: 'row', overflow: 'auto', alignItems: 'center'}}>
              <Box component='div' sx = {{marginRight: '10px', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                  <Typography fontWeight='bold'      >  maker:    </Typography>
                  <Typography aria-label = 'nftType' > {data.order.maker.slice(0,6)}...{data.order.maker.slice(data.order.maker.length -4, data.order.maker.length)}      </Typography>
              </Box>
              <Box component='div' sx = {{marginRight: '10px', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                  <Typography fontWeight='bold'        >  taker:    </Typography>
                  <Typography aria-label = 'nftType' > {data.order.taker.slice(0,6)}...{data.order.taker.slice(data.order.taker.length -4, data.order.taker.length)}      </Typography>
              </Box>
              <Box component='div' sx = {{marginRight: '10px', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                  <Typography fontWeight='bold'      > erc20TokenAmount:         </Typography>
                  <Typography aria-label = 'amount'  >  {data.erc20TokenAmount}  </Typography>
              </Box>
              <Box component='div' sx = {{marginRight: '10px', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                  <Typography fontWeight='bold'      > erc20Token:  </Typography>
                  <Typography aria-label = 'ERC20Token'> {data.erc20Token.slice(0,6)}...{data.erc20Token.slice(data.erc20Token.length - 4, data.erc20Token.length)} </Typography>
              </Box>
              <Box component='div' sx = {{marginRight: '10px', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                  <Typography fontWeight='bold'      > nftToken:  </Typography>
                  <Typography aria-label = 'NftToken'>  {data.nftToken.slice(0,6)}...{data.nftToken.slice(data.nftToken.length - 4, data.nftToken.length)} </Typography>
              </Box>
              <Box component='div' sx = {{marginRight: '10px', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                  <Typography fontWeight='bold'      >  nftTokenId:       </Typography>
                  <Typography aria-label = 'nftType' > {data.nftTokenId}  </Typography>
              </Box>
              <Box component='div' sx = {{marginLeft: '10px', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                  <Typography fontWeight='bold'      >  nftType:          </Typography>
                  <Typography aria-label = 'nftType' > {data.nftType}     </Typography>
              </Box>
              <Box component='div' sx = {{marginLeft: '10px', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                  <Typography fontWeight='bold'  >  Fee:          </Typography>
                  <Typography aria-label = 'Fee' > {data.order.fee ? data.order.fee : 0}   </Typography>
              </Box>
            </Box>
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
              <Box component = 'div' sx = {{margin: '12px', overflow: 'auto', color: '#fff'}}>
                <Typography sx = {{padding: '10px'}}>
                  {JSON.stringify(data)}
                </Typography>
              </Box>
          </Collapse>
        </Item>
      </Stack>
    </Box>
  )
}

export default Order