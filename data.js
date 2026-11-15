var APP_DATA = {
  "scenes": [
    {
      "id": "0-aerial-view-southeast",
      "name": "Aerial View Southeast",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.04526759317425011,
        "pitch": 1.0760929765318927,
        "fov": 0.7665225579590057
      },
      "linkHotspots": [
        {
          "yaw": -1.091435897444887,
          "pitch": 1.086352384251832,
          "rotation": 1.5707963267948966,
          "target": "2-south-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-aerial-view-southwest",
      "name": "Aerial View Southwest",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.11993038789263188,
        "pitch": 1.1950340851285102,
        "fov": 0.7117559781506009
      },
      "linkHotspots": [
        {
          "yaw": 1.3082315713305235,
          "pitch": 1.050996034079855,
          "rotation": 4.71238898038469,
          "target": "2-south-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-south-view",
      "name": "South View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.048904604823384545,
        "pitch": 0.009068951241594903,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": 0.1363533230087537,
          "pitch": 0.15108199797848165,
          "rotation": 0,
          "target": "3-close-up-south-view"
        },
        {
          "yaw": 0.5339284560904733,
          "pitch": -0.08363924574087989,
          "rotation": 0,
          "target": "0-aerial-view-southeast"
        },
        {
          "yaw": -0.5579148149064004,
          "pitch": -0.02228883888764166,
          "rotation": 0,
          "target": "1-aerial-view-southwest"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-close-up-south-view",
      "name": "Close-up South View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.02665591176872084,
        "pitch": 0.00398669911333549,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -1.7578361608294877,
          "pitch": 0.10481551501373687,
          "rotation": 1.5707963267948966,
          "target": "12-southwest-view-2"
        },
        {
          "yaw": 1.6246463632628894,
          "pitch": 0.09446119487104454,
          "rotation": 4.71238898038469,
          "target": "6-southeast-view"
        },
        {
          "yaw": 3.0576279078550064,
          "pitch": 0.19562362291067714,
          "rotation": 3.141592653589793,
          "target": "2-south-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-east-view-1",
      "name": "East View 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.04691964284099548,
        "pitch": 0.028053929634474173,
        "fov": 0.7503716608545776
      },
      "linkHotspots": [
        {
          "yaw": -1.0305320776105003,
          "pitch": 0.08600214182685662,
          "rotation": 1.5707963267948966,
          "target": "6-southeast-view"
        },
        {
          "yaw": 1.1647938127045059,
          "pitch": 0.18661611110487186,
          "rotation": 10.995574287564278,
          "target": "5-east-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-east-view-2",
      "name": "East View 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3131869539270262,
          "pitch": 0.045829812085088406,
          "rotation": 4.71238898038469,
          "target": "7-northeast-view"
        },
        {
          "yaw": -1.7215307883363327,
          "pitch": 0.10736772919611681,
          "rotation": 7.853981633974483,
          "target": "4-east-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-southeast-view",
      "name": "Southeast View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": 1.3257438577199494,
          "pitch": 0.03276076132970829,
          "rotation": 4.71238898038469,
          "target": "4-east-view-1"
        },
        {
          "yaw": -0.8824216939025291,
          "pitch": 0.19392862004649913,
          "rotation": 1.5707963267948966,
          "target": "3-close-up-south-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-northeast-view",
      "name": "Northeast View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.06329733153783756,
        "pitch": 0.03913860499922528,
        "fov": 1.2844707173360341
      },
      "linkHotspots": [
        {
          "yaw": -1.0188483438979183,
          "pitch": 0.11169388103062516,
          "rotation": 1.5707963267948966,
          "target": "5-east-view-2"
        },
        {
          "yaw": 1.1056604781402832,
          "pitch": 0.09188769821503762,
          "rotation": 4.71238898038469,
          "target": "8-north-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-north-view",
      "name": "North View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.07235183080995178,
        "pitch": -0.06378718581336784,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -1.6956297883818134,
          "pitch": 0.03742290903889156,
          "rotation": 1.5707963267948966,
          "target": "7-northeast-view"
        },
        {
          "yaw": 1.617040076229065,
          "pitch": 0.04267395274653296,
          "rotation": 4.71238898038469,
          "target": "9-northwest-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-northwest-view",
      "name": "Northwest View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1057972832829357,
          "pitch": 0.07975338247506514,
          "rotation": 1.5707963267948966,
          "target": "8-north-view"
        },
        {
          "yaw": 1.3216066269988467,
          "pitch": 0.07073957651666873,
          "rotation": 4.71238898038469,
          "target": "10-west-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-west-view",
      "name": "West View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.035223917631157065,
        "pitch": 0.04385369024669039,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -1.2504875192121805,
          "pitch": 0.07306160086982594,
          "rotation": 1.5707963267948966,
          "target": "9-northwest-view"
        },
        {
          "yaw": 1.5502070391063363,
          "pitch": 0.09730952489756817,
          "rotation": 4.71238898038469,
          "target": "11-southwest-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-southwest-view-1",
      "name": "Southwest View 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.439369528512838,
          "pitch": 0.11600011730042503,
          "rotation": 1.5707963267948966,
          "target": "10-west-view"
        },
        {
          "yaw": 1.2360465419555595,
          "pitch": 0.16517544827755515,
          "rotation": 4.71238898038469,
          "target": "12-southwest-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-southwest-view-2",
      "name": "Southwest View 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8368175647221587,
          "pitch": 0.13833217287005617,
          "rotation": 4.71238898038469,
          "target": "3-close-up-south-view"
        },
        {
          "yaw": -1.8150830293962859,
          "pitch": 0.13421000166809627,
          "rotation": 1.5707963267948966,
          "target": "11-southwest-view-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Oaklea_Live360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
