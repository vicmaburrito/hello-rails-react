import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { thingReducer } from '../redux/things/things';

const Things = () => {
  // const dispatch = useDispatch();
  // const loadThingAction = bindActionCreators(loadThing, dispatch);
  const { messages, loading } = useSelector((state) => state.thingReducer);

  // useEffect(() => {
  //   loadThingAction();
  //   return () => null;
  // }, []);
  console.log(messages);

  return (
    <div className="container">
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <span className="mt-5 h3 font-weight-bold">Loading...</span>
        </div>
      ) : (

        messages.map((thing) => (
          <div key={thing.id}>
            <h2>

              {thing.message}
            </h2>
          </div>
        ))
      )}
    </div>
  );
};

export default Things;