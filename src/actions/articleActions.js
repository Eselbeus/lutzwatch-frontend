

const loadArticles = (articles) => ({ type: "LOAD_ARTICLES", payload: articles})

const newArticle = (article) => ({type: "POST_ARTICLE", payload: article})

export const getArticles = () => {
  return (dispatch) => {
    return fetch("https://localhost:3001/articles")
      .then(res => res.json())
      .then(res => dispatch(loadArticles(res)))
  }
}

export const postArticle = (id, config) => {
  return (dispatch) => {
    return fetch(`https://localhost:3001/articles/`, config)
      .then(res => res.json())
      .then(res => {
        dispatch(newArticle(res))
      })
  }
}
