import React, { FC, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StyledCard, StyledCardContent } from '../Card';
import Typography from '../Typography';
import { createStyles, Fade, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, withStyles } from '@material-ui/core';
import { fetchRequest } from '../../controllers/fetch';
import { USERS_ENDPOINT } from '../../controllers/url';
import Loader from '../Loader';
import Layout from '../Layout';
import Breadcrumb from '../Breadcrumbs';

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
    marginTop: '12px',
  },
  layout: {
    width: '100%',
    margin: '0',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    <StyledCard page>
      <StyledCardContent fullWidth>
        <Breadcrumb routes={['Menu', 'Home']} />
        <Typography type="h2">
          User list
        </Typography>
        
        <Layout center className={classes.layout}>
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
        </Layout>
      </StyledCardContent>
    </StyledCard>
  );
}

export default Home;