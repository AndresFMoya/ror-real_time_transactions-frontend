import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const USERS = gql`
query {
  users {
    id
    email
    username
  }
}
`;

const NEW_USER = gql`
  subscription {
    newUser {
      id
      username
      email
    }
  }
`;

const UsersContainer = () => {
  const subscribeToNewUsers = subscribeToMore => {
    subscribeToMore({
      document: NEW_USER,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const { newUser } = subscriptionData.data;

        return {
          ...prev,
          users: [...prev.users, newUser],
          __typename: prev.users.__typename,
        };
      },
    });
  };

  return (
    <Query query={USERS}>
      {({
        loading, error, data, subscribeToMore,
      }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error</div>;

        subscribeToNewUsers(subscribeToMore);

        const usersToRender = data.users;

        return (
          <div>
            <h2>Users</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {usersToRender.map(user => (
                  <tr key={`user__${user.id}`}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }}
    </Query>
  );
};

export default UsersContainer;
