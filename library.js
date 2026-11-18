const RAW=`Arrays & Hashing|Traversal and State;Frequency Maps;Set Membership;Index as Hash;Majority Voting
Two Pointers|Opposite Ends;Same Direction;Read Write;Fast Slow;K Sum Reduction
Sliding Window|Fixed Window;Variable Window;Frequency Window;Exactly K Transform;Monotonic Deque Window
Prefix & Suffix|Prefix Sum;Prefix Hash Map;Prefix Modulo;Prefix Suffix Products;Difference Array
Binary Search|Classic Search;Bounds Search;Binary Search on Answer;Rotated Search;Peak and Mountain
Sorting & Selection|Merge Sort;Quick Sort;Counting and Bucket;Three Way Partition;Quickselect
Intervals|Merge Intervals;Insert and Intersect;Interval Scheduling;Meeting Rooms;Sweep Line
Stacks|Delimiter Stack;Monotonic Stack;Histogram Stack;Expression Stack;Design Stack
Queues & Deques|Queue Simulation;Circular Queue;Monotonic Queue;Multi Source Queue;Priority Queue
Linked Lists|Dummy Node;Fast Slow Pointers;In Place Reversal;Merge Lists;Cache List Design
Trees|DFS Traversals;BFS Views;Path Problems;Tree Construction;Lowest Common Ancestor
Binary Search Trees|BST Invariant;BST Operations;Order Statistics;BST Iterator;BST Transformations
Heaps|Top K;K Way Merge;Two Heaps Median;Frequency Heap;Greedy Heap
Tries|Prefix Trie;Wildcard Trie;Reversed Trie;Bitwise Trie;Trie with DFS
String Algorithms|KMP;Z Algorithm;Rolling Hash;Palindrome Algorithms;Suffix Structures
Recursion & Divide Conquer|Recursive State;Divide and Combine;Fast Exponentiation;Merge Counting;Meet in the Middle
Backtracking|Subsets;Combinations;Permutations;Constraint Search;Grid Search
Graph Traversal|DFS;BFS;Connected Components;Cycle Detection;Bipartite Coloring
Topological & DAG|Kahn Topological Sort;DFS Topological Sort;DAG DP;Dependency Scheduling;Alien Ordering
Union Find|DSU Core;Connectivity;Cycle Edge;Weighted DSU;Rollback DSU
Shortest Paths|Unweighted BFS;Zero One BFS;Dijkstra;Bellman Ford;Floyd Warshall
Minimum Spanning Tree|Kruskal;Prim;Boruvka;Second Best MST;Manhattan MST
Advanced Graphs|Bridges;Articulation Points;Strong Components;Eulerian Path;Network Flow
Greedy|Interval Greedy;Reachability Greedy;Scheduling Greedy;Exchange Argument;Lexicographic Greedy
Dynamic Programming|Linear DP;Knapsack DP;Sequence DP;String DP;Interval DP
Advanced DP|Tree DP;Digit DP;Bitmask DP;Game DP;DP Optimizations
Range Query Structures|Fenwick Tree;Segment Tree;Sparse Table;Sqrt Decomposition;Mo Algorithm
Bit Manipulation|Bit Basics;XOR Patterns;Mask Enumeration;Bitset Optimization;Binary Trie
Math & Number Theory|GCD and LCM;Prime Sieve;Modular Arithmetic;Combinatorics;Matrix Exponentiation
Matrix & Grid|Matrix Simulation;Flood Fill;Grid BFS;Grid DP;Two Dimensional Prefix
Design & Streams|LRU and LFU;Streaming Median;Rate Limiter;Randomized Set;File System Design
Advanced Competitive|Heavy Light Decomposition;Centroid Decomposition;Persistent Structures;Small to Large;Game Theory`;
const MICRO=['Standard form','Space optimized form','Counting form','Constraint driven form'];let seq=0;
const GUIDE={
'Sliding Window':['Maintain a contiguous range while updating state incrementally.','Contiguous longest/shortest range, fixed K, frequency or budget.','Window state is valid or can be repaired by moving left.','Expand right → update → shrink when needed → record answer.','Arbitrary negatives, stale counts, wrong update order.','Usually O(n).'],
'Two Pointers':['Use two indices whose movement eliminates impossible choices.','Sorted input, pairs, boundaries, in-place edits.','Everything outside the pointer range is decided.','Set pointer roles → prove movement → update → stop.','Wrong movement, duplicates, off-by-one.','Usually O(n), O(1) space.'],
'Binary Search':['Discard half of a monotonic search space.','Sorted order, first/last valid, monotonic feasibility.','Answer stays inside the current bounds.','Define predicate → safe mid → discard proven half.','Mixed bound conventions, infinite loops.','O(log n) or O(check × log range).'],
'Dynamic Programming':['Reuse solutions to overlapping states.','Optimal/counting choices with limited state.','Every state has one precise meaning.','State → transition → base → order → optimize.','Vague states, wrong order, bad initialization.','States × transitions.'],
'default':['Use the invariant to reduce repeated work.','Constraints and data shape match this technique.','Maintained state stays valid after every step.','Define state → process → preserve invariant → return.','Boundaries, duplicates, stale state.','Derive from operations.']};
function note(f,s,m=''){let g=GUIDE[f]||GUIDE.default;return{summary:`${s}${m?` using ${m.toLowerCase()}`:''}. ${g[0]}`,recognition:g[1],invariant:g[2],steps:g[3],pitfalls:g[4],complexity:g[5],quick:`Recognise → state invariant → apply ${s} → verify boundaries.`}}
export function createLibrary(){seq=0;let out=[];for(const line of RAW.split('\n')){let[f,ss]=line.split('|'),fid='lf'+(++seq);out.push({id:fid,name:f,parentId:null,kind:'family',workspace:'library',notes:note(f,f),archived:false});for(const s of ss.split(';')){let sid='ls'+(++seq);out.push({id:sid,name:s,parentId:fid,kind:'subpattern',workspace:'library',notes:note(f,s),archived:false});for(const m of MICRO)out.push({id:'lm'+(++seq),name:`${s}: ${m}`,parentId:sid,kind:'micro',workspace:'library',notes:note(f,s,m),archived:false})}}return out}
