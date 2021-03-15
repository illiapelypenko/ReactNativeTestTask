import React from 'react';
import { FlatList, View } from 'react-native';
import fetchMock from 'fetch-mock';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { TestWrapper } from '../../testUtils/wrapper';
import { PostList } from '../../components/PostList/PostList';
import App from '../../App';
import {
  BASE_URL,
  POSTS_PATHNAME,
  USERS_PATHNAME,
  COMMENTS_PATHNAME,
} from '../../constants/api';

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
];

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
];

const comments = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body:
      'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body:
      'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
];

const headers = { 'content-type': 'application/json' };

describe('Screen 1', () => {
  test('renders', () => {
    const Component = () => (
      <View>
        <PostList posts={posts} />
      </View>
    );

    const app = <TestWrapper Component={Component} />;

    const { toJSON } = render(app);

    expect(toJSON()).toMatchSnapshot();
  });

  test('navigates to Screen 2 on post press', () => {
    const Component = () => (
      <View>
        <PostList posts={posts} />
      </View>
    );

    const app = <TestWrapper Component={Component} />;

    const { getByText } = render(app);

    const post = getByText(posts[0].title);

    fireEvent(post, 'press');

    const screenDetailsHeader = getByText('Post details');

    expect(screenDetailsHeader).toBeTruthy();
  });

  test('whole app navigation', async () => {
    fetchMock.mock(BASE_URL + POSTS_PATHNAME, {
      body: posts,
      headers,
    });
    fetchMock.mock(BASE_URL + USERS_PATHNAME, {
      body: users,
      headers,
    });
    fetchMock.mock(BASE_URL + COMMENTS_PATHNAME, {
      body: comments,
      headers,
    });

    const { findByText, getByText } = render(<App />);

    const post = await findByText(posts[0].title);

    fireEvent(post, 'press');

    const screenDetailsHeader = getByText('Post details');

    expect(screenDetailsHeader).toBeTruthy();
  });
});
