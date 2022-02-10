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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transition in getTransactions" :key="transition.id">
            <td>{{ transition.id }}</td>
            <td>{{ transition.account }}</td>
            <td>{{ transition.description }}</td>
            <td>{{ transition.reference }}</td>
            <td>{{ transition.currency }}</td>
            <td>{{ transition.amount }}</td>
            <td>{{ transition.category }}</td>
            <td>{{ transition.status }}</td>
            <td>{{ transition.transactionDate }}</td>
            <td>{{ transition.createdAt }}</td>
            <td>{{ transition.updatedAt }}</td>
            <td>
              <router-link
                :to="{ name: 'detail', params: { id: transition.id } }"
                >Details</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  apollo: {
    getTransactions: {
      query: gql`
        query {
          getTransactions {
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
    },
  },
  data() {
    return {
      getTransactions: [],
    };
  },
};
</script>
