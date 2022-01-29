type PathWeight = {
  [key: string]: {
    [key: string]: number
  }
}

type Graph = Record<string, string[]>

type DijkstraModel = {
  node: string
  visited: boolean
  costs: number
  parentNode: string
}

export const getCurrentModel = (dijkstraModels: DijkstraModel[]): DijkstraModel => {
  const [currentModel] = dijkstraModels
    .filter((item) => !item.visited)
    .sort((first, second) => first.costs - second.costs)
  return currentModel
}

export const dijkstra = (graph: Graph, weight: PathWeight) => {
  const dijkstraModels: DijkstraModel[] = [
    { node: 'a', visited: false, costs: 0, parentNode: '' },
    { node: 'b', visited: false, costs: Infinity, parentNode: '' },
    { node: 'c', visited: false, costs: Infinity, parentNode: '' },
    { node: 'd', visited: false, costs: Infinity, parentNode: '' }
  ]

  let currentDijkstraModel = getCurrentModel(dijkstraModels)

  while (currentDijkstraModel) {
    const neighbors = graph[currentDijkstraModel.node]

    if (neighbors?.length > 0) {
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i]
        for (let j = 0; j < dijkstraModels.length; j++) {
          const dijkstraModel = dijkstraModels[j]
          // 找到当前对象
          if (dijkstraModel.node === neighbor) {
            // 计算变更父节点后的花费
            const currentCost = currentDijkstraModel.costs + weight[currentDijkstraModel.node][neighbor]
            // 如果比之前的花费更少 就更新 parent 和 cost
            if (dijkstraModel.costs > currentCost) {
              dijkstraModel.costs = currentCost
              dijkstraModel.parentNode = currentDijkstraModel.node
            }
          }
        }
      }
    }
    currentDijkstraModel.visited = true
    currentDijkstraModel = getCurrentModel(dijkstraModels)
  }
}
