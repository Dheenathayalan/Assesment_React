import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import './App.css';
import './App.css';
import * as file from './constants';

function App() {

  const [view, setView] = useState('table');

  const useStyles = makeStyles(theme => ({
    root: {
      width: '80%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 1000,
    },
    card: {
      minWidth: 275,
      margin: '5px',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    toggleContainer: {
      margin: theme.spacing(2, 0),
    },
    cardContainer: {
      display: 'flex'
    },
    marginVertical: {
      margin: '0px 20px',
    }
  }));

  const classes = useStyles();

  const handleView = (event, newView) => {
    setView(newView);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup value={view} exclusive onChange={handleView}>
            <ToggleButton value="table">
              {view == 'table' ? <i className="material-icons" value="table">toggle_off</i> : <i className="material-icons" value="card">toggle_on</i>}
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        {view === 'table' ? <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Open</TableCell>
                <TableCell align="right">High</TableCell>
                <TableCell align="right">Low</TableCell>
                <TableCell align="right">Close</TableCell>
                <TableCell align="right">Adj Close</TableCell>
                <TableCell align="right">Volume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {file.data.map(row => (
                <TableRow key={row.Date}>
                  <TableCell component="th" scope="row">
                    {row.Date}
                  </TableCell>
                  <TableCell align="right">{row.Open}</TableCell>
                  <TableCell align="right">{row.High}</TableCell>
                  <TableCell align="right">{row.Low}</TableCell>
                  <TableCell align="right">{row.Close}</TableCell>
                  <TableCell align="right">{row['Adj Close']}</TableCell>
                  <TableCell align="right">{row.Volume}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper> : <div>{file.data.map(row => (
          <Card className={classes.card} key={row.Date}>
            <CardContent>
              <div className={classes.cardContainer}>
                <div className={classes.marginVertical}>
                  <p>Date</p>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {row.Date}
                  </Typography>
                </div>
                <div className={classes.marginVertical}>
                  <p>Open</p>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {row.Open}
                  </Typography>
                </div>
                <div className={classes.marginVertical}>
                  <p>High</p>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {row.High}
                  </Typography>
                </div>
                <div className={classes.marginVertical}>
                  <p>Low</p>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {row.Low}
                  </Typography>
                </div>
                <div className={classes.marginVertical}>
                  <p>Adj Close</p>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {row['Adj Close']}
                  </Typography>
                </div>
                <div className={classes.marginVertical}>
                  <p>Volume</p>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {row.Volume}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
          </div>
        }
      </header>
    </div>
  );
}

export default App;
