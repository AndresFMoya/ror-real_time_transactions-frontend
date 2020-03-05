import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import GroupForm from './groupForm';

const GROUPS = gql`
query {
  groups {
    id
    name
    description
  }
}
`;

const NEW_GROUP = gql`
  subscription {
    newGroup {
      id
      name
      description
    }
  }
`;

const GroupsContainer = () => {
  const subscribeToNewGroups = subscribeToMore => {
    subscribeToMore({
      document: NEW_GROUP,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const { newGroup } = subscriptionData.data;

        return {
          ...prev,
          groups: [...prev.groups, newGroup],
          __typename: prev.groups.__typename,
        };
      },
    });
  };

  return (
    <Query query={GROUPS}>
      {({
        loading, error, data, subscribeToMore,
      }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error</div>;

        subscribeToNewGroups(subscribeToMore);

        const groupsToRender = data.groups;

        return (
          <div>
            <h2>Groups</h2>
            <GroupForm />
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {groupsToRender.map(group => (
                  <tr key={`user__${group.id}`}>
                    <td>{group.id}</td>
                    <td>{group.name}</td>
                    <td>{group.description}</td>
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

export default GroupsContainer;
