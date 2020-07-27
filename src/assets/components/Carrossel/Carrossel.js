import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
import { Box } from '@material-ui/core';

import cincoG from '../../images/5G.jpg';
import ligacao from '../../images/ligacao.jpg';
import appsImage from '../../images/apps.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carrossel = ({ estilo }) => {
  const classes = estilo;

  const [index, setIndex] = useState(0);
  const handleChangeIndex = index => setIndex(index);

  return (
    <Box id="novidades">
      <AutoPlaySwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        interval={6000}
      >
      <a href="#5g"><img
        className={classes.banner}
        src={cincoG}
        alt="5G"
      /></a>
      <a href="#falemais"><img
        className={classes.banner}
        src={ligacao}
        alt="FaleMais"
      /></a>
      <a href="#apps"><img
        className={classes.banner}
        src={appsImage}
        alt="apps"
      /></a>
      </AutoPlaySwipeableViews>
      <Pagination
        dots={3}
        index={index}
        onChangeIndex={handleChangeIndex}
        estilo={{ ...classes }}
      />
    </Box>
  );
}

export default Carrossel;