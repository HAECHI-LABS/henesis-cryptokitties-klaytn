import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export default () => 
       <Container>
            <Grid item>
                <ButtonGroup size="small" aria-label="small outlined button group">
                <Button>Ethereum</Button>
                <Button>Mainnet</Button>
                </ButtonGroup>
            </Grid>
            <Grid container justify="center">
                <Button> KittyCore </Button>
                <Button> 0x06012c8cf97bead5deae237070f9587f8e7a266d </Button>
            </Grid>
            <Grid container justify="center">
                <Button color="primary"> SaleAuctionContract  </Button>
                <Button color="primary"> 0xb1690c08e213a35ed9bab7b318de14420fb57d8c  </Button>
            </Grid>
            <Grid container justify="center">
                <Button color="secondary"> SiringAuctionContract </Button>
                <Button color="secondary">0xc7af99fe5513eb6710e6d5f44f9989da40f27f26</Button>

            </Grid>
        </Container>