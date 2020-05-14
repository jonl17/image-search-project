const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response)
  }
  return response
}

export const search = async (url) => {
  await fetch(url)
    .then(handleErrors)
    .then(resp => { return resp.json() })
    .catch(err => console.log(err))
}