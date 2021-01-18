import React, { FC, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '../Card';
import Typography from '../Typography';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { fetchRequest } from '../../controllers/fetch';
import { USERS_ENDPOINT } from '../../controllers/url';
import Loader from '../Loader';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  table: {
    width: 500,
    margin: 'auto',
    display: 'block',
  },
  loader: {
    height: 250,
    margin: 'auto',
    display: 'block',
  }
});

interface User {
  id: string;
  name: string;
  email: string;
}

const Home: FC = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchRequest(USERS_ENDPOINT)
      setUsers([]);
      console.log('Data: ', result)
    };
    
    getData();    
  }, []);

  return (
    <Card page>
      <CardContent>
        <Typography type="h2" >
          User list
        </Typography>
        
        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="customized table">
          <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
              </TableRow>
            </TableHead>
          {!users.length ? (
              <Loader className={classes.loader} />
          ) : (
            <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index + user.name}>
                    <TableCell component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
          )}
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default Home;