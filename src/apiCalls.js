export const getAllCities = () => {
  return fetch(`https://softwhere-api.herokuapp.com/cities`)
    .then(response => response.json())
}

export const getSingleCity = (id) => {
  return fetch(`https://softwhere-api.herokuapp.com/cities/${id}`)
    .then(response => response.json())
}

export const checkError = (response) => {
  if (!response.ok) {
    throw new Error (
      "Sorry...something went wrong with the server"
    )
  } else {
    return response.json()
  }
}