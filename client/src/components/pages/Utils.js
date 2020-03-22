import React, { Fragment } from 'react';
import Upload from '../upload/Upload';
import { UTILS_PATH } from '../../utils/types';

const Badachim = props => {
  return (
    <div className='App'>
      <div className='Card'>
        <Upload page={UTILS_PATH} />
      </div>
    </div>
  );
};

export default Badachim;
