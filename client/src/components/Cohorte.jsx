import React, { useState, useEffect, Fragment } from "react";
import "./home.css";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { connect } from "react-redux";
import Profile from "./Profile";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

//
import List from "@material-ui/core/List";
//select
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getAllCohortes } from "../actions";
//

function Cohorte(props) {
  //seteo cuadrado

  const { users, cohorte, students, idCohorte, cohorteName } = props;

  const cohorteStudents = [];
  const cohortePms = [];
  const studentsPendientes = [];

  if (students) {
    students.map((student) => {
      if (student.user === null) {
        return studentsPendientes.push(student);
      }
      if (
        idCohorte === student.cohorteId &&
        student.user.status === "habilitado"
      ) {
        if (student.user.pm === false) {
          cohorteStudents.push(student);
        }
        if (student.user.pm === true) {
          cohortePms.push(student);
        }
      }
      if (
        idCohorte === student.cohorteId &&
        student.user.status === "inhabilitado"
      ) {
        studentsPendientes.push(student);
      }
    });
  }

  const useStyles = makeStyles((theme) => ({
    //box contenedora
    boxPrincipal: {
      backgroundColor: theme.palette.background.paper,
      width: "70vw",
      height: "80vh",
      textAlign: "center",
      paddingTop: 25,
    },
    //box titulo principal
    pruebaTitle: {
      borderBottom: `1px solid ${theme.palette.text.disabled}`,
      backgroundColor: theme.palette.text.secondary,
      width: "70vw",
      height: "10vh",
      textAlign: "center",
      textJustify: "center",
      paddingTop: "1vh",
    },
    setFontTitle: {
      color: "#EDEAE6",
      fontSize: "3.5rem",
    },
    //box cuerpo
    setBody: {
      display: "flex",
    },
    //sideBar
    rootSideBar: {
      borderRight: `1px solid ${theme.palette.divider}`,
      width: "30vw",
      height: "67vh",
      margin: 0,
    },
    rootIcon: {
      fontSize: 75,
      color: theme.palette.text.secondary,
    },
    setIcon: {
      paddingRight: 50,
    },
    titleSideBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      height: "18vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    infoSideBar: {
      height: "52vh",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },

    setTextBox: {
      textAlign: "initial",
    },
    styleTitelBodySide: {
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
      fontSize: 30,
    },
    setTextBoxInfoSide: {},
    listOne: {
      width: "30vw",
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      overflow: "auto",
      maxHeight: 418,
      display: "flex",

      flexDirection: "column",
    },
    ul: {
      backgroundColor: "inherit",
      padding: 0,
    },
    styleTextUser: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      fontSize: 25,
    },

    //info
    rootInfo: {
      width: "40vw",
      height: "70vh",
    },
    titleInfo: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      height: "10vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    bodyInfo: {
      height: "52vh",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    titelRootIndo: {
      fontSize: 45,
    },
    setTextBoxInfoInfo: {},
    listOneInfo: {
      width: "40vw",
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      overflow: "auto",
      maxHeight: 537,
      display: "flex",
      flexDirection: "column",
    },
    ul: {
      backgroundColor: "inherit",
      padding: 0,
    },
    styleTextUserInfo: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      fontSize: 25,
    },
    //select
    formControl: {
      minWidth: 120,
    },
    //saca margin y pading
    noMorP: {
      margin: 0,
      padding: 0,
    },
    prueba: {
      display: "flex",
      alignItems: "baseline",
      paddingLeft: "35%",
    },
  }));

  const [value, setValue] = React.useState(0);
  const [pm, setPm] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalUser, setModalUser] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenModal = (value) => {
    setOpenModal(true);
    setModalUser(value);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPm(event.target.value);
  };

  const classes = useStyles();

  if (cohorteName === undefined) {
    return (
      <div>
        <h1>Eleji un cohorte</h1>
      </div>
    );
  }
  if (cohorteName) {
    return (
      <div>
        <Profile user={modalUser} state={openModal} close={handleCloseModal} />
        <Grid container>
          <Box xs={12} className={classes.boxPrincipal} boxShadow={2}>
            <Box className={classes.pruebaTitle}>
              <Typography className={classes.setFontTitle}>
                {cohorteName}
              </Typography>
            </Box>
            <Box className={classes.setBody}>
              <Box className={classes.rootSideBar}>
                <Box className={classes.titleSideBar}>
                  <Box className={classes.setIcon}>
                    <InfoOutlinedIcon className={classes.rootIcon} />
                  </Box>
                  <Box className={classes.setTextBox}>
                    <Typography variant="h5">
                      INSTRUCTOR: {cohorte.instructor}
                    </Typography>
                    <Typography variant="h5">
                      FECHA DE INICIO: 06/01/20
                    </Typography>

                    <Typography variant="h5">
                      CANTIDAD DE ALUMNOS:{`  ${cohorteStudents.length}`}
                    </Typography>
                    <Typography variant="h5">
                      ALUMNOS PENDIENTES: {`  ${studentsPendientes.length}`}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box className={classes.styleTitelBodySide}>PM`S</Box>
                </Box>

                <Box className={classes.infoSideBar}>
                  <Box className={classes.setTextBoxInfoSide}>
                    <ButtonGroup className={classes.listOne}>
                      {cohortePms.length > 0 ? (
                        cohortePms.map((pm) => {
                          let nombreCompleto = `${pm.user.name} ${pm.user.lastName}`;
                          return (
                            <Button
                              className={classes.styleTextUser}
                              value={pm.id}
                              onClick={() => handleOpenModal(pm.user)}
                              fullWidth="true"
                            >
                              {nombreCompleto}
                            </Button>
                          );
                        })
                      ) : (
                        <h1>No hay pms</h1>
                      )}
                    </ButtonGroup>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.rootInfo}>
                <Box className={classes.titleInfo}>
                  <Box className={classes.titelRootIndo}>ALUMNOS</Box>
                  <Box className={classes.prueba}>
                    <h3 style={{ paddingRight: 15 }}>Filtrar por Pm</h3>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-controlled-open-select-label">
                        Pm`s
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={pm}
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {/* MAPEAR LISTA DE PMS Y DEVOLVER UN MENUITEM X CADA UNO */}
                        {cohortePms.map((pm) => {
                          let nombreCompleto = `${pm.user.name} ${pm.user.lastName}`;
                          let id = pm.id;
                          return (
                            <MenuItem value={id}>{nombreCompleto}</MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
                <Box className={classes.bodyInfo}>
                  <Box className={classes.setTextBoxInfoInfo}>
                    <ButtonGroup className={classes.listOneInfo}>
                      {cohorteStudents.length > 0 ? (
                        cohorteStudents.map((student) => {
                          let nombreCompleto = `${student.user.name} ${student.user.lastName}`;

                          return (
                            <div>
                              <Button
                                className={classes.styleTextUser}
                                onClick={() => handleOpenModal(student.user)}
                                fullWidth="true"
                              >
                                {nombreCompleto}
                              </Button>
                            </div>
                          );
                        })
                      ) : (
                        <h1>NO HAY USUARIOS</h1>
                      )}
                    </ButtonGroup>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </div>
    );
  }
  return <div></div>;
}

export default connect()(Cohorte);
