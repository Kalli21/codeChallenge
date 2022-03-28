export interface TeamInterface {
  id: number;
  school: string;
  mascot: string;
  abbreviation: string;
  alt_name1?: any;
  alt_name2: string;
  alt_name3: string;
  conference: string;
  division: string;
  color: string;
  alt_color: string;
  logos: string[];
  location: Location;
}

interface Location {
  venue_id: number;
  name: string;
  city: string;
  state: string;
  zip: string;
  country_code: string;
  timezone: string;
  latitude: number;
  longitude: number;
  elevation: string;
  capacity: number;
  year_constructed: number;
  grass: boolean;
  dome: boolean;
}