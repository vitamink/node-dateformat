import { dateFormat } from '../lib/dateformat.cjs';

var val = process.argv[2] || new Date();
console.log(dateFormat(val, 'W'));
