import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export default () =>
       <Container>
            <Grid item>
                <ButtonGroup size="small" aria-label="small outlined button group">
                <Button>Klaytn</Button>
                <Button>Baobab</Button>
                </ButtonGroup>
            </Grid>
            <Grid container justify="center">
                <Button> KittyCore </Button>
                <Button> 0x20A1CFF753ae36988f73507A5497f02369970D70 </Button>
            </Grid>
            <Grid container justify="center">
                <Button color="primary"> SaleAuctionContract  </Button>
                <Button color="primary"> 0xD1dFd8F3bd2f05D497296Fc1C44Ff8b397189a03  </Button>
            </Grid>
            <Grid container justify="center">
                <Button color="secondary"> SiringAuctionContract </Button>
                <Button color="secondary">0xC1C88A7B90062866F54320b18Ee5DA65F79202D6</Button>

            </Grid>
        </Container>
