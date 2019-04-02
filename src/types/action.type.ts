export type Action<P> = {
  type: string,
  payload?: P
}

export function createAction<P>(type: string, payload?: P): Action<P> {
  return ({ type, payload })
}
