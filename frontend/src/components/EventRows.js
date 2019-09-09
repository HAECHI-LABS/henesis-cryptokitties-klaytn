import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CustomChip from './CustomChip';
import Button from '@material-ui/core/Button';

function getColor(event) {
    switch(event.contract) {
        case "KittyCore":
            return "default";
        case "SiringClockAuction":
            return "secondary";
        case "SaleClockAuction":
            return "primary";
        default:
            return "default";
    }
}

function getEtherscanUrl(event) {
    return `https://baobab.scope.klaytn.com/tx/${event.transactionHash}`
}

function describeEvent(event) {
    function argSpreader(args) {
        return Object.entries(args).map( arg => {
            return <CustomChip arg={arg} />
        })
    }
    return argSpreader(event.args)
}

export default function ({events}) {
    return events.map( event => {
        return <TableRow>
        <TableCell>
            <Button
                color={getColor(event)}
                href={getEtherscanUrl(event)}
                target="_blank"
            >
                {event.event}
            </Button>
        </TableCell>
        <TableCell>
            {describeEvent(event)}
        </TableCell>
        <TableCell> 
            {event.blockMeta.blockNumber}
        </TableCell>

    </TableRow>
    })
}
