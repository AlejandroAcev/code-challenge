import React, { FC, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '../Card';
import Typography from '../Typography';
import { createStyles, Fade, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, withStyles } from '@material-ui/core';
import { fetchRequest } from '../../controllers/fetch';
import { USERS_ENDPOINT } from '../../controllers/url';
import Loader from '../Loader';

const StyledTableHeaderCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      fontSize: 24,
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: '#f7f7f7'
      },
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
  table: {
    width: 500,
    margin: 'auto',
    display: 'block',
  },
});

interface User {
  id: string;
  name: string;
  email: string;
}

const Home: FC = () => {
  const classes = useStyles();
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchRequest<User[]>(USERS_ENDPOINT)
      setUsers(result);
    };

    getData();    
  }, []);

  return (
    <Card page>
      <CardContent>
        <Typography type="h2" >
          User list
        </Typography>
        
        <Loader isLoading={!!!users}>
          <TableContainer component={Paper} className={classes.table}>
            <Table aria-label="users table">
            <TableHead>
                <TableRow color="primary">
                  <StyledTableHeaderCell>Name</StyledTableHeaderCell>
                  <StyledTableHeaderCell align="right">Email</StyledTableHeaderCell>
                </TableRow>
              </TableHead>
              <Fade in={!!users}>
                <TableBody>
                  {users && users.map((user, index) => (
                    <StyledTableRow key={index + user.name}>
                      <TableCell component="th" scope="row">
                        <Typography>
                          {user.name}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography>
                          {user.email}
                        </Typography>
                      </TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Fade>
            </Table>
          </TableContainer>
        </Loader>
      </CardContent>
    </Card>
  );
}

export default Home;