import React, { FC, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StyledCard, StyledCardContent } from '../../components/Card';
import Typography from '../../components/Typography';
import { Box, Grow } from '@material-ui/core';
import { fetchRequest } from '../../controllers/fetch';
import { USERS_ENDPOINT } from '../../controllers/url';
import Loader from '../../components/Loader';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumbs';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { User } from '../../models/User';

const useStyles = makeStyles({
  cardList: {
    display: 'flex',
    flexDirection: 'column',
    margin: '12px 0 12px 0',
  },
  userCard: {
    width: '420px',
    marginBottom: '24px',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    display: 'flex',

    margin: 0,
    fontSize: 60,
  },
});

const CardsPage: FC = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchRequest<User[]>(USERS_ENDPOINT)
      setUsers(result);
      setIsOpen(true);
    };

    getData();    
  }, []);

  return (
    <StyledCard page>
      <StyledCardContent fullWidth>
        <Breadcrumb routes={['Home', 'Cards']} />
        <Typography type="h2">
          User cards list
        </Typography>
        
        <Layout center>
          <Loader isLoading={!!!users}>
            <Box className={classes.cardList}>
              {users && users.map(({ name, email }, index) => (
                <Grow
                  key={index}
                  in={isOpen}
                  {...(isOpen ? { timeout: (index + 1) * 500 } : {})}
                >
                  <StyledCard className={classes.userCard}>
                    <StyledCardContent padding="small">
                      <Box className={classes.userInfo}>
                        <Box>
                          <Typography type="h2">
                            {name}
                          </Typography>
                          <Typography>
                            {email}
                          </Typography>
                        </Box>
                        <Layout center>
                          <AccountCircleIcon color="primary" className={classes.icon} />
                        </Layout>
                      </Box>
                    </StyledCardContent>
                  </StyledCard>
                </Grow>
              ))}
            </Box>
          </Loader>
        </Layout>
      </StyledCardContent>
    </StyledCard>
  );
}

export default CardsPage;