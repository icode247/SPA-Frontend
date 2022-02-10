<template>
  <div class="container">
    <div class="row mt-1">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Account</th>
            <th scope="col">Description</th>
            <th scope="col">Reference</th>
            <th scope="col">Currency</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Status</th>
            <th scope="col">TransactionDate</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">UpdatedAt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ getTransaction.id }}</td>
            <td>{{ getTransaction.account }}</td>
            <td>{{ getTransaction.description }}</td>
            <td>{{ getTransaction.reference }}</td>
            <td>{{ getTransaction.currency }}</td>
            <td>{{ getTransaction.amount }}</td>
            <td>{{ getTransaction.category }}</td>
            <td>{{ getTransaction.status }}</td>
            <td>{{ getTransaction.transactionsDate }}</td>
            <td>{{ getTransaction.createdAt }}</td>
            <td>{{ getTransaction.updatedAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      getTransaction: [],
      id: this.$route.params.id,
    };
  },
  apollo: {
    getTransaction: {
      query: gql`
        query GetTransactionById($id: String!) {
          getTransaction(id: $id) {
            id
            account
            amount
            description
            reference
            category
            currency
            status
            transactionsDate
            createdAt
            updatedAt
          }
        }
      `,
      variables() {
        return {
          id: this.id,
        };
      },
    },
  },
};
</script>
