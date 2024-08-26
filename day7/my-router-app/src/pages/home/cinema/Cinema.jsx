import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from'react-router-dom';
const Cinema = () => {
  const [cinemas, setCinemas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://m.maizuo.com/gateway',{
      params:{
        cityId: 110100,
        ticketFlag: 1,
        k: 2990364
      },
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17218918638581224398323713","bc":"110100"}',
        'X-Host':'mall.film-ticket.cinema.list'
      }
    })
     .then(response => {
        setCinemas(response.data.data.cinemas);
      })
     .catch(error => {
        console.error('Error fetching cinemas:', error);
      });
  }, []);

  const handleCinemaClick = id => {
    navigate(`/detail/${id}`);
  };
  return (
    <div>
      { cinemas.map(item => 
        <div key={item.cinemaId} style={{ border: '1px solid', padding: 20 }} onClick={() => handleCinemaClick(item.cinemaId)}>
          <h4>{item.name}</h4>
          <p>{item.address}</p>
          <p>价格：￥{item.lowPrice / 100 }</p>
        </div>
      )}
    </div>
  );
};

export default Cinema;