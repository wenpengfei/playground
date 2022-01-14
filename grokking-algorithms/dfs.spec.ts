import { dfs } from './dfs'

test('is success 1', () => {
  const graph: Graph = {}
  graph['me'] = ['a', 'b', 'c']
  graph['a'] = ['d', 'e']
  const result = dfs(graph, 'me')
  expect(result).toEqual(['me', 'c', 'b', 'a', 'e', 'd'])
})

test('is success 2', () => {
  const graph: Graph = {}
  graph['me'] = ['a', 'b', 'c']
  graph['a'] = ['d', 'e']
  graph['b'] = ['f', 'g']
  const result = dfs(graph, 'me')
  expect(result).toEqual(['me', 'c', 'b', 'g', 'f', 'a', 'e', 'd'])
})
