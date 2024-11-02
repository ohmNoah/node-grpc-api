// Original file: proto/service.proto


export interface AllGroupBy {
  'male'?: (number);
  'female'?: (number);
  'ageRange'?: (string);
  'hair'?: ({[key: string]: number});
  'addressUser'?: ({[key: string]: string});
}

export interface AllGroupBy__Output {
  'male': (number);
  'female': (number);
  'ageRange': (string);
  'hair': ({[key: string]: number});
  'addressUser': ({[key: string]: string});
}
