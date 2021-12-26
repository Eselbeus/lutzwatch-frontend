const loadPodcasts = (podcasts) => ({ type: "LOAD_PODCASTS", payload: podcasts})

const newPodcast = (podcast) => ({type: "POST_PODCAST", payload: podcast})

export const removePodcast = (id) => ({type: "DELETE_PODCAST", payload: id})

export const getPodcasts = () => {
  return (dispatch) => {
    return fetch("https://locahost:3001/podcasts")
      .then(res => res.json())
      .then(res => dispatch(loadPodcasts(res)))
  }
}

export const postPodcast = (id, config) => {
  return (dispatch) => {
    return fetch(`https://localhost:3001/podcasts/`, config)
      .then(res => res.json())
      .then(res => {
        dispatch(newPodcast(res))
      })
  }
}

export const deletePodcast = (id, config) => {
  removePodcast(id)
  return (dispatch) => {
    return fetch(`https://localhost:3001/podcasts/${id}`, config)
  }
}
