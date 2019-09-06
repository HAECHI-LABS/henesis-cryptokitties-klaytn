import React from "react";
import { Component } from "react";
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import EventRows from '../components/EventRows';

export default class EventList extends Component {
    constructor(){
        super()
        this.state = {items:[]}

    }
    poll = async () => {
        const data = await axios.get("http://localhost:8080/api/events")
        this.setState({items:data.data.reverse()})
    }
    componentDidMount(){
        setInterval(this.poll,1000)
    }

    render() {
       return (
           <Container>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Event Name
                            </TableCell>
                            <TableCell align="center">
                                Event Parameters
                            </TableCell>
                            <TableCell align="center">
                                Block Number
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={3} align="center">
                                    <CircularProgress></CircularProgress>
                            </TableCell>
                        </TableRow>
                        <EventRows 
                            events={this.state.items}
                        />
                    </TableBody>
                </Table>
            </Paper>
        </Container>
       )

    }
} 
