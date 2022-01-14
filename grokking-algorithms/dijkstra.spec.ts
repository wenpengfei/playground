import { dijkstra } from './dijkstra'

const graph: Graph = {}
graph['a'] = ['b', 'c']
graph['b'] = ['d']
graph['c'] = ['b', 'd']

const weight = {
  a: {
    b: 14,
    c: 1
  },
  b: {
    d: 5
  },
  c: {
    b: 2,
    d: 13
  }
}

test('', () => {
  dijkstra(graph, weight)
})
