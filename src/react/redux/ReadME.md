## action creator

`action creator`用于生成`action`，通常用于存放数据处理逻辑，并返回一个对象。

```
export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})
```

当某个操作要发送多个`action`，即需要在一个函数中写多个`dispatch`时，官方推荐使用`redux-thunk`，它支持`action creator`返回函数。以向服务器取数据为例，它要发出三种 Action：

```
{ type: 'FETCH_POSTS_REQUEST' }
{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }
```

action creator:

```
const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit))
  return new Promise(resolve => {
    fetch(subreddit)
  }).then((response) =>
    dispatch(
      receivePosts(subreddit,response)
    )
  )
}
```
