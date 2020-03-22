import React, { Fragment } from 'react';
import Upload from '../upload/Upload';
import { UTILS_PATH } from '../../utils/types';
import './Pages.css';

const Utils = props => {
  return (
    <div className='Page'>
      <div className='Card'>
        <Upload page={UTILS_PATH} />
      </div>
    </div>
  );
};

export default Utils;
