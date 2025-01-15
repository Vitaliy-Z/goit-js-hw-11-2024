const searchHendler = query => {
  const searchParams = new URLSearchParams({
    key: '19040716-d2ab54626dacf9b7f6f91612a',
    q: query,
    per_page: 18,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => data.hits);
};

export default searchHendler;
