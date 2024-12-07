export interface LocationUpdate {
    date: string;
    time: string;
    latitude: number;
    longitude: number;
    area: string;
    ignition: string;
    speed: number;
    status: string;
    distance: number;
}

export interface Vehicle {
    vehicleNumber: string;
    locationUpdates: LocationUpdate[];
}

export const mockVehicles: Vehicle[] = [
  {
    "vehicleNumber": "KQD-0806",
    "locationUpdates": [
      {
        "date": "31/10/2024",
        "time": "12:09 AM",
        "latitude": 24.799965,
        "longitude": 67.045215,
        "area": "0.01Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 0.0
      },
      {
        "date": "31/10/2024",
        "time": "12:09 AM",
        "latitude": 24.7999416,
        "longitude": 67.0454083,
        "area": "0.01Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 0.0
      },
      {
        "date": "31/10/2024",
        "time": "12:10 AM",
        "latitude": 24.7998333,
        "longitude": 67.0452216,
        "area": "0.01Km from Golden Needle Tailoring & Boutique, Badar Commercial Street 2, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 0.0
      },
      {
        "date": "31/10/2024",
        "time": "12:11 AM",
        "latitude": 24.7983833,
        "longitude": 67.0439566,
        "area": "0Km from Minaar - Estate & Construction, Badar Commercial Street 5, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 0.1
      },
      {
        "date": "31/10/2024",
        "time": "12:12 AM",
        "latitude": 24.797615,
        "longitude": 67.0436216,
        "area": "0.01Km from New Quetta Sharjah Hotel, Badar Commercial Street 6, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 0.21
      },
      {
        "date": "31/10/2024",
        "time": "12:12 AM",
        "latitude": 24.79745,
        "longitude": 67.0439483,
        "area": "0.01Km from Technicians Audio & Video Engineer, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 75400, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 0.3
      },
      {
        "date": "31/10/2024",
        "time": "12:21 AM",
        "latitude": 24.7973933,
        "longitude": 67.0440266,
        "area": "0Km from Technicians Audio & Video Engineer, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi,Sindh, 75400, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 0.3
      },
      {
        "date": "31/10/2024",
        "time": "12:21 AM",
        "latitude": 24.7973933,
        "longitude": 67.0440266,
        "area": "0Km from Technicians Audio & Video Engineer, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi,Sindh, 75400, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 0.3
      },
      {
        "date": "31/10/2024",
        "time": "12:21 AM",
        "latitude": 24.7973933,
        "longitude": 67.0440266,
        "area": "0Km from Technicians Audio & Video Engineer, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi,Sindh, 75400, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 0.3
      },
      {
        "date": "31/10/2024",
        "time": "12:22 AM",
        "latitude": 24.7977766,
        "longitude": 67.044485,
        "area": "0.01Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 12.0,
        "status": "Moving",
        "distance": 0.3
      },
      {
        "date": "31/10/2024",
        "time": "12:23 AM",
        "latitude": 24.7976799,
        "longitude": 67.0453783,
        "area": "0Km from Sohny Sweets, Badar Commercial Street 5, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 0.39
      },
      {
        "date": "31/10/2024",
        "time": "12:24 AM",
        "latitude": 24.797095,
        "longitude": 67.0461633,
        "area": "0Km from Leeka Institute of Art, Badar Commercial Street 5, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 8.0,
        "status": "Moving",
        "distance": 0.48
      },
      {
        "date": "31/10/2024",
        "time": "12:25 AM",
        "latitude": 24.798375,
        "longitude": 67.0475866,
        "area": "0.01Km from Baghban Property, Khayaban e Badar, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 8.0,
        "status": "Moving",
        "distance": 0.68
      },
      {
        "date": "31/10/2024",
        "time": "12:26 AM",
        "latitude": 24.7998916,
        "longitude": 67.0469666,
        "area": "0.03Km from Menu - Frozen Chicken, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 6.0,
        "status": "Moving",
        "distance": 0.88
      },
      {
        "date": "31/10/2024",
        "time": "12:27 AM",
        "latitude": 24.8002016,
        "longitude": 67.0460316,
        "area": "0.01Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 0.98
      },
      {
        "date": "31/10/2024",
        "time": "12:28 AM",
        "latitude": 24.7994383,
        "longitude": 67.0457216,
        "area": "0.01Km from Shah Jee General Store, Badar Commercial Street 2, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 1.16
      },
      {
        "date": "31/10/2024",
        "time": "12:29 AM",
        "latitude": 24.7996266,
        "longitude": 67.0453133,
        "area": "0.01Km from Al Barkah (Men Boutique), Badar Commercial Street 2, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 1.16
      },
      {
        "date": "31/10/2024",
        "time": "12:30 AM",
        "latitude": 24.7991883,
        "longitude": 67.0454683,
        "area": "0.01Km from Amdani Global, Badar Commercial Street 3, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 1.22
      },
      {
        "date": "31/10/2024",
        "time": "12:31 AM",
        "latitude": 24.79928,
        "longitude": 67.045365,
        "area": "0.01Km from Amdani Global, Badar Commercial Street 3, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 1.24
      },
      {
        "date": "31/10/2024",
        "time": "12:32 AM",
        "latitude": 24.7983983,
        "longitude": 67.0450466,
        "area": "0.02Km from Tayyab Autos, Badar Commercial Street 4, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 1.24
      },
      {
        "date": "31/10/2024",
        "time": "12:34 AM",
        "latitude": 24.7984583,
        "longitude": 67.0439516,
        "area": "0.01Km from DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 1.34
      },
      {
        "date": "31/10/2024",
        "time": "12:35 AM",
        "latitude": 24.7983833,
        "longitude": 67.0439333,
        "area": "0Km from Minaar - Estate & Construction, Badar Commercial Street 5, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 1.45
      },
      {
        "date": "31/10/2024",
        "time": "12:36 AM",
        "latitude": 24.7978416,
        "longitude": 67.043455,
        "area": "0.02Km from Abdul Rasheed & Sons Carpentry, Badar Commercial Street 6, DHA Phase 5, Defence Housing Authority, Karachi,Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 1.51
      },
      {
        "date": "31/10/2024",
        "time": "12:37 AM",
        "latitude": 24.7976983,
        "longitude": 67.0442183,
        "area": "0.01Km from Quetta Sindh Baloachistan Hotel, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi,Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 1.54
      },
      {
        "date": "31/10/2024",
        "time": "12:38 AM",
        "latitude": 24.7969083,
        "longitude": 67.0446933,
        "area": "0Km from Karachi Chapli House, Badar Commercial Street 11, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 4.0,
        "status": "Moving",
        "distance": 1.62
      },
      {
        "date": "31/10/2024",
        "time": "12:39 AM",
        "latitude": 24.7971283,
        "longitude": 67.0456566,
        "area": "0Km from GreyGorilla Vapor Co, Badar Commercial Street 12, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 4.0,
        "status": "Moving",
        "distance": 1.72
      },
      {
        "date": "31/10/2024",
        "time": "12:40 AM",
        "latitude": 24.7977649,
        "longitude": 67.0463733,
        "area": "0.02Km from Express Rent A Car, Badar Commercial Street 12A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 6.0,
        "status": "Moving",
        "distance": 1.82
      },
      {
        "date": "31/10/2024",
        "time": "12:41 AM",
        "latitude": 24.7983383,
        "longitude": 67.0471433,
        "area": "0.01Km from Beenish Parvez Hair And Makeup Studio, Badar Commercial Street 2, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 5.0,
        "status": "Moving",
        "distance": 1.92
      },
      {
        "date": "31/10/2024",
        "time": "12:42 AM",
        "latitude": 24.7988183,
        "longitude": 67.0479966,
        "area": "0Km from Coast By Amna Babee, Khayaban e Badar, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 6.0,
        "status": "Moving",
        "distance": 2.02
      },
      {
        "date": "31/10/2024",
        "time": "12:44 AM",
        "latitude": 24.79893,
        "longitude": 67.04701,
        "area": "0.01Km from Bangulzai House, Badar Commercial Street 11, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 6.0,
        "status": "Moving",
        "distance": 2.12
      },
      {
        "date": "31/10/2024",
        "time": "12:45 AM",
        "latitude": 24.7985733,
        "longitude": 67.0461416,
        "area": "0.01Km from Murk Samoon Office, Badar Commercial Street 11, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 6.0,
        "status": "Moving",
        "distance": 2.26
      },
      {
        "date": "31/10/2024",
        "time": "12:48 AM",
        "latitude": 24.7979116,
        "longitude": 67.0448666,
        "area": "0Km from Nadeem Traders, Badar Commercial Street 5, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 2.4
      },
      {
        "date": "31/10/2024",
        "time": "12:49 AM",
        "latitude": 24.7984283,
        "longitude": 67.0445166,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 2.58
      },
      {
        "date": "31/10/2024",
        "time": "12:50 AM",
        "latitude": 24.7984283,
        "longitude": 67.0445166,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 2.58
      },
      {
        "date": "31/10/2024",
        "time": "01:13 AM",
        "latitude": 24.7984283,
        "longitude": 67.0445166,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 2.58
      },
      {
        "date": "31/10/2024",
        "time": "01:13 AM",
        "latitude": 24.7981583,
        "longitude": 67.0446116,
        "area": "0.02Km from Saybee Makeup Studio and Spa, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi,Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 2.58
      },
      {
        "date": "31/10/2024",
        "time": "01:13 AM",
        "latitude": 24.7981583,
        "longitude": 67.0446116,
        "area": "0.02Km from Saybee Makeup Studio and Spa, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi,Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 2.58
      },
      {
        "date": "31/10/2024",
        "time": "01:14 AM",
        "latitude": 24.7982049,
        "longitude": 67.044525,
        "area": "0.01Km from Sign Now Design Service and Solutions, Badar Commercial Street 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 2.58
      },
      {
        "date": "31/10/2024",
        "time": "01:15 AM",
        "latitude": 24.7995783,
        "longitude": 67.0447183,
        "area": "0.01Km from Arabi's Kitchen, Badar Commercial Street 7, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 2.71
      },
      {
        "date": "31/10/2024",
        "time": "01:16 AM",
        "latitude": 24.7997683,
        "longitude": 67.0448533,
        "area": "0.01Km from Kitchen And Home Appliances Repairing Shop, Badar Commercial Street 7, DHA Phase 5, Defence HousingAuthority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 2.86
      },
      {
        "date": "31/10/2024",
        "time": "01:16 AM",
        "latitude": 24.7997549,
        "longitude": 67.044845,
        "area": "0.01Km from Kitchen And Home Appliances Repairing Shop, Badar Commercial Street 7, DHA Phase 5, Defence HousingAuthority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 2.88
      },
      {
        "date": "31/10/2024",
        "time": "01:19 AM",
        "latitude": 24.7998266,
        "longitude": 67.0448683,
        "area": "0.01Km from Hammad Autos, Badar Commercial Street 7, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 2.88
      },
      {
        "date": "31/10/2024",
        "time": "01:19 AM",
        "latitude": 24.7998266,
        "longitude": 67.0448683,
        "area": "0.01Km from Hammad Autos, Badar Commercial Street 7, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 2.88
      },
      {
        "date": "31/10/2024",
        "time": "01:19 AM",
        "latitude": 24.7998333,
        "longitude": 67.0448649,
        "area": "0.01Km from Hammad Autos, Badar Commercial Street 7, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 2.88
      },
      {
        "date": "31/10/2024",
        "time": "01:19 AM",
        "latitude": 24.7998333,
        "longitude": 67.0448649,
        "area": "0.01Km from Hammad Autos, Badar Commercial Street 7, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 10.0,
        "status": "Stop",
        "distance": 2.89
      },
      {
        "date": "31/10/2024",
        "time": "01:20 AM",
        "latitude": 24.7995716,
        "longitude": 67.0444583,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 2.89
      },
      {
        "date": "31/10/2024",
        "time": "01:21 AM",
        "latitude": 24.80003,
        "longitude": 67.0448083,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 2.92
      },
      {
        "date": "31/10/2024",
        "time": "01:22 AM",
        "latitude": 24.79892,
        "longitude": 67.0444733,
        "area": "0Km from Badar Commercial Street 4, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 9.0,
        "status": "Moving",
        "distance": 2.97
      },
      {
        "date": "31/10/2024",
        "time": "01:23 AM",
        "latitude": 24.7988433,
        "longitude": 67.044105,
        "area": "0.01Km from Hamza Glass Works, Badar Commercial Street 8, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 3.07
      },
      {
        "date": "31/10/2024",
        "time": "01:53 AM",
        "latitude": 24.7988433,
        "longitude": 67.044105,
        "area": "0.01Km from Hamza Glass Works, Badar Commercial Street 8, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 3.07
      },
      {
        "date": "31/10/2024",
        "time": "02:03 AM",
        "latitude": 24.7988433,
        "longitude": 67.044105,
        "area": "0.01Km from Hamza Glass Works, Badar Commercial Street 8, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 3.07
      },
      {
        "date": "31/10/2024",
        "time": "02:03 AM",
        "latitude": 24.7987833,
        "longitude": 67.0438966,
        "area": "0.01Km from Paws & Claws, Badar Commercial Street 7, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 3.07
      },
      {
        "date": "31/10/2024",
        "time": "02:03 AM",
        "latitude": 24.7987833,
        "longitude": 67.0438966,
        "area": "0.01Km from Paws & Claws, Badar Commercial Street 7, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 3.07
      },
      {
        "date": "31/10/2024",
        "time": "02:04 AM",
        "latitude": 24.7986466,
        "longitude": 67.0441199,
        "area": "0Km from Walk and Door, Badar Commercial Street 5, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 3.07
      },
      {
        "date": "31/10/2024",
        "time": "02:05 AM",
        "latitude": 24.7980349,
        "longitude": 67.0448633,
        "area": "0.01Km from Hyderabad Haleem and Biryani, Badar Commercial Street 5, DHA Phase 5, Defence Housing Authority, Karachi,Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 6.0,
        "status": "Moving",
        "distance": 3.12
      },
      {
        "date": "31/10/2024",
        "time": "02:05 AM",
        "latitude": 24.79823,
        "longitude": 67.0453416,
        "area": "0.01Km from Saylani Welfare, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 3.22
      },
      {
        "date": "31/10/2024",
        "time": "02:35 AM",
        "latitude": 24.79823,
        "longitude": 67.0453416,
        "area": "0.01Km from Saylani Welfare, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 3.22
      },
      {
        "date": "31/10/2024",
        "time": "02:59 AM",
        "latitude": 24.79823,
        "longitude": 67.0453416,
        "area": "0.01Km from Saylani Welfare, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 3.22
      },
      {
        "date": "31/10/2024",
        "time": "02:59 AM",
        "latitude": 24.7981766,
        "longitude": 67.0453383,
        "area": "0.01Km from IyshCleem Badar Commercial Studio, IyshCleem, Badar Commercial 10th Street, DHA Phase 5, Defence HousingAuthority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 3.22
      },
      {
        "date": "31/10/2024",
        "time": "02:59 AM",
        "latitude": 24.7981766,
        "longitude": 67.0453383,
        "area": "0.01Km from IyshCleem Badar Commercial Studio, IyshCleem, Badar Commercial 10th Street, DHA Phase 5, Defence HousingAuthority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 3.22
      },
      {
        "date": "31/10/2024",
        "time": "03:00 AM",
        "latitude": 24.7983566,
        "longitude": 67.0454183,
        "area": "0Km from Sumy's, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 3.22
      },
      {
        "date": "31/10/2024",
        "time": "03:21 AM",
        "latitude": 24.7983566,
        "longitude": 67.04548,
        "area": "0.01Km from Sumy's, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 3.28
      },
      {
        "date": "31/10/2024",
        "time": "03:22 AM",
        "latitude": 24.7990516,
        "longitude": 67.0461483,
        "area": "0.01Km from Aerosoft, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 9.0,
        "status": "Moving",
        "distance": 3.29
      },
      {
        "date": "31/10/2024",
        "time": "03:23 AM",
        "latitude": 24.799315,
        "longitude": 67.0476,
        "area": "0.01Km from Aamir Ladies Fashion, Badar Commercial Street 1, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 4.0,
        "status": "Moving",
        "distance": 3.49
      },
      {
        "date": "31/10/2024",
        "time": "03:24 AM",
        "latitude": 24.7985583,
        "longitude": 67.0471016,
        "area": "0.01Km from Khatri King Foods, Badar Commercial Street 12, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 4.0,
        "status": "Moving",
        "distance": 3.62
      },
      {
        "date": "31/10/2024",
        "time": "03:25 AM",
        "latitude": 24.799035,
        "longitude": 67.0462599,
        "area": "0.02Km from UBL Ameen ( UBL ), UBL Ameen, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 4.0,
        "status": "Moving",
        "distance": 3.7
      },
      {
        "date": "31/10/2024",
        "time": "03:26 AM",
        "latitude": 24.7981399,
        "longitude": 67.0455599,
        "area": "0.01Km from Student Biryani, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 13.0,
        "status": "Moving",
        "distance": 3.82
      },
      {
        "date": "31/10/2024",
        "time": "03:27 AM",
        "latitude": 24.7970783,
        "longitude": 67.0444066,
        "area": "0.03Km from Prime Education Institute, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi,Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 4.0
      },
      {
        "date": "31/10/2024",
        "time": "03:28 AM",
        "latitude": 24.7963499,
        "longitude": 67.0448916,
        "area": "0Km from Pizza Hut, Saba Avenue, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 4.08
      },
      {
        "date": "31/10/2024",
        "time": "03:30 AM",
        "latitude": 24.7962666,
        "longitude": 67.0450066,
        "area": "0Km from Wall Street Exchange Company, Saba Avenue, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 4.08
      },
      {
        "date": "31/10/2024",
        "time": "03:31 AM",
        "latitude": 24.7973016,
        "longitude": 67.0466133,
        "area": "0.01Km from Delizia, Khayaban e Badar, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 4.26
      },
      {
        "date": "31/10/2024",
        "time": "03:32 AM",
        "latitude": 24.7981699,
        "longitude": 67.04731,
        "area": "0.01Km from A Creative Agency, Badar Commercial Street 2, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 4.36
      },
      {
        "date": "31/10/2024",
        "time": "03:33 AM",
        "latitude": 24.7996016,
        "longitude": 67.0472333,
        "area": "0.01Km from Parrots Kingdom, Badar Commercial Street 1, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 4.53
      },
      {
        "date": "31/10/2024",
        "time": "03:34 AM",
        "latitude": 24.7996833,
        "longitude": 67.0468616,
        "area": "0.01Km from Hmilahi Bakhsh & Sons, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 4.64
      },
      {
        "date": "31/10/2024",
        "time": "03:35 AM",
        "latitude": 24.799345,
        "longitude": 67.0459366,
        "area": "0Km from Sahil Consultants, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 8.0,
        "status": "Moving",
        "distance": 4.68
      },
      {
        "date": "31/10/2024",
        "time": "03:36 AM",
        "latitude": 24.8000066,
        "longitude": 67.0452116,
        "area": "0.01Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 13.0,
        "status": "Moving",
        "distance": 4.78
      },
      {
        "date": "31/10/2024",
        "time": "03:37 AM",
        "latitude": 24.7988883,
        "longitude": 67.0438083,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 7.0,
        "status": "Moving",
        "distance": 4.99
      },
      {
        "date": "31/10/2024",
        "time": "03:39 AM",
        "latitude": 24.7983216,
        "longitude": 67.0439466,
        "area": "0Km from Minaar - Estate & Construction, Badar Commercial Street 5, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 5.09
      },
      {
        "date": "31/10/2024",
        "time": "03:40 AM",
        "latitude": 24.7987716,
        "longitude": 67.0444433,
        "area": "0.01Km from Badar Commercial Street 4, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 5.15
      },
      {
        "date": "31/10/2024",
        "time": "03:48 AM",
        "latitude": 24.7992216,
        "longitude": 67.043775,
        "area": "0.01Km from N Design and Solution, Badar Commercial Street 7A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,74000, Pakistan",
        "ignition": "ON",
        "speed": 9.0,
        "status": "Moving",
        "distance": 5.31
      },
      {
        "date": "31/10/2024",
        "time": "03:49 AM",
        "latitude": 24.7997466,
        "longitude": 67.0442866,
        "area": "0.02Km from Makeup by Uzma Riaz, Badar Commercial Street 7A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 5.41
      },
      {
        "date": "31/10/2024",
        "time": "03:49 AM",
        "latitude": 24.7997466,
        "longitude": 67.0442866,
        "area": "0.02Km from Makeup by Uzma Riaz, Badar Commercial Street 7A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 5.41
      },
      {
        "date": "31/10/2024",
        "time": "04:19 AM",
        "latitude": 24.7997466,
        "longitude": 67.0442866,
        "area": "0.02Km from Makeup by Uzma Riaz, Badar Commercial Street 7A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 5.41
      },
      {
        "date": "31/10/2024",
        "time": "04:49 AM",
        "latitude": 24.7997466,
        "longitude": 67.0442866,
        "area": "0.02Km from Makeup by Uzma Riaz, Badar Commercial Street 7A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 5.41
      },
      {
        "date": "31/10/2024",
        "time": "04:52 AM",
        "latitude": 24.7997466,
        "longitude": 67.0442866,
        "area": "0.02Km from Makeup by Uzma Riaz, Badar Commercial Street 7A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 5.41
      },
      {
        "date": "31/10/2024",
        "time": "04:52 AM",
        "latitude": 24.7997433,
        "longitude": 67.0444416,
        "area": "0.03Km from 53, Badar Commercial Street 7A, DHA Phase 5, Karachi, 53, Badar Commercial Street 7A, DHA Phase 5, DefenceHousing Authority, Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 5.41
      },
      {
        "date": "31/10/2024",
        "time": "04:52 AM",
        "latitude": 24.7997433,
        "longitude": 67.0444416,
        "area": "0.03Km from 53, Badar Commercial Street 7A, DHA Phase 5, Karachi, 53, Badar Commercial Street 7A, DHA Phase 5, DefenceHousing Authority, Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 5.41
      },
      {
        "date": "31/10/2024",
        "time": "04:53 AM",
        "latitude": 24.7989849,
        "longitude": 67.0437483,
        "area": "0.01Km from Bundu Khan Restaurant, Badar Commercial Street 7A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 5.49
      },
      {
        "date": "31/10/2024",
        "time": "04:54 AM",
        "latitude": 24.7993,
        "longitude": 67.0442983,
        "area": "0Km from Eshaal Fashion, Badar Commercial Street 7, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 5.49
      },
      {
        "date": "31/10/2024",
        "time": "04:55 AM",
        "latitude": 24.7990699,
        "longitude": 67.043905,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 5.53
      },
      {
        "date": "31/10/2024",
        "time": "04:57 AM",
        "latitude": 24.7982716,
        "longitude": 67.04453,
        "area": "0Km from Sign Now Design Service and Solutions, Badar Commercial Street 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 5.57
      },
      {
        "date": "31/10/2024",
        "time": "04:58 AM",
        "latitude": 24.79734,
        "longitude": 67.0459516,
        "area": "0.01Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 5.57
      },
      {
        "date": "31/10/2024",
        "time": "04:59 AM",
        "latitude": 24.798315,
        "longitude": 67.0470916,
        "area": "0.01Km from Abdullah Fruit Shop, Badar Commercial Street 2, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 5.96
      },
      {
        "date": "31/10/2024",
        "time": "04:59 AM",
        "latitude": 24.798315,
        "longitude": 67.0470916,
        "area": "0.01Km from Abdullah Fruit Shop, Badar Commercial Street 2, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 5.96
      },
      {
        "date": "31/10/2024",
        "time": "05:29 AM",
        "latitude": 24.798315,
        "longitude": 67.0470916,
        "area": "0.01Km from Abdullah Fruit Shop, Badar Commercial Street 2, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 5.96
      },
      {
        "date": "31/10/2024",
        "time": "05:49 AM",
        "latitude": 24.798315,
        "longitude": 67.0470916,
        "area": "0.01Km from Abdullah Fruit Shop, Badar Commercial Street 2, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 5.96
      },
      {
        "date": "31/10/2024",
        "time": "05:49 AM",
        "latitude": 24.7984016,
        "longitude": 67.047095,
        "area": "0.01Km from Khatri King Foods, Badar Commercial Street 12, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 5.96
      },
      {
        "date": "31/10/2024",
        "time": "05:49 AM",
        "latitude": 24.7984016,
        "longitude": 67.047095,
        "area": "0.01Km from Khatri King Foods, Badar Commercial Street 12, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 5.96
      },
      {
        "date": "31/10/2024",
        "time": "05:50 AM",
        "latitude": 24.79825,
        "longitude": 67.04731,
        "area": "0.01Km from Coral Fabrics, Khayaban e Badar, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75400, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 5.96
      },
      {
        "date": "31/10/2024",
        "time": "05:51 AM",
        "latitude": 24.7967,
        "longitude": 67.04619,
        "area": "0.03Km from 123, Khayaban e Badar, DHA Phase 6, Karachi, 123, Khayaban e Badar, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 19.0,
        "status": "Moving",
        "distance": 6.13
      },
      {
        "date": "31/10/2024",
        "time": "05:52 AM",
        "latitude": 24.795915,
        "longitude": 67.04448,
        "area": "0.06Km from 44, Khayaban e Bahria, DHA Phase 5, Karachi, 44, Khayaban e Bahria, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74500, Pakistan",
        "ignition": "ON",
        "speed": 17.0,
        "status": "Moving",
        "distance": 6.33
      },
      {
        "date": "31/10/2024",
        "time": "05:53 AM",
        "latitude": 24.79435,
        "longitude": 67.04394,
        "area": "0.02Km from 47, 34th Street DHA Phase 5, Karachi, 47, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 15.0,
        "status": "Moving",
        "distance": 6.54
      },
      {
        "date": "31/10/2024",
        "time": "05:54 AM",
        "latitude": 24.7937883,
        "longitude": 67.0445466,
        "area": "0.03Km from 53, 34th Street DHA Phase 5, Karachi, 53, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.73
      },
      {
        "date": "31/10/2024",
        "time": "06:02 AM",
        "latitude": 24.7937883,
        "longitude": 67.0445466,
        "area": "0.03Km from 53, 34th Street DHA Phase 5, Karachi, 53, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.73
      },
      {
        "date": "31/10/2024",
        "time": "06:02 AM",
        "latitude": 24.7937766,
        "longitude": 67.0445883,
        "area": "0.03Km from 55, 34th Street DHA Phase 5, Karachi, 55, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.73
      },
      {
        "date": "31/10/2024",
        "time": "06:02 AM",
        "latitude": 24.7937766,
        "longitude": 67.0445883,
        "area": "0.03Km from 55, 34th Street DHA Phase 5, Karachi, 55, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 6.73
      },
      {
        "date": "31/10/2024",
        "time": "06:03 AM",
        "latitude": 24.7935783,
        "longitude": 67.0449316,
        "area": "0.02Km from 57, 34th Street DHA Phase 5, Karachi, 57, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 12.0,
        "status": "Moving",
        "distance": 6.73
      },
      {
        "date": "31/10/2024",
        "time": "06:04 AM",
        "latitude": 24.7931733,
        "longitude": 67.0457266,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 6.77
      },
      {
        "date": "31/10/2024",
        "time": "06:04 AM",
        "latitude": 24.7931733,
        "longitude": 67.0457266,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.77
      },
      {
        "date": "31/10/2024",
        "time": "06:34 AM",
        "latitude": 24.7931733,
        "longitude": 67.0457266,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.77
      },
      {
        "date": "31/10/2024",
        "time": "07:04 AM",
        "latitude": 24.7931733,
        "longitude": 67.0457266,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.77
      },
      {
        "date": "31/10/2024",
        "time": "07:34 AM",
        "latitude": 24.7931733,
        "longitude": 67.0457266,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.77
      },
      {
        "date": "31/10/2024",
        "time": "08:04 AM",
        "latitude": 24.7931733,
        "longitude": 67.0457266,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.77
      },
      {
        "date": "31/10/2024",
        "time": "08:12 AM",
        "latitude": 24.7931066,
        "longitude": 67.045745,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.77
      },
      {
        "date": "31/10/2024",
        "time": "08:12 AM",
        "latitude": 24.7931066,
        "longitude": 67.045745,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.77
      },
      {
        "date": "31/10/2024",
        "time": "08:12 AM",
        "latitude": 24.7931066,
        "longitude": 67.045745,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 6.77
      },
      {
        "date": "31/10/2024",
        "time": "08:12 AM",
        "latitude": 24.7932,
        "longitude": 67.0457316,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.87
      },
      {
        "date": "31/10/2024",
        "time": "08:12 AM",
        "latitude": 24.7932,
        "longitude": 67.0457316,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.87
      },
      {
        "date": "31/10/2024",
        "time": "08:12 AM",
        "latitude": 24.7931633,
        "longitude": 67.0457416,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.87
      },
      {
        "date": "31/10/2024",
        "time": "08:14 AM",
        "latitude": 24.7931566,
        "longitude": 67.0456933,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 6.87
      },
      {
        "date": "31/10/2024",
        "time": "08:14 AM",
        "latitude": 24.7931566,
        "longitude": 67.0456933,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.87
      },
      {
        "date": "31/10/2024",
        "time": "08:17 AM",
        "latitude": 24.7931566,
        "longitude": 67.0456933,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.87
      },
      {
        "date": "31/10/2024",
        "time": "08:17 AM",
        "latitude": 24.7931566,
        "longitude": 67.0456933,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 6.87
      },
      {
        "date": "31/10/2024",
        "time": "08:17 AM",
        "latitude": 24.7931566,
        "longitude": 67.0456933,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 6.87
      },
      {
        "date": "31/10/2024",
        "time": "08:23 AM",
        "latitude": 24.7930066,
        "longitude": 67.0456533,
        "area": "0.02Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 6.87
      },
      {
        "date": "31/10/2024",
        "time": "08:24 AM",
        "latitude": 24.79395,
        "longitude": 67.0477616,
        "area": "0.02Km from 60C, Khayaban e Shahbaz, Karachi, 60C, Khayaban e Shahbaz, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 14.0,
        "status": "Moving",
        "distance": 7.14
      },
      {
        "date": "31/10/2024",
        "time": "08:25 AM",
        "latitude": 24.7956066,
        "longitude": 67.050055,
        "area": "0.06Km from Chota Shahbaz Commercial Area, Shahbaz Commercial, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 18.0,
        "status": "Moving",
        "distance": 7.36
      },
      {
        "date": "31/10/2024",
        "time": "08:26 AM",
        "latitude": 24.7975216,
        "longitude": 67.0525433,
        "area": "0.03Km from 110, Khayaban e Seher, DHA Phase 6, Karachi, 110, Khayaban e Seher, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 25.0,
        "status": "Moving",
        "distance": 7.71
      },
      {
        "date": "31/10/2024",
        "time": "08:27 AM",
        "latitude": 24.7999466,
        "longitude": 67.0548666,
        "area": "0.04Km from 92, Khayaban e Seher, DHA Phase 6, Karachi, 92, Khayaban e Seher, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 26.0,
        "status": "Moving",
        "distance": 8.06
      },
      {
        "date": "31/10/2024",
        "time": "08:28 AM",
        "latitude": 24.8027533,
        "longitude": 67.0576383,
        "area": "0.03Km from 70, Khayaban e Seher, DHA Phase 6, Karachi, 70, Khayaban e Seher, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 23.0,
        "status": "Moving",
        "distance": 8.49
      },
      {
        "date": "31/10/2024",
        "time": "08:29 AM",
        "latitude": 24.8019316,
        "longitude": 67.0590649,
        "area": "0.03Km from 81, 15th Street DHA Phase 6, Karachi, 81, 15th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 24.0,
        "status": "Moving",
        "distance": 8.68
      },
      {
        "date": "31/10/2024",
        "time": "08:30 AM",
        "latitude": 24.8023066,
        "longitude": 67.0621766,
        "area": "0.02Km from 52, Khayaban e Rahat, DHA Phase 6, Karachi, 52, Khayaban e Rahat, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 23.0,
        "status": "Moving",
        "distance": 9.11
      },
      {
        "date": "31/10/2024",
        "time": "08:31 AM",
        "latitude": 24.804405,
        "longitude": 67.0631483,
        "area": "0Km from Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 7.0,
        "status": "Moving",
        "distance": 9.4
      },
      {
        "date": "31/10/2024",
        "time": "08:31 AM",
        "latitude": 24.8041849,
        "longitude": 67.0634133,
        "area": "0.02Km from DHA Medical Centre, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 9.5
      },
      {
        "date": "31/10/2024",
        "time": "08:54 AM",
        "latitude": 24.8041849,
        "longitude": 67.0634133,
        "area": "0.02Km from DHA Medical Centre, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 9.5
      },
      {
        "date": "31/10/2024",
        "time": "08:54 AM",
        "latitude": 24.8041416,
        "longitude": 67.0634633,
        "area": "0.02Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 9.5
      },
      {
        "date": "31/10/2024",
        "time": "08:54 AM",
        "latitude": 24.8041416,
        "longitude": 67.0634633,
        "area": "0.02Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 9.5
      },
      {
        "date": "31/10/2024",
        "time": "08:55 AM",
        "latitude": 24.8042666,
        "longitude": 67.0632683,
        "area": "0.01Km from DHA Medical Centre, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 9.5
      },
      {
        "date": "31/10/2024",
        "time": "08:56 AM",
        "latitude": 24.8057649,
        "longitude": 67.0618316,
        "area": "0.02Km from Go Fresh Company, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 34.0,
        "status": "Moving",
        "distance": 9.64
      },
      {
        "date": "31/10/2024",
        "time": "08:57 AM",
        "latitude": 24.80846,
        "longitude": 67.0619966,
        "area": "0.07Km from Ruth Paul Saloon, 3rd Lane, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 8.0,
        "status": "Moving",
        "distance": 10.05
      },
      {
        "date": "31/10/2024",
        "time": "08:58 AM",
        "latitude": 24.8082933,
        "longitude": 67.0619866,
        "area": "0.02Km from Master Restaurant, Khayaban e Hafiz, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 10.14
      },
      {
        "date": "31/10/2024",
        "time": "08:59 AM",
        "latitude": 24.81089,
        "longitude": 67.0654,
        "area": "0.02Km from 16A, Khayaban e Seher, DHA Phase 6, Karachi, 16A, Khayaban e Seher, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 31.0,
        "status": "Moving",
        "distance": 10.55
      },
      {
        "date": "31/10/2024",
        "time": "09:00 AM",
        "latitude": 24.81069,
        "longitude": 67.0684016,
        "area": "0Km from DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 7.0,
        "status": "Moving",
        "distance": 11.06
      },
      {
        "date": "31/10/2024",
        "time": "09:00 AM",
        "latitude": 24.8106216,
        "longitude": 67.0684383,
        "area": "0Km from DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 11.08
      },
      {
        "date": "31/10/2024",
        "time": "09:30 AM",
        "latitude": 24.8106216,
        "longitude": 67.0684383,
        "area": "0Km from DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 11.08
      },
      {
        "date": "31/10/2024",
        "time": "09:46 AM",
        "latitude": 24.8105366,
        "longitude": 67.0684083,
        "area": "0.01Km from DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 11.08
      },
      {
        "date": "31/10/2024",
        "time": "09:46 AM",
        "latitude": 24.8105366,
        "longitude": 67.0684083,
        "area": "0.01Km from DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 11.08
      },
      {
        "date": "31/10/2024",
        "time": "09:46 AM",
        "latitude": 24.8105799,
        "longitude": 67.0684116,
        "area": "0.01Km from DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 5.0,
        "status": "Moving",
        "distance": 11.08
      },
      {
        "date": "31/10/2024",
        "time": "09:47 AM",
        "latitude": 24.8110833,
        "longitude": 67.06895,
        "area": "0.01Km from DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 5.0,
        "status": "Moving",
        "distance": 11.14
      },
      {
        "date": "31/10/2024",
        "time": "09:48 AM",
        "latitude": 24.8090699,
        "longitude": 67.0687733,
        "area": "0.01Km from Meezan Bank Limited, Meezan Bank, Khayaban e Rahat, DHA Phase 6, Defence Housing Authority, Karachi, Sindh,74000, Pakistan",
        "ignition": "ON",
        "speed": 25.0,
        "status": "Moving",
        "distance": 11.43
      },
      {
        "date": "31/10/2024",
        "time": "09:49 AM",
        "latitude": 24.8081133,
        "longitude": 67.069635,
        "area": "0.01Km from DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 11.69
      },
      {
        "date": "31/10/2024",
        "time": "09:50 AM",
        "latitude": 24.80857,
        "longitude": 67.0694166,
        "area": "0.01Km from 16C, Rahat Commercial Area, Karachi, 16C, 4th Street, Rahat Commercial Area, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 23.0,
        "status": "Moving",
        "distance": 11.73
      },
      {
        "date": "31/10/2024",
        "time": "09:51 AM",
        "latitude": 24.8074566,
        "longitude": 67.0672216,
        "area": "0.02Km from 19, Khayaban e Rahat, DHA Phase 6, Karachi, 19, Khayaban e Rahat, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 29.0,
        "status": "Moving",
        "distance": 11.97
      },
      {
        "date": "31/10/2024",
        "time": "09:52 AM",
        "latitude": 24.80836,
        "longitude": 67.0635816,
        "area": "0.03Km from 81, Khayaban e Ghazi, DHA Phase 6, Karachi, 81, Khayaban e Ghazi, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 26.0,
        "status": "Moving",
        "distance": 12.47
      },
      {
        "date": "31/10/2024",
        "time": "09:53 AM",
        "latitude": 24.8090733,
        "longitude": 67.06242,
        "area": "0.01Km from Pizza Hut, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi, Sindh,74000, Pakistan",
        "ignition": "ON",
        "speed": 22.0,
        "status": "Moving",
        "distance": 12.75
      },
      {
        "date": "31/10/2024",
        "time": "09:54 AM",
        "latitude": 24.8074766,
        "longitude": 67.063275,
        "area": "0.03Km from 96, Khayaban e Hafiz, DHA Phase 6, Karachi, 96, Khayaban e Hafiz, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 25.0,
        "status": "Moving",
        "distance": 13.02
      },
      {
        "date": "31/10/2024",
        "time": "09:55 AM",
        "latitude": 24.8066383,
        "longitude": 67.0662833,
        "area": "0.01Km from 28, Khayaban e Rahat, DHA Phase 6, Karachi, 28, Khayaban e Rahat, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 13.5
      },
      {
        "date": "31/10/2024",
        "time": "09:56 AM",
        "latitude": 24.8067183,
        "longitude": 67.066405,
        "area": "0.03Km from 28, Khayaban e Rahat, DHA Phase 6, Karachi, 28, Khayaban e Rahat, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 18.0,
        "status": "Moving",
        "distance": 13.51
      },
      {
        "date": "31/10/2024",
        "time": "09:57 AM",
        "latitude": 24.8078983,
        "longitude": 67.0675916,
        "area": "0.03Km from 18, Khayaban e Rahat, DHA Phase 6, Karachi, 18, Khayaban e Rahat, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 33.0,
        "status": "Moving",
        "distance": 13.76
      },
      {
        "date": "31/10/2024",
        "time": "09:58 AM",
        "latitude": 24.8105533,
        "longitude": 67.0701316,
        "area": "0.04Km from 32, Popular Avenue, DHA Phase 6, Karachi, 32, Popular Avenue, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 9.0,
        "status": "Moving",
        "distance": 14.14
      },
      {
        "date": "31/10/2024",
        "time": "09:59 AM",
        "latitude": 24.8108783,
        "longitude": 67.0704733,
        "area": "0.02Km from 35, Khayaban e Rahat, DHA Phase 6, Karachi, 35, Khayaban e Rahat, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 19.0,
        "status": "Moving",
        "distance": 14.2
      },
      {
        "date": "31/10/2024",
        "time": "10:00 AM",
        "latitude": 24.8125483,
        "longitude": 67.0714533,
        "area": "0.02Km from 137, Commercial Avenue DHA Phase 7, Karachi, 137, Commercial Avenue DHA Phase 7, DHA Phase 7, DefenceHousing Authority, Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 22.0,
        "status": "Moving",
        "distance": 14.45
      },
      {
        "date": "31/10/2024",
        "time": "10:03 AM",
        "latitude": 24.81422,
        "longitude": 67.0694983,
        "area": "0.02Km from Meezan Bank Limited, Meezan Bank, Commercial Avenue, DHA Phase 7, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 14.75
      },
      {
        "date": "31/10/2024",
        "time": "10:04 AM",
        "latitude": 24.8129316,
        "longitude": 67.0674866,
        "area": "0.03Km from 2A, Khayaban e Seher, DHA Phase 6, Karachi, 2A, Khayaban e Seher, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 26.0,
        "status": "Moving",
        "distance": 14.92
      },
      {
        "date": "31/10/2024",
        "time": "10:05 AM",
        "latitude": 24.8101183,
        "longitude": 67.0647216,
        "area": "0.03Km from 17, Khayaban e Seher, DHA Phase 6, Karachi, 17, Khayaban e Seher, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 31.0,
        "status": "Moving",
        "distance": 15.34
      },
      {
        "date": "31/10/2024",
        "time": "10:06 AM",
        "latitude": 24.8088083,
        "longitude": 67.0630583,
        "area": "0Km from Shahbaz Commercial Area, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 19.0,
        "status": "Moving",
        "distance": 15.65
      },
      {
        "date": "31/10/2024",
        "time": "10:07 AM",
        "latitude": 24.8093466,
        "longitude": 67.0634183,
        "area": "0.01Km from DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 9.0,
        "status": "Moving",
        "distance": 15.69
      },
      {
        "date": "31/10/2024",
        "time": "10:07 AM",
        "latitude": 24.8093966,
        "longitude": 67.0632966,
        "area": "0Km from Shahbaz Commercial Area, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 15.76
      },
      {
        "date": "31/10/2024",
        "time": "10:16 AM",
        "latitude": 24.8093966,
        "longitude": 67.0632966,
        "area": "0Km from Shahbaz Commercial Area, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 15.76
      },
      {
        "date": "31/10/2024",
        "time": "10:16 AM",
        "latitude": 24.8094166,
        "longitude": 67.063245,
        "area": "0Km from Shahbaz Commercial Area, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 15.76
      },
      {
        "date": "31/10/2024",
        "time": "10:17 AM",
        "latitude": 24.8094166,
        "longitude": 67.063245,
        "area": "0Km from Shahbaz Commercial Area, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 15.76
      },
      {
        "date": "31/10/2024",
        "time": "10:18 AM",
        "latitude": 24.81105,
        "longitude": 67.0655216,
        "area": "0.03Km from 16A, Khayaban e Seher, DHA Phase 6, Karachi, 16A, Khayaban e Seher, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 42.0,
        "status": "Moving",
        "distance": 15.95
      },
      {
        "date": "31/10/2024",
        "time": "10:19 AM",
        "latitude": 24.81458,
        "longitude": 67.0689,
        "area": "0.02Km from 25C, Commercial Avenue DHA Phase 6, Karachi, 25C, Commercial Avenue DHA Phase 6, DHA Phase 6, DefenceHousing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 33.0,
        "status": "Moving",
        "distance": 16.57
      },
      {
        "date": "31/10/2024",
        "time": "10:20 AM",
        "latitude": 24.8186216,
        "longitude": 67.0698716,
        "area": "0.03Km from 78, 12th Lane DHA Phase 7, Karachi, 78, 12th Lane DHA Phase 7, DHA Phase 7, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 29.0,
        "status": "Moving",
        "distance": 17.1
      },
      {
        "date": "31/10/2024",
        "time": "10:21 AM",
        "latitude": 24.8196099,
        "longitude": 67.0679616,
        "area": "0.02Km from 64, Khayaban e Badar, DHA Phase 5, Karachi, 64, Khayaban e Badar, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 17.44
      },
      {
        "date": "31/10/2024",
        "time": "10:21 AM",
        "latitude": 24.8196099,
        "longitude": 67.0679616,
        "area": "0.02Km from 64, Khayaban e Badar, DHA Phase 5, Karachi, 64, Khayaban e Badar, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 17.44
      },
      {
        "date": "31/10/2024",
        "time": "10:23 AM",
        "latitude": 24.8196099,
        "longitude": 67.0679616,
        "area": "0.02Km from 64, Khayaban e Badar, DHA Phase 5, Karachi, 64, Khayaban e Badar, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 17.44
      },
      {
        "date": "31/10/2024",
        "time": "10:23 AM",
        "latitude": 24.8196099,
        "longitude": 67.0679616,
        "area": "0.02Km from 64, Khayaban e Badar, DHA Phase 5, Karachi, 64, Khayaban e Badar, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 17.44
      },
      {
        "date": "31/10/2024",
        "time": "10:23 AM",
        "latitude": 24.8196099,
        "longitude": 67.0679616,
        "area": "0.02Km from 64, Khayaban e Badar, DHA Phase 5, Karachi, 64, Khayaban e Badar, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 17.44
      },
      {
        "date": "31/10/2024",
        "time": "10:24 AM",
        "latitude": 24.8183399,
        "longitude": 67.066855,
        "area": "0Km from Khayaban e Badar, DHA Phase 7, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 39.0,
        "status": "Moving",
        "distance": 17.51
      },
      {
        "date": "31/10/2024",
        "time": "10:25 AM",
        "latitude": 24.8155299,
        "longitude": 67.0637483,
        "area": "0.01Km from 2nd Lane DHA Phase 6, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 18.08
      },
      {
        "date": "31/10/2024",
        "time": "10:25 AM",
        "latitude": 24.8155299,
        "longitude": 67.0637483,
        "area": "0.01Km from 2nd Lane DHA Phase 6, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 18.08
      },
      {
        "date": "31/10/2024",
        "time": "10:30 AM",
        "latitude": 24.8155299,
        "longitude": 67.0637483,
        "area": "0.01Km from 2nd Lane DHA Phase 6, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 18.08
      },
      {
        "date": "31/10/2024",
        "time": "10:30 AM",
        "latitude": 24.8155299,
        "longitude": 67.0637466,
        "area": "0.01Km from 2nd Lane DHA Phase 6, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 18.08
      },
      {
        "date": "31/10/2024",
        "time": "10:30 AM",
        "latitude": 24.8155299,
        "longitude": 67.0637466,
        "area": "0.01Km from 2nd Lane DHA Phase 6, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 18.08
      },
      {
        "date": "31/10/2024",
        "time": "10:31 AM",
        "latitude": 24.817035,
        "longitude": 67.0655633,
        "area": "0.07Km from 9B, Khayaban e Badar, DHA Phase 6, Karachi, 9B, Khayaban e Badar, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 18.32
      },
      {
        "date": "31/10/2024",
        "time": "10:34 AM",
        "latitude": 24.8159966,
        "longitude": 67.0655033,
        "area": "0.02Km from 75, 4th Lane DHA Phase 6, Karachi, 75, 4th Lane DHA Phase 6, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 18.48
      },
      {
        "date": "31/10/2024",
        "time": "10:35 AM",
        "latitude": 24.8163866,
        "longitude": 67.0674783,
        "area": "0.01Km from 79, 5th Lane DHA Phase 6, Karachi, 79, 5th Lane DHA Phase 6, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 30.0,
        "status": "Moving",
        "distance": 18.73
      },
      {
        "date": "31/10/2024",
        "time": "10:36 AM",
        "latitude": 24.8195316,
        "longitude": 67.067935,
        "area": "0Km from Khayaban e Badar, DHA Phase 7, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 13.0,
        "status": "Moving",
        "distance": 19.21
      },
      {
        "date": "31/10/2024",
        "time": "10:36 AM",
        "latitude": 24.8196216,
        "longitude": 67.0680366,
        "area": "0Km from Khayaban e Badar, DHA Phase 7, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 19.3
      },
      {
        "date": "31/10/2024",
        "time": "10:57 AM",
        "latitude": 24.8196216,
        "longitude": 67.0680366,
        "area": "0Km from Khayaban e Badar, DHA Phase 7, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 19.3
      },
      {
        "date": "31/10/2024",
        "time": "10:57 AM",
        "latitude": 24.8196716,
        "longitude": 67.0681233,
        "area": "0Km from Khayaban e Badar, DHA Phase 7, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 19.3
      },
      {
        "date": "31/10/2024",
        "time": "10:58 AM",
        "latitude": 24.8196716,
        "longitude": 67.0681233,
        "area": "0Km from Khayaban e Badar, DHA Phase 7, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 19.3
      },
      {
        "date": "31/10/2024",
        "time": "10:59 AM",
        "latitude": 24.8190266,
        "longitude": 67.0673383,
        "area": "0.02Km from 58, Khayaban e Badar, DHA Phase 5, Karachi, 58, Khayaban e Badar, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 13.0,
        "status": "Moving",
        "distance": 19.32
      },
      {
        "date": "31/10/2024",
        "time": "11:00 AM",
        "latitude": 24.816985,
        "longitude": 67.0655383,
        "area": "0.07Km from 9B, Khayaban e Badar, DHA Phase 6, Karachi, 9B, Khayaban e Badar, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 19.7
      },
      {
        "date": "31/10/2024",
        "time": "11:02 AM",
        "latitude": 24.81581,
        "longitude": 67.0636183,
        "area": "0.01Km from 2nd Lane DHA Phase 6, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 15.0,
        "status": "Moving",
        "distance": 20.0
      },
      {
        "date": "31/10/2024",
        "time": "11:03 AM",
        "latitude": 24.8165233,
        "longitude": 67.066645,
        "area": "0.02Km from 76, Commercial Avenue DHA Phase 6, Karachi, 76, Commercial Avenue DHA Phase 6, DHA Phase 6, DefenceHousing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 42.0,
        "status": "Moving",
        "distance": 20.32
      },
      {
        "date": "31/10/2024",
        "time": "11:04 AM",
        "latitude": 24.813325,
        "longitude": 67.0705866,
        "area": "0.01Km from Big Thick Burgerz, Commercial Avenue, DHA Phase 7, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 37.0,
        "status": "Moving",
        "distance": 20.83
      },
      {
        "date": "31/10/2024",
        "time": "11:05 AM",
        "latitude": 24.8106566,
        "longitude": 67.0699266,
        "area": "0.06Km from 44C, Rahat Commercial Area, Karachi, 44C, Popular Avenue, Rahat Commercial Area, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 21.37
      },
      {
        "date": "31/10/2024",
        "time": "11:06 AM",
        "latitude": 24.8104066,
        "longitude": 67.0682666,
        "area": "0.01Km from DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 21.61
      },
      {
        "date": "31/10/2024",
        "time": "11:06 AM",
        "latitude": 24.8104066,
        "longitude": 67.0682666,
        "area": "0.01Km from DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 21.61
      },
      {
        "date": "31/10/2024",
        "time": "11:26 AM",
        "latitude": 24.8104066,
        "longitude": 67.0682666,
        "area": "0.01Km from DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 21.61
      },
      {
        "date": "31/10/2024",
        "time": "11:26 AM",
        "latitude": 24.8104066,
        "longitude": 67.0682666,
        "area": "0.01Km from DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 21.61
      },
      {
        "date": "31/10/2024",
        "time": "11:27 AM",
        "latitude": 24.8104066,
        "longitude": 67.0682666,
        "area": "0.01Km from DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 21.61
      },
      {
        "date": "31/10/2024",
        "time": "11:28 AM",
        "latitude": 24.8110533,
        "longitude": 67.0678449,
        "area": "0.04Km from 83, 3rd Street DHA Phase 6, Karachi, 83, 3rd Street DHA Phase 6, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 28.0,
        "status": "Moving",
        "distance": 21.65
      },
      {
        "date": "31/10/2024",
        "time": "11:29 AM",
        "latitude": 24.8093733,
        "longitude": 67.0639449,
        "area": "0.01Km from H Salon & Spa, Khayaban e Seher, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 29.0,
        "status": "Moving",
        "distance": 22.18
      },
      {
        "date": "31/10/2024",
        "time": "11:31 AM",
        "latitude": 24.80853,
        "longitude": 67.0619216,
        "area": "0.01Km from Bank Islami Limited - ATM, Bank Islami - ATM, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 6.0,
        "status": "Moving",
        "distance": 22.44
      },
      {
        "date": "31/10/2024",
        "time": "11:32 AM",
        "latitude": 24.8090383,
        "longitude": 67.060985,
        "area": "0.07Km from 83, Khayaban e Hafiz, DHA Phase 6, Karachi, 83, Khayaban e Hafiz, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 38.0,
        "status": "Moving",
        "distance": 22.6
      },
      {
        "date": "31/10/2024",
        "time": "11:33 AM",
        "latitude": 24.809765,
        "longitude": 67.0568549,
        "area": "0Km from 10th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 25.0,
        "status": "Moving",
        "distance": 23.16
      },
      {
        "date": "31/10/2024",
        "time": "11:34 AM",
        "latitude": 24.81262,
        "longitude": 67.0548383,
        "area": "0.05Km from 51, 9th Street DHA Phase 5, Karachi, 51, 9th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 26.0,
        "status": "Moving",
        "distance": 23.61
      },
      {
        "date": "31/10/2024",
        "time": "11:35 AM",
        "latitude": 24.8148883,
        "longitude": 67.0530699,
        "area": "0.03Km from Development Directorate Phase 8, Khayaban e Mujahid, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,74000, Pakistan",
        "ignition": "ON",
        "speed": 5.0,
        "status": "Moving",
        "distance": 23.96
      },
      {
        "date": "31/10/2024",
        "time": "11:35 AM",
        "latitude": 24.8150283,
        "longitude": 67.053115,
        "area": "0.01Km from Development Directorate Phase 8, Khayaban e Mujahid, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 24.02
      },
      {
        "date": "31/10/2024",
        "time": "12:05 PM",
        "latitude": 24.8150283,
        "longitude": 67.053115,
        "area": "0.01Km from Development Directorate Phase 8, Khayaban e Mujahid, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 24.02
      },
      {
        "date": "31/10/2024",
        "time": "12:20 PM",
        "latitude": 24.8150283,
        "longitude": 67.053115,
        "area": "0.01Km from Development Directorate Phase 8, Khayaban e Mujahid, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 24.02
      },
      {
        "date": "31/10/2024",
        "time": "12:20 PM",
        "latitude": 24.8151699,
        "longitude": 67.0532383,
        "area": "0.05Km from 33, Khayaban e Hafiz, DHA Phase 5, Karachi, 33, Khayaban e Hafiz, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 24.02
      },
      {
        "date": "31/10/2024",
        "time": "12:21 PM",
        "latitude": 24.8151699,
        "longitude": 67.0532383,
        "area": "0.05Km from 33, Khayaban e Hafiz, DHA Phase 5, Karachi, 33, Khayaban e Hafiz, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 24.02
      },
      {
        "date": "31/10/2024",
        "time": "12:22 PM",
        "latitude": 24.814465,
        "longitude": 67.0527283,
        "area": "0.01Km from DHA Phase- 8 Directorate, Khayaban e Mujahid, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 24.03
      },
      {
        "date": "31/10/2024",
        "time": "12:23 PM",
        "latitude": 24.8117766,
        "longitude": 67.0560066,
        "area": "0.03Km from 54, 9th Street DHA Phase 5, Karachi, 54, 9th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 37.0,
        "status": "Moving",
        "distance": 24.44
      },
      {
        "date": "31/10/2024",
        "time": "12:24 PM",
        "latitude": 24.8094566,
        "longitude": 67.057295,
        "area": "0.03Km from 39, Khayaban e Bahria, DHA Phase 5, Karachi, 39, Khayaban e Bahria, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 24.86
      },
      {
        "date": "31/10/2024",
        "time": "12:25 PM",
        "latitude": 24.8065733,
        "longitude": 67.0555483,
        "area": "0.03Km from 55A, Khayaban e Badar, DHA Phase 6, Karachi, 55A, Khayaban e Badar, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 27.0,
        "status": "Moving",
        "distance": 25.19
      },
      {
        "date": "31/10/2024",
        "time": "12:26 PM",
        "latitude": 24.804775,
        "longitude": 67.05694,
        "area": "0.03Km from 89, Khayaban e Hilal, DHA Phase 6, Karachi, 89, Khayaban e Hilal, Nishat Commercial Area, DHA Phase 6, DefenceHousing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 25.56
      },
      {
        "date": "31/10/2024",
        "time": "12:27 PM",
        "latitude": 24.8030483,
        "longitude": 67.0552649,
        "area": "0Km from Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 32.0,
        "status": "Moving",
        "distance": 25.74
      },
      {
        "date": "31/10/2024",
        "time": "12:28 PM",
        "latitude": 24.7993083,
        "longitude": 67.0517116,
        "area": "0.03Km from 149, Khayaban e Hilal, DHA Phase 6, Karachi, 149, Khayaban e Hilal, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 42.0,
        "status": "Moving",
        "distance": 26.28
      },
      {
        "date": "31/10/2024",
        "time": "12:29 PM",
        "latitude": 24.796445,
        "longitude": 67.0515483,
        "area": "0.23Km from Chota Shahbaz Commercial Area, Shahbaz Commercial, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 22.0,
        "status": "Moving",
        "distance": 26.8
      },
      {
        "date": "31/10/2024",
        "time": "12:30 PM",
        "latitude": 24.7929516,
        "longitude": 67.0507166,
        "area": "0.04Km from 80, 30th Street DHA Phase 6, Karachi, 80, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 8.0,
        "status": "Moving",
        "distance": 27.34
      },
      {
        "date": "31/10/2024",
        "time": "12:30 PM",
        "latitude": 24.7929333,
        "longitude": 67.0507266,
        "area": "0.04Km from 80, 30th Street DHA Phase 6, Karachi, 80, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:32 PM",
        "latitude": 24.7929333,
        "longitude": 67.0507266,
        "area": "0.04Km from 80, 30th Street DHA Phase 6, Karachi, 80, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:32 PM",
        "latitude": 24.7929333,
        "longitude": 67.0507266,
        "area": "0.04Km from 80, 30th Street DHA Phase 6, Karachi, 80, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:32 PM",
        "latitude": 24.7929333,
        "longitude": 67.0507266,
        "area": "0.04Km from 80, 30th Street DHA Phase 6, Karachi, 80, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:33 PM",
        "latitude": 24.7929816,
        "longitude": 67.0507,
        "area": "0.03Km from 80, 30th Street DHA Phase 6, Karachi, 80, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:33 PM",
        "latitude": 24.7929816,
        "longitude": 67.0507,
        "area": "0.03Km from 80, 30th Street DHA Phase 6, Karachi, 80, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:35 PM",
        "latitude": 24.7929816,
        "longitude": 67.0507,
        "area": "0.03Km from 80, 30th Street DHA Phase 6, Karachi, 80, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:36 PM",
        "latitude": 24.7930483,
        "longitude": 67.0506083,
        "area": "0.03Km from 80, 30th Street DHA Phase 6, Karachi, 80, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:36 PM",
        "latitude": 24.7930483,
        "longitude": 67.0506083,
        "area": "0.03Km from 80, 30th Street DHA Phase 6, Karachi, 80, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:37 PM",
        "latitude": 24.7930366,
        "longitude": 67.0505,
        "area": "0.03Km from 81, 30th Street DHA Phase 6, Karachi, 81, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:37 PM",
        "latitude": 24.7930366,
        "longitude": 67.0505,
        "area": "0.03Km from 81, 30th Street DHA Phase 6, Karachi, 81, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:39 PM",
        "latitude": 24.7930366,
        "longitude": 67.0505,
        "area": "0.03Km from 81, 30th Street DHA Phase 6, Karachi, 81, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:39 PM",
        "latitude": 24.7930683,
        "longitude": 67.0504266,
        "area": "0.03Km from 81, 30th Street DHA Phase 6, Karachi, 81, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:39 PM",
        "latitude": 24.7930683,
        "longitude": 67.0504266,
        "area": "0.03Km from 81, 30th Street DHA Phase 6, Karachi, 81, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:40 PM",
        "latitude": 24.792945,
        "longitude": 67.0505116,
        "area": "0.02Km from 81, 30th Street DHA Phase 6, Karachi, 81, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 27.35
      },
      {
        "date": "31/10/2024",
        "time": "12:40 PM",
        "latitude": 24.7920916,
        "longitude": 67.0516483,
        "area": "0.02Km from 89, 30th Street, DHA Phase 6, Karachi, 89, 30th Street DHA Phase 6, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.51
      },
      {
        "date": "31/10/2024",
        "time": "12:56 PM",
        "latitude": 24.7920916,
        "longitude": 67.0516483,
        "area": "0.02Km from 89, 30th Street, DHA Phase 6, Karachi, 89, 30th Street DHA Phase 6, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.51
      },
      {
        "date": "31/10/2024",
        "time": "12:56 PM",
        "latitude": 24.7920016,
        "longitude": 67.0516316,
        "area": "0.01Km from 89, 30th Street, DHA Phase 6, Karachi, 89, 30th Street DHA Phase 6, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.51
      },
      {
        "date": "31/10/2024",
        "time": "12:56 PM",
        "latitude": 24.7920016,
        "longitude": 67.0516316,
        "area": "0.01Km from 89, 30th Street, DHA Phase 6, Karachi, 89, 30th Street DHA Phase 6, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 27.51
      },
      {
        "date": "31/10/2024",
        "time": "01:01 PM",
        "latitude": 24.7922316,
        "longitude": 67.0515383,
        "area": "0.05Km from 88, 30th Street, DHA Phase 6, Karachi, 88, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 27.51
      },
      {
        "date": "31/10/2024",
        "time": "01:02 PM",
        "latitude": 24.7931616,
        "longitude": 67.0503333,
        "area": "0.01Km from Bangladesh High Commission, 30th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence HousingAuthority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 27.65
      },
      {
        "date": "31/10/2024",
        "time": "01:03 PM",
        "latitude": 24.79469,
        "longitude": 67.0493866,
        "area": "0.07Km from Chota Shahbaz Commercial Area, Shahbaz Commercial, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.89
      },
      {
        "date": "31/10/2024",
        "time": "01:07 PM",
        "latitude": 24.7948333,
        "longitude": 67.0493516,
        "area": "0.06Km from Chota Shahbaz Commercial Area, Shahbaz Commercial, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.89
      },
      {
        "date": "31/10/2024",
        "time": "01:07 PM",
        "latitude": 24.7948333,
        "longitude": 67.0493516,
        "area": "0.06Km from Chota Shahbaz Commercial Area, Shahbaz Commercial, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 27.89
      },
      {
        "date": "31/10/2024",
        "time": "01:07 PM",
        "latitude": 24.7948333,
        "longitude": 67.0493516,
        "area": "0.06Km from Chota Shahbaz Commercial Area, Shahbaz Commercial, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 3.0,
        "status": "Moving",
        "distance": 27.89
      },
      {
        "date": "31/10/2024",
        "time": "01:08 PM",
        "latitude": 24.7956499,
        "longitude": 67.05012,
        "area": "0.06Km from Chota Shahbaz Commercial Area, Shahbaz Commercial, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 27.93
      },
      {
        "date": "31/10/2024",
        "time": "01:10 PM",
        "latitude": 24.797555,
        "longitude": 67.0500616,
        "area": "0.04Km from 175, Khayaban e Hilal, DHA Phase 6, Karachi, 175, Khayaban e Hilal, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 15.0,
        "status": "Moving",
        "distance": 28.3
      },
      {
        "date": "31/10/2024",
        "time": "01:11 PM",
        "latitude": 24.7969583,
        "longitude": 67.0471366,
        "area": "0.03Km from 67, 29th Street DHA Phase 6, Karachi, 67, 29th Street DHA Phase 6, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 23.0,
        "status": "Moving",
        "distance": 28.61
      },
      {
        "date": "31/10/2024",
        "time": "01:12 PM",
        "latitude": 24.7964949,
        "longitude": 67.04619,
        "area": "0.05Km from 67, 30th Street DHA Phase 6, Karachi, 67, 30th Street DHA Phase 6, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 28.77
      },
      {
        "date": "31/10/2024",
        "time": "01:12 PM",
        "latitude": 24.7964949,
        "longitude": 67.04619,
        "area": "0.05Km from 67, 30th Street DHA Phase 6, Karachi, 67, 30th Street DHA Phase 6, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 28.77
      },
      {
        "date": "31/10/2024",
        "time": "01:16 PM",
        "latitude": 24.7964949,
        "longitude": 67.04619,
        "area": "0.05Km from 67, 30th Street DHA Phase 6, Karachi, 67, 30th Street DHA Phase 6, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 28.77
      },
      {
        "date": "31/10/2024",
        "time": "01:16 PM",
        "latitude": 24.7964466,
        "longitude": 67.0462716,
        "area": "0.04Km from 67, 30th Street DHA Phase 6, Karachi, 67, 30th Street DHA Phase 6, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 28.77
      },
      {
        "date": "31/10/2024",
        "time": "01:16 PM",
        "latitude": 24.7964466,
        "longitude": 67.0462716,
        "area": "0.04Km from 67, 30th Street DHA Phase 6, Karachi, 67, 30th Street DHA Phase 6, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 28.77
      },
      {
        "date": "31/10/2024",
        "time": "01:18 PM",
        "latitude": 24.7963816,
        "longitude": 67.046405,
        "area": "0.03Km from 66, 30th Street DHA Phase 6, Karachi, 66, 30th Street DHA Phase 6, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 28.77
      },
      {
        "date": "31/10/2024",
        "time": "01:19 PM",
        "latitude": 24.7970266,
        "longitude": 67.0494433,
        "area": "0Km from Khayaban e Hilal, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 27.0,
        "status": "Moving",
        "distance": 29.21
      },
      {
        "date": "31/10/2024",
        "time": "01:20 PM",
        "latitude": 24.8002133,
        "longitude": 67.0525133,
        "area": "0.03Km from 92, Khayaban e Hilal, DHA Phase 6, Karachi, 92, Khayaban e Hilal, Nishat Commercial Area, DHA Phase 6, DefenceHousing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 19.0,
        "status": "Moving",
        "distance": 29.74
      },
      {
        "date": "31/10/2024",
        "time": "01:21 PM",
        "latitude": 24.8026083,
        "longitude": 67.0547799,
        "area": "0.1Km from 66, Khayaban e Hilal, DHA Phase 6, Karachi, 66, Khayaban e Hilal, Nishat Commercial Area, DHA Phase 6, DefenceHousing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 37.0,
        "status": "Moving",
        "distance": 30.03
      },
      {
        "date": "31/10/2024",
        "time": "01:22 PM",
        "latitude": 24.8054183,
        "longitude": 67.0563133,
        "area": "0.03Km from 70, Khayaban e Shaheen, DHA Phase 6, Karachi, 70, Khayaban e Shaheen, DHA Phase 6, Defence HousingAuthority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 33.0,
        "status": "Moving",
        "distance": 30.49
      },
      {
        "date": "31/10/2024",
        "time": "01:23 PM",
        "latitude": 24.8063416,
        "longitude": 67.0583983,
        "area": "0.02Km from 48, Khayaban e Hilal, DHA Phase 6, Karachi, 48, Khayaban e Hilal, Nishat Commercial Area, DHA Phase 6, DefenceHousing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 34.0,
        "status": "Moving",
        "distance": 30.93
      },
      {
        "date": "31/10/2024",
        "time": "01:24 PM",
        "latitude": 24.808225,
        "longitude": 67.0612483,
        "area": "0.02Km from 50, Khayaban e Shahbaz, DHA Phase 6, Karachi, 50, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 31.43
      },
      {
        "date": "31/10/2024",
        "time": "01:25 PM",
        "latitude": 24.808455,
        "longitude": 67.06166,
        "area": "0.02Km from Habib Metropolitan Bank Limited - ATM, Habib Metro Bank - ATM, Khayaban e Shahbaz, Nishat Commercial Area,DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 31.44
      },
      {
        "date": "31/10/2024",
        "time": "01:26 PM",
        "latitude": 24.8069533,
        "longitude": 67.061605,
        "area": "0.01Km from Deliza Snack Cafe Pizza, Khayaban e Seher, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 31.59
      },
      {
        "date": "31/10/2024",
        "time": "01:27 PM",
        "latitude": 24.804175,
        "longitude": 67.06348,
        "area": "0.02Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 32.06
      },
      {
        "date": "31/10/2024",
        "time": "01:27 PM",
        "latitude": 24.8041849,
        "longitude": 67.06348,
        "area": "0.02Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 32.06
      },
      {
        "date": "31/10/2024",
        "time": "01:57 PM",
        "latitude": 24.8041849,
        "longitude": 67.06348,
        "area": "0.02Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 32.06
      },
      {
        "date": "31/10/2024",
        "time": "01:58 PM",
        "latitude": 24.8041849,
        "longitude": 67.06348,
        "area": "0.02Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 32.06
      },
      {
        "date": "31/10/2024",
        "time": "01:58 PM",
        "latitude": 24.8042,
        "longitude": 67.0634733,
        "area": "0.02Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 32.06
      },
      {
        "date": "31/10/2024",
        "time": "01:58 PM",
        "latitude": 24.8042,
        "longitude": 67.0634733,
        "area": "0.02Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 32.06
      },
      {
        "date": "31/10/2024",
        "time": "01:59 PM",
        "latitude": 24.8047833,
        "longitude": 67.0630916,
        "area": "0.01Km from Greenwich University, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence HousingAuthority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 32.11
      },
      {
        "date": "31/10/2024",
        "time": "02:00 PM",
        "latitude": 24.8074466,
        "longitude": 67.0620883,
        "area": "0.01Km from Sweet & Savo, Khayaban e Seher, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 32.45
      },
      {
        "date": "31/10/2024",
        "time": "02:00 PM",
        "latitude": 24.8081283,
        "longitude": 67.0620816,
        "area": "0.01Km from Master Restaurant, Khayaban e Hafiz, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 32.61
      },
      {
        "date": "31/10/2024",
        "time": "02:04 PM",
        "latitude": 24.8081283,
        "longitude": 67.0620816,
        "area": "0.01Km from Master Restaurant, Khayaban e Hafiz, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 32.61
      },
      {
        "date": "31/10/2024",
        "time": "02:04 PM",
        "latitude": 24.8083116,
        "longitude": 67.0620499,
        "area": "0.01Km from Standard Chartered Bank - SCB - ATM, SCB - ATM, Khayaban e Hafiz, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 32.61
      },
      {
        "date": "31/10/2024",
        "time": "02:05 PM",
        "latitude": 24.8083116,
        "longitude": 67.0620499,
        "area": "0.01Km from Standard Chartered Bank - SCB - ATM, SCB - ATM, Khayaban e Hafiz, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 32.61
      },
      {
        "date": "31/10/2024",
        "time": "02:06 PM",
        "latitude": 24.8075683,
        "longitude": 67.0615149,
        "area": "0.01Km from Shahbaz Commercial Area, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 12.0,
        "status": "Moving",
        "distance": 32.65
      },
      {
        "date": "31/10/2024",
        "time": "02:06 PM",
        "latitude": 24.8074466,
        "longitude": 67.0613999,
        "area": "0Km from Shahbaz Commercial Area, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 32.71
      },
      {
        "date": "31/10/2024",
        "time": "02:07 PM",
        "latitude": 24.8072183,
        "longitude": 67.06138,
        "area": "0Km from Shahbaz Commercial Area, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 32.71
      },
      {
        "date": "31/10/2024",
        "time": "02:07 PM",
        "latitude": 24.8072183,
        "longitude": 67.06138,
        "area": "0Km from Shahbaz Commercial Area, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 32.71
      },
      {
        "date": "31/10/2024",
        "time": "02:07 PM",
        "latitude": 24.8072183,
        "longitude": 67.06138,
        "area": "0Km from Shahbaz Commercial Area, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 32.71
      },
      {
        "date": "31/10/2024",
        "time": "02:08 PM",
        "latitude": 24.8070799,
        "longitude": 67.06139,
        "area": "0Km from Shahbaz Commercial Area, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 32.71
      },
      {
        "date": "31/10/2024",
        "time": "02:09 PM",
        "latitude": 24.8063466,
        "longitude": 67.061275,
        "area": "0.02Km from 35, 10th Street DHA Phase 6, Karachi, 35, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 22.0,
        "status": "Moving",
        "distance": 32.82
      },
      {
        "date": "31/10/2024",
        "time": "02:10 PM",
        "latitude": 24.8042333,
        "longitude": 67.0633566,
        "area": "0.01Km from DHA Medical Centre, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 33.17
      },
      {
        "date": "31/10/2024",
        "time": "02:39 PM",
        "latitude": 24.8042333,
        "longitude": 67.0633566,
        "area": "0.01Km from DHA Medical Centre, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 33.17
      },
      {
        "date": "31/10/2024",
        "time": "02:39 PM",
        "latitude": 24.8042283,
        "longitude": 67.0634583,
        "area": "0.01Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 33.17
      },
      {
        "date": "31/10/2024",
        "time": "02:40 PM",
        "latitude": 24.8042283,
        "longitude": 67.0634583,
        "area": "0.01Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 33.17
      },
      {
        "date": "31/10/2024",
        "time": "02:41 PM",
        "latitude": 24.8038783,
        "longitude": 67.0626716,
        "area": "0Km from Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 33.23
      },
      {
        "date": "31/10/2024",
        "time": "02:42 PM",
        "latitude": 24.8015366,
        "longitude": 67.0614566,
        "area": "0.03Km from 56, Khayaban e Rahat, DHA Phase 6, Karachi, 56, Khayaban e Rahat, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 33.65
      },
      {
        "date": "31/10/2024",
        "time": "02:43 PM",
        "latitude": 24.7985266,
        "longitude": 67.0586033,
        "area": "0.02Km from 84, Khayaban e Rahat, DHA Phase 6, Karachi, 84, Khayaban e Rahat, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 31.0,
        "status": "Moving",
        "distance": 33.99
      },
      {
        "date": "31/10/2024",
        "time": "02:44 PM",
        "latitude": 24.79771,
        "longitude": 67.0574549,
        "area": "0.01Km from 98, Khayaban e Rahat, DHA Phase 6, Karachi, 98, Khayaban e Rahat, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 34.24
      },
      {
        "date": "31/10/2024",
        "time": "02:44 PM",
        "latitude": 24.79771,
        "longitude": 67.0574549,
        "area": "0.01Km from 98, Khayaban e Rahat, DHA Phase 6, Karachi, 98, Khayaban e Rahat, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 34.24
      },
      {
        "date": "31/10/2024",
        "time": "02:51 PM",
        "latitude": 24.79771,
        "longitude": 67.0574549,
        "area": "0.01Km from 98, Khayaban e Rahat, DHA Phase 6, Karachi, 98, Khayaban e Rahat, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 34.24
      },
      {
        "date": "31/10/2024",
        "time": "02:51 PM",
        "latitude": 24.7977233,
        "longitude": 67.0573566,
        "area": "0.03Km from 111, 21th Street DHA Phase 6, Karachi, 111, 21th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 34.24
      },
      {
        "date": "31/10/2024",
        "time": "02:51 PM",
        "latitude": 24.7977233,
        "longitude": 67.0573566,
        "area": "0.03Km from 111, 21th Street DHA Phase 6, Karachi, 111, 21th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 34.24
      },
      {
        "date": "31/10/2024",
        "time": "02:52 PM",
        "latitude": 24.7977166,
        "longitude": 67.0574416,
        "area": "0.04Km from 111, 21th Street DHA Phase 6, Karachi, 111, 21th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 34.29
      },
      {
        "date": "31/10/2024",
        "time": "02:53 PM",
        "latitude": 24.79705,
        "longitude": 67.0559683,
        "area": "0.03Km from 106, 22nd Street DHA Phase 6, Karachi, 106, 22nd Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 25.0,
        "status": "Moving",
        "distance": 34.42
      },
      {
        "date": "31/10/2024",
        "time": "02:56 PM",
        "latitude": 24.7968516,
        "longitude": 67.0552433,
        "area": "0.01Km from Khayaban e Rahat, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 34.58
      },
      {
        "date": "31/10/2024",
        "time": "02:57 PM",
        "latitude": 24.7972133,
        "longitude": 67.0545983,
        "area": "0.03Km from 87, 23rd Street DHA Phase 6, Karachi, 87, 23rd Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 8.0,
        "status": "Moving",
        "distance": 34.65
      },
      {
        "date": "31/10/2024",
        "time": "02:58 PM",
        "latitude": 24.7993649,
        "longitude": 67.0543433,
        "area": "0.03Km from 94, Khayaban e Seher, DHA Phase 6, Karachi, 94, Khayaban e Seher, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 22.0,
        "status": "Moving",
        "distance": 34.99
      },
      {
        "date": "31/10/2024",
        "time": "03:00 PM",
        "latitude": 24.7992683,
        "longitude": 67.0562966,
        "area": "0.09Km from Nishat Commercial Area, Khayaban e Shujaat, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "ON",
        "speed": 16.0,
        "status": "Moving",
        "distance": 35.31
      },
      {
        "date": "31/10/2024",
        "time": "03:01 PM",
        "latitude": 24.7986433,
        "longitude": 67.0567799,
        "area": "0.11Km from Nishat Commercial Area, Khayaban e Shujaat, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "ON",
        "speed": 5.0,
        "status": "Moving",
        "distance": 35.41
      },
      {
        "date": "31/10/2024",
        "time": "03:01 PM",
        "latitude": 24.7985899,
        "longitude": 67.0567716,
        "area": "0.12Km from Nishat Commercial Area, Khayaban e Shujaat, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 35.49
      },
      {
        "date": "31/10/2024",
        "time": "03:31 PM",
        "latitude": 24.7985899,
        "longitude": 67.0567716,
        "area": "0.12Km from Nishat Commercial Area, Khayaban e Shujaat, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 35.49
      },
      {
        "date": "31/10/2024",
        "time": "03:33 PM",
        "latitude": 24.7985899,
        "longitude": 67.0567716,
        "area": "0.12Km from Nishat Commercial Area, Khayaban e Shujaat, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 35.49
      },
      {
        "date": "31/10/2024",
        "time": "03:33 PM",
        "latitude": 24.7985866,
        "longitude": 67.057065,
        "area": "0.11Km from Nishat Commercial Area, Khayaban e Shujaat, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 35.49
      },
      {
        "date": "31/10/2024",
        "time": "03:33 PM",
        "latitude": 24.7985383,
        "longitude": 67.0570766,
        "area": "0.12Km from Nishat Commercial Area, Khayaban e Shujaat, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 35.49
      },
      {
        "date": "31/10/2024",
        "time": "03:34 PM",
        "latitude": 24.799205,
        "longitude": 67.057565,
        "area": "0.06Km from Nishat Commercial Area, Khayaban e Shujaat, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "ON",
        "speed": 22.0,
        "status": "Moving",
        "distance": 35.56
      },
      {
        "date": "31/10/2024",
        "time": "03:35 PM",
        "latitude": 24.80032,
        "longitude": 67.0598483,
        "area": "0.02Km from 64, Khayaban e Nishat, DHA Phase 6, Karachi, 64, Khayaban e Nishat, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 26.0,
        "status": "Moving",
        "distance": 35.84
      },
      {
        "date": "31/10/2024",
        "time": "03:36 PM",
        "latitude": 24.8026316,
        "longitude": 67.06245,
        "area": "0.04Km from 103, 13th Street DHA Phase 6, Karachi, 103, 13th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 36.21
      },
      {
        "date": "31/10/2024",
        "time": "03:37 PM",
        "latitude": 24.8042616,
        "longitude": 67.06346,
        "area": "0.01Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 3.0,
        "status": "Moving",
        "distance": 36.57
      },
      {
        "date": "31/10/2024",
        "time": "03:37 PM",
        "latitude": 24.8042566,
        "longitude": 67.0635116,
        "area": "0.01Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 36.61
      },
      {
        "date": "31/10/2024",
        "time": "04:07 PM",
        "latitude": 24.8042566,
        "longitude": 67.0635116,
        "area": "0.01Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 36.61
      },
      {
        "date": "31/10/2024",
        "time": "04:37 PM",
        "latitude": 24.8042566,
        "longitude": 67.0635116,
        "area": "0.01Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 36.61
      },
      {
        "date": "31/10/2024",
        "time": "05:07 PM",
        "latitude": 24.8042566,
        "longitude": 67.0635116,
        "area": "0.01Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 36.61
      },
      {
        "date": "31/10/2024",
        "time": "05:37 PM",
        "latitude": 24.8042566,
        "longitude": 67.0635116,
        "area": "0.01Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 36.61
      },
      {
        "date": "31/10/2024",
        "time": "06:07 PM",
        "latitude": 24.8042566,
        "longitude": 67.0635116,
        "area": "0.01Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 36.61
      },
      {
        "date": "31/10/2024",
        "time": "06:27 PM",
        "latitude": 24.8042566,
        "longitude": 67.0635116,
        "area": "0.01Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 36.61
      },
      {
        "date": "31/10/2024",
        "time": "06:27 PM",
        "latitude": 24.8041783,
        "longitude": 67.06346,
        "area": "0.02Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 36.61
      },
      {
        "date": "31/10/2024",
        "time": "06:27 PM",
        "latitude": 24.8041783,
        "longitude": 67.06346,
        "area": "0.02Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 36.61
      },
      {
        "date": "31/10/2024",
        "time": "06:28 PM",
        "latitude": 24.8041883,
        "longitude": 67.063445,
        "area": "0.02Km from Sindlab, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 36.61
      },
      {
        "date": "31/10/2024",
        "time": "06:29 PM",
        "latitude": 24.8044099,
        "longitude": 67.0631466,
        "area": "0Km from Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 36.62
      },
      {
        "date": "31/10/2024",
        "time": "06:30 PM",
        "latitude": 24.8030466,
        "longitude": 67.0621866,
        "area": "0.04Km from 101, 13th Street DHA Phase 6, Karachi, 101, 13th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 36.74
      },
      {
        "date": "31/10/2024",
        "time": "06:31 PM",
        "latitude": 24.8003266,
        "longitude": 67.0599333,
        "area": "0.02Km from 64, Khayaban e Nishat, DHA Phase 6, Karachi, 64, Khayaban e Nishat, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 30.0,
        "status": "Moving",
        "distance": 37.19
      },
      {
        "date": "31/10/2024",
        "time": "06:32 PM",
        "latitude": 24.7995383,
        "longitude": 67.05458,
        "area": "0.02Km from 93, Khayaban e Seher, DHA Phase 6, Karachi, 93, Khayaban e Seher, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 28.0,
        "status": "Moving",
        "distance": 37.71
      },
      {
        "date": "31/10/2024",
        "time": "06:33 PM",
        "latitude": 24.799155,
        "longitude": 67.0542116,
        "area": "0.03Km from 98, Khayaban e Seher, DHA Phase 6, Karachi, 98, Khayaban e Seher, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 17.0,
        "status": "Moving",
        "distance": 37.84
      },
      {
        "date": "31/10/2024",
        "time": "06:34 PM",
        "latitude": 24.797425,
        "longitude": 67.0526016,
        "area": "0.03Km from 115, Khayaban e Seher, DHA Phase 6, Karachi, 115, Khayaban e Seher, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 29.0,
        "status": "Moving",
        "distance": 38.02
      },
      {
        "date": "31/10/2024",
        "time": "06:35 PM",
        "latitude": 24.7960616,
        "longitude": 67.0497966,
        "area": "0.01Km from Bank Alfalah Limited - ATM, Bank Alfalah - ATM, Khayaban e Shahbaz, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 42.0,
        "status": "Moving",
        "distance": 38.42
      },
      {
        "date": "31/10/2024",
        "time": "06:36 PM",
        "latitude": 24.7932366,
        "longitude": 67.0468616,
        "area": "0Km from DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 74500, Pakistan",
        "ignition": "ON",
        "speed": 39.0,
        "status": "Moving",
        "distance": 38.86
      },
      {
        "date": "31/10/2024",
        "time": "06:37 PM",
        "latitude": 24.793105,
        "longitude": 67.0457033,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 39.12
      },
      {
        "date": "31/10/2024",
        "time": "06:37 PM",
        "latitude": 24.793105,
        "longitude": 67.0457033,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 39.12
      },
      {
        "date": "31/10/2024",
        "time": "06:48 PM",
        "latitude": 24.793105,
        "longitude": 67.0457033,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 39.12
      },
      {
        "date": "31/10/2024",
        "time": "06:48 PM",
        "latitude": 24.7931966,
        "longitude": 67.0456983,
        "area": "0Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 39.12
      },
      {
        "date": "31/10/2024",
        "time": "06:48 PM",
        "latitude": 24.7931966,
        "longitude": 67.0456983,
        "area": "0Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 39.12
      },
      {
        "date": "31/10/2024",
        "time": "06:49 PM",
        "latitude": 24.7931883,
        "longitude": 67.0455766,
        "area": "0.01Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 39.12
      },
      {
        "date": "31/10/2024",
        "time": "06:50 PM",
        "latitude": 24.7943433,
        "longitude": 67.0440283,
        "area": "0.02Km from 49, 34th Street DHA Phase 5, Karachi, 49, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 16.0,
        "status": "Moving",
        "distance": 39.24
      },
      {
        "date": "31/10/2024",
        "time": "06:51 PM",
        "latitude": 24.7957683,
        "longitude": 67.0440649,
        "area": "0.03Km from 42, Khayaba e Bahira, DHA Phase 5, Karachi, 42, Khayaban e Bahria, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74500, Pakistan",
        "ignition": "ON",
        "speed": 17.0,
        "status": "Moving",
        "distance": 39.44
      },
      {
        "date": "31/10/2024",
        "time": "06:52 PM",
        "latitude": 24.7963333,
        "longitude": 67.0456283,
        "area": "0Km from HOBNOB, Khayaban e Badar, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 16.0,
        "status": "Moving",
        "distance": 39.63
      },
      {
        "date": "31/10/2024",
        "time": "06:53 PM",
        "latitude": 24.79748,
        "longitude": 67.046785,
        "area": "0.01Km from Pardesi Real Estate, Khayaban e Badar, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 14.0,
        "status": "Moving",
        "distance": 39.86
      },
      {
        "date": "31/10/2024",
        "time": "06:54 PM",
        "latitude": 24.7989216,
        "longitude": 67.0481,
        "area": "0.02Km from Al Ahad Associate, Badar Commercial Street 1, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 7.0,
        "status": "Moving",
        "distance": 40.01
      },
      {
        "date": "31/10/2024",
        "time": "06:55 PM",
        "latitude": 24.7990583,
        "longitude": 67.0476116,
        "area": "0Km from Madina Auto Genrater Works, Badar Commercial Street 12, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 40.11
      },
      {
        "date": "31/10/2024",
        "time": "07:09 PM",
        "latitude": 24.7990583,
        "longitude": 67.0476116,
        "area": "0Km from Madina Auto Genrater Works, Badar Commercial Street 12, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 40.11
      },
      {
        "date": "31/10/2024",
        "time": "07:09 PM",
        "latitude": 24.7990399,
        "longitude": 67.0474033,
        "area": "0.01Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 40.11
      },
      {
        "date": "31/10/2024",
        "time": "07:09 PM",
        "latitude": 24.7990399,
        "longitude": 67.0474033,
        "area": "0.01Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 40.11
      },
      {
        "date": "31/10/2024",
        "time": "07:10 PM",
        "latitude": 24.7989216,
        "longitude": 67.04738,
        "area": "0.01Km from Just A Trim, Badar Commercial Street 12, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 40.11
      },
      {
        "date": "31/10/2024",
        "time": "07:11 PM",
        "latitude": 24.7990266,
        "longitude": 67.0463916,
        "area": "0.03Km from UBL Ameen ( UBL ), UBL Ameen, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 9.0,
        "status": "Moving",
        "distance": 40.18
      },
      {
        "date": "31/10/2024",
        "time": "07:12 PM",
        "latitude": 24.800225,
        "longitude": 67.0448833,
        "area": "0.02Km from 56, 28th Street, DHA Phase 5, Karachi, 56, Badar Commercial Street 7A, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 9.0,
        "status": "Moving",
        "distance": 40.38
      },
      {
        "date": "31/10/2024",
        "time": "07:12 PM",
        "latitude": 24.8001583,
        "longitude": 67.04452,
        "area": "0.03Km from 54, 28th Street DHA Phase 5, Karachi, 54, 28th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 40.49
      },
      {
        "date": "31/10/2024",
        "time": "07:42 PM",
        "latitude": 24.8001583,
        "longitude": 67.04452,
        "area": "0.03Km from 54, 28th Street DHA Phase 5, Karachi, 54, 28th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 40.49
      },
      {
        "date": "31/10/2024",
        "time": "07:59 PM",
        "latitude": 24.8001583,
        "longitude": 67.04452,
        "area": "0.03Km from 54, 28th Street DHA Phase 5, Karachi, 54, 28th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 40.49
      },
      {
        "date": "31/10/2024",
        "time": "07:59 PM",
        "latitude": 24.8001483,
        "longitude": 67.044495,
        "area": "0.03Km from 54, 28th Street DHA Phase 5, Karachi, 54, 28th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 40.49
      },
      {
        "date": "31/10/2024",
        "time": "07:59 PM",
        "latitude": 24.8001483,
        "longitude": 67.044495,
        "area": "0.03Km from 54, 28th Street DHA Phase 5, Karachi, 54, 28th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 6.0,
        "status": "Moving",
        "distance": 40.49
      },
      {
        "date": "31/10/2024",
        "time": "08:02 PM",
        "latitude": 24.7994699,
        "longitude": 67.0438183,
        "area": "0Km from 73B, 29th Street DHA Phase 5, Karachi, 73B, 29th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 13.0,
        "status": "Moving",
        "distance": 40.53
      },
      {
        "date": "31/10/2024",
        "time": "08:07 PM",
        "latitude": 24.79914,
        "longitude": 67.0442449,
        "area": "0.01Km from Nawab Ali, Badar Commercial Street 7, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 40.68
      },
      {
        "date": "31/10/2024",
        "time": "08:10 PM",
        "latitude": 24.799585,
        "longitude": 67.0444633,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 40.75
      },
      {
        "date": "31/10/2024",
        "time": "08:11 PM",
        "latitude": 24.7990916,
        "longitude": 67.0439349,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 40.8
      },
      {
        "date": "31/10/2024",
        "time": "08:12 PM",
        "latitude": 24.7984099,
        "longitude": 67.044615,
        "area": "0.01Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 12.0,
        "status": "Moving",
        "distance": 40.87
      },
      {
        "date": "31/10/2024",
        "time": "08:13 PM",
        "latitude": 24.7979533,
        "longitude": 67.0449716,
        "area": "0.01Km from Summit Bank Limited, Summit Bank, Badar Commercial Street 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 12.0,
        "status": "Moving",
        "distance": 40.98
      },
      {
        "date": "31/10/2024",
        "time": "08:14 PM",
        "latitude": 24.7975216,
        "longitude": 67.0442616,
        "area": "0.01Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 41.04
      },
      {
        "date": "31/10/2024",
        "time": "08:14 PM",
        "latitude": 24.7975216,
        "longitude": 67.0442616,
        "area": "0.01Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.04
      },
      {
        "date": "31/10/2024",
        "time": "08:18 PM",
        "latitude": 24.7975216,
        "longitude": 67.0442616,
        "area": "0.01Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.04
      },
      {
        "date": "31/10/2024",
        "time": "08:18 PM",
        "latitude": 24.7975416,
        "longitude": 67.0442316,
        "area": "0.01Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.04
      },
      {
        "date": "31/10/2024",
        "time": "08:18 PM",
        "latitude": 24.7975183,
        "longitude": 67.0442216,
        "area": "0.01Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 6.0,
        "status": "Moving",
        "distance": 41.04
      },
      {
        "date": "31/10/2024",
        "time": "08:19 PM",
        "latitude": 24.7982416,
        "longitude": 67.0448649,
        "area": "0Km from La Pizzaro, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 9.0,
        "status": "Moving",
        "distance": 41.13
      },
      {
        "date": "31/10/2024",
        "time": "08:20 PM",
        "latitude": 24.7989883,
        "longitude": 67.0454283,
        "area": "0Km from Galaxy Mart - DHA, Badar Commercial Street 9A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 41.23
      },
      {
        "date": "31/10/2024",
        "time": "08:21 PM",
        "latitude": 24.799015,
        "longitude": 67.0454133,
        "area": "0Km from Galaxy Mart - DHA, Badar Commercial Street 9A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 41.23
      },
      {
        "date": "31/10/2024",
        "time": "08:22 PM",
        "latitude": 24.7990399,
        "longitude": 67.0453733,
        "area": "0.01Km from Memon Associates, Badar Commercial Street 9A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 41.33
      },
      {
        "date": "31/10/2024",
        "time": "08:24 PM",
        "latitude": 24.798775,
        "longitude": 67.0454483,
        "area": "0Km from Darul Shifa, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 41.33
      },
      {
        "date": "31/10/2024",
        "time": "08:25 PM",
        "latitude": 24.798375,
        "longitude": 67.045005,
        "area": "0.01Km from Mari Motors, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 41.36
      },
      {
        "date": "31/10/2024",
        "time": "08:25 PM",
        "latitude": 24.7983466,
        "longitude": 67.0453033,
        "area": "0.01Km from Arkish Badar Studio, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.36
      },
      {
        "date": "31/10/2024",
        "time": "08:42 PM",
        "latitude": 24.7983466,
        "longitude": 67.0453033,
        "area": "0.01Km from Arkish Badar Studio, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.36
      },
      {
        "date": "31/10/2024",
        "time": "08:42 PM",
        "latitude": 24.7982216,
        "longitude": 67.04543,
        "area": "0.01Km from Well Care Pharmacy and Homoeopathic Store, Badar Commercial 10th Street, DHA Phase 5, Defence HousingAuthority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.36
      },
      {
        "date": "31/10/2024",
        "time": "08:42 PM",
        "latitude": 24.7982216,
        "longitude": 67.04543,
        "area": "0.01Km from Well Care Pharmacy and Homoeopathic Store, Badar Commercial 10th Street, DHA Phase 5, Defence HousingAuthority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 6.0,
        "status": "Moving",
        "distance": 41.36
      },
      {
        "date": "31/10/2024",
        "time": "08:43 PM",
        "latitude": 24.7982899,
        "longitude": 67.0455283,
        "area": "0.01Km from Waris Furniture - Branch 5, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi,Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 16.0,
        "status": "Moving",
        "distance": 41.42
      },
      {
        "date": "31/10/2024",
        "time": "08:44 PM",
        "latitude": 24.7999866,
        "longitude": 67.0451016,
        "area": "0.02Km from Trends - Tailor Master Sultan, Badar Commercial Street 7, DHA Phase 5, Defence Housing Authority, Karachi,Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 5.0,
        "status": "Moving",
        "distance": 41.63
      },
      {
        "date": "31/10/2024",
        "time": "08:45 PM",
        "latitude": 24.7993516,
        "longitude": 67.0442733,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 41.8
      },
      {
        "date": "31/10/2024",
        "time": "08:45 PM",
        "latitude": 24.7993516,
        "longitude": 67.0442733,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.8
      },
      {
        "date": "31/10/2024",
        "time": "08:46 PM",
        "latitude": 24.7993516,
        "longitude": 67.0442733,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.8
      },
      {
        "date": "31/10/2024",
        "time": "08:46 PM",
        "latitude": 24.7993816,
        "longitude": 67.0440866,
        "area": "0.01Km from Mughal Furniture, Badar Commercial Street 7A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.8
      },
      {
        "date": "31/10/2024",
        "time": "08:46 PM",
        "latitude": 24.7993816,
        "longitude": 67.0440866,
        "area": "0.01Km from Mughal Furniture, Badar Commercial Street 7A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "ON",
        "speed": 3.0,
        "status": "Moving",
        "distance": 41.8
      },
      {
        "date": "31/10/2024",
        "time": "08:46 PM",
        "latitude": 24.7993816,
        "longitude": 67.0441283,
        "area": "0.01Km from Mughal Furniture, Badar Commercial Street 7A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.84
      },
      {
        "date": "31/10/2024",
        "time": "08:57 PM",
        "latitude": 24.7993816,
        "longitude": 67.0441283,
        "area": "0.01Km from Mughal Furniture, Badar Commercial Street 7A, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.84
      },
      {
        "date": "31/10/2024",
        "time": "08:57 PM",
        "latitude": 24.799225,
        "longitude": 67.0442883,
        "area": "0.01Km from Eshaal Fashion, Badar Commercial Street 7, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.84
      },
      {
        "date": "31/10/2024",
        "time": "08:57 PM",
        "latitude": 24.799225,
        "longitude": 67.0442883,
        "area": "0.01Km from Eshaal Fashion, Badar Commercial Street 7, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 41.84
      },
      {
        "date": "31/10/2024",
        "time": "08:58 PM",
        "latitude": 24.7993866,
        "longitude": 67.0442416,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 41.84
      },
      {
        "date": "31/10/2024",
        "time": "08:59 PM",
        "latitude": 24.7997266,
        "longitude": 67.0456433,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 41.96
      },
      {
        "date": "31/10/2024",
        "time": "08:59 PM",
        "latitude": 24.7997283,
        "longitude": 67.0456566,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.96
      },
      {
        "date": "31/10/2024",
        "time": "09:04 PM",
        "latitude": 24.7997283,
        "longitude": 67.0456566,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.96
      },
      {
        "date": "31/10/2024",
        "time": "09:04 PM",
        "latitude": 24.7995766,
        "longitude": 67.0457766,
        "area": "0Km from Tyre Deals, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 41.96
      },
      {
        "date": "31/10/2024",
        "time": "09:04 PM",
        "latitude": 24.7995766,
        "longitude": 67.0457766,
        "area": "0Km from Tyre Deals, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 41.96
      },
      {
        "date": "31/10/2024",
        "time": "09:05 PM",
        "latitude": 24.7990466,
        "longitude": 67.0460116,
        "area": "0.02Km from Masha Allah New Quetta Hotel, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi,Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 42.05
      },
      {
        "date": "31/10/2024",
        "time": "09:06 PM",
        "latitude": 24.7966033,
        "longitude": 67.0446416,
        "area": "0Km from Marvi Books & Stationers, Saba Avenue, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 42.36
      },
      {
        "date": "31/10/2024",
        "time": "09:07 PM",
        "latitude": 24.7947733,
        "longitude": 67.043535,
        "area": "0.01Km from 43, 34th Street DHA Phase 5, Karachi, 43, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74500, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 42.66
      },
      {
        "date": "31/10/2024",
        "time": "09:07 PM",
        "latitude": 24.7939166,
        "longitude": 67.0446016,
        "area": "0.01Km from 53, 34th Street DHA Phase 5, Karachi, 53, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 42.83
      },
      {
        "date": "31/10/2024",
        "time": "09:36 PM",
        "latitude": 24.7939166,
        "longitude": 67.0446016,
        "area": "0.01Km from 53, 34th Street DHA Phase 5, Karachi, 53, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 42.83
      },
      {
        "date": "31/10/2024",
        "time": "09:36 PM",
        "latitude": 24.7939166,
        "longitude": 67.0446016,
        "area": "0.01Km from 53, 34th Street DHA Phase 5, Karachi, 53, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 42.83
      },
      {
        "date": "31/10/2024",
        "time": "09:36 PM",
        "latitude": 24.7939166,
        "longitude": 67.0446016,
        "area": "0.01Km from 53, 34th Street DHA Phase 5, Karachi, 53, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 42.83
      },
      {
        "date": "31/10/2024",
        "time": "09:37 PM",
        "latitude": 24.7942933,
        "longitude": 67.04405,
        "area": "0.02Km from 49, 34th Street DHA Phase 5, Karachi, 49, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 42.84
      },
      {
        "date": "31/10/2024",
        "time": "09:38 PM",
        "latitude": 24.7963983,
        "longitude": 67.0445383,
        "area": "0.02Km from 41, Saba Avenue, DHA Phase 5, Karachi, 41, Saba Avenue, DHA Phase 5, Defence Housing Authority, Karachi,Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 43.13
      },
      {
        "date": "31/10/2024",
        "time": "09:39 PM",
        "latitude": 24.7977766,
        "longitude": 67.0467949,
        "area": "0Km from Sohail Boutique, Munir Fashion, Badar Commercial Street 12, DHA Phase 5, Defence Housing Authority, Karachi,Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 43.42
      },
      {
        "date": "31/10/2024",
        "time": "09:40 PM",
        "latitude": 24.7993433,
        "longitude": 67.0479583,
        "area": "0Km from Hajis Grocery Store, 26th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 43.73
      },
      {
        "date": "31/10/2024",
        "time": "09:41 PM",
        "latitude": 24.8006333,
        "longitude": 67.0463183,
        "area": "0Km from Bank Al Habib Limited - ATM, Bank Al Habib - ATM, 26th Street DHA Phase 5, DHA Phase 5, Defence HousingAuthority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 5.0,
        "status": "Moving",
        "distance": 43.92
      },
      {
        "date": "31/10/2024",
        "time": "09:41 PM",
        "latitude": 24.80064,
        "longitude": 67.0462733,
        "area": "0Km from HBL Currency Exchange - DHA, HBL Currency Exchange, 26th Street DHA Phase 5, DHA Phase 5, Defence HousingAuthority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 43.98
      },
      {
        "date": "31/10/2024",
        "time": "09:46 PM",
        "latitude": 24.80064,
        "longitude": 67.0462733,
        "area": "0Km from HBL Currency Exchange - DHA, HBL Currency Exchange, 26th Street DHA Phase 5, DHA Phase 5, Defence HousingAuthority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 43.98
      },
      {
        "date": "31/10/2024",
        "time": "09:46 PM",
        "latitude": 24.8008116,
        "longitude": 67.0462583,
        "area": "0.03Km from 58, 26th Street DHA Phase 5, Karachi, 58, 26th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 43.98
      },
      {
        "date": "31/10/2024",
        "time": "09:46 PM",
        "latitude": 24.8008116,
        "longitude": 67.0462583,
        "area": "0.03Km from 58, 26th Street DHA Phase 5, Karachi, 58, 26th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 43.98
      },
      {
        "date": "31/10/2024",
        "time": "09:47 PM",
        "latitude": 24.8002966,
        "longitude": 67.0453599,
        "area": "0.01Km from Beaute Lounge by RB, Badar Commercial Street 7, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 16.0,
        "status": "Moving",
        "distance": 44.0
      },
      {
        "date": "31/10/2024",
        "time": "09:48 PM",
        "latitude": 24.7997066,
        "longitude": 67.0455583,
        "area": "0.01Km from Bel Mondo Saloon and Spa, Badar Commercial Street 2, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 14.0,
        "status": "Moving",
        "distance": 44.14
      },
      {
        "date": "31/10/2024",
        "time": "09:49 PM",
        "latitude": 24.7993483,
        "longitude": 67.0460116,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 44.22
      },
      {
        "date": "31/10/2024",
        "time": "09:49 PM",
        "latitude": 24.7993483,
        "longitude": 67.0460116,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 44.22
      },
      {
        "date": "31/10/2024",
        "time": "10:05 PM",
        "latitude": 24.7993483,
        "longitude": 67.0460116,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 44.22
      },
      {
        "date": "31/10/2024",
        "time": "10:05 PM",
        "latitude": 24.7991933,
        "longitude": 67.0459633,
        "area": "0.01Km from Quetta Smart Super Store, Badar Commercial Street 2, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 44.22
      },
      {
        "date": "31/10/2024",
        "time": "10:05 PM",
        "latitude": 24.7991933,
        "longitude": 67.0459633,
        "area": "0.01Km from Quetta Smart Super Store, Badar Commercial Street 2, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 4.0,
        "status": "Moving",
        "distance": 44.22
      },
      {
        "date": "31/10/2024",
        "time": "10:06 PM",
        "latitude": 24.7990983,
        "longitude": 67.046145,
        "area": "0.01Km from Servis, Badar Commercial Street 2, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 15.0,
        "status": "Moving",
        "distance": 44.26
      },
      {
        "date": "31/10/2024",
        "time": "10:07 PM",
        "latitude": 24.7972,
        "longitude": 67.04459,
        "area": "0Km from Prime Education Institute, Badar Commercial 10th Street, DHA Phase 5, Defence Housing Authority, Karachi, Sindh,75500, Pakistan",
        "ignition": "ON",
        "speed": 9.0,
        "status": "Moving",
        "distance": 44.49
      },
      {
        "date": "31/10/2024",
        "time": "10:08 PM",
        "latitude": 24.79652,
        "longitude": 67.0459066,
        "area": "0.01Km from Versstil Interior Furniture, Khayaban e Badar, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 19.0,
        "status": "Moving",
        "distance": 44.65
      },
      {
        "date": "31/10/2024",
        "time": "10:09 PM",
        "latitude": 24.7993966,
        "longitude": 67.0480366,
        "area": "0.02Km from Lali Wala Baby Shop, 26th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 74000,Pakistan",
        "ignition": "ON",
        "speed": 14.0,
        "status": "Moving",
        "distance": 45.04
      },
      {
        "date": "31/10/2024",
        "time": "10:10 PM",
        "latitude": 24.8005883,
        "longitude": 67.0465399,
        "area": "0.04Km from 60, 26th Street DHA Phase 5, Karachi, 60, 26th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 9.0,
        "status": "Moving",
        "distance": 45.25
      },
      {
        "date": "31/10/2024",
        "time": "10:11 PM",
        "latitude": 24.8008983,
        "longitude": 67.0461633,
        "area": "0.03Km from 58, 26th Street DHA Phase 5, Karachi, 58, 26th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 45.35
      },
      {
        "date": "31/10/2024",
        "time": "10:11 PM",
        "latitude": 24.8008983,
        "longitude": 67.0461633,
        "area": "0.03Km from 58, 26th Street DHA Phase 5, Karachi, 58, 26th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 45.35
      },
      {
        "date": "31/10/2024",
        "time": "10:16 PM",
        "latitude": 24.800835,
        "longitude": 67.0462216,
        "area": "0.03Km from 58, 26th Street DHA Phase 5, Karachi, 58, 26th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 45.35
      },
      {
        "date": "31/10/2024",
        "time": "10:16 PM",
        "latitude": 24.800835,
        "longitude": 67.0462216,
        "area": "0.03Km from 58, 26th Street DHA Phase 5, Karachi, 58, 26th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 45.35
      },
      {
        "date": "31/10/2024",
        "time": "10:16 PM",
        "latitude": 24.800835,
        "longitude": 67.0462216,
        "area": "0.03Km from 58, 26th Street DHA Phase 5, Karachi, 58, 26th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 45.35
      },
      {
        "date": "31/10/2024",
        "time": "10:17 PM",
        "latitude": 24.8009083,
        "longitude": 67.0461583,
        "area": "0.03Km from 58, 26th Street DHA Phase 5, Karachi, 58, 26th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 45.39
      },
      {
        "date": "31/10/2024",
        "time": "10:18 PM",
        "latitude": 24.7999183,
        "longitude": 67.0474183,
        "area": "0.02Km from 139, 26th Street DHA Phase 5, Karachi, 139, 26th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 23.0,
        "status": "Moving",
        "distance": 45.45
      },
      {
        "date": "31/10/2024",
        "time": "10:19 PM",
        "latitude": 24.7988283,
        "longitude": 67.0480366,
        "area": "0.01Km from Coast By Amna Babee, Khayaban e Badar, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 45.65
      },
      {
        "date": "31/10/2024",
        "time": "10:20 PM",
        "latitude": 24.7997566,
        "longitude": 67.0471149,
        "area": "0.02Km from Pak 4X4 Hub, Badar Commercial Street 1, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75400,Pakistan",
        "ignition": "ON",
        "speed": 7.0,
        "status": "Moving",
        "distance": 45.71
      },
      {
        "date": "31/10/2024",
        "time": "10:21 PM",
        "latitude": 24.79968,
        "longitude": 67.0461066,
        "area": "0.01Km from ZS Autos, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 9.0,
        "status": "Moving",
        "distance": 45.84
      },
      {
        "date": "31/10/2024",
        "time": "10:33 PM",
        "latitude": 24.799025,
        "longitude": 67.0456333,
        "area": "0Km from AZ Pharmacy, Badar Commercial Street 3, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 45.95
      },
      {
        "date": "31/10/2024",
        "time": "10:33 PM",
        "latitude": 24.799025,
        "longitude": 67.0456333,
        "area": "0Km from AZ Pharmacy, Badar Commercial Street 3, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 45.95
      },
      {
        "date": "31/10/2024",
        "time": "10:33 PM",
        "latitude": 24.799025,
        "longitude": 67.0456333,
        "area": "0Km from AZ Pharmacy, Badar Commercial Street 3, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 45.95
      },
      {
        "date": "31/10/2024",
        "time": "10:33 PM",
        "latitude": 24.7989316,
        "longitude": 67.045625,
        "area": "0.01Km from Exbids office, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "OFF",
        "speed": 15.0,
        "status": "Stop",
        "distance": 45.95
      },
      {
        "date": "31/10/2024",
        "time": "10:34 PM",
        "latitude": 24.7989366,
        "longitude": 67.0456166,
        "area": "0.01Km from Exbids office, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500,Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 45.95
      },
      {
        "date": "31/10/2024",
        "time": "10:45 PM",
        "latitude": 24.7982633,
        "longitude": 67.0441133,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 46.04
      },
      {
        "date": "31/10/2024",
        "time": "10:46 PM",
        "latitude": 24.797465,
        "longitude": 67.0440666,
        "area": "0.01Km from Technicians Audio & Video Engineer, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 75400, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 46.21
      },
      {
        "date": "31/10/2024",
        "time": "10:47 PM",
        "latitude": 24.7962733,
        "longitude": 67.0446766,
        "area": "0.11Km from 44, Khayaban e Bahria, DHA Phase 5, Karachi, 44, Khayaban e Bahria, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 74500, Pakistan",
        "ignition": "ON",
        "speed": 18.0,
        "status": "Moving",
        "distance": 46.34
      },
      {
        "date": "31/10/2024",
        "time": "10:48 PM",
        "latitude": 24.7932783,
        "longitude": 67.04535,
        "area": "0.02Km from 61, 34th Street DHA Phase 5, Karachi, 61, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 26.0,
        "status": "Moving",
        "distance": 46.81
      },
      {
        "date": "31/10/2024",
        "time": "10:49 PM",
        "latitude": 24.7931299,
        "longitude": 67.0455233,
        "area": "0.02Km from 63, 34th Street DHA Phase 5, Karachi, 63, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 46.94
      },
      {
        "date": "31/10/2024",
        "time": "10:49 PM",
        "latitude": 24.79384,
        "longitude": 67.04462,
        "area": "0.02Km from 53, 34th Street DHA Phase 5, Karachi, 53, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 47.06
      },
      {
        "date": "31/10/2024",
        "time": "10:57 PM",
        "latitude": 24.79384,
        "longitude": 67.04462,
        "area": "0.02Km from 53, 34th Street DHA Phase 5, Karachi, 53, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 47.06
      },
      {
        "date": "31/10/2024",
        "time": "10:57 PM",
        "latitude": 24.7938199,
        "longitude": 67.0446033,
        "area": "0.02Km from 53, 34th Street DHA Phase 5, Karachi, 53, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 47.06
      },
      {
        "date": "31/10/2024",
        "time": "10:57 PM",
        "latitude": 24.7938199,
        "longitude": 67.0446033,
        "area": "0.02Km from 53, 34th Street DHA Phase 5, Karachi, 53, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 4.0,
        "status": "Moving",
        "distance": 47.06
      },
      {
        "date": "31/10/2024",
        "time": "10:58 PM",
        "latitude": 24.7937283,
        "longitude": 67.0447083,
        "area": "0.02Km from 55, 34th Street DHA Phase 5, Karachi, 55, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 16.0,
        "status": "Moving",
        "distance": 47.06
      },
      {
        "date": "31/10/2024",
        "time": "10:59 PM",
        "latitude": 24.7926483,
        "longitude": 67.046135,
        "area": "0.02Km from 67, 34th Street DHA Phase 5, Karachi, 67, 34th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 7.0,
        "status": "Moving",
        "distance": 47.18
      },
      {
        "date": "31/10/2024",
        "time": "11:00 PM",
        "latitude": 24.79437,
        "longitude": 67.04802,
        "area": "0.03Km from 202, Khayaban e Shahbaz, DHA Phase 6, Karachi, 202, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase6, Defence Housing Authority, Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 27.0,
        "status": "Moving",
        "distance": 47.47
      },
      {
        "date": "31/10/2024",
        "time": "11:01 PM",
        "latitude": 24.7975116,
        "longitude": 67.0510783,
        "area": "0.03Km from 170, Khayaban e Shahbaz, DHA Phase 6, Karachi, 170, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 23.0,
        "status": "Moving",
        "distance": 47.96
      },
      {
        "date": "31/10/2024",
        "time": "11:02 PM",
        "latitude": 24.7999666,
        "longitude": 67.0533783,
        "area": "0Km from Service Road, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 15.0,
        "status": "Moving",
        "distance": 48.32
      },
      {
        "date": "31/10/2024",
        "time": "11:03 PM",
        "latitude": 24.8035883,
        "longitude": 67.0567466,
        "area": "0Km from Service Road, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 33.0,
        "status": "Moving",
        "distance": 48.78
      },
      {
        "date": "31/10/2024",
        "time": "11:04 PM",
        "latitude": 24.80435,
        "longitude": 67.0575983,
        "area": "0.03Km from 90, Khayaban e Shahbaz, DHA Phase 6, Karachi, 90, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 49.0
      },
      {
        "date": "31/10/2024",
        "time": "11:05 PM",
        "latitude": 24.8039366,
        "longitude": 67.0583433,
        "area": "0.02Km from Nixor College, Khayaban e Shaheen, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 49.07
      },
      {
        "date": "31/10/2024",
        "time": "11:06 PM",
        "latitude": 24.8061116,
        "longitude": 67.0607666,
        "area": "0.03Km from 44, Khayaban e Seher, DHA Phase 6, Karachi, 44, Khayaban e Seher, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 25.0,
        "status": "Moving",
        "distance": 49.37
      },
      {
        "date": "31/10/2024",
        "time": "11:07 PM",
        "latitude": 24.8042099,
        "longitude": 67.0638866,
        "area": "0.02Km from Ali Chemist & Pharmacy, 10th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6, Defence HousingAuthority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 49.81
      },
      {
        "date": "31/10/2024",
        "time": "11:08 PM",
        "latitude": 24.804485,
        "longitude": 67.0632516,
        "area": "0Km from Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 49.88
      },
      {
        "date": "31/10/2024",
        "time": "11:08 PM",
        "latitude": 24.804485,
        "longitude": 67.0632516,
        "area": "0Km from Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 49.88
      },
      {
        "date": "31/10/2024",
        "time": "11:30 PM",
        "latitude": 24.804485,
        "longitude": 67.0632516,
        "area": "0Km from Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 49.88
      },
      {
        "date": "31/10/2024",
        "time": "11:30 PM",
        "latitude": 24.804485,
        "longitude": 67.0632516,
        "area": "0Km from Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 49.88
      },
      {
        "date": "31/10/2024",
        "time": "11:31 PM",
        "latitude": 24.804485,
        "longitude": 67.0632516,
        "area": "0Km from Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 49.88
      },
      {
        "date": "31/10/2024",
        "time": "11:32 PM",
        "latitude": 24.8027883,
        "longitude": 67.0625233,
        "area": "0.05Km from 103, 13th Street DHA Phase 6, Karachi, 103, 13th Street DHA Phase 6, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 50.05
      },
      {
        "date": "31/10/2024",
        "time": "11:33 PM",
        "latitude": 24.8015499,
        "longitude": 67.0614866,
        "area": "0.03Km from 56, Khayaban e Rahat, DHA Phase 6, Karachi, 56, Khayaban e Rahat, Nishat Commercial Area, DHA Phase 6,Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 12.0,
        "status": "Moving",
        "distance": 50.26
      },
      {
        "date": "31/10/2024",
        "time": "11:34 PM",
        "latitude": 24.8041766,
        "longitude": 67.0579783,
        "area": "0.05Km from Nixor College, Khayaban e Shaheen, Nishat Commercial Area, DHA Phase 6, Defence Housing Authority, Karachi,Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 18.0,
        "status": "Moving",
        "distance": 50.69
      },
      {
        "date": "31/10/2024",
        "time": "11:35 PM",
        "latitude": 24.8018,
        "longitude": 67.0552083,
        "area": "0.03Km from 114, Khayaban e Shahbaz, DHA Phase 6, Karachi, 114, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 41.0,
        "status": "Moving",
        "distance": 51.1
      },
      {
        "date": "31/10/2024",
        "time": "11:36 PM",
        "latitude": 24.7982933,
        "longitude": 67.0518566,
        "area": "0.03Km from 156, Khayaban e Shahbaz, DHA Phase 6, Karachi, 156, Khayaban e Shahbaz, Nishat Commercial Area, DHA Phase6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 29.0,
        "status": "Moving",
        "distance": 51.61
      },
      {
        "date": "31/10/2024",
        "time": "11:37 PM",
        "latitude": 24.7981699,
        "longitude": 67.0496683,
        "area": "0.03Km from 70, 26th Street DHA Phase 6, Karachi, 70, 26th Street DHA Phase 6, DHA Phase 8, DHA Phase 6, Defence HousingAuthority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 19.0,
        "status": "Moving",
        "distance": 51.91
      },
      {
        "date": "31/10/2024",
        "time": "11:38 PM",
        "latitude": 24.7995033,
        "longitude": 67.0476716,
        "area": "0Km from Badar Commercial Area, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 6.0,
        "status": "Moving",
        "distance": 52.22
      },
      {
        "date": "31/10/2024",
        "time": "11:54 PM",
        "latitude": 24.7986116,
        "longitude": 67.047475,
        "area": "0Km from DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 52.27
      },
      {
        "date": "31/10/2024",
        "time": "11:55 PM",
        "latitude": 24.799635,
        "longitude": 67.0457816,
        "area": "0Km from Tyre Deals, Badar Commercial Street 9, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 52.49
      },
      {
        "date": "31/10/2024",
        "time": "11:56 PM",
        "latitude": 24.8005983,
        "longitude": 67.0458933,
        "area": "0Km from JB Traders, Badar Commercial Street 1, DHA Phase 5, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 52.66
      },
      {
        "date": "31/10/2024",
        "time": "11:57 PM",
        "latitude": 24.8001166,
        "longitude": 67.0446033,
        "area": "0.04Km from 54, 28th Street DHA Phase 5, Karachi, 54, 28th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 6.0,
        "status": "Moving",
        "distance": 52.77
      },
      {
        "date": "31/10/2024",
        "time": "11:57 PM",
        "latitude": 24.8000899,
        "longitude": 67.0445466,
        "area": "0.04Km from 54, 28th Street DHA Phase 5, Karachi, 54, 28th Street DHA Phase 5, DHA Phase 5, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 52.88
      }
    ]
  },
  {
    "vehicleNumber": "KQD-0819",
    "locationUpdates": [
      {
        "date": "31/10/2024",
        "time": "08:46 AM",
        "latitude": 24.7661933,
        "longitude": 67.07627,
        "area": "0.01Km from Khayaban e Tipu Sultan, DHA Phase 8, DHA Phase 8 Zone B, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 43.0,
        "status": "Moving",
        "distance": 0.0
      },
      {
        "date": "31/10/2024",
        "time": "08:47 AM",
        "latitude": 24.7683833,
        "longitude": 67.078395,
        "area": "0.01Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 77.0,
        "status": "Moving",
        "distance": 0.22
      },
      {
        "date": "31/10/2024",
        "time": "08:48 AM",
        "latitude": 24.7737783,
        "longitude": 67.08011,
        "area": "0Km from 26th Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 76.0,
        "status": "Moving",
        "distance": 1.05
      },
      {
        "date": "31/10/2024",
        "time": "08:49 AM",
        "latitude": 24.7805933,
        "longitude": 67.0715766,
        "area": "0.03Km from 165C, 26th Street DHA Phase 8 Zone A, Karachi, 165C, 26th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 71.0,
        "status": "Moving",
        "distance": 2.18
      },
      {
        "date": "31/10/2024",
        "time": "08:50 AM",
        "latitude": 24.7851783,
        "longitude": 67.0672016,
        "area": "0.03Km from 139/2, 25th Street DHA Phase 8 Zone A, Karachi, 139/2, 25th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 28.0,
        "status": "Moving",
        "distance": 2.93
      },
      {
        "date": "31/10/2024",
        "time": "08:51 AM",
        "latitude": 24.7872333,
        "longitude": 67.06789,
        "area": "0.02Km from 93/3, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 93/3, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 16.0,
        "status": "Moving",
        "distance": 3.18
      },
      {
        "date": "31/10/2024",
        "time": "08:52 AM",
        "latitude": 24.7892033,
        "longitude": 67.0668166,
        "area": "0Km from Khayaban e Shujaat, Zulfiqar and Al Murtaza Commercial Area, DHA Phase 8 Zone A, Defence Housing Authority,Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 24.0,
        "status": "Moving",
        "distance": 3.48
      },
      {
        "date": "31/10/2024",
        "time": "08:53 AM",
        "latitude": 24.7914966,
        "longitude": 67.0669166,
        "area": "0Km from Khayaban e Ittehad, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 36.0,
        "status": "Moving",
        "distance": 3.85
      },
      {
        "date": "31/10/2024",
        "time": "08:54 AM",
        "latitude": 24.7944816,
        "longitude": 67.0696883,
        "area": "0.02Km from KESC Grid Station, Khayaban e Ittehad, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 4.0,
        "status": "Moving",
        "distance": 4.26
      },
      {
        "date": "31/10/2024",
        "time": "08:55 AM",
        "latitude": 24.7977666,
        "longitude": 67.0728266,
        "area": "0.03Km from 32, Khayaban e Ittehad, DHA Phase 6, Karachi, 32, Khayaban e Ittehad, DHA Phase 6, Defence Housing Authority,Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 31.0,
        "status": "Moving",
        "distance": 4.74
      },
      {
        "date": "31/10/2024",
        "time": "08:56 AM",
        "latitude": 24.80202,
        "longitude": 67.076885,
        "area": "0.02Km from 4/1, Khayaban e Ittehad, DHA Phase 7, Karachi, 4/1, Khayaban e Ittehad, DHA Phase 7, Defence Housing Authority,Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 32.0,
        "status": "Moving",
        "distance": 5.36
      },
      {
        "date": "31/10/2024",
        "time": "08:57 AM",
        "latitude": 24.8075033,
        "longitude": 67.0770066,
        "area": "0Km from Khayaban e Ittehad, DHA Phase 7, Defence Housing Authority, Karachi, Sindh, 74000, Pakistan",
        "ignition": "ON",
        "speed": 34.0,
        "status": "Moving",
        "distance": 5.99
      },
      {
        "date": "31/10/2024",
        "time": "08:58 AM",
        "latitude": 24.8126783,
        "longitude": 67.076305,
        "area": "0Km from Khayaban e Ittehad, Jami Commercial Area, Defence Housing Authority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 37.0,
        "status": "Moving",
        "distance": 6.59
      },
      {
        "date": "31/10/2024",
        "time": "08:59 AM",
        "latitude": 24.8173333,
        "longitude": 67.0756933,
        "area": "0Km from Khayaban e Ittehad, Jami Commercial Area, Defence Housing Authority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 35.0,
        "status": "Moving",
        "distance": 7.09
      },
      {
        "date": "31/10/2024",
        "time": "09:00 AM",
        "latitude": 24.8225216,
        "longitude": 67.074955,
        "area": "0Km from Khayaban e Shahbaz, DHA Phase 7, Defence Housing Authority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 7.76
      },
      {
        "date": "31/10/2024",
        "time": "09:01 AM",
        "latitude": 24.8281583,
        "longitude": 67.0742816,
        "area": "0.09Km from Pizza Hut, Khayaban e Ittehad, DHA Phase 7, Defence Housing Authority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 32.0,
        "status": "Moving",
        "distance": 8.3
      },
      {
        "date": "31/10/2024",
        "time": "09:02 AM",
        "latitude": 24.8314999,
        "longitude": 67.0739416,
        "area": "0.01Km from MYB International, Khayaban e Ittehad, DHA Phase 2 Extension, Defence Housing Authority, Karachi, Sindh, 36100,Pakistan",
        "ignition": "ON",
        "speed": 28.0,
        "status": "Moving",
        "distance": 8.71
      },
      {
        "date": "31/10/2024",
        "time": "09:03 AM",
        "latitude": 24.8334333,
        "longitude": 67.07362,
        "area": "0Km from Biryani King, Khayaban e Ittehad, DHA Phase 2 Extension, Defence Housing Authority, Karachi, Sindh, 75500, Pakistan",
        "ignition": "ON",
        "speed": 15.0,
        "status": "Moving",
        "distance": 8.94
      },
      {
        "date": "31/10/2024",
        "time": "09:04 AM",
        "latitude": 24.8363383,
        "longitude": 67.0687966,
        "area": "0Km from Korangi Road, DHA Phase 2 Extension, Defence Housing Authority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 36.0,
        "status": "Moving",
        "distance": 9.48
      },
      {
        "date": "31/10/2024",
        "time": "09:05 AM",
        "latitude": 24.8383433,
        "longitude": 67.064825,
        "area": "0Km from Korangi Road, Commercial Area A DHA Phase2, DHA Phase 2, Defence Housing Authority, Karachi, Sindh, 36100,Pakistan",
        "ignition": "ON",
        "speed": 49.0,
        "status": "Moving",
        "distance": 9.96
      },
      {
        "date": "31/10/2024",
        "time": "09:06 AM",
        "latitude": 24.8409866,
        "longitude": 67.0600283,
        "area": "0Km from North Circular Avenue DHA Phase 1, DHA Phase 1, Defence Housing Authority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 14.0,
        "status": "Moving",
        "distance": 10.6
      },
      {
        "date": "31/10/2024",
        "time": "09:07 AM",
        "latitude": 24.8420666,
        "longitude": 67.0606666,
        "area": "0.01Km from North Circular Avenue DHA Phase 1, DHA Phase 1, Defence Housing Authority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 28.0,
        "status": "Moving",
        "distance": 10.65
      },
      {
        "date": "31/10/2024",
        "time": "09:08 AM",
        "latitude": 24.8420416,
        "longitude": 67.0613616,
        "area": "0.03Km from 1D, 12th Street East DHA Phase 1, Karachi, 1D, 12th Street East DHA Phase 1, DHA Phase 1, Defence HousingAuthority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 10.84
      },
      {
        "date": "31/10/2024",
        "time": "09:38 AM",
        "latitude": 24.8420416,
        "longitude": 67.0613616,
        "area": "0.03Km from 1D, 12th Street East DHA Phase 1, Karachi, 1D, 12th Street East DHA Phase 1, DHA Phase 1, Defence HousingAuthority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 10.84
      },
      {
        "date": "31/10/2024",
        "time": "10:08 AM",
        "latitude": 24.8420416,
        "longitude": 67.0613616,
        "area": "0.03Km from 1D, 12th Street East DHA Phase 1, Karachi, 1D, 12th Street East DHA Phase 1, DHA Phase 1, Defence HousingAuthority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 10.84
      },
      {
        "date": "31/10/2024",
        "time": "10:16 AM",
        "latitude": 24.8420416,
        "longitude": 67.0613616,
        "area": "0.03Km from 1D, 12th Street East DHA Phase 1, Karachi, 1D, 12th Street East DHA Phase 1, DHA Phase 1, Defence HousingAuthority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 10.84
      },
      {
        "date": "31/10/2024",
        "time": "10:16 AM",
        "latitude": 24.8420583,
        "longitude": 67.06137,
        "area": "0.03Km from 1D, 12th Street East DHA Phase 1, Karachi, 1D, 12th Street East DHA Phase 1, DHA Phase 1, Defence HousingAuthority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 10.84
      },
      {
        "date": "31/10/2024",
        "time": "10:16 AM",
        "latitude": 24.8420583,
        "longitude": 67.06137,
        "area": "0.03Km from 1D, 12th Street East DHA Phase 1, Karachi, 1D, 12th Street East DHA Phase 1, DHA Phase 1, Defence HousingAuthority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 10.84
      },
      {
        "date": "31/10/2024",
        "time": "10:17 AM",
        "latitude": 24.8420583,
        "longitude": 67.06137,
        "area": "0.03Km from 1D, 12th Street East DHA Phase 1, Karachi, 1D, 12th Street East DHA Phase 1, DHA Phase 1, Defence HousingAuthority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 10.84
      },
      {
        "date": "31/10/2024",
        "time": "10:18 AM",
        "latitude": 24.8414283,
        "longitude": 67.060395,
        "area": "0Km from North Circular Avenue DHA Phase 1, DHA Phase 1, Defence Housing Authority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 10.96
      },
      {
        "date": "31/10/2024",
        "time": "10:19 AM",
        "latitude": 24.8387799,
        "longitude": 67.0645016,
        "area": "0.01Km from DHA Phase 1, Defence Housing Authority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 34.0,
        "status": "Moving",
        "distance": 11.4
      },
      {
        "date": "31/10/2024",
        "time": "10:20 AM",
        "latitude": 24.8364416,
        "longitude": 67.0691033,
        "area": "0.03Km from Toyota Defence Motors, Korangi Road, DHA Phase 1, Defence Housing Authority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 35.0,
        "status": "Moving",
        "distance": 11.93
      },
      {
        "date": "31/10/2024",
        "time": "10:21 AM",
        "latitude": 24.8337933,
        "longitude": 67.0737116,
        "area": "0.09Km from 1C, Khayaban e Ittehad, DHA Phase 2 Extension, Karachi, 1C, Khayaban e Ittehad, DHA Phase 2 Extension, DefenceHousing Authority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 14.0,
        "status": "Moving",
        "distance": 12.56
      },
      {
        "date": "31/10/2024",
        "time": "10:22 AM",
        "latitude": 24.8311416,
        "longitude": 67.0741133,
        "area": "0.01Km from Askari Bank Limited - Office Building, Askari Bank Head Office, Khayaban e Ittehad, DHA Phase 2 Extension,Defence Housing Authority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 35.0,
        "status": "Moving",
        "distance": 12.85
      },
      {
        "date": "31/10/2024",
        "time": "10:23 AM",
        "latitude": 24.8275249,
        "longitude": 67.0745583,
        "area": "0.02Km from M14, Khayaban e Ittehad, DHA Phase 7 Extension, Karachi, M14, Khayaban e Ittehad, DHA Phase 7 Extension,Defence Housing Authority, Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 13.28
      },
      {
        "date": "31/10/2024",
        "time": "10:24 AM",
        "latitude": 24.8224766,
        "longitude": 67.0751566,
        "area": "0Km from DHA Phase 7, Defence Housing Authority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 18.0,
        "status": "Moving",
        "distance": 13.84
      },
      {
        "date": "31/10/2024",
        "time": "10:25 AM",
        "latitude": 24.81652,
        "longitude": 67.0759049,
        "area": "0.03Km from M58, Khayaban e Ittehad, DHA Phase 7 Extension, Karachi, M58, Khayaban e Ittehad, DHA Phase 7 Extension,Defence Housing Authority, Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 27.0,
        "status": "Moving",
        "distance": 14.44
      },
      {
        "date": "31/10/2024",
        "time": "10:26 AM",
        "latitude": 24.811825,
        "longitude": 67.0765416,
        "area": "0.03Km from M77, Khayaban e Ittehad, DHA Phase 7 Extension, Karachi, M77, Khayaban e Ittehad, DHA Phase 7 Extension,Defence Housing Authority, Karachi, Sindh, 36100, Pakistan",
        "ignition": "ON",
        "speed": 22.0,
        "status": "Moving",
        "distance": 15.03
      },
      {
        "date": "31/10/2024",
        "time": "10:27 AM",
        "latitude": 24.8054266,
        "longitude": 67.0774116,
        "area": "0.03Km from M102, Khayaban e Ittehad, DHA Phase 7 Extension, Karachi, M102, Khayaban e Ittehad, DHA Phase 7 Extension,Defence Housing Authority, Karachi, Sindh, 0, Pakistan",
        "ignition": "ON",
        "speed": 33.0,
        "status": "Moving",
        "distance": 15.66
      },
      {
        "date": "31/10/2024",
        "time": "10:28 AM",
        "latitude": 24.8012533,
        "longitude": 67.0763883,
        "area": "0.03Km from Subway Ittehad, Subway, Khayaban e Ittehad, DHA Phase 7 Extension, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 27.0,
        "status": "Moving",
        "distance": 16.2
      },
      {
        "date": "31/10/2024",
        "time": "10:29 AM",
        "latitude": 24.7980099,
        "longitude": 67.0750983,
        "area": "0Km from Khayaban e Hafiz, DHA Phase 6, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 34.0,
        "status": "Moving",
        "distance": 16.66
      },
      {
        "date": "31/10/2024",
        "time": "10:30 AM",
        "latitude": 24.7948816,
        "longitude": 67.07425,
        "area": "0.04Km from 34B, Khayaban e Qasim, DHA Phase 6, Karachi, 34B, Khayaban e Qasim, Zulfiqar and Al Murtaza Commercial Area,DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 42.0,
        "status": "Moving",
        "distance": 17.12
      },
      {
        "date": "31/10/2024",
        "time": "10:31 AM",
        "latitude": 24.79039,
        "longitude": 67.0699333,
        "area": "0.04Km from 38, Khayaban e Qasim, DHA Phase 6, Karachi, 38, Khayaban e Qasim, Zulfiqar and Al Murtaza Commercial Area,DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 41.0,
        "status": "Moving",
        "distance": 17.78
      },
      {
        "date": "31/10/2024",
        "time": "10:32 AM",
        "latitude": 24.7863133,
        "longitude": 67.066075,
        "area": "0.04Km from 106, Khayaban e Qasim, DHA Phase 6, Karachi, 106, Khayaban e Qasim, Zulfiqar and Al Murtaza Commercial Area,DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 27.0,
        "status": "Moving",
        "distance": 18.38
      },
      {
        "date": "31/10/2024",
        "time": "10:33 AM",
        "latitude": 24.7836233,
        "longitude": 67.06786,
        "area": "0.06Km from 142, 26th Street DHA Phase 8 Zone A, Karachi, 142, 26th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 28.0,
        "status": "Moving",
        "distance": 18.82
      },
      {
        "date": "31/10/2024",
        "time": "10:34 AM",
        "latitude": 24.7798399,
        "longitude": 67.07262,
        "area": "0.02Km from 170C, 26th Street DHA Phase 8 Zone A, Karachi, 170C, 26th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 41.0,
        "status": "Moving",
        "distance": 19.45
      },
      {
        "date": "31/10/2024",
        "time": "10:34 AM",
        "latitude": 24.7797133,
        "longitude": 67.0714283,
        "area": "0.02Km from 166/3, 27th Street DHA Phase 8 Zone A, Karachi, 166/3, 27th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 19.79
      },
      {
        "date": "31/10/2024",
        "time": "10:36 AM",
        "latitude": 24.7797133,
        "longitude": 67.0714283,
        "area": "0.02Km from 166/3, 27th Street DHA Phase 8 Zone A, Karachi, 166/3, 27th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 19.79
      },
      {
        "date": "31/10/2024",
        "time": "10:36 AM",
        "latitude": 24.7797116,
        "longitude": 67.0714299,
        "area": "0.02Km from 166/3, 27th Street DHA Phase 8 Zone A, Karachi, 166/3, 27th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 19.79
      },
      {
        "date": "31/10/2024",
        "time": "10:36 AM",
        "latitude": 24.7797116,
        "longitude": 67.0714299,
        "area": "0.02Km from 166/3, 27th Street DHA Phase 8 Zone A, Karachi, 166/3, 27th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 19.79
      },
      {
        "date": "31/10/2024",
        "time": "10:37 AM",
        "latitude": 24.7796333,
        "longitude": 67.0715466,
        "area": "0.02Km from 168, 27th Street DHA Phase 8 Zone A, Karachi, 168, 27th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 13.0,
        "status": "Moving",
        "distance": 19.79
      },
      {
        "date": "31/10/2024",
        "time": "10:38 AM",
        "latitude": 24.7790433,
        "longitude": 67.0736216,
        "area": "0Km from 26th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 16.0,
        "status": "Moving",
        "distance": 20.03
      },
      {
        "date": "31/10/2024",
        "time": "10:38 AM",
        "latitude": 24.7790166,
        "longitude": 67.0737766,
        "area": "0.01Km from 26th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 20.08
      },
      {
        "date": "31/10/2024",
        "time": "10:41 AM",
        "latitude": 24.7790166,
        "longitude": 67.0737766,
        "area": "0.01Km from 26th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 20.08
      },
      {
        "date": "31/10/2024",
        "time": "10:41 AM",
        "latitude": 24.77902,
        "longitude": 67.0737833,
        "area": "0.01Km from 26th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 20.08
      },
      {
        "date": "31/10/2024",
        "time": "10:41 AM",
        "latitude": 24.7791016,
        "longitude": 67.073825,
        "area": "0.02Km from 26th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 2.0,
        "status": "Moving",
        "distance": 20.08
      },
      {
        "date": "31/10/2024",
        "time": "10:43 AM",
        "latitude": 24.7789033,
        "longitude": 67.0739433,
        "area": "0.01Km from PSO Petrol Pump, PSO, 26th Street, DHA Phase 8, DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 14.0,
        "status": "Moving",
        "distance": 20.1
      },
      {
        "date": "31/10/2024",
        "time": "10:44 AM",
        "latitude": 24.7777666,
        "longitude": 67.0752766,
        "area": "0.01Km from 26th Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 42.0,
        "status": "Moving",
        "distance": 20.2
      },
      {
        "date": "31/10/2024",
        "time": "10:45 AM",
        "latitude": 24.7745316,
        "longitude": 67.0793283,
        "area": "0Km from Khayaban e Faisal, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 17.0,
        "status": "Moving",
        "distance": 20.75
      },
      {
        "date": "31/10/2024",
        "time": "10:47 AM",
        "latitude": 24.7760566,
        "longitude": 67.0812316,
        "area": "0Km from 23rd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 12.0,
        "status": "Moving",
        "distance": 21.13
      },
      {
        "date": "31/10/2024",
        "time": "10:48 AM",
        "latitude": 24.7751899,
        "longitude": 67.0799316,
        "area": "0Km from Khayaban e Faisal, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 22.0,
        "status": "Moving",
        "distance": 21.23
      },
      {
        "date": "31/10/2024",
        "time": "10:52 AM",
        "latitude": 24.77383,
        "longitude": 67.0814099,
        "area": "0Km from 25th Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 19.0,
        "status": "Moving",
        "distance": 21.54
      },
      {
        "date": "31/10/2024",
        "time": "10:53 AM",
        "latitude": 24.774655,
        "longitude": 67.0803166,
        "area": "0Km from 25th Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 40.0,
        "status": "Moving",
        "distance": 21.6
      },
      {
        "date": "31/10/2024",
        "time": "10:54 AM",
        "latitude": 24.7720383,
        "longitude": 67.0823616,
        "area": "0Km from 26th Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 36.0,
        "status": "Moving",
        "distance": 22.23
      },
      {
        "date": "31/10/2024",
        "time": "10:55 AM",
        "latitude": 24.76697,
        "longitude": 67.0887216,
        "area": "0Km from 26th Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 45.0,
        "status": "Moving",
        "distance": 23.05
      },
      {
        "date": "31/10/2024",
        "time": "10:56 AM",
        "latitude": 24.762625,
        "longitude": 67.0942016,
        "area": "0Km from 26th Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 43.0,
        "status": "Moving",
        "distance": 23.78
      },
      {
        "date": "31/10/2024",
        "time": "10:57 AM",
        "latitude": 24.761465,
        "longitude": 67.0982216,
        "area": "0Km from Beach Street 22 DHA Phase 8 Zone C, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 32.0,
        "status": "Moving",
        "distance": 24.48
      },
      {
        "date": "31/10/2024",
        "time": "10:58 AM",
        "latitude": 24.76124,
        "longitude": 67.0984433,
        "area": "0Km from Beach Street 22 DHA Phase 8 Zone C, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 24.73
      },
      {
        "date": "31/10/2024",
        "time": "10:59 AM",
        "latitude": 24.7617483,
        "longitude": 67.0943866,
        "area": "0.02Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 29.0,
        "status": "Moving",
        "distance": 25.36
      },
      {
        "date": "31/10/2024",
        "time": "11:00 AM",
        "latitude": 24.759165,
        "longitude": 67.0918866,
        "area": "0.02Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 15.0,
        "status": "Moving",
        "distance": 25.78
      },
      {
        "date": "31/10/2024",
        "time": "11:07 AM",
        "latitude": 24.75878,
        "longitude": 67.0914983,
        "area": "0.02Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 15.0,
        "status": "Moving",
        "distance": 25.86
      },
      {
        "date": "31/10/2024",
        "time": "11:08 AM",
        "latitude": 24.7596683,
        "longitude": 67.0905666,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 34.0,
        "status": "Moving",
        "distance": 25.91
      },
      {
        "date": "31/10/2024",
        "time": "11:09 AM",
        "latitude": 24.7627649,
        "longitude": 67.086715,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 35.0,
        "status": "Moving",
        "distance": 26.43
      },
      {
        "date": "31/10/2024",
        "time": "11:10 AM",
        "latitude": 24.7624583,
        "longitude": 67.0833116,
        "area": "0.01Km from Khayaban e Arafat, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 35.0,
        "status": "Moving",
        "distance": 26.91
      },
      {
        "date": "31/10/2024",
        "time": "11:11 AM",
        "latitude": 24.7591616,
        "longitude": 67.08016,
        "area": "0.02Km from Khayaban e Arafat, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 35.0,
        "status": "Moving",
        "distance": 27.4
      },
      {
        "date": "31/10/2024",
        "time": "11:12 AM",
        "latitude": 24.7568833,
        "longitude": 67.0765783,
        "area": "0Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 30.0,
        "status": "Moving",
        "distance": 27.91
      },
      {
        "date": "31/10/2024",
        "time": "11:13 AM",
        "latitude": 24.7601133,
        "longitude": 67.0725316,
        "area": "0Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 22.0,
        "status": "Moving",
        "distance": 28.5
      },
      {
        "date": "31/10/2024",
        "time": "11:13 AM",
        "latitude": 24.7602716,
        "longitude": 67.0724483,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 28.59
      },
      {
        "date": "31/10/2024",
        "time": "11:13 AM",
        "latitude": 24.7602716,
        "longitude": 67.0724483,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 28.59
      },
      {
        "date": "31/10/2024",
        "time": "11:13 AM",
        "latitude": 24.7602783,
        "longitude": 67.07245,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 28.59
      },
      {
        "date": "31/10/2024",
        "time": "11:15 AM",
        "latitude": 24.7602783,
        "longitude": 67.07245,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 28.59
      },
      {
        "date": "31/10/2024",
        "time": "11:15 AM",
        "latitude": 24.7602783,
        "longitude": 67.07245,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 28.59
      },
      {
        "date": "31/10/2024",
        "time": "11:16 AM",
        "latitude": 24.7602783,
        "longitude": 67.07245,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 28.59
      },
      {
        "date": "31/10/2024",
        "time": "11:16 AM",
        "latitude": 24.7602783,
        "longitude": 67.07245,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 28.59
      },
      {
        "date": "31/10/2024",
        "time": "11:16 AM",
        "latitude": 24.7602783,
        "longitude": 67.07245,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 28.59
      },
      {
        "date": "31/10/2024",
        "time": "11:16 AM",
        "latitude": 24.7602783,
        "longitude": 67.07245,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 28.59
      },
      {
        "date": "31/10/2024",
        "time": "11:16 AM",
        "latitude": 24.7602783,
        "longitude": 67.07245,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 28.59
      },
      {
        "date": "31/10/2024",
        "time": "11:17 AM",
        "latitude": 24.7589349,
        "longitude": 67.0739066,
        "area": "0Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 36.0,
        "status": "Moving",
        "distance": 28.69
      },
      {
        "date": "31/10/2024",
        "time": "11:19 AM",
        "latitude": 24.7578666,
        "longitude": 67.073825,
        "area": "0.01Km from DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 14.0,
        "status": "Moving",
        "distance": 28.96
      },
      {
        "date": "31/10/2024",
        "time": "11:20 AM",
        "latitude": 24.7582083,
        "longitude": 67.0748783,
        "area": "0Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 35.0,
        "status": "Moving",
        "distance": 28.98
      },
      {
        "date": "31/10/2024",
        "time": "11:21 AM",
        "latitude": 24.7543316,
        "longitude": 67.0796616,
        "area": "0Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 46.0,
        "status": "Moving",
        "distance": 29.62
      },
      {
        "date": "31/10/2024",
        "time": "11:22 AM",
        "latitude": 24.7518349,
        "longitude": 67.0850183,
        "area": "0.01Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 42.0,
        "status": "Moving",
        "distance": 30.31
      },
      {
        "date": "31/10/2024",
        "time": "11:22 AM",
        "latitude": 24.7542099,
        "longitude": 67.0873416,
        "area": "0Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 30.77
      },
      {
        "date": "31/10/2024",
        "time": "11:30 AM",
        "latitude": 24.7542099,
        "longitude": 67.0873416,
        "area": "0Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 30.77
      },
      {
        "date": "31/10/2024",
        "time": "11:30 AM",
        "latitude": 24.7542333,
        "longitude": 67.0873633,
        "area": "0Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 30.77
      },
      {
        "date": "31/10/2024",
        "time": "11:31 AM",
        "latitude": 24.7541833,
        "longitude": 67.0873699,
        "area": "0Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 6.0,
        "status": "Moving",
        "distance": 30.77
      },
      {
        "date": "31/10/2024",
        "time": "11:32 AM",
        "latitude": 24.7547399,
        "longitude": 67.0912899,
        "area": "0.01Km from Beach Street 7 DHA Phase 8 Zone C, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 54.0,
        "status": "Moving",
        "distance": 31.19
      },
      {
        "date": "31/10/2024",
        "time": "11:34 AM",
        "latitude": 24.7568866,
        "longitude": 67.0945366,
        "area": "0.02Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 31.71
      },
      {
        "date": "31/10/2024",
        "time": "11:35 AM",
        "latitude": 24.75419,
        "longitude": 67.0902166,
        "area": "0Km from Beach Street 6A DHA Phase 8 Zone C, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 31.0,
        "status": "Moving",
        "distance": 32.17
      },
      {
        "date": "31/10/2024",
        "time": "11:36 AM",
        "latitude": 24.7543016,
        "longitude": 67.0873733,
        "area": "0.01Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 32.63
      },
      {
        "date": "31/10/2024",
        "time": "11:36 AM",
        "latitude": 24.7543016,
        "longitude": 67.0873733,
        "area": "0.01Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 32.63
      },
      {
        "date": "31/10/2024",
        "time": "11:38 AM",
        "latitude": 24.7543016,
        "longitude": 67.0873733,
        "area": "0.01Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 32.63
      },
      {
        "date": "31/10/2024",
        "time": "11:38 AM",
        "latitude": 24.7543066,
        "longitude": 67.0873733,
        "area": "0.01Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 32.63
      },
      {
        "date": "31/10/2024",
        "time": "11:38 AM",
        "latitude": 24.7543066,
        "longitude": 67.0873733,
        "area": "0.01Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 32.63
      },
      {
        "date": "31/10/2024",
        "time": "11:39 AM",
        "latitude": 24.7553233,
        "longitude": 67.0882383,
        "area": "0.02Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 24.0,
        "status": "Moving",
        "distance": 32.68
      },
      {
        "date": "31/10/2024",
        "time": "11:40 AM",
        "latitude": 24.7574283,
        "longitude": 67.0902616,
        "area": "0.02Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 27.0,
        "status": "Moving",
        "distance": 32.99
      },
      {
        "date": "31/10/2024",
        "time": "11:41 AM",
        "latitude": 24.7584266,
        "longitude": 67.0912149,
        "area": "0.02Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 33.21
      },
      {
        "date": "31/10/2024",
        "time": "11:42 AM",
        "latitude": 24.76059,
        "longitude": 67.0893716,
        "area": "0.01Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 23.0,
        "status": "Moving",
        "distance": 33.45
      },
      {
        "date": "31/10/2024",
        "time": "11:43 AM",
        "latitude": 24.76309,
        "longitude": 67.0862449,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 27.0,
        "status": "Moving",
        "distance": 33.87
      },
      {
        "date": "31/10/2024",
        "time": "11:44 AM",
        "latitude": 24.765585,
        "longitude": 67.083125,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 34.29
      },
      {
        "date": "31/10/2024",
        "time": "11:45 AM",
        "latitude": 24.76522,
        "longitude": 67.081085,
        "area": "0Km from Khayaban e Khybar, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 7.0,
        "status": "Moving",
        "distance": 34.65
      },
      {
        "date": "31/10/2024",
        "time": "11:45 AM",
        "latitude": 24.7651833,
        "longitude": 67.0810549,
        "area": "0Km from Khayaban e Khybar, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 34.69
      },
      {
        "date": "31/10/2024",
        "time": "11:45 AM",
        "latitude": 24.7651833,
        "longitude": 67.0810549,
        "area": "0Km from Khayaban e Khybar, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 34.69
      },
      {
        "date": "31/10/2024",
        "time": "11:45 AM",
        "latitude": 24.7651833,
        "longitude": 67.0810549,
        "area": "0Km from Khayaban e Khybar, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 34.69
      },
      {
        "date": "31/10/2024",
        "time": "11:45 AM",
        "latitude": 24.7651383,
        "longitude": 67.0810166,
        "area": "0Km from Khayaban e Khybar, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 12.0,
        "status": "Stop",
        "distance": 34.7
      },
      {
        "date": "31/10/2024",
        "time": "11:46 AM",
        "latitude": 24.7632883,
        "longitude": 67.0792149,
        "area": "0Km from Khayaban e Khybar, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 27.0,
        "status": "Moving",
        "distance": 34.9
      },
      {
        "date": "31/10/2024",
        "time": "11:47 AM",
        "latitude": 24.7590599,
        "longitude": 67.0751616,
        "area": "0Km from Khayaban e Khybar, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 39.0,
        "status": "Moving",
        "distance": 35.5
      },
      {
        "date": "31/10/2024",
        "time": "11:47 AM",
        "latitude": 24.7602616,
        "longitude": 67.0725183,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 35.98
      },
      {
        "date": "31/10/2024",
        "time": "12:17 PM",
        "latitude": 24.7602616,
        "longitude": 67.0725183,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 35.98
      },
      {
        "date": "31/10/2024",
        "time": "12:28 PM",
        "latitude": 24.7603116,
        "longitude": 67.0726033,
        "area": "0.02Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 35.98
      },
      {
        "date": "31/10/2024",
        "time": "12:28 PM",
        "latitude": 24.7603116,
        "longitude": 67.0726033,
        "area": "0.02Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 35.98
      },
      {
        "date": "31/10/2024",
        "time": "12:28 PM",
        "latitude": 24.7603116,
        "longitude": 67.0726033,
        "area": "0.02Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 35.98
      },
      {
        "date": "31/10/2024",
        "time": "12:29 PM",
        "latitude": 24.7612,
        "longitude": 67.0716483,
        "area": "0Km from Abdul Sattar Edhi Road, DHA Phase 8, DHA Phase 8 Extension, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 36.11
      },
      {
        "date": "31/10/2024",
        "time": "12:30 PM",
        "latitude": 24.7612616,
        "longitude": 67.0716716,
        "area": "0Km from Khayaban e Tipu Sultan, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 12.0,
        "status": "Moving",
        "distance": 36.11
      },
      {
        "date": "31/10/2024",
        "time": "12:31 PM",
        "latitude": 24.76265,
        "longitude": 67.0700149,
        "area": "0Km from Abdul Sattar Edhi Road, DHA Phase 8 Extension, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 33.0,
        "status": "Moving",
        "distance": 36.24
      },
      {
        "date": "31/10/2024",
        "time": "12:32 PM",
        "latitude": 24.76429,
        "longitude": 67.0664516,
        "area": "0.05Km from Service Lane, Sahil Commercial Area, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 15.0,
        "status": "Moving",
        "distance": 36.74
      },
      {
        "date": "31/10/2024",
        "time": "12:35 PM",
        "latitude": 24.7648366,
        "longitude": 67.0667483,
        "area": "0.12Km from Service Lane, Sahil Commercial Area, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 16.0,
        "status": "Moving",
        "distance": 36.86
      },
      {
        "date": "31/10/2024",
        "time": "12:36 PM",
        "latitude": 24.7654916,
        "longitude": 67.0668783,
        "area": "0.19Km from Service Lane, Sahil Commercial Area, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 26.0,
        "status": "Moving",
        "distance": 36.92
      },
      {
        "date": "31/10/2024",
        "time": "12:37 PM",
        "latitude": 24.7646999,
        "longitude": 67.06547,
        "area": "0.13Km from Service Lane, Sahil Commercial Area, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 16.0,
        "status": "Moving",
        "distance": 37.18
      },
      {
        "date": "31/10/2024",
        "time": "12:38 PM",
        "latitude": 24.7665133,
        "longitude": 67.0633083,
        "area": "0Km from Sahil Central Avenue, DHA Phase 8 Extension, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 30.0,
        "status": "Moving",
        "distance": 37.4
      },
      {
        "date": "31/10/2024",
        "time": "12:39 PM",
        "latitude": 24.77008,
        "longitude": 67.059905,
        "area": "0.01Km from Sahil Central Avenue, DHA Phase 8 Extension, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 28.0,
        "status": "Moving",
        "distance": 37.93
      },
      {
        "date": "31/10/2024",
        "time": "12:40 PM",
        "latitude": 24.7728733,
        "longitude": 67.0573,
        "area": "0Km from Sahil Street 9, DHA Phase 8 Extension, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 38.34
      },
      {
        "date": "31/10/2024",
        "time": "12:41 PM",
        "latitude": 24.774385,
        "longitude": 67.0583449,
        "area": "0.01Km from Abdul Sattar Edhi Road, Sahil Commercial Area, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 25.0,
        "status": "Moving",
        "distance": 38.7
      },
      {
        "date": "31/10/2024",
        "time": "12:42 PM",
        "latitude": 24.775585,
        "longitude": 67.06084,
        "area": "0.06Km from 227/2, 38th Street DHA Phase 8 Zone A, Karachi, 227/2, 38th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 39.06
      },
      {
        "date": "31/10/2024",
        "time": "12:43 PM",
        "latitude": 24.77758,
        "longitude": 67.0592933,
        "area": "0.02Km from 217, 37th Street DHA Phase 8 Zone A, Karachi, 217, 37th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 8.0,
        "status": "Moving",
        "distance": 39.34
      },
      {
        "date": "31/10/2024",
        "time": "12:44 PM",
        "latitude": 24.778305,
        "longitude": 67.0584183,
        "area": "0Km from Khayaban e Qasim, Zulfiqar and Al Murtaza Commercial Area, DHA Phase 8 Zone A, Defence Housing Authority,Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 15.0,
        "status": "Moving",
        "distance": 39.42
      },
      {
        "date": "31/10/2024",
        "time": "12:45 PM",
        "latitude": 24.780295,
        "longitude": 67.0601183,
        "area": "0.03Km from 154, Khayaban e Qasim, DHA Phase 6, Karachi, 154, Khayaban e Qasim, Zulfiqar and Al Murtaza Commercial Area,DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 22.0,
        "status": "Moving",
        "distance": 39.7
      },
      {
        "date": "31/10/2024",
        "time": "12:46 PM",
        "latitude": 24.7799316,
        "longitude": 67.0630266,
        "area": "0.02Km from 194/2, 32nd Street DHA Phase 8 Zone A, Karachi, 194/2, 32nd Street DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 22.0,
        "status": "Moving",
        "distance": 40.11
      },
      {
        "date": "31/10/2024",
        "time": "12:47 PM",
        "latitude": 24.7802233,
        "longitude": 67.0649916,
        "area": "0.04Km from 144, Saba Avenue, DHA Phase 8 Zone A, Karachi, 144, Saba Avenue, DHA Phase 8, DHA Phase 8 Zone A, DefenceHousing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 40.45
      },
      {
        "date": "31/10/2024",
        "time": "12:48 PM",
        "latitude": 24.77862,
        "longitude": 67.0677016,
        "area": "0.01Km from Khayaban e Iqbal, DHA Phase 8, DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 24.0,
        "status": "Moving",
        "distance": 40.8
      },
      {
        "date": "31/10/2024",
        "time": "12:49 PM",
        "latitude": 24.7805366,
        "longitude": 67.0661316,
        "area": "0.03Km from 149A, 30th Street DHA Phase 8 Zone A, Karachi, 149A, 30th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 26.0,
        "status": "Moving",
        "distance": 41.05
      },
      {
        "date": "31/10/2024",
        "time": "12:50 PM",
        "latitude": 24.7805983,
        "longitude": 67.0676766,
        "area": "0.03Km from 212/3, 29th Street DHA Phase 8 Zone A, Karachi, 212/3, 29th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 28.0,
        "status": "Moving",
        "distance": 41.41
      },
      {
        "date": "31/10/2024",
        "time": "12:51 PM",
        "latitude": 24.7786066,
        "longitude": 67.0701366,
        "area": "0.02Km from 171, 29th Street DHA Phase 8 Zone A, Karachi, 171, 29th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 29.0,
        "status": "Moving",
        "distance": 41.75
      },
      {
        "date": "31/10/2024",
        "time": "12:52 PM",
        "latitude": 24.7765716,
        "longitude": 67.0701933,
        "area": "0.01Km from Khayaban e Khalid, Zulfiqar Al Murtaza Commercial Area, DHA Phase 8 Zone A, Defence Housing Authority,Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 15.0,
        "status": "Moving",
        "distance": 42.06
      },
      {
        "date": "31/10/2024",
        "time": "12:53 PM",
        "latitude": 24.77503,
        "longitude": 67.069025,
        "area": "0.03Km from 141, Khayaban e Khalid, DHA Phase 8 Zone A, Karachi, 141, Khayaban e Khalid, DHA Phase 8, DHA Phase 8 Zone A,Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 16.0,
        "status": "Moving",
        "distance": 42.23
      },
      {
        "date": "31/10/2024",
        "time": "12:54 PM",
        "latitude": 24.77487,
        "longitude": 67.0671266,
        "area": "0.02Km from 250, 34th Street DHA Phase 8 Zone A, Karachi, 250, 34th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 16.0,
        "status": "Moving",
        "distance": 42.49
      },
      {
        "date": "31/10/2024",
        "time": "12:59 PM",
        "latitude": 24.7755416,
        "longitude": 67.0660533,
        "area": "0.01Km from 239/2, 34th Street DHA Phase 8 Zone A, Karachi, 239/2, 34th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 18.0,
        "status": "Moving",
        "distance": 42.69
      },
      {
        "date": "31/10/2024",
        "time": "01:00 PM",
        "latitude": 24.7746766,
        "longitude": 67.0646883,
        "area": "0.04Km from 248, 36th Street DHA Phase 8 Zone A, Karachi, 248, 36th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 27.0,
        "status": "Moving",
        "distance": 42.94
      },
      {
        "date": "31/10/2024",
        "time": "01:01 PM",
        "latitude": 24.77283,
        "longitude": 67.06808,
        "area": "0.01Km from 156, Khayaban e Ghalib, DHA Phase 8 Zone A, Karachi, 156, Khayaban e Ghalib, DHA Phase 8, DHA Phase 8 Zone A,Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 27.0,
        "status": "Moving",
        "distance": 43.29
      },
      {
        "date": "31/10/2024",
        "time": "01:02 PM",
        "latitude": 24.7757466,
        "longitude": 67.0709133,
        "area": "0.02Km from 134, Khayaban e Ghalib, DHA Phase 8 Zone A, Karachi, 134, Khayaban e Ghalib, DHA Phase 8, DHA Phase 8 Zone A,Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 22.0,
        "status": "Moving",
        "distance": 43.79
      },
      {
        "date": "31/10/2024",
        "time": "01:03 PM",
        "latitude": 24.7791183,
        "longitude": 67.0743166,
        "area": "0.08Km from 112/1, Khayaban e Ghalib, DHA Phase 8 Zone A, Karachi, 112/1, Khayaban e Ghalib, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 44.27
      },
      {
        "date": "31/10/2024",
        "time": "01:04 PM",
        "latitude": 24.7792999,
        "longitude": 67.0744599,
        "area": "0.1Km from 112/1, Khayaban e Ghalib, DHA Phase 8 Zone A, Karachi, 112/1, Khayaban e Ghalib, DHA Phase 8, DHA Phase 8 ZoneA, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 24.0,
        "status": "Moving",
        "distance": 44.35
      },
      {
        "date": "31/10/2024",
        "time": "01:04 PM",
        "latitude": 24.7799283,
        "longitude": 67.0751083,
        "area": "0Km from Khayaban e Ghalib, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 44.46
      },
      {
        "date": "31/10/2024",
        "time": "01:20 PM",
        "latitude": 24.7799283,
        "longitude": 67.0751083,
        "area": "0Km from Khayaban e Ghalib, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 44.46
      },
      {
        "date": "31/10/2024",
        "time": "01:20 PM",
        "latitude": 24.7799016,
        "longitude": 67.0751099,
        "area": "0Km from Khayaban e Ghalib, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 44.46
      },
      {
        "date": "31/10/2024",
        "time": "01:20 PM",
        "latitude": 24.7799016,
        "longitude": 67.0751099,
        "area": "0Km from Khayaban e Ghalib, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 44.46
      },
      {
        "date": "31/10/2024",
        "time": "01:21 PM",
        "latitude": 24.7800316,
        "longitude": 67.0749683,
        "area": "0.01Km from Khayaban e Ghalib, DHA Phase 8, DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 44.46
      },
      {
        "date": "31/10/2024",
        "time": "01:22 PM",
        "latitude": 24.782345,
        "longitude": 67.0752683,
        "area": "0.01Km from 219, Khayaban e Shujaat, DHA Phase 8 Zone A, Karachi, 219, Khayaban e Shujaat, DHA Phase 8, DHA Phase 8 ZoneA, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 32.0,
        "status": "Moving",
        "distance": 44.72
      },
      {
        "date": "31/10/2024",
        "time": "01:23 PM",
        "latitude": 24.7857449,
        "longitude": 67.0709483,
        "area": "0.01Km from 179, Khayaban e Shujaat, DHA Phase 8 Zone A, Karachi, 179, Khayaban e Shujaat, DHA Phase 8, DHA Phase 8 ZoneA, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 33.0,
        "status": "Moving",
        "distance": 45.3
      },
      {
        "date": "31/10/2024",
        "time": "01:24 PM",
        "latitude": 24.7871766,
        "longitude": 67.0691566,
        "area": "0.03Km from NJC Waste Managment System, Khayaban e Shujaat, DHA Phase 8, DHA Phase 8 Zone A, Defence HousingAuthority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 23.0,
        "status": "Moving",
        "distance": 45.62
      },
      {
        "date": "31/10/2024",
        "time": "01:25 PM",
        "latitude": 24.7864366,
        "longitude": 67.0675216,
        "area": "0.05Km from 99/3, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 99/3, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 16.0,
        "status": "Moving",
        "distance": 45.79
      },
      {
        "date": "31/10/2024",
        "time": "01:25 PM",
        "latitude": 24.7863566,
        "longitude": 67.0673433,
        "area": "0.04Km from 99/3, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 99/3, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 45.91
      },
      {
        "date": "31/10/2024",
        "time": "01:55 PM",
        "latitude": 24.7863566,
        "longitude": 67.0673433,
        "area": "0.04Km from 99/3, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 99/3, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 45.91
      },
      {
        "date": "31/10/2024",
        "time": "02:25 PM",
        "latitude": 24.7863566,
        "longitude": 67.0673433,
        "area": "0.04Km from 99/3, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 99/3, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 45.91
      },
      {
        "date": "31/10/2024",
        "time": "02:55 PM",
        "latitude": 24.7863566,
        "longitude": 67.0673433,
        "area": "0.04Km from 99/3, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 99/3, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 45.91
      },
      {
        "date": "31/10/2024",
        "time": "03:25 PM",
        "latitude": 24.7863566,
        "longitude": 67.0673433,
        "area": "0.04Km from 99/3, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 99/3, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 45.91
      },
      {
        "date": "31/10/2024",
        "time": "03:52 PM",
        "latitude": 24.7863566,
        "longitude": 67.0673433,
        "area": "0.04Km from 99/3, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 99/3, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 45.91
      },
      {
        "date": "31/10/2024",
        "time": "03:52 PM",
        "latitude": 24.7863733,
        "longitude": 67.06733,
        "area": "0.04Km from 99/3, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 99/3, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 45.91
      },
      {
        "date": "31/10/2024",
        "time": "03:52 PM",
        "latitude": 24.7863733,
        "longitude": 67.06733,
        "area": "0.04Km from 99/3, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 99/3, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 45.91
      },
      {
        "date": "31/10/2024",
        "time": "03:53 PM",
        "latitude": 24.7858166,
        "longitude": 67.06712,
        "area": "0.04Km from Masjid Hamza, 25th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8 Zone A, Defence Housing Authority,Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 23.0,
        "status": "Moving",
        "distance": 45.91
      },
      {
        "date": "31/10/2024",
        "time": "03:54 PM",
        "latitude": 24.7843333,
        "longitude": 67.0686316,
        "area": "0.01Km from 104/4, Khayaban e Roomi DHA Phase 8, Karachi, 104/4, Khayaban e Roomi DHA Phase 8, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 18.0,
        "status": "Moving",
        "distance": 46.24
      },
      {
        "date": "31/10/2024",
        "time": "03:55 PM",
        "latitude": 24.78372,
        "longitude": 67.0689816,
        "area": "0.02Km from 149, 25th Street DHA Phase 8 Zone A, Karachi, 149, 25th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 17.0,
        "status": "Moving",
        "distance": 46.31
      },
      {
        "date": "31/10/2024",
        "time": "03:56 PM",
        "latitude": 24.7834433,
        "longitude": 67.0692983,
        "area": "0.02Km from 151, 25th Street DHA Phase 8 Zone A, Karachi, 151, 25th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 28.0,
        "status": "Moving",
        "distance": 46.33
      },
      {
        "date": "31/10/2024",
        "time": "03:57 PM",
        "latitude": 24.7807333,
        "longitude": 67.0715,
        "area": "0.03Km from 164, 26th Street DHA Phase 8 Zone A, Karachi, 164, 26th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 30.0,
        "status": "Moving",
        "distance": 46.7
      },
      {
        "date": "31/10/2024",
        "time": "03:58 PM",
        "latitude": 24.7773766,
        "longitude": 67.0755883,
        "area": "0Km from 26th Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 32.0,
        "status": "Moving",
        "distance": 47.26
      },
      {
        "date": "31/10/2024",
        "time": "03:59 PM",
        "latitude": 24.7746516,
        "longitude": 67.0748833,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 26.0,
        "status": "Moving",
        "distance": 47.7
      },
      {
        "date": "31/10/2024",
        "time": "04:03 PM",
        "latitude": 24.7739116,
        "longitude": 67.075515,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 12.0,
        "status": "Moving",
        "distance": 47.92
      },
      {
        "date": "31/10/2024",
        "time": "04:04 PM",
        "latitude": 24.77427,
        "longitude": 67.0738983,
        "area": "0Km from Khayaban e Babar, DHA Phase 8, Sahil Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 19.0,
        "status": "Moving",
        "distance": 48.05
      },
      {
        "date": "31/10/2024",
        "time": "04:05 PM",
        "latitude": 24.7723316,
        "longitude": 67.0731866,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 15.0,
        "status": "Moving",
        "distance": 48.38
      },
      {
        "date": "31/10/2024",
        "time": "04:05 PM",
        "latitude": 24.7721916,
        "longitude": 67.0731099,
        "area": "0.01Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 48.46
      },
      {
        "date": "31/10/2024",
        "time": "04:08 PM",
        "latitude": 24.7721916,
        "longitude": 67.0731099,
        "area": "0.01Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 48.46
      },
      {
        "date": "31/10/2024",
        "time": "04:08 PM",
        "latitude": 24.7721916,
        "longitude": 67.0731116,
        "area": "0.01Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 48.46
      },
      {
        "date": "31/10/2024",
        "time": "04:08 PM",
        "latitude": 24.7722133,
        "longitude": 67.0730766,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 9.0,
        "status": "Moving",
        "distance": 48.46
      },
      {
        "date": "31/10/2024",
        "time": "04:09 PM",
        "latitude": 24.7753099,
        "longitude": 67.0709699,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 54.0,
        "status": "Moving",
        "distance": 48.86
      },
      {
        "date": "31/10/2024",
        "time": "04:10 PM",
        "latitude": 24.7801699,
        "longitude": 67.0691316,
        "area": "0.02Km from Khayaban e Iqbal, DHA Phase 8, DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 61.0,
        "status": "Moving",
        "distance": 49.59
      },
      {
        "date": "31/10/2024",
        "time": "04:16 PM",
        "latitude": 24.7838283,
        "longitude": 67.0688816,
        "area": "0.03Km from 149, 25th Street DHA Phase 8 Zone A, Karachi, 149, 25th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 50.27
      },
      {
        "date": "31/10/2024",
        "time": "04:19 PM",
        "latitude": 24.784335,
        "longitude": 67.0695216,
        "area": "0.03Km from 149/2, 24th Street DHA Phase 8 Zone A, Karachi, 149/2, 24th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 50.43
      },
      {
        "date": "31/10/2024",
        "time": "04:20 PM",
        "latitude": 24.7840299,
        "longitude": 67.0699266,
        "area": "0.03Km from 151, 24th Street DHA Phase 8 Zone A, Karachi, 151, 24th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 50.44
      },
      {
        "date": "31/10/2024",
        "time": "04:20 PM",
        "latitude": 24.7840299,
        "longitude": 67.0699266,
        "area": "0.03Km from 151, 24th Street DHA Phase 8 Zone A, Karachi, 151, 24th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 50.44
      },
      {
        "date": "31/10/2024",
        "time": "04:29 PM",
        "latitude": 24.7840299,
        "longitude": 67.0699266,
        "area": "0.03Km from 151, 24th Street DHA Phase 8 Zone A, Karachi, 151, 24th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 50.44
      },
      {
        "date": "31/10/2024",
        "time": "04:29 PM",
        "latitude": 24.7840299,
        "longitude": 67.0699266,
        "area": "0.03Km from 151, 24th Street DHA Phase 8 Zone A, Karachi, 151, 24th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 50.44
      },
      {
        "date": "31/10/2024",
        "time": "04:29 PM",
        "latitude": 24.783955,
        "longitude": 67.06998,
        "area": "0.03Km from 150, 24th Street DHA Phase 8 Zone A, Karachi, 150, 24th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 8.0,
        "status": "Moving",
        "distance": 50.44
      },
      {
        "date": "31/10/2024",
        "time": "04:30 PM",
        "latitude": 24.7825933,
        "longitude": 67.0714,
        "area": "0.02Km from DHA Phase 8 Zone A, 24th Street, DHA Phase 8, DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 23.0,
        "status": "Moving",
        "distance": 50.72
      },
      {
        "date": "31/10/2024",
        "time": "04:31 PM",
        "latitude": 24.7789416,
        "longitude": 67.07379,
        "area": "0Km from 26th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 23.0,
        "status": "Moving",
        "distance": 51.21
      },
      {
        "date": "31/10/2024",
        "time": "04:32 PM",
        "latitude": 24.7752666,
        "longitude": 67.074695,
        "area": "0.01Km from Khayaban e Babar, DHA Phase 8, Sahil Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 47.0,
        "status": "Moving",
        "distance": 51.77
      },
      {
        "date": "31/10/2024",
        "time": "04:34 PM",
        "latitude": 24.772225,
        "longitude": 67.0730933,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 13.0,
        "status": "Moving",
        "distance": 52.32
      },
      {
        "date": "31/10/2024",
        "time": "04:35 PM",
        "latitude": 24.7701183,
        "longitude": 67.0745366,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 24.0,
        "status": "Moving",
        "distance": 52.55
      },
      {
        "date": "31/10/2024",
        "time": "04:36 PM",
        "latitude": 24.7660466,
        "longitude": 67.0708283,
        "area": "0.01Km from Beach Street 1 DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, Pakistan",
        "ignition": "ON",
        "speed": 39.0,
        "status": "Moving",
        "distance": 53.13
      },
      {
        "date": "31/10/2024",
        "time": "04:37 PM",
        "latitude": 24.7623866,
        "longitude": 67.0706283,
        "area": "0.01Km from Abdul Sattar Edhi Road, DHA Phase 8, DHA Phase 8 Extension, Defence Housing Authority, Karachi, Sindh,Pakistan",
        "ignition": "ON",
        "speed": 34.0,
        "status": "Moving",
        "distance": 53.68
      },
      {
        "date": "31/10/2024",
        "time": "04:37 PM",
        "latitude": 24.7602333,
        "longitude": 67.0725183,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 54.1
      },
      {
        "date": "31/10/2024",
        "time": "04:49 PM",
        "latitude": 24.7602333,
        "longitude": 67.0725183,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 54.1
      },
      {
        "date": "31/10/2024",
        "time": "04:49 PM",
        "latitude": 24.760255,
        "longitude": 67.0725133,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 54.1
      },
      {
        "date": "31/10/2024",
        "time": "04:49 PM",
        "latitude": 24.760255,
        "longitude": 67.0725133,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 54.1
      },
      {
        "date": "31/10/2024",
        "time": "04:50 PM",
        "latitude": 24.7590366,
        "longitude": 67.0750083,
        "area": "0.01Km from Khayaban e Khybar, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 37.0,
        "status": "Moving",
        "distance": 54.37
      },
      {
        "date": "31/10/2024",
        "time": "04:51 PM",
        "latitude": 24.76328,
        "longitude": 67.079095,
        "area": "0.01Km from 36th Street, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 30.0,
        "status": "Moving",
        "distance": 55.02
      },
      {
        "date": "31/10/2024",
        "time": "04:52 PM",
        "latitude": 24.7658533,
        "longitude": 67.0829616,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 37.0,
        "status": "Moving",
        "distance": 55.55
      },
      {
        "date": "31/10/2024",
        "time": "04:53 PM",
        "latitude": 24.7619183,
        "longitude": 67.0878883,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 30.0,
        "status": "Moving",
        "distance": 56.2
      },
      {
        "date": "31/10/2024",
        "time": "04:54 PM",
        "latitude": 24.7592133,
        "longitude": 67.0920216,
        "area": "0.01Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 56.79
      },
      {
        "date": "31/10/2024",
        "time": "04:54 PM",
        "latitude": 24.7592133,
        "longitude": 67.0920216,
        "area": "0.01Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 56.79
      },
      {
        "date": "31/10/2024",
        "time": "04:59 PM",
        "latitude": 24.7592133,
        "longitude": 67.0920216,
        "area": "0.01Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 56.79
      },
      {
        "date": "31/10/2024",
        "time": "04:59 PM",
        "latitude": 24.759215,
        "longitude": 67.0920233,
        "area": "0.01Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 56.79
      },
      {
        "date": "31/10/2024",
        "time": "04:59 PM",
        "latitude": 24.759215,
        "longitude": 67.0920233,
        "area": "0.01Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 56.79
      },
      {
        "date": "31/10/2024",
        "time": "05:00 PM",
        "latitude": 24.760005,
        "longitude": 67.0902333,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 26.0,
        "status": "Moving",
        "distance": 56.94
      },
      {
        "date": "31/10/2024",
        "time": "05:01 PM",
        "latitude": 24.7631066,
        "longitude": 67.086355,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 32.0,
        "status": "Moving",
        "distance": 57.46
      },
      {
        "date": "31/10/2024",
        "time": "05:02 PM",
        "latitude": 24.7662183,
        "longitude": 67.0824666,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 32.0,
        "status": "Moving",
        "distance": 57.99
      },
      {
        "date": "31/10/2024",
        "time": "05:03 PM",
        "latitude": 24.7686233,
        "longitude": 67.0794183,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 16.0,
        "status": "Moving",
        "distance": 58.4
      },
      {
        "date": "31/10/2024",
        "time": "05:04 PM",
        "latitude": 24.7694083,
        "longitude": 67.0784416,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 58.53
      },
      {
        "date": "31/10/2024",
        "time": "05:05 PM",
        "latitude": 24.771825,
        "longitude": 67.0753233,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 18.0,
        "status": "Moving",
        "distance": 58.94
      },
      {
        "date": "31/10/2024",
        "time": "05:06 PM",
        "latitude": 24.7722883,
        "longitude": 67.0733566,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 21.0,
        "status": "Moving",
        "distance": 59.15
      },
      {
        "date": "31/10/2024",
        "time": "05:06 PM",
        "latitude": 24.772275,
        "longitude": 67.0731433,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 59.27
      },
      {
        "date": "31/10/2024",
        "time": "05:07 PM",
        "latitude": 24.772275,
        "longitude": 67.0731433,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 59.27
      },
      {
        "date": "31/10/2024",
        "time": "05:07 PM",
        "latitude": 24.772275,
        "longitude": 67.0731433,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 59.27
      },
      {
        "date": "31/10/2024",
        "time": "05:07 PM",
        "latitude": 24.772275,
        "longitude": 67.0731433,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 59.27
      },
      {
        "date": "31/10/2024",
        "time": "05:08 PM",
        "latitude": 24.7711383,
        "longitude": 67.073355,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 27.0,
        "status": "Moving",
        "distance": 59.31
      },
      {
        "date": "31/10/2024",
        "time": "05:09 PM",
        "latitude": 24.7676183,
        "longitude": 67.0725716,
        "area": "0Km from Khayaban e Faisal, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 36.0,
        "status": "Moving",
        "distance": 59.84
      },
      {
        "date": "31/10/2024",
        "time": "05:10 PM",
        "latitude": 24.7629916,
        "longitude": 67.069935,
        "area": "0Km from Abdul Sattar Edhi Road, DHA Phase 8, DHA Phase 8 Extension, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 37.0,
        "status": "Moving",
        "distance": 60.5
      },
      {
        "date": "31/10/2024",
        "time": "05:11 PM",
        "latitude": 24.7602966,
        "longitude": 67.0725933,
        "area": "0.02Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 3.0,
        "status": "Moving",
        "distance": 61.01
      },
      {
        "date": "31/10/2024",
        "time": "05:11 PM",
        "latitude": 24.7603083,
        "longitude": 67.0725966,
        "area": "0.02Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 61.03
      },
      {
        "date": "31/10/2024",
        "time": "05:28 PM",
        "latitude": 24.7603083,
        "longitude": 67.0725966,
        "area": "0.02Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 61.03
      },
      {
        "date": "31/10/2024",
        "time": "05:28 PM",
        "latitude": 24.7603133,
        "longitude": 67.0725983,
        "area": "0.02Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 61.03
      },
      {
        "date": "31/10/2024",
        "time": "05:28 PM",
        "latitude": 24.7603133,
        "longitude": 67.0725983,
        "area": "0.02Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 61.03
      },
      {
        "date": "31/10/2024",
        "time": "05:29 PM",
        "latitude": 24.75968,
        "longitude": 67.0733033,
        "area": "0.01Km from Defence Avenue DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 32.0,
        "status": "Moving",
        "distance": 61.05
      },
      {
        "date": "31/10/2024",
        "time": "05:30 PM",
        "latitude": 24.7604333,
        "longitude": 67.0762283,
        "area": "0.02Km from Khayaban e Khybar, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 32.0,
        "status": "Moving",
        "distance": 61.45
      },
      {
        "date": "31/10/2024",
        "time": "05:31 PM",
        "latitude": 24.7635783,
        "longitude": 67.0792116,
        "area": "0.02Km from Khayaban e Khybar, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 27.0,
        "status": "Moving",
        "distance": 61.96
      },
      {
        "date": "31/10/2024",
        "time": "05:32 PM",
        "latitude": 24.7663666,
        "longitude": 67.0818733,
        "area": "0.02Km from Khayaban e Khybar, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 15.0,
        "status": "Moving",
        "distance": 62.33
      },
      {
        "date": "31/10/2024",
        "time": "05:33 PM",
        "latitude": 24.7687649,
        "longitude": 67.079265,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 26.0,
        "status": "Moving",
        "distance": 62.7
      },
      {
        "date": "31/10/2024",
        "time": "05:34 PM",
        "latitude": 24.7712866,
        "longitude": 67.076095,
        "area": "0Km from Khayaban e Faisal, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 20.0,
        "status": "Moving",
        "distance": 63.15
      },
      {
        "date": "31/10/2024",
        "time": "05:35 PM",
        "latitude": 24.7723116,
        "longitude": 67.0730883,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 63.6
      },
      {
        "date": "31/10/2024",
        "time": "05:47 PM",
        "latitude": 24.77237,
        "longitude": 67.0731616,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 63.6
      },
      {
        "date": "31/10/2024",
        "time": "05:48 PM",
        "latitude": 24.7734133,
        "longitude": 67.07278,
        "area": "0.02Km from Khayaban e Babar, DHA Phase 8, Sahil Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 26.0,
        "status": "Moving",
        "distance": 63.63
      },
      {
        "date": "31/10/2024",
        "time": "05:49 PM",
        "latitude": 24.7760083,
        "longitude": 67.0702933,
        "area": "0.07Km from 178, Saba Avenue, DHA Phase 8 Zone A, Karachi, 178, Saba Avenue, DHA Phase 8, DHA Phase 8 Zone A, DefenceHousing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 34.0,
        "status": "Moving",
        "distance": 64.09
      },
      {
        "date": "31/10/2024",
        "time": "05:50 PM",
        "latitude": 24.7773833,
        "longitude": 67.0665066,
        "area": "0.01Km from Haque Academy, Khayaban e Iqbal, DHA Phase 8, DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh,Pakistan",
        "ignition": "ON",
        "speed": 23.0,
        "status": "Moving",
        "distance": 64.58
      },
      {
        "date": "31/10/2024",
        "time": "05:51 PM",
        "latitude": 24.7755483,
        "longitude": 67.0663866,
        "area": "0.02Km from 242, 34th Street DHA Phase 8 Zone A, Karachi, 242, 34th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 64.96
      },
      {
        "date": "31/10/2024",
        "time": "05:51 PM",
        "latitude": 24.7755483,
        "longitude": 67.0663866,
        "area": "0.02Km from 242, 34th Street DHA Phase 8 Zone A, Karachi, 242, 34th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 64.96
      },
      {
        "date": "31/10/2024",
        "time": "05:56 PM",
        "latitude": 24.7755483,
        "longitude": 67.0663866,
        "area": "0.02Km from 242, 34th Street DHA Phase 8 Zone A, Karachi, 242, 34th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 64.96
      },
      {
        "date": "31/10/2024",
        "time": "05:56 PM",
        "latitude": 24.7755483,
        "longitude": 67.066385,
        "area": "0.02Km from 242, 34th Street DHA Phase 8 Zone A, Karachi, 242, 34th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 64.96
      },
      {
        "date": "31/10/2024",
        "time": "05:56 PM",
        "latitude": 24.7755483,
        "longitude": 67.066385,
        "area": "0.02Km from 242, 34th Street DHA Phase 8 Zone A, Karachi, 242, 34th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 64.96
      },
      {
        "date": "31/10/2024",
        "time": "05:57 PM",
        "latitude": 24.775505,
        "longitude": 67.0664833,
        "area": "0.02Km from 244, 34th Street DHA Phase 8 Zone A, Karachi, 244, 34th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 64.96
      },
      {
        "date": "31/10/2024",
        "time": "05:58 PM",
        "latitude": 24.7758666,
        "longitude": 67.0694599,
        "area": "0.01Km from 250, 31st Street DHA Phase 8 Zone A, Karachi, 250, 31st Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 26.0,
        "status": "Moving",
        "distance": 65.29
      },
      {
        "date": "31/10/2024",
        "time": "05:59 PM",
        "latitude": 24.7742899,
        "longitude": 67.0725083,
        "area": "0.01Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 29.0,
        "status": "Moving",
        "distance": 65.7
      },
      {
        "date": "31/10/2024",
        "time": "06:00 PM",
        "latitude": 24.7723649,
        "longitude": 67.0732066,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 11.0,
        "status": "Moving",
        "distance": 65.98
      },
      {
        "date": "31/10/2024",
        "time": "06:00 PM",
        "latitude": 24.7722933,
        "longitude": 67.0730933,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 66.08
      },
      {
        "date": "31/10/2024",
        "time": "06:03 PM",
        "latitude": 24.7722933,
        "longitude": 67.0730933,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 66.08
      },
      {
        "date": "31/10/2024",
        "time": "06:03 PM",
        "latitude": 24.7722933,
        "longitude": 67.0730933,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 66.08
      },
      {
        "date": "31/10/2024",
        "time": "06:03 PM",
        "latitude": 24.7722933,
        "longitude": 67.0730933,
        "area": "0Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 3.0,
        "status": "Moving",
        "distance": 66.08
      },
      {
        "date": "31/10/2024",
        "time": "06:04 PM",
        "latitude": 24.7708483,
        "longitude": 67.07522,
        "area": "0.01Km from DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 23.0,
        "status": "Moving",
        "distance": 66.36
      },
      {
        "date": "31/10/2024",
        "time": "06:05 PM",
        "latitude": 24.7685066,
        "longitude": 67.07977,
        "area": "0.01Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 47.0,
        "status": "Moving",
        "distance": 66.94
      },
      {
        "date": "31/10/2024",
        "time": "06:06 PM",
        "latitude": 24.7633233,
        "longitude": 67.0862266,
        "area": "0Km from Saba Avenue, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 61.0,
        "status": "Moving",
        "distance": 67.77
      },
      {
        "date": "31/10/2024",
        "time": "06:07 PM",
        "latitude": 24.75914,
        "longitude": 67.09193,
        "area": "0.02Km from Khayaban e Bilal, DHA Phase 8, DHA Phase 8 Zone C, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 25.0,
        "status": "Moving",
        "distance": 68.6
      },
      {
        "date": "31/10/2024",
        "time": "06:08 PM",
        "latitude": 24.7645333,
        "longitude": 67.0918033,
        "area": "0Km from 26th Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 59.0,
        "status": "Moving",
        "distance": 69.35
      },
      {
        "date": "31/10/2024",
        "time": "06:09 PM",
        "latitude": 24.7668133,
        "longitude": 67.0925583,
        "area": "0.01Km from 23rd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 69.75
      },
      {
        "date": "31/10/2024",
        "time": "06:09 PM",
        "latitude": 24.7668133,
        "longitude": 67.0925583,
        "area": "0.01Km from 23rd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 69.75
      },
      {
        "date": "31/10/2024",
        "time": "06:09 PM",
        "latitude": 24.7668133,
        "longitude": 67.0925583,
        "area": "0.01Km from 23rd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 69.75
      },
      {
        "date": "31/10/2024",
        "time": "06:09 PM",
        "latitude": 24.7668133,
        "longitude": 67.0925583,
        "area": "0.01Km from 23rd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 69.75
      },
      {
        "date": "31/10/2024",
        "time": "06:09 PM",
        "latitude": 24.76684,
        "longitude": 67.0926033,
        "area": "0.01Km from Khayaban e Shajar, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 10.0,
        "status": "Stop",
        "distance": 69.75
      },
      {
        "date": "31/10/2024",
        "time": "06:10 PM",
        "latitude": 24.7671383,
        "longitude": 67.0934366,
        "area": "0.01Km from 22nd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 25.0,
        "status": "Moving",
        "distance": 69.83
      },
      {
        "date": "31/10/2024",
        "time": "06:10 PM",
        "latitude": 24.7667333,
        "longitude": 67.0938899,
        "area": "0Km from 22nd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 69.98
      },
      {
        "date": "31/10/2024",
        "time": "06:11 PM",
        "latitude": 24.7667333,
        "longitude": 67.0938899,
        "area": "0Km from 22nd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 69.98
      },
      {
        "date": "31/10/2024",
        "time": "06:11 PM",
        "latitude": 24.7667283,
        "longitude": 67.0939,
        "area": "0Km from 22nd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 69.98
      },
      {
        "date": "31/10/2024",
        "time": "06:11 PM",
        "latitude": 24.7667283,
        "longitude": 67.0939,
        "area": "0Km from 22nd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 3.0,
        "status": "Moving",
        "distance": 69.98
      },
      {
        "date": "31/10/2024",
        "time": "06:12 PM",
        "latitude": 24.7667733,
        "longitude": 67.0925949,
        "area": "0.01Km from 23rd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 70.08
      },
      {
        "date": "31/10/2024",
        "time": "06:12 PM",
        "latitude": 24.7667733,
        "longitude": 67.0925949,
        "area": "0.01Km from 23rd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 70.08
      },
      {
        "date": "31/10/2024",
        "time": "06:27 PM",
        "latitude": 24.7667733,
        "longitude": 67.0925949,
        "area": "0.01Km from 23rd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 70.08
      },
      {
        "date": "31/10/2024",
        "time": "06:28 PM",
        "latitude": 24.7667733,
        "longitude": 67.0925983,
        "area": "0.01Km from Khayaban e Shajar, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 70.08
      },
      {
        "date": "31/10/2024",
        "time": "06:28 PM",
        "latitude": 24.7667733,
        "longitude": 67.0925983,
        "area": "0.01Km from Khayaban e Shajar, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 70.08
      },
      {
        "date": "31/10/2024",
        "time": "06:29 PM",
        "latitude": 24.7673183,
        "longitude": 67.09321,
        "area": "0Km from Khayaban e Shajar, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 70.15
      },
      {
        "date": "31/10/2024",
        "time": "06:38 PM",
        "latitude": 24.7668899,
        "longitude": 67.0937966,
        "area": "0.01Km from 22nd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 70.29
      },
      {
        "date": "31/10/2024",
        "time": "06:39 PM",
        "latitude": 24.7667183,
        "longitude": 67.0926716,
        "area": "0Km from Khayaban e Shajar, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 70.34
      },
      {
        "date": "31/10/2024",
        "time": "06:39 PM",
        "latitude": 24.7667183,
        "longitude": 67.0926716,
        "area": "0Km from Khayaban e Shajar, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 70.34
      },
      {
        "date": "31/10/2024",
        "time": "06:55 PM",
        "latitude": 24.7667183,
        "longitude": 67.0926716,
        "area": "0Km from Khayaban e Shajar, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 70.34
      },
      {
        "date": "31/10/2024",
        "time": "06:55 PM",
        "latitude": 24.7667183,
        "longitude": 67.0926716,
        "area": "0Km from Khayaban e Shajar, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 70.34
      },
      {
        "date": "31/10/2024",
        "time": "06:55 PM",
        "latitude": 24.7667183,
        "longitude": 67.0926716,
        "area": "0Km from Khayaban e Shajar, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 70.34
      },
      {
        "date": "31/10/2024",
        "time": "06:56 PM",
        "latitude": 24.7667183,
        "longitude": 67.0925516,
        "area": "0Km from 23rd Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 13.0,
        "status": "Moving",
        "distance": 70.34
      },
      {
        "date": "31/10/2024",
        "time": "06:57 PM",
        "latitude": 24.76614,
        "longitude": 67.089635,
        "area": "0Km from 26th Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 43.0,
        "status": "Moving",
        "distance": 70.75
      },
      {
        "date": "31/10/2024",
        "time": "06:58 PM",
        "latitude": 24.770335,
        "longitude": 67.0843983,
        "area": "0Km from 26th Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 45.0,
        "status": "Moving",
        "distance": 71.46
      },
      {
        "date": "31/10/2024",
        "time": "06:59 PM",
        "latitude": 24.7737466,
        "longitude": 67.0801066,
        "area": "0Km from 26th Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 40.0,
        "status": "Moving",
        "distance": 72.04
      },
      {
        "date": "31/10/2024",
        "time": "07:00 PM",
        "latitude": 24.7770133,
        "longitude": 67.0760466,
        "area": "0Km from 26th Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 36.0,
        "status": "Moving",
        "distance": 72.58
      },
      {
        "date": "31/10/2024",
        "time": "07:03 PM",
        "latitude": 24.7789899,
        "longitude": 67.073715,
        "area": "0Km from 26th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 10.0,
        "status": "Moving",
        "distance": 73.01
      },
      {
        "date": "31/10/2024",
        "time": "07:04 PM",
        "latitude": 24.7814416,
        "longitude": 67.07051,
        "area": "0.03Km from 113, Khayaban e Iqbal, DHA Phase 8 Zone A, Karachi, 113, Khayaban e Iqbal, DHA Phase 8, DHA Phase 8 Zone A,Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 25.0,
        "status": "Moving",
        "distance": 73.34
      },
      {
        "date": "31/10/2024",
        "time": "07:05 PM",
        "latitude": 24.7843333,
        "longitude": 67.0682316,
        "area": "0.05Km from 143, 25th Street DHA Phase 8 Zone A, Karachi, 143, 25th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase 8Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 17.0,
        "status": "Moving",
        "distance": 73.78
      },
      {
        "date": "31/10/2024",
        "time": "07:06 PM",
        "latitude": 24.7862916,
        "longitude": 67.066765,
        "area": "0Km from 101/4, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 101/4, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 74.13
      },
      {
        "date": "31/10/2024",
        "time": "07:07 PM",
        "latitude": 24.7873033,
        "longitude": 67.0678399,
        "area": "0.01Km from 93/3, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 93/3, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 74.29
      },
      {
        "date": "31/10/2024",
        "time": "07:12 PM",
        "latitude": 24.7873033,
        "longitude": 67.0678399,
        "area": "0.01Km from 93/3, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 93/3, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 74.29
      },
      {
        "date": "31/10/2024",
        "time": "07:12 PM",
        "latitude": 24.7873033,
        "longitude": 67.0678399,
        "area": "0.01Km from 93/3, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 93/3, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 74.29
      },
      {
        "date": "31/10/2024",
        "time": "07:12 PM",
        "latitude": 24.7873033,
        "longitude": 67.0678399,
        "area": "0.01Km from 93/3, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 93/3, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 4.0,
        "status": "Moving",
        "distance": 74.29
      },
      {
        "date": "31/10/2024",
        "time": "07:13 PM",
        "latitude": 24.7871783,
        "longitude": 67.0676149,
        "area": "0.01Km from 93/4, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 93/4, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 74.34
      },
      {
        "date": "31/10/2024",
        "time": "07:13 PM",
        "latitude": 24.7871783,
        "longitude": 67.0676149,
        "area": "0.01Km from 93/4, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 93/4, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 74.34
      },
      {
        "date": "31/10/2024",
        "time": "07:15 PM",
        "latitude": 24.7871783,
        "longitude": 67.0676149,
        "area": "0.01Km from 93/4, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 93/4, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 74.34
      },
      {
        "date": "31/10/2024",
        "time": "07:15 PM",
        "latitude": 24.7871783,
        "longitude": 67.0676149,
        "area": "0.01Km from 93/4, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 93/4, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 74.34
      },
      {
        "date": "31/10/2024",
        "time": "07:15 PM",
        "latitude": 24.7871783,
        "longitude": 67.0676149,
        "area": "0.01Km from 93/4, Qasim Street 1 DHA Phase 8 Zone A, Karachi, 93/4, Qasim Street 1 DHA Phase 8 Zone A, DHA Phase 8, DHAPhase 8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 74.34
      },
      {
        "date": "31/10/2024",
        "time": "07:16 PM",
        "latitude": 24.7858866,
        "longitude": 67.0664133,
        "area": "0.01Km from 105/2, 25th Street DHA Phase 8 Zone A, Karachi, 105/2, 25th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, Pakistan",
        "ignition": "ON",
        "speed": 18.0,
        "status": "Moving",
        "distance": 74.54
      },
      {
        "date": "31/10/2024",
        "time": "07:17 PM",
        "latitude": 24.7827466,
        "longitude": 67.0691183,
        "area": "0.03Km from 152A, 26th Street DHA Phase 8 Zone A, Karachi, 152A, 26th Street DHA Phase 8 Zone A, DHA Phase 8, DHA Phase8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 33.0,
        "status": "Moving",
        "distance": 74.96
      },
      {
        "date": "31/10/2024",
        "time": "07:18 PM",
        "latitude": 24.7794083,
        "longitude": 67.0733049,
        "area": "0.01Km from Zulfiqar Al Murtaza Commercial Area, DHA Phase 8 Zone A, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 28.0,
        "status": "Moving",
        "distance": 75.52
      },
      {
        "date": "31/10/2024",
        "time": "07:19 PM",
        "latitude": 24.7756933,
        "longitude": 67.07786,
        "area": "0Km from 26th Street DHA Phase 8 Zone E, DHA Phase 8, DHA Phase 8 Zone E, Defence Housing Authority, Karachi, Sindh,75190, Pakistan",
        "ignition": "ON",
        "speed": 45.0,
        "status": "Moving",
        "distance": 76.14
      },
      {
        "date": "31/10/2024",
        "time": "07:20 PM",
        "latitude": 24.7711833,
        "longitude": 67.0759416,
        "area": "0Km from Khayaban e Faisal, DHA Phase 8, Peninsula Commercial Area, Defence Housing Authority, Karachi, Sindh, 75190,Pakistan",
        "ignition": "ON",
        "speed": 39.0,
        "status": "Moving",
        "distance": 76.87
      },
      {
        "date": "31/10/2024",
        "time": "07:21 PM",
        "latitude": 24.7663716,
        "longitude": 67.0713433,
        "area": "0Km from Khayaban e Faisal, DHA Phase 8, DHA Phase 8 Extension, Defence Housing Authority, Karachi, Sindh, 75190, Pakistan",
        "ignition": "ON",
        "speed": 53.0,
        "status": "Moving",
        "distance": 77.51
      },
      {
        "date": "31/10/2024",
        "time": "07:22 PM",
        "latitude": 24.7617233,
        "longitude": 67.0713766,
        "area": "0.01Km from Abdul Sattar Edhi Road, DHA Phase 8, DHA Phase 8 Extension, Defence Housing Authority, Karachi, Sindh,Pakistan",
        "ignition": "ON",
        "speed": 35.0,
        "status": "Moving",
        "distance": 78.26
      },
      {
        "date": "31/10/2024",
        "time": "07:24 PM",
        "latitude": 24.76053,
        "longitude": 67.0725933,
        "area": "0.01Km from Beach Street 5 DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, Pakistan",
        "ignition": "ON",
        "speed": 0.0,
        "status": "Idle",
        "distance": 78.52
      },
      {
        "date": "31/10/2024",
        "time": "07:25 PM",
        "latitude": 24.76053,
        "longitude": 67.0725933,
        "area": "0.01Km from Beach Street 5 DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 78.52
      },
      {
        "date": "31/10/2024",
        "time": "07:55 PM",
        "latitude": 24.76053,
        "longitude": 67.0725933,
        "area": "0.01Km from Beach Street 5 DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 78.52
      },
      {
        "date": "31/10/2024",
        "time": "07:55 PM",
        "latitude": 24.76053,
        "longitude": 67.0725933,
        "area": "0.01Km from Beach Street 5 DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 78.52
      },
      {
        "date": "31/10/2024",
        "time": "08:25 PM",
        "latitude": 24.76053,
        "longitude": 67.0725933,
        "area": "0.01Km from Beach Street 5 DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 78.52
      },
      {
        "date": "31/10/2024",
        "time": "08:55 PM",
        "latitude": 24.76053,
        "longitude": 67.0725933,
        "area": "0.01Km from Beach Street 5 DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 78.52
      },
      {
        "date": "31/10/2024",
        "time": "09:25 PM",
        "latitude": 24.76053,
        "longitude": 67.0725933,
        "area": "0.01Km from Beach Street 5 DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 78.52
      },
      {
        "date": "31/10/2024",
        "time": "09:55 PM",
        "latitude": 24.76053,
        "longitude": 67.0725933,
        "area": "0.01Km from Beach Street 5 DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 78.52
      },
      {
        "date": "31/10/2024",
        "time": "10:25 PM",
        "latitude": 24.76053,
        "longitude": 67.0725933,
        "area": "0.01Km from Beach Street 5 DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 78.52
      },
      {
        "date": "31/10/2024",
        "time": "10:55 PM",
        "latitude": 24.76053,
        "longitude": 67.0725933,
        "area": "0.01Km from Beach Street 5 DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 78.52
      },
      {
        "date": "31/10/2024",
        "time": "11:36 PM",
        "latitude": 24.76053,
        "longitude": 67.0725933,
        "area": "0.01Km from Beach Street 5 DHA Phase 8 Zone D, DHA Phase 8, DHA Phase 8 Zone D, Defence Housing Authority, Karachi,Sindh, Pakistan",
        "ignition": "OFF",
        "speed": 0.0,
        "status": "Stop",
        "distance": 78.52
      }
    ]
  }
]

