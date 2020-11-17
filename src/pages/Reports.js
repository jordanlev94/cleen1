import React from 'react';
import { useTranslation } from 'react-i18next';
import Particles from 'react-particles-js';


function Reports() {
  const { t } = useTranslation();
  return (
    <div >
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 8,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 2,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	                
	            ],
	            "image": [
	                {
	                    "src": "/images/paires2.png",
	                    "height": 340,
	                    "width": 340
	                },
	                {
	                    "src": "/images/paires1.png",
	                    "height": 205,
	                    "width": 330
	                },
	                {
	                    "src": "/images/paires3.png",
                      "height": 207,
	                    "width": 329
                    },
                    {
	                    "src": "/images/paires4.png",
                      "height": 250,
	                    "width": 250
                  },
                  {
                    "src": "/images/paires2.png",
                    "height": 340,
                    "width": 340
                },
                {
                    "src": "/images/paires1.png",
                    "height": 205,
                    "width": 330
                },
                {
                    "src": "/images/paires3.png",
                    "height": 207,
                    "width": 329
                  },
                  {
                    "src": "/images/paires4.png",
                    "height": 250,
                    "width": 250
                },
	            ]
	        },
	        "color": {
	            "value": "#f0f7ff"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} />
    </div>
  );
}


export default Reports;
