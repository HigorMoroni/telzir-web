import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
import { Box } from '@material-ui/core';

import cincoG from '../../images/5G.jpg';
import ligacao from '../../images/ligacao.jpg';
import appsImage from '../../images/apps';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carrossel = ({ estilo }) => {
  const [index, setIndex] = useState(0);
  const handleChangeIndex = index => setIndex(index);

  return (
    <Box>
      <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
      <img
        className={classes.banner}
        src={cincoG}
        alt="5G"
      />
      <img
        className={classes.banner}
        src={ligacao}
        alt="FaleMais"
      />
      <img
        className={classes.banner}
        src={appsImage}
        alt="apps"
      />
      </AutoPlaySwipeableViews>
      <Pagination dots={3} index={index} onChangeIndex={handleChangeIndex} />
    </Box>
  );
}

export default Carrossel;