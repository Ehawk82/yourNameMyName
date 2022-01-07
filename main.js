import { surnameCount } from './index.js';
import prompt from 'prompt';

prompt.start();

prompt.get(['name1', 'name2'], function (err, result) {
  if (err) {
    return onErr(err);
  }
  
  if(result.name1 && result.name2){
  	surnameCount(result.name1,result.name2);
  } 

});

function onErr(err) {
  console.log(err);
  return 1;
}
