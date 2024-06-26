type SupportedEdgeUnit = 'px' | 'vw' | 'vh' | '%'
type EdgeUnit = `${number}${SupportedEdgeUnit}`
type NamedEdges = 'start' | 'end' | 'center'
type EdgeString = NamedEdges | EdgeUnit | `${number}`
type Edge = EdgeString | number
type ProgressIntersection = [number, number]
type Intersection = `${Edge} ${Edge}`
type ScrollOffset = Array<Edge | Intersection | ProgressIntersection>
interface ScrollInfoOptions {
  container?: HTMLElement
  target?: Element
  axis?: 'x' | 'y'
  offset?: ScrollOffset
  smooth?: number
}
