export interface IBook {
  name: string;
  iconName: string;
}
export interface IStateBookingRoom {
  totalContent: IBook[];
  room: number;
  adult: number;
  child: number;
}
export interface IPropsRoomsAdultsChild {
  contentIcon: string;
  contentName: string;
  roomCount: number;
  childCount: number;
  adultCount: number;
  decrementButton: (
    name: string,
    roomCount: number,
    adultCount: number,
    childCount: number
  ) => void;
  incrementButton: (
    name: string,
    roomCount: number,
    adultCount: number,
    childCount: number
  ) => void;
}
export interface IPropsIcons {
  name: string;
  onClick: () => void;
}
