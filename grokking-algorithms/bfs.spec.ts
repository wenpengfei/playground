import { bfs } from './bfs'

test('is equal 1', () => {
  const graph: Graph = {}
  graph['me'] = ['a', 'b', 'c']
  graph['a'] = ['d', 'e']
  const result = bfs(graph, 'me')
  expect(result).toEqual(['me', 'a', 'b', 'c', 'd', 'e'])
})

test('is equal 2', () => {
  const graph: Graph = {}
  graph['a'] = ['b']
  graph['b'] = ['a']
  const result = bfs(graph, 'a')
  expect(result).toEqual(['a', 'b'])
})
