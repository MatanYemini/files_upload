import React, { Fragment } from 'react';
import Upload from '../upload/Upload';
import { BADACHIM_PATH } from '../../utils/types';
import './Pages.css';

const Badachim = props => {
  return (
    <div className='Page'>
      <div className='Card'>
        <Upload page={BADACHIM_PATH} />
      </div>
    </div>
  );
};

export default Badachim;
