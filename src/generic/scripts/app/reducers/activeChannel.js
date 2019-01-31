import { CHANGE_CHANNEL } from '../constants/ActionTypes';

const initialState = {
  name: 'Tracking Room 1',
  id: 0
};

export default function activeChannel(state = initialState, action) {
  switch (action.type) {
  case CHANGE_CHANNEL:
    return {
      name: action.channel.name,
      id: action.channel.id
    };

  default:
    return state;
  }
}
