import {
  // state
  POLL,
  NEW_POLL,
  LOADED_POLLS,

  // mutations
  CREATE_POLL,
  SET_LOADED_POLLS,
  SET_LOADED_POLL,

  // actions
  ACTION_LOAD_POLL,
  ACTION_LOAD_POLLS,
  ACTION_CREATE_POLL,
  
  // getters
  GET_LOADED_POLLS,
  GET_LOADED_POLL,
  GET_POLL,
} from "./types";

export const mutations = {
  [CREATE_POLL](state, payload) {
    state[NEW_POLL] = payload;
  },
  [SET_LOADED_POLLS](state, payload) {
    state[LOADED_POLLS] = payload;
  },
  [SET_LOADED_POLL](state, payload) {
    state[POLL] = payload;
  }
};

export const state = () => ({
  [POLL]: '',
  [NEW_POLL]: {},
  [LOADED_POLLS]: [],
});

export const actions = {
  async [ACTION_LOAD_POLL] ({commit}, id) {
    if (!id) return;
    await this.$fire.firestore.collection('polls').doc(id).get().then((doc) => {
      let id = doc.id
      let data = doc.data()
      let res = {id, ...data}
      commit('SET_LOADED_POLL', res)  
    })
  },
  async [ACTION_LOAD_POLLS] ({commit, getters}) {
    
    const user = this.$fire.auth.currentUser
    if (!user) return;
    const query = await this.$fire.firestore.collection('polls')
          .where("creatorId", "==", user.uid).get()
    const polls = []
    if (query.size > 0) {
      for (const doc of query.docs) {
        let id = doc.id
        let data = doc.data()
        polls.push({
          id,
          question: data.question,
          choices: data.choices,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          // imageUrl: obj[key].imageUrl,
          // imageName: obj[key].imageName,
          expireAt: data.expireAt,
          userId: data.userId
        })
      }
    }
    commit('SET_LOADED_POLLS', polls)
  
  },
  async [ACTION_CREATE_POLL]({commit, getters}, payload) {
    const user = this.$fire.auth.currentUser
    const newPoll = {
      question: payload.question,
      choices: payload.choices,
      createdAt: payload.createdAt,
      updatedAt: payload.updatedAt,
      expireAt: payload.expireAt,
      userId: user.uid
    }
  this.$fire.firestore.collection('polls').add(newPoll)
      .then((doc) => {
          const id = doc.id
          const data = doc.data()
          commit('CREATE_POLL', { id, ...data })
      }).catch(error => {
          console.log(error)
      })
  },
};

export const getters = {
  [GET_LOADED_POLLS](state) {
    if (!state[LOADED_POLLS]) return false;

    return state[LOADED_POLLS];
  },
  [GET_LOADED_POLL](state, pollId) {
    if (!state[LOADED_POLLS] || !pollId) return false;

    return (pollId) => {
      return state[LOADED_POLLS].find((poll) => {
        return poll.id == pollId
      })
    }
  },
  [GET_POLL](state) {
    if (!state[POLL]) return "";

    return state[POLL];
  }
};

