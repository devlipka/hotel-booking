

let initialState = {
  urainianСities: [
    { city: 'Kharkiv', id: 'ukraine1' },
    { city: 'Kyev', id: 'ukraine2' },
    { city: 'Donetsk', id: 'ukraine3' },
    { city: 'Luhansk', id: 'ukraine4' },
    { city: 'Vinnytsia', id: 'ukraine5' },
    { city: 'Zhytomyr', id: 'ukraine6' },
    { city: 'Kirovohrad', id: 'ukraine7' },
    { city: 'Lutsk', id: 'ukraine8' },
    { city: 'Lviv', id: 'ukraine9' },
    { city: 'Odesa', id: 'ukraine10' },
  ],
  worldCities: [
    { city: 'Paris', id: 'world1' },
    { city: 'Riga', id: 'world2' },
    { city: 'Kharkiv', id: 'world3' },
    { city: 'Kharkiv', id: 'world4' },
    { city: 'Kharkiv', id: 'world5' },
    { city: 'Kharkiv', id: 'world6' },
    { city: 'Kharkiv', id: 'world7' },
    { city: 'Kharkiv', id: 'world8' },
    { city: 'Kharkiv', id: 'world9' },
    { city: 'Kharkiv', id: 'world10' },
  ],
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};

export default citiesReducer;
