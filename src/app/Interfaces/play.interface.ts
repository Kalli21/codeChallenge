export interface PlayInterface {
  id: string;
  offense: string;
  offense_conference: string;
  defense: string;
  defense_conference: string;
  home: string;
  away: string;
  offense_score: number;
  defense_score: number;
  game_id: number;
  drive_id: string;
  drive_number: number;
  play_number: number;
  period: number;
  clock: Clock;
  offense_timeouts?: any;
  defense_timeouts?: any;
  yard_line: number;
  yards_to_goal: number;
  down: number;
  distance: number;
  scoring: boolean;
  yards_gained: number;
  play_type: string;
  play_text: string;
  ppa: string;
  wallclock?: any;
}

interface Clock {
  minutes: number;
  seconds: number;
}