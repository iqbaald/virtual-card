// Graf dalam bentuk representasi adjacency list
const graph = {
  Surabaya: {
    Jakarta: 700,
    Bandung: 750,
    Semarang: 400,
    Yogyakarta: 525,
    Banyuwangi: 275,
  },
  Jakarta: { Bandung: 150, Semarang: 450, Yogyakarta: 550, Banyuwangi: 850 },
  Bandung: { Semarang: 400, Yogyakarta: 475, Banyuwangi: 800 },
  Semarang: { Yogyakarta: 125, Banyuwangi: 575 },
  Yogyakarta: { Banyuwangi: 700 },
  Banyuwangi: {},
};

function hillClimbing(currentNode, goalNode) {
  let currentPath = [currentNode];
  let totalCost = 0;

  while (currentNode !== goalNode) {
    const neighbors = graph[currentNode];
    let nextNode = null;
    let minCost = Infinity;

    // Mencari node dengan biaya terkecil (hill climbing)
    for (const [neighbor, cost] of Object.entries(neighbors)) {
      if (cost < minCost && !currentPath.includes(neighbor)) {
        nextNode = neighbor;
        minCost = cost;
      }
    }

    // Jika tidak ada node tetangga yang lebih murah, berhenti
    if (nextNode === null) {
      break;
    }

    // Lanjutkan ke node tetangga yang lebih murah
    currentPath.push(nextNode);
    totalCost += minCost;
    currentNode = nextNode;
  }

  return { path: currentPath, cost: totalCost };
}

// Contoh pemanggilan
const startNode = "Surabaya";
const goalNode = "Jakarta";
const { path, cost } = hillClimbing(startNode, goalNode);
console.log(`Jalur terpendek dari ${startNode} ke ${goalNode} : ${path}`);
console.log(`Total jarak: ${cost} km`);
