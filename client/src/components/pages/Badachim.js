import React, { Fragment } from 'react';
import Upload from '../upload/Upload';
import { BADACHIM_PATH } from '../../utils/types';

const Badachim = props => {
  return (
    <div className='App'>
      <div className='Card'>
        <Upload page={BADACHIM_PATH} />
      </div>
    </div>
  );
};

export default Badachim;
