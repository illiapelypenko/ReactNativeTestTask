import { ACTION_TYPES } from '../actions/actions';
import reducer, { initialState } from './reducer';

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

describe('reducer', () => {
  it('return initial state', () => {
    expect(reducer(undefined, {type: ''})).toEqual(initialState)
  });

  it('handles FETCH_POSTS', () => {
    expect(reducer(undefined, {
      type: ACTION_TYPES.FETCH_POSTS,
      payload: posts
    })).toEqual({...initialState, posts});
  });

  it('handles FETCH_USERS', () => {
    expect(reducer(undefined, {
      type: ACTION_TYPES.FETCH_USERS,
      payload: users
    })).toEqual({...initialState, users});
  });

  it('handles FETCH_COMMENTS', () => {
    expect(reducer(undefined, {
      type: ACTION_TYPES.FETCH_COMMENTS,
      payload: comments
    })).toEqual({...initialState, comments});
  });

  it('handles SET_FETCH_ERROR', () => {
    expect(reducer(undefined, {
      type: ACTION_TYPES.SET_FETCH_ERROR,
    })).toEqual({...initialState, isError: true});
  });
})