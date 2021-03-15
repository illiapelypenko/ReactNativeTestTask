import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'
import { ACTION_TYPES, fetchPosts, fetchUsers, fetchComments } from './actions';
import { BASE_URL, POSTS_PATHNAME, USERS_PATHNAME, COMMENTS_PATHNAME } from '../../constants/api';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const posts = [
  {
    userId: 1,
    id: 1,
    title: 'title1',
    body: 'body1',
  },
  {
    userId: 2,
    id: 2,
    title: 'title2',
    body: 'body2',
  },
];

const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
    },
    {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
    "lat": "-43.9509",
    "lng": "-34.4618"
    }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
    "name": "Deckow-Crist",
    "catchPhrase": "Proactive didactic contingency",
    "bs": "synergize scalable supply-chains"
    }
    },
];

const comments = [
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
];

const headers = { 'content-type': 'application/json' };

describe('async actions', () => {
  it('fetch actions', async () => {
    fetchMock.mock(BASE_URL + COMMENTS_PATHNAME, {
      body: comments,
      headers,
    });

    fetchMock.mock(BASE_URL + POSTS_PATHNAME, {
      body: posts,
      headers,
    });

    fetchMock.mock(BASE_URL + USERS_PATHNAME, {
      body: users,
      headers,
    });

    const expectedActions = [
      { type: ACTION_TYPES.FETCH_POSTS, payload: posts },
      { type: ACTION_TYPES.FETCH_USERS, payload: users },
      { type: ACTION_TYPES.FETCH_COMMENTS, payload: comments },
    ];

    const store = mockStore({ posts: [], users: [], comments: [] });

    await store.dispatch(fetchPosts());
    await store.dispatch(fetchUsers());
    await store.dispatch(fetchComments());

    expect(store.getActions()).toEqual(expectedActions);
  });
})