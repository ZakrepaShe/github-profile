export const api = (token) => ({
  getUsers: () => fetch(`https://api.github.com/users`).then(res => res.json()),
  getSingleUser: user => fetch(`https://api.github.com/users/${user}`).then(res => res.json()),
  getFollowers: user => fetch(`https://api.github.com/users/${user}/followers`).then(res => res.json()),
  getFollowing: user => fetch(`https://api.github.com/users/${user}/following`).then(res => res.json()),
  patchSingleUser: params => fetch(`https://api.github.com/user?access_token=${token}`, {
    method: 'PATCH',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
});