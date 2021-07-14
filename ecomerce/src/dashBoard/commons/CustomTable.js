import { Table, TableContainer, Paper, TableHead, TableCell, TableRow } from "@material-ui/core";
import React from "react";

export const CustomTable = (props) => {

    return (
        <div className="custom_table">
            <TableContainer component={Paper}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>
                            aaa
                        </TableCell>
                    </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </div>
    )
}
export default CustomTable