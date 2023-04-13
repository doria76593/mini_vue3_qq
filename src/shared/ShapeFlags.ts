export const enum ShapeFlags {
  ELEMENT = 1, // 0001 1
  STATEFUL_COMPONENT = 1 << 1, // 0010 2
  TEXT_CHILDREN = 1 << 2, // 0100 4
  ARRAY_CHILDREN = 1 << 3, // 1000 8
  SLOT_CHILDREN = 1 << 4,
}

// 按位或（|）有1个为1 则为1
// 0001
// 0100
// =0101=4+1=5

// 0001
// 1000
// 1001=8+1=9

// 0010
// 0100
// 0110=4+2=6

// 0010
// 1000
// 1010=8+2=10

// 按位与（&）两个都是1 则为1
// shapeFlag & ShapeFlags.ELEMENT
// shapeFlag & ShapeFlags.STATEFUL_COMPONENT
// 0101
// 0001
// 0001=1

// 0101
// 0010
// 0000=0
