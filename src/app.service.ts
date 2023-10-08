import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getHello(country: String) {
   const {data } = await axios.get(`https://firms.modaps.eosdis.nasa.gov/api/area/csv/c084601db76fadfc8725e0c1bae5598d/MODIS_NRT/world/${country}/2023-10-08`);
   
   const lines = data.split('\n');
   lines.shift()
   const lines2 = lines.map(row => {
    const columns = row.split(",");
    console.log(columns[0], columns[1]);
        // return [ columns[0], columns[1]  ]
    return {
      latitude: columns[0],
      longitude: columns[1]
    }
   })
   return lines2;

  }
}
