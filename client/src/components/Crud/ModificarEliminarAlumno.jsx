import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "@material-ui/core/Table";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
//ver de eliminar
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// importo componente alumno
import AlumnoComponent from "./AlumnoComponent";
//buttons
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

//style
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  boxButtons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rootButton: {
    paddingLeft: 15,
    width: 340,
    display: "flex",
    justifyContent: "center",
  },
  setTableRowButton: {
    display: "flex",
  },
  prueba: {
    width: 250,
  },
}));

function ModificarEliminarAlumno() {
  const allUsers = useSelector((state) => state.all_users);
  const allCohortes = useSelector((state) => state.all_cohortes);
  const allStudents = useSelector((state) => state.all_students);
  //manejo estado de dialog
  //resteo de array vacio
  let arrayClear = false;

  if (allUsers.length > 0) {
    arrayClear = true;
  }
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={classes.setTableRowButton}>
            <Box className={classes.boxButtons} fullWidth component={"div"}>
              <Box align="center">
                Filtrar por:
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  color="primary"
                  className={classes.rootButton}
                >
                  <Button>Cohorte</Button>
                  <Button>Grupo</Button>
                  <Button>Pair Programing</Button>
                </ButtonGroup>
              </Box>
            </Box>
            <Box className={classes.boxButtons} fullWidth component={"div"}>
              <Box align="center">
                Filtrar por estado:
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  color="primary"
                  className={classes.rootButton}
                >
                  <Button>Habilitados</Button>
                  <Button>Inhabilitados</Button>
                </ButtonGroup>
              </Box>
            </Box>
          </TableRow>
          <TableRow>
            <TableCell align="center" className={classes.prueba}>
              Email
            </TableCell>
            <TableCell align="center">Cohorte</TableCell>
            <TableCell align="center">Grupo</TableCell>
            <TableCell align="center">Pair Programming</TableCell>
            <TableCell align="center">Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/*se debe hacer el map
          {props.categorias.categorias.map((row) => (
            <TableRow key={row.name}>
          */}

          {arrayClear ? (
            allUsers.map((user) => {
              return (
                <AlumnoComponent
                  user={user}
                  key={user.id}
                  cohortes={allCohortes}
                />
              );
            })
          ) : (
            <h1>no existen users</h1>
          )}
          {/*Aca se debe cerrar el  map)}}*/}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ModificarEliminarAlumno;
