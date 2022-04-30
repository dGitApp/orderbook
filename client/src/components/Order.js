import React from 'react'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import { styled } from '@mui/material/styles';
import './Order.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#fff',
}));

function Order() {
  return (
    <Box sx = {{width: '100%'}}>
      <Stack spacing={1}>
        <Card sx={{ maxWidth: 345 }}>  
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              order content
            </Typography>
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
              <Typography paragraph> full description </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Item elevation={5} > </Item>
        <Item elevation= {5}> order 2 </Item>
      </Stack>
    </Box>
  )
}

export default Order