// export const mockVehicles: Vehicle[] = [
//     {
//       "vehicleNumber": "BAV-100",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "6:00 AM",
//           "latitude": 24.81831291,
//           "longitude": 67.02511154,
//           "area": "DHA"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "7:00 AM",
//           "latitude": 24.81327968,
//           "longitude": 67.03875753,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "8:00 AM",
//           "latitude": 24.81089781,
//           "longitude": 67.02418858,
//           "area": "DHA"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-101",
//       "locationUpdates": [
//         {
//           "date": "11/14/2024",
//           "time": "8:00 AM",
//           "latitude": 24.86946463,
//           "longitude": 67.00288336,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "9:00 AM",
//           "latitude": 24.86995993,
//           "longitude": 67.01521298,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "10:00 AM",
//           "latitude": 24.9139699,
//           "longitude": 67.02246015,
//           "area": "Nazimabad"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-102",
//       "locationUpdates": [
//         {
//           "date": "11/11/2024",
//           "time": "9:00 AM",
//           "latitude": 24.91355718,
//           "longitude": 67.03201655,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/11/2024",
//           "time": "10:00 AM",
//           "latitude": 24.82882054,
//           "longitude": 67.13713286,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/11/2024",
//           "time": "11:00 AM",
//           "latitude": 24.91486248,
//           "longitude": 67.10117422,
//           "area": "Gulshan-e-Iqbal"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-103",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "10:00 AM",
//           "latitude": 24.82082953,
//           "longitude": 67.03286162,
//           "area": "DHA"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "11:00 AM",
//           "latitude": 24.81890669,
//           "longitude": 67.04413582,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "12:00 PM",
//           "latitude": 24.82697098,
//           "longitude": 67.13667345,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "1:00 PM",
//           "latitude": 24.80556373,
//           "longitude": 67.03758478,
//           "area": "Clifton"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-104",
//       "locationUpdates": [
//         {
//           "date": "11/14/2024",
//           "time": "9:00 AM",
//           "latitude": 24.91317016,
//           "longitude": 67.03142976,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "10:00 AM",
//           "latitude": 24.81829146,
//           "longitude": 67.03494326,
//           "area": "Clifton"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-105",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "8:00 AM",
//           "latitude": 24.86303854,
//           "longitude": 67.00246584,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "9:00 AM",
//           "latitude": 24.86819441,
//           "longitude": 67.0101814,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "10:00 AM",
//           "latitude": 24.87134375,
//           "longitude": 67.00498703,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "11:00 AM",
//           "latitude": 24.81363096,
//           "longitude": 67.02732383,
//           "area": "Clifton"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-106",
//       "locationUpdates": [
//         {
//           "date": "11/10/2024",
//           "time": "8:00 AM",
//           "latitude": 24.88695688,
//           "longitude": 67.19930002,
//           "area": "Malir"
//         },
//         {
//           "date": "11/10/2024",
//           "time": "9:00 AM",
//           "latitude": 24.85339224,
//           "longitude": 67.0145302,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/10/2024",
//           "time": "10:00 AM",
//           "latitude": 24.83833243,
//           "longitude": 67.12301429,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/10/2024",
//           "time": "11:00 AM",
//           "latitude": 24.8731545,
//           "longitude": 67.20114934,
//           "area": "Malir"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-107",
//       "locationUpdates": [
//         {
//           "date": "11/13/2024",
//           "time": "6:00 AM",
//           "latitude": 24.81488019,
//           "longitude": 67.03222652,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "7:00 AM",
//           "latitude": 24.82465761,
//           "longitude": 67.1305759,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "8:00 AM",
//           "latitude": 24.82351604,
//           "longitude": 67.1358828,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "9:00 AM",
//           "latitude": 24.88365845,
//           "longitude": 67.20256178,
//           "area": "Malir"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "10:00 AM",
//           "latitude": 24.90328527,
//           "longitude": 67.02762196,
//           "area": "Nazimabad"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-108",
//       "locationUpdates": [
//         {
//           "date": "11/14/2024",
//           "time": "8:00 AM",
//           "latitude": 24.81193769,
//           "longitude": 67.03472171,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "9:00 AM",
//           "latitude": 24.85937008,
//           "longitude": 67.01784167,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "10:00 AM",
//           "latitude": 24.86768732,
//           "longitude": 67.20380792,
//           "area": "Malir"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-109",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "10:00 AM",
//           "latitude": 24.81300916,
//           "longitude": 67.02875212,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "11:00 AM",
//           "latitude": 24.82765737,
//           "longitude": 67.12959996,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "12:00 PM",
//           "latitude": 24.87434152,
//           "longitude": 67.19263432,
//           "area": "Malir"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "1:00 PM",
//           "latitude": 24.83501472,
//           "longitude": 67.12819491,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "2:00 PM",
//           "latitude": 24.88298167,
//           "longitude": 67.19411814,
//           "area": "Malir"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-110",
//       "locationUpdates": [
//         {
//           "date": "11/12/2024",
//           "time": "7:00 AM",
//           "latitude": 24.91460836,
//           "longitude": 67.02623345,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "8:00 AM",
//           "latitude": 24.88402033,
//           "longitude": 67.19075278,
//           "area": "Malir"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "9:00 AM",
//           "latitude": 24.82435416,
//           "longitude": 67.13927456,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "10:00 AM",
//           "latitude": 24.9085715,
//           "longitude": 67.04026658,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "11:00 AM",
//           "latitude": 24.80492764,
//           "longitude": 67.03811731,
//           "area": "Clifton"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-111",
//       "locationUpdates": [
//         {
//           "date": "11/10/2024",
//           "time": "8:00 AM",
//           "latitude": 24.86531448,
//           "longitude": 67.00447672,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/10/2024",
//           "time": "9:00 AM",
//           "latitude": 24.81747632,
//           "longitude": 67.0360207,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/10/2024",
//           "time": "10:00 AM",
//           "latitude": 24.80984417,
//           "longitude": 67.03817351,
//           "area": "Clifton"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-112",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "7:00 AM",
//           "latitude": 24.91302672,
//           "longitude": 67.0334208,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "8:00 AM",
//           "latitude": 24.81820912,
//           "longitude": 67.0381824,
//           "area": "DHA"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "9:00 AM",
//           "latitude": 24.91362959,
//           "longitude": 67.02596288,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "10:00 AM",
//           "latitude": 24.86720765,
//           "longitude": 67.19855042,
//           "area": "Malir"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "11:00 AM",
//           "latitude": 24.89990249,
//           "longitude": 67.0219602,
//           "area": "Nazimabad"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-113",
//       "locationUpdates": [
//         {
//           "date": "11/11/2024",
//           "time": "9:00 AM",
//           "latitude": 24.8869637,
//           "longitude": 67.18950808,
//           "area": "Malir"
//         },
//         {
//           "date": "11/11/2024",
//           "time": "10:00 AM",
//           "latitude": 24.83797325,
//           "longitude": 67.14196026,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/11/2024",
//           "time": "11:00 AM",
//           "latitude": 24.92598219,
//           "longitude": 67.10008304,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/11/2024",
//           "time": "12:00 PM",
//           "latitude": 24.86817725,
//           "longitude": 67.00652792,
//           "area": "Saddar"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-114",
//       "locationUpdates": [
//         {
//           "date": "11/13/2024",
//           "time": "10:00 AM",
//           "latitude": 24.90433592,
//           "longitude": 67.0271953,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "11:00 AM",
//           "latitude": 24.90861373,
//           "longitude": 67.09482973,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "12:00 PM",
//           "latitude": 24.81244106,
//           "longitude": 67.04482885,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "1:00 PM",
//           "latitude": 24.81235055,
//           "longitude": 67.02772085,
//           "area": "Clifton"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-115",
//       "locationUpdates": [
//         {
//           "date": "11/12/2024",
//           "time": "8:00 AM",
//           "latitude": 24.91301307,
//           "longitude": 67.08853659,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "9:00 AM",
//           "latitude": 24.92210455,
//           "longitude": 67.10307357,
//           "area": "Gulshan-e-Iqbal"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-116",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "6:00 AM",
//           "latitude": 24.91791302,
//           "longitude": 67.10193385,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "7:00 AM",
//           "latitude": 24.83068056,
//           "longitude": 67.13714485,
//           "area": "Korangi"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-117",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "9:00 AM",
//           "latitude": 24.85832503,
//           "longitude": 67.0178248,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "10:00 AM",
//           "latitude": 24.89675666,
//           "longitude": 67.03622474,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "11:00 AM",
//           "latitude": 24.81486266,
//           "longitude": 67.02874561,
//           "area": "DHA"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-118",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "6:00 AM",
//           "latitude": 24.92585707,
//           "longitude": 67.09019175,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "7:00 AM",
//           "latitude": 24.87518368,
//           "longitude": 67.20458267,
//           "area": "Malir"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "8:00 AM",
//           "latitude": 24.86317288,
//           "longitude": 67.01031296,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "9:00 AM",
//           "latitude": 24.85906109,
//           "longitude": 67.00705569,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "10:00 AM",
//           "latitude": 24.85327764,
//           "longitude": 67.0177258,
//           "area": "Saddar"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-119",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "9:00 AM",
//           "latitude": 24.82602391,
//           "longitude": 67.13401276,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "10:00 AM",
//           "latitude": 24.91263626,
//           "longitude": 67.09772909,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "11:00 AM",
//           "latitude": 24.81743122,
//           "longitude": 67.02914366,
//           "area": "DHA"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-120",
//       "locationUpdates": [
//         {
//           "date": "11/10/2024",
//           "time": "7:00 AM",
//           "latitude": 24.81194426,
//           "longitude": 67.04205208,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/10/2024",
//           "time": "8:00 AM",
//           "latitude": 24.91125512,
//           "longitude": 67.09563361,
//           "area": "Gulshan-e-Iqbal"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-121",
//       "locationUpdates": [
//         {
//           "date": "11/14/2024",
//           "time": "7:00 AM",
//           "latitude": 24.80279123,
//           "longitude": 67.02448721,
//           "area": "DHA"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "8:00 AM",
//           "latitude": 24.81428838,
//           "longitude": 67.02892377,
//           "area": "DHA"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "9:00 AM",
//           "latitude": 24.85827758,
//           "longitude": 67.01140406,
//           "area": "Saddar"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-122",
//       "locationUpdates": [
//         {
//           "date": "11/12/2024",
//           "time": "10:00 AM",
//           "latitude": 24.90808481,
//           "longitude": 67.09894964,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "11:00 AM",
//           "latitude": 24.89626653,
//           "longitude": 67.02596497,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "12:00 PM",
//           "latitude": 24.80351981,
//           "longitude": 67.02474645,
//           "area": "DHA"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "1:00 PM",
//           "latitude": 24.83440644,
//           "longitude": 67.12793855,
//           "area": "Korangi"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-123",
//       "locationUpdates": [
//         {
//           "date": "11/14/2024",
//           "time": "10:00 AM",
//           "latitude": 24.87937757,
//           "longitude": 67.20346097,
//           "area": "Malir"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "11:00 AM",
//           "latitude": 24.91358191,
//           "longitude": 67.02748099,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "12:00 PM",
//           "latitude": 24.80805442,
//           "longitude": 67.03328031,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "1:00 PM",
//           "latitude": 24.86862133,
//           "longitude": 67.01569975,
//           "area": "Saddar"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-124",
//       "locationUpdates": [
//         {
//           "date": "11/12/2024",
//           "time": "10:00 AM",
//           "latitude": 24.91215198,
//           "longitude": 67.10369658,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "11:00 AM",
//           "latitude": 24.8398959,
//           "longitude": 67.13103681,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "12:00 PM",
//           "latitude": 24.92650628,
//           "longitude": 67.0954739,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "1:00 PM",
//           "latitude": 24.9246521,
//           "longitude": 67.10347084,
//           "area": "Gulshan-e-Iqbal"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-125",
//       "locationUpdates": [
//         {
//           "date": "11/12/2024",
//           "time": "6:00 AM",
//           "latitude": 24.80918974,
//           "longitude": 67.04590972,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "7:00 AM",
//           "latitude": 24.82320908,
//           "longitude": 67.03082259,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "8:00 AM",
//           "latitude": 24.87768697,
//           "longitude": 67.189174,
//           "area": "Malir"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "9:00 AM",
//           "latitude": 24.88485768,
//           "longitude": 67.20265265,
//           "area": "Malir"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-126",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "10:00 AM",
//           "latitude": 24.92698384,
//           "longitude": 67.08996901,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "11:00 AM",
//           "latitude": 24.83423786,
//           "longitude": 67.12365549,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "12:00 PM",
//           "latitude": 24.88451331,
//           "longitude": 67.19580706,
//           "area": "Malir"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-127",
//       "locationUpdates": [
//         {
//           "date": "11/13/2024",
//           "time": "10:00 AM",
//           "latitude": 24.85686605,
//           "longitude": 67.01826661,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "11:00 AM",
//           "latitude": 24.84221766,
//           "longitude": 67.12316424,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "12:00 PM",
//           "latitude": 24.81251588,
//           "longitude": 67.02870706,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "1:00 PM",
//           "latitude": 24.9261551,
//           "longitude": 67.09971614,
//           "area": "Gulshan-e-Iqbal"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-128",
//       "locationUpdates": [
//         {
//           "date": "11/10/2024",
//           "time": "9:00 AM",
//           "latitude": 24.85561667,
//           "longitude": 67.00828716,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/10/2024",
//           "time": "10:00 AM",
//           "latitude": 24.8082815,
//           "longitude": 67.03521934,
//           "area": "DHA"
//         },
//         {
//           "date": "11/10/2024",
//           "time": "11:00 AM",
//           "latitude": 24.88715741,
//           "longitude": 67.18788615,
//           "area": "Malir"
//         },
//         {
//           "date": "11/10/2024",
//           "time": "12:00 PM",
//           "latitude": 24.87520358,
//           "longitude": 67.19070473,
//           "area": "Malir"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-129",
//       "locationUpdates": [
//         {
//           "date": "11/14/2024",
//           "time": "9:00 AM",
//           "latitude": 24.92553999,
//           "longitude": 67.09112277,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "10:00 AM",
//           "latitude": 24.8121012,
//           "longitude": 67.02913547,
//           "area": "Clifton"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-130",
//       "locationUpdates": [
//         {
//           "date": "11/11/2024",
//           "time": "10:00 AM",
//           "latitude": 24.82383472,
//           "longitude": 67.12683596,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/11/2024",
//           "time": "11:00 AM",
//           "latitude": 24.81587437,
//           "longitude": 67.02894831,
//           "area": "DHA"
//         },
//         {
//           "date": "11/11/2024",
//           "time": "12:00 PM",
//           "latitude": 24.83943983,
//           "longitude": 67.14203688,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/11/2024",
//           "time": "1:00 PM",
//           "latitude": 24.82630145,
//           "longitude": 67.12391488,
//           "area": "Korangi"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-131",
//       "locationUpdates": [
//         {
//           "date": "11/12/2024",
//           "time": "10:00 AM",
//           "latitude": 24.88671661,
//           "longitude": 67.19447443,
//           "area": "Malir"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "11:00 AM",
//           "latitude": 24.81759045,
//           "longitude": 67.02836318,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "12:00 PM",
//           "latitude": 24.89687068,
//           "longitude": 67.03954512,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "1:00 PM",
//           "latitude": 24.90055921,
//           "longitude": 67.03688179,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "2:00 PM",
//           "latitude": 24.92139603,
//           "longitude": 67.09368441,
//           "area": "Gulshan-e-Iqbal"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-132",
//       "locationUpdates": [
//         {
//           "date": "11/11/2024",
//           "time": "9:00 AM",
//           "latitude": 24.85531592,
//           "longitude": 67.01466912,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/11/2024",
//           "time": "10:00 AM",
//           "latitude": 24.92308557,
//           "longitude": 67.09523149,
//           "area": "Gulshan-e-Iqbal"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-133",
//       "locationUpdates": [
//         {
//           "date": "11/14/2024",
//           "time": "10:00 AM",
//           "latitude": 24.91875913,
//           "longitude": 67.08823053,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "11:00 AM",
//           "latitude": 24.83988702,
//           "longitude": 67.13978641,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "12:00 PM",
//           "latitude": 24.85987149,
//           "longitude": 67.01631473,
//           "area": "Saddar"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-134",
//       "locationUpdates": [
//         {
//           "date": "11/12/2024",
//           "time": "10:00 AM",
//           "latitude": 24.8708085,
//           "longitude": 67.1984429,
//           "area": "Malir"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "11:00 AM",
//           "latitude": 24.81171848,
//           "longitude": 67.02641429,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "12:00 PM",
//           "latitude": 24.83606614,
//           "longitude": 67.12513429,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "1:00 PM",
//           "latitude": 24.81253378,
//           "longitude": 67.03153852,
//           "area": "DHA"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-135",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "9:00 AM",
//           "latitude": 24.82442028,
//           "longitude": 67.13311646,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "10:00 AM",
//           "latitude": 24.88571393,
//           "longitude": 67.19892528,
//           "area": "Malir"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "11:00 AM",
//           "latitude": 24.91299302,
//           "longitude": 67.10178884,
//           "area": "Gulshan-e-Iqbal"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-136",
//       "locationUpdates": [
//         {
//           "date": "11/13/2024",
//           "time": "8:00 AM",
//           "latitude": 24.81379326,
//           "longitude": 67.03688861,
//           "area": "DHA"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "9:00 AM",
//           "latitude": 24.90049879,
//           "longitude": 67.03506237,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "10:00 AM",
//           "latitude": 24.88213882,
//           "longitude": 67.20360727,
//           "area": "Malir"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-137",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "9:00 AM",
//           "latitude": 24.82594596,
//           "longitude": 67.13495898,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "10:00 AM",
//           "latitude": 24.81501982,
//           "longitude": 67.03002533,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "11:00 AM",
//           "latitude": 24.87855934,
//           "longitude": 67.20433413,
//           "area": "Malir"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "12:00 PM",
//           "latitude": 24.89764305,
//           "longitude": 67.02947635,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "1:00 PM",
//           "latitude": 24.84294442,
//           "longitude": 67.1329174,
//           "area": "Korangi"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-138",
//       "locationUpdates": [
//         {
//           "date": "11/10/2024",
//           "time": "10:00 AM",
//           "latitude": 24.83464057,
//           "longitude": 67.12547993,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/10/2024",
//           "time": "11:00 AM",
//           "latitude": 24.81308748,
//           "longitude": 67.02357337,
//           "area": "DHA"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-139",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "6:00 AM",
//           "latitude": 24.82547114,
//           "longitude": 67.12733503,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "7:00 AM",
//           "latitude": 24.86262799,
//           "longitude": 67.01722608,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "8:00 AM",
//           "latitude": 24.82020659,
//           "longitude": 67.02318159,
//           "area": "DHA"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "9:00 AM",
//           "latitude": 24.91051188,
//           "longitude": 67.03988939,
//           "area": "Nazimabad"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-140",
//       "locationUpdates": [
//         {
//           "date": "11/12/2024",
//           "time": "9:00 AM",
//           "latitude": 24.82959739,
//           "longitude": 67.13268094,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "10:00 AM",
//           "latitude": 24.90604786,
//           "longitude": 67.02425454,
//           "area": "Nazimabad"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-141",
//       "locationUpdates": [
//         {
//           "date": "11/12/2024",
//           "time": "8:00 AM",
//           "latitude": 24.90069956,
//           "longitude": 67.02150311,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "9:00 AM",
//           "latitude": 24.89862262,
//           "longitude": 67.02794277,
//           "area": "Nazimabad"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-142",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "6:00 AM",
//           "latitude": 24.91711637,
//           "longitude": 67.10201845,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "7:00 AM",
//           "latitude": 24.86245856,
//           "longitude": 67.00194416,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "8:00 AM",
//           "latitude": 24.82212663,
//           "longitude": 67.0255176,
//           "area": "DHA"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "9:00 AM",
//           "latitude": 24.87785843,
//           "longitude": 67.18662232,
//           "area": "Malir"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "10:00 AM",
//           "latitude": 24.80416888,
//           "longitude": 67.02747299,
//           "area": "DHA"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-143",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "8:00 AM",
//           "latitude": 24.91548736,
//           "longitude": 67.02319828,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "9:00 AM",
//           "latitude": 24.85894648,
//           "longitude": 67.01887816,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "10:00 AM",
//           "latitude": 24.90995443,
//           "longitude": 67.03955701,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "11:00 AM",
//           "latitude": 24.8770046,
//           "longitude": 67.20130309,
//           "area": "Malir"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "12:00 PM",
//           "latitude": 24.86157908,
//           "longitude": 67.01387997,
//           "area": "Saddar"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-144",
//       "locationUpdates": [
//         {
//           "date": "11/13/2024",
//           "time": "8:00 AM",
//           "latitude": 24.86967568,
//           "longitude": 67.19819327,
//           "area": "Malir"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "9:00 AM",
//           "latitude": 24.90083544,
//           "longitude": 67.02855984,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "10:00 AM",
//           "latitude": 24.81982495,
//           "longitude": 67.03496339,
//           "area": "DHA"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "11:00 AM",
//           "latitude": 24.88234663,
//           "longitude": 67.19183397,
//           "area": "Malir"
//         },
//         {
//           "date": "11/13/2024",
//           "time": "12:00 PM",
//           "latitude": 24.87524584,
//           "longitude": 67.19286806,
//           "area": "Malir"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-145",
//       "locationUpdates": [
//         {
//           "date": "11/12/2024",
//           "time": "6:00 AM",
//           "latitude": 24.81738879,
//           "longitude": 67.02782457,
//           "area": "DHA"
//         },
//         {
//           "date": "11/12/2024",
//           "time": "7:00 AM",
//           "latitude": 24.91364301,
//           "longitude": 67.10039349,
//           "area": "Gulshan-e-Iqbal"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-146",
//       "locationUpdates": [
//         {
//           "date": "11/11/2024",
//           "time": "6:00 AM",
//           "latitude": 24.82785943,
//           "longitude": 67.13864619,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/11/2024",
//           "time": "7:00 AM",
//           "latitude": 24.86615867,
//           "longitude": 67.00839989,
//           "area": "Saddar"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-147",
//       "locationUpdates": [
//         {
//           "date": "11/15/2024",
//           "time": "8:00 AM",
//           "latitude": 24.8969307,
//           "longitude": 67.02667719,
//           "area": "Nazimabad"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "9:00 AM",
//           "latitude": 24.90882943,
//           "longitude": 67.09478548,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/15/2024",
//           "time": "10:00 AM",
//           "latitude": 24.81044375,
//           "longitude": 67.02736733,
//           "area": "Clifton"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-148",
//       "locationUpdates": [
//         {
//           "date": "11/11/2024",
//           "time": "10:00 AM",
//           "latitude": 24.87396354,
//           "longitude": 67.19749552,
//           "area": "Malir"
//         },
//         {
//           "date": "11/11/2024",
//           "time": "11:00 AM",
//           "latitude": 24.86847756,
//           "longitude": 67.01350169,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/11/2024",
//           "time": "12:00 PM",
//           "latitude": 24.81775196,
//           "longitude": 67.02507726,
//           "area": "DHA"
//         },
//         {
//           "date": "11/11/2024",
//           "time": "1:00 PM",
//           "latitude": 24.82745486,
//           "longitude": 67.12461528,
//           "area": "Korangi"
//         },
//         {
//           "date": "11/11/2024",
//           "time": "2:00 PM",
//           "latitude": 24.8746846,
//           "longitude": 67.19324539,
//           "area": "Malir"
//         }
//       ]
//     },
//     {
//       "vehicleNumber": "BAV-149",
//       "locationUpdates": [
//         {
//           "date": "11/14/2024",
//           "time": "8:00 AM",
//           "latitude": 24.86386235,
//           "longitude": 67.00070209,
//           "area": "Saddar"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "9:00 AM",
//           "latitude": 24.81116359,
//           "longitude": 67.04552883,
//           "area": "Clifton"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "10:00 AM",
//           "latitude": 24.87864803,
//           "longitude": 67.19505908,
//           "area": "Malir"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "11:00 AM",
//           "latitude": 24.92780651,
//           "longitude": 67.08871284,
//           "area": "Gulshan-e-Iqbal"
//         },
//         {
//           "date": "11/14/2024",
//           "time": "12:00 PM",
//           "latitude": 24.88566241,
//           "longitude": 67.19596155,
//           "area": "Malir"
//         }
//       ]
//     }
//   ]