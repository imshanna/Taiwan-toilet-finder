module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const body = JSON.parse(req.body);
      const key = process.env.API_KEY;

      if(body.src === 'search'){
        const {city, dist, type} = body.filter;
        const filter = `country,EQ,${city}|city,EQ,${dist}|type,EQ,${type}`
        
        const response = await fetch(`https://data.moenv.gov.tw/api/v2/fac_p_07?api_key=${key}&filters=${filter}`);
        const data = await response.json();
        
        res.end(JSON.stringify(data.records));

      }else if(body.src === 'nearby'){
        const {lat, lng, type} = body.filter;
        const queryLat = `latitude,GR,${lat[0]}|latitude,LE,${lat[1]}|`;
        const queryLng = `longitude,GR,${lng[0]}|longitude,LE,${lng[1]}|`;
        const queryType = `type,EQ,${type}`;

        const response = await fetch(`https://data.moenv.gov.tw/api/v2/fac_p_07?api_key=${key}&filters=${queryLat}${queryLng}${queryType}`);
        const data = await response.json();
        
        res.end(JSON.stringify(data.records));
      }else{
        throw new Error('There is no such src');
      }

    } catch (error) {
      res.statusCode = 500;
      res.end(JSON.stringify({ message: error.message }));
    }
  } else {
    res.statusCode = 405;
    res.end();
  }
};



