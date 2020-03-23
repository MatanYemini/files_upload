import React, { useEffect } from 'react';
import {
  BADACHIM_FOLDER_PATH,
  HOWTO_FOLDER_PATH,
  UTILS_FOLDER_PATH
} from './types';
import { useAlert } from 'react-alert';
import axios from 'axios';

let messages = '';

// // Option if you want to check the pathes using the api
// export const checkPathesViaServer = async () => {
//   try {
//     const res = await axios.post(
//       `/api/validity/${BADACHIM_PATH}/${HOWTO_PATH}/${UTILS_PATH}`
//     ); // can be replaced by sending json - change it according to what you think
//     var parsedData = JSON.parse(res.data);
//     messages = parsedData;
//     return 'asdasdsad';
//   } catch (error) {
//     console.log('error'); // if you want error handling pay me with hours!
//   }
// };

// Check pathes using front (what is actually implemented)
// export const checkPathes = () => {
//   var fso = new ActiveXObject('Scripting.FileSystemObject');
//   if (!fso.FolderExists(BADACHIM_FOLDER_PATH))
//     messages.concat('Badachim folder not found').concat('\n');
//   if (!fso.FolderExists(HOWTO_FOLDER_PATH))
//     messages.concat('HowTo folder not found').concat('\n');
//   if (!fso.FolderExists(UTILS_FOLDER_PATH))
//     messages.concat('Utils folder not found').concat('\n');
// };
