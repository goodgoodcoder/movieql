const grace = {
  name: "Grace",
  age: 21,
  gender: "female"
}

const resolvers = {
  Query: {
    person: () => grace
  }
}

export default resolvers