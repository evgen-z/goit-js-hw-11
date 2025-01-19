export const searchPixabay = searchQuery => {
  const searchParams = new URLSearchParams({
    key: '529440-adfab00ac2bbbc69c0a669d95',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: '18',
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(error);
    }

    return response.json();
  });
};
