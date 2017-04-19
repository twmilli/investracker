import io from 'socket.io-client';

let socket = null;

export const addStockMiddleware = (store) => {
  return next => action => {
    const result = next(action);
    if (socket && action.meta.remote && !action.fromRemote){
      socket.emit('action', action);
    }

    return result;
  };
}

export default function (store){
  const path = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3001/'
  socket = io.connect(path);
  socket.on('action', action => {
    action.fromRemote = true;
    store.dispatch(action);
  });
}
